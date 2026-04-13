
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/transformers/fountain_pen"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

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

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => v_serialize.Document(
    v_marshall.ID_Value_Pairs(
        $,
    ),
)

export const Items: t_signatures.Items = ($) => v_serialize.Document(
    v_marshall.Items(
        $,
    ),
)
