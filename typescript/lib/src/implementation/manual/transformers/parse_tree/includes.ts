import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import * as d_in from "astn-core/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "../../../../interface/data/includes.js"

export namespace interface_ {
    export type Document = p_i.Transformer<
        d_in.Document, d_out.Included_Files
    >
    export type Value = p_i.Transformer<
        d_in.Value, d_out.Included_Files
    >
    export type Items = p_i.Transformer<
        d_in.Items, d_out.Included_Files
    >
    export type ID_Value_Pairs = p_i.Transformer<
        d_in.ID_Value_Pairs, d_out.Included_Files
    >
}

export const Document: interface_.Document = ($) => p_.literal.segmented_list([
    p_.from.optional($.header).decide(
        ($) => Value($.value),
        () => p_.literal.list([])
    ),
    Value($.content),
])

export const Value: interface_.Value = ($) => p_.from.state($.type).decide(
    ($) => {
        switch ($[0]) {
            case 'concrete': return p_.option($, ($) => p_.from.state($).decide(
                ($) => {
                    switch ($[0]) {
                        case 'dictionary': return p_.option($, ($) => ID_Value_Pairs($.entries))
                        case 'group': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'concise': return p_.option($, ($) => Items($.properties))
                                    case 'verbose': return p_.option($, ($) => ID_Value_Pairs($.properties))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'list': return p_.option($, ($) => Items($.items))
                        case 'nothing': return p_.option($, ($) => p_.literal.list([]))
                        case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'set': return p_.option($, ($) => Value($.value))
                                    case 'not set': return p_.option($, ($) => p_.literal.list([]))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'state': return p_.option($, ($) => p_.from.state($.status).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'missing': return p_.option($, ($) => p_.literal.list([]))
                                    case 'set': return p_.option($, ($) => Value($.value))
                                    default: return p_.au($[0])
                                }
                            }))
                        case 'text': return p_.option($, ($) => p_.literal.list([]))
                        default: return p_.au($[0])
                    }
                }))
            case 'include': return p_.option($, ($) => p_.literal.list([
                $,
            ]))
            case 'missing': return p_.option($, ($) => p_.literal.list([]))
            default: return p_.au($[0])
        }
    })

export const Items: interface_.Items = ($) => p_.from.list($).flatten(
    ($) => Value($.value))

export const ID_Value_Pairs: interface_.ID_Value_Pairs = ($) => p_.from.list($).flatten(
    ($ => p_.from.optional($.assignment).decide(
        ($) => p_.from.optional($.value).decide(
            ($) => Value($),
            () => p_.literal.list([])
        ),
        () => p_.literal.list([])
    ))
)
