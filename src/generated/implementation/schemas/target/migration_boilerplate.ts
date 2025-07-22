import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/target/unresolved"
import * as _i_signatures from "../../../interface/schemas/target/migration_boilerplate"


export const Document: _i_signatures._T_Document = ($) => Value(
    $,
    null
)
export const Value: _i_signatures._T_Value = ($) => _pa.cc($, ($): _i_out._T_Value => {
    switch ($[0]) {
        case 'concise group': return _pa.ss($, ($) => ['concise group', $.map(($) => Value(
            $,
            null
        ))])
        case 'dictionary': return _pa.ss($, ($) => ['dictionary', $.map(($) => Value(
            $,
            null
        ))])
        case 'list': return _pa.ss($, ($) => ['list', $.map(($) => Value(
            $,
            null
        ))])
        case 'nothing': return _pa.ss($, ($) => ['nothing', null])
        case 'optional': return _pa.ss($, ($) => ['optional', _pa.cc($, ($): _i_out._T_Value.SG.optional => {
            switch ($[0]) {
                case 'not set': return _pa.ss($, ($) => ['not set', null])
                case 'set': return _pa.ss($, ($) => ['set', Value(
                    $,
                    null
                )])
                default: return _pa.au($[0])
            }
        })])
        case 'state': return _pa.ss($, ($) => ['state', ({
            'state': _pa.cc($['state'], ($) => $),
            'value': _pa.cc($['value'], ($) => Value(
                $,
                null
            )),
        })])
        case 'text': return _pa.ss($, ($) => ['text', ({
            'delimiter': _pa.cc($['delimiter'], ($) => _pa.cc($, ($): _i_out._T_Value.SG.text.delimiter => {
                switch ($[0]) {
                    case 'backtick': return _pa.ss($, ($) => ['backtick', null])
                    case 'none': return _pa.ss($, ($) => ['none', null])
                    case 'quote': return _pa.ss($, ($) => ['quote', null])
                    default: return _pa.au($[0])
                }
            })),
            'value': _pa.cc($['value'], ($) => $),
        })])
        case 'verbose group': return _pa.ss($, ($) => ['verbose group', $.map(($) => Value(
            $,
            null
        ))])
        default: return _pa.au($[0])
    }
})
