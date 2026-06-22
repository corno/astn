
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/astn_schema/signatures/resolved/transformers/boilerplate_for_migrate"

import * as t_out from "../../../../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"

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
        ($): t_out.Schema_Tree.l_state => {
            switch ($[0]) {
                case 'set':
                    return p_.ss(
                        $,
                        ($) => ['set', Schemas(
                            $,
                        )],
                    )
                case 'schema':
                    return p_.ss(
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
    'l dictionary': p_.from.dictionary(
        $,
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
    'l dictionary': p_.from.dictionary(
        $,
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
            'l dictionary': p_.from.dictionary(
                $,
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
    'l dictionary': p_.from.dictionary(
        $,
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
        ($): t_out.Value.l_state => {
            switch ($[0]) {
                case 'component':
                    return p_.ss(
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
                                ($): t_out.Value.l_state.component.l_state => {
                                    switch ($[0]) {
                                        case 'external':
                                            return p_.ss(
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
                                            return p_.ss(
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
                                            return p_.ss(
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
                    return p_.ss(
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
                    return p_.ss(
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
                            'l dictionary': p_.from.dictionary(
                                $,
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
                    return p_.ss(
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
                    return p_.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'optional':
                    return p_.ss(
                        $,
                        ($) => ['optional', Value(
                            $,
                        )],
                    )
                case 'state':
                    return p_.ss(
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
                            'l dictionary': p_.from.dictionary(
                                $,
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
                    return p_.ss(
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
                                ($): t_out.Value.l_state.text.l_state => {
                                    switch ($[0]) {
                                        case 'global':
                                            return p_.ss(
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
                                            return p_.ss(
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
                ($): t_out.Text_Type.type_.l_state => {
                    switch ($[0]) {
                        case 'multi line':
                            return p_.ss(
                                $,
                                ($) => ['multi line', null],
                            )
                        case 'single line':
                            return p_.ss(
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
