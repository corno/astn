import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../generated/pareto/schemas/parse_tree/data_types/source"
import * as d_in_token from "../../../../interface/generated/pareto/schemas/token/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/ide/data_types/target"

export type Parameters = {
    'remove commas': boolean
    'indentation string': string
    'current indentation': string
}

export type Whitespace = _pi.Transformer_With_Parameters<d_in_token.Whitespace, d_out.Text_Edits, Parameters>

export type Trivia = _pi.Transformer_With_Parameters<d_in_token.Trivia, d_out.Text_Edits, Parameters>

export type Structural_Token = _pi.Transformer_With_Parameters<d_in.Structural_Token, d_out.Text_Edits, Parameters>

export type String = _pi.Transformer_With_Parameters<d_in.String, d_out.Text_Edits, Parameters>

export type Key_Value_Pairs = _pi.Transformer_With_Parameters<d_in.Key_Value_Pairs, d_out.Text_Edits, Parameters>

export type Elements = _pi.Transformer_With_Parameters<d_in.Elements, d_out.Text_Edits, Parameters>

export type Value = _pi.Transformer_With_Parameters<d_in.Value, d_out.Text_Edits, Parameters>

export type Document = _pi.Transformer_With_Parameters<d_in.Document, d_out.Text_Edits, Parameters>
