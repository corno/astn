import * as _p from 'pareto-core/dist/command'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_transform_file from "../../../interface/to_be_generated/transform_file"

//dependencies
import * as r_file_in_file_out_from_main from "../schemas/file_in_file_out/refiners/main"
import * as s_path from "pareto-resources/dist/implementation/manual/schemas/path/serializers"
import * as s_transform_file from "../schemas/transform_file/serializers"


export type Creator = (
    deserializer: _pi.Deserializer_With_Parameters<
        string,
        string,
        {
            'uri': string
        }
    >,
) => signatures.commands.file_in_to_file_out


export const $$: Creator = (deserializer) => _p.command_procedure(($p, $cr, $qr) => [

    _p.create_error_handling_context<d_main.Error, d_transform_file.Error>(
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
                                    'uri': s_path.Node_Path($r.in),
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
                    'lines': _p.list.literal([s_transform_file.Error($)])
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
