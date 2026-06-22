
// import * as p_ from 'pareto-core/dist/implementation/refiner'

// import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

// import * as _p_sl from 'pareto-core/dist/implementation/refiner/specials/lookup'

// import _p_unreachable_code_path from 'pareto-core/dist/implementation/transformer/specials/unreachable_code_path'

// import p_variables from 'pareto-core/dist/implementation/refiner/specials/variables'

// import * as t_out from "../../../../../../../interface/generated/liana/schemas/astn_schema/data/resolved"

// import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/astn_schema/signatures/resolved/refiners/unresolved"

// export const Modules: t_signatures.Modules = ($, abort, $l, $p) => p_.from.dictionary(//     $['l dictionary'],
// ).resolve(
//     ($, id, $a, $c): t_out.Modules.D => p_change_context(
//         $['l entry'],
//         ($) => p_.literal.group_resolve(
//             () => {
                
//                 const prop_root_value = p_change_context(
//                     $['root value'],
//                     ($) => Value(
//                         $,
//                         ($) => abort(
//                             $,
//                         ),
//                         {
//                             'noncircular sibling modules': $a,
//                             'possibly circular dependent sibling modules': $c,
//                         },
//                         {
//                             'globals': $p['globals'],
//                             'imports': $p['imports'],
//                         },
//                     ),
//                 )
//                 return {
//                     'root value': prop_root_value,
//                 }
//             },
//         ),
//     ),
// )

// export const Globals: t_signatures.Globals = ($, abort, $l, $p) => p_.literal.group_resolve(
//     () => {
        
//         const prop_text_types = p_change_context(
//             $['text types'],
//             ($) => p_.from.dictionary(//                 $['l dictionary'],
//             ).resolve(
//                 ($, id, $a, $c): t_out.Globals.text_types.D => p_change_context(
//                     $['l entry'],
//                     ($) => Text_Type(
//                         $,
//                         ($) => abort(
//                             $,
//                         ),
//                         null,
//                         null,
//                     ),
//                 ),
//             ),
//         )
//         return {
//             'text types': prop_text_types,
//         }
//     },
// )

// export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => p_.literal.group_resolve(
//     () => {
        
//         const prop_type = p_change_context(
//             $['type'],
//             ($) => p_variables(
//                 () => {
                    
//                     const var_location = $['l location']
//                     return p_decide_state(
//                         $['l state'],
//                         ($): t_out.Text_Type.type_ => {
//                             switch ($[0]) {
//                                 case 'multi line':
//                                     return p_.ss(
//                                         $,
//                                         ($) => ['multi line', null],
//                                     )
//                                 case 'single line':
//                                     return p_.ss(
//                                         $,
//                                         ($) => ['single line', null],
//                                     )
//                                 default:
//                                     return p_.au(
//                                         $[0],
//                                     )
//                             }
//                         },
//                     )
//                 },
//             ),
//         )
//         return {
//             'type': prop_type,
//         }
//     },
// )

// export const Value: t_signatures.Value = ($, abort, $l, $p) => p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return p_decide_state(
//             $['l state'],
//             ($): t_out.Value => {
//                 switch ($[0]) {
//                     case 'component':
//                         return p_.ss(
//                             $,
//                             ($) => ['component', p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return p_decide_state(
//                                         $['l state'],
//                                         ($): t_out.Value.component => {
//                                             switch ($[0]) {
//                                                 case 'external':
//                                                     return p_.ss(
//                                                         $,
//                                                         ($) => ['external', p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_import = p_decide_optional(
//                                                                     $p['imports'],
//                                                                     ($) => $,
//                                                                     () => abort(
//                                                                         {
//                                                                             'type': ['constraint', ['optional value is not set', null]],
//                                                                             'location': var_location,
//                                                                         },
//                                                                     ),
//                                                                 )
//                                                                 return p_.literal.group_resolve(
//                                                                     () => {
                                                                        
//                                                                         const prop_import = p_change_context(
//                                                                             $['import'],
//                                                                             ($) => ({
//                                                                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                     var_constraint_import,
//                                                                                 ).get_ entry(
//                                                                                     $['l reference'],
//                                                                                     {
//                                                                                         no_such_entry: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         no_context_lookup: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         cycle_detected: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                     },
//                                                                                 ),
//                                                                                 'l id': $['l reference'],
//                                                                             }),
//                                                                         )
                                                                        
