    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/astn_schema/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Schema_Tree: t_signatures.Schema_Tree = ($) => v_serialize.Document(
        v_marshall.Schema_Tree(
            $,
        ),
    )
    
    export const Schemas: t_signatures.Schemas = ($) => v_serialize.Document(
        v_marshall.Schemas(
            $,
        ),
    )
    
    export const Schema: t_signatures.Schema = ($) => v_serialize.Document(
        v_marshall.Schema(
            $,
        ),
    )
    
    export const Imports: t_signatures.Imports = ($) => v_serialize.Document(
        v_marshall.Imports(
            $,
        ),
    )
    
    export const Globals: t_signatures.Globals = ($) => v_serialize.Document(
        v_marshall.Globals(
            $,
        ),
    )
    
    export const Modules: t_signatures.Modules = ($) => v_serialize.Document(
        v_marshall.Modules(
            $,
        ),
    )
    
    export const Value: t_signatures.Value = ($) => v_serialize.Document(
        v_marshall.Value(
            $,
        ),
    )
    
    export const Text_Type: t_signatures.Text_Type = ($) => v_serialize.Document(
        v_marshall.Text_Type(
            $,
        ),
    )
