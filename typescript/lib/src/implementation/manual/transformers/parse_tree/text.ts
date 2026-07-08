import * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

// export type Value = p_i.Transformer<
// d_in.Value, d_out.Text
// >
export type Document = p_i.Transformer_With_Parameter<
    d_in.Document,
    d_out.Text,
    {
        'indentation': string,
        'newline': string
    }
>

//dependencies
import * as t_authoring_target_to_text from "../authoring_target/text.js"
import * as t_to_authoring_target from "./authoring_target.js"



export const Document: Document = ($, $p) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        ),
        $p,
    )
}