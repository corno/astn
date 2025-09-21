import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as si from "./string_iterator"

import * as _source from "../generated/interface/schemas/token/data_types/source"
import * as d_parse_result from "../generated/interface/schemas/parse_result/data_types/target"

export const throw_parse_error = (
    type: d_parse_result.Parse_Error._type,
    range: _source.Range
): never => {
    throw new _ea.Error<d_parse_result.Parse_Error>({
        'type': type,
        'range': range
    })
}

export const throw_unexpected_token = (
    found: _source.Annotated_Token,
    expected: _et.Array<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
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

export type ASTN_Token_Iterator = si.Token_Iterator<d_parse_result.Parse_Error._type.SG.parser.expected.L, _source.Annotated_Token>

export const create_astn_token_iterator = ($: _source.Tokenizer_Result.tokens, end: si.Location): ASTN_Token_Iterator => {
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