import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import { refine_guard } from './refine_guard'


import * as d_ast from "./ast/refiners"
import * as _parse_result from "../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as s_ast from "../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../interface/generated/pareto/schemas/token/data_types/target"

import * as ai from "./ast/iterator"
import * as ti from "./tokens/iterator"

import * as tokenize from "./tokens/refiners"
import { Parse_Error_Class } from "./ast/helpers"



export const parse = (
    $: string,
    $p: {
        'tab size': number
    }
): _ea.Refinement_Result<s_ast.Document, _parse_result.Parse_Error> => {
    const tokenizer_result = refine_guard<d_token.Tokenizer_Result, _parse_result.Parse_Error>((abort) => {
        return tokenize.Tokenizer_Result(
            ti.create_string_iterator($, {
                'tab size': $p['tab size']
            }),
            abort
        )
    })
    return tokenizer_result.transform(
        ($) => {
            return refine_guard((abort) => {
                return d_ast.Document(
                    ai.create_astn_token_iterator($.tokens, $.end),
                    abort,
                )
            })
        },
        ($) => _ea.refinement.failed($)
    )
}
