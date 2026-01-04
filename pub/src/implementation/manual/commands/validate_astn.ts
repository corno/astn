import * as _pt from 'pareto-core-transformer'
import * as _p from 'pareto-core-command'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"

type My_Error =
    | ['could not read instream', null]
    | ['parsing failed', string]
    | ['could not log', null]

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as t_parse_result_to_string from "../schemas/parse_result/serializers"

export const $$: signatures.commands.validate_astn = _p.command_procedure(
    ($p, $cr, $qr) => [
        _p.create_error_handling_context<d_main.Error, My_Error>(
            [
                _p.query(
                    $qr['get instream data'](
                        null,
                        ($): My_Error => ['could not read instream', null],
                    ),
                    ($, abort) => {
                        ds_authoring_parse_tree.Document( //this is just to validate
                            $,
                            ($) => abort(['parsing failed', t_parse_result_to_string.Parse_Error($, { 'position info': ['one based', null] })]),
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
                            ($): My_Error => ['could not log', null],
                        )
                    ]
                )

            ],
            ($) => [
                $cr['log error'].execute(
                    {
                        'lines': _pt.list.literal([_p.cc($, ($) => {
                            switch ($[0]) {
                                case 'could not read instream': return _p.ss($, ($) => `could not read instream`)
                                case 'parsing failed': return _p.ss($, ($) => $)
                                case 'could not log': return _p.ss($, ($) => `could not log`)
                                default: return _p.au($[0])
                            }
                        })]),
                    },
                    ($): d_main.Error => ({
                        'exit code': 2
                    }),
                )
            ],
            {
                'exit code': 1
            }
        ),
    ]
)

