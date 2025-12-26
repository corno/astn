import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_in from "../../../../interface/generated/pareto/schemas/authoring_target/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_apostrophed } from "../../../serializers/primitives/text/apostrophed"
import { $$ as s_quoted } from "../../../serializers/primitives/text/quoted"
import { $$ as s_backticked } from "../../../serializers/primitives/text/backticked"


export type Parameters = {
    'write delimiters': boolean
    'in concise group': boolean
}

export const Value: _et.Transformer_With_Parameters<d_in.Value, d_out.Block_Part, Parameters> = (
    $,
    $p,
) => {
    return sh.b.sub([
        // does it need a leading space
        $p['in concise group']
            ? _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'verbose group': return _ea.ss($, ($) => true)
                    case 'concise group': return _ea.ss($, ($) => false)
                    case 'dictionary': return _ea.ss($, ($) => true)
                    case 'list': return _ea.ss($, ($) => true)
                    case 'nothing': return _ea.ss($, ($) => true)
                    case 'state': return _ea.ss($, ($) => true)
                    case 'text': return _ea.ss($, ($) => true)
                    case 'optional': return _ea.ss($, ($) => true)
                    default: return _ea.au($[0])
                }
            })
                ? sh.b.snippet(" ")
                : sh.b.nothing()
            : sh.b.nothing(),
        _ea.cc($.type, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => sh.b.sub([
                    $p['write delimiters'] ? sh.b.snippet("{") : sh.b.snippet(""), //we always want a newline here
                    sh.b.indent([
                        sh.g.sub($.map(($) => sh.g.nested_block([
                            sh.b.snippet(s_backticked({
                                'value': $.key,
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
                case 'verbose group': return _ea.ss($, ($) => sh.b.sub([
                    _ea.block(() => {
                        const entries = $
                        return sh.b.sub([
                            $p['write delimiters'] ? sh.b.snippet("(") : sh.b.snippet(""), //we always want a newline here
                            sh.b.indent([
                                sh.g.sub(entries.map(($) => sh.g.nested_block([
                                    sh.b.snippet(s_apostrophed({
                                        'value': $.key,
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
                    })
                ]))
                case 'list': return _ea.ss($, ($) => sh.b.sub([
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
                case 'concise group': return _ea.ss($, ($) => sh.b.sub([
                    $p['write delimiters'] ? sh.b.snippet("<") : sh.b.nothing(),
                    sh.b.sub(op_enrich_list_elements_with_position_information($).map(($) => Value($.value, {
                        'in concise group': true,
                        'write delimiters': true,
                    }))),
                    $p['write delimiters'] ? sh.b.snippet(">") : sh.b.nothing(),
                ]))
                case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'missing data': return _ea.ss($, ($) => sh.b.snippet("| #"))
                        case 'set': return _ea.ss($, ($) => sh.b.sub([
                            $p['in concise group']
                                ? sh.b.nothing()
                                : $p['write delimiters'] ? sh.b.snippet("| ") : sh.b.nothing(),
                            sh.b.snippet(s_apostrophed({
                                'value': $.state,
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
                        default: return _ea.au($[0])
                    }
                }))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _ea.ss($, ($) => sh.b.snippet("~"))
                        case 'set': return _ea.ss($, ($) => sh.b.sub([
                            sh.b.snippet("* "),
                            Value($, {
                                'in concise group': $p['in concise group'],
                                'write delimiters': true,
                            }),
                        ]))

                        default: return _ea.au($[0])
                    }
                }))
                case 'nothing': return _ea.ss($, ($) => sh.b.snippet("~"))
                case 'text': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _ea.ss($, ($) => sh.b.snippet(s_backticked({
                                'value': value,
                                'add delimiters': $p['write delimiters'],
                            })))
                            case 'quote': return _ea.ss($, ($) => sh.b.snippet(s_quoted({
                                'value': value,
                                'add delimiters': $p['write delimiters'],
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

): d_out.Group => sh.group([sh.g.nested_block([
    Value($, {
        'in concise group': false,
        'write delimiters': true,
    }),
])])
