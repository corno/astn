import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as signatures from "../../../../interface/transformers/parse_tree/json_target"

import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json_without_guaranteed_unique_keys/data"


export const Document: signatures.Document = ($) => Value($.content)


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($) => $.__l_map(
    ($) => ({
        'key': $.id.token.value,
        'value': $.assignment.__decide(
            ($) => $.value.__decide(
                ($) => Value($),
                () => ['null', null]
            ),
            () => ['null', null]
        ),
    })
)

export const Items: signatures.Items = ($) => $.__l_map(
    ($) => Value($.value)
)

export const Value: signatures.Value = ($) => p_.decide.state($.type, ($): d_out.Value => {
    switch ($[0]) {
        case 'concrete': return p_.ss($, ($) => p_.decide.state($, ($): d_out.Value => {
            switch ($[0]) {
                case 'dictionary': return p_.ss($, ($) => ['object', ID_Value_Pairs($.entries)])
                case 'group': return p_.ss($, ($) => p_.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'concise': return p_.ss($, ($) => ['array', Items($.properties)])
                        case 'verbose': return p_.ss($, ($) => ['object', ID_Value_Pairs($.properties)])
                        default: return p_.au($[0])
                    }
                }))
                case 'list': return p_.ss($, ($) => ['array', Items($.items)])
                case 'state': return p_.ss($, ($) => p_.decide.state($.status, ($): d_out.Value => {
                    switch ($[0]) {
                        case 'missing': return p_.ss($, ($) => ['null', null])
                        case 'set': return p_.ss($, ($): d_out.Value => ['array', p_.literal.list<d_out.Value>([
                            ['string', $.option.token.value],
                            Value($.value),
                        ])])
                        default: return p_.au($[0])
                    }
                }))
                case 'nothing': return p_.ss($, ($) => ['null', null])
                case 'optional': return p_.ss($, ($) => p_.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'set': return p_.ss($, ($) => ['array', p_.literal.list([
                            Value($.value),
                        ])])
                        case 'not set': return p_.ss($, ($) => ['null', null])
                        default: return p_.au($[0])
                    }
                }))
                case 'text': return p_.ss($, ($) => ['string', $.token.value])
                default: return p_.au($[0])
            }
        }))

        case 'include': return p_.ss($, ($) => ['string', "FIXME include not implemented yet"])
        case 'missing': return p_.ss($, ($) => ['null', null])
        default: return p_.au($[0])
    }
})