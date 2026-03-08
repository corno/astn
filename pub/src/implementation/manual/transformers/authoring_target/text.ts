import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/authoring_target/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_to_fountain_pen from "./fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/text"

export type Parameters = { 
    'write delimiters': boolean 
    'indentation': string,
    'newline': string

}

export type Value = _pi.Transformer_With_Parameter<d_in.Value, d_out.Text, Parameters>

export const Value: Value = ($, $p) => t_fountain_pen_to_text.Phrase(
    t_to_fountain_pen.Value(
        $,
        {
            'in concise group': false,
            'write delimiters': $p['write delimiters']
        }
    ),
    {
        'indentation': $p.indentation,
        'newline': $p.newline
    }
)