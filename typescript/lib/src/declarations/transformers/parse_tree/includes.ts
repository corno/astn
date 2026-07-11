
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as s_in from "astn-core/interface/data/parse_tree"
import type * as s_out from "../../../interface/schemas/includes.js"


export type Document = p_.Transformer<
    s_in.Document, s_out.Included_Files
>
export type Value = p_.Transformer<
    s_in.Value, s_out.Included_Files
>
export type Items = p_.Transformer<
    s_in.Items, s_out.Included_Files
>
export type ID_Value_Pairs = p_.Transformer<
    s_in.ID_Value_Pairs, s_out.Included_Files
>

