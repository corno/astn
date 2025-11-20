import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'

import * as d_ast from "./ast"
import * as _target from "../../../../../interface/generated/pareto/core/parse_result"
import * as s_ast from "../../../../../interface/generated/pareto/core/astn_source"

import * as pg from "./astn_parse_generic"
import * as si from "./string_iterator"

import * as tokenize from "./token"


export const parse = (
    $: string,
    $p: {
        'tab size': number
    }
): _et.Refinement_Result<s_ast._T_Document, _target._T_Parse_Error> => {
    try {
        const string_iterator = si.create_string_iterator($, {
            'tab size': $p['tab size']
        })
        const tokenizer_result = tokenize.Tokenizer_Result(null, {
            'string iterator': string_iterator
        })
        // tokenizer_result.tokens.__for_each(($) => {
        //     _edev.log_debug_message(`token: ${_ea.cc($.type, ($) => {
        //         switch ($[0]) {
        //             case 'string': return _ea.ss($, ($) => `string: ${$.value.value}`)
        //             default: return `structural: ${$[0]}`
        //         }
        //     })}`)
        // })
        const token_iterator = pg.create_astn_token_iterator(tokenizer_result.tokens, tokenizer_result.end)
        return _ei.__create_success_refinement_result(d_ast.Document(token_iterator))

    } catch (error) {
        if (error instanceof pg.Parse_Error_Class) {
            
            return _ei.__create_failure_refinement_result({
                'type': error.type,
                'range': {
                    'start': error.range.start,
                    'end': error.range.end,
                }
            })
        }
        return _ea.deprecated_panic("unknown error thrown")
    }
}
