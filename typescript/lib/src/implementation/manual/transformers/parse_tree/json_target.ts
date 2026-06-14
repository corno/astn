import * as pt from 'pareto-core/dist/assign'

import * as signatures from "../../../../interface/signatures/transformers/parse_tree/json_target"

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

export const Value: signatures.Value = ($) => pt.decide.state($.type, ($): d_out.Value => {
    switch ($[0]) {
        case 'concrete': return pt.ss($, ($) => pt.decide.state($, ($): d_out.Value => {
            switch ($[0]) {
                case 'dictionary': return pt.ss($, ($) => ['object', ID_Value_Pairs($.entries)])
                case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'concise': return pt.ss($, ($) => ['array', Items($.properties)])
                        case 'verbose': return pt.ss($, ($) => ['object', ID_Value_Pairs($.properties)])
                        default: return pt.au($[0])
                    }
                }))
                case 'list': return pt.ss($, ($) => ['array', Items($.items)])
                case 'state': return pt.ss($, ($) => pt.decide.state($.status, ($): d_out.Value => {
                    switch ($[0]) {
                        case 'missing': return pt.ss($, ($) => ['null', null])
                        case 'set': return pt.ss($, ($): d_out.Value => ['array', pt.list.literal<d_out.Value>([
                            ['string', $.option.token.value],
                            Value($.value),
                        ])])
                        default: return pt.au($[0])
                    }
                }))
                case 'nothing': return pt.ss($, ($) => ['null', null])
                case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'set': return pt.ss($, ($) => ['array', pt.list.literal([
                            Value($.value),
                        ])])
                        case 'not set': return pt.ss($, ($) => ['null', null])
                        default: return pt.au($[0])
                    }
                }))
                case 'text': return pt.ss($, ($) => ['string', $.token.value])
                default: return pt.au($[0])
            }
        }))

        case 'include': return pt.ss($, ($) => ['string', "FIXME include not implemented yet"])
        case 'missing': return pt.ss($, ($) => ['null', null])
        default: return pt.au($[0])
    }
})