import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as parse from "../../../../exceptional/authoring_parse/parse"
import * as create_error_message from "../../transformations/parse_result/string"

import * as t_ast_2_json from "../../transformations/authoring_parse_tree/json_target"
import * as s_json from "pareto-json/dist/exceptional/serializers/json"

import { $$ as p_log } from "exupery-resources/dist/implementation/algorithms/procedures/guaranteed/log"

import * as _target from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"


import { $$ as q_get_instream_data } from "exupery-resources/dist/implementation/algorithms/queries/guaranteed/get_instream_data"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/convert_to_json"


export const $$: _eb.Unguaranteed_Main_Initializer = (

) => _easync.up.action(
    _easync.upi.g(p_log),
    _easync.uq.g(
        q_get_instream_data,
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
                        _ea.array_literal([s_json.Document(
                            t_ast_2_json.Document($),
                            {
                                'indentation': "    ",
                                'newline': '\n'
                            }
                        )])

                }),
            ),
            ($): _eb.Error => ({
                'exit code': 1
            }),
            _easync.eh(
                p_log,
                ($) => ({
                    'lines': _ea.array_literal([
                        `Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`
                    ])

                }),
            )
        ),
    )
)