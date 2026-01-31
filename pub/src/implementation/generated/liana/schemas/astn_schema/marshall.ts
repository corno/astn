
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'set':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'set',
                        'value': Schemas(
                            $
                        ),
                    })
                )
            case 'schema':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'schema',
                        'value': Schema(
                            $
                        ),
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

export const Schemas: t_signatures.Schemas = ($) => ['dictionary', _p.dictionary.map(
    $,
    ($, id) => Schema_Tree(
        $
    )
)]

export const Schema: t_signatures.Schema = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'imports': _p_cc(
            $['imports'],
            ($) => Imports(
                $
            )
        ),
        'globals': _p_cc(
            $['globals'],
            ($) => Globals(
                $
            )
        ),
        'types': _p_cc(
            $['types'],
            ($) => Modules(
                $
            )
        ),
    }
)]]

export const Imports: t_signatures.Imports = ($) => ['dictionary', _p.dictionary.map(
    $,
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            'schema set child': _p_cc(
                $['schema set child'],
                ($) => ['text', {
                    'delimiter': ['backtick', null],
                    'value': $['l id'],
                }]
            ),
            'schema': _p_cc(
                $['schema'],
                ($) => ['nothing', null]
            ),
        }
    )]]
)]

export const Globals: t_signatures.Globals = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'text types': _p_cc(
            $['text types'],
            ($) => ['dictionary', _p.dictionary.map(
                $,
                ($, id) => Text_Type(
                    $
                )
            )]
        ),
    }
)]]

export const Modules: t_signatures.Modules = ($) => ['dictionary', _p.dictionary.map(
    $,
    ($, id) => ['group', ['verbose', _p.dictionary.literal(
        {
            'root value': _p_cc(
                $['root value'],
                ($) => Value(
                    $
                )
            ),
        }
    )]]
)]

export const Value: t_signatures.Value = ($) => ['state', _p.decide.state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'component':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'external':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'external',
                                                'value': ['group', ['verbose', _p.dictionary.literal(
                                                    {
                                                        'import': _p_cc(
                                                            $['import'],
                                                            ($) => ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }]
                                                        ),
                                                        'type': _p_cc(
                                                            $['type'],
                                                            ($) => ['text', {
                                                                'delimiter': ['backtick', null],
                                                                'value': $['l id'],
                                                            }]
                                                        ),
                                                    }
                                                )]],
                                            })
                                        )
                                    case 'internal acyclic':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'internal acyclic',
                                                'value': ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            })
                                        )
                                    case 'internal':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'internal',
                                                'value': ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            })
                                        )
                                    default:
                                        return _p.au(
                                            $[0]
                                        )
                                }
                            }
                        )],
                    })
                )
            case 'dictionary':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'dictionary',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'value': _p_cc(
                                    $['value'],
                                    ($) => Value(
                                        $
                                    )
                                ),
                                'ordered': _p_cc(
                                    $['ordered'],
                                    ($) => ['text', {
                                        'delimiter': ['none', null],
                                        'value': v_serialize_boolean.serialize(
                                            $
                                        ),
                                    }]
                                ),
                            }
                        )]],
                    })
                )
            case 'group':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': ['dictionary', _p.dictionary.map(
                            $,
                            ($, id) => Value(
                                $
                            )
                        )],
                    })
                )
            case 'list':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'list',
                        'value': ['group', ['verbose', _p.dictionary.literal(
                            {
                                'value': _p_cc(
                                    $['value'],
                                    ($) => Value(
                                        $
                                    )
                                ),
                            }
                        )]],
                    })
                )
            case 'nothing':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    })
                )
            case 'optional':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': Value(
                            $
                        ),
                    })
                )
            case 'state':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['dictionary', _p.dictionary.map(
                            $,
                            ($, id) => Value(
                                $
                            )
                        )],
                    })
                )
            case 'text':
                return _p.ss(
                    $,
                    ($) => ({
                        'option': 'text',
                        'value': ['state', _p.decide.state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'global':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'global',
                                                'value': ['text', {
                                                    'delimiter': ['backtick', null],
                                                    'value': $['l id'],
                                                }],
                                            })
                                        )
                                    case 'local':
                                        return _p.ss(
                                            $,
                                            ($) => ({
                                                'option': 'local',
                                                'value': Text_Type(
                                                    $
                                                ),
                                            })
                                        )
                                    default:
                                        return _p.au(
                                            $[0]
                                        )
                                }
                            }
                        )],
                    })
                )
            default:
                return _p.au(
                    $[0]
                )
        }
    }
)]

export const Text_Type: t_signatures.Text_Type = ($) => ['group', ['verbose', _p.dictionary.literal(
    {
        'type': _p_cc(
            $['type'],
            ($) => ['state', _p.decide.state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'multi line':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'multi line',
                                    'value': ['nothing', null],
                                })
                            )
                        case 'single line':
                            return _p.ss(
                                $,
                                ($) => ({
                                    'option': 'single line',
                                    'value': ['nothing', null],
                                })
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            )]
        ),
    }
)]]
