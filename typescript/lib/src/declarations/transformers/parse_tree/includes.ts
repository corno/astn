
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "astn-core/interface/data/parse_tree"
import type * as d_out from "../../../interface/data/includes.js"


export type Document = p_.Transformer<
    d_in.Document, d_out.Included_Files
>
export type Value = p_.Transformer<
    d_in.Value, d_out.Included_Files
>
export type Items = p_.Transformer<
    d_in.Items, d_out.Included_Files
>
export type ID_Value_Pairs = p_.Transformer<
    d_in.ID_Value_Pairs, d_out.Included_Files
>

