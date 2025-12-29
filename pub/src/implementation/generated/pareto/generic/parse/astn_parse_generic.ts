import * as _et from 'pareto-core-interface'

import * as si from "./string_iterator"

import * as _source from "../../../../../interface/generated/pareto/core/token"
import * as d_parse_result from "../../../../../interface/generated/pareto/core/parse_result"


export type My_Lexer_Error = {
    'type': d_parse_result.Lexer_Error,
    'range': _source._T_Range,
}

export type My_Parse_Error = {
    'type': d_parse_result.Parser_Error,
    'range': _source._T_Range,
}


const throw_parse_error = (
    type: d_parse_result.Parser_Error,
    range: _source._T_Range,
    abort: ($: My_Parse_Error) => never,
): never => {
    abort({
        'type': type,
        'range': range,
    })
}

export const throw_lexer_error = (
    type: d_parse_result.Lexer_Error,
    range: _source._T_Range,
    abort: ($: My_Lexer_Error) => never
): never => {
    return abort({
        'type': type,
        'range': range,
    })
}

export const throw_unexpected_token = (
    found: _source._T_Annotated_Token,
    expected: _et.List<d_parse_result.Expected>,
    abort: ($: My_Parse_Error) => never,
): never => {
    return throw_parse_error(
        {
            'expected': expected,
            'cause': ['unexpected token', {
                'found': found.type,
            }]
        },
        {
            'start': found.start,
            'end': found.end
        },
        abort,
    )
}

export type ASTN_Token_Iterator = si.Token_Iterator<d_parse_result.Expected, _source._T_Annotated_Token>

export const create_astn_token_iterator = (
    $: _source._T_Tokenizer_Result.tokens, 
    end: si.Location,
    abort: ($: My_Parse_Error) => never,
): ASTN_Token_Iterator => {
    let position = 0
    return {
        'get required token': (pet) => {
            return $.__get_element_at(position).transform(
                ($) => $,
                () => throw_parse_error(
                    {
                        'expected': pet,
                        'cause': ['missing token', null]
                    },
                    {
                        'start': end,
                        'end': end,
                    },
                    abort,
                )
            )
        },
        'consume token': () => {
            position += 1
        },
    }
}