import * as _ea from 'exupery-core-alg' 
import * as _et from 'exupery-core-types'

import * as _out from "../../../../../interface/generated/pareto/core/token"

import { String_Iterator } from "./string_iterator"
import { throw_lexer_error } from "./astn_parse_generic"
import { is_control_character } from './string_iterator'

import { $$ as op_from_character_list } from "pareto-standard-operations/dist/implementation/operations/impure/text/from_character_list"
import { $$ as op_parse_hexadecimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/hexadecimal"

//this file contains the tokenizer functionality, each functoin return a type from the 'token' schema

const WhitespaceChars = {
    tab: 0x09,                  // \t
    line_feed: 0x0A,            // \n
    carriage_return: 0x0D,      // \r
    space: 0x20,                //
    comma: 0x2C,                // ,
}


export const Whitespace = (string_iterator: String_Iterator): _out._T_Whitespace => {

    const start = string_iterator['create location info']()
    return {
        'value': op_from_character_list(_ea.build_list<number>(($i) => {
            while (true) {


                {
                    const $ = string_iterator['get current character']()
                    if ($ === null) {
                        return
                    }
                    if (is_control_character($)) {
                        throw_lexer_error(
                             ['unexpected control character', $],
                            {
                                'start': string_iterator['create location info'](),
                                'end': string_iterator['create location info'](),
                            }
                        )

                    }
                    switch ($) {
                        case 0x09: // \t
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case 0x0A: // \n
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case 0x0D: // \r
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case 0x20: // space
                            string_iterator['consume character']()
                            $i['add element']($)
                            break
                        case 0x2C: // ,
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

export const Trivia = (string_iterator: String_Iterator): _out._T_Trivia => {

    return {
        'leading whitespace': Whitespace(string_iterator),
        'comments': _ea.build_list(($i) => {
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
                            return throw_lexer_error(
                                ['dangling slash', null],
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
                                    'content': op_from_character_list(_ea.build_list(($i) => {
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
                                    'trailing whitespace': Whitespace(string_iterator)
                                })
                                break
                            case 0x2A: {// *
                                string_iterator['consume character']() // consume the first /
                                string_iterator['consume character']() // consume the asterisk
                                $i['add element']({
                                    'type': ['block', null],
                                    'content': op_from_character_list(_ea.build_list(($i) => {
                                        let found_asterisk = false
                                        const Character = {
                                            solidus: 0x2F,              // /
                                            asterisk: 0x2A,             // *
                                        }
                                        while (true) {
                                            const $ = string_iterator['get current character']()
                                            if ($ === null) {
                                                return throw_lexer_error(
                                                    ['unterminated block comment', null],
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
                                    'trailing whitespace': Whitespace(string_iterator)
                                })
                                break
                            }
                            default:
                                return throw_lexer_error(
                                     ['dangling slash', null],
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

export const Annotated_Token = (st: String_Iterator): _out._T_Annotated_Token => {
    const $ = st['get current character']()
    if ($ === null) {
        return throw_lexer_error(
            ['unexpected end of input', null],
            {
                'start': st['create location info'](),
                'end': st['create location info'](),
            }
        )
    }
    return {
        'start': st['create location info'](),
        'type': _ea.block((): _out._T_Token_Type => {

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
                pipe: 0x7C,                // |
                quotation_mark: 0x22,       // "
                slash: 0x2F,               // /
                tilde: 0x7E,               // ~
                hash: 0x23,                // #

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
                case Character.hash:
                    st['consume character']()
                    return ['#', null]
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
                case Character.quotation_mark:
                    st['consume character']()
                    return ['string', {
                        'value': Delimited_String(st, ($) => $ === Character.quotation_mark, true),
                        'type': ['quoted', null],
                    }]
                case Character.backtick:
                    st['consume character']()
                    return ['string', {
                        'value': Delimited_String(st, ($) => $ === Character.backtick, false),
                        'type': ['backticked', null],
                    }]
                case Character.apostrophe:
                    st['consume character']()
                    return ['string', {
                        'value': Delimited_String(st, ($) => $ === Character.apostrophe, false),
                        'type': ['apostrophed', null],
                    }]

                default:
                    return ['string', {
                        'type': ['undelimited', null],
                        'value': op_from_character_list(_ea.build_list(($i) => {
                            while (true) {
                                const $ = st['get current character']()
                                if ($ === null) {
                                    return
                                }

                                if (is_control_character($)) {
                                    throw_lexer_error(
                                         ['unexpected control character', $],
                                        {
                                            'start': st['create location info'](),
                                            'end': st['create location info'](),
                                        }
                                    )

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
                                    $ === Character.pipe ||
                                    $ === Character.quotation_mark ||
                                    $ === Character.slash ||
                                    $ === Character.tilde ||
                                    $ === WhitespaceChars.comma ||
                                    $ === WhitespaceChars.space ||
                                    $ === WhitespaceChars.tab ||
                                    $ === WhitespaceChars.line_feed ||
                                    $ === WhitespaceChars.carriage_return
                                ) {
                                    return
                                }
                                st['consume character']()
                                $i['add element']($)
                            }
                        })),
                    }]
            }
        }),
        'end': st['create location info'](),
        'trailing trivia': Trivia(st)
    }
}

export const Delimited_String = (string_iterator: String_Iterator, is_end_character: (character: number) => boolean, allow_newlines: boolean): _out._T_Delimited_String => {

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
    const txt = op_from_character_list(_ea.build_list(($i) => {
        while (true) {
            const $ = string_iterator['get current character']()
            if ($ === null) {

                return throw_lexer_error(
                    ['unterminated string', null],
                    {
                        'start': start,
                        'end': string_iterator['create location info']()
                    }
                )
            }
            if (is_control_character($)) {
                throw_lexer_error(
                    ['unexpected control character', $],
                    {
                        'start': string_iterator['create location info'](),
                        'end': string_iterator['create location info'](),
                    }
                )

            }
            if (is_end_character($)) {
                string_iterator['consume character']() // consume the end character
                return
            }
            switch ($) {
                case Character.line_feed:
                case Character.carriage_return:
                    if (!allow_newlines) {
                        return throw_lexer_error(
                             ['unexpected end of line in delimited string', null],
                            {
                                'start': start,
                                'end': string_iterator['create location info']()
                            }
                        )
                    }
                    string_iterator['consume character']()
                    $i['add element']($)
                    break
                case Character.reverse_solidus: // \ (escape)
                    string_iterator['consume character']()
                    {
                        const $ = string_iterator['get current character']()
                        if ($ === null) {
                            return throw_lexer_error(
                                ['missing character after escape', null],
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
                            case Character.apostrophe:
                                string_iterator['consume character']()
                                $i['add element'](Character.apostrophe)
                                break
                            case Character.backtick:
                                string_iterator['consume character']()
                                $i['add element'](Character.backtick)
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
                                string_iterator['consume character']()
                                $i['add element'](Character.line_feed)
                                break
                            case Character.r:
                                string_iterator['consume character']()
                                $i['add element'](Character.carriage_return)
                                break
                            case Character.t:
                                string_iterator['consume character']()
                                $i['add element'](Character.tab)
                                break
                            case Character.u:
                                string_iterator['consume character']()
                                $i['add element'](op_parse_hexadecimal(op_from_character_list((_ea.build_list(($i) => {
                                    const get_char = () => {
                                        const char = string_iterator['get current character']()
                                        if (char === null) {
                                            return throw_lexer_error(
                                                ['unterminated unicode escape sequence', null],
                                                {
                                                    'start': start,
                                                    'end': string_iterator['create location info']()
                                                }
                                            )
                                        }
                                        if (char < Character.a || (char > Character.f && char < Character.A) || char > Character.F || char < 0x30 || char > 0x39) {
                                            return throw_lexer_error(
                                                ['invalid unicode escape sequence', null],
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
                                }))), () => _ea.deprecated_panic('unreachable')))
                                break
                            default:
                                return throw_lexer_error(
                                     ['unknown escape character', null],
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

export const Tokenizer_Result = (
    $: null,
    $p: {
        'string iterator': String_Iterator
    }
): _out._T_Tokenizer_Result => {
    return {
        'leading trivia': Trivia($p['string iterator']),
        'tokens': _ea.build_list<_out._T_Annotated_Token>($i => {
            while ($p['string iterator']['get current character']() !== null) {

                const token = Annotated_Token($p['string iterator'])
                $i['add element'](token)
            }
        }),
        'end': $p['string iterator']['create location info']()
    }
}