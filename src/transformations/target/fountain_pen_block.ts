import * as _ea from 'exupery-core-alg'

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

export const Value = (
    $: s_in.Value,
    $p: {
        'in concise group': boolean
    }
): s_out.Line_Part => {
    return l.sub([
        // does it need a leading space
        $p['in concise group']
            ? _ea.cc($, ($) => {
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
                ? l.snippet(" ")
                : l.nothing()
            : l.nothing(),
        _ea.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _ea.ss($, ($) => l.sub([
                    l.snippet("{"),
                    l.indent([
                        b.sub_decorated(op_dictionary_to_list($).map(($) => b.nested_line([
                            l.snippet(op_serialize_with_grave_delimiter($.key)),
                            l.snippet(": "),
                            Value($.value, { 'in concise group': false }),
                        ]))),
                    ]),
                    l.snippet("}"),
                ]))
                case 'verbose group': return _ea.ss($, ($) => l.sub([
                    _ea.block(() => {
                        const entries = $
                        return l.sub([
                            l.snippet("("),
                            l.indent([
                                b.sub_decorated(op_dictionary_to_list(entries).map(($) => b.nested_line([
                                    l.snippet(op_serialize_with_apostrophe_delimiter($.key)),
                                    l.snippet(": "),
                                    Value($.value, { 'in concise group': false }),
                                ]))),
                            ]),
                            l.snippet(")"),
                        ])
                    })
                ]))
                case 'list': return _ea.ss($, ($) => l.sub([
                    l.snippet("["),
                    l.sub_decorated(op_enrich_list_elements_with_position_information($).map(($) => l.sub([
                        l.snippet(" "),
                        Value($.value, { 'in concise group': false }),
                    ]))),
                    l.snippet(" ]"),
                ]))
                case 'concise group': return _ea.ss($, ($) => l.sub([
                    l.snippet("<"),
                    l.sub_decorated(op_enrich_list_elements_with_position_information($).map(($) => Value($.value, { 'in concise group': true }))),
                    l.snippet(" >"),
                ]))
                case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'missing data': return _ea.ss($, ($) => l.snippet("| #"))
                        case 'set': return _ea.ss($, ($) => l.sub([
                            $p['in concise group']
                                ? l.nothing()
                                : l.snippet("| "),
                            l.snippet(op_serialize_with_apostrophe_delimiter($.state)),
                            $p['in concise group']
                                ? l.nothing()
                                : l.snippet(" "),
                            Value($.value, { 'in concise group': $p['in concise group'] }),
                        ]))
                        default: return _ea.au($[0])
                    }
                }))
                case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'not set': return _ea.ss($, ($) => l.snippet("~"))
                        case 'set': return _ea.ss($, ($) => l.sub([
                            l.snippet("* "),
                            Value($, { 'in concise group': $p['in concise group'] }),
                        ]))

                        default: return _ea.au($[0])
                    }
                }))
                case 'nothing': return _ea.ss($, ($) => l.snippet("~"))
                case 'text': return _ea.ss($, ($) => {
                    const value = $.value
                    return _ea.cc($.delimiter, ($) => {
                        switch ($[0]) {
                            case 'backtick': return _ea.ss($, ($) => l.snippet(op_serialize_with_grave_delimiter(value)))
                            case 'quote': return _ea.ss($, ($) => l.snippet(op_serialize_with_quote_delimiter(value)))
                            case 'none': return _ea.ss($, ($) => l.snippet(value))
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
    $: s_in.Document,
    $p: {
    }

): s_out.Block => block([b.nested_line([
    Value($, {
        'in concise group': false
    }),
])])
