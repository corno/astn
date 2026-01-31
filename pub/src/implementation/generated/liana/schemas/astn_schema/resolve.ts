
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as _p_ls from "pareto-core/dist/lookup_selection"

import {
    _p_deprecated_block,
} from "pareto-core/dist/deprecated_block"

import * as t_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/resolve"

export const Modules: t_signatures.Modules = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Modules.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_root_value = _p_cc(
                    $['root value'],
                    ($) => Value(
                        $,
                        ($) => abort(
                            $
                        ),
                        {
                            'noncircular sibling modules': $a,
                            'possibly circular dependent sibling modules': $c,
                        },
                        {
                            'globals': $p['globals'],
                            'imports': $p['imports'],
                        }
                    )
                )
                return {
                    'root value': prop_root_value,
                }
            }
        )
    )
)

export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_text_types = _p_cc(
            $['text types'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Globals.text_types.D => _p_cc(
                    $['l entry'],
                    ($) => Text_Type(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )
                )
            )
        )
        return {
            'text types': prop_text_types,
        }
    }
)

export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p_deprecated_block(
                () => {
                    
                    const var_location = $['l location']
                    return _p.decide.state(
                        $['l state'],
                        ($): t_out.Text_Type.type_ => {
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
                    )
                }
            )
        )
        return {
            'type': prop_type,
        }
    }
)

