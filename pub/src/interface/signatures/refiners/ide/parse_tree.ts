import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_in_token from "astn-core/dist/interface/generated/liana/schemas/token/data"
import * as d_out from "../../../../interface/generated/liana/schemas/ide/data"

export type Parameters = {
    'remove commas': boolean
    'indentation string': string
    'current indentation': string
}

export type Whitespace = _pi.Transformer_With_Parameters<d_in_token.Whitespace, d_out.Text_Edits, Parameters>

export type Trivia = _pi.Transformer_With_Parameters<d_in_token.Trivia, d_out.Text_Edits, Parameters>

export type Structural_Token = _pi.Transformer_With_Parameters<d_in.Structural_Token, d_out.Text_Edits, Parameters>

export type Text = _pi.Transformer_With_Parameters<d_in.Text, d_out.Text_Edits, Parameters>

export type ID_Value_Pairs = _pi.Transformer_With_Parameters<d_in.ID_Value_Pairs, d_out.Text_Edits, Parameters>

export type Items = _pi.Transformer_With_Parameters<d_in.Items, d_out.Text_Edits, Parameters>

export type Value = _pi.Transformer_With_Parameters<d_in.Value, d_out.Text_Edits, Parameters>

export type Document = _pi.Transformer_With_Parameters<d_in.Document, d_out.Text_Edits, Parameters>
