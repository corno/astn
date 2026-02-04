import * as _p from 'pareto-core/dist/expression'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../../../interface/signatures/transformers/authoring_target/fountain_pen_block"

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/to_be_generated/text"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

//dependencies
import { $$ as op_enrich_list_items_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_apostrophed } from "astn-core/dist/implementation/manual/primitives/text/serializers/apostrophed"
import { $$ as s_quoted } from "astn-core/dist/implementation/manual/primitives/text/serializers/quoted"
import { $$ as s_backticked } from "astn-core/dist/implementation/manual/primitives/text/serializers/backticked"


const s_undelimited = ($: string): d_out.Text => {
    return _p_list_from_text($, ($) => $)
}

export const Value: signatures.Value = ($, $p) => sh.b.sub([
    // does it need a leading space
    $p['in concise group']
        ? _p.decide.state($.data, ($) => {
            switch ($[0]) {
                case 'concrete': return _p.ss($, ($) => _p.decide.state($.type, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => true)
                        case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'verbose': return _p.ss($, ($) => true)
                                case 'concise': return _p.ss($, ($) => false)
                                default: return _p.au($[0])
                            }
                        }))
                        case 'list': return _p.ss($, ($) => true)
                        case 'nothing': return _p.ss($, ($) => true)
                        case 'optional': return _p.ss($, ($) => true)
                        case 'state': return _p.ss($, ($) => true)
                        case 'text': return _p.ss($, ($) => true)
                        default: return _p.au($[0])
                    }
                }))
                case 'missing': return _p.ss($, ($) => true)
                case 'include': return _p.ss($, ($) => true)

                default: return _p.au($[0])
            }
        })
            ? sh.b.literal(" ")
            : sh.b.nothing()
        : sh.b.nothing(),
    _p.decide.state($.data, ($) => {
        switch ($[0]) {
            case 'include': return _p.ss($, ($) => sh.b.sub([
                sh.b.literal("@ "),
                sh.b.text(s_quoted($.path, {
                    'add delimiters': true,
                })),
            ]))
            case 'missing': return _p.ss($, ($) => sh.b.literal("#"))
            case 'concrete': return _p.ss($, ($) => _p.decide.state($.type, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => sh.b.sub([
                        $p['write delimiters'] ? sh.b.literal("{") : sh.b.literal(""), //we always want a newline here
                        sh.b.indent([
                            sh.g.sub(_p.list.from_dictionary(
                                $,
                                ($, id) => sh.g.nested_block([
                                    sh.b.text(s_backticked(id, {
                                        'add delimiters': true,
                                    })),
                                    sh.b.literal(": "),
                                    $.__decide(
                                        ($) => Value($, {
                                            'in concise group': false,
                                            'write delimiters': true,
                                        }),
                                        () => sh.b.nothing()
                                    ),
                                ]))),
                        ]),
                        $p['write delimiters'] ? sh.b.literal("}") : sh.b.nothing(),
                    ]))
                    case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'concise': return _p.ss($, ($) => sh.b.sub([
                                $p['write delimiters'] ? sh.b.literal("<") : sh.b.nothing(),
                                sh.b.sub(op_enrich_list_items_with_position_information($).__l_map(($) => Value($.value, {
                                    'in concise group': true,
                                    'write delimiters': true,
                                }))),
                                $p['write delimiters'] ? sh.b.literal(">") : sh.b.nothing(),
                            ]))
                            case 'verbose': return _p.ss($, ($) => sh.b.sub([
                                sh.b.sub([
                                    $p['write delimiters'] ? sh.b.literal("(") : sh.b.literal(""), //we always want a newline here
                                    sh.b.indent([
                                        sh.g.sub(_p.list.from_dictionary(
                                            $,
                                            ($, id) => sh.g.nested_block([
                                                sh.b.text(s_apostrophed(id, {
                                                    'add delimiters': true,
                                                })),
                                                sh.b.literal(": "),
                                                $.__decide(
                                                    ($) => Value($, {
                                                        'in concise group': false,
                                                        'write delimiters': true,
                                                    }),
                                                    () => sh.b.nothing(),
                                                ),
                                            ])
                                        )),
                                    ]),
                                    $p['write delimiters'] ? sh.b.literal(")") : sh.b.nothing(),
                                ])
                            ]))
                            default: return _p.au($[0])
                        }
                    }))
                    case 'list': return _p.ss($, ($) => sh.b.sub([
                        $p['write delimiters'] ? sh.b.literal("[") : sh.b.nothing(),
                        sh.b.sub(op_enrich_list_items_with_position_information($).__l_map(($) => sh.b.sub([
                            sh.b.literal(" "),
                            Value($.value, {
                                'in concise group': false,
                                'write delimiters': true,
                            }),
                        ]))),
                        $p['write delimiters'] ? sh.b.literal("]") : sh.b.nothing(),
                    ]))
                    case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'not set': return _p.ss($, ($) => sh.b.literal("~"))
                            case 'set': return _p.ss($, ($) => sh.b.sub([
                                sh.b.literal("* "),
                                Value($, {
                                    'in concise group': $p['in concise group'],
                                    'write delimiters': true,
                                }),
                            ]))

                            default: return _p.au($[0])
                        }
                    }))
                    case 'nothing': return _p.ss($, ($) => sh.b.literal("~"))
                    case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'missing data': return _p.ss($, ($) => sh.b.literal("| #"))
                            case 'set': return _p.ss($, ($) => sh.b.sub([
                                $p['in concise group']
                                    ? sh.b.nothing()
                                    : $p['write delimiters'] ? sh.b.literal("| ") : sh.b.nothing(),
                                sh.b.text(s_apostrophed($.option, {
                                    'add delimiters': $p['write delimiters'],
                                })),
                                $p['in concise group']
                                    ? sh.b.nothing()
                                    : sh.b.literal(" "),
                                Value($.value, {
                                    'in concise group': $p['in concise group'],
                                    'write delimiters': true
                                }),
                            ]))
                            default: return _p.au($[0])
                        }
                    }))
                    case 'text': return _p.ss($, ($) => {
                        const value = $.value // fixme: move value to the inside of the delimiter states
                        return _p.decide.state($.delimiter, ($) => {
                            switch ($[0]) {
                                case 'backtick': return _p.ss($, ($) => sh.b.text(s_backticked(value, {
                                    'add delimiters': $p['write delimiters'],
                                })))
                                case 'quote': return _p.ss($, ($) => sh.b.text(s_quoted(value, {
                                    'add delimiters': $p['write delimiters'],
                                })))
                                case 'none': return _p.ss($, ($) => sh.b.text(s_undelimited(value)))
                                default: return _p.au($[0])
                            }
                        })
                    })

                    default: return _p.au($[0])
                }
            })))
            default: return _p.au($[0])
        }
    })
])

export const Document: signatures.Document = ($, $p) => sh.group([sh.g.nested_block([
    $.header.__decide(
        ($) => Value($, {
            'in concise group': false,
            'write delimiters': true,
        }),
        () => sh.b.nothing()
    ),
    Value($.content, {
        'in concise group': false,
        'write delimiters': true,
    }),
])])
