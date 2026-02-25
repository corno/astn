import * as _p from 'pareto-core/dist/assign'

import * as signatures from "../../../../interface/signatures/transformers/parse_tree/authoring_target"

import * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data"


export const Document: signatures.Document = ($, $p) => {
    return {
        'header': _p.optional.from.optional(
            $.header
        ).map(($) => Value($.value, $p)),
        'content': Value($.content, $p)
    }
}


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($, $p) => $.__l_map(($) => ({
    'id': $.id.value,
    'value': _p.optional.from.optional($.value).map(($) => Value($.value, $p))
}))

export const Items: signatures.Items = ($, $p) => $.__l_map(($) => Value($.value, $p))

export const Value: signatures.Value = ($, $p) => {
    return {
        'metadata': {
            'comments': _p.list.literal([]),
        },
        'data': _p.decide.state($.type, ($): d_out.Value.data => {
            switch ($[0]) {
                case 'concrete': return _p.ss($, ($) => ['concrete', _p.decide.state($, ($): d_out.Value.data.concrete => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => ({
                            'type': ['dictionary', ID_Value_Pairs($.entries, $p)]
                        }))
                        case 'group': return _p.ss($, ($) => ({
                            'type': ['group', _p.decide.state($, ($): d_out.Value.data.concrete.type_.group => {
                                switch ($[0]) {
                                    case 'concise': return _p.ss($, ($) => {
                                        return ['concise', Items($.items, $p)]
                                    })
                                    case 'verbose': return _p.ss($, ($) => {
                                        const entries = $.entries
                                        return _p.decide.state($p.style, ($) => {
                                            switch ($[0]) {
                                                case 'concise': return _p.ss($, ($) => ['concise', entries.__l_map(($): d_out.Items.L => $.value.__decide(
                                                    ($): d_out.Items.L => Value($.value, $p),
                                                    (): d_out.Items.L => ({
                                                        'metadata': {
                                                            'comments': _p.list.literal([]),
                                                        },
                                                        'data': ['missing', null]
                                                    })
                                                ))])
                                                case 'as is': return _p.ss($, ($) => ['verbose', ID_Value_Pairs(entries, $p)])
                                                default: return _p.au($[0])
                                            }
                                        })
                                    })
                                    default: return _p.au($[0])
                                }
                            })]
                        }))
                        case 'list': return _p.ss($, ($): d_out.Value.data.concrete => ({
                            'type': ['list', Items($.items, $p)]
                        }))
                        case 'state': return _p.ss($, ($): d_out.Value.data.concrete => ({
                            'type': ['state', _p.decide.state($.status, ($): d_out.Value.data.concrete.type_.state => {
                                switch ($[0]) {
                                    case 'missing data': return _p.ss($, ($): d_out.Value.data.concrete.type_.state => ['missing data', null])
                                    case 'set': return _p.ss($, ($): d_out.Value.data.concrete.type_.state => ['set', {
                                        'option': $.option.value,
                                        'value': Value($.value, $p)
                                    }])
                                    default: return _p.au($[0])
                                }
                            })]
                        }))
                        case 'nothing': return _p.ss($, ($): d_out.Value.data.concrete => ({
                            'type': ['nothing', null]
                        }))
                        case 'optional': return _p.ss($, ($): d_out.Value.data.concrete => ({
                            'type': ['optional', _p.decide.state($, ($): d_out.Value.data.concrete.type_.optional => {
                                switch ($[0]) {
                                    case 'set': return _p.ss($, ($): d_out.Value.data.concrete.type_.optional => ['set', Value($.value, $p)])
                                    default: return _p.au($[0])
                                }
                            })]
                        }))
                        case 'text': return _p.ss($, ($) => ({
                            'type': ['text', {
                                'value': $.value,
                                'delimiter': _p.decide.state($.type, ($) => {
                                    switch ($[0]) {
                                        case 'quoted': return _p.ss($, ($) => ['quote', null])
                                        case 'apostrophed': return _p.ss($, ($) => ['quote', null])
                                        case 'undelimited': return _p.ss($, ($) => ['none', null])
                                        case 'backticked': return _p.ss($, ($) => ['backtick', null])
                                        default: return _p.au($[0])
                                    }
                                })
                            }]
                        }))
                        default: return _p.au($[0])
                    }
                })])

                case 'include': return _p.ss($, ($): d_out.Value.data => ['include', {
                    'path': $.path.value,
                }])
                case 'missing data': return _p.ss($, ($): d_out.Value.data => ['missing', null])
                default: return _p.au($[0])
            }
        })
    }
}