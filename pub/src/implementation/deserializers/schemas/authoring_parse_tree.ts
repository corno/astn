import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'


import * as d_authoring_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_authoring_parse_tree from "../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../../interface/generated/pareto/schemas/token/data_types/target"

import * as ds_annotated_characters from "./annotated_characters"
import * as p_authoring_parse_tree from "../../productions/schemas/authoring_parse_tree/token"

import * as tokenize from "../../productions/schemas/token/annotated_character"

export const Document = (
    $: string,
    $p: {
        'tab size': number
    },
    abort: ($: d_authoring_parse_result.Parse_Error) => never
): d_authoring_parse_tree.Document => {
    const iter = _ea.create_iterator(ds_annotated_characters.annotate_characters($, {
        'tab size': $p['tab size']
    }))
    const tr = tokenize.Tokenizer_Result(
        iter,
        abort
    )
    return p_authoring_parse_tree.Document(
        _ea.create_iterator(tr.tokens),
        abort,
    )
}
