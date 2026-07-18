import * as p_ from 'pareto-core/implementation/query'
import p_super_query_result from 'pareto-core/implementation/query/super_query_result'

import type * as query_interfaces_stream_in_stream_out from "pareto-common/modules/stream_in_stream_out/interface/queries"

//data  types
import type * as s_parse_tree from "../../schemas/parse_tree.js"
import type * as s_file_in_file_out_query from "pareto-common/modules/file_in_file_out/schemas/query"

//dependencies
import * as t_parse_tree_deserialization_to_location from "astn-core/modules/deserialization/implementation/transformers/parse_tree_deserialization/location"
import * as ser_location from "astn-core/modules/deserialization/implementation/serializers/location"
import * as r_parse_tree_from_list_of_characters from "astn-core/modules/deserialization/implementation/refiners/parse_tree/list_of_characters"
import * as ser_parse_tree_deserialization from "astn-core/modules/deserialization/implementation/serializers/parse_tree_deserialization"

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

export const $$: p_.Query_Implementation<
    query_interfaces_stream_in_stream_out.operation,
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
            'paragraph': sh.pg.sentences([
                sh.sentence([
                    sh.ph.text("Document is valid ASTN")
                ])
            ])
        })
    )
)
