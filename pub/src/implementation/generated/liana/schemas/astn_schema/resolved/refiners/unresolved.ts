
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import * as _p_sl from 'pareto-core/dist/select_lookup'

import _p_unreachable_code_path from 'pareto-core/dist/_p_unreachable_code_path'
import _p_variables from 'pareto-core/dist/_p_variables'


import * as t_out from "../../../../../../../interface/generated/liana/schemas/astn_schema/data/resolved"

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/astn_schema/resolve"

export const Modules: t_signatures.Modules = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
    $['l dictionary'],
).resolve(
    ($, id, $a, $c): t_out.Modules.D => _p_change_context(
        $['l entry'],
        ($) => _p.group.literal.resolve(
            () => {
                
                const prop_root_value = _p_change_context(
                    $['root value'],
                    ($) => Value(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'noncircular sibling modules': $a,
                            'possibly circular dependent sibling modules': $c,
                        },
                        {
                            'globals': $p['globals'],
                            'imports': $p['imports'],
                        },
                    ),
                )
                return {
                    'root value': prop_root_value,
                }
            },
        ),
    ),
)

export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {
        
        const prop_text_types = _p_change_context(
            $['text types'],
            ($) => _p.dictionary.from.dictionary(
                $['l dictionary'],
            ).resolve(
                ($, id, $a, $c): t_out.Globals.text_types.D => _p_change_context(
                    $['l entry'],
                    ($) => Text_Type(
                        $,
                        ($) => abort(
                            $,
                        ),
                        null,
                        null,
                    ),
                ),
            ),
        )
        return {
            'text types': prop_text_types,
        }
    },
)

export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {
        
        const prop_type = _p_change_context(
            $['type'],
            ($) => _p_variables(
                () => {
                    
                    const var_location = $['l location']
                    return _p.decide.state(
                        $['l state'],
                        ($): t_out.Text_Type.type_ => {
                            switch ($[0]) {
                                case 'multi line':
                                    return _p.ss(
                                        $,
                                        ($) => ['multi line', null],
                                    )
                                case 'single line':
                                    return _p.ss(
                                        $,
                                        ($) => ['single line', null],
                                    )
                                default:
                                    return _p.au(
                                        $[0],
                                    )
                            }
                        },
                    )
                },
            ),
        )
        return {
            'type': prop_type,
        }
    },
)

