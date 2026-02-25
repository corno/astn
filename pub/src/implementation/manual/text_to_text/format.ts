import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_function from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"
import * as t_deserialize_parse_tree_to_fp from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/fountain_pen"
import * as t_ast_2_authoring_target from "../transformers/parse_tree/authoring_target"
import * as t_authoring_target_to_fp from "../transformers/authoring_target/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"

export const $$: _pi.Refiner_With_Parameter<d_out.List_of_Characters, d_function.Phrase, d_in.List_of_Characters, { 'document resource identifier': string }> = ($, abort, $p) =>
    t_fp_to_text.Paragraph(
        t_authoring_target_to_fp.Document(
            t_ast_2_authoring_target.Document(
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