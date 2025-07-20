import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as types from "./types"


export type Parse_Error_Type =
    | ['lexer',
        | ['unexpected control character', number]
        | ['missing character after escape', null]
        | ['unexpected end of line in delimited string', null]
        | ['unexpected character', number]
        | ['unterminated string', null]
        | ['unterminated block comment', null]
        | ['unterminated unicode escape sequence', null]
        | ['invalid unicode escape sequence', null]
        | ['unknown escape character', null]
        | ['unexpected end of input', null]
        | ['dangling slash', null]
    ]
    | ['parser',
        | ['unexpected end of input', null]
        | ['unexpected token', {
            'found': Lexer.Token_Type
            'expected': _et.Array<string>
        }]
    ]

export type Parse_Error = {
    'type': Parse_Error_Type
    'location': _et.Optional_Value<types.Location>
}

const throw_parse_error = (
    type: Parse_Error_Type,
    location: _et.Optional_Value<types.Location>
): never => {
    throw new _ea.Error<Parse_Error>({
        'type': type,
        'location': location
    })
}

const throw_unexpected_token = (
    found: Lexer.Annotated_Token,
    expected: _et.Array<string>,
): never => {
    return throw_parse_error(
        ['parser', ['unexpected token', {
            'found': found.type,
            'expected': expected
        }]],
        _ea.set(found.annotation.location)
    )
}

export namespace Lexer {

    export type Annotated_Token = {
        readonly 'annotation': types.Structural_Token
        readonly 'trailing trivia': types.Trivia
        readonly 'type': Token_Type
    }

    export type Token_Type =
        | readonly ['{', null]
        | readonly ['}', null]
        | readonly ['[', null]
        | readonly [']', null]
        | readonly ['(', null]
        | readonly [')', null]
        | readonly ['<', null]
        | readonly ['>', null]

        | readonly ['!', null]
        | readonly ['@', null]
        | readonly ['~', null]
        | readonly ['*', null]
        | readonly [',', null]
        | readonly [':', null]
        | readonly ['|', null]

        | readonly ['string', types.String_Core]

    export type Tokenizer_Result = {
        readonly 'leading trivia': types.Trivia
        readonly 'tokens': _et.Array<Annotated_Token>
    }