export const Value: t_signatures.Value = ($, abort, $l, $p) => _p_variables(
    () => {
        
        const var_location = $['l location']
        return _p.decide.state(
            $['l state'],
            ($): t_out.Value => {
                switch ($[0]) {
                    case 'component':
                        return _p.ss(
                            $,
                            ($) => ['component', _p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return _p.decide.state(
                                        $['l state'],
                                        ($): t_out.Value.component => {
                                            switch ($[0]) {
                                                case 'external':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['external', _p_variables(
                                                            () => {
                                                                
                                                                const var_constraint_import = _p.decide.optional(
                                                                    $p['imports'],
                                                                    ($) => $,
                                                                    () => abort(
                                                                        {
                                                                            'type': ['constraint', ['optional value is not set', null]],
                                                                            'location': var_location,
                                                                        },
                                                                    ),
                                                                )
                                                                return _p.group.literal.resolve(
                                                                    () => {
                                                                        
                                                                        const prop_import = _p_change_context(
                                                                            $['import'],
                                                                            ($) => ({
                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                    var_constraint_import,
                                                                                ).get_entry(
                                                                                    $['l reference'],
                                                                                    {
                                                                                        no_such_entry: () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                'location': $['l location'],
                                                                                            },
                                                                                        ),
                                                                                        no_context_lookup: () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                'location': $['l location'],
                                                                                            },
                                                                                        ),
                                                                                        cycle_detected: () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                'location': $['l location'],
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                'l id': $['l reference'],
                                                                            }),
                                                                        )
                                                                        
                                                                        const prop_type = _p_change_context(
                                                                            $['type'],
                                                                            ($) => ({
                                                                                'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                                    prop_import['l entry']['schema']['types'],
                                                                                ).get_entry(
                                                                                    $['l reference'],
                                                                                    {
                                                                                        no_such_entry: () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                                'location': $['l location'],
                                                                                            },
                                                                                        ),
                                                                                        no_context_lookup: () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['no context lookup', null]],
                                                                                                'location': $['l location'],
                                                                                            },
                                                                                        ),
                                                                                        cycle_detected: () => abort(
                                                                                            {
                                                                                                'type': ['lookup', ['cycle detected', null]],
                                                                                                'location': $['l location'],
                                                                                            },
                                                                                        ),
                                                                                    },
                                                                                ),
                                                                                'l id': $['l reference'],
                                                                            }),
                                                                        )
                                                                        return {
                                                                            'import': prop_import,
                                                                            'type': prop_type,
                                                                        }
                                                                    },
                                                                )
                                                            },
                                                        )],
                                                    )
                                                case 'internal acyclic':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal acyclic', {
                                                            'l entry': $l['noncircular sibling modules'].get_entry(
                                                                $['l reference'],
                                                                {
                                                                    no_such_entry: () => abort(
                                                                        {
                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                            'location': $['l location'],
                                                                        },
                                                                    ),
                                                                    no_context_lookup: () => abort(
                                                                        {
                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                            'location': $['l location'],
                                                                        },
                                                                    ),
                                                                    cycle_detected: () => abort(
                                                                        {
                                                                            'type': ['lookup', ['cycle detected', null]],
                                                                            'location': $['l location'],
                                                                        },
                                                                    ),
                                                                },
                                                            ),
                                                            'l id': $['l reference'],
                                                        }],
                                                    )
                                                case 'internal':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['internal', {
                                                            'l entry': $l['possibly circular dependent sibling modules'].get_entry(
                                                                $['l reference'],
                                                                {
                                                                    no_such_entry: () => abort(
                                                                        {
                                                                            'type': ['lookup', ['no such entry', $['l reference']]],
                                                                            'location': $['l location'],
                                                                        },
                                                                    ),
                                                                    no_context_lookup: () => abort(
                                                                        {
                                                                            'type': ['lookup', ['no context lookup', null]],
                                                                            'location': $['l location'],
                                                                        },
                                                                    ),
                                                                    accessing_cyclic_sibling_before_it_is_resolved: () => abort(
                                                                        _p_unreachable_code_path(
                                                                            "the generated resolver should take care of accessing before resolved",
                                                                        ),
                                                                    ),
                                                                },
                                                            ),
                                                            'l id': $['l reference'],
                                                        }],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    case 'dictionary':
                        return _p.ss(
                            $,
                            ($) => ['dictionary', _p.group.literal.resolve(
                                () => {
                                    
                                    const prop_value = _p_change_context(
                                        $['value'],
                                        ($) => Value(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            {
                                                'noncircular sibling modules': $l['noncircular sibling modules'],
                                                'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                                            },
                                            {
                                                'globals': $p['globals'],
                                                'imports': $p['imports'],
                                            },
                                        ),
                                    )
                                    
                                    const prop_ordered = _p_change_context(
                                        $['ordered'],
                                        ($) => $,
                                    )
                                    return {
                                        'value': prop_value,
                                        'ordered': prop_ordered,
                                    }
                                },
                            )],
                        )
                    case 'group':
                        return _p.ss(
                            $,
                            ($) => ['group', _p.dictionary.from.dictionary(
                                $['l dictionary'],
                            ).resolve(
                                ($, id, $a, $c): t_out.Value.group.D => _p_change_context(
                                    $['l entry'],
                                    ($) => Value(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'noncircular sibling modules': $l['noncircular sibling modules'],
                                            'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
                                        },
                                        {
                                            'globals': $p['globals'],
                                            'imports': $p['imports'],
                                        },
                                    ),
                                ),
                            )],
                        )
                    case 'list':
                        return _p.ss(
                            $,
                            ($) => ['list', _p.group.literal.resolve(
                                () => {
                                    
                                    const prop_value = _p_change_context(
                                        $['value'],
                                        ($) => Value(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                            $l,
                                            $p,
                                        ),
                                    )
                                    return {
                                        'value': prop_value,
                                    }
                                },
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
                            ($) => ['optional', Value(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                $l,
                                $p,
                            )],
                        )
                    case 'state':
                        return _p.ss(
                            $,
                            ($) => ['state', _p.dictionary.from.dictionary(
                                $['l dictionary'],
                            ).resolve(
                                ($, id, $a, $c): t_out.Value.state.D => _p_change_context(
                                    $['l entry'],
                                    ($) => Value(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        $l,
                                        $p,
                                    ),
                                ),
                            )],
                        )
                    case 'text':
                        return _p.ss(
                            $,
                            ($) => ['text', _p_variables(
                                () => {
                                    
                                    const var_location = $['l location']
                                    return _p.decide.state(
                                        $['l state'],
                                        ($): t_out.Value.text => {
                                            switch ($[0]) {
                                                case 'global':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['global', _p_variables(
                                                            () => {
                                                                
                                                                const var_constraint_globals = _p.decide.optional(
                                                                    $p['globals'],
                                                                    ($) => $,
                                                                    () => abort(
                                                                        {
                                                                            'type': ['constraint', ['optional value is not set', null]],
                                                                            'location': var_location,
                                                                        },
                                                                    ),
                                                                )
                                                                return {
                                                                    'l entry': _p_sl.acyclic.from_resolved_dictionary(
                                                                        var_constraint_globals['text types'],
                                                                    ).get_entry(
                                                                        $['l reference'],
                                                                        {
                                                                            no_such_entry: () => abort(
                                                                                {
                                                                                    'type': ['lookup', ['no such entry', $['l reference']]],
                                                                                    'location': $['l location'],
                                                                                },
                                                                            ),
                                                                            no_context_lookup: () => abort(
                                                                                {
                                                                                    'type': ['lookup', ['no context lookup', null]],
                                                                                    'location': $['l location'],
                                                                                },
                                                                            ),
                                                                            cycle_detected: () => abort(
                                                                                {
                                                                                    'type': ['lookup', ['cycle detected', null]],
                                                                                    'location': $['l location'],
                                                                                },
                                                                            ),
                                                                        },
                                                                    ),
                                                                    'l id': $['l reference'],
                                                                }
                                                            },
                                                        )],
                                                    )
                                                case 'local':
                                                    return _p.ss(
                                                        $,
                                                        ($) => ['local', Text_Type(
                                                            $,
                                                            ($) => abort(
                                                                $,
                                                            ),
                                                            null,
                                                            null,
                                                        )],
                                                    )
                                                default:
                                                    return _p.au(
                                                        $[0],
                                                    )
                                            }
                                        },
                                    )
                                },
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        )
    },
)

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
    $['l dictionary'],
).resolve(
    ($, id, $a, $c): t_out.Schemas.D => _p_change_context(
        $['l entry'],
        ($) => Schema_Tree(
            $,
            ($) => abort(
                $,
            ),
            {
                'sibling schemas': _p_sl.stack.push(
                    $l['sibling schemas'],
                    $a,
                ),
            },
            null,
        ),
    ),
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p_variables(
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
                                    $,
                                ),
                                {
                                    'sibling schemas': $l['sibling schemas'],
                                },
                                null,
                            )],
                        )
                    case 'set':
                        return _p.ss(
                            $,
                            ($) => ['set', Schemas(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'sibling schemas': $l['sibling schemas'],
                                },
                                null,
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        )
    },
)

