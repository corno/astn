import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"
import * as _i_r_parse_tree from "../authoring_parse_tree/serialize"
import * as _i_r_token from "../token/serialize"


export const Parse_Error: _i_signatures._T_Parse_Error = ($, $p) => _i_serialize.Document(
    _i_marshall.Parse_Error(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Parse_Result: _i_signatures._T_Parse_Result = ($, $p) => _i_serialize.Document(
    _i_marshall.Parse_Result(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
