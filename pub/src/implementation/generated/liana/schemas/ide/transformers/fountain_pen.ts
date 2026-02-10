
import * as _p from 'pareto-core/dist/assign'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/transformers/sealed_target/fountain_pen"

import * as v_marshall from "./astn_sealed_target"

export const Text_Edits: t_signatures.Text_Edits = ($) => v_serialize.Document(
    v_marshall.Text_Edits(
        $,
    ),
)

export const Relative_Range: t_signatures.Relative_Range = ($) => v_serialize.Document(
    v_marshall.Relative_Range(
        $,
    ),
)

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => v_serialize.Document(
    v_marshall.ID_Value_Pairs_To_Be_Sorted(
        $,
    ),
)

export const Relative_Location: t_signatures.Relative_Location = ($) => v_serialize.Document(
    v_marshall.Relative_Location(
        $,
    ),
)
