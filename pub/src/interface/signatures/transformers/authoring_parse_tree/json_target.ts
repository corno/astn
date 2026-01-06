import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../generated/pareto/schemas/authoring_parse_tree/data_types/source"
import * as d_out from "../../../../modules/pareto-json/interface/generated/pareto/schemas/json/data_types/target"

export type Value = _pi.Transformer<d_in.Value, d_out.Value>
export type Key_Value_Pairs = _pi.Transformer<d_in.Key_Value_Pairs, d_out.Value.SG._object.SG.key_value_array>
export type Elements = _pi.Transformer<d_in.Elements, d_out.Value.SG.array>
export type Document = _pi.Transformer<d_in.Document, d_out.Document>

