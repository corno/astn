
import * as d_in from "../../../../interface/generated/pareto/schemas/json/data_types/source"

import * as t_fountain_pen from "./transformers/fountain_pen_block"

import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"

export const Document = (
    $: d_in.Document,
    $p: {
        'indentation': string
        'newline': string
    }
): string => s_fp.Group(
    t_fountain_pen.Document(
        $,
    ),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)