import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/text"
import * as t_deserialize_parse_tree_to_fp from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/transformers/fountain_pen"
import * as t_ast_2_json from "../schemas/parse_tree/transformers/json_target"
import * as t_json_to_fp from "pareto-json/dist/implementation/manual/schemas/json/transformers/fountain_pen_block"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/text"

export const $$: _pi.Refiner_With_Parameters<string, string, string, { 'document resource identifier': string }> = ($, abort, $p) => _p_text_from_list(
    t_fp_to_text.Group(
        t_json_to_fp.Document(
            t_ast_2_json.Document(
                r_parse_tree_from_text.Document(
                    _p_list_from_text($, ($) => $),
                    ($) => abort(_p_text_from_list(
                        t_fp_to_text.Block_Part(
                            t_deserialize_parse_tree_to_fp.Error(
                                $,
                                {
                                    'position info': ['zero based', null],
                                }
                            ),
                            {
                                'indentation': `    `,
                                'newline': `\n`,
                            }
                        ),
                        ($) => $
                    )),
                    {
                        'tab size': 4,
                        'document resource identifier': $p['document resource identifier'],
                    },
                )
            ),
        ),
        {
            'indentation': `    `,
            'newline': `\n`,
        }
    ),
    ($) => $
)