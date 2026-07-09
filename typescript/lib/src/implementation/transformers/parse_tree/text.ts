
import type * as interface_ from "../../../declarations/transformers/parse_tree/text.js"

//dependencies
import * as t_authoring_target_to_text from "../authoring_target/text.js"
import * as t_to_authoring_target from "./authoring_target.js"



export const Document: interface_.Document = ($, $p) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        ),
        $p,
    )
}