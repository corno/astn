import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "astn-core/interface/data/parse_tree"
import type * as d_out from "pareto-fountain-pen/interface/data/text"


export type Document = p_.Transformer_With_Parameter<
    d_in.Document,
    d_out.Text,
    {
        'indentation': string,
        'newline': string
    }
>

