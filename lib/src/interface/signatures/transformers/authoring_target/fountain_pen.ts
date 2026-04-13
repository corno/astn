import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../generated/liana/schemas/authoring_target/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export type Parameters = {
    'write delimiters': boolean
    'in concise group': boolean
}

export type Value = _pi.Transformer_With_Parameter<d_in.Value, d_out.Phrase, Parameters>
export type Document = _pi.Transformer<d_in.Document, d_out.Paragraph>
