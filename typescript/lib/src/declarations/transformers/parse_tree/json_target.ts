import * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "pareto-json/interface/generated/liana/schemas/json_without_guaranteed_unique_keys/data"

export type Value = p_.Transformer<
    d_in.Value,
    d_out.Value
>
export type ID_Value_Pairs = p_.Transformer<
    d_in.ID_Value_Pairs,
    d_out.Value.object_
>
export type Items = p_.Transformer<
    d_in.Items,
    d_out.Value.array
>
export type Document = p_.Transformer<
    d_in.Document,
    d_out.Document
>

