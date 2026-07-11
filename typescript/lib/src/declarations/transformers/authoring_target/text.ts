import type * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "../../../interface/schemas/authoring_target.js"
import type * as s_out from "pareto-fountain-pen/interface/data/text"

export type Parameters = {
    'write delimiters': boolean
    'indentation': string,
    'newline': string

}

export type Doc_Parameters = {
    'indentation': string,
    'newline': string
}

export type Value = p_.Transformer_With_Parameter<
    s_in.Value,
    s_out.Text,
    Parameters
>
export type Document = p_.Transformer_With_Parameter<
    s_in.Document,
    s_out.Text,
    Doc_Parameters
>

