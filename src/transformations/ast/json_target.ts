import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../generated/interface/schemas/ast/unconstrained"
import * as _out from "pareto-json/dist/generated/interface/schemas/json/unconstrained"

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
    return _ea.cc($.type, ($): _out.Value => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ['string', $.value])
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($): _out.Value => ['object', ['key value array', Key_Value_Pairs(_ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => $.entries)
                    case 'verbose group': return _ea.ss($, ($) => $.entries)
                    default: return _ea.au($[0])
                }
            }))]]))
            case 'ordered collection': return _ea.ss($, ($) => ['array', _ea.cc($, ($): _out.Value.SG.array => Elements(_ea.cc($, ($) => {
                switch ($[0]) {
                    case 'list': return _ea.ss($, ($) => $.elements)
                    case 'concise group': return _ea.ss($, ($) => $.elements)
                    default: return _ea.au($[0])
                }
            })))])
            case 'include': return _ea.ss($, ($) => ['string', "FIXME include not implemented yet"])
            case 'tagged value': return _ea.ss($, ($): _out.Value => ['array', _ea.array_literal([
                ['string', $.state.value],
                Value($.value),
            ])])
            case 'not set': return _ea.ss($, ($) => ['null', null])
            case 'set optional value': return _ea.ss($, ($): _out.Value => ['array', _ea.array_literal([
                Value($.value),
            ])])
            default: return _ea.au($[0])
        }
    })
}