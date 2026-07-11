import * as p_ti from 'pareto-core/interface/transformer'

import type * as d_in from "astn-core/interface/data/parse_tree"
import type * as d_in_token from "astn-core/interface/data/token"
import type * as d_out from "../../../interface/schemas/ide.js"

export namespace d_function {

    export type Parameters = {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
}


export type Whitespace = p_ti.Transformer_With_Parameter<
    d_in_token.Whitespace,
    d_out.Text_Edits,
    d_function.Parameters
>

export type Trivia = p_ti.Transformer_With_Parameter<
    d_in_token.Trivia,
    d_out.Text_Edits,
    d_function.Parameters
>

export type Structural_Token = p_ti.Transformer_With_Parameter<
    d_in.Structural_Token,
    d_out.Text_Edits,
    d_function.Parameters
>

export type Text = p_ti.Transformer_With_Parameter<
    d_in.Text,
    d_out.Text_Edits,
    d_function.Parameters
>

export type ID_Value_Pairs = p_ti.Transformer_With_Parameter<
    d_in.ID_Value_Pairs,
    d_out.Text_Edits,
    d_function.Parameters
>

export type Items = p_ti.Transformer_With_Parameter<
    d_in.Items,
    d_out.Text_Edits,
    d_function.Parameters
>

export type Value = p_ti.Transformer_With_Parameter<
    d_in.Value,
    d_out.Text_Edits,
    d_function.Parameters
>

export type Document = p_ti.Transformer_With_Parameter<
    d_in.Document,
    d_out.Text_Edits,
    d_function.Parameters
>
