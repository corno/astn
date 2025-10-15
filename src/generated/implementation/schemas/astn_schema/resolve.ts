import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/resolve"
import * as _i_out from "../../../interface/schemas/astn_schema/data_types/source"
import * as _i_signatures from "../../../interface/schemas/astn_schema/data_types/resolve"


export const r_Dictionary: _i_signatures._T_Dictionary = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_node: _i_out._T_Dictionary.node = _pa.cc($['node'], ($) => r_Type_Node(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                    }),
                    'values': ({
                        'globals': params['values']['globals'],
                        'imports': params['values']['imports'],
                    }),
                }),
            }
        ))
        const p_ordered: _i_out._T_Dictionary.ordered = _pa.cc($['ordered'], ($) => $)
        return ({
            'node': p_node,
            'ordered': p_ordered,
        })
    })
})
export const r_Globals: _i_signatures._T_Globals = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_text_types: _i_out._T_Globals.text_types = _pa.cc($['text types'], ($) => _pa.block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'location 2 string': l2s,
                    'map': ($, $p) => _pa.block(() => {
                        return _pa.cc($['value'], ($) => r_Text_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'lookups': null,
                                    'values': null,
                                }),
                            }
                        ))
                    }),
                }
            )
        }))
        return ({
            'text types': p_text_types,
        })
    })
})
export const r_Group: _i_signatures._T_Group = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => r_Type_Node(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                    'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                                }),
                                'values': ({
                                    'globals': params['values']['globals'],
                                    'imports': params['values']['imports'],
                                }),
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
export const r_Imports: _i_signatures._T_Imports = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => _pa.block(() => {
                        const p_schema_set_child: _i_out._T_Imports.D.schema_set_child = _pa.cc($['schema set child'], ($) => _i_generic.get_entry_from_stack(
                            params['lookups']['sibling schemas'],
                            {
                                'location 2 string': l2s,
                                'reference': $,
                            }
                        ))
                        const p_schema: _i_out._T_Imports.D.schema = _pa.cc($['schema'], ($) => _pd.implement_me())
                        return ({
                            'schema': p_schema,
                            'schema set child': p_schema_set_child,
                        })
                    }))
                }),
            }
        )
    })
})
export const r_Schema: _i_signatures._T_Schema = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_imports: _i_out._T_Schema.imports = _pa.cc($['imports'], ($) => r_Imports(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'sibling schemas': params['lookups']['sibling schemas'],
                    }),
                    'values': null,
                }),
            }
        ))
        const p_globals: _i_out._T_Schema.globals = _pa.cc($['globals'], ($) => r_Globals(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': null,
                }),
            }
        ))
        const p_types: _i_out._T_Schema.types = _pa.cc($['types'], ($) => r_Types(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': null,
                    'values': ({
                        'globals': _pa.set(p_globals),
                        'imports': _pa.set(p_imports),
                    }),
                }),
            }
        ))
        return ({
            'globals': p_globals,
            'imports': p_imports,
            'types': p_types,
        })
    })
})
export const r_Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.cc($['state group'], ($): _i_out._T_Schema_Tree => {
        switch ($[0]) {
            case 'schema': return _pa.ss($, ($) => ['schema', _pa.block(() => {
                return r_Schema(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'sibling schemas': params['lookups']['sibling schemas'],
                            }),
                            'values': null,
                        }),
                    }
                )
            })])
            case 'set': return _pa.ss($, ($) => ['set', _pa.block(() => {
                return r_Schemas(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'sibling schemas': params['lookups']['sibling schemas'],
                            }),
                            'values': null,
                        }),
                    }
                )
            })])
            default: return _pa.au($[0])
        }
    })
})
export const r_Schemas: _i_signatures._T_Schemas = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => r_Schema_Tree(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'sibling schemas': _pd.implement_me(),
                                }),
                                'values': null,
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
export const r_Text_Type: _i_signatures._T_Text_Type = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_type: _i_out._T_Text_Type._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Text_Type._type => {
            switch ($[0]) {
                case 'multi line': return _pa.ss($, ($) => ['multi line', _pa.block(() => {
                    return null
                })])
                case 'single line': return _pa.ss($, ($) => ['single line', _pa.block(() => {
                    return null
                })])
                default: return _pa.au($[0])
            }
        }))
        return ({
            'type': p_type,
        })
    })
})
export const r_Type: _i_signatures._T_Type = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        const p_node: _i_out._T_Type.node = _pa.cc($['node'], ($) => r_Type_Node(
            $,
            {
                'location 2 string': l2s,
                'parameters': ({
                    'lookups': ({
                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                    }),
                    'values': ({
                        'globals': params['values']['globals'],
                        'imports': params['values']['imports'],
                    }),
                }),
            }
        ))
        return ({
            'node': p_node,
        })
    })
})
export const r_Type_Node: _i_signatures._T_Type_Node = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.cc($['state group'], ($): _i_out._T_Type_Node => {
        switch ($[0]) {
            case 'component': return _pa.ss($, ($) => ['component', _pa.block(() => {
                return _pa.cc($['state group'], ($): _i_out._T_Type_Node.SG.component => {
                    switch ($[0]) {
                        case 'external': return _pa.ss($, ($) => ['external', _pa.block(() => {
                            const c_import = params['values']['imports'].transform(
                                ($) => $,
                                () => _pa.panic('ABORT SELECTION')
                            )
                            return _pa.block(() => {
                                const p_import: _i_out._T_Type_Node.SG.component.SG.external._import = _pa.cc($['import'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        c_import,
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                const p_type: _i_out._T_Type_Node.SG.component.SG.external._type = _pa.cc($['type'], ($) => _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        p_import['entry']['schema']['types']['dictionary'],
                                        null
                                    ),
                                    {
                                        'location 2 string': l2s,
                                        'reference': $,
                                    }
                                ))
                                return ({
                                    'import': p_import,
                                    'type': p_type,
                                })
                            })
                        })])
                        case 'internal': return _pa.ss($, ($) => ['internal', _pa.block(() => {
                            return _i_generic.get_entry(
                                params['lookups']['noncircular sibling types'],
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        case 'internal cyclic': return _pa.ss($, ($) => ['internal cyclic', _pa.block(() => {
                            return _i_generic.get_possibly_circular_dependent_sibling_entry(
                                params['lookups']['possibly circular dependent sibling types'],
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        default: return _pa.au($[0])
                    }
                })
            })])
            case 'dictionary': return _pa.ss($, ($) => ['dictionary', _pa.block(() => {
                return r_Dictionary(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                            }),
                            'values': ({
                                'globals': params['values']['globals'],
                                'imports': params['values']['imports'],
                            }),
                        }),
                    }
                )
            })])
            case 'group': return _pa.ss($, ($) => ['group', _pa.block(() => {
                return r_Group(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': ({
                                'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                            }),
                            'values': ({
                                'globals': params['values']['globals'],
                                'imports': params['values']['imports'],
                            }),
                        }),
                    }
                )
            })])
            case 'list': return _pa.ss($, ($) => ['list', _pa.block(() => {
                return _pa.block(() => {
                    const p_node: _i_out._T_Type_Node.SG.list.node = _pa.cc($['node'], ($) => r_Type_Node(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': params['lookups'],
                                'values': params['values'],
                            }),
                        }
                    ))
                    return ({
                        'node': p_node,
                    })
                })
            })])
            case 'nothing': return _pa.ss($, ($) => ['nothing', _pa.block(() => {
                return null
            })])
            case 'optional': return _pa.ss($, ($) => ['optional', _pa.block(() => {
                return r_Type_Node(
                    $,
                    {
                        'location 2 string': l2s,
                        'parameters': ({
                            'lookups': params['lookups'],
                            'values': params['values'],
                        }),
                    }
                )
            })])
            case 'reference': return _pa.ss($, ($) => ['reference', _pa.block(() => {
                return _pa.block(() => {
                    const p_type: _i_out._T_Type_Node.SG.reference._type = _pa.cc($['type'], ($) => _pa.cc($['state group'], ($): _i_out._T_Type_Node.SG.reference._type => {
                        switch ($[0]) {
                            case 'derived': return _pa.ss($, ($) => ['derived', _pa.block(() => {
                                return null
                            })])
                            case 'selected': return _pa.ss($, ($) => ['selected', _pa.block(() => {
                                return null
                            })])
                            default: return _pa.au($[0])
                        }
                    }))
                    return ({
                        'type': p_type,
                    })
                })
            })])
            case 'state group': return _pa.ss($, ($) => ['state group', _pa.block(() => {
                return _pa.block(() => {
                    return _i_generic.resolve_dictionary(
                        $,
                        {
                            'location 2 string': l2s,
                            'map': ($, $p) => _pa.block(() => {
                                return _pa.cc($['value'], ($) => r_Type_Node(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'lookups': params['lookups'],
                                            'values': params['values'],
                                        }),
                                    }
                                ))
                            }),
                        }
                    )
                })
            })])
            case 'text': return _pa.ss($, ($) => ['text', _pa.block(() => {
                return _pa.cc($['state group'], ($): _i_out._T_Type_Node.SG.text => {
                    switch ($[0]) {
                        case 'global': return _pa.ss($, ($) => ['global', _pa.block(() => {
                            const c_globals = params['values']['globals'].transform(
                                ($) => $,
                                () => _pa.panic('ABORT SELECTION')
                            )
                            return _i_generic.get_entry(
                                _i_generic.dictionary_to_lookup(
                                    c_globals['text types'],
                                    null
                                ),
                                {
                                    'location 2 string': l2s,
                                    'reference': $,
                                }
                            )
                        })])
                        case 'local': return _pa.ss($, ($) => ['local', _pa.block(() => {
                            return r_Text_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'lookups': null,
                                        'values': null,
                                    }),
                                }
                            )
                        })])
                        default: return _pa.au($[0])
                    }
                })
            })])
            default: return _pa.au($[0])
        }
    })
})
export const r_Types: _i_signatures._T_Types = ($, $p) => _pa.block(() => {
    const l2s = $p['location 2 string']
    const params = $p['parameters']
    return _pa.block(() => {
        return _i_generic.resolve_ordered_dictionary(
            $,
            {
                'location 2 string': l2s,
                'map': ($, $p) => _pa.block(() => {
                    return _pa.cc($['value'], ($) => r_Type(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'lookups': ({
                                    'noncircular sibling types': $p['not circular dependent siblings'],
                                    'possibly circular dependent sibling types': $p['possibly circular dependent siblings'],
                                }),
                                'values': ({
                                    'globals': params['values']['globals'],
                                    'imports': params['values']['imports'],
                                }),
                            }),
                        }
                    ))
                }),
            }
        )
    })
})
