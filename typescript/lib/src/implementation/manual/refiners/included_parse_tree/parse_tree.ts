

// import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
// import * as d_out from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"


// export type Error = 
// | ['no such include', null]

// export type Parameters = {
//     'included files': p_di.Dictionary<d_out.Value>
// }

// export const Document: p_ri.Refiner_With_Parameter<d_in.Document, Error, d_out.Document, Parameters> = ($, abort, $p) => ({
//     'header': pt.optional.from.optional($.header).map(($) => ({
//         '!': $['!'],
//         'value': Value($.value, abort, $p),
//     })),
//     'content': Value($.content, abort, $p),
// })

// export const Value: p_ri.Refiner_With_Parameter<d_in.Value, Error, d_out.Value, Parameters> = ($, abort, $p) => pt.decide.state($.type, ($): d_out.Value => {
//     switch ($[0]) {
//         case 'concrete': return pt.ss($, ($) => pt.decide.state($, ($):d_out.Value => {
//             switch ($[0]) {
//                 case 'dictionary': return pt.ss($, ($) => ID_Value_Pairs($.entries, abort, $p))
//                 case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'concise': return pt.ss($, ($) => Items($.items, abort, $p))
//                         case 'verbose': return pt.ss($, ($) => ID_Value_Pairs($.entries, abort, $p))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'list': return pt.ss($, ($) => Items($.items, abort, $p))
//                 case 'nothing': return pt.ss($, ($) => ))
//                 case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'set': return pt.ss($, ($) => Value($.value, abort, $p))
//                         case 'not set': return pt.ss($, ($) => pt.literal.list([]))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'state': return pt.ss($, ($) => pt.decide.state($.status, ($) => {
//                     switch ($[0]) {
//                         case 'missing': return pt.ss($, ($) => pt.literal.list([]))
//                         case 'set':return pt.ss($, ($) => Value($.value, abort, $p))
//                         default: return pt.au($[0])
//                     }
//                 }))
//                 case 'text': return pt.ss($, ($) => pt.literal.list([]))
//                 default: return pt.au($[0])
//             }
//         }))
//         case 'include': return pt.ss($, ($) => pt.literal.list([
//             $,
//         ]))
//         case 'missing': return pt.ss($, ($) => pt.literal.list([]))
//         default: return pt.au($[0])
//     }
// })

// export const Items: p_ri.Refiner_With_Parameter<d_in.Items, Error, d_out.Items, Parameters> = ($) => pt.list.from.list($).flatten(($) => Value($.value))

// export const ID_Value_Pairs: p_ri.Refiner_With_Parameter<d_in.ID_Value_Pairs, Error, d_out.ID_Value_Pairs, Parameters> = ($) => pt.list.from.list($).flatten(($ => $.assignment.__decide(
//     ($) => $.value.__decide(
//         ($) => Value($),
//         () => pt.literal.list([])
//     ),
//     () => pt.literal.list([])
// )))