//                                                                         const prop_type = p_change_context(
//                                                                             $['type'],
//                                                                             ($) => ({
//                                                                                 'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                                     prop_import['l entry']['schema']['types'],
//                                                                                 ).get_ entry(
//                                                                                     $['l reference'],
//                                                                                     {
//                                                                                         no_such_entry: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         no_context_lookup: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['no context lookup', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                         cycle_detected: () => abort(
//                                                                                             {
//                                                                                                 'type': ['lookup', ['cycle detected', null]],
//                                                                                                 'location': $['l location'],
//                                                                                             },
//                                                                                         ),
//                                                                                     },
//                                                                                 ),
//                                                                                 'l id': $['l reference'],
//                                                                             }),
//                                                                         )
//                                                                         return {
//                                                                             'import': prop_import,
//                                                                             'type': prop_type,
//                                                                         }
//                                                                     },
//                                                                 )
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'internal acyclic':
//                                                     return p_.ss(
//                                                         $,
//                                                         ($) => ['internal acyclic', {
//                                                             'l entry': $l['noncircular sibling modules'].get_ entry(
//                                                                 $['l reference'],
//                                                                 {
//                                                                     no_such_entry: () => abort(
//                                                                         {
//                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                             'location': $['l location'],
//                                                                         },
//                                                                     ),
//                                                                     no_context_lookup: () => abort(
//                                                                         {
//                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                             'location': $['l location'],
//                                                                         },
//                                                                     ),
//                                                                     cycle_detected: () => abort(
//                                                                         {
//                                                                             'type': ['lookup', ['cycle detected', null]],
//                                                                             'location': $['l location'],
//                                                                         },
//                                                                     ),
//                                                                 },
//                                                             ),
//                                                             'l id': $['l reference'],
//                                                         }],
//                                                     )
//                                                 case 'internal':
//                                                     return p_.ss(
//                                                         $,
//                                                         ($) => ['internal', {
//                                                             'l entry': $l['possibly circular dependent sibling modules'].get_ entry(
//                                                                 $['l reference'],
//                                                                 {
//                                                                     no_such_entry: () => abort(
//                                                                         {
//                                                                             'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                             'location': $['l location'],
//                                                                         },
//                                                                     ),
//                                                                     no_context_lookup: () => abort(
//                                                                         {
//                                                                             'type': ['lookup', ['no context lookup', null]],
//                                                                             'location': $['l location'],
//                                                                         },
//                                                                     ),
//                                                                     accessing_cyclic_sibling_before_it_is_resolved: () => abort(
//                                                                         _p_unreachable_code_path(
//                                                                             "the generated resolver should take care of accessing before resolved",
//                                                                         ),
//                                                                     ),
//                                                                 },
//                                                             ),
//                                                             'l id': $['l reference'],
//                                                         }],
//                                                     )
//                                                 default:
//                                                     return p_.au(
//                                                         $[0],
//                                                     )
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     case 'dictionary':
//                         return p_.ss(
//                             $,
//                             ($) => ['dictionary', p_.literal.group_resolve(
//                                 () => {
                                    
//                                     const prop_value = p_change_context(
//                                         $['value'],
//                                         ($) => Value(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             {
//                                                 'noncircular sibling modules': $l['noncircular sibling modules'],
//                                                 'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                                             },
//                                             {
//                                                 'globals': $p['globals'],
//                                                 'imports': $p['imports'],
//                                             },
//                                         ),
//                                     )
                                    
//                                     const prop_ordered = p_change_context(
//                                         $['ordered'],
//                                         ($) => $,
//                                     )
//                                     return {
//                                         'value': prop_value,
//                                         'ordered': prop_ordered,
//                                     }
//                                 },
//                             )],
//                         )
//                     case 'group':
//                         return p_.ss(
//                             $,
//                             ($) => ['group', p_.from.dictionary(//                                 $['l dictionary'],
//                             ).resolve(
//                                 ($, id, $a, $c): t_out.Value.group.D => p_change_context(
//                                     $['l entry'],
//                                     ($) => Value(
//                                         $,
//                                         ($) => abort(
//                                             $,
//                                         ),
//                                         {
//                                             'noncircular sibling modules': $l['noncircular sibling modules'],
//                                             'possibly circular dependent sibling modules': $l['possibly circular dependent sibling modules'],
//                                         },
//                                         {
//                                             'globals': $p['globals'],
//                                             'imports': $p['imports'],
//                                         },
//                                     ),
//                                 ),
//                             )],
//                         )
//                     case 'list':
//                         return p_.ss(
//                             $,
//                             ($) => ['list', p_.literal.group_resolve(
//                                 () => {
                                    
