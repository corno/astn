import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as s_parse_result from "../schemas/parse_result/serializers"

export const $$: _pi.Text_Deserializer<string> = ($, abort) => {
    ds_authoring_parse_tree.Document(
        $,
        ($) => abort(s_parse_result.Parse_Error($, { 'position info': ['one based', null] })),
        {
            'tab size': 4,
        },
    )
    return "Document is valid ASTN"
}