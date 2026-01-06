import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/json/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Value: _i_signatures._T_Value = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'array': return _pa.ss($, ($) => ({
            'state': "array",
            'value': ['list', $.map(($) => Value(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'object': return _pa.ss($, ($) => ({
            'state': "object",
            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'key value array': return _pa.ss($, ($) => ({
                        'state': "key value array",
                        'value': ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
                            'key': _pa.deprecated_cc($['key'], ($) => ['text', ({
                                'delimiter': ['quote', null],
                                'value': $,
                            })]),
                            'value': _pa.deprecated_cc($['value'], ($) => Value(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })])],
                    }))
                    case 'dictionary': return _pa.ss($, ($) => ({
                        'state': "dictionary",
                        'value': ['dictionary', $.map(($) => Value(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ))],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'number': return _pa.ss($, ($) => ({
            'state': "number",
            'value': ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'integer': return _pa.ss($, ($) => ({
                        'state': "integer",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    case 'float': return _pa.ss($, ($) => ({
                        'state': "float",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $p['value serializers']['default number'](
                                $,
                                null
                            ),
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'boolean': return _pa.ss($, ($) => ({
            'state': "boolean",
            'value': ['text', ({
                'delimiter': ['backtick', null],
                'value': $p['value serializers']['boolean'](
                    $,
                    null
                ),
            })],
        }))
        case 'null': return _pa.ss($, ($) => ({
            'state': "null",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Document: _i_signatures._T_Document = ($, $p) => Value(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
