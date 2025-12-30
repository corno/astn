import * as _pt from 'pareto-core-transformer'

import * as signatures from "../../../../interface/signatures/transformers/authoring_parse_tree/token"

export const Value: signatures.Value = ($) => {
    return _pt.cc($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'string': return _pt.ss($, ($) => $.range)
                    case 'indexed collection': return _pt.ss($, ($) => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _pt.ss($, ($) => ({
                                'start': $['{'].range.start,
                                'end': $['}'].range.end
                            }))
                            case 'verbose group': return _pt.ss($, ($) => ({
                                'start': $['('].range.start,
                                'end': $[')'].range.end
                            }))
                            default: return _pt.au($[0])
                        }
                    }))
                    case 'ordered collection': return _pt.ss($, ($) => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _pt.ss($, ($) => ({
                                'start': $['['].range.start,
                                'end': $[']'].range.end
                            }))
                            case 'concise group': return _pt.ss($, ($) => ({
                                'start': $['<'].range.start,
                                'end': $['>'].range.end
                            }))
                            default: return _pt.au($[0])
                        }
                    }))
                    case 'tagged value': return _pt.ss($, ($) => ({
                        'start': $['|'].range.start,
                        'end': _pt.cc($.status, ($) => {
                            switch ($[0]) {
                                case 'missing data': return _pt.ss($, ($) => $['#'].range.end)
                                case 'set': return _pt.ss($, ($) => Value($['value']).end)
                                default: return _pt.au($[0])
                            }
                        })
                    }))
                    case 'not set': return _pt.ss($, ($) => $['~'].range)
                    case 'set optional value': return _pt.ss($, ($) => ({
                        'start': $['*'].range.start,
                        'end': Value($['value']).end
                    }))

                    default: return _pt.au($[0])
                }
            }))
            case 'include': return _pt.ss($, ($) => ({
                'start': $['@'].range.start,
                'end': $.path.range.end
            }))
            case 'missing data': return _pt.ss($, ($) => $['#'].range)
            default: return _pt.au($[0])
        }
    })
}