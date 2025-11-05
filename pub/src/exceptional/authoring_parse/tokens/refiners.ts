import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _out from "../../../interface/generated/pareto/schemas/token/data_types/target"

import * as _parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"

import * as c from "./context"

import { Characters_Iterator, is_control_character } from "./iterator"

import { $$ as op_from_character_list } from "exupery-standard-library/dist/implementation/operations/impure/text/from_character_list"
import { $$ as op_parse_hexadecimal } from "exupery-standard-library/dist/implementation/operations/impure/integer/parse_hexadecimal"

//this file contains the tokenizer functionality, each function return a type from the 'token' schema


const temp_get_current_character = ($: Characters_Iterator): number | null => {
    return $['get current']().transform(
        ($) => $,
        () => null
    )
}

export const Whitespace = (
    context: c.Refinement_Context,
): _out.Whitespace => {

    const start = context.iterator['get state']().location
    return {
        'value': op_from_character_list(_ea.build_list<number>(($i) => {
            while (true) {
                {
                    const $ = temp_get_current_character(context.iterator)
                    if ($ === null) {
                        return
                    }
                    if (is_control_character($)) {
                        return context.lexer_error(
                            ['unexpected control character', $],
                            {
                                'start': context.iterator['get state']().location,
                                'end': context.iterator['get state']().location,
                            }
                        )

                    }
                    switch ($) {
                        case 0x09: // \t
                            context.iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x0A: // \n
                            context.iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x0D: // \r
                            context.iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x20: // space
                            context.iterator['consume']()
                            $i['add element']($)
                            break
                        case 0x2C: // ,
                            context.iterator['consume']()
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
            'end': context.iterator['get state']().location,
        }
    }
}

export const Trivia = (
    context: c.Refinement_Context,
): _out.Trivia => {

    return {
        'leading whitespace': Whitespace(context),
        'comments': _ea.build_list(($i) => {
            while (true) {
                const $ = temp_get_current_character(context.iterator)
                if ($ === null) {
                    return //normal end of input
                }
                switch ($) {
                    case 0x2F: // /
                        const start = context.iterator['get state']().location
                        const next_char = context.iterator['look ahead'](1).transform(
                            ($) => $,
                            () => null
                        )
                        if (next_char === null) {
                            const start = context.iterator['get state']().location
                            context.iterator['consume']()
                            const end = context.iterator['get state']().location
                            return context.lexer_error(
                                ['dangling slash', null],
                                {
                                    'start': start,
                                    'end': end
                                }
                            )
                        }
                        switch (next_char) {
                            case 0x2F: // /
                                context.iterator['consume']() // consume the first /
                                context.iterator['consume']() // consume the second /
                                const Character = {
                                    line_feed: 0x0A,            // \n
                                    carriage_return: 0x0D,      // \r
                                    solidus: 0x2F,              // /
                                }
                                $i['add element']({
                                    'type': ['line', null],
                                    'content': op_from_character_list(_ea.build_list(($i) => {
                                        while (true) {
                                            const $ = temp_get_current_character(context.iterator)
                                            if ($ === null) {
                                                return
                                            }
                                            switch ($) {
                                                case Character.line_feed:
                                                    return
                                                case Character.carriage_return:
                                                    return
                                                default:
                                                    context.iterator['consume']()
                                                    $i['add element']($)
                                            }
                                        }
                                    })),
                                    'range': {
                                        'start': start,
                                        'end': context.iterator['get state']().location,
                                    },
                                    'trailing whitespace': Whitespace(context)
                                })
                                break
                            case 0x2A: {// *
                                context.iterator['consume']() // consume the first /
                                context.iterator['consume']() // consume the asterisk
                                $i['add element']({
                                    'type': ['block', null],
                                    'content': op_from_character_list(_ea.build_list(($i) => {
                                        let found_asterisk = false
                                        const Character = {
                                            solidus: 0x2F,              // /
                                            asterisk: 0x2A,             // *
                                        }
                                        while (true) {
                                            const $ = temp_get_current_character(context.iterator)
                                            if ($ === null) {
                                                return context.lexer_error(
                                                    ['unterminated block comment', null],
                                                    {
                                                        'start': start,
                                                        'end': context.iterator['get state']().location
                                                    }
                                                )
                                            }
                                            if ($ === Character.solidus && found_asterisk) {
                                                context.iterator['consume']() // consume the solidus
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
                                            context.iterator['consume']()
                                        }
                                    })),
                                    'range': {
                                        'start': start,
                                        'end': context.iterator['get state']().location,
                                    },
                                    'trailing whitespace': Whitespace(context)
                                })
                                break
                            }
                            default:
                                return context.lexer_error(
                                    ['dangling slash', null],
                                    {
                                        'start': start,
                                        'end': context.iterator['get state']().location
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

export const Annotated_Token = (
    context: c.Refinement_Context,
): _out.Annotated_Token => {
    const WhitespaceChars = {
        tab: 0x09,                  // \t
        line_feed: 0x0A,            // \n
        carriage_return: 0x0D,      // \r
        space: 0x20,                //
        comma: 0x2C,                // ,
    }

    const $ = temp_get_current_character(context.iterator)
    if ($ === null) {
        return context.lexer_error(
            ['unexpected end of input', null],
            {
                'start': context.iterator['get state']().location,
                'end': context.iterator['get state']().location,
            }
        )
    }
    return {
        'start': context.iterator['get state']().location,
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
                    context.iterator['consume']()
                    return ['{', null]
                case Character.open_bracket:
                    context.iterator['consume']()
                    return ['[', null]
                case Character.open_angle_bracket:
                    context.iterator['consume']()
                    return ['<', null]
                case Character.open_paren:
                    context.iterator['consume']()
                    return ['(', null]


                case Character.close_brace:
                    context.iterator['consume']()
                    return ['}', null]
                case Character.close_bracket:
                    context.iterator['consume']()
                    return [']', null]
                case Character.close_angle_bracket:
                    context.iterator['consume']()
                    return ['>', null]
                case Character.close_paren:
                    context.iterator['consume']()
                    return [')', null]

                //individuals
                case Character.hash:
                    context.iterator['consume']()
                    return ['#', null]
                case Character.pipe:
                    context.iterator['consume']()
                    return ['|', null]
                case Character.tilde:
                    context.iterator['consume']()
                    return ['~', null]
                case Character.asterisk:
                    context.iterator['consume']()
                    return ['*', null]
                case Character.at:
                    context.iterator['consume']()
                    return ['@', null]
                case Character.bang:
                    context.iterator['consume']()
                    return ['!', null]
                case Character.colon:
                    context.iterator['consume']()
                    return [':', null]
                case Character.quotation_mark:
                    context.iterator['consume']()
                    return ['string', {
                        'value': Delimited_String(($) => $ === Character.quotation_mark, true, context),
                        'type': ['quoted', null],
                    }]
                case Character.backtick:
                    context.iterator['consume']()
                    return ['string', {
                        'value': Delimited_String(($) => $ === Character.backtick, false, context),
                        'type': ['backticked', null],
                    }]
                case Character.apostrophe:
                    context.iterator['consume']()
                    return ['string', {
                        'value': Delimited_String(($) => $ === Character.apostrophe, false, context),
                        'type': ['apostrophed', null],
                    }]

                default:
                    return ['string', {
                        'type': ['undelimited', null],
                        'value': op_from_character_list(_ea.build_list(($i) => {
                            while (true) {
                                const $ = temp_get_current_character(context.iterator)
                                if ($ === null) {
                                    return
                                }

                                if (is_control_character($)) {
                                    return context.lexer_error(
                                        ['unexpected control character', $],
                                        {
                                            'start': context.iterator['get state']().location,
                                            'end': context.iterator['get state']().location,
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
                                context.iterator['consume']()
                                $i['add element']($)
                            }
                        })),
                    }]
            }
        }),
        'end': context.iterator['get state']().location,
        'trailing trivia': Trivia(context)
    }
}

export const Delimited_String = (
    is_end_character: (character: number) => boolean,
    allow_newlines: boolean,
    context: c.Refinement_Context,
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
    const start = context.iterator['get state']().location
    const txt = op_from_character_list(_ea.build_list(($i) => {
        while (true) {
            const $ = temp_get_current_character(context.iterator)
            if ($ === null) {

                return context.lexer_error(
                    ['unterminated string', null],
                    {
                        'start': start,
                        'end': context.iterator['get state']().location
                    }
                )
            }
            if (is_control_character($)) {
                return context.lexer_error(
                    ['unexpected control character', $],
                    {
                        'start': context.iterator['get state']().location,
                        'end': context.iterator['get state']().location,
                    }
                )

            }
            if (is_end_character($)) {
                context.iterator['consume']() // consume the end character
                return
            }
            switch ($) {
                case Character.line_feed:
                case Character.carriage_return:
                    if (!allow_newlines) {
                        return context.lexer_error(
                            ['unexpected end of line in delimited string', null],
                            {
                                'start': start,
                                'end': context.iterator['get state']().location
                            }
                        )
                    }
                    context.iterator['consume']()
                    $i['add element']($)
                    break
                case Character.reverse_solidus: // \ (escape)
                    context.iterator['consume']()
                    {
                        const $ = temp_get_current_character(context.iterator)
                        if ($ === null) {
                            return context.lexer_error(
                                ['missing character after escape', null],
                                {
                                    'start': start,
                                    'end': context.iterator['get state']().location
                                }
                            )
                        }
                        switch ($) {
                            case Character.quotation_mark:
                                context.iterator['consume']()
                                $i['add element'](Character.quotation_mark)
                                break
                            case Character.apostrophe:
                                context.iterator['consume']()
                                $i['add element'](Character.apostrophe)
                                break
                            case Character.backtick:
                                context.iterator['consume']()
                                $i['add element'](Character.backtick)
                                break
                            case Character.reverse_solidus:
                                context.iterator['consume']()
                                $i['add element'](Character.reverse_solidus)
                                break
                            case Character.solidus:
                                context.iterator['consume']()
                                $i['add element'](Character.solidus)
                                break
                            case Character.b:
                                context.iterator['consume']()
                                $i['add element'](Character.backspace)
                                break
                            case Character.f:
                                context.iterator['consume']()
                                $i['add element'](Character.form_feed)
                                break
                            case Character.n:
                                context.iterator['consume']()
                                $i['add element'](Character.line_feed)
                                break
                            case Character.r:
                                context.iterator['consume']()
                                $i['add element'](Character.carriage_return)
                                break
                            case Character.t:
                                context.iterator['consume']()
                                $i['add element'](Character.tab)
                                break
                            case Character.u:
                                context.iterator['consume']()
                                $i['add element'](op_parse_hexadecimal(op_from_character_list((_ea.build_list(($i) => {
                                    const get_char = () => {
                                        const char = temp_get_current_character(context.iterator)
                                        if (char === null) {
                                            return context.lexer_error(
                                                ['unterminated unicode escape sequence', null],
                                                {
                                                    'start': start,
                                                    'end': context.iterator['get state']().location
                                                }
                                            )
                                        }
                                        if (char < Character.a || (char > Character.f && char < Character.A) || char > Character.F || char < 0x30 || char > 0x39) {
                                            return context.lexer_error(
                                                ['invalid unicode escape sequence', null],
                                                {
                                                    'start': start,
                                                    'end': context.iterator['get state']().location
                                                }
                                            )
                                        }
                                        context.iterator['consume']()
                                        return char
                                    }
                                    $i['add element'](get_char())
                                    $i['add element'](get_char())
                                    $i['add element'](get_char())
                                    $i['add element'](get_char())
                                })))))
                                break
                            default:
                                return context.lexer_error(
                                    ['unknown escape character', null],
                                    {
                                        'start': start,
                                        'end': context.iterator['get state']().location
                                    }
                                )
                        }
                    }
                    break
                default:
                    context.iterator['consume']()
                    $i['add element']($)
            }
        }
    }))
    return txt
}

export const Tokenizer_Result = (
    context: c.Refinement_Context
): _out.Tokenizer_Result => {
    return {
        'leading trivia': Trivia(context),
        'tokens': _ea.build_list<_out.Annotated_Token>($i => {
            while (temp_get_current_character(context.iterator) !== null) {

                const token = Annotated_Token(context)
                $i['add element'](token)
            }
        }),
        'end': context.iterator['get state']().location
    }
}