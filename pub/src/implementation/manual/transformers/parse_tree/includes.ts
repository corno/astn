import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'


import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "../../../../interface/to_be_generated/includes"


export const Document: _pi.Transformer<d_in.Document, d_out.Included_Files> = ($) => _p.list.nested_literal_old([
    $.header.__decide(
        ($) => Value($.value),
        () => _p.list.literal([])
    ),
    Value($.content),
])

export const Value: _pi.Transformer<d_in.Value, d_out.Included_Files> = ($) => _p.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ID_Value_Pairs($.entries))
                case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'concise': return _p.ss($, ($) => Items($.items))
                        case 'verbose': return _p.ss($, ($) => ID_Value_Pairs($.entries))
                        default: return _p.au($[0])
                    }
                }))
                case 'list': return _p.ss($, ($) => Items($.items))
                case 'nothing': return _p.ss($, ($) => _p.list.literal([]))
                case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'set': return _p.ss($, ($) => Value($.value))
                        case 'not set': return _p.ss($, ($) => _p.list.literal([]))
                        default: return _p.au($[0])
                    }
                }))
                case 'state': return _p.ss($, ($) => _p.decide.state($.status, ($) => {
                    switch ($[0]) {
                        case 'missing': return _p.ss($, ($) => _p.list.literal([]))
                        case 'set':return _p.ss($, ($) => Value($.value))
                        default: return _p.au($[0])
                    }
                }))
                case 'text': return _p.ss($, ($) => _p.list.literal([]))
                default: return _p.au($[0])
            }
        }))
        case 'include': return _p.ss($, ($) => _p.list.literal([
            $,
        ]))
        case 'missing': return _p.ss($, ($) => _p.list.literal([]))
        default: return _p.au($[0])
    }
})

export const Items: _pi.Transformer<d_in.Items, d_out.Included_Files> = ($) => _p.list.from.list($).flatten(($) => Value($.value))

export const ID_Value_Pairs: _pi.Transformer<d_in.ID_Value_Pairs, d_out.Included_Files> = ($) => _p.list.from.list($).flatten(($ => $.assignment.__decide(
    ($) => $.value.__decide(
        ($) => Value($),
        () => _p.list.literal([])
    ),
    () => _p.list.literal([])
)))
