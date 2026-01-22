import * as _p from 'pareto-core/dist/deserializer'
import * as _pi from 'pareto-core/dist/interface'

//dependencies
import * as ds_authoring_parse_tree from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"
import * as s_parse_result from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/serializers"

export const $$: _pi.Text_Deserializer<string> = ($, abort) => {
    ds_authoring_parse_tree.Document(
        $,
        ($) => abort(s_parse_result.Error($, { 'position info': ['one based', null] })),
        {
            'tab size': 4,
            'uri': `stream input`,
        },
    )
    return "Document is valid ASTN"
}