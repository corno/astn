import type * as p_i from 'pareto-core/interface/transformer'

import type * as d_in from "../../../generated/liana/schemas/authoring_target/data.js"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"

//dependencies
import * as t_to_prose from "./prose.js"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/implementation/manual/transformers/prose/text"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"


    export type Parameters = {
        'write delimiters': boolean
        'indentation': string,
        'newline': string

    }

    export type Doc_Parameters = {
        'indentation': string,
        'newline': string
    }

    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Text,
        Parameters
    >
    export type Document = p_i.Transformer_With_Parameter<
        d_in.Document,
        d_out.Text,
        Doc_Parameters
    >

