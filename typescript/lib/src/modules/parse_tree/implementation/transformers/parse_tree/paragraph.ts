import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "../../../schemas/parse_tree.js"
import type * as s_out from "../../../schemas/paragraph.js"

namespace declarations {
    export type Document = p_.Transformer<
        s_in.Document,
        s_out.Paragraph
    >
}

//dependencies
import * as t_authoring_target_to_text from "../../../../authoring_target/implementation/transformers/authoring_target/paragraph.js"
import * as t_to_authoring_target from "./authoring_target.js"



export const Document: declarations.Document = ($) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        )
    )
}