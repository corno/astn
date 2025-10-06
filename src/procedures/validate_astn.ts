import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as parse from "../authoring_parse/parse"
import * as create_error_message from "../serializers/parse_result"

import * as t_ast_2_json from "../transformations/ast/json_target"
import * as s_json from "pareto-json/dist/serializers/json"

import { $$ as p_log } from "exupery-resources/dist/procedures/log"
import { $$ as p_log_error } from "exupery-resources/dist/procedures/log_error"

import * as D_Resources from "exupery-resources/dist/types"
import * as _target from "../generated/interface/schemas/authoring_parse_result/data_types/target"

import { $$ as q_get_instream_data } from "exupery-resources/dist/queries/get_instream_data"

export const $$: _eb.Unguaranteed_Main_Initializer = () => _easync.up.action(
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
                        _ea.array_literal(["Document is valid ASTN"]),

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