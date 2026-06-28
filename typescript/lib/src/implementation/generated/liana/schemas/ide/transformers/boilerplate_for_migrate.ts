
import * as p_ from 'pareto-core/dist/implementation/transformer'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)


import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/ide/data"

export const Text_Edits: t_signatures.Text_Edits = ($) => p_.from.list($,
).map(
    ($) => p_decide_state(
        $,
        ($): t_out.Text_Edits.L => {
            switch ($[0]) {
                case 'insert':
                    return p_.ss(
                        $,
                        ($) => ['insert', {
                            'location': p_change_context(
                                $['location'],
                                ($) => Relative_Location(
                                    $,
                                ),
                            ),
                            'text': p_change_context(
                                $['text'],
                                ($) => $,
                            ),
                        }],
                    )
                case 'replace':
                    return p_.ss(
                        $,
                        ($) => ['replace', {
                            'range': p_change_context(
                                $['range'],
                                ($) => Relative_Range(
                                    $,
                                ),
                            ),
                            'text': p_change_context(
                                $['text'],
                                ($) => $,
                            ),
                        }],
                    )
                case 'delete':
                    return p_.ss(
                        $,
                        ($) => ['delete', {
                            'range': p_change_context(
                                $['range'],
                                ($) => Relative_Range(
                                    $,
                                ),
                            ),
                        }],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
)

export const Relative_Range: t_signatures.Relative_Range = ($) => ({
    'start': p_change_context(
        $['start'],
        ($) => Relative_Location(
            $,
        ),
    ),
    'end': p_change_context(
        $['end'],
        ($) => Relative_Location(
            $,
        ),
    ),
})

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => p_.from.dictionary($,
).map(
    ($, id) => $,
)

export const Relative_Location: t_signatures.Relative_Location = ($) => ({
    'line': p_change_context(
        $['line'],
        ($) => $,
    ),
    'column': p_change_context(
        $['column'],
        ($) => $,
    ),
})
