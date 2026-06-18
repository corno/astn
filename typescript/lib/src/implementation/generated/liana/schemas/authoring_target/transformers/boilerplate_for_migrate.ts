
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => $.__decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/authoring_target/data"

export const Document: t_signatures.Document = ($) => ({
    'header': p_change_context(
        $['header'],
        ($) => p_.from.optional(
            $,
        ).map(
            ($) => Value(
                $,
            ),
        ),
    ),
    'content': p_change_context(
        $['content'],
        ($) => Value(
            $,
        ),
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'data': p_change_context(
        $['data'],
        ($) => p_decide_state(
            $,
            ($): t_out.Value.data => {
                switch ($[0]) {
                    case 'missing':
                        return p_.ss(
                            $,
                            ($) => ['missing', {
                                '#': p_change_context(
                                    $['#'],
                                    ($) => Token_Trivia(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'include':
                        return p_.ss(
                            $,
                            ($) => ['include', {
                                '@': p_change_context(
                                    $['@'],
                                    ($) => Token_Trivia(
                                        $,
                                    ),
                                ),
                                'path': p_change_context(
                                    $['path'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'concrete':
                        return p_.ss(
                            $,
                            ($) => ['concrete', {
                                'type': p_change_context(
                                    $['type'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Value.data.concrete.type_ => {
                                            switch ($[0]) {
                                                case 'dictionary':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['dictionary', {
                                                            '{': p_change_context(
                                                                $['{'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'entries': p_change_context(
                                                                $['entries'],
                                                                ($) => ID_Value_Pairs(
                                                                    $,
                                                                ),
                                                            ),
                                                            '}': p_change_context(
                                                                $['}'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'group':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['group', p_decide_state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.group => {
                                                                switch ($[0]) {
                                                                    case 'concise':
                                                                        return p_.ss(
                                                                            $,
                                                                            ($) => ['concise', {
                                                                                '<': p_change_context(
                                                                                    $['<'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'properties': p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => Items(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                '>': p_change_context(
                                                                                    $['>'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'verbose':
                                                                        return p_.ss(
                                                                            $,
                                                                            ($) => ['verbose', {
                                                                                '(': p_change_context(
                                                                                    $['('],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'properties': p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => ID_Value_Pairs(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ')': p_change_context(
                                                                                    $[')'],
                                                                                    ($) => Token_Trivia(
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
                                                        )],
                                                    )
                                                case 'list':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['list', {
                                                            '[': p_change_context(
                                                                $['['],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'items': p_change_context(
                                                                $['items'],
                                                                ($) => Items(
                                                                    $,
                                                                ),
                                                            ),
                                                            ']': p_change_context(
                                                                $[']'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'nothing':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['nothing', {
                                                            '~': p_change_context(
                                                                $['~'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'optional':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['optional', p_decide_state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.optional => {
                                                                switch ($[0]) {
                                                                    case 'not set':
                                                                        return p_.ss(
                                                                            $,
                                                                            ($) => ['not set', {
                                                                                '_': p_change_context(
                                                                                    $['_'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'set':
                                                                        return p_.ss(
                                                                            $,
                                                                            ($) => ['set', {
                                                                                '*': p_change_context(
                                                                                    $['*'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'value': p_change_context(
                                                                                    $['value'],
                                                                                    ($) => Value(
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
                                                        )],
                                                    )
                                                case 'state':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['state', {
                                                            '|': p_change_context(
                                                                $['|'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'status': p_change_context(
                                                                $['status'],
                                                                ($) => p_decide_state(
                                                                    $,
                                                                    ($): t_out.Value.data.concrete.type_.state.status => {
                                                                        switch ($[0]) {
                                                                            case 'missing':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['missing', {
                                                                                        '#': p_change_context(
                                                                                            $['#'],
                                                                                            ($) => Token_Trivia(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'set':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['set', {
                                                                                        'option': p_change_context(
                                                                                            $['option'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                        'value': p_change_context(
                                                                                            $['value'],
                                                                                            ($) => Value(
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
                                                            ),
                                                        }],
                                                    )
                                                case 'text':
                                                    return p_.ss(
                                                        $,
                                                        ($) => ['text', {
                                                            'trivia': p_change_context(
                                                                $['trivia'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'value': p_change_context(
                                                                $['value'],
                                                                ($) => $,
                                                            ),
                                                            'delimiter': p_change_context(
                                                                $['delimiter'],
                                                                ($) => p_decide_state(
                                                                    $,
                                                                    ($): t_out.Value.data.concrete.type_.text.delimiter => {
                                                                        switch ($[0]) {
                                                                            case 'none':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['none', null],
                                                                                )
                                                                            case 'quote':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['quote', null],
                                                                                )
                                                                            case 'apostrophe':
                                                                                return p_.ss(
                                                                                    $,
                                                                                    ($) => ['apostrophe', null],
                                                                                )
                                                                            default:
                                                                                return p_.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
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
    ),
})

export const Token_Trivia: t_signatures.Token_Trivia = ($) => ({
    'comments': p_change_context(
        $['comments'],
        ($) => p_.from.list(
            $,
        ).map(
            ($) => ({
                'content': p_change_context(
                    $['content'],
                    ($) => $,
                ),
                'type': p_change_context(
                    $['type'],
                    ($) => p_decide_state(
                        $,
                        ($): t_out.Token_Trivia.comments.L.type_ => {
                            switch ($[0]) {
                                case 'line':
                                    return p_.ss(
                                        $,
                                        ($) => ['line', null],
                                    )
                                case 'block':
                                    return p_.ss(
                                        $,
                                        ($) => ['block', null],
                                    )
                                default:
                                    return p_.au(
                                        $[0],
                                    )
                            }
                        },
                    ),
                ),
            }),
        ),
    ),
})

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => p_.from.list(
    $,
).map(
    ($) => ({
        'id': p_change_context(
            $['id'],
            ($) => $,
        ),
        'value': p_change_context(
            $['value'],
            ($) => p_.from.optional(
                $,
            ).map(
                ($) => Value(
                    $,
                ),
            ),
        ),
    }),
)

export const Items: t_signatures.Items = ($) => p_.from.list(
    $,
).map(
    ($) => Value(
        $,
    ),
)
