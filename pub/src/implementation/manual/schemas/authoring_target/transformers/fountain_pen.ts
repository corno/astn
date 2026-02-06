import * as _p from 'pareto-core/dist/expression'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../../../interface/signatures/transformers/authoring_target/fountain_pen"

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

//dependencies
import { $$ as s_apostrophed } from "astn-core/dist/implementation/manual/primitives/text/serializers/apostrophed"
import { $$ as s_quoted } from "astn-core/dist/implementation/manual/primitives/text/serializers/quoted"
import { $$ as s_backticked } from "astn-core/dist/implementation/manual/primitives/text/serializers/backticked"


const s_undelimited = ($: string): d_out.List_of_Characters => {
    return _p_list_from_text($, ($) => $)
}

export const Value: signatures.Value = ($, $p) => sh.ph.composed([
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
            ? sh.ph.literal(" ")
            : sh.ph.nothing()
        : sh.ph.nothing(),
    _p.decide.state($.data, ($) => {
        switch ($[0]) {
            case 'include': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("@ "),
                sh.ph.serialize(s_quoted($.path, {
                    'add delimiters': true,
                })),
            ]))
            case 'missing': return _p.ss($, ($) => sh.ph.literal("#"))
            case 'concrete': return _p.ss($, ($) => _p.decide.state($.type, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("{") : sh.ph.literal(""), //we always want a newline here
                        sh.ph.indent(
                            sh.pg.sentences(_p.list.from_dictionary(
                                $,
                                ($, id) => sh.ph.composed([
                                    sh.ph.serialize(s_backticked(id, {
                                        'add delimiters': true,
                                    })),
                                    sh.ph.literal(": "),
                                    $.__decide(
                                        ($) => Value($, {
                                            'in concise group': false,
                                            'write delimiters': true,
                                        }),
                                        () => sh.ph.nothing()
                                    ),
                                ]))),
                        ),
                        $p['write delimiters'] ? sh.ph.literal("}") : sh.ph.nothing(),
                    ]))
                    case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'concise': return _p.ss($, ($) => sh.ph.composed([
                                $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(),
                                sh.ph.composed($.__l_map(($) => Value($, {
                                    'in concise group': true,
                                    'write delimiters': true,
                                }))),
                                $p['write delimiters'] ? sh.ph.literal(">") : sh.ph.nothing(),
                            ]))
                            case 'verbose': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.composed([
                                    $p['write delimiters'] ? sh.ph.literal("(") : sh.ph.literal(""), //we always want a newline here
                                    sh.ph.indent(
                                        sh.pg.sentences(_p.list.from_dictionary(
                                            $,
                                            ($, id) => sh.ph.composed([
                                                sh.ph.serialize(s_apostrophed(id, {
                                                    'add delimiters': true,
                                                })),
                                                sh.ph.literal(": "),
                                                $.__decide(
                                                    ($) => Value($, {
                                                        'in concise group': false,
                                                        'write delimiters': true,
                                                    }),
                                                    () => sh.ph.nothing(),
                                                ),
                                            ])
                                        )),
                                    ),
                                    $p['write delimiters'] ? sh.ph.literal(")") : sh.ph.nothing(),
                                ])
                            ]))
                            default: return _p.au($[0])
                        }
                    }))
                    case 'list': return _p.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("[") : sh.ph.nothing(),
                        sh.ph.composed($.__l_map(($) => sh.ph.composed([
                            sh.ph.literal(" "),
                            Value($, {
                                'in concise group': false,
                                'write delimiters': true,
                            }),
                        ]))),
                        $p['write delimiters'] ? sh.ph.literal("]") : sh.ph.nothing(),
                    ]))
                    case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'not set': return _p.ss($, ($) => sh.ph.literal("~"))
                            case 'set': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("* "),
                                Value($, {
                                    'in concise group': $p['in concise group'],
                                    'write delimiters': true,
                                }),
                            ]))

                            default: return _p.au($[0])
                        }
                    }))
                    case 'nothing': return _p.ss($, ($) => sh.ph.literal("~"))
                    case 'state': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'missing data': return _p.ss($, ($) => sh.ph.literal("| #"))
                            case 'set': return _p.ss($, ($) => sh.ph.composed([
                                $p['in concise group']
                                    ? sh.ph.nothing()
                                    : $p['write delimiters'] ? sh.ph.literal("| ") : sh.ph.nothing(),
                                sh.ph.serialize(s_apostrophed($.option, {
                                    'add delimiters': $p['write delimiters'],
                                })),
                                $p['in concise group']
                                    ? sh.ph.nothing()
                                    : sh.ph.literal(" "),
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
                                case 'backtick': return _p.ss($, ($) => sh.ph.serialize(s_backticked(value, {
                                    'add delimiters': $p['write delimiters'],
                                })))
                                case 'quote': return _p.ss($, ($) => sh.ph.serialize(s_quoted(value, {
                                    'add delimiters': $p['write delimiters'],
                                })))
                                case 'none': return _p.ss($, ($) => sh.ph.serialize(s_undelimited(value)))
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

export const Document: signatures.Document = ($, $p) => sh.pg.sentences([
    $.header.__decide(
        ($) => Value($, {
            'in concise group': false,
            'write delimiters': true,
        }),
        () => sh.ph.nothing()
    ),
    Value($.content, {
        'in concise group': false,
        'write delimiters': true,
    }),
])
