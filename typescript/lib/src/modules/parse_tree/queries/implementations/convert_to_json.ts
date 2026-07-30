import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_file_in_file_out from "pareto-common/modules/file_in_file_out/queries/interfaces"

//data  types
import type * as s_parse_tree from "astn-core/modules/deserialization/schemas/parse_tree/schema"
import type * as s_file_in_file_out_query from "pareto-common/modules/file_in_file_out/schemas/query/schema"

//dependencies
import * as r_parse_tree_from_list_of_characters from "astn-core/modules/deserialization/schemas/parse_tree/refiners/list_of_characters"
import * as t_ast_2_json from "../../schemas/parse_tree/transformers/json_target.js"
import * as t_parse_tree_deserialization_to_location from "astn-core/modules/deserialization/schemas/parse_tree_deserialization/transformers/location"
import * as ser_parse_tree_deserialization from "astn-core/modules/deserialization/schemas/parse_tree_deserialization/serializers"
import * as t_json_to_paragraph from "pareto-json/modules/serialization/schemas/without_guaranteed_unique_keys/transformers/paragraph"
import * as ser_location from "astn-core/modules/deserialization/schemas/location/serializers"
import * as ser_path from "pareto-filesystem-unrestricted-api/modules/unrestricted/schemas/path/serializers"

//shorthands
import * as sh from "pareto-fountain-pen/modules/paragraph/schemas/paragraph/shorthands/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_file_in_file_out.operation,
    {
        'tab size': number,
    },
    null
> = p_.query(
    ($d, $s, $q) => p_super_query_result(p_.e.refine<s_parse_tree.Document, s_file_in_file_out_query.Error>(
        (abort) => r_parse_tree_from_list_of_characters.Document(
            $d.data,
            ($) => abort(
                {
                    'message': sh.ph.composed([
                        sh.ph.text(ser_path.Node_Path($d.path)),
                        sh.ph.text(":"),
                        sh.ph.text(
                            ser_location.Possible_Range(
                                t_parse_tree_deserialization_to_location.Error($),
                                {
                                    'character location reporting': ['one based', null],
                                }
                            )
                        ),
                        sh.ph.text(": "),
                        sh.ph.text(
                            ser_parse_tree_deserialization.Error(
                                $,
                            )
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
            'paragraph': t_json_to_paragraph.Document(
                t_ast_2_json.Document(
                    $
                ),
            )
        })
    )
)
