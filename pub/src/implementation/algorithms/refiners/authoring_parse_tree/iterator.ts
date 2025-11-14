import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as string_iterator from "../token/iterator"

import * as _source from "../../../../interface/generated/pareto/schemas/token/data_types/source"
import { Iterator } from "../../../../exceptional/authoring_parse/iterator"


export type My_Location = {
        'start': string_iterator.Iterator_Location
        'end': string_iterator.Iterator_Location
}

export type ASTN_Tokens_Iterator = Iterator<_source.Annotated_Token, My_Location>

export const create_iterator = ($: _source.Tokenizer_Result.tokens, end: string_iterator.Iterator_Location): ASTN_Tokens_Iterator => {
    let position = 0
    return {
        'get current': () => {
            return $.__get_element_at(position)
        },
        'look ahead': (offset: number) => {
            return $.__get_element_at(position + offset)
        },
        'get state': () => {
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
        'consume': () => {
            position += 1
        },
    }
}