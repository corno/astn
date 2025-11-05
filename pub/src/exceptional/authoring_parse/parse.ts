import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'


import * as d_ast from "./ast/refiners"
import * as _parse_result from "../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as s_ast from "../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../interface/generated/pareto/schemas/token/data_types/target"

import * as ai from "./ast/iterator"
import * as ti from "./tokens/iterator"

import * as tokenize from "./tokens/refiners"
import { create_context as create_ast_context } from "./ast/context"
import { create_context as create_tokens_context } from "./tokens/context"

export const parse = (
    $: string,
    $p: {
        'tab size': number
    }
): _ea.Refinement_Result<s_ast.Document, _parse_result.Parse_Error> => {
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
    ).with_result(($) => {
        return _ea.create_refinement_context<s_ast.Document, _parse_result.Parse_Error, _parse_result.Parse_Error>(
            ($) => $,
            (abort) => {
                return d_ast.Document(
                    create_ast_context(ai.create_iterator($.tokens, $.end), abort)
                )
            }
        )
    })
}
