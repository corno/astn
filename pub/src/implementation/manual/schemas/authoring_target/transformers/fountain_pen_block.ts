import * as _p from 'pareto-core-transformer'

import * as signatures from "../../../../../interface/signatures/transformers/authoring_target/fountain_pen_block"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

//dependencies
import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_apostrophed } from "../../../primitives/text/serializers/apostrophed"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"
import { $$ as s_backticked } from "../../../primitives/text/serializers/backticked"

export const Value: signatures.Value = ($, $p) => sh.b.sub([
    // does it need a leading space
    $p['in concise group']
        ? _p.cc($.type, ($) => {
            switch ($[0]) {
                case 'verbose group': return _p.ss($, ($) => true)
                case 'concise group': return _p.ss($, ($) => false)
                case 'dictionary': return _p.ss($, ($) => true)
                case 'list': return _p.ss($, ($) => true)
                case 'nothing': return _p.ss($, ($) => true)
                case 'state': return _p.ss($, ($) => true)
                case 'text': return _p.ss($, ($) => true)
                case 'optional': return _p.ss($, ($) => true)
                default: return _p.au($[0])
            }
        })
            ? sh.b.snippet(" ")
            : sh.b.nothing()
        : sh.b.nothing(),
    _p.cc($.type, ($) => {
        switch ($[0]) {
            case 'dictionary': return _p.ss($, ($) => sh.b.sub([
                $p['write delimiters'] ? sh.b.snippet("{") : sh.b.snippet(""), //we always want a newline here
                sh.b.indent([
                    sh.g.sub($.map(($) => sh.g.nested_block([
                        sh.b.snippet(s_backticked($.key, {
                            'add delimiters': true,
                        })),
                        sh.b.snippet(": "),
                        Value($.value, {
                            'in concise group': false,
                            'write delimiters': true,
                        }),
                    ]))),
                ]),
                $p['write delimiters'] ? sh.b.snippet("}") : sh.b.nothing(),
            ]))
            case 'verbose group': return _p.ss($, ($) => sh.b.sub([
                sh.b.sub([
                    $p['write delimiters'] ? sh.b.snippet("(") : sh.b.snippet(""), //we always want a newline here
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            sh.b.snippet(s_apostrophed($.key, {
                                'add delimiters': true,
                            })),
                            sh.b.snippet(": "),
                            Value($.value, {
                                'in concise group': false,
                                'write delimiters': true,
                            }),
                        ]))),
                    ]),
                    $p['write delimiters'] ? sh.b.snippet(")") : sh.b.nothing(),
                ])
            ]))
            case 'list': return _p.ss($, ($) => sh.b.sub([
                $p['write delimiters'] ? sh.b.snippet("[") : sh.b.nothing(),
                sh.b.sub(op_enrich_list_elements_with_position_information($).map(($) => sh.b.sub([
                    sh.b.snippet(" "),
                    Value($.value, {
                        'in concise group': false,
                        'write delimiters': true,
                    }),
                ]))),
                $p['write delimiters'] ? sh.b.snippet("]") : sh.b.nothing(),
            ]))
            case 'concise group': return _p.ss($, ($) => sh.b.sub([
                $p['write delimiters'] ? sh.b.snippet("<") : sh.b.nothing(),
                sh.b.sub(op_enrich_list_elements_with_position_information($).map(($) => Value($.value, {
                    'in concise group': true,
                    'write delimiters': true,
                }))),
                $p['write delimiters'] ? sh.b.snippet(">") : sh.b.nothing(),
            ]))
            case 'state': return _p.ss($, ($) => _p.cc($, ($) => {
                switch ($[0]) {
                    case 'missing data': return _p.ss($, ($) => sh.b.snippet("| #"))
                    case 'set': return _p.ss($, ($) => sh.b.sub([
                        $p['in concise group']
                            ? sh.b.nothing()
                            : $p['write delimiters'] ? sh.b.snippet("| ") : sh.b.nothing(),
                        sh.b.snippet(s_apostrophed($.state, {
                            'add delimiters': $p['write delimiters'],
                        })),
                        $p['in concise group']
                            ? sh.b.nothing()
                            : sh.b.snippet(" "),
                        Value($.value, {
                            'in concise group': $p['in concise group'],
                            'write delimiters': true
                        }),
                    ]))
                    default: return _p.au($[0])
                }
            }))
            case 'optional': return _p.ss($, ($) => _p.cc($, ($) => {
                switch ($[0]) {
                    case 'not set': return _p.ss($, ($) => sh.b.snippet("~"))
                    case 'set': return _p.ss($, ($) => sh.b.sub([
                        sh.b.snippet("* "),
                        Value($, {
                            'in concise group': $p['in concise group'],
                            'write delimiters': true,
                        }),
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
                            'add delimiters': $p['write delimiters'],
                        })))
                        case 'quote': return _p.ss($, ($) => sh.b.snippet(s_quoted(value, {
                            'add delimiters': $p['write delimiters'],
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

export const Document: signatures.Document = ($, $p) => sh.group([sh.g.nested_block([
    Value($, {
        'in concise group': false,
        'write delimiters': true,
    }),
])])
