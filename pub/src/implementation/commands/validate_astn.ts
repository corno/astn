import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'

import * as signatures from "../../interface/signatures"

//data types
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_parse_result from "../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

//dependencies
import * as ds_authoring_parse_tree from "../deserializers/schemas/authoring_parse_tree"
import * as t_parse_result_to_string from "../serializers/schemas/parse_result"

export const $$: signatures.commands.validate_astn = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.query_without_error_transformation(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                })
            ).deprecated_refine_old(
                ($) => {
                    return _ea.create_refinement_context<d_parse_tree._T_Document, d_parse_result.Parse_Error>((abort) => ds_authoring_parse_tree.Document(
                        $,
                        {
                            'tab size': 4,
                        },
                        abort,
                    )).transform_result(($) => {
                        return {
                            'lines': _ea.list_literal(["Document is valid ASTN"]),
                        }
                    })
                },
                ($): d_main.Error => {
                    _ed.log_debug_message("Parsing failed" + t_parse_result_to_string.Parse_Error($, { 'position info': ['one based', null] }), () => { })
                    return {
                        'exit code': 1,
                    }
                }
            ),
            ($v) => [
                $cr['log'].execute(
                    $v,
                    ($): d_main.Error => {
                        //highly unlikely for log to fail
                        return {
                            'exit code': 1,
                        }
                    },
                )
            ]
        )
    ]
)

