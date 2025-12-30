import * as _pt from 'pareto-core-transformer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/sealed_target/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as s_backticked } from "../../../primitives/text/serializers/backticked"


export const Value = (
    $: d_in.Value,
): d_out.Block_Part => {
    return sh.b.sub([
        _pt.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _pt.ss($, ($) => sh.b.sub([
                    sh.b.snippet("{"),
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            sh.b.snippet(s_backticked({
                                'value': $.key,
                                'add delimiters': true
                            })),
                            sh.b.snippet(": "),
                            Value($.value),
                        ]))),
                    ]),
                    sh.b.snippet("}"),
                ]))
                case 'verbose group': return _pt.ss($, ($) => sh.b.sub([
                    sh.b.sub([
                        sh.b.snippet("("),
                        sh.b.indent([
                            sh.g.sub($.map(($) => sh.g.nested_block([
                                sh.b.snippet(s_apostrophed({
                                    'value': $.key,
                                    'add delimiters': true
                                })),
                                sh.b.snippet(": "),
                                Value($.value),
                            ]))),
                        ]),
                        sh.b.snippet(")"),
                    ])
                ]))
                case 'list': return _pt.ss($, ($) => sh.b.sub([
                    sh.b.snippet("["),
                    sh.b.sub($.map(($) => sh.b.sub([
                        sh.b.snippet(" "),
                        Value($),
                    ]))),
                    sh.b.snippet(" ]"),
                ]))
                case 'state': return _pt.ss($, ($) => sh.b.sub([
                    sh.b.snippet("| "),
                    sh.b.snippet(s_apostrophed({
                        'value': $.state,
                        'add delimiters': true
                    })),
                    sh.b.snippet(" "),
                    Value($.value),
                ]))
                case 'optional': return _pt.ss($, ($) => _pt.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _pt.ss($, ($) => sh.b.snippet("~"))
                        case 'set': return _pt.ss($, ($) => sh.b.sub([
                            sh.b.snippet("* "),
                            Value($),
                        ]))

                        default: return _pt.au($[0])
                    }
                }))
                case 'nothing': return _pt.ss($, ($) => sh.b.snippet("~"))
                case 'text': return _pt.ss($, ($) => {
                    const value = $.value
                    return _pt.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _pt.ss($, ($) => sh.b.snippet(s_backticked({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'quote': return _pt.ss($, ($) => sh.b.snippet(s_quoted({
                                'value': value,
                                'add delimiters': true
                            })))
                            case 'none': return _pt.ss($, ($) => sh.b.snippet(value))
                            default: return _pt.au($[0])
                        }
                    })
                })
                default: return _pt.au($[0])
            }
        })
    ])
}

export const Document = (
    $: d_in.Document,
    $p: {
    }

): d_out.Group => sh.group([sh.g.nested_block([
    Value($),
])])
