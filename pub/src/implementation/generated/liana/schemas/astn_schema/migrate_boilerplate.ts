
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Schema_Tree.l_state => {
            switch ($[0]) {
                case 'set':
                    return _p.ss(
                        $,
                        ($) => ['set', Schemas(
                            $
                        )]
                    )
                case 'schema':
                    return _p.ss(
                        $,
                        ($) => ['schema', Schema(
                            $
                        )]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})

export const Schemas: t_signatures.Schemas = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': Schema_Tree(
                $
            ),
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Schema: t_signatures.Schema = ($) => ({
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
})

export const Imports: t_signatures.Imports = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'schema set child': _p_cc(
                    $['schema set child'],
                    ($) => ({
                        'l location': {
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        },
                        'l reference': $['l id'],
                    })
                ),
                'schema': _p_cc(
                    $['schema'],
                    ($) => null
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Globals: t_signatures.Globals = ($) => ({
    'text types': _p_cc(
        $['text types'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l dictionary': _p.dictionary.map(
                $,
                ($, id) => ({
                    'l entry': Text_Type(
                        $
                    ),
                    'l location': {
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    },
                })
            ),
        })
    ),
})

export const Modules: t_signatures.Modules = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l dictionary': _p.dictionary.map(
        $,
        ($, id) => ({
            'l entry': {
                'root value': _p_cc(
                    $['root value'],
                    ($) => Value(
                        $
                    )
                ),
            },
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
        })
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'l location': {
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    },
    'l state': _p.decide.state(
        $,
        ($): t_out.Value.l_state => {
            switch ($[0]) {
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Value.l_state.component.l_state => {
                                    switch ($[0]) {
                                        case 'external':
                                            return _p.ss(
                                                $,
                                                ($) => ['external', {
                                                    'import': _p_cc(
                                                        $['import'],
                                                        ($) => ({
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
                                                        })
                                                    ),
                                                    'type': _p_cc(
                                                        $['type'],
                                                        ($) => ({
                                                            'l location': {
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                            'l reference': $['l id'],
                                                        })
                                                    ),
                                                }]
                                            )
                                        case 'internal acyclic':
                                            return _p.ss(
                                                $,
                                                ($) => ['internal acyclic', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
                                                }]
                                            )
                                        case 'internal':
                                            return _p.ss(
                                                $,
                                                ($) => ['internal', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
                                                }]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
                        }]
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', {
                            'value': _p_cc(
                                $['value'],
                                ($) => Value(
                                    $
                                )
                            ),
                            'ordered': _p_cc(
                                $['ordered'],
                                ($) => $
                            ),
                        }]
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l dictionary': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': Value(
                                        $
                                    ),
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                })
                            ),
                        }]
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', {
                            'value': _p_cc(
                                $['value'],
                                ($) => Value(
                                    $
                                )
                            ),
                        }]
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null]
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', Value(
                            $
                        )]
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l dictionary': _p.dictionary.map(
                                $,
                                ($, id) => ({
                                    'l entry': Value(
                                        $
                                    ),
                                    'l location': {
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    },
                                })
                            ),
                        }]
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', {
                            'l location': {
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            },
                            'l state': _p.decide.state(
                                $,
                                ($): t_out.Value.l_state.text.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ['global', {
                                                    'l location': {
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    },
                                                    'l reference': $['l id'],
                                                }]
                                            )
                                        case 'local':
                                            return _p.ss(
                                                $,
                                                ($) => ['local', Text_Type(
                                                    $
                                                )]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
                        }]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})

export const Text_Type: t_signatures.Text_Type = ($) => ({
    'type': _p_cc(
        $['type'],
        ($) => ({
            'l location': {
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            },
            'l state': _p.decide.state(
                $,
                ($): t_out.Text_Type.type_.l_state => {
                    switch ($[0]) {
                        case 'multi line':
                            return _p.ss(
                                $,
                                ($) => ['multi line', null]
                            )
                        case 'single line':
                            return _p.ss(
                                $,
                                ($) => ['single line', null]
                            )
                        default:
                            return _p.au(
                                $[0]
                            )
                    }
                }
            ),
        })
    ),
})
