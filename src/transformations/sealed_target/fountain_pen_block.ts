import * as _ea from 'exupery-core-alg'

import * as d_in from "../../generated/interface/schemas/sealed_target/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import {
    b, l, block,
} from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/serialize_quoted_string"
import { $$ as op_serialize_with_grave_delimiter } from "../../operations/impure/serialize_backticked_string"

export const Value = (
    $: d_in.Value,
): d_out.Line_Part => {
    return l.sub([
        _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => l.sub([
                    l.snippet("{"),
                    l.indent([
                        b.sub($.map(($) => b.nested_line([
                            l.snippet(op_serialize_with_grave_delimiter({
                                'value': $.key,
                                'add delimiters': true
                            })),
                            l.snippet(": "),
                            Value($.value),
                        ]))),
                    ]),
                    l.snippet("}"),
                ]))
                case 'verbose group': return _ea.ss($, ($) => l.sub([
                    _ea.block(() => {
                        return l.sub([
                            l.snippet("("),
                            l.indent([
                                b.sub($.map(($) => b.nested_line([
                                    l.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.key,
                                'add delimiters': true
                            })),
                                    l.snippet(": "),
                                    Value($.value),
                                ]))),
                            ]),
                            l.snippet(")"),
                        ])
                    })
                ]))
                case 'list': return _ea.ss($, ($) => l.sub([
                    l.snippet("["),
                    l.sub($.map(($) => l.sub([
                        l.snippet(" "),
                        Value($),
                    ]))),
                    l.snippet(" ]"),
                ]))
                case 'state': return _ea.ss($, ($) => l.sub([
                    l.snippet("| "),
                    l.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.state,
                                'add delimiters': true
                            })),
                    l.snippet(" "),
                    Value($.value),
                ]))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _ea.ss($, ($) => l.snippet("~"))
                        case 'set': return _ea.ss($, ($) => l.sub([
                            l.snippet("* "),
                            Value($),
                        ]))

                        default: return _ea.au($[0])
                    }
                }))
                case 'nothing': return _ea.ss($, ($) => l.snippet("~"))
                case 'text': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _ea.ss($, ($) => l.snippet(op_serialize_with_grave_delimiter({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'quote': return _ea.ss($, ($) => l.snippet(op_serialize_with_quote_delimiter({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'none': return _ea.ss($, ($) => l.snippet(value))
                            default: return _ea.au($[0])
                        }
                    })
                })
                default: return _ea.au($[0])
            }
        })
    ])
}

export const Document = (
    $: d_in.Document,
    $p: {
    }

): d_out.Block => block([b.nested_line([
    Value($),
])])
