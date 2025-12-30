import * as _pt from 'pareto-core-transformer'
import * as _pc from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "exupery-resources/dist/interface/to_be_generated/temp_main"
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as t_parse_result_to_string from "../schemas/parse_result/serializers"

export const $$: signatures.commands.validate_astn = _pc.create_command_procedure(
    ($p, $cr, $qr) => [
        _pc.query_without_error_transformation(
            $qr['get instream data'](
                null,
                ($): d_main.Error => ({
                    'exit code': 1,
                })
            ).refine_without_error_transformation(
                ($, abort) => {
                    ds_authoring_parse_tree.Document( //this is just to validate
                        $,
                        {
                            'tab size': 4,
                        },
                        ($) => {
                            _pdev.log_debug_message("Parsing failed" + t_parse_result_to_string.Parse_Error($, { 'position info': ['one based', null] }), () => { })
                            return abort({
                                'exit code': 1,
                            })
                        },
                    )
                    return {
                        'lines': _pt.list_literal(["Document is valid ASTN"]),
                    }
                },
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

