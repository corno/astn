

// import type * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
// import type * as d_out from "astn-core/interface/generated/liana/schemas/parse_tree/data"


// export type Error = 
// | ['no such include', null]

// export type Parameters = {
//     'included files': p_di.Dictionary<d_out.Value>
// }

// export const Document: p_i.Refiner_With_Parameter<
// d_in.Document, Error, d_out.Document, Parameters
// > = ($, abort, $p) => ({
//     'header': p_.from.optional($.header).map(
//($) => ({
//         '!': $['!'],
//         'value': Value($.value, abort, $p),
//     })),
//     'content': Value($.content, abort, $p),
// })

// export const Value: p_i.Refiner_With_Parameter<
// d_in.Value, Error, d_out.Value, Parameters
// > = ($, abort, $p) => p_.decide.state($.type, ($): d_out.Value => {
//     switch ($[0]) {
//         case 'concrete': return p_.option($, ($) => p_.from.state($).decide(
//($):d_out.Value => {
//             switch ($[0]) {
//                 case 'dictionary': return p_.option($, ($) => ID_Value_Pairs($.entries, abort, $p))
//                 case 'group': return p_.option($, ($) => p_.from.state($).decide(
//($) => {
//                     switch ($[0]) {
//                         case 'concise': return p_.option($, ($) => Items($.items, abort, $p))
//                         case 'verbose': return p_.option($, ($) => ID_Value_Pairs($.entries, abort, $p))
//                         default: return p_.exhaustive($[0])
//                     }
//                 }))
//                 case 'list': return p_.option($, ($) => Items($.items, abort, $p))
//                 case 'nothing': return p_.option($, ($) => ))
//                 case 'optional': return p_.option($, ($) => p_.from.state($).decide(
//($) => {
//                     switch ($[0]) {
//                         case 'set': return p_.option($, ($) => Value($.value, abort, $p))
//                         case 'not set': return p_.option($, ($) => p_.literal.list([]))
//                         default: return p_.exhaustive($[0])
//                     }
//                 }))
//                 case 'state': return p_.option($, ($) => p_.from.state($.status).decide(
//($) => {
//                     switch ($[0]) {
//                         case 'missing': return p_.option($, ($) => p_.literal.list([]))
//                         case 'set':return p_.option($, ($) => Value($.value, abort, $p))
//                         default: return p_.exhaustive($[0])
//                     }
//                 }))
//                 case 'text': return p_.option($, ($) => p_.literal.list([]))
//                 default: return p_.exhaustive($[0])
//             }
//         }))
//         case 'include': return p_.option($, ($) => p_.literal.list([
//             $,
//         ]))
//         case 'missing': return p_.option($, ($) => p_.literal.list([]))
//         default: return p_.exhaustive($[0])
//     }
// })

// export const Items: p_i.Refiner_With_Parameter<
// d_in.Items, Error, d_out.Items, Parameters
// > = ($) => p_.from.list($).flatten(
// ($) => Value($.value))

// export const ID_Value_Pairs: p_i.Refiner_With_Parameter<
// d_in.ID_Value_Pairs, Error, d_out.ID_Value_Pairs, Parameters
// > = ($) => p_.from.list($).flatten(
// ($ => $.assignment.__ decide(
//     ($) => $.value.__ decide(
//         ($) => Value($),
//         () => p_.literal.list([])
//     ),
//     () => p_.literal.list([])
// )))