//                                     const prop_value = p_change_context(
//                                         $['value'],
//                                         ($) => Value(
//                                             $,
//                                             ($) => abort(
//                                                 $,
//                                             ),
//                                             $l,
//                                             $p,
//                                         ),
//                                     )
//                                     return {
//                                         'value': prop_value,
//                                     }
//                                 },
//                             )],
//                         )
//                     case 'nothing':
//                         return p_.ss(
//                             $,
//                             ($) => ['nothing', null],
//                         )
//                     case 'optional':
//                         return p_.ss(
//                             $,
//                             ($) => ['optional', Value(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 $l,
//                                 $p,
//                             )],
//                         )
//                     case 'state':
//                         return p_.ss(
//                             $,
//                             ($) => ['state', p_.from.dictionary(//                                 $['l dictionary'],
//                             ).resolve(
//                                 ($, id, $a, $c): t_out.Value.state.D => p_change_context(
//                                     $['l entry'],
//                                     ($) => Value(
//                                         $,
//                                         ($) => abort(
//                                             $,
//                                         ),
//                                         $l,
//                                         $p,
//                                     ),
//                                 ),
//                             )],
//                         )
//                     case 'text':
//                         return p_.ss(
//                             $,
//                             ($) => ['text', p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return p_decide_state(
//                                         $['l state'],
//                                         ($): t_out.Value.text => {
//                                             switch ($[0]) {
//                                                 case 'global':
//                                                     return p_.ss(
//                                                         $,
//                                                         ($) => ['global', p_variables(
//                                                             () => {
                                                                
//                                                                 const var_constraint_globals = p_decide_optional(
//                                                                     $p['globals'],
//                                                                     ($) => $,
//                                                                     () => abort(
//                                                                         {
//                                                                             'type': ['constraint', ['optional value is not set', null]],
//                                                                             'location': var_location,
//                                                                         },
//                                                                     ),
//                                                                 )
//                                                                 return {
//                                                                     'l entry': _p_sl.acyclic.from_resolved_dictionary(
//                                                                         var_constraint_globals['text types'],
//                                                                     ).get_ entry(
//                                                                         $['l reference'],
//                                                                         {
//                                                                             no_such_entry: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no such entry', $['l reference']]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             no_context_lookup: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['no context lookup', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                             cycle_detected: () => abort(
//                                                                                 {
//                                                                                     'type': ['lookup', ['cycle detected', null]],
//                                                                                     'location': $['l location'],
//                                                                                 },
//                                                                             ),
//                                                                         },
//                                                                     ),
//                                                                     'l id': $['l reference'],
//                                                                 }
//                                                             },
//                                                         )],
//                                                     )
//                                                 case 'local':
//                                                     return p_.ss(
//                                                         $,
//                                                         ($) => ['local', Text_Type(
//                                                             $,
//                                                             ($) => abort(
//                                                                 $,
//                                                             ),
//                                                             null,
//                                                             null,
//                                                         )],
//                                                     )
//                                                 default:
//                                                     return p_.au(
//                                                         $[0],
//                                                     )
//                                             }
//                                         },
//                                     )
//                                 },
//                             )],
//                         )
//                     default:
//                         return p_.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => p_.from.dictionary(//     $['l dictionary'],
// ).resolve(
//     ($, id, $a, $c): t_out.Schemas.D => p_change_context(
//         $['l entry'],
//         ($) => Schema_Tree(
//             $,
//             ($) => abort(
//                 $,
//             ),
//             {
//                 'sibling schemas': _p_sl.stack.push(
//                     $l['sibling schemas'],
//                     $a,
//                 ),
//             },
//             null,
//         ),
//     ),
// )

// export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => p_variables(
//     () => {
        
