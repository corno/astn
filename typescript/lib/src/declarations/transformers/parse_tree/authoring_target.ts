import * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "../../../interface/data/authoring_target.js"

export type Value = p_.Transformer<
    d_in.Value,
    d_out.Value
>
export type Concrete_Value = p_.Transformer<
    d_in.Value.type_.concrete,
    d_out.Value.data.concrete
>
export type ID_Value_Pairs = p_.Transformer<
    d_in.ID_Value_Pairs,
    d_out.ID_Value_Pairs
>
export type Items = p_.Transformer<
    d_in.Items,
    d_out.Items
>
export type Structural_Token = p_.Transformer<
    d_in.Structural_Token,
    d_out.Token_Trivia
>
export type Document = p_.Transformer<
    d_in.Document,
    d_out.Document
>

