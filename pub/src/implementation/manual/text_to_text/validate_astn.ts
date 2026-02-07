import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//data types
import * as d_loc from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/transformers/fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/list_of_characters"

export const $$: _pi.Refiner_With_Parameter<d_loc.List_of_Characters, d_fp.Phrase, d_loc.List_of_Characters, { 'document resource identifier': string }> = ($, abort, $p) => {
    r_parse_tree_from_text.Document(
        $,
        ($) => abort(t_deserialize_parse_tree_to_fountain_pen.Error(
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
    return _p_list_from_text(
        "Document is valid ASTN",
        ($) => $
    )
}