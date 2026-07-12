
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_out from "pareto-fountain-pen/interface/data/prose"
import type * as s_in from "../../../interface/schemas/authoring_target.js"

namespace s_function {

    export type Parameters = {
        'write delimiters': boolean
    }

}


export type Document = p_.Transformer<
    s_in.Document, s_out.Paragraph
>

export type Value = p_.Transformer_With_Parameter<
    s_in.Value,
    s_out.Phrase.composed,
    s_function.Parameters
>

export type Token_Trivia = p_.Transformer<
    s_in.Token_Trivia, s_out.Phrase.composed
>

