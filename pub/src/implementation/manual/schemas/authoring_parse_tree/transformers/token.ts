import * as _p from 'pareto-core-transformer'

import * as signatures from "../../../../../interface/signatures/transformers/authoring_parse_tree/token"

export const Value: signatures.Value = ($) => _p.cc($.type, ($) => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.cc($, ($) => {
            switch ($[0]) {
                case 'string': return _p.ss($, ($) => $.range)
                case 'indexed collection': return _p.ss($, ($) => _p.cc($, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => ({
                            'start': $['{'].range.start,
                            'end': $['}'].range.end
                        }))
                        case 'verbose group': return _p.ss($, ($) => ({
                            'start': $['('].range.start,
                            'end': $[')'].range.end
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'ordered collection': return _p.ss($, ($) => _p.cc($, ($) => {
                    switch ($[0]) {
                        case 'list': return _p.ss($, ($) => ({
                            'start': $['['].range.start,
                            'end': $[']'].range.end
                        }))
                        case 'concise group': return _p.ss($, ($) => ({
                            'start': $['<'].range.start,
                            'end': $['>'].range.end
                        }))
                        default: return _p.au($[0])
                    }
                }))
                case 'tagged value': return _p.ss($, ($) => ({
                    'start': $['|'].range.start,
                    'end': _p.cc($.status, ($) => {
                        switch ($[0]) {
                            case 'missing data': return _p.ss($, ($) => $['#'].range.end)
                            case 'set': return _p.ss($, ($) => Value($['value']).end)
                            default: return _p.au($[0])
                        }
                    })
                }))
                case 'not set': return _p.ss($, ($) => $['~'].range)
                case 'set optional value': return _p.ss($, ($) => ({
                    'start': $['*'].range.start,
                    'end': Value($['value']).end
                }))

                default: return _p.au($[0])
            }
        }))
        case 'include': return _p.ss($, ($) => ({
            'start': $['@'].range.start,
            'end': $.path.range.end
        }))
        case 'missing data': return _p.ss($, ($) => $['#'].range)
        default: return _p.au($[0])
    }
})