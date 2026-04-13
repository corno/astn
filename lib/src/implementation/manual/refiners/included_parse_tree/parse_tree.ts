// import * as _pi from 'pareto-core/dist/interface'
// import * as _p from 'pareto-core/dist/assign'


// import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
// import * as d_out from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"


// export type Error = 
// | ['no such include', null]

// export type Parameters = {
//     'included files': _pi.Dictionary<d_out.Value>
// }

// export const Document: _pi.Refiner_With_Parameter<d_in.Document, Error, d_out.Document, Parameters> = ($, abort, $p) => ({
//     'header': _p.optional.from.optional($.header).map(($) => ({
//         '!': $['!'],
//         'value': Value($.value, abort, $p),
//     })),
//     'content': Value($.content, abort, $p),
// })

// export const Value: _pi.Refiner_With_Parameter<d_in.Value, Error, d_out.Value, Parameters> = ($, abort, $p) => _p.decide.state($.type, ($): d_out.Value => {
//     switch ($[0]) {
//         case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($):d_out.Value => {
//             switch ($[0]) {
//                 case 'dictionary': return _p.ss($, ($) => ID_Value_Pairs($.entries, abort, $p))
//                 case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'concise': return _p.ss($, ($) => Items($.items, abort, $p))
//                         case 'verbose': return _p.ss($, ($) => ID_Value_Pairs($.entries, abort, $p))
//                         default: return _p.au($[0])
//                     }
//                 }))
//                 case 'list': return _p.ss($, ($) => Items($.items, abort, $p))
//                 case 'nothing': return _p.ss($, ($) => ))
//                 case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
//                     switch ($[0]) {
//                         case 'set': return _p.ss($, ($) => Value($.value, abort, $p))
//                         case 'not set': return _p.ss($, ($) => _p.list.literal([]))
//                         default: return _p.au($[0])
//                     }
//                 }))
//                 case 'state': return _p.ss($, ($) => _p.decide.state($.status, ($) => {
//                     switch ($[0]) {
//                         case 'missing': return _p.ss($, ($) => _p.list.literal([]))
//                         case 'set':return _p.ss($, ($) => Value($.value, abort, $p))
//                         default: return _p.au($[0])
//                     }
//                 }))
//                 case 'text': return _p.ss($, ($) => _p.list.literal([]))
//                 default: return _p.au($[0])
//             }
//         }))
//         case 'include': return _p.ss($, ($) => _p.list.literal([
//             $,
//         ]))
//         case 'missing': return _p.ss($, ($) => _p.list.literal([]))
//         default: return _p.au($[0])
//     }
// })

// export const Items: _pi.Refiner_With_Parameter<d_in.Items, Error, d_out.Items, Parameters> = ($) => _p.list.from.list($).flatten(($) => Value($.value))

// export const ID_Value_Pairs: _pi.Refiner_With_Parameter<d_in.ID_Value_Pairs, Error, d_out.ID_Value_Pairs, Parameters> = ($) => _p.list.from.list($).flatten(($ => $.assignment.__decide(
//     ($) => $.value.__decide(
//         ($) => Value($),
//         () => _p.list.literal([])
//     ),
//     () => _p.list.literal([])
// )))
