import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../generated/interface/schemas/authoring_parse_tree/data_types/source"
import * as _out from "../../generated/interface/schemas/token/data_types/target"

export const Value = (
    $: _in.Value
): _out.Range => {
    return _ea.cc($.type, ($): _out.Range => {
        switch ($[0]) {
            case 'concrete': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'string': return _ea.ss($, ($) => $.range)
                    case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _ea.ss($, ($) => ({
                                'start': $['{'].range.start,
                                'end': $['}'].range.end
                            }))
                            case 'verbose group': return _ea.ss($, ($) => ({
                                'start': $['('].range.start,
                                'end': $[')'].range.end
                            }))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _ea.ss($, ($) => ({
                                'start': $['['].range.start,
                                'end': $[']'].range.end
                            }))
                            case 'concise group': return _ea.ss($, ($) => ({
                                'start': $['<'].range.start,
                                'end': $['>'].range.end
                            }))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'tagged value': return _ea.ss($, ($) => ({
                        'start': $['|'].range.start,
                        'end': _ea.cc($.status, ($) => {
                            switch ($[0]) {
                                case 'missing data': return _ea.ss($, ($) => $['#'].range.end)
                                case 'set': return _ea.ss($, ($) => Value($['value']).end)
                                default: return _ea.au($[0])
                            }
                        })
                    }))
                    case 'not set': return _ea.ss($, ($) => $['~'].range)
                    case 'set optional value': return _ea.ss($, ($) => ({
                        'start': $['*'].range.start,
                        'end': Value($['value']).end
                    }))

                    default: return _ea.au($[0])
                }
            }))
            case 'include': return _ea.ss($, ($) => ({
                'start': $['@'].range.start,
                'end': $.path.range.end
            }))
            case 'missing data': return _ea.ss($, ($) => $['#'].range)
            default: return _ea.au($[0])
        }
    })
}