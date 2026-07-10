import type * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/data/authoring_target.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

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
    d_in.Value,
    d_out.Text,
    Parameters
>
export type Document = p_.Transformer_With_Parameter<
    d_in.Document,
    d_out.Text,
    Doc_Parameters
>

