import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _out from "../../../../interface/generated/pareto/schemas/token/data_types/target"

import * as _parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"

import * as d_annotated_characters from "../../../../interface/to_be_generated/annotated_characters"
export type Characters_Iterator = _et.Iterator<d_annotated_characters.Annotated_Character>

import { $$ as ds_hexadecimal } from "pareto-standard-operations/dist/implementation/deserializers/primitives/integer/hexadecimal"

//this file contains the tokenizer functionality, each function return a type from the 'token' schema

import * as sh from "../../../../shorthands/parse_result"

const temp_get_current_character_or_null = (iterator: Characters_Iterator): d_annotated_characters.Annotated_Character | null => {
    return iterator['get current']().transform(
        ($) => $,
        () => null
    )
}

const WhitespaceChars = {
    tab: 0x09,                  // \t
    line_feed: 0x0A,            // \n
    carriage_return: 0x0D,      // \r
    space: 0x20,                //
}

export const is_control_character = ($: d_annotated_characters.Annotated_Character): boolean => {
    return ($.code < 0x20 && $.code !== WhitespaceChars.tab && $.code !== WhitespaceChars.line_feed && $.code !== WhitespaceChars.carriage_return)
}

const temp_get_current_location = (iterator: Characters_Iterator): _out.Location => {
    return iterator['get current']().transform(
        ($): _out.Location => ({
            'absolute': iterator['get position'](),
            'relative': {
                'line': $.location.line,
                'column': $.location.column,
            }
        }),
        (): _out.Location => ({
            'absolute': iterator['get position'](),
            'relative': {
                'line': -1,
                'column': -1,
            }
        }),
    )
}

