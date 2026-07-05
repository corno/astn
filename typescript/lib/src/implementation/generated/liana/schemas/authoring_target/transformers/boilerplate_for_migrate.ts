
import * as p_ from 'pareto-core/implementation/transformer'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)

import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/transformers/boilerplate_for_migrate.js"

import * as t_out from "../../../../../../interface/generated/liana/schemas/authoring_target/data.js"

export const Document: t_signatures.Document = ($) => ({
    'header': p_change_context(
        $['header'],
        ($) => p_.from.optional($,
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
                        return p_.option(
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
                        return p_.option(
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
                        return p_.option(
                            $,
                            ($) => ['concrete', {
                                'type': p_change_context(
                                    $['type'],
                                    ($) => p_decide_state(
                                        $,
                                        ($): t_out.Value.data.concrete.type_ => {
                                            switch ($[0]) {
                                                case 'dictionary':
                                                    return p_.option(
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
                                                    return p_.option(
                                                        $,
                                                        ($) => ['group', p_decide_state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.group => {
                                                                switch ($[0]) {
                                                                    case 'concise':
                                                                        return p_.option(
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
                                                                        return p_.option(
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
                                                    return p_.option(
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
                                                    return p_.option(
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
                                                    return p_.option(
                                                        $,
                                                        ($) => ['optional', p_decide_state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.optional => {
                                                                switch ($[0]) {
                                                                    case 'not set':
                                                                        return p_.option(
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
                                                                        return p_.option(
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
                                                    return p_.option(
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
                                                                                return p_.option(
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
                                                                                return p_.option(
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
                                                    return p_.option(
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
                                                                                return p_.option(
                                                                                    $,
                                                                                    ($) => ['none', null],
                                                                                )
                                                                            case 'quote':
                                                                                return p_.option(
                                                                                    $,
                                                                                    ($) => ['quote', null],
                                                                                )
                                                                            case 'apostrophe':
                                                                                return p_.option(
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
        ($) => p_.from.list($,
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
                                    return p_.option(
                                        $,
                                        ($) => ['line', null],
                                    )
                                case 'block':
                                    return p_.option(
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

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => p_.from.list($,
).map(
    ($) => ({
        'id': p_change_context(
            $['id'],
            ($) => $,
        ),
        'value': p_change_context(
            $['value'],
            ($) => p_.from.optional($,
            ).map(
                ($) => Value(
                    $,
                ),
            ),
        ),
    }),
)

export const Items: t_signatures.Items = ($) => p_.from.list($,
).map(
    ($) => Value(
        $,
    ),
)
