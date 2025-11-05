import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as string_iterator from "../tokens/iterator"

import * as _source from "../../../interface/generated/pareto/schemas/token/data_types/source"

export type Token_Iterator<Token> = {
    'get next token': () => _et.Optional_Value<Token>,
    'get location': () => {
        'start': string_iterator.Iterator_Location
        'end': string_iterator.Iterator_Location
    }
    'consume token': () => void,
}


export type ASTN_Tokens_Iterator = Token_Iterator<_source.Annotated_Token>

export const create_astn_token_iterator = ($: _source.Tokenizer_Result.tokens, end: string_iterator.Iterator_Location): ASTN_Tokens_Iterator => {
    let position = 0
    return {
        'get next token': () => {
            return $.__get_element_at(position)
        },
        'get location': () => {
            const current_token = $.__get_element_at(position)
            return current_token.transform(
                ($) => ({
                    'start': $.start,
                    'end': $.end,
                }),
                () => ({
                    'start': end,
                    'end': end,
                })
            )
        },
        'consume token': () => {
            position += 1
        },
    }
}