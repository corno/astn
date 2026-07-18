import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../../schemas/authoring_target.js"
import type * as s_out from "../../../schemas/serialized.js"
import type * as s_parameters from "pareto-fountain-pen/interface/schemas/paragraph_serialization"
import type * as s_parameters2 from "../../../schemas/serialization.js"

namespace declarations {
    export type Document = p_.Transformer_With_Parameter<
        s_in.Document,
        s_out.Lines,
        s_parameters.Parameters
    >
    export type Value = p_.Transformer_With_Parameter<
        s_in.Value,
        s_out.Lines,
        {
            'paragraph': s_parameters.Parameters,
            'value': s_parameters2.Parameters
        }
    >
}

//dependencies
import * as t_paragraph_to_serialized from "pareto-fountain-pen/_implementation/transformers/paragraph/serialized"
import * as t_to_paragraph from "./paragraph.js"


export const Document: declarations.Document = ($, $p) => {
    return t_paragraph_to_serialized.Paragraph(
        t_to_paragraph.Document(
            $,
        ),
        $p
    )
}
export const Value: declarations.Value = ($, $p) => {
    return t_paragraph_to_serialized.Phrases(
        t_to_paragraph.Value(
            $,
            $p.value
        ),
        $p.paragraph
    )
}