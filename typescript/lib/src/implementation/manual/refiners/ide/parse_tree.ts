// import * as pt from 'pareto-core/dist/assign'

// import * as d_out from "../../../../interface/generated/liana/schemas/ide/data"

// import * as signatures from "../../../../interface/signatures/refiners/ide/parse_tree"

// export const Whitespace: signatures.Whitespace = ($, $p) => pt.list.literal([
//     //FIXME
// ])

// export const Trivia: signatures.Trivia = ($, $p) => pt.list.nested_literal_old([
//     Whitespace($['leading whitespace'], $p),
//     pt.list.from.list(
//         $['comments'],
//     ).flatten(
//         ($) => pt.list.nested_literal_old([
//             //FIXME
//             // pt.decide.state($['type'], ($) => {
//             //     switch ($[0]) {
//             //         case 'line': return pt.ss($, ($) => pt.list.literal([]))
//             //         case 'block': return pt.ss($, ($) => pt.list.literal([]))
//             //         default: return pt.au($[0])        
//             //     }
//             // }),
//             // pt.list.literal([$['content']]),
//             // pt.list.literal([$['begin']]),
//             // pt.list.literal([$['end']]),
//             Whitespace($['trailing whitespace'], $p),
//         ])
//     ),

// ])

// export const Structural_Token: signatures.Structural_Token = ($, $p) => Trivia($['trailing trivia'], $p)

// export const String: signatures.Text = ($, $p) => pt.list.nested_literal_old([
//     Trivia($['trailing trivia'], $p),
//     //FIX right type
// ])

// export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($, $p) => pt.list.from.list(
//     $,
// ).flatten(
//     ($) => pt.list.nested_literal_old([
//         String($.id, $p),
//         $.assignment.__decide(
//             ($) => pt.list.nested_literal_old([
//                 Structural_Token($[':'], $p),
//                 Value($.value, $p),
//             ]),
//             () => pt.list.nested_literal_old([])
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
//                 case 'dictionary': return pt.ss($, ($) => pt.list.nested_literal_old([
//                     Structural_Token($['{'], $p),
//                     ID_Value_Pairs($['entries'], $p),
//                     Structural_Token($['}'], $p),
//                 ]))
//                 case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'concise': return pt.ss($, ($) => pt.list.nested_literal_old([
//                             Structural_Token($['<'], $p),
//                             Items($['items'], $p),
//                             Structural_Token($['>'], $p),
//                         ]))
//                         case 'verbose': return pt.ss($, ($) => pt.list.nested_literal_old([
//                             Structural_Token($['('], $p),
//                             ID_Value_Pairs($['entries'], $p),
//                             Structural_Token($[')'], $p),
//                         ]))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'list': return pt.ss($, ($) => pt.list.nested_literal_old([
//                     Structural_Token($['['], $p),
//                     Items($.items, $p),
//                     Structural_Token($[']'], $p),
//                 ]))
//                 case 'nothing': return pt.ss($, ($) => Structural_Token($['~'], $p))
//                 case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'set': return pt.ss($, ($) => pt.list.nested_literal_old([
//                             Structural_Token($['*'], $p),
//                             Value($['value'], $p),
//                         ]))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'state': return pt.ss($, ($) => pt.list.nested_literal_old<d_out.Text_Edits.L>([
//                     Structural_Token($['|'], $p),
//                     pt.decide.state($.status, ($) => {
//                         switch ($[0]) {
//                             case 'missing': return pt.ss($, ($) => Structural_Token($['#'], $p))
//                             case 'set': return pt.ss($, ($) => pt.list.nested_literal_old([
//                                 String($['option'], $p),
//                                 Value($['value'], $p),
//                             ]))
//                             default: return pt.au($[0])
//                         }
//                     })
//                 ]))
//                 case 'text': return pt.ss($, ($) => pt.list.literal([]))

//                 default: return pt.au($[0])
//             }
//         }))
//         case 'include': return pt.ss($, ($) => pt.list.nested_literal_old([
//             Structural_Token($['@'], $p),
//             String($['path'], $p),
//         ]))
//         case 'missing': return pt.ss($, ($) => Structural_Token($['#'], $p))
//         default: return pt.au($[0])
//     }
// })

// export const Document: signatures.Document = ($, $p) => pt.list.nested_literal_old([

//     $.header.__decide(
//         ($) => pt.list.nested_literal_old([
//             Structural_Token($['!'], $p),
//             Value($.value, $p)
//         ]),
//         () => pt.list.nested_literal_old([])
//     ),
//     Value($.content, $p),
// ])