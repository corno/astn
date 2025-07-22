import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as ast from "../generated/interface/schemas/ast/resolved"
import * as parse_result from "../generated/interface/schemas/parse_result/resolved"


export const throw_parse_error = (
    type: parse_result.Parse_Error._type,
    range: ast.Range
): never => {
    throw new _ea.Error<parse_result.Parse_Error>({
        'type': type,
        'range': range
    })
}

export const throw_unexpected_token = (
    found: parse_result.Annotated_Token,
    expected: _et.Array<parse_result.Parse_Error._type.SG.parser.expected.L>,
): never => {
    return throw_parse_error(
        ['parser', {
            'expected': expected,
            'cause': ['unexpected token', {
                'found': found.type,
            }]
        }],
        {
            'start': found.start,
            'end': found.end
        }
    )
}



type String_Iterator = {

    'consume character': () => void
    'consume string': ($: string) => void
    /**
     * returns the current character, or null if the end of the string has been reached.
     * equivalent to `look ahead(0)`
     */
    'get current character': () => number | null
    'look ahead': ($: number) => number | null
    'create offset location info': (subtract: number) => ast.Location
    'create location info': () => ast.Location
    'create location info string': () => string
    /**
     * if no non-whitespace character has been found yet on the current line,
     * this will return the current column,
     * otherwise it will return the offset of that first non-whitespace character
     * (which is the indentation of the line)
     */
    'get line indentation': () => number
    'starts with': ($: string) => boolean
}


const op = {
    'to character list': _ea.impure.text['to character list'],
    'starts with': _ea.impure.text['starts with'],
}

const parse_whitespace = (string_iterator: String_Iterator): ast.Whitespace => {
    const start = string_iterator['create location info']()
    return {
        'value': _ea.impure.text['from character list'](_ea.pure.list.build<number>(($i) => {
            while (true) {

                const Character = {
                    tab: 0x09,                  // \t
                    line_feed: 0x0A,            // \n
                    carriage_return: 0x0D,      // \r
                    space: 0x20,                //
                }

                {
                    const $ = string_iterator['get current character']()
                    if ($ === null) {
                        return
                    }
                    switch ($) {
                        case Character.tab:
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case Character.line_feed:
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case Character.carriage_return:
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case Character.space:
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        default:
                            return

                    }
                }
            }
        })),
        'range': {
            'start': start,
            'end': string_iterator['create location info'](),
        }
    }
}

