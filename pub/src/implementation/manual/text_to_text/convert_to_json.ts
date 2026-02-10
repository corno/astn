import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_loc from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"
import * as t_deserialize_parse_tree_to_fp from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/fountain_pen"
import * as t_ast_2_json from "../transformers/parse_tree/json_target"
import * as t_json_to_fp from "pareto-json/dist/implementation/manual/schemas/json/transformers/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

export const $$: _pi.Refiner_With_Parameter<d_loc.List_of_Characters, d_fp.Phrase, d_loc.List_of_Characters, { 'document resource identifier': string }> = ($, abort, $p) =>
    t_fp_to_text.Paragraph(
        t_json_to_fp.Document(
            t_ast_2_json.Document(
                r_parse_tree_from_text.Document(
                    $,
                    ($) => abort(t_deserialize_parse_tree_to_fp.Error(
                        $,
                        {
                            'position info': ['zero based', null],
                        }
                    )),
                    {
                        'tab size': 4,
                        'document resource identifier': $p['document resource identifier'],
                    },
                )
            ),
        ),
        {
            'indentation': "    ",
            'newline': "\n",
        }
    )