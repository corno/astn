import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

//dependencies
import * as ds_authoring_parse_tree from "../schemas/authoring_parse_tree/deserializers"
import * as s_parse_result from "../schemas/parse_result/serializers"
import * as t_ast_2_json from "../schemas/authoring_parse_tree/transformers/json_target"
import * as s_json from "../../../modules/pareto-json/implementation/manual/schemas/json/serializers"

export const $$: _pi.Text_Deserializer<string> = ($, abort) => {
    const x1 = _pdev.log_wrapping_debug_messages("deserialization", () => ds_authoring_parse_tree.Document(
        $,
        ($) => abort(s_parse_result.Parse_Error($, { 'position info': ['one based', null] })),
        {
            'tab size': 4,
        },
    ))

    const x2  = _pdev.log_wrapping_debug_messages("transformation", () => t_ast_2_json.Document(
        x1
    ))

    const x3 = _pdev.log_wrapping_debug_messages("serialization", () => s_json.Document(
        x2,
        {
            'indentation': "    ",
            'newline': '\n'
        }
    ))
    return x3
}