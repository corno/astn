    
    import * as _p from "pareto-core/dist/expression"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/serialize"
    
    import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/transformers/fountain_pen"
    
    import * as v_marshall from "./astn_sealed_target"
    
    export const Document: t_signatures.Document = ($) => v_serialize.Document(
        v_marshall.Document(
            $,
        ),
    )
    
    export const Value: t_signatures.Value = ($) => v_serialize.Document(
        v_marshall.Value(
            $,
        ),
    )
