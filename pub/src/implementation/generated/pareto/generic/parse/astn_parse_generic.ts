import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as si from "./string_iterator"

import * as _source from "../../../../../interface/generated/pareto/core/token"
import * as d_parse_result from "../../../../../interface/generated/pareto/core/parse_result"

export class Parse_Error_Class {
    
    constructor (
        public readonly type: d_parse_result._T_Parse_Error._type,
        public readonly range: _source._T_Range,
    ) {
     }
}

const throw_parse_error = (
    type: d_parse_result._T_Parse_Error._type,
    range: _source._T_Range
): never => {
    throw new Parse_Error_Class(type, range)
}

export const throw_lexer_error = (
    type: d_parse_result.Lexer_Error,
    range: _source._T_Range
): never => {
    throw new Parse_Error_Class(['lexer', type], range)
}

export const throw_unexpected_token = (
    found: _source._T_Annotated_Token,
    expected: _et.List<d_parse_result.Expected>,
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

export type ASTN_Token_Iterator = si.Token_Iterator<d_parse_result.Expected, _source._T_Annotated_Token>

export const create_astn_token_iterator = ($: _source._T_Tokenizer_Result.tokens, end: si.Location): ASTN_Token_Iterator => {
    let position = 0
    return {
        'get required token': (pet) => {
            return $.__get_element_at(position).transform(
                ($) => $,
                () => throw_parse_error(
                    ['parser', {
                        'expected': pet,
                        'cause': ['missing token', null]
                    }],
                    {
                        'start': end,
                        'end': end,
                    }
                )
            )
        },
        'consume token': () => {
            position += 1
        },
    }
}