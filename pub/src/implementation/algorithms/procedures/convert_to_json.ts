import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as parse from "../../../exceptional/authoring_parse/parse"
import * as create_error_message from "../transformers/parse_result/string"

import * as t_ast_2_json from "../transformers/authoring_parse_tree/json_target"
import * as s_json from "pareto-json/dist/exceptional/serializers/json"

import * as d_get_instream_data from "exupery-resources/dist/interface/generated/pareto/schemas/get_instream_data/data_types/source"
import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/source"

import * as _target from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"


import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/convert_to_json"

export type Resources = {
    'queries': {
        'get instream data': _et.Data_Preparer<null, d_get_instream_data.Result, null>
    },
    'procedures': {
        'log': _et.Command<d_log.Parameters, null>
    }
}

export const $$: _et.Command_Procedure<_eb.Parameters, _eb.Error, Resources> = (
    $r,
) => ($p) => _easync.execute_with_async_data(
    $r.commands.log,
    $r.queries['get instream data'](null).map_(
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
        ).transform(
            ($) => $,
            () => _ea.deprecated_panic("SFSDFF")
        )
    ),
).map_error(($) => ({
    'exit code': 1
}))
