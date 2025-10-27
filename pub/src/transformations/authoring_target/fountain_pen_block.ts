import * as _ea from 'exupery-core-alg'

import * as d_in from "../../generated/interface/schemas/authoring_target/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/operations/impure/list/enrich_with_position_information"
import { $$ as op_serialize_with_apostrophe_delimiter } from "../../operations/impure/string/serialize_apostrophed_string"
import { $$ as op_serialize_with_quote_delimiter } from "../../operations/impure/string/serialize_quoted_string"
import { $$ as op_serialize_with_grave_delimiter } from "../../operations/impure/string/serialize_backticked_string"

export type Parameters = {
    'write delimiters': boolean
    'in concise group': boolean
}

export const Value: _ea.Guaranteed_Transformation_With_Parameters<d_in.Value, Parameters, d_out.Line_Part> = (
    $,
    $p,
) => {
    return sh.l.sub([
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
                ? sh.l.snippet(" ")
                : sh.l.nothing()
            : sh.l.nothing(),
        _ea.cc($.type, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => sh.l.sub([
                    $p['write delimiters'] ? sh.l.snippet("{") : sh.l.snippet(""), //we always want a newline here
                    sh.l.indent([
                        sh.g.sub($.map(($) => sh.g.nested_line([
                            sh.l.snippet(op_serialize_with_grave_delimiter({
                                'value': $.key,
                                'add delimiters': true,
                            })),
                            sh.l.snippet(": "),
                            Value($.value, {
                                'in concise group': false,
                                'write delimiters': true,
                            }),
                        ]))),
                    ]),
                    $p['write delimiters'] ? sh.l.snippet("}") : sh.l.nothing(),
                ]))
                case 'verbose group': return _ea.ss($, ($) => sh.l.sub([
                    _ea.block(() => {
                        const entries = $
                        return sh.l.sub([
                            $p['write delimiters'] ? sh.l.snippet("(") : sh.l.snippet(""), //we always want a newline here
                            sh.l.indent([
                                sh.g.sub(entries.map(($) => sh.g.nested_line([
                                    sh.l.snippet(op_serialize_with_apostrophe_delimiter({
                                        'value': $.key,
                                        'add delimiters': true,
                                    })),
                                    sh.l.snippet(": "),
                                    Value($.value, {
                                        'in concise group': false,
                                        'write delimiters': true,
                                    }),
                                ]))),
                            ]),
                            $p['write delimiters'] ? sh.l.snippet(")") : sh.l.nothing(),
                        ])
                    })
                ]))
                case 'list': return _ea.ss($, ($) => sh.l.sub([
                    $p['write delimiters'] ? sh.l.snippet("[") : sh.l.nothing(),
                   sh.l.sub(op_enrich_list_elements_with_position_information($).map(($) => sh.l.sub([
                        sh.l.snippet(" "),
                        Value($.value, {
                            'in concise group': false,
                            'write delimiters': true,
                        }),
                    ]))),
                    $p['write delimiters'] ? sh.l.snippet("]") : sh.l.nothing(),
                ]))
                case 'concise group': return _ea.ss($, ($) => sh.l.sub([
                    $p['write delimiters'] ? sh.l.snippet("<") : sh.l.nothing(),
                   sh.l.sub(op_enrich_list_elements_with_position_information($).map(($) => Value($.value, {
                        'in concise group': true,
                        'write delimiters': true,
                    }))),
                    $p['write delimiters'] ? sh.l.snippet(">") : sh.l.nothing(),
                ]))
                case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'missing data': return _ea.ss($, ($) => sh.l.snippet("| #"))
                        case 'set': return _ea.ss($, ($) => sh.l.sub([
                            $p['in concise group']
                                ? sh.l.nothing()
                                : $p['write delimiters'] ? sh.l.snippet("| ") : sh.l.nothing(),
                            sh.l.snippet(op_serialize_with_apostrophe_delimiter({
                                'value': $.state,
                                'add delimiters': $p['write delimiters'],
                            })),
                            $p['in concise group']
                                ? sh.l.nothing()
                                : sh.l.snippet(" "),
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
                        case 'not set': return _ea.ss($, ($) => sh.l.snippet("~"))
                        case 'set': return _ea.ss($, ($) => sh.l.sub([
                            sh.l.snippet("* "),
                            Value($, {
                                'in concise group': $p['in concise group'],
                                'write delimiters': true,
                            }),
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
                                'add delimiters': $p['write delimiters'],
                            })))
                            case 'quote': return _ea.ss($, ($) => sh.l.snippet(op_serialize_with_quote_delimiter({
                                'value': value,
                                'add delimiters': $p['write delimiters'],
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
    Value($, {
        'in concise group': false,
        'write delimiters': true,
    }),
])])
