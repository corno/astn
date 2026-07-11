import * as p_ti from 'pareto-core/interface/transformer'

import type * as s_in from "astn-core/interface/data/parse_tree"
import type * as s_in_token from "astn-core/interface/data/token"
import type * as s_out from "../../../interface/schemas/ide.js"

export namespace s_function {

    export type Parameters = {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
}


export type Whitespace = p_ti.Transformer_With_Parameter<
    s_in_token.Whitespace,
    s_out.Text_Edits,
    s_function.Parameters
>

export type Trivia = p_ti.Transformer_With_Parameter<
    s_in_token.Trivia,
    s_out.Text_Edits,
    s_function.Parameters
>

export type Structural_Token = p_ti.Transformer_With_Parameter<
    s_in.Structural_Token,
    s_out.Text_Edits,
    s_function.Parameters
>

export type Text = p_ti.Transformer_With_Parameter<
    s_in.Text,
    s_out.Text_Edits,
    s_function.Parameters
>

export type ID_Value_Pairs = p_ti.Transformer_With_Parameter<
    s_in.ID_Value_Pairs,
    s_out.Text_Edits,
    s_function.Parameters
>

export type Items = p_ti.Transformer_With_Parameter<
    s_in.Items,
    s_out.Text_Edits,
    s_function.Parameters
>

export type Value = p_ti.Transformer_With_Parameter<
    s_in.Value,
    s_out.Text_Edits,
    s_function.Parameters
>

export type Document = p_ti.Transformer_With_Parameter<
    s_in.Document,
    s_out.Text_Edits,
    s_function.Parameters
>
