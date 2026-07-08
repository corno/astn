import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import * as interface_ from "../../../interface/declarations/queries.js"

//data  types
import * as d_prose from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import * as d_parse_tree from "astn-core/interface/generated/liana/schemas/parse_tree/data"

//dependencies
import * as t_fp_to_loc from "pareto-fountain-pen/implementation/manual/transformers/prose/list_of_characters"
import * as t_deserialize_parse_tree_to_location from "astn-core/implementation/manual/transformers/deserialize_parse_tree/location"
import * as t_location_to_prose from "astn-core/implementation/manual/transformers/location/prose"
import * as r_parse_tree_from_text from "astn-core/implementation/manual/refiners/parse_tree/list_of_characters"
import * as t_path_to_text from "pareto-resources/implementation/manual/transformers/unrestricted_path/text"
import * as t_deserialize_parse_tree_to_prose from "astn-core/implementation/manual/transformers/deserialize_parse_tree/prose"
import * as t_ast_2_json from "../transformers/parse_tree/json_target.js"
import * as t_json_to_prose from "pareto-json/implementation/manual/transformers/json_without_guaranteed_unique_keys/prose"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

export const $$: interface_.functions.process_file_data = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<d_parse_tree.Document, d_prose.Phrase>(
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
                t_json_to_prose.Document(
                    t_ast_2_json.Document(
                        $
                    ),
                ),
                $s['serialization parameters']
            )
        })
    )
)
