    import * as _p from 'pareto-core-serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    import * as _i_r_token from "../token/serialize"
    
    
    export const Structural_Token: _i_signatures._T_Structural_Token = ($, $p) => _i_serialize.Document(
        _i_marshall.Structural_Token(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const String: _i_signatures._T_String = ($, $p) => _i_serialize.Document(
        _i_marshall.String(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Key_Value_Pairs: _i_signatures._T_Key_Value_Pairs = ($, $p) => _i_serialize.Document(
        _i_marshall.Key_Value_Pairs(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Elements: _i_signatures._T_Elements = ($, $p) => _i_serialize.Document(
        _i_marshall.Elements(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Concrete_Value: _i_signatures._T_Concrete_Value = ($, $p) => _i_serialize.Document(
        _i_marshall.Concrete_Value(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Value: _i_signatures._T_Value = ($, $p) => _i_serialize.Document(
        _i_marshall.Value(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Content: _i_signatures._T_Content = ($, $p) => _i_serialize.Document(
        _i_marshall.Content(
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
