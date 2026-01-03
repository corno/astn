import * as _pt from 'pareto-core-transformer'
import * as _p from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as t_parse_result_to_string from "../schemas/parse_result/serializers"

export const $$: signatures.commands.validate_astn = _p.command_procedure(
    ($p, $cr, $qr) => [
        _p.query(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                })
            ),
            ($, abort) => {
                ds_authoring_parse_tree.Document( //this is just to validate
                    $,
                    ($) => {
                        _pdev.log_debug_message("Parsing failed" + t_parse_result_to_string.Parse_Error($, { 'position info': ['one based', null] }), () => { })
                        return abort({
                            'exit code': 1,
                        })
                    },
                    {
                        'tab size': 4,
                    },
                )
                return {
                    'lines': _pt.list.literal(["Document is valid ASTN"]),
                }
            },
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

