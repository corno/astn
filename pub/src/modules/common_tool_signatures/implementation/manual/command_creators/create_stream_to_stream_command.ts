import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_loc from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

type My_Error =
    | ['could not read instream', null]
    | ['deserialization failed', d_fp.Phrase]
    | ['could not write to stdout', null]


export const $$ = (func: _pi.Refiner_With_Parameter<d_loc.List_of_Characters, d_fp.Phrase, d_loc.List_of_Characters, { 'document resource identifier': string }>): signatures.commands.stream_in_to_stream_out => {
    return _p.command_procedure(
        ($p, $cr, $qr) => [

            _p.handle_error<d_main.Error, My_Error>(
                [
                    _p.query(
                        $qr['get instream data'](
                            null,
                            ($): My_Error => ['could not read instream', null],
                        ),
                        ($, abort) => func(
                            _p_list_from_text(
                                $,
                                ($) => $,
                            ),
                            ($) => abort(['deserialization failed', $]),
                            {
                                'document resource identifier': "stream input",
                            }
                        ),
                        ($v) => [
                            $cr['log'].execute(
                                {
                                    'message': sh.pg.sentences([
                                        sh.sentence([
                                            sh.ph.serialize($v),
                                        ])
                                    ]),
                                },
                                ($): My_Error => ['could not write to stdout', null],
                            )
                        ]
                    )
                ],
                ($) => [
                    $cr['log error'].execute(
                        {
                            'message': sh.pg.sentences([
                                sh.sentence([
                                    _p.decide.state($, ($) => {
                                        switch ($[0]) {
                                            case 'could not read instream': return _p.ss($, ($) => sh.ph.literal("could not read instream"))
                                            case 'deserialization failed': return _p.ss($, ($) => $)
                                            case 'could not write to stdout': return _p.ss($, ($) => sh.ph.literal("could not write to stdout"))
                                            default: return _p.au($[0])
                                        }
                                    })
                                ])
                            ]),
                        },
                        ($): d_main.Error => ({
                            'exit code': 2
                        }),
                    )
                ],
                () => ({
                    'exit code': 1,
                })
            ),
        ]
    )
}