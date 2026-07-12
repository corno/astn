import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_out from "pareto-fountain-pen/interface/data/text"
import type * as s_in from "astn-core/interface/data/parse_tree"
namespace declarations {
    export type Document = p_.Transformer_With_Parameter<
        s_in.Document,
        s_out.Text,
        {
        'indentation': string,
        'newline': string
    }
    >
}

//dependencies
import * as t_authoring_target_to_text from "../authoring_target/text.js"
import * as t_to_authoring_target from "./authoring_target.js"



export const Document: declarations.Document = ($, $p) => {
    return t_authoring_target_to_text.Document(
        t_to_authoring_target.Document(
            $,
        ),
        $p,
    )
}