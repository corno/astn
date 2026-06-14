import * as pi from 'pareto-core/dist/interface'
import * as pt from 'pareto-core/dist/assign'


import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "../../../../interface/to_be_generated/includes"


export const Document: pi.Transformer<d_in.Document, d_out.Included_Files> = ($) => pt.list.nested_literal_old([
    $.header.__decide(
        ($) => Value($.value),
        () => pt.list.literal([])
    ),
    Value($.content),
])

export const Value: pi.Transformer<d_in.Value, d_out.Included_Files> = ($) => pt.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'concrete': return pt.ss($, ($) => pt.decide.state($, ($) => {
            switch ($[0]) {
                case 'dictionary': return pt.ss($, ($) => ID_Value_Pairs($.entries))
                case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'concise': return pt.ss($, ($) => Items($.properties))
                        case 'verbose': return pt.ss($, ($) => ID_Value_Pairs($.properties))
                        default: return pt.au($[0])
                    }
                }))
                case 'list': return pt.ss($, ($) => Items($.items))
                case 'nothing': return pt.ss($, ($) => pt.list.literal([]))
                case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'set': return pt.ss($, ($) => Value($.value))
                        case 'not set': return pt.ss($, ($) => pt.list.literal([]))
                        default: return pt.au($[0])
                    }
                }))
                case 'state': return pt.ss($, ($) => pt.decide.state($.status, ($) => {
                    switch ($[0]) {
                        case 'missing': return pt.ss($, ($) => pt.list.literal([]))
                        case 'set':return pt.ss($, ($) => Value($.value))
                        default: return pt.au($[0])
                    }
                }))
                case 'text': return pt.ss($, ($) => pt.list.literal([]))
                default: return pt.au($[0])
            }
        }))
        case 'include': return pt.ss($, ($) => pt.list.literal([
            $,
        ]))
        case 'missing': return pt.ss($, ($) => pt.list.literal([]))
        default: return pt.au($[0])
    }
})

export const Items: pi.Transformer<d_in.Items, d_out.Included_Files> = ($) => pt.list.from.list($).flatten(($) => Value($.value))

export const ID_Value_Pairs: pi.Transformer<d_in.ID_Value_Pairs, d_out.Included_Files> = ($) => pt.list.from.list($).flatten(($ => $.assignment.__decide(
    ($) => $.value.__decide(
        ($) => Value($),
        () => pt.list.literal([])
    ),
    () => pt.list.literal([])
)))
