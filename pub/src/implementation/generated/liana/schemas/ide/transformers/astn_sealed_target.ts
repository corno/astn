
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Text_Edits: t_signatures.Text_Edits = ($) => ['list', _p.list.from.list(
    $,
).map(
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
                                    "location": _p_change_context(
                                        $['location'],
                                        ($) => Relative_Location(
                                            $,
                                        ),
                                    ),
                                    "text": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'replace',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "range": _p_change_context(
                                        $['range'],
                                        ($) => Relative_Range(
                                            $,
                                        ),
                                    ),
                                    "text": _p_change_context(
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
                    return _p.ss(
                        $,
                        ($) => ({
                            'option': 'delete',
                            'value': ['group', ['verbose', _p.dictionary.literal(
                                {
                                    "range": _p_change_context(
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
                    return _p.au(
                        $[0],
                    )
            }
        },
    )],
)]

export const Relative_Range: t_signatures.Relative_Range = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "start": _p_change_context(
            $['start'],
            ($) => Relative_Location(
                $,
            ),
        ),
        "end": _p_change_context(
            $['end'],
            ($) => Relative_Location(
                $,
            ),
        ),
    },
)]]

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => ['dictionary', _p.dictionary.from.dictionary(
    $,
).map(
    ($, id) => ['text', {
        'delimiter': ['quote', null],
        'value': $,
    }],
)]

export const Relative_Location: t_signatures.Relative_Location = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "line": _p_change_context(
            $['line'],
            ($) => ['text', {
                'delimiter': ['none', null],
                'value': v_primitives_to_text.decimal(
                    $,
                ),
            }],
        ),
        "column": _p_change_context(
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
