import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'


import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "../../../../interface/data/includes"


export const Document: p_i.Transformer<d_in.Document, d_out.Included_Files> = ($) => p_.literal.nested_list([
    $.header.__decide(
        ($) => Value($.value),
        () => p_.literal.list([])
    ),
    Value($.content),
])

export const Value: p_i.Transformer<d_in.Value, d_out.Included_Files> = ($) => p_.from.state($.type).decide(($) => {
    switch ($[0]) {
        case 'concrete': return p_.ss($, ($) => p_.from.state($).decide(($) => {
            switch ($[0]) {
                case 'dictionary': return p_.ss($, ($) => ID_Value_Pairs($.entries))
                case 'group': return p_.ss($, ($) => p_.from.state($).decide(($) => {
                    switch ($[0]) {
                        case 'concise': return p_.ss($, ($) => Items($.properties))
                        case 'verbose': return p_.ss($, ($) => ID_Value_Pairs($.properties))
                        default: return p_.au($[0])
                    }
                }))
                case 'list': return p_.ss($, ($) => Items($.items))
                case 'nothing': return p_.ss($, ($) => p_.literal.list([]))
                case 'optional': return p_.ss($, ($) => p_.from.state($).decide(($) => {
                    switch ($[0]) {
                        case 'set': return p_.ss($, ($) => Value($.value))
                        case 'not set': return p_.ss($, ($) => p_.literal.list([]))
                        default: return p_.au($[0])
                    }
                }))
                case 'state': return p_.ss($, ($) => p_.from.state($.status).decide(($) => {
                    switch ($[0]) {
                        case 'missing': return p_.ss($, ($) => p_.literal.list([]))
                        case 'set':return p_.ss($, ($) => Value($.value))
                        default: return p_.au($[0])
                    }
                }))
                case 'text': return p_.ss($, ($) => p_.literal.list([]))
                default: return p_.au($[0])
            }
        }))
        case 'include': return p_.ss($, ($) => p_.literal.list([
            $,
        ]))
        case 'missing': return p_.ss($, ($) => p_.literal.list([]))
        default: return p_.au($[0])
    }
})

export const Items: p_i.Transformer<d_in.Items, d_out.Included_Files> = ($) => p_.from.list($).flatten(($) => Value($.value))

export const ID_Value_Pairs: p_i.Transformer<d_in.ID_Value_Pairs, d_out.Included_Files> = ($) => p_.from.list($).flatten(($ => $.assignment.__decide(
    ($) => $.value.__decide(
        ($) => Value($),
        () => p_.literal.list([])
    ),
    () => p_.literal.list([])
)))
