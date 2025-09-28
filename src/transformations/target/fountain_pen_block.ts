import * as pa from 'exupery-core-alg'

import * as s_in from "../../generated/interface/schemas/target/data_types/source"
import * as s_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/data_types/target"

import {
    b, l, block,
} from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-standard-operations/dist/impure/list/enrich_with_position_information"
import { $$ as op_serialize_with_apostrophe_delimiter } from "pareto-standard-operations/dist/impure/text/serialize_with_apostrophe_delimiter"
import { $$ as op_serialize_with_quote_delimiter } from "pareto-standard-operations/dist/impure/text/serialize_with_quote_delimiter"
import { $$ as op_serialize_with_grave_delimiter } from "pareto-standard-operations/dist/impure/text/serialize_with_grave_delimiter"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/impure/dictionary/to_list_sorted_by_code_point"

type Style = ['concise', null] | ['verbose', null]


export const Value = (
    $: s_in.Value,
    $p: {
        'style': Style
        'in concise group': boolean
    }
): s_out.Line_Part => {
    return l.sub([
        // does it need a leading space
        $p['in concise group']
            ? pa.cc($, ($) => {
                switch ($[0]) {
                    case 'verbose group': return pa.ss($, ($) => false)
                    case 'concise group': return pa.ss($, ($) => false)
                    case 'dictionary': return pa.ss($, ($) => true)
                    case 'list': return pa.ss($, ($) => true)
                    case 'nothing': return pa.ss($, ($) => false)
                    case 'state': return pa.ss($, ($) => true)
                    case 'text': return pa.ss($, ($) => true)
                    case 'optional': return pa.ss($, ($) => true)
                    default: return pa.au($[0])
                }
            })
                ? l.snippet(" ")
                : l.nothing()
            : l.nothing(),
        pa.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return pa.ss($, ($) => l.sub([
                    l.snippet("{"),
                    l.indent([
                        b.sub_decorated(op_dictionary_to_list($).map(($) => b.nested_line([
                            l.snippet(op_serialize_with_grave_delimiter($.key)),
                            l.snippet(": "),
                            Value($.value, { 'style': $p.style, 'in concise group': false }),
                        ]))),
                    ]),
                    l.snippet("}"),
                ]))
                case 'verbose group': return pa.ss($, ($) => l.sub([
                    $p['in concise group']
                        ? l.sub_decorated(op_dictionary_to_list($).map(($) => Value($.value, { 'style': $p.style, 'in concise group': true })))
                        : pa.block(() => {
                            const entries = $
                            return pa.cc($p.style, ($) => {
                                switch ($[0]) {
                                    case 'concise': return pa.ss($, ($) => l.sub([
                                        l.snippet("<"),
                                        l.sub_decorated(op_dictionary_to_list(entries).map(($) => Value($.value, { 'style': $p.style, 'in concise group': true }))),
                                        l.snippet(" >")
                                    ]))
                                    case 'verbose': return pa.ss($, ($) => l.sub([
                                        l.snippet("("),
                                        l.indent([
                                            b.sub_decorated(op_dictionary_to_list(entries).map(($) => b.nested_line([
                                                l.snippet(op_serialize_with_apostrophe_delimiter($.key)),
                                                l.snippet(": "),
                                                Value($.value, { 'style': $p.style, 'in concise group': false }),
                                            ]))),
                                        ]),
                                        l.snippet(")"),
                                    ]))
                                    default: return pa.au($[0])
                                }
                            })
                        }),
                ]))
                case 'list': return pa.ss($, ($) => l.sub([
                    l.snippet("["),
                    l.sub_decorated(op_enrich_list_elements_with_position_information($).map(($) => l.sub([
                        l.snippet(" "),
                        Value($.value, { 'style': $p.style, 'in concise group': false }),
                    ]))),
                    l.snippet(" ]"),
                ]))
                case 'concise group': return pa.ss($, ($) => l.sub([
                    l.snippet("<"),
                    l.sub_decorated(op_enrich_list_elements_with_position_information($).map(($) => Value($.value, { 'style': $p.style, 'in concise group': true }))),
                    l.snippet(" >"),
                ]))
                case 'state': return pa.ss($, ($) => l.sub([
                    $p['in concise group']
                        ? l.nothing()
                        : l.snippet("| "),
                    l.snippet(op_serialize_with_apostrophe_delimiter($.state)),
                    $p['in concise group']
                        ? l.nothing()
                        : l.snippet(" "),
                    Value($.value, { 'style': $p.style, 'in concise group': $p['in concise group'] }),
                ]))
                case 'optional': return pa.ss($, ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return pa.ss($, ($) => l.snippet("~"))
                        case 'set': return pa.ss($, ($) => l.sub([
                            l.snippet("* "),
                            Value($, { 'style': $p.style, 'in concise group': $p['in concise group'] }),
                        ]))

                        default: return pa.au($[0])
                    }
                }))
                case 'nothing': return pa.ss($, ($) => l.snippet("~"))
                case 'text': return pa.ss($, ($) => {
                    const value = $.value
                    return pa.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return pa.ss($, ($) => l.snippet(op_serialize_with_grave_delimiter(value)))
                            case 'quote': return pa.ss($, ($) => l.snippet(op_serialize_with_quote_delimiter(value)))
                            case 'none': return pa.ss($, ($) => l.snippet(value))
                            default: return pa.au($[0])
                        }
                    })
                })
                default: return pa.au($[0])
            }
        })
    ])
}

export const Document = (
    $: s_in.Document,
    $p: {
        'style': Style
    }

): s_out.Block => block([b.nested_line([
    Value($, {
        'style': $p.style,
        'in concise group': false
    }),
])])
