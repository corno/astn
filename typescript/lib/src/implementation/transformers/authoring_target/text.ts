import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/authoring_target.js"
import type * as s_out from "pareto-fountain-pen/interface/data/text"
export namespace s_parameters {
    export type Parameters = {
        'write delimiters': boolean
        'indentation': string,
        'newline': string

    }

    export type Doc_Parameters = {
        'indentation': string,
        'newline': string
    }
}

namespace declarations {
    export type Value = p_.Transformer_With_Parameter<
        s_in.Value,
        s_out.Text,
        s_parameters.Parameters
    >
    export type Document = p_.Transformer_With_Parameter<
        s_in.Document,
        s_out.Text,
        s_parameters.Doc_Parameters
    >
}

//dependencies
import * as t_to_prose from "./prose.js"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/implementation/transformers/prose/text"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Document: declarations.Document = ($, $p) => t_fountain_pen_to_text.Paragraph(
    t_to_prose.Document(
        $
    ),
    {
        'indentation': $p.indentation,
        'newline': $p.newline
    }
)

export const Value: declarations.Value = ($, $p) => t_fountain_pen_to_text.Phrase(
    sh.ph.composed(
        t_to_prose.Value(
            $,
            {
                'write delimiters': $p['write delimiters']
            }
        )
    ),
    {
        'indentation': $p.indentation,
        'newline': $p.newline
    }
)