export const Whitespace = (
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Whitespace => {
    const start_location = temp_get_current_location(iterator)
    return {
        'value': _ea.build_text(($i) => {
            while (true) {
                {
                    const $ = temp_get_current_character_or_null(iterator)
                    if ($ === null) {
                        return
                    }
                    if (is_control_character($)) {
                        return abort(sh.lexer_error(
                            ['unexpected control character', $.code],
                            {
                                'start': start_location,
                                'end': temp_get_current_location(iterator),
                            }
                        ))

                    }
                    switch ($.code) {
                        case 0x09: // \t
                            iterator['consume']()
                            $i['add character']($.code)
                            break
                        case 0x0A: // \n
                            iterator['consume']()
                            $i['add character']($.code)
                            break
                        case 0x0D: // \r
                            iterator['consume']()
                            $i['add character']($.code)
                            break
                        case 0x20: // space
                            iterator['consume']()
                            $i['add character']($.code)
                            break
                        case 0x2C: // ,
                            iterator['consume']()
                            $i['add character']($.code)
                            break
                        default:
                            return

                    }
                }
            }
        }),
        'range': {
            'start': start_location,
            'end': temp_get_current_location(iterator),
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
                const $ = temp_get_current_character_or_null(iterator)
                if ($ === null) {
                    return //normal end of input
                }
                switch ($.code) {
                    case 0x2F: // /
                        const start = temp_get_current_location(iterator)
                        const next_char = iterator['look ahead'](1).transform(
                            ($) => $,
                            () => null
                        )
                        if (next_char === null) {
                            const start = temp_get_current_location(iterator)
                            iterator['consume']()
                            const end = temp_get_current_location(iterator)
                            return abort(sh.lexer_error(
                                ['dangling slash', null],
                                {
                                    'start': start,
                                    'end': end
                                }
                            ))
                        }
                        switch (next_char.code) {
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
                                    'content': _ea.build_text(($i) => {
                                        while (true) {
                                            const $ = temp_get_current_character_or_null(iterator)
                                            if ($ === null) {
                                                return
                                            }
                                            switch ($.code) {
                                                case Character.line_feed:
                                                    return
                                                case Character.carriage_return:
                                                    return
                                                default:
                                                    iterator['consume']()
                                                    $i['add character']($.code)
                                            }
                                        }
                                    }),
                                    'range': {
                                        'start': start,
                                        'end': temp_get_current_location(iterator),
                                    },
                                    'trailing whitespace': Whitespace(iterator, abort)
                                })
                                break
                            case 0x2A: {// *
                                iterator['consume']() // consume the first /
                                iterator['consume']() // consume the asterisk
                                $i['add element']({
                                    'type': ['block', null],
                                    'content': _ea.build_text(($i) => {
                                        let found_asterisk = false
                                        const Character = {
                                            solidus: 0x2F,              // /
                                            asterisk: 0x2A,             // *
                                        }
                                        while (true) {
                                            const $ = temp_get_current_character_or_null(iterator)
                                            if ($ === null) {
                                                return abort(sh.lexer_error(
                                                    ['unterminated block comment', null],
                                                    {
                                                        'start': start,
                                                        'end': temp_get_current_location(iterator)
                                                    }
                                                ))
                                            }
                                            if ($.code === Character.solidus && found_asterisk) {
                                                iterator['consume']() // consume the solidus
                                                //found asterisk before solidus, so this is the end of the comment
                                                return
                                            }
                                            //not a solidus, so this is part of the comment
                                            if (found_asterisk) {
                                                $i['add character'](Character.asterisk) // add the asterisk that was found before but was not part of the end delimiter
                                            }
                                            if ($.code === Character.asterisk) {
                                                found_asterisk = true
                                            } else {
                                                $i['add character']($.code)
                                            }
                                            iterator['consume']()
                                        }
                                    }),
                                    'range': {
                                        'start': start,
                                        'end': temp_get_current_location(iterator),
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
                                        'end': temp_get_current_location(iterator)
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

    const $ = temp_get_current_character_or_null(iterator)
    if ($ === null) {
        return abort(sh.lexer_error(
            ['unexpected end of input', null],
            {
                'start': temp_get_current_location(iterator),
                'end': temp_get_current_location(iterator),
            }
        ))
    }
    return {
        'start': temp_get_current_location(iterator),
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
            switch ($.code) {
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
                        'value': _ea.build_text(($i) => {
                            while (true) {
                                const $ = temp_get_current_character_or_null(iterator)
                                if ($ === null) {
                                    return
                                }

                                if (is_control_character($)) {
                                    return abort(sh.lexer_error(
                                        ['unexpected control character', $.code],
                                        {
                                            'start': temp_get_current_location(iterator),
                                            'end': temp_get_current_location(iterator),
                                        }
                                    ))

                                }
                                if (
                                    $.code === Character.open_brace ||
                                    $.code === Character.close_brace ||
                                    $.code === Character.open_bracket ||
                                    $.code === Character.close_bracket ||
                                    $.code === Character.open_angle_bracket ||
                                    $.code === Character.close_angle_bracket ||
                                    $.code === Character.open_paren ||
                                    $.code === Character.close_paren ||
                                    $.code === Character.apostrophe ||
                                    $.code === Character.asterisk ||
                                    $.code === Character.at ||
                                    $.code === Character.backtick ||
                                    $.code === Character.bang ||
                                    $.code === Character.colon ||
                                    $.code === Character.pipe ||
                                    $.code === Character.quotation_mark ||
                                    $.code === Character.slash ||
                                    $.code === Character.tilde ||
                                    $.code === WhitespaceChars.comma ||
                                    $.code === WhitespaceChars.space ||
                                    $.code === WhitespaceChars.tab ||
                                    $.code === WhitespaceChars.line_feed ||
                                    $.code === WhitespaceChars.carriage_return
                                ) {
                                    return
                                }
                                iterator['consume']()
                                $i['add character']($.code)
                            }
                        }),
                    }]
            }
        }),
        'end': temp_get_current_location(iterator),
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
    const start = temp_get_current_location(iterator)
    const txt = _ea.build_text(($i) => {
        while (true) {
            const $ = temp_get_current_character_or_null(iterator)
            if ($ === null) {

                return abort(sh.lexer_error(
                    ['unterminated string', null],
                    {
                        'start': start,
                        'end': temp_get_current_location(iterator)
                    }
                ))
            }
            if (is_control_character($)) {
                return abort(sh.lexer_error(
                    ['unexpected control character', $.code],
                    {
                        'start': temp_get_current_location(iterator),
                        'end': temp_get_current_location(iterator),
                    }
                ))

            }
            if (is_end_character($.code)) {
                iterator['consume']() // consume the end character
                return
            }
            switch ($.code) {
                case Character.line_feed:
                case Character.carriage_return:
                    if (!allow_newlines) {
                        return abort(sh.lexer_error(
                            ['unexpected end of line in delimited string', null],
                            {
                                'start': start,
                                'end': temp_get_current_location(iterator)
                            }
                        ))
                    }
                    iterator['consume']()
                    $i['add character']($.code)
                    break
                case Character.reverse_solidus: // \ (escape)
                    iterator['consume']()
                    {
                        const $ = temp_get_current_character_or_null(iterator)
                        if ($ === null) {
                            return abort(sh.lexer_error(
                                ['missing character after escape', null],
                                {
                                    'start': start,
                                    'end': temp_get_current_location(iterator)
                                }
                            ))
                        }
                        switch ($.code) {
                            case Character.quotation_mark:
                                iterator['consume']()
                                $i['add character'](Character.quotation_mark)
                                break
                            case Character.apostrophe:
                                iterator['consume']()
                                $i['add character'](Character.apostrophe)
                                break
                            case Character.backtick:
                                iterator['consume']()
                                $i['add character'](Character.backtick)
                                break
                            case Character.reverse_solidus:
                                iterator['consume']()
                                $i['add character'](Character.reverse_solidus)
                                break
                            case Character.solidus:
                                iterator['consume']()
                                $i['add character'](Character.solidus)
                                break
                            case Character.b:
                                iterator['consume']()
                                $i['add character'](Character.backspace)
                                break
                            case Character.f:
                                iterator['consume']()
                                $i['add character'](Character.form_feed)
                                break
                            case Character.n:
                                iterator['consume']()
                                $i['add character'](Character.line_feed)
                                break
                            case Character.r:
                                iterator['consume']()
                                $i['add character'](Character.carriage_return)
                                break
                            case Character.t:
                                iterator['consume']()
                                $i['add character'](Character.tab)
                                break
                            case Character.u:
                                iterator['consume']()
                                $i['add character'](ds_hexadecimal(
                                    _ea.build_text(($i) => {
                                        const get_char = () => {
                                            const char = temp_get_current_character_or_null(iterator)
                                            if (char === null) {
                                                return abort(sh.lexer_error(
                                                    ['unterminated unicode escape sequence', null],
                                                    {
                                                        'start': start,
                                                        'end': temp_get_current_location(iterator)
                                                    }
                                                ))
                                            }
                                            if (char.code < Character.a || (char.code > Character.f && char.code < Character.A) || char.code > Character.F || char.code < 0x30 || char.code > 0x39) {
                                                return abort(sh.lexer_error(
                                                    ['invalid unicode escape sequence', null],
                                                    {
                                                        'start': start,
                                                        'end': temp_get_current_location(iterator)
                                                    }
                                                ))
                                            }
                                            iterator['consume']()
                                            return char.code
                                        }
                                        $i['add character'](get_char())
                                        $i['add character'](get_char())
                                        $i['add character'](get_char())
                                        $i['add character'](get_char())
                                    }),
                                    () => _ea.deprecated_panic("IMPLEMENT ME: abort from unicode parsing")
                                ))
                                break
                            default:
                                return abort(sh.lexer_error(
                                    ['unknown escape character', null],
                                    {
                                        'start': start,
                                        'end': temp_get_current_location(iterator)
                                    }
                                ))
                        }
                    }
                    break
                default:
                    iterator['consume']()
                    $i['add character']($.code)
            }
        }
    })
    return txt
}

export const Tokenizer_Result = (
    iterator: Characters_Iterator,
    abort: _ea.Abort<_parse_result.Parse_Error>,
): _out.Tokenizer_Result => {
    return {
        'leading trivia': Trivia(iterator, abort),
        'tokens': _ea.build_list<_out.Annotated_Token>($i => {
            while (temp_get_current_character_or_null(iterator) !== null) {

                const token = Annotated_Token(iterator, abort)
                $i['add element'](token)
            }
        }),
        'end': temp_get_current_location(iterator)
    }
}