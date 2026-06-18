
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Document: t_signatures.Document = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "header": p_change_context(
            $['header'],
            ($) => ['optional', p_decide_optional(
                $,
                ($): t_out.Value.optional => ['set', Value(
                    $,
                )],
                () => ['not set', null],
            )],
        ),
        "content": p_change_context(
            $['content'],
            ($) => Value(
                $,
            ),
        ),
    },
)]]

export const Value: t_signatures.Value = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "data": p_change_context(
            $['data'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'missing':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'missing',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "#": p_change_context(
                                                $['#'],
                                                ($) => Token_Trivia(
                                                    $,
                                                ),
                                            ),
                                        },
                                    )]],
                                }),
                            )
                        case 'include':
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'include',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "@": p_change_context(
                                                $['@'],
                                                ($) => Token_Trivia(
                                                    $,
                                                ),
                                            ),
                                            "path": p_change_context(
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
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'concrete',
                                    'value': ['group', ['verbose', p_.literal.dictionary(
                                        {
                                            "type": p_change_context(
                                                $['type'],
                                                ($) => ['state', p_decide_state(
                                                    $,
                                                    ($): t_out.Value.state => {
                                                        switch ($[0]) {
                                                            case 'dictionary':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'dictionary',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "{": p_change_context(
                                                                                    $['{'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "entries": p_change_context(
                                                                                    $['entries'],
                                                                                    ($) => ID_Value_Pairs(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "}": p_change_context(
                                                                                    $['}'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            },
                                                                        )]],
                                                                    }),
                                                                )
                                                            case 'group':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'group',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'concise':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'concise',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "<": p_change_context(
                                                                                                            $['<'],
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "properties": p_change_context(
                                                                                                            $['properties'],
                                                                                                            ($) => Items(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        ">": p_change_context(
                                                                                                            $['>'],
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'verbose':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'verbose',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "(": p_change_context(
                                                                                                            $['('],
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "properties": p_change_context(
                                                                                                            $['properties'],
                                                                                                            ($) => ID_Value_Pairs(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        ")": p_change_context(
                                                                                                            $[')'],
                                                                                                            ($) => Token_Trivia(
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
                                                                    }),
                                                                )
                                                            case 'list':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'list',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "[": p_change_context(
                                                                                    $['['],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "items": p_change_context(
                                                                                    $['items'],
                                                                                    ($) => Items(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "]": p_change_context(
                                                                                    $[']'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            },
                                                                        )]],
                                                                    }),
                                                                )
                                                            case 'nothing':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'nothing',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "~": p_change_context(
                                                                                    $['~'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            },
                                                                        )]],
                                                                    }),
                                                                )
                                                            case 'optional':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'optional',
                                                                        'value': ['state', p_decide_state(
                                                                            $,
                                                                            ($): t_out.Value.state => {
                                                                                switch ($[0]) {
                                                                                    case 'not set':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'not set',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "_": p_change_context(
                                                                                                            $['_'],
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    },
                                                                                                )]],
                                                                                            }),
                                                                                        )
                                                                                    case 'set':
                                                                                        return p_.ss(
                                                                                            $,
                                                                                            ($) => ({
                                                                                                'option': 'set',
                                                                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                    {
                                                                                                        "*": p_change_context(
                                                                                                            $['*'],
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                        "value": p_change_context(
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
                                                                                        return p_.au(
                                                                                            $[0],
                                                                                        )
                                                                                }
                                                                            },
                                                                        )],
                                                                    }),
                                                                )
                                                            case 'state':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'state',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "|": p_change_context(
                                                                                    $['|'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "status": p_change_context(
                                                                                    $['status'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'missing':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'missing',
                                                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "#": p_change_context(
                                                                                                                        $['#'],
                                                                                                                        ($) => Token_Trivia(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                },
                                                                                                            )]],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'set':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'set',
                                                                                                            'value': ['group', ['verbose', p_.literal.dictionary(
                                                                                                                {
                                                                                                                    "option": p_change_context(
                                                                                                                        $['option'],
                                                                                                                        ($) => ['text', {
                                                                                                                            'delimiter': ['quote', null],
                                                                                                                            'value': $,
                                                                                                                        }],
                                                                                                                    ),
                                                                                                                    "value": p_change_context(
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
                                                                                                    return p_.au(
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
                                                            case 'text':
                                                                return p_.ss(
                                                                    $,
                                                                    ($) => ({
                                                                        'option': 'text',
                                                                        'value': ['group', ['verbose', p_.literal.dictionary(
                                                                            {
                                                                                "trivia": p_change_context(
                                                                                    $['trivia'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                "value": p_change_context(
                                                                                    $['value'],
                                                                                    ($) => ['text', {
                                                                                        'delimiter': ['quote', null],
                                                                                        'value': $,
                                                                                    }],
                                                                                ),
                                                                                "delimiter": p_change_context(
                                                                                    $['delimiter'],
                                                                                    ($) => ['state', p_decide_state(
                                                                                        $,
                                                                                        ($): t_out.Value.state => {
                                                                                            switch ($[0]) {
                                                                                                case 'none':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'none',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'quote':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'quote',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                case 'apostrophe':
                                                                                                    return p_.ss(
                                                                                                        $,
                                                                                                        ($) => ({
                                                                                                            'option': 'apostrophe',
                                                                                                            'value': ['nothing', null],
                                                                                                        }),
                                                                                                    )
                                                                                                default:
                                                                                                    return p_.au(
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
                                                                return p_.au(
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
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]

export const Token_Trivia: t_signatures.Token_Trivia = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "comments": p_change_context(
            $['comments'],
            ($) => ['list', p_.from.list(
                $,
            ).map(
                ($) => ['group', ['verbose', p_.literal.dictionary(
                    {
                        "content": p_change_context(
                            $['content'],
                            ($) => ['text', {
                                'delimiter': ['quote', null],
                                'value': $,
                            }],
                        ),
                        "type": p_change_context(
                            $['type'],
                            ($) => ['state', p_decide_state(
                                $,
                                ($): t_out.Value.state => {
                                    switch ($[0]) {
                                        case 'line':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'line',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        case 'block':
                                            return p_.ss(
                                                $,
                                                ($) => ({
                                                    'option': 'block',
                                                    'value': ['nothing', null],
                                                }),
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            )],
                        ),
                    },
                )]],
            )],
        ),
    },
)]]

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => ['group', ['verbose', p_.literal.dictionary(
        {
            "id": p_change_context(
                $['id'],
                ($) => ['text', {
                    'delimiter': ['quote', null],
                    'value': $,
                }],
            ),
            "value": p_change_context(
                $['value'],
                ($) => ['optional', p_decide_optional(
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

export const Items: t_signatures.Items = ($) => ['list', p_.from.list(
    $,
).map(
    ($) => Value(
        $,
    ),
)]
