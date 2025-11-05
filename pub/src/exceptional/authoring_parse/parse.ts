import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_ast from "./ast/refiners"
import * as _target from "../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as s_ast from "../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

import * as pg from "./ast/iterator"
import * as si from "./tokens/iterator"

import * as tokenize from "./tokens/refiners"
import { Parse_Error_Class } from "./ast/helpers"


export const parse = (
    $: string,
    $p: {
        'tab size': number
    }
): _ea.Refinement_Result<s_ast.Document, _target.Parse_Error> => {
    try {
        const string_iterator = si.create_string_iterator($, {
            'tab size': $p['tab size']
        })
        const tokenizer_result = tokenize.Tokenizer_Result(string_iterator)
        // tokenizer_result.tokens.__for_each(($) => {
        //     _edev.log_debug_message(`token: ${_ea.cc($.type, ($) => {
        //         switch ($[0]) {
        //             case 'string': return _ea.ss($, ($) => `string: ${$.value.value}`)
        //             default: return `structural: ${$[0]}`
        //         }
        //     })}`)
        // })
        const token_iterator = pg.create_astn_token_iterator(tokenizer_result.tokens, tokenizer_result.end)
        return _ea.refinement.successful(d_ast.Document(token_iterator))

    } catch (error) {
        if (error instanceof Parse_Error_Class) {

            return _ea.refinement.failed({
                'type': error.type,
                'range': {
                    'start': error.range.start,
                    'end': error.range.end,
                }
            })
        }
        return _ea.panic("unknown error thrown")
    }
}
