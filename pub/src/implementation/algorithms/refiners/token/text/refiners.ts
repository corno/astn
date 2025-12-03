import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _out from "../../../../../interface/generated/pareto/schemas/token/data_types/target"

import * as _parse_result from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"

import { Characters_Iterator, is_control_character } from "./iterator"

import { $$ as op_from_character_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/from_character_list"
import { $$ as op_parse_hexadecimal } from "pareto-standard-operations/dist/implementation/algorithms/integer/hexadecimal/deserializer"

//this file contains the tokenizer functionality, each function return a type from the 'token' schema

import * as sh from "../../../../../shorthands/parse_result"

const temp_get_current_character = ($: Characters_Iterator): number | null => {
    return $['get current']().transform(
        ($) => $,
        () => null
    )
}

export const Whitespace = (
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Whitespace => {

    const start = iterator['get state']().location
    return {
        'value': op_from_character_list(_ea.build_list<number>(($i) => {
            while (true) {
                {
                    const $ = temp_get_current_character(iterator)
                    if ($ === null) {
                        return
                    }
                    if (is_control_character($)) {
                        return abort(sh.lexer_error(
                            ['unexpected control character', $],
                            {
                                'start': iterator['get state']().location,
                                'end': iterator['get state']().location,
                            }
                        ))

                    }
                    switch ($) {
                        case 0x09: // \t
                            iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x0A: // \n
                            iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x0D: // \r
                            iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x20: // space
                            iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x2C: // ,
                            iterator['consume']()
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
            'end': iterator['get state']().location,
        }
    }
}

export const Trivia = (
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Trivia => {

    return {
        'leading whitespace': Whitespace(iterator, abort),
        'comments': _ea.build_list(($i) => {
            while (true) {
                const $ = temp_get_current_character(iterator)
                if ($ === null) {
                    return //normal end of input
                }
                switch ($) {
                    case 0x2F: // /
                        const start = iterator['get state']().location
                        const next_char = iterator['look ahead'](1).transform(
                            ($) => $,
                            () => null
                        )
                        if (next_char === null) {
                            const start = iterator['get state']().location
                            iterator['consume']()
                            const end = iterator['get state']().location
                            return abort(sh.lexer_error(
                                ['dangling slash', null],
                                {
                                    'start': start,
                                    'end': end
                                }
                            ))
                        }
                        switch (next_char) {
                            case 0x2F: // /
                                iterator['consume']() // consume the first /
                                iterator['consume']() // consume the second /
                                const Character = {
                                    line_feed: 0x0A,            // \n
                                    carriage_return: 0x0D,      // \r
                                    solidus: 0x2F,              // /
                                }
                                $i['add element']({
                                    'type': ['line', null],
                                    'content': op_from_character_list(_ea.build_list(($i) => {
                                        while (true) {
                                            const $ = temp_get_current_character(iterator)
                                            if ($ === null) {
                                                return
                                            }
                                            switch ($) {
                                                case Character.line_feed:
                                                    return
                                                case Character.carriage_return:
                                                    return
                                                default:
                                                    iterator['consume']()
                                                    $i['add element']($)
                                            }
                                        }
                                    })),
                                    'range': {
                                        'start': start,
                                        'end': iterator['get state']().location,
                                    },
                                    'trailing whitespace': Whitespace(iterator, abort)
                                })
                                break
                            case 0x2A: {// *
                                iterator['consume']() // consume the first /
                                iterator['consume']() // consume the asterisk
                                $i['add element']({
                                    'type': ['block', null],
                                    'content': op_from_character_list(_ea.build_list(($i) => {
                                        let found_asterisk = false
                                        const Character = {
                                            solidus: 0x2F,              // /
                                            asterisk: 0x2A,             // *
                                        }
                                        while (true) {
                                            const $ = temp_get_current_character(iterator)
                                            if ($ === null) {
                                                return abort(sh.lexer_error(
                                                    ['unterminated block comment', null],
                                                    {
                                                        'start': start,
                                                        'end': iterator['get state']().location
                                                    }
                                                ))
                                            }
                                            if ($ === Character.solidus && found_asterisk) {
                                                iterator['consume']() // consume the solidus
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
                                            iterator['consume']()
                                        }
                                    })),
                                    'range': {
                                        'start': start,
                                        'end': iterator['get state']().location,
                                    },
                                    'trailing whitespace': Whitespace(iterator, abort)
                                })
                                break
                            }
                            default:
                                return abort(sh.lexer_error(
                                    ['dangling slash', null],
                                    {
                                        'start': start,
                                        'end': iterator['get state']().location
                                    }
                                ))
                        }
                        break
                    default:
                        return
                }
            }
        })
    }
}

export const Annotated_Token = (
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Annotated_Token => {
    const WhitespaceChars = {
        tab: 0x09,                  // \t
        line_feed: 0x0A,            // \n
        carriage_return: 0x0D,      // \r
        space: 0x20,                //
        comma: 0x2C,                // ,
    }

    const $ = temp_get_current_character(iterator)
    if ($ === null) {
        return abort(sh.lexer_error(
            ['unexpected end of input', null],
            {
                'start': iterator['get state']().location,
                'end': iterator['get state']().location,
            }
        ))
    }
    return {
        'start': iterator['get state']().location,
        'type': _ea.block((): _out.Token_Type => {

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
                    iterator['consume']()
                    return ['{', null]
                case Character.open_bracket:
                    iterator['consume']()
                    return ['[', null]
                case Character.open_angle_bracket:
                    iterator['consume']()
                    return ['<', null]
                case Character.open_paren:
                    iterator['consume']()
                    return ['(', null]


                case Character.close_brace:
                    iterator['consume']()
                    return ['}', null]
                case Character.close_bracket:
                    iterator['consume']()
                    return [']', null]
                case Character.close_angle_bracket:
                    iterator['consume']()
                    return ['>', null]
                case Character.close_paren:
                    iterator['consume']()
                    return [')', null]

                //individuals
                case Character.hash:
                    iterator['consume']()
                    return ['#', null] // missing data token
                case Character.pipe:
                    iterator['consume']()
                    return ['|', null] // state value token
                case Character.tilde:
                    iterator['consume']()
                    return ['~', null] // unset value token
                case Character.asterisk:
                    iterator['consume']()
                    return ['*', null] // set value token
                case Character.at:
                    iterator['consume']()
                    return ['@', null] // include token
                case Character.bang:
                    iterator['consume']()
                    return ['!', null] // header token
                case Character.colon:
                    iterator['consume']()
                    return [':', null]
                case Character.quotation_mark:
                    iterator['consume']()
                    return ['string', {
                        'value': Delimited_String(($) => $ === Character.quotation_mark, true, iterator, abort),
                        'type': ['quoted', null],
                    }]
                case Character.backtick:
                    iterator['consume']()
                    return ['string', {
                        'value': Delimited_String(($) => $ === Character.backtick, false, iterator, abort),
                        'type': ['backticked', null],
                    }]
                case Character.apostrophe:
                    iterator['consume']()
                    return ['string', {
                        'value': Delimited_String(($) => $ === Character.apostrophe, false, iterator, abort),
                        'type': ['apostrophed', null],
                    }]

                default:
                    return ['string', {
                        'type': ['undelimited', null],
                        'value': op_from_character_list(_ea.build_list(($i) => {
                            while (true) {
                                const $ = temp_get_current_character(iterator)
                                if ($ === null) {
                                    return
                                }

                                if (is_control_character($)) {
                                    return abort(sh.lexer_error(
                                        ['unexpected control character', $],
                                        {
                                            'start': iterator['get state']().location,
                                            'end': iterator['get state']().location,
                                        }
                                    ))

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
                                iterator['consume']()
                                $i['add element']($)
                            }
                        })),
                    }]
            }
        }),
        'end': iterator['get state']().location,
        'trailing trivia': Trivia(iterator, abort),
    }
}

export const Delimited_String = (
    is_end_character: (character: number) => boolean,
    allow_newlines: boolean,
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Delimited_String => {

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
    const start = iterator['get state']().location
    const txt = op_from_character_list(_ea.build_list(($i) => {
        while (true) {
            const $ = temp_get_current_character(iterator)
            if ($ === null) {

                return abort(sh.lexer_error(
                    ['unterminated string', null],
                    {
                        'start': start,
                        'end': iterator['get state']().location
                    }
                ))
            }
            if (is_control_character($)) {
                return abort(sh.lexer_error(
                    ['unexpected control character', $],
                    {
                        'start': iterator['get state']().location,
                        'end': iterator['get state']().location,
                    }
                ))

            }
            if (is_end_character($)) {
                iterator['consume']() // consume the end character
                return
            }
            switch ($) {
                case Character.line_feed:
                case Character.carriage_return:
                    if (!allow_newlines) {
                        return abort(sh.lexer_error(
                            ['unexpected end of line in delimited string', null],
                            {
                                'start': start,
                                'end': iterator['get state']().location
                            }
                        ))
                    }
                    iterator['consume']()
                    $i['add element']($)
                    break
                case Character.reverse_solidus: // \ (escape)
                    iterator['consume']()
                    {
                        const $ = temp_get_current_character(iterator)
                        if ($ === null) {
                            return abort(sh.lexer_error(
                                ['missing character after escape', null],
                                {
                                    'start': start,
                                    'end': iterator['get state']().location
                                }
                            ))
                        }
                        switch ($) {
                            case Character.quotation_mark:
                                iterator['consume']()
                                $i['add element'](Character.quotation_mark)
                                break
                            case Character.apostrophe:
                                iterator['consume']()
                                $i['add element'](Character.apostrophe)
                                break
                            case Character.backtick:
                                iterator['consume']()
                                $i['add element'](Character.backtick)
                                break
                            case Character.reverse_solidus:
                                iterator['consume']()
                                $i['add element'](Character.reverse_solidus)
                                break
                            case Character.solidus:
                                iterator['consume']()
                                $i['add element'](Character.solidus)
                                break
                            case Character.b:
                                iterator['consume']()
                                $i['add element'](Character.backspace)
                                break
                            case Character.f:
                                iterator['consume']()
                                $i['add element'](Character.form_feed)
                                break
                            case Character.n:
                                iterator['consume']()
                                $i['add element'](Character.line_feed)
                                break
                            case Character.r:
                                iterator['consume']()
                                $i['add element'](Character.carriage_return)
                                break
                            case Character.t:
                                iterator['consume']()
                                $i['add element'](Character.tab)
                                break
                            case Character.u:
                                iterator['consume']()
                                $i['add element'](op_parse_hexadecimal(
                                    op_from_character_list((_ea.build_list(($i) => {
                                        const get_char = () => {
                                            const char = temp_get_current_character(iterator)
                                            if (char === null) {
                                                return abort(sh.lexer_error(
                                                    ['unterminated unicode escape sequence', null],
                                                    {
                                                        'start': start,
                                                        'end': iterator['get state']().location
                                                    }
                                                ))
                                            }
                                            if (char < Character.a || (char > Character.f && char < Character.A) || char > Character.F || char < 0x30 || char > 0x39) {
                                                return abort(sh.lexer_error(
                                                    ['invalid unicode escape sequence', null],
                                                    {
                                                        'start': start,
                                                        'end': iterator['get state']().location
                                                    }
                                                ))
                                            }
                                            iterator['consume']()
                                            return char
                                        }
                                        $i['add element'](get_char())
                                        $i['add element'](get_char())
                                        $i['add element'](get_char())
                                        $i['add element'](get_char())
                                    }))),
                                    () => _ea.deprecated_panic("IMPLEMENT ME")
                                ))
                                break
                            default:
                                return abort(sh.lexer_error(
                                    ['unknown escape character', null],
                                    {
                                        'start': start,
                                        'end': iterator['get state']().location
                                    }
                                ))
                        }
                    }
                    break
                default:
                    iterator['consume']()
                    $i['add element']($)
            }
        }
    }))
    return txt
}

export const Tokenizer_Result = (
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Tokenizer_Result => {
    return {
        'leading trivia': Trivia(iterator, abort),
        'tokens': _ea.build_list<_out.Annotated_Token>($i => {
            while (temp_get_current_character(iterator) !== null) {

                const token = Annotated_Token(iterator, abort)
                $i['add element'](token)
            }
        }),
        'end': iterator['get state']().location
    }
}