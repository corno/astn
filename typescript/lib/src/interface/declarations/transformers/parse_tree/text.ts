import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/text/data"


    export type Document = p_i.Transformer_With_Parameter<
        d_in.Document,
        d_out.Text,
        {
            'indentation': string,
            'newline': string
        }
    >

