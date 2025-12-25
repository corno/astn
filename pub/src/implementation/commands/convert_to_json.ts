import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'


import * as d_get_instream_data from "exupery-resources/dist/interface/generated/pareto/schemas/get_instream_data/data_types/source"
import * as d_write_to_stdout from "exupery-resources/dist/interface/generated/pareto/schemas/write_to_stdout/data_types/source"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"
import * as d_parse_result from "../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"


import * as resources_exupery from "exupery-resources/dist/interface/resources"

export type Procedure = _et.Command_Procedure<
    resources_exupery.commands.main,
    {
        'write to stdout': resources_exupery.commands.write_to_stdout,
        'log error': resources_exupery.commands.log_error,
    },
    {
        'get instream data': resources_exupery.queries.get_instream_data,
    }
>

import * as r_parse from "../deserializers/schemas/authoring_parse_tree"
import * as t_parse_result_to_string from "../serializers/schemas/parse_result"
import * as t_ast_2_json from "../transformers/schemas/authoring_parse_tree/json_target"
import * as s_json from "pareto-json/dist/implementation/serializers/schemas/json"

export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.query_without_error_transformation(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                }),
            ).deprecated_refine_old(
                ($) => {
                    return _ea.create_refinement_context<d_parse_tree._T_Document, d_parse_result.Parse_Error>((abort) => r_parse.Document(
                        $,
                        {
                            'tab size': 4,
                        },
                        abort,
                    )).transform_result(($) => {
                        return s_json.Document(
                            t_ast_2_json.Document($),
                            {
                                'indentation': "    ",
                                'newline': '\n'
                            }
                        )
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
                $cr['write to stdout'].execute(
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