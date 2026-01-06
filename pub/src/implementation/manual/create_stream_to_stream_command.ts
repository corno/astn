import * as _p from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"

type My_Error =
    | ['could not read instream', null]
    | ['parsing failed', string]
    | ['could not write to stdout', null]


export const $$ = (func: _pi.Text_Deserializer<string>): signatures.commands.stream_in_to_stream_out => {
    return _p.command_procedure(
        ($p, $cr, $qr) => [

            _p.create_error_handling_context<d_main.Error, My_Error>(
                [
                    _p.query(
                        $qr['get instream data'](
                            null,
                            ($): My_Error => ['could not read instream', null],
                        ),
                        ($, abort) => func(
                            $,
                            ($) => abort(['parsing failed', $]),
                        ),
                        ($v) => [
                            $cr['write to stdout'].execute(
                                $v,
                                ($): My_Error => ['could not write to stdout', null],
                            )
                        ]
                    )
                ],
                ($) => [
                    $cr['log error'].execute(
                        {
                            'lines': _p.list.literal([_p.sg($, ($) => {
                                switch ($[0]) {
                                    case 'could not read instream': return _p.ss($, ($) => `could not read instream`)
                                    case 'parsing failed': return _p.ss($, ($) => $)
                                    case 'could not write to stdout': return _p.ss($, ($) => `could not write to stdout`)
                                    default: return _p.au($[0])
                                }
                            })]),
                        },
                        ($): d_main.Error => ({
                            'exit code': 2
                        }),
                    )
                ],
                ({
                    'exit code': 1,
                })
            ),
        ]
    )
}