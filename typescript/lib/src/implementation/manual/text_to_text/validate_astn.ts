import * as p_ri from 'pareto-core/dist/interface/refiner'
import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"
import * as d_function from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/list_of_characters"
import * as t_deserialize_parse_tree_to_fp from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/fountain_pen"
import * as t_deserialize_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/deserialize_parse_tree/location"
import * as t_location_to_fountain_pen from "astn-core/dist/implementation/manual/transformers/location/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: p_ri.Refiner_With_Parameter<d_out.List_of_Characters, d_function.Phrase, d_in.List_of_Characters, { 'document resource identifier': string }> = ($, abort, $p) => {
    r_parse_tree_from_text.Document(
        $,
        ($) => abort(sh.ph.composed([
            sh.ph.literal($p['document resource identifier']),
            sh.ph.literal(":"),
            t_location_to_fountain_pen.Possible_Range(
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
        },
    )
    return p_list_from_text(
        "Document is valid ASTN",
        ($) => $
    )
}