export const Value: t_signatures.Value = ($, abort, $l, $p) => _p_deprecated_block(
    () => {
        
        const var_location = $['l location']
        return _p.decide.state(
            $['l state'],
            ($): t_out.Value => {
                switch ($[0]) {
                    case 'component':
                        return _p.ss(
                            $,
                            ($) => ['component', _p_deprecated_block(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return _p.decide.state(
                                        $['l state'],
                                        ($): t_out.Value.component => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', _p_deprecated_block(
                                                            () => {
                                                                
                                                                const var_constraint_import = _p.decide.optional(
                                                                    $p['imports'],
                                                                    ($) => $,
                                                                    () => abort(
                                                                        {
                                                                            'type': ['constraint', ['optional value is not set', null]],
                                                                            'location': var_location,
                                                                        }
                                                                    )
                                                                )
                                                                return _p.group.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_import = _p_cc(
                                                                            $['import'],
                                                                            ($) => ({
                                                                                'l entry': _p_ls.acyclic.from_resolved_dictionary(
                                                                                    var_constraint_import
                                                                                ).get_entry(
                                                                                    $['l reference'],
                                                                                    {
                                                                                        'no_such_entry': () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                'location': $['l location'],
                                                                                            }
                                                                                        ),
                                                                                        'no_context_lookup': () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                'location': $['l location'],
                                                                                            }
                                                                                        ),
                                                                                        'cycle_detected': () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                'location': $['l location'],
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                ),
                                                                                'l id': $['l reference'],
                                                                            })
                                                                        )
                                                                        
                                                                        const prop_type = _p_cc(
                                                                            $['type'],
                                                                            ($) => ({
                                                                                'l entry': _p_ls.acyclic.from_resolved_dictionary(
                                                                                    prop_import['l entry']['schema']['types']
                                                                                ).get_entry(
                                                                                    $['l reference'],
                                                                                    {
                                                                                        'no_such_entry': () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                'location': $['l location'],
                                                                                            }
                                                                                        ),
                                                                                        'no_context_lookup': () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                'location': $['l location'],
                                                                                            }
                                                                                        ),
                                                                                        'cycle_detected': () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                'location': $['l location'],
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                ),
                                                                                'l id': $['l reference'],
                                                                            })
                                                                        )
                                                                        return {
                                                                            'import': prop_import,
                                                                            'type': prop_type,
                                                                        }
                                                                    }
                                                                )
                                                            }
                                                        )]
                                                    )
                                                case 'internal acyclic':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal acyclic', {
                                                            'l entry': $l['noncircular sibling modules'].get_entry(
                                                                $['l reference'],
                                                                {
                                                                    'no_such_entry': () => abort(
                                                                        {
                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                            'location': $['l location'],
                                                                        }
                                                                    ),
                                                                    'no_context_lookup': () => abort(
                                                                        {
                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                            'location': $['l location'],
                                                                        }
                                                                    ),
                                                                    'cycle_detected': () => abort(
                                                                        {
                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                            'location': $['l location'],
                                                                        }
                                                                    ),
                                                                }
                                                            ),
                                                            'l id': $['l reference'],
                                                        }]
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l entry': _pdev.implement_me(
                                                                "IM: FIXME CYCLIC ENTRY"
                                                            ),
                                                            'l id': $['l reference'],
                                                        }]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    )
                                }
                            )]
                        )
                    case 'dictionary':
                        return _p.ss(
                            $,
                            ($) => ['dictionary', _p.group.resolve(
                                () => {
                                    
                                    const prop_value = _p_cc(
                                        $['value'],
                                        ($) => Value(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            {
                                                'noncircular sibling modules': $l['noncircular sibling modules'],
                                                'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                                            },
                                            {
                                                'globals': $p['globals'],
                                                'imports': $p['imports'],
                                            }
                                        )
                                    )
                                    
                                    const prop_ordered = _p_cc(
                                        $['ordered'],
                                        ($) => $
                                    )
                                    return {
                                        'value': prop_value,
                                        'ordered': prop_ordered,
                                    }
                                }
                            )]
                        )
                    case 'group':
                        return _p.ss(
                            $,
                            ($) => ['group', _p.dictionary.resolve(
                                $['l dictionary'],
                                ($, id, $a, $c): t_out.Value.group.D => _p_cc(
                                    $['l entry'],
                                    ($) => Value(
                                        $,
                                        ($) => abort(
                                            $
                                        ),
                                        {
                                            'noncircular sibling modules': $l['noncircular sibling modules'],
                                            'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                                        },
                                        {
                                            'globals': $p['globals'],
                                            'imports': $p['imports'],
                                        }
                                    )
                                )
                            )]
                        )
                    case 'list':
                        return _p.ss(
                            $,
                            ($) => ['list', _p.group.resolve(
                                () => {
                                    
                                    const prop_value = _p_cc(
                                        $['value'],
                                        ($) => Value(
                                            $,
                                            ($) => abort(
                                                $
                                            ),
                                            $l,
                                            $p
                                        )
                                    )
                                    return {
                                        'value': prop_value,
                                    }
                                }
                            )]
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
                                $,
                                ($) => abort(
                                    $
                                ),
                                $l,
                                $p
                            )]
                        )
                    case 'state':
                        return _p.ss(
                            $,
                            ($) => ['state', _p.dictionary.resolve(
                                $['l dictionary'],
                                ($, id, $a, $c): t_out.Value.state.D => _p_cc(
                                    $['l entry'],
                                    ($) => Value(
                                        $,
                                        ($) => abort(
                                            $
                                        ),
                                        $l,
                                        $p
                                    )
                                )
                            )]
                        )
                    case 'text':
                        return _p.ss(
                            $,
                            ($) => ['text', _p_deprecated_block(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return _p.decide.state(
                                        $['l state'],
                                        ($): t_out.Value.text => {
                                            switch ($[0]) {
                                                case 'global':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['global', _p_deprecated_block(
                                                            () => {
                                                                
                                                                const var_constraint_globals = _p.decide.optional(
                                                                    $p['globals'],
                                                                    ($) => $,
                                                                    () => abort(
                                                                        {
                                                                            'type': ['constraint', ['optional value is not set', null]],
                                                                            'location': var_location,
                                                                        }
                                                                    )
                                                                )
                                                                return {
                                                                    'l entry': _p_ls.acyclic.from_resolved_dictionary(
                                                                        var_constraint_globals['text types']
                                                                    ).get_entry(
                                                                        $['l reference'],
                                                                        {
                                                                            'no_such_entry': () => abort(
                                                                                {
                                                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                    'location': $['l location'],
                                                                                }
                                                                            ),
                                                                            'no_context_lookup': () => abort(
                                                                                {
                                                                                    'type': ['lookup', ['no context lookup', null]],
                                                                                    'location': $['l location'],
                                                                                }
                                                                            ),
                                                                            'cycle_detected': () => abort(
                                                                                {
                                                                                    'type': ['lookup', ['cycle detected', null]],
                                                                                    'location': $['l location'],
                                                                                }
                                                                            ),
                                                                        }
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                }
                                                            }
                                                        )]
                                                    )
                                                case 'local':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['local', Text_Type(
                                                            $,
                                                            ($) => abort(
                                                                $
                                                            ),
                                                            null,
                                                            null
                                                        )]
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0]
                                                    )
                                            }
                                        }
                                    )
                                }
                            )]
                        )
                    default:
                        return _p.au(
                            $[0]
                        )
                }
            }
        )
    }
)

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Schemas.D => _p_cc(
        $['l entry'],
        ($) => Schema_Tree(
            $,
            ($) => abort(
                $
            ),
            {
                'sibling schemas': _p_ls.stack.push(
                    $l['sibling schemas'],
                    $a
                ),
            },
            null
        )
    )
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p_deprecated_block(
    () => {
        
        const var_location = $['l location']
        return _p.decide.state(
            $['l state'],
            ($): t_out.Schema_Tree => {
                switch ($[0]) {
                    case 'schema':
                        return _p.ss(
                            $,
                            ($) => ['schema', Schema(
                                $,
                                ($) => abort(
                                    $
                                ),
                                {
                                    'sibling schemas': $l['sibling schemas'],
                                },
                                null
                            )]
                        )
                    case 'set':
                        return _p.ss(
                            $,
                            ($) => ['set', Schemas(
                                $,
                                ($) => abort(
                                    $
                                ),
                                {
                                    'sibling schemas': $l['sibling schemas'],
                                },
                                null
                            )]
                        )
                    default:
                        return _p.au(
                            $[0]
                        )
                }
            }
        )
    }
)

