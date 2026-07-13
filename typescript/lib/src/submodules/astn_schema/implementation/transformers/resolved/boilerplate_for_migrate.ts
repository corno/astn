
import * as p_ from 'pareto-core/implementation/transformer'
import * as p_di from 'pareto-core/interface/schema'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)


import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import type * as s_in from "../../../interface/schemas/resolved.js"
namespace t_signatures {
    export type Schema_Tree = p_.Transformer<
        s_in.Schema_Tree,
        s_out.Schema_Tree
    >
    export type Schemas = p_.Transformer<
        s_in.Schemas,
        s_out.Schemas
    >
    export type Schema = p_.Transformer<
        s_in.Schema,
        s_out.Schema
    >
    export type Imports = p_.Transformer<
        s_in.Imports,
        s_out.Imports
    >
    export type Globals = p_.Transformer<
        s_in.Globals,
        s_out.Globals
    >
    export type Modules = p_.Transformer<
        s_in.Modules,
        s_out.Modules
    >
    export type Value = p_.Transformer<
        s_in.Value,
        s_out.Value
    >
    export type Text_Type = p_.Transformer<
        s_in.Text_Type,
        s_out.Text_Type
    >
}

import * as s_out from "../../../interface/schemas/unresolved.js"

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): s_out.Schema_Tree.l_state => {
            switch ($[0]) {
                case 'set':
                    return p_.option(
                        $,
                        ($) => ['set', Schemas(
                            $,
                        )],
                    )
                case 'schema':
                    return p_.option(
                        $,
                        ($) => ['schema', Schema(
                            $,
                        )],
                    )
                default:
                    return p_.au(
                        $[0],
                    )
            }
        },
    ),
})

