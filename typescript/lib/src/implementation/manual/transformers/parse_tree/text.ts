import * as p_i from 'pareto-core/dist/interface/transformer'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

// export type Value = p_i.Transformer<d_in.Value, d_out.Text>
export type Document = p_i.Transformer_With_Parameter<d_in.Document, d_out.Text, { 'indentation': string, 'newline': string }   >

//dependencies
import * as t_authoring_target_to_text from "../authoring_target/text"
import * as t_to_authoring_target from "./authoring_target"



export const Document: Document = ($, $p) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        ),
        $p,
    )
}