import * as p_ from 'pareto-core/dist/implementation/query'
import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'
import p_super_query_result from 'pareto-core/dist/implementation/query/super_query_result'

import * as interface_ from "../../../interface/queries"

//data  types
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_parse_tree from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/text"
import * as t_deserialize_parse_tree_to_fp from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: interface_.query_functions.process_stream_data = p_.query_function(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<d_parse_tree.Document, d_fp.Phrase>(
        (abort) => r_parse_tree_from_text.Document(
            $d.data,
            ($) => abort(sh.ph.composed([
                t_location_to_fountain_pen.Possible_Range(
                    t_deserialize_parse_tree_to_location.Error($),
                    {
                        'character location reporting': ['one based', null],
                    }
                ),
                sh.ph.literal(": "),
                t_deserialize_parse_tree_to_fp.Error(
                    $,
                )
            ])),
            {
                'tab size': 4,
            },
        )
    )).transform(
        ($) => ({
            'data': p_list_from_text(
                "Document is valid ASTN",
                ($) => $
            )
        })
    )
)
