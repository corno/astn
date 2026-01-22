import * as _p from 'pareto-core/dist/transformer'

import * as signatures from "../../../../../interface/signatures/transformers/parse_tree/json_target"

import * as d_out from "pareto-json/dist/interface/generated/pareto/schemas/json/data"


export const Document: signatures.Document = ($) => Value($.content)


export const Key_Value_Pairs: signatures.Key_Value_Pairs = ($) => $.__l_map(($) => ({
    'key': $.key.value,
    'value': $.value.__decide(
        ($) => Value($.value),
        () => ['null', null]
    ),
}))

export const Elements: signatures.Elements = ($) => $.__l_map(($) => Value($.value))

export const Value: signatures.Value = ($) => _p.sg($.type, ($): d_out.Value => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.sg($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ['object', ['key value array', Key_Value_Pairs($.entries)]])
                case 'group': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'concise': return _p.ss($, ($) => ['array', Elements($.elements)])
                        case 'verbose': return _p.ss($, ($) => ['object', ['key value array', Key_Value_Pairs($.entries)]])
                        default: return _p.au($[0])
                    }
                }))
                case 'list': return _p.ss($, ($) => ['array', Elements($.elements)])
                case 'state group': return _p.ss($, ($) => _p.sg($.status, ($) => {
                    switch ($[0]) {
                        case 'missing data': return _p.ss($, ($) => ['null', null])
                        case 'set': return _p.ss($, ($) => ['array', _p.list.literal([
                            ['string', $.state.value],
                            Value($.value),
                        ])])
                        default: return _p.au($[0])
                    }
                }))
                case 'nothing': return _p.ss($, ($) => ['null', null])
                case 'optional': return _p.ss($, ($) => _p.sg($, ($) => {
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