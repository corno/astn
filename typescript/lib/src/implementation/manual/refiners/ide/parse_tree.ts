// import * as pt from 'pareto-core/dist/assign'

// import * as d_out from "../../../../interface/generated/liana/schemas/ide/data"

// import * as signatures from "../../../../interface/signatures/refiners/ide/parse_tree"

// export const Whitespace: signatures.Whitespace = ($, $p) => pt.literal.list([
//     //FIXME
// ])

// export const Trivia: signatures.Trivia = ($, $p) => pt.literal.nested_list([
//     Whitespace($['leading whitespace'], $p),
//     pt.list.from.list(
//         $['comments'],
//     ).flatten(
//         ($) => pt.literal.nested_list([
//             //FIXME
//             // pt.decide.state($['type'], ($) => {
//             //     switch ($[0]) {
//             //         case 'line': return pt.ss($, ($) => pt.literal.list([]))
//             //         case 'block': return pt.ss($, ($) => pt.literal.list([]))
//             //         default: return pt.au($[0])        
//             //     }
//             // }),
//             // pt.literal.list([$['content']]),
//             // pt.literal.list([$['begin']]),
//             // pt.literal.list([$['end']]),
//             Whitespace($['trailing whitespace'], $p),
//         ])
//     ),

// ])

// export const Structural_Token: signatures.Structural_Token = ($, $p) => Trivia($['trailing trivia'], $p)

// export const String: signatures.Text = ($, $p) => pt.literal.nested_list([
//     Trivia($['trailing trivia'], $p),
//     //FIX right type
// ])

// export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($, $p) => pt.list.from.list(
//     $,
// ).flatten(
//     ($) => pt.literal.nested_list([
//         String($.id, $p),
//         $.assignment.__decide(
//             ($) => pt.literal.nested_list([
//                 Structural_Token($[':'], $p),
//                 Value($.value, $p),
//             ]),
//             () => pt.literal.nested_list([])
//         ),
//     ])
// )


// export const Items: signatures.Items = ($, $p) => pt.list.from.list(
//     $,
// ).flatten(
//     ($) => Value($.value, $p)
// )

// export const Value: signatures.Value = ($, $p) => pt.decide.state($.type, ($) => {
//     switch ($[0]) {
//         case 'concrete': return pt.ss($, ($) => pt.decide.state($, ($) => {
//             switch ($[0]) {
//                 case 'dictionary': return pt.ss($, ($) => pt.literal.nested_list([
//                     Structural_Token($['{'], $p),
//                     ID_Value_Pairs($['entries'], $p),
//                     Structural_Token($['}'], $p),
//                 ]))
//                 case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'concise': return pt.ss($, ($) => pt.literal.nested_list([
//                             Structural_Token($['<'], $p),
//                             Items($['items'], $p),
//                             Structural_Token($['>'], $p),
//                         ]))
//                         case 'verbose': return pt.ss($, ($) => pt.literal.nested_list([
//                             Structural_Token($['('], $p),
//                             ID_Value_Pairs($['entries'], $p),
//                             Structural_Token($[')'], $p),
//                         ]))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'list': return pt.ss($, ($) => pt.literal.nested_list([
//                     Structural_Token($['['], $p),
//                     Items($.items, $p),
//                     Structural_Token($[']'], $p),
//                 ]))
//                 case 'nothing': return pt.ss($, ($) => Structural_Token($['~'], $p))
//                 case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'set': return pt.ss($, ($) => pt.literal.nested_list([
//                             Structural_Token($['*'], $p),
//                             Value($['value'], $p),
//                         ]))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'state': return pt.ss($, ($) => pt.literal.nested_list<d_out.Text_Edits.L>([
//                     Structural_Token($['|'], $p),
//                     pt.decide.state($.status, ($) => {
//                         switch ($[0]) {
//                             case 'missing': return pt.ss($, ($) => Structural_Token($['#'], $p))
//                             case 'set': return pt.ss($, ($) => pt.literal.nested_list([
//                                 String($['option'], $p),
//                                 Value($['value'], $p),
//                             ]))
//                             default: return pt.au($[0])
//                         }
//                     })
//                 ]))
//                 case 'text': return pt.ss($, ($) => pt.literal.list([]))

//                 default: return pt.au($[0])
//             }
//         }))
//         case 'include': return pt.ss($, ($) => pt.literal.nested_list([
//             Structural_Token($['@'], $p),
//             String($['path'], $p),
//         ]))
//         case 'missing': return pt.ss($, ($) => Structural_Token($['#'], $p))
//         default: return pt.au($[0])
//     }
// })

// export const Document: signatures.Document = ($, $p) => pt.literal.nested_list([

//     $.header.__decide(
//         ($) => pt.literal.nested_list([
//             Structural_Token($['!'], $p),
//             Value($.value, $p)
//         ]),
//         () => pt.literal.nested_list([])
//     ),
//     Value($.content, $p),
// ])