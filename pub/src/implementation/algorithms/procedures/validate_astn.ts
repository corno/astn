import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ed from 'exupery-core-dev'


import * as d_get_instream_data from "exupery-resources/dist/interface/generated/pareto/schemas/get_instream_data/data_types/source"
import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/source"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"
import * as d_main from "exupery-resources/dist/interface/temp_main"

import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/validate_astn"

export type Resources = {
    'queries': {
        'get instream data': _et.Data_Preparer<null, d_get_instream_data.Result, null>
    },
    'commands': {
        'log': _et.Command<d_log.Parameters, null>
        'log error': _et.Command<d_log_error.Parameters, null>
    }
}
export type Procedure = _et.Command_Procedure<d_main.Parameters, d_main.Error, Resources>





import * as parse from "../../../exceptional/authoring_parse/parse"
import * as t_parse_result_to_string from "../transformers/parse_result/string"

export const $$: Procedure = _easync.create_command_procedure(
    ($r, $p) => $r.commands['log'].execute.prepare(
        ($): d_main.Error => {
            //highly unlikely for log to fail
            return {
                'exit code': 1,
            }
        },
        $r.queries['get instream data'](null).transform_error_temp(($): d_main.Error => ({
            'exit code': 1,
        })).process(
            ($) => {
                return parse.parse(
                    $,
                    {
                        'tab size': 4,
                    }
                ).transform(($) => {
                    return {
                        'lines': _ea.array_literal(["Document is valid ASTN"]),
                    }
                })
            },
            ($): d_main.Error => {
                _ed.log_debug_message("Parsing failed" + t_parse_result_to_string.Parse_Error($, { 'position info': ['one based', null] }), () => { })
                return {
                    'exit code': 1,
                }
            }
        )
    )
)