import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/sealed_target/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_serialize_with_apostrophe_delimiter } from "../../../serializers/primitives/text/apostrophed"
import { $$ as op_serialize_with_quote_delimiter } from "../../../serializers/primitives/text/quoted"
import { $$ as op_serialize_with_grave_delimiter } from "../../../serializers/primitives/text/backticked"


export const Value = (
    $: d_in.Value,
): d_out.Block_Part => {
    return sh.b.sub([
        _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("{"),
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            sh.b.snippet(op_serialize_with_grave_delimiter({
                                'value': $.key,
                                'add delimiters': true
                            })),
                            sh.b.snippet(": "),
                            Value($.value),
                        ]))),
                    ]),
                    sh.b.snippet("}"),
                ]))
                case 'verbose group': return _ea.ss($, ($) => sh.b.sub([
                    _ea.block(() => {
                        return sh.b.sub([
                            sh.b.snippet("("),
                            sh.b.indent([
                                sh.g.sub($.map(($) => sh.g.nested_block([
                                    sh.b.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.key,
                                'add delimiters': true
                            })),
                                    sh.b.snippet(": "),
                                    Value($.value),
                                ]))),
                            ]),
                            sh.b.snippet(")"),
                        ])
                    })
                ]))
                case 'list': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("["),
                   sh.b.sub($.map(($) => sh.b.sub([
                        sh.b.snippet(" "),
                        Value($),
                    ]))),
                    sh.b.snippet(" ]"),
                ]))
                case 'state': return _ea.ss($, ($) => sh.b.sub([
                    sh.b.snippet("| "),
                    sh.b.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.state,
                                'add delimiters': true
                            })),
                    sh.b.snippet(" "),
                    Value($.value),
                ]))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _ea.ss($, ($) => sh.b.snippet("~"))
                        case 'set': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet("* "),
                            Value($),
                        ]))

                        default: return _ea.au($[0])
                    }
                }))
                case 'nothing': return _ea.ss($, ($) => sh.b.snippet("~"))
                case 'text': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _ea.ss($, ($) => sh.b.snippet(op_serialize_with_grave_delimiter({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'quote': return _ea.ss($, ($) => sh.b.snippet(op_serialize_with_quote_delimiter({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'none': return _ea.ss($, ($) => sh.b.snippet(value))
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

): d_out.Group => sh.group([ sh.g.nested_block([
    Value($),
])])
