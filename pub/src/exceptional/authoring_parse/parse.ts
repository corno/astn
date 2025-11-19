import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'


import * as d_ast from "../../implementation/algorithms/refiners/authoring_parse_tree/refiners"
import * as _parse_result from "../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as s_ast from "../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../interface/generated/pareto/schemas/token/data_types/target"

import * as ai from "../../implementation/algorithms/refiners/authoring_parse_tree/iterator"
import * as ti from "../../implementation/algorithms/refiners/token/iterator"

import * as tokenize from "../../implementation/algorithms/refiners/token/refiners"
import { create_context as create_ast_context } from "../../implementation/algorithms/refiners/authoring_parse_tree/context"
import { create_context as create_tokens_context } from "../../implementation/algorithms/refiners/token/context"

export const parse = <Target_Error>(
    $: string,
    $p: {
        'tab size': number
    },
    error_transformer: _et.Transformer<Target_Error, _parse_result.Parse_Error>,
): _et.Staging_Result<s_ast.Document, Target_Error> => {
    return _ea.create_refinement_context<d_token.Tokenizer_Result, _parse_result.Parse_Error, _parse_result.Parse_Error>(
        ($) => $,
        (abort) => {
            const iter = ti.create_iterator($, {
                'tab size': $p['tab size']
            })
            return tokenize.Tokenizer_Result(
                create_tokens_context(iter, abort)
            )
        }
    ).stage(
        ($) => {
            return _ea.create_refinement_context<s_ast.Document, _parse_result.Parse_Error, _parse_result.Parse_Error>(
                ($) => $,
                (abort) => {
                    return d_ast.Document(
                        create_ast_context(ai.create_iterator($.tokens, $.end), abort)
                    )
                }
            )
        },
        ($) => $
    ).transform_error_temp(
        error_transformer
    )
}
