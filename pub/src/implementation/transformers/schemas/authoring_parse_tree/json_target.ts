import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as _in from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/source"
import * as _out from "pareto-json/dist/interface/generated/pareto/schemas/json/data_types/target"

const op = {
    // 'flatten': pso.pure.list.flatten,
}

export const Document = (
    $: _in.Document,
): _out.Document => {
    return Value($.content)
}


export const Key_Value_Pairs = (
    $: _in.Key_Value_Pairs,
): _out.Value.SG._object.SG.key_value_array => {
    return $.map(($) => ({
        'key': $.key.value,
        'value': $.value.transform(
            ($) => Value($.value),
            () => ['null', null]
        ),
    }))
}


export const Elements = (
    $: _in.Elements,
): _out.Value.SG.array => {
    return $.map(($) => Value($.value))
}

export const Value = (
    $: _in.Value,
): _out.Value => {
    return _pt.cc($.type, ($): _out.Value => {
        switch ($[0]) {
            case 'concrete': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'string': return _pt.ss($, ($) => ['string', $.value])
                    case 'indexed collection': return _pt.ss($, ($) => _pt.cc($, ($): _out.Value => ['object', ['key value array', Key_Value_Pairs(_pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _pt.ss($, ($) => $.entries)
                            case 'verbose group': return _pt.ss($, ($) => $.entries)
                            default: return _pt.au($[0])
                        }
                    }))]]))
                    case 'ordered collection': return _pt.ss($, ($) => ['array', _pt.cc($, ($): _out.Value.SG.array => Elements(_pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _pt.ss($, ($) => $.elements)
                            case 'concise group': return _pt.ss($, ($) => $.elements)
                            default: return _pt.au($[0])
                        }
                    })))])
                    case 'tagged value': return _pt.ss($, ($): _out.Value => _pt.cc($.status, ($) => {
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
                    case 'set optional value': return _pt.ss($, ($): _out.Value => ['array', _pt.list_literal([
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