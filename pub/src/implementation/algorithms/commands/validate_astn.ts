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

export type Query_Resources = {
    'get instream data': _et.Query<d_get_instream_data.Result, null, null>
}

export type Command_Resources = {
    'log': _et.Command<null, d_log.Parameters>
    'log error': _et.Command<null, d_log_error.Parameters>
}
export type Procedure = _et.Command_Procedure<d_main.Error, d_main.Parameters, Command_Resources, Query_Resources>

import * as parse from "../../../exceptional/authoring_parse/parse"
import * as t_parse_result_to_string from "../transformers/parse_result/string"

export const $$: Procedure = _easync.create_command_procedure(
    ($p, $cr, $qr) => [
        _easync.p.stage(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                })
            ).stage(
                ($) => {
                    return parse.parse(
                        $,
                        {
                            'tab size': 4,
                        }
                    ).transform(($) => {
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

