import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"

//data  types
import type * as s_parse_tree from "../../interface/schemas/parse_tree.js"
import type * as s_file_in_file_out from "pareto-common/interface/schemas/file_in_file_out_query"

//dependencies
import * as r_parse_tree_from_list_of_characters from "astn-core/_implementation/refiners/parse_tree/list_of_characters"
import * as t_ast_2_json from "../transformers/parse_tree/json_target.js"
import * as t_parse_tree_deserialization_to_location from "astn-core/_implementation/transformers/parse_tree_deserialization/location"
import * as ser_parse_tree_deserialization from "astn-core/_implementation/serializers/parse_tree_deserialization"
import * as t_json_to_prose from "pareto-json/_implementation/serializers/json_without_guaranteed_unique_keys"
import * as t_location_to_prose from "astn-core/_implementation/serializers/location"
import * as ser_path from "pareto-resources/implementation/serializers/unrestricted_path"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose_simple/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_pareto_common.file_in_file_out,
    {
        'tab size': number,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_parse_tree.Document, s_file_in_file_out.Error>(
        (abort) => r_parse_tree_from_list_of_characters.Document(
            $d.data,
            ($) => abort(
                {
                    'phrase': sh.ph.composed([
                        ser_path.Node_Path($d.path),
                        sh.ph.text(":"),
                        t_location_to_prose.Possible_Range(
                            t_parse_tree_deserialization_to_location.Error($),
                            {
                                'character location reporting': ['one based', null],
                            }
                        ),
                        sh.ph.text(": "),
                        ser_parse_tree_deserialization.Error(
                            $,
                        )
                    ])
                }
            ),
            {
                'tab size': 4,
            },
        )
    )).transform(
        ($) => ({
            'paragraph': t_json_to_prose.Document(
                t_ast_2_json.Document(
                    $
                ),
            )
        })
    )
)
