import * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "astn-core/interface/data/parse_tree"
import type * as s_out from "../../../interface/schemas/authoring_target.js"

export type Value = p_.Transformer<
    s_in.Value,
    s_out.Value
>
export type Concrete_Value = p_.Transformer<
    s_in.Value.type_.concrete,
    s_out.Value.data.concrete
>
export type ID_Value_Pairs = p_.Transformer<
    s_in.ID_Value_Pairs,
    s_out.ID_Value_Pairs
>
export type Items = p_.Transformer<
    s_in.Items,
    s_out.Items
>
export type Structural_Token = p_.Transformer<
    s_in.Structural_Token,
    s_out.Token_Trivia
>
export type Document = p_.Transformer<
    s_in.Document,
    s_out.Document
>

