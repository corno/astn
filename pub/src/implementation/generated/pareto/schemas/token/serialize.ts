    import * as _p from 'pareto-core-serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/token/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    
    
    export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => _i_serialize.Document(
        _i_marshall.Relative_Location(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Location: _i_signatures._T_Location = ($, $p) => _i_serialize.Document(
        _i_marshall.Location(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Range: _i_signatures._T_Range = ($, $p) => _i_serialize.Document(
        _i_marshall.Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Whitespace: _i_signatures._T_Whitespace = ($, $p) => _i_serialize.Document(
        _i_marshall.Whitespace(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Trivia: _i_signatures._T_Trivia = ($, $p) => _i_serialize.Document(
        _i_marshall.Trivia(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Delimited_String: _i_signatures._T_Delimited_String = ($, $p) => _i_serialize.Document(
        _i_marshall.Delimited_String(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const String_Type: _i_signatures._T_String_Type = ($, $p) => _i_serialize.Document(
        _i_marshall.String_Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Token_Type: _i_signatures._T_Token_Type = ($, $p) => _i_serialize.Document(
        _i_marshall.Token_Type(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Annotated_Token: _i_signatures._T_Annotated_Token = ($, $p) => _i_serialize.Document(
        _i_marshall.Annotated_Token(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
    export const Tokenizer_Result: _i_signatures._T_Tokenizer_Result = ($, $p) => _i_serialize.Document(
        _i_marshall.Tokenizer_Result(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )
    )
