
import * as _p from "pareto-core/dist/transformer"

import * as _pdev from "pareto-core-dev"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/authoring_target/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/authoring_target/data"
export const Value: t_signatures.Value = ($) => ({
    'metadata': _p.deprecated_cc($['metadata'], ($) => ({
        'comments': _p.deprecated_cc($['comments'], ($) => $.__l_map(($) => $)),
    })),
    'data': _p.deprecated_cc($['data'], ($) => _p.deprecated_cc($, ($): t_out.Value.data => {
        switch ($[0]) {
            case 'missing': return _p.ss($, ($) => ['missing', null])
            case 'include': return _p.ss($, ($) => ['include', ({
                'path': _p.deprecated_cc($['path'], ($) => $),
            })])
            case 'concrete': return _p.ss($, ($) => ['concrete', ({
                'type': _p.deprecated_cc($['type'], ($) => _p.deprecated_cc($, ($): t_out.Value.data.concrete.type_ => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => ['dictionary', $.__d_map(($) => $.__o_map(($) => Value(
                            $
                        )))])
                        case 'group': return _p.ss($, ($) => ['group', _p.deprecated_cc($, ($): t_out.Value.data.concrete.type_.group => {
                            switch ($[0]) {
                                case 'concise': return _p.ss($, ($) => ['concise', $.__l_map(($) => Value(
                                    $
                                ))])
                                case 'verbose': return _p.ss($, ($) => ['verbose', $.__d_map(($) => $.__o_map(($) => Value(
                                    $
                                )))])
                                default: return _p.au($[0])
                            }
                        })])
                        case 'list': return _p.ss($, ($) => ['list', $.__l_map(($) => Value(
                            $
                        ))])
                        case 'nothing': return _p.ss($, ($) => ['nothing', null])
                        case 'optional': return _p.ss($, ($) => ['optional', _p.deprecated_cc($, ($): t_out.Value.data.concrete.type_.optional => {
                            switch ($[0]) {
                                case 'not set': return _p.ss($, ($) => ['not set', null])
                                case 'set': return _p.ss($, ($) => ['set', Value(
                                    $
                                )])
                                default: return _p.au($[0])
                            }
                        })])
                        case 'state group': return _p.ss($, ($) => ['state group', _p.deprecated_cc($, ($): t_out.Value.data.concrete.type_.state_group => {
                            switch ($[0]) {
                                case 'missing data': return _p.ss($, ($) => ['missing data', null])
                                case 'set': return _p.ss($, ($) => ['set', ({
                                    'state': _p.deprecated_cc($['state'], ($) => $),
                                    'value': _p.deprecated_cc($['value'], ($) => Value(
                                        $
                                    )),
                                })])
                                default: return _p.au($[0])
                            }
                        })])
                        case 'text': return _p.ss($, ($) => ['text', ({
                            'value': _p.deprecated_cc($['value'], ($) => $),
                            'delimiter': _p.deprecated_cc($['delimiter'], ($) => _p.deprecated_cc($, ($): t_out.Value.data.concrete.type_.text.delimiter => {
                                switch ($[0]) {
                                    case 'none': return _p.ss($, ($) => ['none', null])
                                    case 'quote': return _p.ss($, ($) => ['quote', null])
                                    case 'backtick': return _p.ss($, ($) => ['backtick', null])
                                    default: return _p.au($[0])
                                }
                            })),
                        })])
                        default: return _p.au($[0])
                    }
                })),
            })])
            default: return _p.au($[0])
        }
    })),
})
export const Document: t_signatures.Document = ($) => ({
    'header': _p.deprecated_cc($['header'], ($) => $.__o_map(($) => Value(
        $
    ))),
    'content': _p.deprecated_cc($['content'], ($) => Value(
        $
    )),
})
