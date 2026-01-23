
// import * as _p from "pareto-core/dist/transformer"

// import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/migrate_boilerplate"

// import * as t_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"
// export const Schemas: t_signatures.Schemas = ($) => $.__d_map(($) => Schema_Tree(
//     $
// ))
// export const Text_Type: t_signatures.Text_Type = ($) => ({
//     'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Text_Type.type_ => {
//         switch ($[0]) {
//             case 'multi line': return _p.ss($, ($) => ['multi line', null])
//             case 'single line': return _p.ss($, ($) => ['single line', null])
//             default: return _p.au($[0])
//         }
//     })),
// })
// export const Globals: t_signatures.Globals = ($) => ({
//     'text types': _p.deprecated_cc($['text types'], ($) => $.__d_map(($) => Text_Type(
//         $
//     ))),
// })
// export const Type: t_signatures.Type = ($) => ({
//     'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//         $
//     )),
// })
// export const Types: t_signatures.Types = ($) => $.__d_map(($) => Type(
//     $
// ))
// export const Schema: t_signatures.Schema = ($) => ({
//     'imports': _p.deprecated_cc($['imports'], ($) => Imports(
//         $
//     )),
//     'globals': _p.deprecated_cc($['globals'], ($) => Globals(
//         $
//     )),
//     'types': _p.deprecated_cc($['types'], ($) => Types(
//         $
//     )),
// })
// export const Schema_Tree: t_signatures.Schema_Tree = ($) => _p.deprecated_cc($, ($): t_out.Schema_Tree => {
//     switch ($[0]) {
//         case 'set': return _p.ss($, ($) => ['set', Schemas(
//             $
//         )])
//         case 'schema': return _p.ss($, ($) => ['schema', Schema(
//             $
//         )])
//         default: return _p.au($[0])
//     }
// })
// export const Imports: t_signatures.Imports = ($) => $.__d_map(($) => ({
//     'schema set child': _p.deprecated_cc($['schema set child'], ($) => $['key']),
//     'schema': _p.deprecated_cc($['schema'], ($) => null),
// }))
// export const Dictionary: t_signatures.Dictionary = ($) => ({
//     'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//         $
//     )),
//     'ordered': _p.deprecated_cc($['ordered'], ($) => $),
// })
// export const Group: t_signatures.Group = ($) => $.__d_map(($) => Type_Node(
//     $
// ))
// export const Type_Node: t_signatures.Type_Node = ($) => _p.deprecated_cc($, ($): t_out.Type_Node => {
//     switch ($[0]) {
//         case 'component': return _p.ss($, ($) => ['component', _p.deprecated_cc($, ($): t_out.Type_Node.component => {
//             switch ($[0]) {
//                 case 'external': return _p.ss($, ($) => ['external', ({
//                     'import': _p.deprecated_cc($['import'], ($) => $['key']),
//                     'type': _p.deprecated_cc($['type'], ($) => $['key']),
//                 })])
//                 case 'internal': return _p.ss($, ($) => ['internal', $['key']])
//                 case 'internal cyclic': return _p.ss($, ($) => ['internal cyclic', $['key']])
//                 default: return _p.au($[0])
//             }
//         })])
//         case 'dictionary': return _p.ss($, ($) => ['dictionary', Dictionary(
//             $
//         )])
//         case 'group': return _p.ss($, ($) => ['group', Group(
//             $
//         )])
//         case 'list': return _p.ss($, ($) => ['list', ({
//             'node': _p.deprecated_cc($['node'], ($) => Type_Node(
//                 $
//             )),
//         })])
//         case 'nothing': return _p.ss($, ($) => ['nothing', null])
//         case 'optional': return _p.ss($, ($) => ['optional', Type_Node(
//             $
//         )])
//         case 'state group': return _p.ss($, ($) => ['state group', $.__d_map(($) => Type_Node(
//             $
//         ))])
//         case 'text': return _p.ss($, ($) => ['text', _p.deprecated_cc($, ($): t_out.Type_Node.text => {
//             switch ($[0]) {
//                 case 'global': return _p.ss($, ($) => ['global', $['key']])
//                 case 'local': return _p.ss($, ($) => ['local', Text_Type(
//                     $
//                 )])
//                 default: return _p.au($[0])
//             }
//         })])
//         default: return _p.au($[0])
//     }
// })
