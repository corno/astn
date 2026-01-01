import * as _p from 'pareto-core-transformer'

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
        _p.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet("{"),
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            sh.b.snippet(s_backticked($.key, {
                                'add delimiters': true
                            })),
                            sh.b.snippet(": "),
                            Value($.value),
                        ]))),
                    ]),
                    sh.b.snippet("}"),
                ]))
                case 'verbose group': return _p.ss($, ($) => sh.b.sub([
                    sh.b.sub([
                        sh.b.snippet("("),
                        sh.b.indent([
                            sh.g.sub($.map(($) => sh.g.nested_block([
                                sh.b.snippet(s_apostrophed($.key, {
                                    'add delimiters': true
                                })),
                                sh.b.snippet(": "),
                                Value($.value),
                            ]))),
                        ]),
                        sh.b.snippet(")"),
                    ])
                ]))
                case 'list': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet("["),
                    sh.b.sub($.map(($) => sh.b.sub([
                        sh.b.snippet(" "),
                        Value($),
                    ]))),
                    sh.b.snippet(" ]"),
                ]))
                case 'state': return _p.ss($, ($) => sh.b.sub([
                    sh.b.snippet("| "),
                    sh.b.snippet(s_apostrophed($.state, {
                        'add delimiters': true
                    })),
                    sh.b.snippet(" "),
                    Value($.value),
                ]))
                case 'optional': return _p.ss($, ($) => _p.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _p.ss($, ($) => sh.b.snippet("~"))
                        case 'set': return _p.ss($, ($) => sh.b.sub([
                            sh.b.snippet("* "),
                            Value($),
                        ]))

                        default: return _p.au($[0])
                    }
                }))
                case 'nothing': return _p.ss($, ($) => sh.b.snippet("~"))
                case 'text': return _p.ss($, ($) => {
                    const value = $.value
                    return _p.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _p.ss($, ($) => sh.b.snippet(s_backticked(value, {
                                'add delimiters': true
                            })))
                            case 'quote': return _p.ss($, ($) => sh.b.snippet(s_quoted(value, {
                                'add delimiters': true
                            })))
                            case 'none': return _p.ss($, ($) => sh.b.snippet(value))
                            default: return _p.au($[0])
                        }
                    })
                })
                default: return _p.au($[0])
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
