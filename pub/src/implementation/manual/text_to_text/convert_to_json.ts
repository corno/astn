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
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"
import * as t_ast_2_json from "../transformers/parse_tree/json_target"
import * as t_json_to_fp from "pareto-json/dist/implementation/manual/transformers/json/fountain_pen"
import * as t_fp_to_text from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/list_of_characters"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: _pi.Refiner_With_Parameter<
    d_out.List_of_Characters,
    d_function.Phrase,
    d_in.List_of_Characters,
    {
        'document resource identifier': string

    }
> = ($, abort, $p) =>
        t_fp_to_text.Paragraph(
            t_json_to_fp.Document(
                t_ast_2_json.Document(
                    r_parse_tree_from_text.Document(
                        $,
                        ($) => abort(sh.ph.composed([
                            t_location_to_fountain_pen.Range(
                                t_deserialize_parse_tree_to_location.Error($),
                                {
                                    'character location reporting': ['one based', null],
                                }
                            ),
                            sh.ph.literal(": "),
                            t_deserialize_parse_tree_to_fp.Error(
                                $,
                            )
                        ])),
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