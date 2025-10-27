import * as _ea from 'exupery-core-alg'

import * as d_in from "../../generated/interface/schemas/sealed_target/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/string/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/string/serialize_quoted_string"
import { $$ as op_serialize_with_grave_delimiter } from "../../operations/impure/string/serialize_backticked_string"

export const Value = (
    $: d_in.Value,
): d_out.Line_Part => {
    return sh.l.sub([
        _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => sh.l.sub([
                    sh.l.snippet("{"),
                    sh.l.indent([
                        sh.g.sub($.map(($) => sh.g.nested_line([
                            sh.l.snippet(op_serialize_with_grave_delimiter({
                                'value': $.key,
                                'add delimiters': true
                            })),
                            sh.l.snippet(": "),
                            Value($.value),
                        ]))),
                    ]),
                    sh.l.snippet("}"),
                ]))
                case 'verbose group': return _ea.ss($, ($) => sh.l.sub([
                    _ea.block(() => {
                        return sh.l.sub([
                            sh.l.snippet("("),
                            sh.l.indent([
                                sh.g.sub($.map(($) => sh.g.nested_line([
                                    sh.l.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.key,
                                'add delimiters': true
                            })),
                                    sh.l.snippet(": "),
                                    Value($.value),
                                ]))),
                            ]),
                            sh.l.snippet(")"),
                        ])
                    })
                ]))
                case 'list': return _ea.ss($, ($) => sh.l.sub([
                    sh.l.snippet("["),
                   sh.l.sub($.map(($) => sh.l.sub([
                        sh.l.snippet(" "),
                        Value($),
                    ]))),
                    sh.l.snippet(" ]"),
                ]))
                case 'state': return _ea.ss($, ($) => sh.l.sub([
                    sh.l.snippet("| "),
                    sh.l.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.state,
                                'add delimiters': true
                            })),
                    sh.l.snippet(" "),
                    Value($.value),
                ]))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _ea.ss($, ($) => sh.l.snippet("~"))
                        case 'set': return _ea.ss($, ($) => sh.l.sub([
                            sh.l.snippet("* "),
                            Value($),
                        ]))

                        default: return _ea.au($[0])
                    }
                }))
                case 'nothing': return _ea.ss($, ($) => sh.l.snippet("~"))
                case 'text': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _ea.ss($, ($) => sh.l.snippet(op_serialize_with_grave_delimiter({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'quote': return _ea.ss($, ($) => sh.l.snippet(op_serialize_with_quote_delimiter({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'none': return _ea.ss($, ($) => sh.l.snippet(value))
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

): d_out.Group => sh.group([ sh.g.nested_line([
    Value($),
])])