const parse_trivia = (string_iterator: String_Iterator): ast.Trivia => {

    return {
        'leading whitespace': parse_whitespace(string_iterator),
        'comments': _ea.pure.list.build(($i) => {
            while (true) {
                const $ = string_iterator['get current character']()
                if ($ === null) {
                    return //normal end of input
                }
                switch ($) {
                    case 0x2F: // /
                        const start = string_iterator['create location info']()
                        const next_char = string_iterator['look ahead'](1)
                        if (next_char === null) {
                            const start = string_iterator['create location info']()
                            string_iterator['consume character']()
                            const end = string_iterator['create location info']()
                            return throw_parse_error(
                                ['lexer', ['dangling slash', null]],
                                {
                                    'start': start,
                                    'end': end
                                }
                            )
                        }
                        switch (next_char) {
                            case 0x2F: // /
                                string_iterator['consume character']() // consume the first /
                                string_iterator['consume character']() // consume the second /
                                const Character = {
                                    line_feed: 0x0A,            // \n
                                    carriage_return: 0x0D,      // \r
                                    solidus: 0x2F,              // /
                                }
                                $i['add element']({
                                    'type': ['line', null],
                                    'content': _ea.impure.text['from character list'](_ea.pure.list.build(($i) => {
                                        while (true) {
                                            const $ = string_iterator['get current character']()
                                            if ($ === null) {
                                                return
                                            }
                                            switch ($) {
                                                case Character.line_feed:
                                                    return
                                                case Character.carriage_return:
                                                    return
                                                default:
                                                    string_iterator['consume character']()
                                                    $i['add element']($)
                                            }
                                        }
                                    })),
                                    'range': {
                                        'start': start,
                                        'end': string_iterator['create location info'](),
                                    },
                                    'trailing whitespace': parse_whitespace(string_iterator)
                                })
                                break
                            case 0x2A: {// *
                                string_iterator['consume character']() // consume the first /
                                string_iterator['consume character']() // consume the asterisk
                                $i['add element']({
                                    'type': ['block', null],
                                    'content': _ea.impure.text['from character list'](_ea.pure.list.build(($i) => {
                                        let found_asterisk = false
                                        const Character = {
                                            solidus: 0x2F,              // /
                                            asterisk: 0x2A,             // *
                                        }
                                        while (true) {
                                            const $ = string_iterator['get current character']()
                                            if ($ === null) {
                                                return throw_parse_error(
                                                    ['lexer', ['unterminated block comment', null]],
                                                    {
                                                        'start': start,
                                                        'end': string_iterator['create location info']()
                                                    }
                                                )
                                            }
                                            if ($ === Character.solidus && found_asterisk) {
                                                string_iterator['consume character']() // consume the solidus
                                                //found asterisk before solidus, so this is the end of the comment
                                                return
                                            }
                                            //not a solidus, so this is part of the comment
                                            if (found_asterisk) {
                                                $i['add element'](Character.asterisk) // add the asterisk that was found before but was not part of the end delimiter
                                            }
                                            if ($ === Character.asterisk) {
                                                found_asterisk = true
                                            } else {
                                                $i['add element']($)
                                            }
                                            string_iterator['consume character']()
                                        }
                                    })),
                                    'range': {
                                        'start': start,
                                        'end': string_iterator['create location info'](),
                                    },
                                    'trailing whitespace': parse_whitespace(string_iterator)
                                })
                                break
                            }
                            default:
                                return throw_parse_error(
                                    ['lexer', ['dangling slash', null]],
                                    {
                                        'start': start,
                                        'end': string_iterator['create location info']()
                                    }
                                )
                        }
                        break
                    default:
                        return
                }
            }
        })
    }
}


