import * as _pi from 'pareto-core-interface'

import * as d_in from "astn-core/dist/interface/generated/pareto/schemas/parse_tree/data"
import * as d_out from "pareto-json/dist/interface/generated/pareto/schemas/json/data"

export type Value = _pi.Transformer<d_in.Value, d_out.Value>
export type Key_Value_Pairs = _pi.Transformer<d_in.Key_Value_Pairs, d_out.Value._object.key_value_array>
export type Elements = _pi.Transformer<d_in.Elements, d_out.Value.array>
export type Document = _pi.Transformer<d_in.Document, d_out.Document>

