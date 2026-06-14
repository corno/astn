import * as p_di from 'pareto-core/dist/data/interface'
import * as p_ti from 'pareto-core/dist/transformer/interface'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json_without_guaranteed_unique_keys/data"

export type Value = p_ti.Transformer<d_in.Value, d_out.Value>
export type ID_Value_Pairs = p_ti.Transformer<d_in.ID_Value_Pairs, d_out.Value.object_>
export type Items = p_ti.Transformer<d_in.Items, d_out.Value.array>
export type Document = p_ti.Transformer<d_in.Document, d_out.Document>