//         const var_location = $['l location']
//         return p_decide_state(
//             $['l state'],
//             ($): t_out.Schema_Tree => {
//                 switch ($[0]) {
//                     case 'schema':
//                         return p_.ss(
//                             $,
//                             ($) => ['schema', Schema(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'sibling schemas': $l['sibling schemas'],
//                                 },
//                                 null,
//                             )],
//                         )
//                     case 'set':
//                         return p_.ss(
//                             $,
//                             ($) => ['set', Schemas(
//                                 $,
//                                 ($) => abort(
//                                     $,
//                                 ),
//                                 {
//                                     'sibling schemas': $l['sibling schemas'],
//                                 },
//                                 null,
//                             )],
//                         )
//                     default:
//                         return p_.au(
//                             $[0],
//                         )
//                 }
//             },
//         )
//     },
// )

// export const Schema: t_signatures.Schema = ($, abort, $l, $p) => p_.literal.group_resolve(
//     () => {
        
//         const prop_imports = p_change_context(
//             $['imports'],
//             ($) => Imports(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 {
//                     'sibling schemas': $l['sibling schemas'],
//                 },
//                 null,
//             ),
//         )
        
//         const prop_globals = p_change_context(
//             $['globals'],
//             ($) => Globals(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 null,
//             ),
//         )
        
//         const prop_types = p_change_context(
//             $['types'],
//             ($) => Modules(
//                 $,
//                 ($) => abort(
//                     $,
//                 ),
//                 null,
//                 {
//                     'globals': p_.literal.set(
//                         prop_globals,
//                     ),
//                     'imports': p_.literal.set(
//                         prop_imports,
//                     ),
//                 },
//             ),
//         )
//         return {
//             'imports': prop_imports,
//             'globals': prop_globals,
//             'types': prop_types,
//         }
//     },
// )

// export const Imports: t_signatures.Imports = ($, abort, $l, $p) => p_.from.dictionary(//     $['l dictionary'],
// ).resolve(
//     ($, id, $a, $c): t_out.Imports.D => p_change_context(
//         $['l entry'],
//         ($) => p_.literal.group_resolve(
//             () => {
                
//                 const prop_schema_set_child = p_change_context(
//                     $['schema set child'],
//                     ($) => p_.literal.group_resolve(
//                         () => {
                            
//                             const prop_l_value = {
//                                 'l entry': $l['sibling schemas'].get_ entry(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                                 'l id': $['l reference'],
//                                 'l up steps': $l['sibling schemas'].get_entry_depth(
//                                     $['l reference'],
//                                     {
//                                         no_such_entry: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no such entry', $['l reference']]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         no_context_lookup: () => abort(
//                                             {
//                                                 'type': ['lookup', ['no context lookup', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                         cycle_detected: () => abort(
//                                             {
//                                                 'type': ['lookup', ['cycle detected', null]],
//                                                 'location': $['l location'],
//                                             },
//                                         ),
//                                     },
//                                 ),
//                             }
                            
//                             const prop_l_results = p_variables(
//                                 () => {
                                    
//                                     const var_location = $['l location']
//                                     return {
//                                         'schema': p_decide_state(
//                                             _pdev.implement_me(
//                                                 "IM: rvs",
//                                             ),
//                                             ($) => {
//                                                 switch ($[0]) {
//                                                     case 'schema':
//                                                         return p_.ss(
//                                                             $,
//                                                             ($) => $,
//                                                         )
//                                                     default:
//                                                         return abort(
//                                                             {
//                                                                 'type': ['constraint', ['state', {
//                                                                     'expected': "schema",
//                                                                     'found': $[0],
//                                                                 }]],
//                                                                 'location': var_location,
//                                                             },
//                                                         )
//                                                 }
//                                             },
//                                         ),
//                                     }
//                                 },
//                             )
//                             return {
//                                 'l value': prop_l_value,
//                                 'l results': prop_l_results,
//                             }
//                         },
//                     ),
//                 )
                
//                 const prop_schema = p_change_context(
//                     $['schema'],
//                     ($) => prop_schema_set_child['l results']['schema'],
//                 )
//                 return {
//                     'schema set child': prop_schema_set_child,
//                     'schema': prop_schema,
//                 }
//             },
//         ),
//     ),
// )
