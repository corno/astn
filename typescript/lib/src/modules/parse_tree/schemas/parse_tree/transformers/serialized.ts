import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../schema.js"
import type * as s_out from "pareto-fountain-pen/modules/paragraph/schemas/serialized/schema"
import type * as s_parameters from "pareto-fountain-pen/modules/paragraph/schemas/paragraph_serialization/schema"

namespace declarations {
    export type Document = p_.Transformer_With_Parameter<
        s_in.Document,
        s_out.Lines,
        s_parameters.Parameters
    >
}

//dependencies
import * as t_paragraph_to_serialized from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/transformers/serialized"
import * as t_to_paragraph from "./paragraph.js"


export const Document: declarations.Document = ($, $p) => {
    return t_paragraph_to_serialized.Paragraph(
        t_to_paragraph.Document(
            $,
        ),
        $p
    )
}