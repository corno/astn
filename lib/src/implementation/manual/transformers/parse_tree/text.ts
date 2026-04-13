import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

// export type Value = _pi.Transformer<d_in.Value, d_out.Text>
export type Document = _pi.Transformer_With_Parameter<d_in.Document, d_out.Text, { 'indentation': string, 'newline': string }   >

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