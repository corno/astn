import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_transform_file from "../../../interface/to_be_generated/transform_file"

//dependencies
import * as r_file_in_file_out_from_main from "../schemas/file_in_file_out/refiners/main"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/schemas/path/transformers/text"
import * as t_transform_file_to_fountain_pen from "../schemas/transform_file/transformers/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/text"


export type Creator = (
    deserializer: _pi.Refiner_With_Parameters<
        string,
        string,
        string,
        {
            'document resource identifier': string
        }
    >,
) => signatures.commands.file_in_to_file_out


export const $$: Creator = (deserializer) => _p.command_procedure(($p, $cr, $qr) => [

    _p.handle_error<d_main.Error, d_transform_file.Error>(
        [

            _p.refine_without_error_transformation(
                (abort) => r_file_in_file_out_from_main.Parameters($p, ($) => abort(['file in file out', ['command line arguments', $]])),
                ($r) => [

                    _p.query(
                        $qr['read file'](
                            $r.in,
                            ($): d_transform_file.Error => {
                                return ['file in file out', ['reading file', $]]
                            }
                        ),
                        ($, abort) => ({
                            'path': $r.out,
                            'data': deserializer(
                                $,
                                ($) => abort(['processing', $]),
                                {
                                    'document resource identifier': _p_text_from_list(
                                        t_path_to_text.Node_Path($r.in),
                                        ($) => $,
                                    ),
                                },
                            ),
                        }),
                        ($v) => [
                            $cr['write file'].execute(
                                $v,
                                ($) => {
                                    return ['file in file out', ['writing file', $]]
                                },

                            )
                        ]
                    )
                ]
            ),
        ],
        ($) => [
            $cr['log error'].execute(
                {
                    'lines': _p.list.literal([
                        _p_text_from_list(
                            t_fp_to_text.Block_Part(
                                t_transform_file_to_fountain_pen.Error($),
                                { 'indentation': `    `, 'newline': `\n` }
                            ),
                            ($) => $,
                        )
                    ])
                },
                ($) => ({
                    'exit code': 2
                })
            )
        ],
        {
            'exit code': 1
        },
    ),
])
