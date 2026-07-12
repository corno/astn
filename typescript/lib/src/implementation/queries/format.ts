import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"
import type * as s_serialize_prose from "../../interface/schemas/prose_serialize.js"

//data  types
import type * as s_prose from "../../interface/schemas/prose.js"
import type * as s_parse_tree from "../../interface/schemas/parse_tree.js"

//dependencies
import * as t_fp_to_loc from "pareto-fountain-pen/implementation/transformers/prose/list_of_characters"
import * as t_deserialize_parse_tree_to_location from "astn-core/implementation/transformers/deserialize_parse_tree/location"
import * as t_location_to_prose from "astn-core/implementation/transformers/location/prose"
import * as r_parse_tree_from_text from "astn-core/implementation/refiners/parse_tree/list_of_characters"
import * as t_path_to_text from "pareto-resources/implementation/transformers/unrestricted_path/text"
import * as t_deserialize_parse_tree_to_prose from "astn-core/implementation/transformers/deserialize_parse_tree/prose"
import * as t_parse_tree_2_authoring_target from "../transformers/parse_tree/authoring_target.js"
import * as t_authoring_target_to_prose from "../transformers/authoring_target/prose.js"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.process_file_data,
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
                    sh.ph.literal(t_path_to_text.Node_Path($d.path)),
                    sh.ph.literal(":"),
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
            'data': t_fp_to_loc.Paragraph(
                t_authoring_target_to_prose.Document(
                    t_parse_tree_2_authoring_target.Document(
                        $
                    ),
                ),
                $s['serialization parameters']
            )
        })
    )
)
