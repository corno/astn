
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import type * as d_in from "../../../interface/data/authoring_target.js"

namespace d_function {

    export type Parameters = {
        'write delimiters': boolean
    }

}


export type Document = p_.Transformer<
    d_in.Document, d_out.Paragraph
>

export type Value = p_.Transformer_With_Parameter<
    d_in.Value,
    d_out.Phrase.composed,
    d_function.Parameters
>

export type Token_Trivia = p_.Transformer<
    d_in.Token_Trivia, d_out.Phrase.composed
>

