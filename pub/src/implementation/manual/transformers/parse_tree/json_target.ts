import * as _p from 'pareto-core/dist/assign'

import * as signatures from "../../../../interface/signatures/transformers/parse_tree/json_target"

import * as d_out from "pareto-json/dist/interface/generated/liana/schemas/json/data"


export const Document: signatures.Document = ($) => Value($.content)


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($) => $.__l_map(($) => ({
    'key': $.id.value,
    'value': $.value.__decide(
        ($) => Value($.value),
        () => ['null', null]
    ),
}))

export const Items: signatures.Items = ($) => $.__l_map(($) => Value($.value))

export const Value: signatures.Value = ($) => _p.decide.state($.type, ($): d_out.Value => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ['object', ['key value array', ID_Value_Pairs($.entries)]])
                case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'concise': return _p.ss($, ($) => ['array', Items($.items)])
                        case 'verbose': return _p.ss($, ($) => ['object', ['key value array', ID_Value_Pairs($.entries)]])
                        default: return _p.au($[0])
                    }
                }))
                case 'list': return _p.ss($, ($) => ['array', Items($.items)])
                case 'state': return _p.ss($, ($) => _p.decide.state($.status, ($) => {
                    switch ($[0]) {
                        case 'missing data': return _p.ss($, ($) => ['null', null])
                        case 'set': return _p.ss($, ($) => ['array', _p.list.literal([
                            ['string', $.option.value],
                            Value($.value),
                        ])])
                        default: return _p.au($[0])
                    }
                }))
                case 'nothing': return _p.ss($, ($) => ['null', null])
                case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'set': return _p.ss($, ($) => ['array', _p.list.literal([
                            Value($.value),
                        ])])
                        default: return _p.au($[0])
                    }
                }))
                case 'text': return _p.ss($, ($) => ['string', $.value])
                default: return _p.au($[0])
            }
        }))

        case 'include': return _p.ss($, ($) => ['string', "FIXME include not implemented yet"])
        case 'missing data': return _p.ss($, ($) => ['null', null])
        default: return _p.au($[0])
    }
})