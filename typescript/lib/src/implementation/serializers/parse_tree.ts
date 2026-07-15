import * as p_ from 'pareto-core/implementation/serializer'

import type * as s_in from "../../interface/schemas/parse_tree.js"

namespace declarations {
    export type Document = p_.Paragraph_Serializer<
        s_in.Document
    >
}

//dependencies
import * as t_authoring_target_to_text from "../transformers/authoring_target/paragraph.js"
import * as t_to_authoring_target from "../transformers/parse_tree/authoring_target.js"



export const Document: declarations.Document = ($) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        )
    )
}