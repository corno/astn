import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/ide/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"
import * as _i_r_token from "../token/serialize"


export const Relative_Range: _i_signatures._T_Relative_Range = ($, $p) => _i_serialize.Document(
    _i_marshall.Relative_Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Text_Edits: _i_signatures._T_Text_Edits = ($, $p) => _i_serialize.Document(
    _i_marshall.Text_Edits(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Key_Value_Pairs_To_Be_Sorted: _i_signatures._T_Key_Value_Pairs_To_Be_Sorted = ($, $p) => _i_serialize.Document(
    _i_marshall.Key_Value_Pairs_To_Be_Sorted(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
