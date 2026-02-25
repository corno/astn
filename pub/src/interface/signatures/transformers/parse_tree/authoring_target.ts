import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data"

export type Value = _pi.Transformer<d_in.Value, d_out.Value>
export type ID_Value_Pairs = _pi.Transformer<d_in.ID_Value_Pairs, d_out.Value.data.concrete.type_.dictionary>
export type Items = _pi.Transformer<d_in.Items, d_out.Value.data.concrete.type_.list>
export type Document = _pi.Transformer<d_in.Document, d_out.Document>