export const Schemas: t_signatures.Schemas = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary($,
    ).map(
        ($, id) => ({
            'l entry': Schema_Tree(
                $,
            ),
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Schema: t_signatures.Schema = ($) => ({
    'imports': p_change_context(
        $['imports'],
        ($) => Imports(
            $,
        ),
    ),
    'globals': p_change_context(
        $['globals'],
        ($) => Globals(
            $,
        ),
    ),
    'types': p_change_context(
        $['types'],
        ($) => Modules(
            $,
        ),
    ),
})

export const Imports: t_signatures.Imports = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary($,
    ).map(
        ($, id) => ({
            'l entry': {
                'schema set child': p_change_context(
                    $['schema set child'],
                    ($) => ({
                        'l location': ['in main document', {
                            'start': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                            'end': {
                                'absolute': 42,
                                'relative': {
                                    'line': 42,
                                    'column': 42,
                                },
                            },
                        }],
                        'l reference': $['l value']['l id'],
                    }),
                ),
                'schema': p_change_context(
                    $['schema'],
                    ($) => null,
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Globals: t_signatures.Globals = ($) => ({
    'text types': p_change_context(
        $['text types'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l dictionary': p_.from.dictionary($,
            ).map(
                ($, id) => ({
                    'l entry': Text_Type(
                        $,
                    ),
                    'l location': ['in main document', {
                        'start': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                        'end': {
                            'absolute': 42,
                            'relative': {
                                'line': 42,
                                'column': 42,
                            },
                        },
                    }],
                }),
            ),
        }),
    ),
})

export const Modules: t_signatures.Modules = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l dictionary': p_.from.dictionary($,
    ).map(
        ($, id) => ({
            'l entry': {
                'root value': p_change_context(
                    $['root value'],
                    ($) => Value(
                        $,
                    ),
                ),
            },
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
        }),
    ),
})

export const Value: t_signatures.Value = ($) => ({
    'l location': ['in main document', {
        'start': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
        'end': {
            'absolute': 42,
            'relative': {
                'line': 42,
                'column': 42,
            },
        },
    }],
    'l state': p_decide_state(
        $,
        ($): s_out.Value.l_state => {
            switch ($[0]) {
                case 'component':
                    return p_.option(
                        $,
                        ($) => ['component', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $,
                                ($): s_out.Value.l_state.component.l_state => {
                                    switch ($[0]) {
                                        case 'external':
                                            return p_.option(
                                                $,
                                                ($) => ['external', {
                                                    'import': p_change_context(
                                                        $['import'],
                                                        ($) => ({
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }),
                                                    ),
                                                    'type': p_change_context(
                                                        $['type'],
                                                        ($) => ({
                                                            'l location': ['in main document', {
                                                                'start': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                                'end': {
                                                                    'absolute': 42,
                                                                    'relative': {
                                                                        'line': 42,
                                                                        'column': 42,
                                                                    },
                                                                },
                                                            }],
                                                            'l reference': $['l id'],
                                                        }),
                                                    ),
                                                }],
                                            )
                                        case 'internal acyclic':
                                            return p_.option(
                                                $,
                                                ($) => ['internal acyclic', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'internal':
                                            return p_.option(
                                                $,
                                                ($) => ['internal', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
                            ),
                        }],
                    )
                case 'dictionary':
                    return p_.option(
                        $,
                        ($) => ['dictionary', {
                            'value': p_change_context(
                                $['value'],
                                ($) => Value(
                                    $,
                                ),
                            ),
                            'ordered': p_change_context(
                                $['ordered'],
                                ($) => $,
                            ),
                        }],
                    )
                case 'group':
                    return p_.option(
                        $,
                        ($) => ['group', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l dictionary': p_.from.dictionary($,
                            ).map(
                                ($, id) => ({
                                    'l entry': Value(
                                        $,
                                    ),
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                }),
                            ),
                        }],
                    )
                case 'list':
                    return p_.option(
                        $,
                        ($) => ['list', {
                            'value': p_change_context(
                                $['value'],
                                ($) => Value(
                                    $,
                                ),
                            ),
                        }],
                    )
                case 'nothing':
                    return p_.option(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'optional':
                    return p_.option(
                        $,
                        ($) => ['optional', Value(
                            $,
                        )],
                    )
                case 'state':
                    return p_.option(
                        $,
                        ($) => ['state', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l dictionary': p_.from.dictionary($,
                            ).map(
                                ($, id) => ({
                                    'l entry': Value(
                                        $,
                                    ),
                                    'l location': ['in main document', {
                                        'start': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                        'end': {
                                            'absolute': 42,
                                            'relative': {
                                                'line': 42,
                                                'column': 42,
                                            },
                                        },
                                    }],
                                }),
                            ),
                        }],
                    )
                case 'text':
                    return p_.option(
                        $,
                        ($) => ['text', {
                            'l location': ['in main document', {
                                'start': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                                'end': {
                                    'absolute': 42,
                                    'relative': {
                                        'line': 42,
                                        'column': 42,
                                    },
                                },
                            }],
                            'l state': p_decide_state(
                                $,
                                ($): s_out.Value.l_state.text.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return p_.option(
                                                $,
                                                ($) => ['global', {
                                                    'l location': ['in main document', {
                                                        'start': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                        'end': {
                                                            'absolute': 42,
                                                            'relative': {
                                                                'line': 42,
                                                                'column': 42,
                                                            },
                                                        },
                                                    }],
                                                    'l reference': $['l id'],
                                                }],
                                            )
                                        case 'local':
                                            return p_.option(
                                                $,
                                                ($) => ['local', Text_Type(
                                                    $,
                                                )],
                                            )
                                        default:
                                            return p_.au(
                                                $[0],
                                            )
                                    }
                                },
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
})

export const Text_Type: t_signatures.Text_Type = ($) => ({
    'type': p_change_context(
        $['type'],
        ($) => ({
            'l location': ['in main document', {
                'start': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
                'end': {
                    'absolute': 42,
                    'relative': {
                        'line': 42,
                        'column': 42,
                    },
                },
            }],
            'l state': p_decide_state(
                $,
                ($): s_out.Text_Type.type_.l_state => {
                    switch ($[0]) {
                        case 'multi line':
                            return p_.option(
                                $,
                                ($) => ['multi line', null],
                            )
                        case 'single line':
                            return p_.option(
                                $,
                                ($) => ['single line', null],
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            ),
        }),
    ),
})
