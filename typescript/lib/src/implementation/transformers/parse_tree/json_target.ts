import * as p_ from 'pareto-core/implementation/transformer'

import type * as s_in from "astn-core/interface/data/parse_tree"
import type * as s_out from "pareto-json/interface/data/json_without_guaranteed_unique_keys"

namespace interface_ {
    export type Value = p_.Transformer<s_in.Value, s_out.Value>
    export type ID_Value_Pairs = p_.Transformer<s_in.ID_Value_Pairs, s_out.Value.object_>
    export type Items = p_.Transformer<s_in.Items, s_out.Value.array>
    export type Document = p_.Transformer<s_in.Document, s_out.Document>
}


export const Document: interface_.Document = ($) => Value($.content)


export const ID_Value_Pairs: interface_.ID_Value_Pairs = ($) => p_.from.list($).map(
    ($) => ({
        'key': $.id.token.value,
        'value': p_.from.optional($.assignment).decide(
            ($) => p_.from.optional($.value).decide(
                ($) => Value($),
                () => ['null', null]
            ),
            () => ['null', null]
        ),
    })
)

export const Items: interface_.Items = ($) => p_.from.list($).map(
    ($) => Value($.value)
)

export const Value: interface_.Value = ($) => p_.from.state($.type).decide(
    ($): s_out.Value => {
        switch ($[0]) {
            case 'concrete': return p_.option($, ($) => p_.from.state($).decide(
                ($): s_out.Value => {
                    switch ($[0]) {
                        case 'dictionary': return p_.option($, ($) => ['object', ID_Value_Pairs($.entries)])
                        case 'group': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'concise': return p_.option($, ($) => ['array', Items($.properties)])
                                    case 'verbose': return p_.option($, ($) => ['object', ID_Value_Pairs($.properties)])
                                    default: return p_.exhaustive($[0])
                                }
                            }
                        ))
                        case 'list': return p_.option($, ($) => ['array', Items($.items)])
                        case 'state': return p_.option($, ($) => p_.from.state($.status).decide(
                            ($): s_out.Value => {
                                switch ($[0]) {
                                    case 'missing': return p_.option($, ($) => ['null', null])
                                    case 'set': return p_.option($, ($): s_out.Value => ['array', p_.literal.list<s_out.Value>([
                                        ['string', $.option.token.value],
                                        Value($.value),
                                    ])])
                                    default: return p_.exhaustive($[0])
                                }
                            }
                        ))
                        case 'nothing': return p_.option($, ($) => ['null', null])
                        case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                            ($) => {
                                switch ($[0]) {
                                    case 'set': return p_.option($, ($) => ['array', p_.literal.list([
                                        Value($.value),
                                    ])])
                                    case 'not set': return p_.option($, ($) => ['null', null])
                                    default: return p_.exhaustive($[0])
                                }
                            }
                        ))
                        case 'text': return p_.option($, ($) => ['string', $.token.value])
                        default: return p_.exhaustive($[0])
                    }
                }))

            case 'include': return p_.option($, ($) => ['string', "FIXME include not implemented yet"])
            case 'missing': return p_.option($, ($) => ['null', null])
            default: return p_.exhaustive($[0])
        }
    })