const parse_delimited_string = (string_iterator: String_Iterator, is_end_character: (character: number) => boolean, allow_newlines: boolean): string => {

    const Character = {
        backspace: 0x08,            // \b
        form_feed: 0x0C,            // \f
        tab: 0x09,                  // \t
        line_feed: 0x0A,            // \n
        carriage_return: 0x0D,      // \r
        quotation_mark: 0x22,       // "
        backtick: 0x60,             // `
        apostrophe: 0x27,           // '
        reverse_solidus: 0x5C,      // \
        solidus: 0x2F,              // /
        a: 0x61,                    // a
        b: 0x62,                    // b
        f: 0x66,                    // f
        n: 0x6E,                    // n
        r: 0x72,                    // r
        t: 0x74,                    // t
        u: 0x75,                    // u
        A: 0x41,                    // A
        F: 0x46,                    // F

    }
    const start = string_iterator['create location info']()
    const txt = _ea.impure.text['from character list'](_ea.pure.list.build(($i) => {
        while (true) {
            const $ = string_iterator['get current character']()
            if ($ === null) {

                return throw_parse_error(
                    ['lexer', ['unterminated string', null]],
                    {
                        'start': start,
                        'end': string_iterator['create location info']()
                    }
                )
            }
            if (is_end_character($)) {
                string_iterator['consume character']() // consume the end character
                return
            }
            switch ($) {
                case Character.reverse_solidus:
                    string_iterator['consume character']()
                    {
                        const $ = string_iterator['get current character']()
                        if ($ === null) {
                            return throw_parse_error(
                                ['lexer', ['missing character after escape', null]],
                                {
                                    'start': start,
                                    'end': string_iterator['create location info']()
                                }
                            )
                        }
                        switch ($) {
                            case Character.quotation_mark:
                                string_iterator['consume character']()
                                $i['add element'](Character.quotation_mark)
                                break
                            case Character.reverse_solidus:
                                string_iterator['consume character']()
                                $i['add element'](Character.reverse_solidus)
                                break
                            case Character.solidus:
                                string_iterator['consume character']()
                                $i['add element'](Character.solidus)
                                break
                            case Character.b:
                                string_iterator['consume character']()
                                $i['add element'](Character.backspace)
                                break
                            case Character.f:
                                string_iterator['consume character']()
                                $i['add element'](Character.form_feed)
                                break
                            case Character.n:
                                if (allow_newlines) {
                                    return throw_parse_error(
                                        ['lexer', ['unexpected end of line in delimited string', null]],
                                        {
                                            'start': start,
                                            'end': string_iterator['create location info']()
                                        }
                                    )
                                }
                                string_iterator['consume character']()
                                $i['add element'](Character.line_feed)
                                break
                            case Character.r:
                                if (allow_newlines) {
                                    return throw_parse_error(
                                        ['lexer', ['unexpected end of line in delimited string', null]],
                                        {
                                            'start': start,
                                            'end': string_iterator['create location info']()
                                        }
                                    )
                                }
                                string_iterator['consume character']()
                                $i['add element'](Character.carriage_return)
                                break
                            case Character.t:
                                string_iterator['consume character']()
                                $i['add element'](Character.tab)
                                break
                            case Character.u:
                                string_iterator['consume character']()
                                $i['add element'](_ea.impure.integer['parse hexadecimal'](_ea.impure.text['from character list']((_ea.pure.list.build(($i) => {
                                    const get_char = () => {
                                        const char = string_iterator['get current character']()
                                        if (char === null) {
                                            return throw_parse_error(
                                                ['lexer', ['unterminated unicode escape sequence', null]],
                                                {
                                                    'start': start,
                                                    'end': string_iterator['create location info']()
                                                }
                                            )
                                        }
                                        if (char < Character.a || (char > Character.f && char < Character.A) || char > Character.F || char < 0x30 || char > 0x39) {
                                            return throw_parse_error(
                                                ['lexer', ['invalid unicode escape sequence', null]],
                                                {
                                                    'start': start,
                                                    'end': string_iterator['create location info']()
                                                }
                                            )
                                        }
                                        string_iterator['consume character']()
                                        return char
                                    }
                                    $i['add element'](get_char())
                                    $i['add element'](get_char())
                                    $i['add element'](get_char())
                                    $i['add element'](get_char())
                                })))))
                                break
                            default:
                                return throw_parse_error(
                                    ['lexer', ['unknown escape character', null]],
                                    {
                                        'start': start,
                                        'end': string_iterator['create location info']()
                                    }
                                )
                        }
                    }
                    break
                default:
                    string_iterator['consume character']()
                    $i['add element']($)
            }
        }
    }))
    return txt
}



const Whitespace = {
    tab: 0x09,                  // \t
    line_feed: 0x0A,            // \n
    carriage_return: 0x0D,      // \r
    space: 0x20,                //
}

/**
 * Creates a string iterator that allows iterating over characters in a string,
 * while keeping track of line numbers, columns, and line indentation.
 */

