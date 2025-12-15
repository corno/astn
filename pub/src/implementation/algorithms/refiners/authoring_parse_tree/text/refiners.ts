import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'


import * as d_ast from "../../../productions/authoring_parse_tree/token"
import * as _parse_result from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as s_ast from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../../../../interface/generated/pareto/schemas/token/data_types/target"

import * as ti from "../../../../../temp_core/annotate_characters"

import * as tokenize from "../../../productions/token/annotated_character"

export const parse = (
    $: string,
    $p: {
        'tab size': number
    },
): _et.Refinement_Result<s_ast.Document, _parse_result.Parse_Error> => {
    return _ea.create_refinement_context<d_token.Tokenizer_Result, _parse_result.Parse_Error, _parse_result.Parse_Error>(
        ($) => $,
        (abort) => {
            const iter = _ea.create_iterator(ti.annotate_characters($, {
                'tab size': $p['tab size']
            }))
            return tokenize.Tokenizer_Result(
                iter,
                abort
            )
        }
    ).refine(
        ($) => _ea.create_refinement_context<s_ast.Document, _parse_result.Parse_Error, _parse_result.Parse_Error>(
            ($) => $,
            (abort) => {
                return d_ast.Document(
                    _ea.create_iterator($.tokens),
                    abort,
                )
            }
        ),
        ($) => $
    )
}
