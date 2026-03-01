
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "header": _p_change_context(
            $['header'],
            ($) => ['optional', _p.decide.optional(
                $,
                ($): t_out.Value.optional => ['set', Value(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
        "content": _p_change_context(
            $['content'],
            ($) => Value(
                $,
            ),
        ),
    },
)]]

export const Value: t_signatures.Value = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        "metadata": _p_change_context(
            $['metadata'],
            ($) => ['group', ['verbose', _p.dictionary.literal(
                {
                    "comments": _p_change_context(
                        $['comments'],
                        ($) => ['list', _p.list.from.list(
                            $,
                        ).map(
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        )],
                    ),
                },
            )]],
        ),
        "data": _p_change_context(
            $['data'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'missing':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'missing',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'include':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'include',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "path": _p_change_context(
                                                $['path'],
                                                ($) => ['text', {
                                                    'delimiter': ['quote', null],
                                                    'value': $,
                                                }],
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'concrete':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'concrete',
                                    'value': ['group', ['verbose', _p.dictionary.literal(
                                        {
                                            "type": _p_change_context(
                                                $['type'],
                                                ($) => ['state', _p.decide.state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'dictionary':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'dictionary',
                                                                        'value': ID_Value_Pairs(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'group':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'group',
                                                                        'value': ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'concise':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'concise',
                                                                                                'value': Items(
                                                                                                    $,
                                                                                                ),
                                                                                            }),
                                                                                        )
                                                                                    case 'verbose':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'verbose',
                                                                                                'value': ID_Value_Pairs(
                                                                                                    $,
                                                                                                ),
                                                                                            }),
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'list':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'list',
                                                                        'value': Items(
                                                                            $,
                                                                        ),
                                                                    }),
                                                                )
                                                            case 'nothing':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'nothing',
                                                                        'value': ['nothing', null],
                                                                    }),
                                                                )
                                                            case 'optional':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'optional',
                                                                        'value': ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'not set':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'not set',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'set':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': Value(
                                                                                                    $,
                                                                                                ),
                                                                                            }),
                                                                                        )
                                                                                    default:
                                                                                        return _p.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'state':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'state',
                                                                        'value': ['state', _p.decide.state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'missing':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'missing',
                                                                                                'value': ['nothing', null],
                                                                                            }),
                                                                                        )
                                                                                    case 'set':
                                                                                        return _p.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                                                                    {
                                                                                                        "option": _p_change_context(
                                                                                                            $['option'],
                                                                                                            ($) => ['text', {
                                                                                                                'delimiter': ['quote', null],
                                                                                                                'value': $,
                                                                                                            }],
                                                                                                        ),
                                                                                                        "value": _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => Value(
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
                                                                    }),
                                                                )
                                                            case 'text':
                                                                return _p.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'text',
                                                                        'value': ['group', ['verbose', _p.dictionary.literal(
                                                                            {
                                                                                "value": _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['text', {
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    }],
                                                                                ),
                                                                                "delimiter": _p_change_context(
                                                                                    $['delimiter'],
                                                                                    ($) => ['state', _p.decide.state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'none':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'none',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'quote':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'quote',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'backtick':
                                                                                                    return _p.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'backtick',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return _p.au(
                                                                                                        $[0],
                                                                                                    )
                                                                                            }
                                                                                        },
                                                                                    )],
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
        ),
    },
)]]

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => ['group', ['verbose', _p.dictionary.literal(
        {
            "id": _p_change_context(
                $['id'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            "value": _p_change_context(
                $['value'],
                ($) => ['optional', _p.decide.optional(
                    $,
                    ($): t_out.Value.optional => ['set', Value(
                        $,
                    )],
                    () => ['not set', null],
                )],
            ),
        },
    )]],
)]

export const Items: t_signatures.Items = ($) => ['list', _p.list.from.list(
    $,
).map(
    ($) => Value(
        $,
    ),
)]
