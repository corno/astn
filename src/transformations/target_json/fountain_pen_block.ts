import * as _ea from 'exupery-core-alg'

import * as s_in from "../../generated/interface/schemas/target_json/unconstrained"
import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unconstrained"

import {
    b, l, block
} from "pareto-fountain-pen/dist/shorthands/block"


import { impure } from "pareto-standard-operations"

const op = {
    'enrich list elements with position information': impure.list['enrich with position information'],
    'serialize with quote delimiter': impure.text['serialize with quote delimiter'],
    'dictionary to list': impure.dictionary['to list, sorted by code point']
}


const String = (
    $: string //FIX should have been a schema type
): s_out.Line_Part => l.snippet(op['serialize with quote delimiter']($))


export const Value = ($: s_in.Value): s_out.Line_Part => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'object': return _ea.ss($, ($) => l.sub([
                l.snippet("{"),
                l.indent([
                    _ea.cc($, ($): s_out.Block_Part => {
                        switch ($[0]) {
                            case 'dictionary': return _ea.ss($, ($) => b.sub_decorated(op['enrich list elements with position information'](op['dictionary to list']($)).map(($) => b.nested_line([
                                String($.value.key),
                                l.snippet(": "),
                                Value($.value.value),
                                $['is last'] ? l.nothing() : l.snippet(","),
                            ]))))
                            case 'key value array': return _ea.ss($, ($) => b.sub_decorated(op['enrich list elements with position information']($).map(($) => b.nested_line([
                                String($.value.key),
                                l.snippet(": "),
                                Value($.value.value),
                                $['is last'] ? l.nothing() : l.snippet(", "),
                            ]))))
                            default: return _ea.au($[0])
                        }
                    }),
                ]),
                l.snippet("}"),
            ]))
            case 'array': return _ea.ss($, ($) => _ea.cc($, ($) => l.sub([
                l.snippet("["),
                l.sub_decorated(op['enrich list elements with position information']($).map(($) => l.sub([
                    Value($.value),
                    $['is last'] ? l.nothing() : l.snippet(", "),
                ]))),
                l.snippet("]"),
            ])))
            case 'null': return _ea.ss($, ($) => l.snippet("null"))
            case 'boolean': return _ea.ss($, ($) => l.snippet($ ? "true" : "false"))
            case 'null': return _ea.ss($, ($) => l.snippet("null"))
            case 'number': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'integer': return _ea.ss($, ($) => l.snippet("FIXME INTEGER"))
                    case 'float': return _ea.ss($, ($) => l.snippet("FIXME FLOAT"))
                    default: return _ea.au($[0])
                }
            }))
            case 'string': return _ea.ss($, ($) => String($))
            default: return _ea.au($[0])
        }
    })
}

export const Document = ($: s_in.Document): s_out.Block => block([b.nested_line([
    Value($),
])])
