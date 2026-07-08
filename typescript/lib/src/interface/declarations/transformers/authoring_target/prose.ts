
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import type * as d_in from "../../../generated/liana/schemas/authoring_target/data.js"

namespace d_function {

    export type Parameters = {
        'write delimiters': boolean
    }

}


export type Document = p_i.Transformer<
    d_in.Document, d_out.Paragraph
>

export type Value = p_i.Transformer_With_Parameter<
    d_in.Value,
    d_out.Phrase.composed,
    d_function.Parameters
>

export type Token_Trivia = p_i.Transformer<
    d_in.Token_Trivia, d_out.Phrase.composed
>

