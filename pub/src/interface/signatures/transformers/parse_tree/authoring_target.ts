import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data"

export type Parameter = {
    'style':
    | ['as is', null]
    | ['concise', null]
}

export type Value = _pi.Transformer_With_Parameter<d_in.Value, d_out.Value, Parameter>
export type ID_Value_Pairs = _pi.Transformer_With_Parameter<d_in.ID_Value_Pairs, d_out.Value.data.concrete.type_.dictionary, Parameter>
export type Items = _pi.Transformer_With_Parameter<d_in.Items, d_out.Value.data.concrete.type_.list, Parameter>
export type Document = _pi.Transformer_With_Parameter<d_in.Document, d_out.Document, Parameter>

