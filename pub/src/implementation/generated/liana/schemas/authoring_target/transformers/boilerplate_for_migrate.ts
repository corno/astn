
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/boilerplate_for_migrate"

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
    'metadata': _p_change_context(
        $['metadata'],
        ($) => ({
            'comments': _p_change_context(
                $['comments'],
                ($) => _p.list.from.list(
                    $,
                ).map(
                    ($) => $,
                ),
            ),
        }),
    ),
    'data': _p_change_context(
        $['data'],
        ($) => _p.decide.state(
            $,
            ($): t_out.Value.data => {
                switch ($[0]) {
                    case 'missing':
                        return _p.ss(
                            $,
                            ($) => ['missing', null],
                        )
                    case 'include':
                        return _p.ss(
                            $,
                            ($) => ['include', {
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
                                                        ($) => ['dictionary', _p.list.from.list(
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
                                                        )],
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
                                                                            ($) => ['concise', _p.list.from.list(
                                                                                $,
                                                                            ).map(
                                                                                ($) => Value(
                                                                                    $,
                                                                                ),
                                                                            )],
                                                                        )
                                                                    case 'verbose':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['verbose', _p.list.from.list(
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
                                                                            )],
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
                                                        ($) => ['list', _p.list.from.list(
                                                            $,
                                                        ).map(
                                                            ($) => Value(
                                                                $,
                                                            ),
                                                        )],
                                                    )
                                                case 'nothing':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['nothing', null],
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
                                                                            ($) => ['not set', null],
                                                                        )
                                                                    case 'set':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['set', Value(
                                                                                $,
                                                                            )],
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
                                                        ($) => ['state', _p.decide.state(
                                                            $,
                                                            ($): t_out.Value.data.concrete.type_.state => {
                                                                switch ($[0]) {
                                                                    case 'missing data':
                                                                        return _p.ss(
                                                                            $,
                                                                            ($) => ['missing data', null],
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
                                                        )],
                                                    )
                                                case 'text':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['text', {
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
                                                                            case 'backtick':
                                                                                return _p.ss(
                                                                                    $,
                                                                                    ($) => ['backtick', null],
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
