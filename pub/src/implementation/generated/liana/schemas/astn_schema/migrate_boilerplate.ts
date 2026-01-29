
import * as _p from "pareto-core/dist/transformer"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"

export const Schemas: t_signatures.Schemas = ($) => ({
    'location': ({
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(
        ($, id) => ({
            'entry': Schema_Tree(
                $
            ),
            'location': ({
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            }),
        })
    ),
})

export const Text_Type: t_signatures.Text_Type = ($) => ({
    'type': _p_cc(
        $['type'],
        ($) => ({
            'location': ({
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            }),
            'state': _p.decide.state(
                $,
                ($): t_out.Text_Type.type_.state => {
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

export const Globals: t_signatures.Globals = ($) => ({
    'text types': _p_cc(
        $['text types'],
        ($) => ({
            'location': ({
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            }),
            'dictionary': $.__d_map(
                ($, id) => ({
                    'entry': Text_Type(
                        $
                    ),
                    'location': ({
                        'document resource identifier': "implement me",
                        'line': 42,
                        'column': 42,
                    }),
                })
            ),
        })
    ),
})

export const Type: t_signatures.Type = ($) => ({
    'node': _p_cc(
        $['node'],
        ($) => Type_Node(
            $
        )
    ),
})

export const Types: t_signatures.Types = ($) => ({
    'location': ({
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(
        ($, id) => ({
            'entry': Type(
                $
            ),
            'location': ({
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            }),
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
        ($) => Types(
            $
        )
    ),
})

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ({
    'location': ({
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state(
        $,
        ($): t_out.Schema_Tree.state => {
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

export const Imports: t_signatures.Imports = ($) => ({
    'location': ({
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(
        ($, id) => ({
            'entry': ({
                'schema set child': _p_cc(
                    $['schema set child'],
                    ($) => ({
                        'location': ({
                            'document resource identifier': "implement me",
                            'line': 42,
                            'column': 42,
                        }),
                        'id': $['id'],
                    })
                ),
                'schema': _p_cc(
                    $['schema'],
                    ($) => null
                ),
            }),
            'location': ({
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            }),
        })
    ),
})

export const Dictionary: t_signatures.Dictionary = ($) => ({
    'node': _p_cc(
        $['node'],
        ($) => Type_Node(
            $
        )
    ),
    'ordered': _p_cc(
        $['ordered'],
        ($) => $
    ),
})

export const Group: t_signatures.Group = ($) => ({
    'location': ({
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    }),
    'dictionary': $.__d_map(
        ($, id) => ({
            'entry': Type_Node(
                $
            ),
            'location': ({
                'document resource identifier': "implement me",
                'line': 42,
                'column': 42,
            }),
        })
    ),
})

export const Type_Node: t_signatures.Type_Node = ($) => ({
    'location': ({
        'document resource identifier': "implement me",
        'line': 42,
        'column': 42,
    }),
    'state': _p.decide.state(
        $,
        ($): t_out.Type_Node.state => {
            switch ($[0]) {
                case 'component':
                    return _p.ss(
                        $,
                        ($) => ['component', ({
                            'location': ({
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'state': _p.decide.state(
                                $,
                                ($): t_out.Type_Node.state.component.state => {
                                    switch ($[0]) {
                                        case 'external':
                                            return _p.ss(
                                                $,
                                                ($) => ['external', ({
                                                    'import': _p_cc(
                                                        $['import'],
                                                        ($) => ({
                                                            'location': ({
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                            'id': $['id'],
                                                        })
                                                    ),
                                                    'type': _p_cc(
                                                        $['type'],
                                                        ($) => ({
                                                            'location': ({
                                                                'document resource identifier': "implement me",
                                                                'line': 42,
                                                                'column': 42,
                                                            }),
                                                            'id': $['id'],
                                                        })
                                                    ),
                                                })]
                                            )
                                        case 'internal':
                                            return _p.ss(
                                                $,
                                                ($) => ['internal', ({
                                                    'location': ({
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })]
                                            )
                                        case 'internal cyclic':
                                            return _p.ss(
                                                $,
                                                ($) => ['internal cyclic', ({
                                                    'location': ({
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })]
                                            )
                                        default:
                                            return _p.au(
                                                $[0]
                                            )
                                    }
                                }
                            ),
                        })]
                    )
                case 'dictionary':
                    return _p.ss(
                        $,
                        ($) => ['dictionary', Dictionary(
                            $
                        )]
                    )
                case 'group':
                    return _p.ss(
                        $,
                        ($) => ['group', Group(
                            $
                        )]
                    )
                case 'list':
                    return _p.ss(
                        $,
                        ($) => ['list', ({
                            'node': _p_cc(
                                $['node'],
                                ($) => Type_Node(
                                    $
                                )
                            ),
                        })]
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null]
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', Type_Node(
                            $
                        )]
                    )
                case 'state':
                    return _p.ss(
                        $,
                        ($) => ['state', ({
                            'location': ({
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'dictionary': $.__d_map(
                                ($, id) => ({
                                    'entry': Type_Node(
                                        $
                                    ),
                                    'location': ({
                                        'document resource identifier': "implement me",
                                        'line': 42,
                                        'column': 42,
                                    }),
                                })
                            ),
                        })]
                    )
                case 'text':
                    return _p.ss(
                        $,
                        ($) => ['text', ({
                            'location': ({
                                'document resource identifier': "implement me",
                                'line': 42,
                                'column': 42,
                            }),
                            'state': _p.decide.state(
                                $,
                                ($): t_out.Type_Node.state.text.state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return _p.ss(
                                                $,
                                                ($) => ['global', ({
                                                    'location': ({
                                                        'document resource identifier': "implement me",
                                                        'line': 42,
                                                        'column': 42,
                                                    }),
                                                    'id': $['id'],
                                                })]
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
                        })]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    ),
})
