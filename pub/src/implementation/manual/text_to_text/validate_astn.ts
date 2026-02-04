import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/text"
import * as t_deserialize_parse_tree_to_fountain_pen from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/transformers/fountain_pen"
import * as t_fountain_pen_to_text from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/text"

export const $$: _pi.Refiner<string, string, string> = ($, abort) => {
    r_parse_tree_from_text.Document(
        _p_list_from_text($, ($) => $),
        ($) => abort(_p_text_from_list(
            t_fountain_pen_to_text.Block_Part(
                t_deserialize_parse_tree_to_fountain_pen.Error(
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
            ($) => $)
        ),
        {
            'tab size': 4,
            'document resource identifier': `stream input`,
        },
    )
    return "Document is valid ASTN"
}