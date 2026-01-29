
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/ide/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Relative_Location: t_signatures.Relative_Location = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'line': _p_cc(
            $['line'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize(
                    $
                ),
            }]
        ),
        'column': _p_cc(
            $['column'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_serialize_number.serialize(
                    $
                ),
            }]
        ),
    }
)]]

export const Relative_Range: t_signatures.Relative_Range = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'start': _p_cc(
            $['start'],
            ($) => Relative_Location(
                $
            )
        ),
        'end': _p_cc(
            $['end'],
            ($) => Relative_Location(
                $
            )
        ),
    }
)]]

export const Text_Edits: t_signatures.Text_Edits = ($) => ['list', $.__l_map(
    ($) => ['state', _p.decide.state(
        $,
        ($): t_out.Value.state => {
            switch ($[0]) {
                case 'insert':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'insert',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'location': _p_cc(
                                        $['location'],
                                        ($) => Relative_Location(
                                            $
                                        )
                                    ),
                                    'text': _p_cc(
                                        $['text'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]],
                        })
                    )
                case 'replace':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'replace',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'range': _p_cc(
                                        $['range'],
                                        ($) => Relative_Range(
                                            $
                                        )
                                    ),
                                    'text': _p_cc(
                                        $['text'],
                                        ($) => ['text', {
                                            'delimiter': ['quote', null],
                                            'value': $,
                                        }]
                                    ),
                                }
                            )]],
                        })
                    )
                case 'delete':
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'delete',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    'range': _p_cc(
                                        $['range'],
                                        ($) => Relative_Range(
                                            $
                                        )
                                    ),
                                }
                            )]],
                        })
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )]
)]

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => ['dictionary', $.__d_map(
    ($, id) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }]
)]
