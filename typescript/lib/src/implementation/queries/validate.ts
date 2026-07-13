import * as p_ from 'pareto-core/implementation/query'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"
import type * as s_serialize_prose from "../../interface/schemas/prose_serialize.js"

//data  types
import type * as s_prose from "../../interface/schemas/prose.js"
import type * as s_parse_tree from "../../interface/schemas/parse_tree.js"

//dependencies
import * as t_deserialize_parse_tree_to_location from "astn-core/implementation/transformers/deserialize_parse_tree/location"
import * as t_location_to_prose from "astn-core/implementation/transformers/location/prose"
import * as r_parse_tree_from_text from "astn-core/implementation/refiners/parse_tree/text"
import * as t_deserialize_parse_tree_to_prose from "astn-core/implementation/transformers/deserialize_parse_tree/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.stream_in_stream_out,
    {
        'tab size': number,
        'serialization parameters': s_serialize_prose.Parameters,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_parse_tree.Document, s_prose.Phrase>(
        (abort) => r_parse_tree_from_text.Document(
            $d.data,
            ($) => abort(
sh.ph.composed([
                t_location_to_prose.Possible_Range(
                    t_deserialize_parse_tree_to_location.Error($),
                    {
                        'character location reporting': ['one based', null],
                    }
                ),
                sh.ph.literal(": "),
                t_deserialize_parse_tree_to_prose.Error(
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
