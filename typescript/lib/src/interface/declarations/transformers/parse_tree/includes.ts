import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "../../../data/includes.js"

export namespace interface_ {
    export type Document = p_i.Transformer<
        d_in.Document, d_out.Included_Files
    >
    export type Value = p_i.Transformer<
        d_in.Value, d_out.Included_Files
    >
    export type Items = p_i.Transformer<
        d_in.Items, d_out.Included_Files
    >
    export type ID_Value_Pairs = p_i.Transformer<
        d_in.ID_Value_Pairs, d_out.Included_Files
    >
}
