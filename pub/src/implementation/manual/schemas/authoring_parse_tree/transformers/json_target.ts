import * as _p from 'pareto-core-transformer'

import * as signatures from "../../../../../interface/signatures/transformers/authoring_parse_tree/json_target"

export const Document: signatures.Document = ($) => Value($.content)


export const Key_Value_Pairs: signatures.Key_Value_Pairs = ($) => $.map(($) => ({
    'key': $.key.value,
    'value': $.value.transform(
        ($) => Value($.value),
        () => ['null', null]
    ),
}))

export const Elements: signatures.Elements = ($) => $.map(($) => Value($.value))

export const Value: signatures.Value = ($) => _p.cc($.type, ($) => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.cc($, ($) => {
            switch ($[0]) {
                case 'string': return _p.ss($, ($) => ['string', $.value])
                case 'indexed collection': return _p.ss($, ($) => _p.cc($, ($) => ['object', ['key value array', Key_Value_Pairs(_p.cc($, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => $.entries)
                        case 'verbose group': return _p.ss($, ($) => $.entries)
                        default: return _p.au($[0])
                    }
                }))]]))
                case 'ordered collection': return _p.ss($, ($) => ['array', _p.cc($, ($) => Elements(_p.cc($, ($) => {
                    switch ($[0]) {
                        case 'list': return _p.ss($, ($) => $.elements)
                        case 'concise group': return _p.ss($, ($) => $.elements)
                        default: return _p.au($[0])
                    }
                })))])
                case 'tagged value': return _p.ss($, ($) => _p.cc($.status, ($) => {
                    switch ($[0]) {
                        case 'missing data': return _p.ss($, ($) => ['null', null])
                        case 'set': return _p.ss($, ($) => ['array', _p.list.literal([
                            ['string', $.state.value],
                            Value($.value),
                        ])])
                        default: return _p.au($[0])
                    }
                }))
                case 'not set': return _p.ss($, ($) => ['null', null])
                case 'set optional value': return _p.ss($, ($) => ['array', _p.list.literal([
                    Value($.value),
                ])])
                default: return _p.au($[0])
            }
        }))

        case 'include': return _p.ss($, ($) => ['string', "FIXME include not implemented yet"])
        case 'missing data': return _p.ss($, ($) => ['null', null])
        default: return _p.au($[0])
    }
})