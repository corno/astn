import * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "../../../generated/liana/schemas/authoring_target/data.js"

export type Value = p_i.Transformer<
    d_in.Value,
    d_out.Value
>
export type Concrete_Value = p_i.Transformer<
    d_in.Value.type_.concrete,
    d_out.Value.data.concrete
>
export type ID_Value_Pairs = p_i.Transformer<
    d_in.ID_Value_Pairs,
    d_out.ID_Value_Pairs
>
export type Items = p_i.Transformer<
    d_in.Items,
    d_out.Items
>
export type Structural_Token = p_i.Transformer<
    d_in.Structural_Token,
    d_out.Token_Trivia
>
export type Document = p_i.Transformer<
    d_in.Document,
    d_out.Document
>