export const Schema: t_signatures.Schema = ($, abort, $l, $p) => _p.group.literal.resolve(
    () => {
        
        const prop_imports = _p_change_context(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'sibling schemas': $l['sibling schemas'],
                },
                null,
            ),
        )
        
        const prop_globals = _p_change_context(
            $['globals'],
            ($) => Globals(
                $,
                ($) => abort(
                    $,
                ),
                null,
                null,
            ),
        )
        
        const prop_types = _p_change_context(
            $['types'],
            ($) => Modules(
                $,
                ($) => abort(
                    $,
                ),
                null,
                {
                    'globals': _p.optional.literal.set(
                        prop_globals,
                    ),
                    'imports': _p.optional.literal.set(
                        prop_imports,
                    ),
                },
            ),
        )
        return {
            'imports': prop_imports,
            'globals': prop_globals,
            'types': prop_types,
        }
    },
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p.dictionary.from.dictionary(
    $['l dictionary'],
).resolve(
    ($, id, $a, $c): t_out.Imports.D => _p_change_context(
        $['l entry'],
        ($) => _p.group.literal.resolve(
            () => {
                const loc = $['schema set child']['l location']
                
                const prop_schema_set_child = _p_change_context(
                    $['schema set child'],
                    ($) => ({
                        'l entry': $l['sibling schemas'].get_entry(
                            $['l reference'],
                            {
                                no_such_entry: () => abort(
                                    {
                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                        'location': $['l location'],
                                    },
                                ),
                                no_context_lookup: () => abort(
                                    {
                                        'type': ['lookup', ['no context lookup', null]],
                                        'location': $['l location'],
                                    },
                                ),
                                cycle_detected: () => abort(
                                    {
                                        'type': ['lookup', ['cycle detected', null]],
                                        'location': $['l location'],
                                    },
                                ),
                            },
                        ),
                        'l id': $['l reference'],
                        'l up steps': $l['sibling schemas'].get_entry_depth(
                            $['l reference'],
                            {
                                no_such_entry: () => abort(
                                    {
                                        'type': ['lookup', ['no such entry', $['l reference']]],
                                        'location': $['l location'],
                                    },
                                ),
                                no_context_lookup: () => abort(
                                    {
                                        'type': ['lookup', ['no context lookup', null]],
                                        'location': $['l location'],
                                    },
                                ),
                                cycle_detected: () => abort(
                                    {
                                        'type': ['lookup', ['cycle detected', null]],
                                        'location': $['l location'],
                                    },
                                ),
                            },
                        ),
                    }),
                )
                
                const prop_schema = _p_change_context(
                    $['schema'],
                    ($) => _p.decide.state(prop_schema_set_child['l entry'], ($): t_out.Schema => {
                        switch ($[0]) {
                            case 'schema': return _p.ss($, ($) => $)
                            case 'set': return _p.ss($, ($) => abort({
                                'type': ['constraint', ['state', {
                                    'expected': 'schema',
                                    'found': 'set',
                                }]],
                                'location': loc
                            }))
                            default: return _p.au($[0])
                        }
                    }),
                )
                return {
                    'schema set child': prop_schema_set_child,
                    'schema': prop_schema,
                }
            },
        ),
    ),
)
