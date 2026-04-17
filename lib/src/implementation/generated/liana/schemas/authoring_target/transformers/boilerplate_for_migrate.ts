
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../interface/generated/liana/schemas/authoring_target/data"

export const Document: t_signatures.Document = ($) => ({
    'header': _p_change_context(
        $['header'],
        ($) => _p.optional.from.optional(
            $,
        ).map(
            ($) => Value(
                $,
            ),
        ),
    ),
    'content': _p_change_context(
        $['content'],
        ($) => Value(
            $,
        ),
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'data': _p_change_context(
        $['data'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Value.data => {
                switch ($[0]) {
                    case 'missing':
                        return _p.ss(
                            $,
                            ($) => ['missing', {
                                '#': _p_change_context(
                                    $['#'],
                                    ($) => Token_Trivia(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    case 'include':
                        return _p.ss(
                            $,
                            ($) => ['include', {
                                '@': _p_change_context(
                                    $['@'],
                                    ($) => Token_Trivia(
                                        $,
                                    ),
                                ),
                                'path': _p_change_context(
                                    $['path'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'concrete':
                        return _p.ss(
                            $,
                            ($) => ['concrete', {
                                'type': _p_change_context(
                                    $['type'],
                                    ($) => _p.decide.state(
                                        $,
                                        ($): t_out.Value.data.concrete.type_ => {
                                            switch ($[0]) {
                                                case 'dictionary':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['dictionary', {
                                                            '{': _p_change_context(
                                                                $['{'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'entries': _p_change_context(
                                                                $['entries'],
                                                                ($) => ID_Value_Pairs(
                                                                    $,
                                                                ),
                                                            ),
                                                            '}': _p_change_context(
                                                                $['}'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'group':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['group', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.group => {
                                                                switch ($[0]) {
                                                                    case 'concise':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['concise', {
                                                                                '<': _p_change_context(
                                                                                    $['<'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'properties': _p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => Items(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                '>': _p_change_context(
                                                                                    $['>'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'verbose':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['verbose', {
                                                                                '(': _p_change_context(
                                                                                    $['('],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'properties': _p_change_context(
                                                                                    $['properties'],
                                                                                    ($) => ID_Value_Pairs(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                ')': _p_change_context(
                                                                                    $[')'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'list':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['list', {
                                                            '[': _p_change_context(
                                                                $['['],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'items': _p_change_context(
                                                                $['items'],
                                                                ($) => Items(
                                                                    $,
                                                                ),
                                                            ),
                                                            ']': _p_change_context(
                                                                $[']'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'nothing':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['nothing', {
                                                            '~': _p_change_context(
                                                                $['~'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'optional':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['optional', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.optional => {
                                                                switch ($[0]) {
                                                                    case 'not set':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['not set', {
                                                                                '_': _p_change_context(
                                                                                    $['_'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    case 'set':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['set', {
                                                                                '*': _p_change_context(
                                                                                    $['*'],
                                                                                    ($) => Token_Trivia(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                                'value': _p_change_context(
                                                                                    $['value'],
                                                                                    ($) => Value(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            }],
                                                                        )
                                                                    default:
                                                                        return _p.au(
                                                                            $[0],
                                                                        )
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'state':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['state', {
                                                            '|': _p_change_context(
                                                                $['|'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'status': _p_change_context(
                                                                $['status'],
                                                                ($) => _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value.data.concrete.type_.state.status => {
                                                                        switch ($[0]) {
                                                                            case 'missing':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['missing', {
                                                                                        '#': _p_change_context(
                                                                                            $['#'],
                                                                                            ($) => Token_Trivia(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            case 'set':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['set', {
                                                                                        'option': _p_change_context(
                                                                                            $['option'],
                                                                                            ($) => $,
                                                                                        ),
                                                                                        'value': _p_change_context(
                                                                                            $['value'],
                                                                                            ($) => Value(
                                                                                                $,
                                                                                            ),
                                                                                        ),
                                                                                    }],
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                case 'text':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['text', {
                                                            'trivia': _p_change_context(
                                                                $['trivia'],
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                ),
                                                            ),
                                                            'value': _p_change_context(
                                                                $['value'],
                                                                ($) => $,
                                                            ),
                                                            'delimiter': _p_change_context(
                                                                $['delimiter'],
                                                                ($) => _p.decide.state(
                                                                    $,
                                                                    ($): t_out.Value.data.concrete.type_.text.delimiter => {
                                                                        switch ($[0]) {
                                                                            case 'none':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['none', null],
                                                                                )
                                                                            case 'quote':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['quote', null],
                                                                                )
                                                                            case 'apostrophe':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['apostrophe', null],
                                                                                )
                                                                            default:
                                                                                return _p.au(
                                                                                    $[0],
                                                                                )
                                                                        }
                                                                    },
                                                                ),
                                                            ),
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    ),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    ),
})

export const Token_Trivia: t_signatures.Token_Trivia = ($) => ({
    'comments': _p_change_context(
        $['comments'],
        ($) => _p.list.from.list(
            $,
        ).map(
            ($) => ({
                'content': _p_change_context(
                    $['content'],
                    ($) => $,
                ),
                'type': _p_change_context(
                    $['type'],
                    ($) => _p.decide.state(
                        $,
                        ($): t_out.Token_Trivia.comments.L.type_ => {
                            switch ($[0]) {
                                case 'line':
                                    return _p.ss(
                                        $,
                                        ($) => ['line', null],
                                    )
                                case 'block':
                                    return _p.ss(
                                        $,
                                        ($) => ['block', null],
                                    )
                                default:
                                    return _p.au(
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

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($) => _p.list.from.list(
    $,
).map(
    ($) => ({
        'id': _p_change_context(
            $['id'],
            ($) => $,
        ),
        'value': _p_change_context(
            $['value'],
            ($) => _p.optional.from.optional(
                $,
            ).map(
                ($) => Value(
                    $,
                ),
            ),
        ),
    }),
)

export const Items: t_signatures.Items = ($) => _p.list.from.list(
    $,
).map(
    ($) => Value(
        $,
    ),
)
