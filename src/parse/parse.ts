import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_ast from "./ast"
import * as d_parse_result from "../generated/interface/schemas/parse_result/unconstrained"
import * as d_token from "../generated/interface/schemas/token/unconstrained" //FXIME this file should ot 

import * as pg from "./astn_parse_generic"
import * as si from "./string_iterator"

import * as tokenize from "./token"

export const parse = (
    $: string,
    $p: {
        'tab size': number
    }
): d_parse_result.Parse_Result => {
    try {
        const string_iterator = si.create_string_iterator($, {
            'tab size': $p['tab size']
        })
        const tokenizer_result = tokenize.Tokenizer_Result(null, {
            'string iterator': string_iterator
        })
        // tokenizer_result.tokens.__for_each(($) => {
        //     pdev.log_debug_message(`token: ${_ea.cc($.type, ($) => {
        //         switch ($[0]) {
        //             case 'string': return _ea.ss($, ($) => `string: ${$.value.value}`)
        //             default: return `structural: ${$[0]}`
        //         }
        //     })}`)
        // })
        const token_iterator = pg.create_astn_token_iterator(tokenizer_result.tokens, tokenizer_result.end)
        return ['success', d_ast.Document(token_iterator)]

    } catch (error) {
        if (error instanceof _ea.Error) {
            const parse_error: d_parse_result.Parse_Error = error.type //this has to be the case
            return ['failure', parse_error]
        }
        return _ea.panic("unknown error thrown")
    }
}