export const create_string_iterator = (
    $: string,
    $p: {
        'tab size': number
    }
): String_Iterator => {
    const source = $
    const characters = op['to character list']($)
    const length = characters.__get_length()

    type Relative_Position_Information = {
        'line': number
        'column': number
        'line indentation': number | null
    }

    let found_carriage_return_before = false
    let position = 0
    let relative_position: Relative_Position_Information = {
        'line': 0,
        'column': 0,
        'line indentation': null
    }

    const consume_character = () => {
        const c = characters.__get_element_at(position)
        const start = relative_position
        relative_position = c.transform(
            ($) => {
                return $ === Whitespace.line_feed
                    ? {
                        'line': relative_position.line + 1,
                        'column': 0,
                        'line indentation': null,
                    }
                    : found_carriage_return_before
                        ? {
                            'line': relative_position.line + 1,
                            'column': 0,
                            'line indentation': null,
                        }
                        : {
                            'line': relative_position.line,
                            'column': relative_position['column'] + ($ === Whitespace.tab
                                ? $p['tab size']
                                : 1),
                            'line indentation': relative_position['line indentation'] !== null
                                ? relative_position['line indentation']
                                : $ === Whitespace.space || $ === Whitespace.tab
                                    ? null
                                    : relative_position['column'],
                        }
            },
            () => relative_position //this is weird, we were already at the end of the list
        )
        // check for control characters
        c.map(
            ($) => {
                if ($ < 0x20 && $ !== Whitespace.tab && $ !== Whitespace.line_feed && $ !== Whitespace.carriage_return) {
                    throw_parse_error(
                        ['lexer', ['unexpected control character', $]],
                        {
                            'start': {
                                'absolute': position - 1,
                                'relative': {
                                    'line': relative_position.line,
                                    'column': relative_position['column'] - 1,
                                }
                            },
                            'end': {
                                'absolute': position,
                                'relative': {
                                    'line': relative_position.line,
                                    'column': relative_position['column'],
                                }
                            }
                        }
                    )
                }
            },
        )
        found_carriage_return_before = c.transform(
            ($) => $ === Whitespace.carriage_return,
            () => false
        )
        position += 1
    }

    return {
        'consume string': ($: string) => {
            op['to character list']($).__for_each(() => {
                consume_character()
            })
        },
        'consume character': consume_character,
        'get current character': () => {
            if (position === length) {
                return null
            }
            return characters.__get_element_at(position).transform(
                ($) => $,
                () => null
            )
        },
        'look ahead': ($: number) => {
            const next_position = position + $;
            if (next_position >= length) {
                return null
            }
            return characters.__get_element_at(next_position).transform(
                ($) => $,
                () => null
            )
        },
        'create location info': () => {
            return {
                'absolute': position,
                'relative': {
                    'line': relative_position.line,
                    'column': relative_position['column'],
                }
            }
        },
        'create offset location info': (subtract) => {
            return {
                'absolute': position - subtract,
                'relative': {
                    'line': relative_position.line,
                    'column': relative_position['column'] - subtract,
                }
            }
        },
        'create location info string': () => `${relative_position.line}:${relative_position['column']}`,
        'get line indentation': () => {
            return relative_position['line indentation'] !== null
                ? relative_position['line indentation']
                : relative_position['column']
        },
        'starts with': ($: string) => {
            return op['starts with'](
                source,
                $,
                position,
            )
        }
    }
}

