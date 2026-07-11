import * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "astn-core/interface/data/parse_tree"
import type * as s_out from "pareto-json/interface/data/json_without_guaranteed_unique_keys"

export type Value = p_.Transformer<
    s_in.Value,
    s_out.Value
>
export type ID_Value_Pairs = p_.Transformer<
    s_in.ID_Value_Pairs,
    s_out.Value.object_
>
export type Items = p_.Transformer<
    s_in.Items,
    s_out.Value.array
>
export type Document = p_.Transformer<
    s_in.Document,
    s_out.Document
>

