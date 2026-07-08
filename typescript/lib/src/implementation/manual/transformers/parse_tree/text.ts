import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

export namespace interface_ {
    export type Document = p_i.Transformer_With_Parameter<
        d_in.Document,
        d_out.Text,
        {
            'indentation': string,
            'newline': string
        }
    >
}
import * as temp_interface_ from "../../../../interface/declarations/transformers/parse_tree/text.js"

//dependencies
import * as t_authoring_target_to_text from "../authoring_target/text.js"
import * as t_to_authoring_target from "./authoring_target.js"



export const Document: interface_.Document = ($, $p) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        ),
        $p,
    )
}