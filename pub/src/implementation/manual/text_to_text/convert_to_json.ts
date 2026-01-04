import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as s_parse_result from "../schemas/parse_result/serializers"
import * as t_ast_2_json from "../schemas/authoring_parse_tree/transformers/json_target"
import * as s_json from "pareto-json/dist/implementation/manual/schemas/json/serializers"

export const $$: _pi.Text_Deserializer<string> = ($, abort) => s_json.Document(
    t_ast_2_json.Document(
        ds_authoring_parse_tree.Document(
            $,
            ($) => abort(s_parse_result.Parse_Error($, { 'position info': ['one based', null] })),
            {
                'tab size': 4,
            },
        )
    ),
    {
        'indentation': "    ",
        'newline': '\n'
    }
)
