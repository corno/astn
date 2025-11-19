import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'


import * as d_get_instream_data from "exupery-resources/dist/interface/generated/pareto/schemas/get_instream_data/data_types/source"
import * as d_write_to_stdout from "exupery-resources/dist/interface/generated/pareto/schemas/write_to_stdout/data_types/source"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/validate_astn"

export type Query_Resources = {
    'get instream data': _et.Stager<d_get_instream_data.Result, null, null>
}

export type Command_Resources = {
    'write to stdout': _et.Command<null, d_write_to_stdout.Parameters>
    'log error': _et.Command<null, d_log_error.Parameters>
}
export type Procedure = _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources>






import * as parse from "../../../exceptional/authoring_parse/parse"
import * as t_parse_result_to_string from "../transformers/parse_result/string"
import * as t_ast_2_json from "../transformers/authoring_parse_tree/json_target"
import * as s_json from "pareto-json/dist/exceptional/serializers/json"

export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.stage(
            $qr['get instream data'](null).transform_error_temp(($): d_main.Error => ({
                'exit code': 1,
            })).stage(
                ($) => {
                    return parse.parse(
                        $,
                        {
                            'tab size': 4,
                        }
                    ).transform(($) => {
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