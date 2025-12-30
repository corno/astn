import * as _pt from 'pareto-core-transformer'

import * as signatures from "../../../../interface/signatures/transformers/authoring_parse_tree/json_target"

export const Document: signatures.Document = ($) => {
    return Value($.content)
}


export const Key_Value_Pairs: signatures.Key_Value_Pairs = ($) => {
    return $.map(($) => ({
        'key': $.key.value,
        'value': $.value.transform(
            ($) => Value($.value),
            () => ['null', null]
        ),
    }))
}


export const Elements: signatures.Elements = ($) => {
    return $.map(($) => Value($.value))
}

export const Value: signatures.Value = ($) => {
    return _pt.cc($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'string': return _pt.ss($, ($) => ['string', $.value])
                    case 'indexed collection': return _pt.ss($, ($) => _pt.cc($, ($) => ['object', ['key value array', Key_Value_Pairs(_pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _pt.ss($, ($) => $.entries)
                            case 'verbose group': return _pt.ss($, ($) => $.entries)
                            default: return _pt.au($[0])
                        }
                    }))]]))
                    case 'ordered collection': return _pt.ss($, ($) => ['array', _pt.cc($, ($) => Elements(_pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _pt.ss($, ($) => $.elements)
                            case 'concise group': return _pt.ss($, ($) => $.elements)
                            default: return _pt.au($[0])
                        }
                    })))])
                    case 'tagged value': return _pt.ss($, ($) => _pt.cc($.status, ($) => {
                        switch ($[0]) {
                            case 'missing data': return _pt.ss($, ($) => ['null', null])
                            case 'set': return _pt.ss($, ($) => ['array', _pt.list_literal([
                                ['string', $.state.value],
                                Value($.value),
                            ])])
                            default: return _pt.au($[0])
                        }
                    }))
                    case 'not set': return _pt.ss($, ($) => ['null', null])
                    case 'set optional value': return _pt.ss($, ($) => ['array', _pt.list_literal([
                        Value($.value),
                    ])])
                    default: return _pt.au($[0])
                }
            }))

            case 'include': return _pt.ss($, ($) => ['string', "FIXME include not implemented yet"])
            case 'missing data': return _pt.ss($, ($) => ['null', null])
            default: return _pt.au($[0])
        }
    })
}