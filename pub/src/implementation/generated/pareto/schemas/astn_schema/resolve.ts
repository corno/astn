    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "pareto-core-internals/dist/algorithm_types/refiner/resolve"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/astn_schema/data_types/source"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/astn_schema/data_types/resolve"
    
    
    export const r_Type: _i_signatures._T_Type = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            const p_node: _i_out._T_Type.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': ({
                            'globals': params['values']['globals'],
                            'imports': params['values']['imports'],
                        }),
                        'lookups': ({
                            'noncircular sibling types': params['lookups']['noncircular sibling types'],
                            'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                        }),
                    }),
                }
            ))
            return ({
                'node': p_node,
            })
        })
    })
    export const r_Types: _i_signatures._T_Types = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            return _i_generic.resolve_ordered_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => r_Type(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'globals': params['values']['globals'],
                                        'imports': params['values']['imports'],
                                    }),
                                    'lookups': ({
                                        'noncircular sibling types': $p['not circular dependent siblings'],
                                        'possibly circular dependent sibling types': $p['possibly circular dependent siblings'],
                                    }),
                                }),
                            }
                        ))
                    }),
                    'location 2 string': l2s,
                }
            )
        })
    })
    export const r_Globals: _i_signatures._T_Globals = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            const p_text_types: _i_out._T_Globals.text_types = _p.deprecated_cc($['text types'], ($) => _p.deprecated_block(() => {
                return _i_generic.resolve_dictionary(
                    $,
                    {
                        'map': ($, $p) => _p.deprecated_block(() => {
                            return _p.deprecated_cc($['value'], ($) => r_Text_Type(
                                $,
                                {
                                    'location 2 string': l2s,
                                    'parameters': ({
                                        'values': null,
                                        'lookups': null,
                                    }),
                                }
                            ))
                        }),
                        'location 2 string': l2s,
                    }
                )
            }))
            return ({
                'text types': p_text_types,
            })
        })
    })
    export const r_Text_Type: _i_signatures._T_Text_Type = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            const p_type: _i_out._T_Text_Type._type = _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($['state group'], ($): _i_out._T_Text_Type._type => {
                switch ($[0]) {
                    case 'multi line': return _p.ss($, ($) => ['multi line', _p.deprecated_block(() => {
                        return null
                    })])
                    case 'single line': return _p.ss($, ($) => ['single line', _p.deprecated_block(() => {
                        return null
                    })])
                    default: return _p.au($[0])
                }
            }))
            return ({
                'type': p_type,
            })
        })
    })
    export const r_Group: _i_signatures._T_Group = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => r_Type_Node(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': ({
                                        'globals': params['values']['globals'],
                                        'imports': params['values']['imports'],
                                    }),
                                    'lookups': ({
                                        'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                        'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                                    }),
                                }),
                            }
                        ))
                    }),
                    'location 2 string': l2s,
                }
            )
        })
    })
    export const r_Dictionary: _i_signatures._T_Dictionary = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            const p_node: _i_out._T_Dictionary.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': ({
                            'globals': params['values']['globals'],
                            'imports': params['values']['imports'],
                        }),
                        'lookups': ({
                            'noncircular sibling types': params['lookups']['noncircular sibling types'],
                            'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                        }),
                    }),
                }
            ))
            const p_ordered: _i_out._T_Dictionary.ordered = _p.deprecated_cc($['ordered'], ($) => $)
            return ({
                'node': p_node,
                'ordered': p_ordered,
            })
        })
    })
    export const r_Type_Node: _i_signatures._T_Type_Node = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node => {
            switch ($[0]) {
                case 'component': return _p.ss($, ($) => ['component', _p.deprecated_block(() => {
                    return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.component => {
                        switch ($[0]) {
                            case 'external': return _p.ss($, ($) => ['external', _p.deprecated_block(() => {
                                const c_import = params['values']['imports'].__decide(
                                    ($) => $,
                                    () => _pdev.implement_me("marker tbd")
                                )
                                return _p.deprecated_block(() => {
                                    const p_import: _i_out._T_Type_Node.SG.component.SG.external._import = _p.deprecated_cc($['import'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            c_import,
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    const p_type: _i_out._T_Type_Node.SG.component.SG.external._type = _p.deprecated_cc($['type'], ($) => _i_generic.get_entry(
                                        _i_generic.dictionary_to_lookup(
                                            p_import['entry']['schema']['types']['dictionary'],
                                            null
                                        ),
                                        {
                                            'reference': $,
                                            'location 2 string': l2s,
                                        }
                                    ))
                                    return ({
                                        'import': p_import,
                                        'type': p_type,
                                    })
                                })
                            })])
                            case 'internal': return _p.ss($, ($) => ['internal', _p.deprecated_block(() => {
                                return _i_generic.get_entry(
                                    params['lookups']['noncircular sibling types'],
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                )
                            })])
                            case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', _p.deprecated_block(() => {
                                return _i_generic.get_possibly_circular_dependent_sibling_entry(
                                    params['lookups']['possibly circular dependent sibling types'],
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                )
                            })])
                            default: return _p.au($[0])
                        }
                    })
                })])
                case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.deprecated_block(() => {
                    return r_Dictionary(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'globals': params['values']['globals'],
                                    'imports': params['values']['imports'],
                                }),
                                'lookups': ({
                                    'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                    'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                                }),
                            }),
                        }
                    )
                })])
                case 'group': return _p.ss($, ($) => ['group', _p.deprecated_block(() => {
                    return r_Group(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': ({
                                    'globals': params['values']['globals'],
                                    'imports': params['values']['imports'],
                                }),
                                'lookups': ({
                                    'noncircular sibling types': params['lookups']['noncircular sibling types'],
                                    'possibly circular dependent sibling types': params['lookups']['possibly circular dependent sibling types'],
                                }),
                            }),
                        }
                    )
                })])
                case 'list': return _p.ss($, ($) => ['list', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        const p_node: _i_out._T_Type_Node.SG.list.node = _p.deprecated_cc($['node'], ($) => r_Type_Node(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': params['values'],
                                    'lookups': params['lookups'],
                                }),
                            }
                        ))
                        return ({
                            'node': p_node,
                        })
                    })
                })])
                case 'nothing': return _p.ss($, ($) => ['nothing', _p.deprecated_block(() => {
                    return null
                })])
                case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_block(() => {
                    return r_Type_Node(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': params['values'],
                                'lookups': params['lookups'],
                            }),
                        }
                    )
                })])
                case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_block(() => {
                    return _p.deprecated_block(() => {
                        return _i_generic.resolve_dictionary(
                            $,
                            {
                                'map': ($, $p) => _p.deprecated_block(() => {
                                    return _p.deprecated_cc($['value'], ($) => r_Type_Node(
                                        $,
                                        {
                                            'location 2 string': l2s,
                                            'parameters': ({
                                                'values': params['values'],
                                                'lookups': params['lookups'],
                                            }),
                                        }
                                    ))
                                }),
                                'location 2 string': l2s,
                            }
                        )
                    })
                })])
                case 'text': return _p.ss($, ($) => ['text', _p.deprecated_block(() => {
                    return _p.deprecated_cc($['state group'], ($): _i_out._T_Type_Node.SG.text => {
                        switch ($[0]) {
                            case 'global': return _p.ss($, ($) => ['global', _p.deprecated_block(() => {
                                const c_globals = params['values']['globals'].__decide(
                                    ($) => $,
                                    () => _pdev.implement_me("marker tbd")
                                )
                                return _i_generic.get_entry(
                                    _i_generic.dictionary_to_lookup(
                                        c_globals['text types'],
                                        null
                                    ),
                                    {
                                        'reference': $,
                                        'location 2 string': l2s,
                                    }
                                )
                            })])
                            case 'local': return _p.ss($, ($) => ['local', _p.deprecated_block(() => {
                                return r_Text_Type(
                                    $,
                                    {
                                        'location 2 string': l2s,
                                        'parameters': ({
                                            'values': null,
                                            'lookups': null,
                                        }),
                                    }
                                )
                            })])
                            default: return _p.au($[0])
                        }
                    })
                })])
                default: return _p.au($[0])
            }
        })
    })
    export const r_Schemas: _i_signatures._T_Schemas = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            return _i_generic.resolve_ordered_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => r_Schema_Tree(
                            $,
                            {
                                'location 2 string': l2s,
                                'parameters': ({
                                    'values': null,
                                    'lookups': ({
                                        'sibling schemas': _pdev.implement_me("marker tbd"),
                                    }),
                                }),
                            }
                        ))
                    }),
                    'location 2 string': l2s,
                }
            )
        })
    })
    export const r_Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_cc($['state group'], ($): _i_out._T_Schema_Tree => {
            switch ($[0]) {
                case 'schema': return _p.ss($, ($) => ['schema', _p.deprecated_block(() => {
                    return r_Schema(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': ({
                                    'sibling schemas': params['lookups']['sibling schemas'],
                                }),
                            }),
                        }
                    )
                })])
                case 'set': return _p.ss($, ($) => ['set', _p.deprecated_block(() => {
                    return r_Schemas(
                        $,
                        {
                            'location 2 string': l2s,
                            'parameters': ({
                                'values': null,
                                'lookups': ({
                                    'sibling schemas': params['lookups']['sibling schemas'],
                                }),
                            }),
                        }
                    )
                })])
                default: return _p.au($[0])
            }
        })
    })
    export const r_Schema: _i_signatures._T_Schema = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            const p_imports: _i_out._T_Schema.imports = _p.deprecated_cc($['imports'], ($) => r_Imports(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': null,
                        'lookups': ({
                            'sibling schemas': params['lookups']['sibling schemas'],
                        }),
                    }),
                }
            ))
            const p_globals: _i_out._T_Schema.globals = _p.deprecated_cc($['globals'], ($) => r_Globals(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': null,
                        'lookups': null,
                    }),
                }
            ))
            const p_types: _i_out._T_Schema.types = _p.deprecated_cc($['types'], ($) => r_Types(
                $,
                {
                    'location 2 string': l2s,
                    'parameters': ({
                        'values': ({
                            'globals': _p.optional.set(p_globals),
                            'imports': _p.optional.set(p_imports),
                        }),
                        'lookups': null,
                    }),
                }
            ))
            return ({
                'imports': p_imports,
                'globals': p_globals,
                'types': p_types,
            })
        })
    })
    export const r_Imports: _i_signatures._T_Imports = ($, $p) => _p.deprecated_block(() => {
        const l2s = $p['location 2 string']
        const params = $p['parameters']
        return _p.deprecated_block(() => {
            return _i_generic.resolve_dictionary(
                $,
                {
                    'map': ($, $p) => _p.deprecated_block(() => {
                        return _p.deprecated_cc($['value'], ($) => _p.deprecated_block(() => {
                            const p_schema_set_child: _i_out._T_Imports.D.schema_set_child = _p.deprecated_cc($['schema set child'], ($) => _i_generic.get_entry_from_stack(
                                params['lookups']['sibling schemas'],
                                {
                                    'reference': $,
                                    'location 2 string': l2s,
                                }
                            ))
                            const p_schema: _i_out._T_Imports.D.schema = _p.deprecated_cc($['schema'], ($) => _pdev.implement_me("marker tbd"))
                            return ({
                                'schema set child': p_schema_set_child,
                                'schema': p_schema,
                            })
                        }))
                    }),
                    'location 2 string': l2s,
                }
            )
        })
    })
