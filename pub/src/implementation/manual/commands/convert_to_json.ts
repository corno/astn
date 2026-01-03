import * as _p from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as t_parse_result_to_string from "../schemas/parse_result/serializers"
import * as t_ast_2_json from "../schemas/authoring_parse_tree/transformers/json_target"
import * as s_json from "pareto-json/dist/implementation/manual/schemas/json/serializers"

export const $$: signatures.commands.convert_to_json = _p.command_procedure(
    ($p, $cr, $qr) => [
        _p.query(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                }),
            ),
            ($, abort) => s_json.Document(
                t_ast_2_json.Document(ds_authoring_parse_tree.Document(
                    $,
                    ($) => {
                        _pdev.log_debug_message("Parsing failed" + t_parse_result_to_string.Parse_Error(
                            $, {
                            'position info': ['one based', null]
                        }
                        ), () => { })
                        return abort({
                            'exit code': 1,
                        })
                    },
                    {
                        'tab size': 4,
                    },
                )),
                {
                    'indentation': "    ",
                    'newline': '\n'
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