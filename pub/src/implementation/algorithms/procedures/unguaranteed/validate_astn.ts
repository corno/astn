import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as parse from "../../../../exceptional/authoring_parse/parse"
import * as create_error_message from "../../transformers/parse_result/string"

import * as d_get_instream_data from "exupery-resources/dist/interface/generated/pareto/schemas/get_instream_data/data_types/source"
import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/source"
import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"

import * as _target from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"

import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/validate_astn"

export type Resources = {
    'queries': {
        'get instream data': _et.Guaranteed_Query<null, d_get_instream_data.Result, null>
    },
    'procedures': {
        'log': _et.Guaranteed_Procedure<d_log.Parameters, null>
        'log error': _et.Guaranteed_Procedure<d_log_error.Parameters, null>
    }
}

export const $$: _et.Unguaranteed_Procedure<_eb.Parameters, _eb.Error, Resources> = ($p, $r) => _easync.up.action(
    _easync.upi.g($r.procedures.log, null),
    _easync.uq.g(
        $r.queries['get instream data'],
        _easync.uq.fixed(null),
        _easync.ut.u(
            ($) => parse.parse(
                $,
                {
                    'tab size': 4,
                }
            ).map_result(
                ($) => ({
                    'lines':
                        _ea.array_literal(["Document is valid ASTN"]),

                }),
            ),
            ($): _eb.Error => ({
                'exit code': 1
            }),
            _easync.eh(
                $r.procedures['log error'],
                ($) => ({
                    'lines': _ea.array_literal([
                        `Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`
                    ])
                }),
                null,
            )
        ),
        null,
    ),
    null,
)