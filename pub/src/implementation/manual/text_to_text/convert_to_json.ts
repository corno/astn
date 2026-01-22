import * as _p from 'pareto-core/dist/deserializer'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

//dependencies
import * as ds_authoring_parse_tree from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"
import * as s_parse_result from "astn-core/dist/implementation/manual/schemas/deserialize_parse_tree/serializers"
import * as t_ast_2_json from "../schemas/parse_tree/transformers/json_target"
import * as s_json from "pareto-json/dist/implementation/manual/schemas/json/serializers"

export const $$: _pi.Text_Deserializer_With_Parameters<string, { 'uri': string }> = ($, abort, $p) => s_json.Document(
    t_ast_2_json.Document(
        ds_authoring_parse_tree.Document(
            $,
            ($) => abort(s_parse_result.Error($, { 'position info': ['one based', null] })),
            {
                'tab size': 4,
                'uri': $p['uri'],
            },
        )
    ),
    {
        'indentation': "    ",
        'newline': '\n'
    }
)