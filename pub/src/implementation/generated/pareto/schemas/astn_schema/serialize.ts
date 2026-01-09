import * as _p from 'pareto-core-serializer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/astn_schema/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Schemas: _i_signatures._T_Schemas = ($, $p) => _i_serialize.Document(
    _i_marshall.Schemas(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => _i_serialize.Document(
    _i_marshall.Text_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Globals: _i_signatures._T_Globals = ($, $p) => _i_serialize.Document(
    _i_marshall.Globals(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_serialize.Document(
    _i_marshall.Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Types: _i_signatures._T_Types = ($, $p) => _i_serialize.Document(
    _i_marshall.Types(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Schema: _i_signatures._T_Schema = ($, $p) => _i_serialize.Document(
    _i_marshall.Schema(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _i_serialize.Document(
    _i_marshall.Schema_Tree(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Imports: _i_signatures._T_Imports = ($, $p) => _i_serialize.Document(
    _i_marshall.Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => _i_serialize.Document(
    _i_marshall.Dictionary(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Group: _i_signatures._T_Group = ($, $p) => _i_serialize.Document(
    _i_marshall.Group(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => _i_serialize.Document(
    _i_marshall.Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
