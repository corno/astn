
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Text_Edits: t_signatures.Text_Edits = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['state', p_decide_state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'insert':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'insert',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "location": p_change_context(
                                        $['location'],
                                        ($) => Relative_Location(
                                            $,
                                        ),
                                    ),
                                    "text": p_change_context(
                                        $['text'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'replace':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'replace',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "range": p_change_context(
                                        $['range'],
                                        ($) => Relative_Range(
                                            $,
                                        ),
                                    ),
                                    "text": p_change_context(
                                        $['text'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }],
                                    ),
                                },
                            )]],
                        }),
                    )
                case 'delete':
                    return p_.ss(
                        $,
                        ($) => ({
                            'option': 'delete',
                            'value': ['group', ['verbose', p_.literal.dictionary(
                                {
                                    "range": p_change_context(
                                        $['range'],
                                        ($) => Relative_Range(
                                            $,
                                        ),
                                    ),
                                },
                            )]],
                        }),
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Relative_Range: t_signatures.Relative_Range = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "start": p_change_context(
            $['start'],
            ($) => Relative_Location(
                $,
            ),
        ),
        "end": p_change_context(
            $['end'],
            ($) => Relative_Location(
                $,
            ),
        ),
    },
)]]

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => ['dictionary', p_.from.dictionary(
    $,
).map(
    ($, id) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }],
)]

export const Relative_Location: t_signatures.Relative_Location = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "line": p_change_context(
            $['line'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.decimal(
                    $,
                ),
            }],
        ),
        "column": p_change_context(
            $['column'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.decimal(
                    $,
                ),
            }],
        ),
    },
)]]
