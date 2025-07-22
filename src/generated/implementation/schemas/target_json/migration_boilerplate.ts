import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/target_json/unresolved"
import * as _i_signatures from "../../../interface/schemas/target_json/migration_boilerplate"


export const Document: _i_signatures._T_Document = ($) => Value(
    $,
    null
)
export const Value: _i_signatures._T_Value = ($) => _pa.cc($, ($): _i_out._T_Value => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ['array', $.map(($) => Value(
            $,
            null
        ))])
        case 'boolean': return _pa.ss($, ($) => ['boolean', $])
        case 'null': return _pa.ss($, ($) => ['null', null])
        case 'number': return _pa.ss($, ($) => ['number', _pa.cc($, ($): _i_out._T_Value.SG._number => {
            switch ($[0]) {
                case 'float': return _pa.ss($, ($) => ['float', $])
                case 'integer': return _pa.ss($, ($) => ['integer', $])
                default: return _pa.au($[0])
            }
        })])
        case 'object': return _pa.ss($, ($) => ['object', _pa.cc($, ($): _i_out._T_Value.SG._object => {
            switch ($[0]) {
                case 'dictionary': return _pa.ss($, ($) => ['dictionary', $.map(($) => Value(
                    $,
                    null
                ))])
                case 'key value array': return _pa.ss($, ($) => ['key value array', $.map(($) => ({
                    'key': _pa.cc($['key'], ($) => $),
                    'value': _pa.cc($['value'], ($) => Value(
                        $,
                        null
                    )),
                }))])
                default: return _pa.au($[0])
            }
        })])
        case 'string': return _pa.ss($, ($) => ['string', $])
        default: return _pa.au($[0])
    }
})