export const Schema: t_signatures.Schema = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_imports = _p_cc(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $
                ),
                {
                    'sibling schemas': $l['sibling schemas'],
                },
                null
            )
        )
        
        const prop_globals = _p_cc(
            $['globals'],
            ($) => Globals(
                $,
                ($) => abort(
                    $
                ),
                null,
                null
            )
        )
        
        const prop_types = _p_cc(
            $['types'],
            ($) => Modules(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'globals': _p.optional.set(
                        prop_globals
                    ),
                    'imports': _p.optional.set(
                        prop_imports
                    ),
                }
            )
        )
        return {
            'imports': prop_imports,
            'globals': prop_globals,
            'types': prop_types,
        }
    }
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Imports.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_schema_set_child = _p_cc(
                    $['schema set child'],
                    ($) => ({
                        'l entry': $l['sibling schemas'].get_entry(
                            $['l reference'],
                            {
                                'no_such_entry': () => abort(
                                    {
                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                        'location': $['l location'],
                                    }
                                ),
                                'no_context_lookup': () => abort(
                                    {
                                        'type': ['lookup', ['no context lookup', null]],
                                        'location': $['l location'],
                                    }
                                ),
                                'cycle_detected': () => abort(
                                    {
                                        'type': ['lookup', ['cycle detected', null]],
                                        'location': $['l location'],
                                    }
                                ),
                            }
                        ),
                        'l id': $['l reference'],
                        'l up steps': $l['sibling schemas'].get_entry_depth(
                            $['l reference'],
                            {
                                'no_such_entry': () => abort(
                                    {
                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                        'location': $['l location'],
                                    }
                                ),
                                'no_context_lookup': () => abort(
                                    {
                                        'type': ['lookup', ['no context lookup', null]],
                                        'location': $['l location'],
                                    }
                                ),
                                'cycle_detected': () => abort(
                                    {
                                        'type': ['lookup', ['cycle detected', null]],
                                        'location': $['l location'],
                                    }
                                ),
                            }
                        ),
                    })
                )
                
                const prop_schema = _p_cc(
                    $['schema'],
                    ($) => _pdev.implement_me(
                        "IM: REFERENCE"
                    )
                )
                return {
                    'schema set child': prop_schema_set_child,
                    'schema': prop_schema,
                }
            }
        )
    )
)
