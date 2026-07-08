
import type * as interface_ from "../../../../interface/declarations/transformers/authoring_target/text.js"

//dependencies
import * as t_to_prose from "./prose.js"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const Document: interface_.Document = ($, $p) => t_fountain_pen_to_text.Paragraph(
    t_to_prose.Document(
        $
    ),
    {
        'indentation': $p.indentation,
        'newline': $p.newline
    }
)

export const Value: interface_.Value = ($, $p) => t_fountain_pen_to_text.Phrase(
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