    export type String_Iterator = {

        'consume character': () => void
        'consume string': ($: string) => void
        /**
         * returns the current character, or null if the end of the string has been reached.
         * equivalent to `look ahead(0)`
         */
        'get current character': () => number | null
        'look ahead': ($: number) => number | null
        'create offset location info': (subtract: number) => types.Location
        'create location info': () => types.Location
        'create location info string': () => string
        /**
         * if no non-whitespace character has been found yet on the current line,
         * this will return the current character offset,
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

    const parse_whitespace = (string_iterator: String_Iterator): types.Whitespace => {
        return {
            'start': string_iterator['create location info'](),
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
            'end': string_iterator['create location info'](),
        }
    }

    const parse_trivia = (string_iterator: String_Iterator): types.Trivia => {

        return {
            'start': string_iterator['create location info'](),
            'leading whitespace': parse_whitespace(string_iterator),
            'comments': _ea.pure.list.build(($i) => {
                while (true) {
                    const $ = string_iterator['get current character']()
                    if ($ === null) {
                        return //normal end of input
                    }
                    switch ($) {
                        case 0x2F: // /
                            const next_char = string_iterator['look ahead'](1)
                            if (next_char === null) {
                                return throw_parse_error(
                                    ['lexer', ['dangling slash', null]],
                                    _ea.set(string_iterator['create location info']())
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
                                        'begin': string_iterator['create location info'](),
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
                                        'end': string_iterator['create location info'](),
                                        'trailing whitespace': parse_whitespace(string_iterator)
                                    })
                                    break
                                case 0x2A: // *
                                    string_iterator['consume character']() // consume the first /
                                    string_iterator['consume character']() // consume the asterisk
                                    $i['add element']({
                                        'type': ['block', null],
                                        'begin': string_iterator['create location info'](),
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
                                                        _ea.set(string_iterator['create location info']())
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
                                        'end': string_iterator['create location info'](),
                                        'trailing whitespace': parse_whitespace(string_iterator)
                                    })
                                    break
                                default:
                                    return throw_parse_error(
                                        ['lexer', ['dangling slash', null]],
                                        _ea.set(string_iterator['create location info']())
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


    const parse_delimited_string = (string_iterator: String_Iterator, end_reached: (character: number) => boolean, allow_newlines: boolean): string => {

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

        const txt = _ea.impure.text['from character list'](_ea.pure.list.build(($i) => {
            while (true) {
                const $ = string_iterator['get current character']()
                if ($ === null) {

                    return throw_parse_error(
                        ['lexer', ['unterminated string', null]],
                        _ea.set(string_iterator['create location info']())
                    )
                }
                if (end_reached($)) {
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
                                    _ea.set(string_iterator['create location info']())
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
                                            _ea.set(string_iterator['create location info']())
                                        )
                                    }
                                    string_iterator['consume character']()
                                    $i['add element'](Character.line_feed)
                                    break
                                case Character.r:
                                    if (allow_newlines) {
                                        return throw_parse_error(
                                            ['lexer', ['unexpected end of line in delimited string', null]],
                                            _ea.set(string_iterator['create location info']())
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
                                                    _ea.not_set()
                                                )
                                            }
                                            if (char < Character.a || (char > Character.f && char < Character.A) || char > Character.F || char < 0x30 || char > 0x39) {
                                                return throw_parse_error(
                                                    ['lexer', ['invalid unicode escape sequence', null]],
                                                    _ea.set(string_iterator['create location info']())
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
                                        _ea.set(string_iterator['create location info']())
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
     * while keeping track of line numbers, character offsets, and line indentation.
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
            'character offset': number
            'line indentation': number | null
        }

        let found_carriage_return_before = false
        let position = 0
        let relative_position: Relative_Position_Information = {
            'line': 0,
            'character offset': 0,
            'line indentation': null
        }

        const consume_character = () => {
            const c = characters.__get_element_at(position)
            // check for control characters
            c.map(
                ($) => {
                    if ($ < 0x20 && $ !== Whitespace.tab && $ !== Whitespace.line_feed && $ !== Whitespace.carriage_return) {
                        throw_parse_error(
                            ['lexer', ['unexpected control character', $]],
                            _ea.set({
                                'absolute': position,
                                'relative': {
                                    'line': relative_position.line,
                                    'column': relative_position['character offset'],
                                }
                            })
                        )
                    }
                },
            )
            relative_position = c.transform(
                ($) => {
                    return $ === Whitespace.line_feed
                        ? {
                            'line': relative_position.line + 1,
                            'character offset': 0,
                            'line indentation': null,
                        }
                        : found_carriage_return_before
                            ? {
                                'line': relative_position.line + 1,
                                'character offset': 0,
                                'line indentation': null,
                            }
                            : {
                                'line': relative_position.line,
                                'character offset': relative_position['character offset'] + ($ === Whitespace.tab
                                    ? $p['tab size']
                                    : 1),
                                'line indentation': relative_position['line indentation'] !== null
                                    ? relative_position['line indentation']
                                    : $ === Whitespace.space || $ === Whitespace.tab
                                        ? null
                                        : relative_position['character offset'],
                            }
                },
                () => relative_position //this is weird, we were already at the end of the list
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
                        'column': relative_position['character offset'],
                    }
                }
            },
            'create offset location info': (subtract) => {
                return {
                    'absolute': position - subtract,
                    'relative': {
                        'line': relative_position.line,
                        'column': relative_position['character offset'] - subtract,
                    }
                }
            },
            'create location info string': () => `${relative_position.line}:${relative_position['character offset']}`,
            'get line indentation': () => {
                return relative_position['line indentation'] !== null
                    ? relative_position['line indentation']
                    : relative_position['character offset']
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

    export const Annotated_Token = (st: String_Iterator): Annotated_Token => {
        const $ = st['get current character']()
        if ($ === null) {
            return throw_parse_error(
                ['lexer', ['unexpected end of input', null]],
                _ea.not_set()
            )
        }
        return {
            'annotation': {
                'trivia': parse_trivia(st),
                'location': st['create location info']()
            },
            'type': _ea.block((): Token_Type => {

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
                            'end': _ea.block(() => {
                                st['consume character']()
                                return st['create location info']()
                            })
                        }]
                    case Character.backtick:
                        st['consume character']()
                        return ['string', {
                            'value': parse_delimited_string(st, ($) => $ === Character.backtick, false),
                            'type': ['backticked', null],
                            'end': _ea.block(() => {
                                st['consume character']()
                                return st['create location info']()
                            })
                        }]
                    case Character.apostrophe:
                        st['consume character']()
                        return ['string', {
                            'value': parse_delimited_string(st, ($) => $ === Character.apostrophe, false),
                            'type': ['apostrophed', null],
                            'end': _ea.block(() => {
                                st['consume character']()
                                return st['create location info']()
                            })
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
                            'end': st['create location info']()
                        }]
                }
            }),
            'trailing trivia': parse_trivia(st)
        }
    }


    export const Tokenizer_Result = (
        $: null,
        $p: {
            'string iterator': String_Iterator
        }
    ): Tokenizer_Result => {
        return {
            'leading trivia': parse_trivia($p['string iterator']),
            'tokens': _ea.pure.list.build<Annotated_Token>($i => {
                while ($p['string iterator']['get current character']() !== null) {

                    const token = Annotated_Token($p['string iterator'])
                    $i['add element'](token)
                }
            })
        }
    }
}

export namespace Parser {
    export type Token_Iterator = {
        'get required token': () => Lexer.Annotated_Token,
        'consume token': () => void,
    }

    export const create_token_iterator = ($: _et.Array<Lexer.Annotated_Token>): Token_Iterator => {
        let position = 0
        return {
            'get required token': (): Lexer.Annotated_Token => {
                return $.__get_element_at(position).transform(
                    ($) => $,
                    () => throw_parse_error(
                        ['parser', ['unexpected end of input', null]],
                        _ea.not_set())
                )
            },
            'consume token': () => {
                position += 1
            },
        }
    }

    export namespace type_parsers {

        export const Document = (token_iterator: Token_Iterator): types.Document => {
            return {
                'header': _ea.block(() => {
                    const token = token_iterator['get required token']()
                    if (token.type[0] !== '!') {
                        return _ea.not_set()
                    }
                    token_iterator['consume token']()
                    return _ea.set({
                        '!': token.annotation,
                        'value': Value(token_iterator)
                    })
                }),
                'content': Value(token_iterator)
            }
        }

        export const Elements = (token_iterator: Token_Iterator, end_reached: ($: Lexer.Token_Type) => boolean): types.Elements => {
            return _ea.pure.list.build<types.Element>(($i): void => {
                while (true) {
                    const current_token = token_iterator['get required token']()
                    if (end_reached(current_token.type)) {
                        return
                    }
                    $i['add element']({
                        'value': Value(token_iterator),
                        ',': _ea.block(() => {
                            const current_token = token_iterator['get required token']()
                            if (current_token.type[0] !== ',') {
                                return _ea.not_set()
                            }
                            token_iterator['consume token']()
                            return _ea.set(current_token.annotation)
                        })
                    })
                }
            })
        }

        export const Key_Value_Pairs = (token_iterator: Token_Iterator, end_reached: ($: Lexer.Token_Type) => boolean): types.Key_Value_Pairs => {
            return _ea.pure.list.build<types.Key_Value_Pair>(($i): void => {
                while (true) {
                    const current_token = token_iterator['get required token']()
                    if (end_reached(current_token.type)) {
                        return
                    }

                    $i['add element']({
                        'key': _ea.block(() => {

                            const candidate_key = token_iterator['get required token']()
                            if (candidate_key.type[0] !== 'string') {
                                return throw_unexpected_token(candidate_key, _ea.array_literal(["string"]))
                            }
                            token_iterator['consume token']()
                            return {
                                'trivia': candidate_key.annotation.trivia,
                                'start': candidate_key.annotation.location,
                                'core': candidate_key.type[1]
                            }
                        }),
                        'value': _ea.block(() => {
                            const candidate_colon = token_iterator['get required token']()
                            if (candidate_colon.type[0] !== ':') {
                                return _ea.not_set()
                            }
                            token_iterator['consume token']()

                            return _ea.set({
                                ':': candidate_colon.annotation,
                                'value': Value(token_iterator)
                            })
                        }),
                        ',': _ea.block(() => {
                            const current_token = token_iterator['get required token']()
                            if (current_token.type[0] !== ',') {
                                return _ea.not_set()
                            }
                            token_iterator['consume token']()
                            return _ea.set(current_token.annotation)
                        })
                    })
                }
            })
        }

        export const Value = (token_iterator: Token_Iterator): types.Value => {
            const token = token_iterator['get required token']()
            return {
                'location': token.annotation.location,
                'type': _ea.cc(token.type, ($): types.Value_Type => {

                    switch ($[0]) {
                        case 'string': return _ea.ss($, ($): types.Value_Type => {
                            token_iterator['consume token']()

                            return ['string', {
                                'trivia': token.annotation.trivia,
                                'start': token.annotation.location,
                                'core': $,
                            }]
                        })
                        case '{': return _ea.ss($, ($) => {
                            token_iterator['consume token']()
                            return ['indexed collection', ['dictionary', {
                                '{': token.annotation,
                                'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === '}'),
                                '}': _ea.block(() => {
                                    const current_token = token_iterator['get required token']()
                                    token_iterator['consume token']()
                                    return current_token.annotation
                                })
                            }]]
                        })
                        case '(': return _ea.ss($, ($) => {
                            token_iterator['consume token']()
                            return ['indexed collection', ['verbose group', {
                                '(': token.annotation,
                                'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === ')'),
                                ')': _ea.block(() => {
                                    const current_token = token_iterator['get required token']()
                                    token_iterator['consume token']()
                                    return current_token.annotation
                                })
                            }]]
                        })
                        case '[': return _ea.ss($, ($): types.Value_Type => {
                            token_iterator['consume token']()
                            return ['ordered collection', ['list', {
                                '[': token.annotation,
                                'elements': Elements(token_iterator, ($) => $[0] === ']'),
                                ']': _ea.block(() => {
                                    const current_token = token_iterator['get required token']()
                                    token_iterator['consume token']()
                                    return current_token.annotation
                                }),
                            }]]
                        })
                        case '<': return _ea.ss($, ($): types.Value_Type => {
                            token_iterator['consume token']()
                            return ['ordered collection', ['concise group', {
                                '<': token.annotation,
                                'elements': Elements(token_iterator, ($) => $[0] === '>'),
                                '>': _ea.block(() => {
                                    const current_token = token_iterator['get required token']()
                                    token_iterator['consume token']()
                                    return current_token.annotation
                                }),
                            }]]
                        })
                        case '@': return _ea.ss($, ($) => {
                            token_iterator['consume token']()
                            return ['include', {
                                '@': token.annotation,
                                'path': _ea.block(() => {
                                    const current_token = token_iterator['get required token']()
                                    if (current_token.type[0] !== 'string') {
                                        return throw_unexpected_token(current_token, _ea.array_literal(["string"]))
                                    }
                                    token_iterator['consume token']()
                                    return {
                                        'trivia': current_token.annotation.trivia,
                                        'start': current_token.annotation.location,
                                        'core': current_token.type[1]
                                    }
                                })
                            }]
                        })
                        case '~': return _ea.ss($, ($) => {
                            token_iterator['consume token']()
                            return ['not set', {
                                '~': token.annotation,
                            }]
                        })
                        case '|': return _ea.ss($, ($) => {
                            token_iterator['consume token']()
                            return ['tagged value', {
                                '|': token.annotation,
                                'state': _ea.block(() => {
                                    const current_token = token_iterator['get required token']()
                                    if (current_token.type[0] !== 'string') {
                                        return throw_unexpected_token(current_token, _ea.array_literal(["string"]))
                                    }
                                    token_iterator['consume token']()
                                    return {
                                        'trivia': current_token.annotation.trivia,
                                        'start': current_token.annotation.location,
                                        'core': current_token.type[1],
                                    }
                                }),
                                'value': Value(token_iterator)
                            }]
                        })
                        case '*': return _ea.ss($, ($) => {
                            token_iterator['consume token']()
                            return ['set optional value', {
                                '*': token.annotation,
                                'value': Value(token_iterator)
                            }]
                        })

                        default:
                            //unexpected token
                            return throw_unexpected_token(token, _ea.array_literal([
                                'string', 'number', '{', '[', 'true', 'false', 'null', '}', ']'
                            ]))
                    }
                })
            }
        }

    }

    export type Parse_Result =
        | ['failure', Parse_Error]
        | ['success', types.Document]

    export const parse = (
        $: string,
        $p: {
            'tab size': number
        }
    ): Parse_Result => {
        try {
            const string_iterator = Lexer.create_string_iterator($, {
                'tab size': $p['tab size']
            })
            const tokenizer_result = Lexer.Tokenizer_Result(null, {
                'string iterator': string_iterator
            })
            // tokenizer_result.tokens.__for_each(($) => {
            //     pdev.log_debug_message(`token: ${_ea.cc($.type, ($) => {
            //         switch ($[0]) {
            //             case 'string': return _ea.ss($, ($) => `string: ${$.value.value}`)
            //             default: return `structural: ${$[0]}`
            //         }
            //     })}`)
            // })
            const token_iterator = create_token_iterator(tokenizer_result.tokens)
            return ['success', Parser.type_parsers.Document(token_iterator)]

        } catch (error) {
            if (error instanceof _ea.Error) {
                const parse_error: Parse_Error = error.type //this has to be the case
                return ['failure', parse_error]
            }
            return _ea.panic("unknown error thrown")
        }
    }
}