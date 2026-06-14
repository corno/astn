import * as p_ from 'pareto-core/dist/command'
import * as pi from 'pareto-core/dist/interface'

import * as signatures from "../../../interface/commands"

//data types
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"
import * as d_transform_file from "../../../interface/to_be_generated/transform_file"
import * as d_loc from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as r_file_in_file_out_from_main from "../schemas/file_in_file_out/refiners/main"
import * as t_path_to_text from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/text"
import * as t_transform_file_to_fountain_pen from "../schemas/transform_file/transformers/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export type Creator = (
    deserializer: pi.Refiner_With_Parameter<
        d_loc.List_of_Characters,
        d_fp.Phrase,
        d_loc.List_of_Characters,
        {
            'document resource identifier': string
        }
    >,
) => signatures.procedures.file_in_to_file_out


export const $$: Creator = (deserializer) => p_.command_procedure(
    ($d, $s, $q, $c) => [

        p_.handle_error<d_main.Error, d_transform_file.Error>(
            [

                p_.refine_without_error_transformation(
                    (abort) => r_file_in_file_out_from_main.Parameters($d, ($) => abort(['file in file out', ['command line arguments', $]])),
                    ($r) => [

                        p_.query(
                            $q['read file'](
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
                                        'document resource identifier': t_path_to_text.Node_Path($r.in),
                                    },
                                ),
                            }),
                            ($v) => [
                                $c['write file'].execute(
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
                $c['log error'].execute(
                    {
                        'message': sh.pg.sentences([
                            sh.sentence([
                                t_transform_file_to_fountain_pen.Error($)
                            ])
                        ]),
                    },
                    ($) => ({
                        'exit code': 2
                    })
                )
            ],
            () => ({
                'exit code': 1
            }),
        ),
    ])
