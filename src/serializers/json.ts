import * as pa from 'exupery-core-alg'


import * as s_in from "../generated/interface/schemas/target_json/resolved"

import * as t_fountain_pen from "../transformations/target_json/fountain_pen_block"

import * as s_fp from "pareto-fountain-pen/dist/serialize/block"

export const Document = (
    $: s_in.Document,
    $p: {
        'indentation': string
        'newline': string
    }
): string => {
    return s_fp.Block(
        t_fountain_pen.Document(
            $,
        ),
        {
            'indentation': $p.indentation,
            'newline': $p['newline'],
        }
    )

}