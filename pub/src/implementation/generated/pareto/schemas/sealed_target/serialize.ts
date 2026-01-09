import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/sealed_target/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Value: _i_signatures._T_Value = ($, $p) => _i_serialize.Document(
    _i_marshall.Value(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Document: _i_signatures._T_Document = ($, $p) => _i_serialize.Document(
    _i_marshall.Document(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