export const Annotated_Token = (st: String_Iterator): parse_result.Annotated_Token => {
    const $ = st['get current character']()
    if ($ === null) {
        return throw_parse_error(
            ['lexer', ['unexpected end of input', null]],
            {
                'start': st['create location info'](),
                'end': st['create location info'](),
            }
        )
    }
    return {
        'start': st['create location info'](),
        'type': _ea.block((): parse_result.Token_Type => {

            const Character = {

                open_angle_bracket: 0x3C, // <
                open_brace: 0x7B,           // {
                open_bracket: 0x5B,         // [
                open_paren: 0x28,          // (

                close_angle_bracket: 0x3E, // >
                close_brace: 0x7D,          // }
                close_bracket: 0x5D,        // ]
                close_paren: 0x29,         // )

                apostrophe: 0x27,          // '
                asterisk: 0x2A,            // *
                at: 0x40,                  // @
                backtick: 0x60,            // `
                bang: 0x21,
                colon: 0x3A,                // :
                comma: 0x2C,                // ,
                pipe: 0x7C,                // |
                quotation_mark: 0x22,       // "
                slash: 0x2F,               // /
                tilde: 0x7E,               // ~

                space: 0x20,               // space
                tab: 0x09,                 // \t

            }
            switch ($) {
                case Character.open_brace:
                    st['consume character']()
                    return ['{', null]
                case Character.open_bracket:
                    st['consume character']()
                    return ['[', null]
                case Character.open_angle_bracket:
                    st['consume character']()
                    return ['<', null]
                case Character.open_paren:
                    st['consume character']()
                    return ['(', null]


                case Character.close_brace:
                    st['consume character']()
                    return ['}', null]
                case Character.close_bracket:
                    st['consume character']()
                    return [']', null]
                case Character.close_angle_bracket:
                    st['consume character']()
                    return ['>', null]
                case Character.close_paren:
                    st['consume character']()
                    return [')', null]

                //individuals
                case Character.pipe:
                    st['consume character']()
                    return ['|', null]
                case Character.tilde:
                    st['consume character']()
                    return ['~', null]
                case Character.asterisk:
                    st['consume character']()
                    return ['*', null]
                case Character.at:
                    st['consume character']()
                    return ['@', null]
                case Character.bang:
                    st['consume character']()
                    return ['!', null]
                case Character.colon:
                    st['consume character']()
                    return [':', null]
                case Character.comma:
                    st['consume character']()
                    return [',', null]
                case Character.quotation_mark:
                    st['consume character']()
                    return ['string', {
                        'value': parse_delimited_string(st, ($) => $ === Character.quotation_mark, true),
                        'type': ['quoted', null],
                    }]
                case Character.backtick:
                    st['consume character']()
                    return ['string', {
                        'value': parse_delimited_string(st, ($) => $ === Character.backtick, false),
                        'type': ['backticked', null],
                    }]
                case Character.apostrophe:
                    st['consume character']()
                    return ['string', {
                        'value': parse_delimited_string(st, ($) => $ === Character.apostrophe, false),
                        'type': ['apostrophed', null],
                    }]

                default:
                    return ['string', {
                        'value': _ea.impure.text['from character list'](_ea.pure.list.build(($i) => {
                            while (true) {
                                const $ = st['get current character']()
                                if ($ === null) {
                                    return
                                }
                                if (
                                    $ === Character.open_brace ||
                                    $ === Character.close_brace ||
                                    $ === Character.open_bracket ||
                                    $ === Character.close_bracket ||
                                    $ === Character.open_angle_bracket ||
                                    $ === Character.close_angle_bracket ||
                                    $ === Character.open_paren ||
                                    $ === Character.close_paren ||
                                    $ === Character.apostrophe ||
                                    $ === Character.asterisk ||
                                    $ === Character.at ||
                                    $ === Character.backtick ||
                                    $ === Character.bang ||
                                    $ === Character.colon ||
                                    $ === Character.comma ||
                                    $ === Character.pipe ||
                                    $ === Character.quotation_mark ||
                                    $ === Character.slash ||
                                    $ === Character.tilde ||
                                    $ === Whitespace.space ||
                                    $ === Whitespace.tab
                                ) {
                                    return
                                }
                                st['consume character']()
                                $i['add element']($)
                            }
                        })),
                        'type': ['undelimited', null],
                    }]
            }
        }),
        'end': st['create location info'](),
        'trailing trivia': parse_trivia(st)
    }
}


export const Tokenizer_Result = (
    $: null,
    $p: {
        'string iterator': String_Iterator
    }
): parse_result.Tokenizer_Result => {
    return {
        'leading trivia': parse_trivia($p['string iterator']),
        'tokens': _ea.pure.list.build<parse_result.Annotated_Token>($i => {
            while ($p['string iterator']['get current character']() !== null) {

                const token = Annotated_Token($p['string iterator'])
                $i['add element'](token)
            }
        }),
        'end': $p['string iterator']['create location info']()
    }
}

export type Token_Iterator = {
    'get required token': (expected: _et.Array<parse_result.Parse_Error._type.SG.parser.expected.L>) => parse_result.Annotated_Token,
    'consume token': () => void,
}


export const create_token_iterator = ($: parse_result.Tokenizer_Result): Token_Iterator => {
    let position = 0
    return {
        'get required token': (pet) => {
            return $.tokens.__get_element_at(position).transform(
                ($) => $,
                () => throw_parse_error(
                    ['parser', {
                        'expected': pet,
                        'cause': ['missing token', null]
                    }],
                    {
                        'start': $.end,
                        'end': $.end,
                    }
                )
            )
        },
        'consume token': () => {
            position += 1
        },
    }
}
