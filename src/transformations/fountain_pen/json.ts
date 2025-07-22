import * as pa from 'exupery-core-alg'

import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unresolved"
import * as s_in from "../../generated/interface/schemas/target/resolved"

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
    return pa.cc($, ($) => {
        switch ($[0]) {
            case 'verbose group': return pa.ss($, ($) => l.sub([
                l.snippet("{"),
                l.indent([
                    b.sub_decorated(op['enrich list elements with position information'](op['dictionary to list']($)).map(($) => b.nested_line([
                        String($.value.key),
                        l.snippet(": "),
                        Value($.value.value),
                        $['is last'] ? l.nothing() : l.snippet(","),
                    ]))),
                ]),
                l.snippet("}"),
            ]))
            case 'dictionary': return pa.ss($, ($) => l.sub([
                l.snippet("{"),
                l.indent([
                    b.sub_decorated(op['enrich list elements with position information'](op['dictionary to list']($)).map(($) => b.nested_line([
                        String($.value.key),
                        l.snippet(": "),
                        Value($.value.value),
                        $['is last'] ? l.nothing() : l.snippet(","),
                    ]))),
                ]),
                l.snippet("}"),
            ]))
            case 'list': return pa.ss($, ($) => pa.cc($, ($) => l.sub([
                l.snippet("["),
                l.sub_decorated(op['enrich list elements with position information']($).map(($) => l.sub([
                    Value($.value),
                    $['is last'] ? l.nothing() : l.snippet(", "),
                ]))),
                l.snippet("]"),
            ])))
            case 'concise group': return pa.ss($, ($) => pa.cc($, ($) => l.sub([
                l.snippet("["),
                l.sub_decorated(op['enrich list elements with position information']($).map(($) => l.sub([
                    Value($.value),
                    $['is last'] ? l.nothing() : l.snippet(", "),
                ]))),
                l.snippet("]"),
            ])))
            case 'state': return pa.ss($, ($) => l.sub([
                l.snippet("["),
                String($.state),
                l.snippet(", "),
                Value($.value),
                l.snippet("]"),
            ]))
            case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                switch ($[0]) {
                    case 'not set': return pa.ss($, ($) => l.snippet("[false]"))
                    case 'set': return pa.ss($, ($) => l.sub([
                        l.snippet("[true, "),
                        Value($),
                        l.snippet("]"),
                    ]))

                    default: return pa.au($[0])
                }
            }))
            case 'nothing': return pa.ss($, ($) => l.snippet("null"))
            case 'text': return pa.ss($, ($) => {
                return $.delimiter[0] === 'none'
                    ? l.snippet($.value)
                    : String($.value)
            })
            default: return pa.au($[0])
        }
    })
}

export const Document = ($: s_in.Document): s_out.Block => block([b.nested_line([
    Value($),
])])
