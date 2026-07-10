
// import type * as d_out from "../../../../interface/data/ide.js"

// import type * as interface_ from "../../../../interface/signatures/refiners/ide/parse_tree.js"

// export const Whitespace: interface_.Whitespace = ($, $p) => p_.literal.list([
//     //FIXME
// ])

// export const Trivia: interface_.Trivia = ($, $p) => p_.literal.nested_ list([
//     Whitespace($['leading whitespace'], $p),
//     p_.from.list(//         $['comments'],
//     ).flatten(
//         ($) => p_.literal.nested_ list([
//             //FIXME
//             // p_.from.state($['type']).decide(
//($) => {
//             //     switch ($[0]) {
//             //         case 'line': return p_.option($, ($) => p_.literal.list([]))
//             //         case 'block': return p_.option($, ($) => p_.literal.list([]))
//             //         default: return p_.exhaustive($[0])        
//             //     }
//             // }),
//             // p_.literal.list([$['content']]),
//             // p_.literal.list([$['begin']]),
//             // p_.literal.list([$['end']]),
//             Whitespace($['trailing whitespace'], $p),
//         ])
//     ),

// ])

// export const Structural_Token: interface_.Structural_Token = ($, $p) => Trivia($['trailing trivia'], $p)

// export const String: interface_.Text = ($, $p) => p_.literal.nested_  list([
//     Trivia($['trailing trivia'], $p),
//     //FIX right type
// ])

// export const ID_Value_Pairs: interface_.ID_Value_Pairs = ($, $p) => p_.from.list(//     $,
// ).flatten(
//     ($) => p_.literal.nested_ list([
//         String($.id, $p),
//         $.assignment.__ decide(
//             ($) => p_.literal.nested_ list([
//                 Structural_Token($[':'], $p),
//                 Value($.value, $p),
//             ]),
//             () => p_.literal.nested_ list([])
//         ),
//     ])
// )


// export const Items: interface_.Items = ($, $p) => p_.from.list(//     $,
// ).flatten(
//     ($) => Value($.value, $p)
// )

// export const Value: interface_.Value = ($, $p) => p_.from.state($.type).decide(
//($) => {
//     switch ($[0]) {
//         case 'concrete': return p_.option($, ($) => p_.from.state($).decide(
//($) => {
//             switch ($[0]) {
//                 case 'dictionary': return p_.option($, ($) => p_.literal.nested_ list([
//                     Structural_Token($['{'], $p),
//                     ID_Value_Pairs($['entries'], $p),
//                     Structural_Token($['}'], $p),
//                 ]))
//                 case 'group': return p_.option($, ($) => p_.from.state($).decide(
//($) => {
//                     switch ($[0]) {
//                         case 'concise': return p_.option($, ($) => p_.literal.nested_ list([
//                             Structural_Token($['<'], $p),
//                             Items($['items'], $p),
//                             Structural_Token($['>'], $p),
//                         ]))
//                         case 'verbose': return p_.option($, ($) => p_.literal.nested_ list([
//                             Structural_Token($['('], $p),
//                             ID_Value_Pairs($['entries'], $p),
//                             Structural_Token($[')'], $p),
//                         ]))
//                         default: return p_.exhaustive($[0])
//                     }
//                 }))
//                 case 'list': return p_.option($, ($) => p_.literal.nested_ list([
//                     Structural_Token($['['], $p),
//                     Items($.items, $p),
//                     Structural_Token($[']'], $p),
//                 ]))
//                 case 'nothing': return p_.option($, ($) => Structural_Token($['~'], $p))
//                 case 'optional': return p_.option($, ($) => p_.from.state($).decide(
//($) => {
//                     switch ($[0]) {
//                         case 'set': return p_.option($, ($) => p_.literal.nested_ list([
//                             Structural_Token($['*'], $p),
//                             Value($['value'], $p),
//                         ]))
//                         default: return p_.exhaustive($[0])
//                     }
//                 }))
//                 case 'state': return p_.option($, ($) => p_.literal.nested_ list<d_out.Text_Edits.L>([
//                     Structural_Token($['|'], $p),
//                     p_.from.state($.status).decide(
//($) => {
//                         switch ($[0]) {
//                             case 'missing': return p_.option($, ($) => Structural_Token($['#'], $p))
//                             case 'set': return p_.option($, ($) => p_.literal.nested_ list([
//                                 String($['option'], $p),
//                                 Value($['value'], $p),
//                             ]))
//                             default: return p_.exhaustive($[0])
//                         }
//                     })
//                 ]))
//                 case 'text': return p_.option($, ($) => p_.literal.list([]))

//                 default: return p_.exhaustive($[0])
//             }
//         }))
//         case 'include': return p_.option($, ($) => p_.literal.nested_ list([
//             Structural_Token($['@'], $p),
//             String($['path'], $p),
//         ]))
//         case 'missing': return p_.option($, ($) => Structural_Token($['#'], $p))
//         default: return p_.exhaustive($[0])
//     }
// })

// export const Document: interface_.Document = ($, $p) => p_.literal.nested_ list([

//     $.header.__ decide(
//         ($) => p_.literal.nested_ list([
//             Structural_Token($['!'], $p),
//             Value($.value, $p)
//         ]),
//         () => p_.literal.nested_ list([])
//     ),
//     Value($.content, $p),
// ])