import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/authoring_target/marshall"


export const Document: _i_signatures._T_Document = ($, $p) => Value(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
export const Value: _i_signatures._T_Value = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'concise group': return _pa.ss($, ($) => ({
                'state': "concise group",
                'value': ['list', $.map(($) => Value(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))],
            }))
            case 'dictionary': return _pa.ss($, ($) => ({
                'state': "dictionary",
                'value': ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'key': _pa.cc($['key'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'value': _pa.cc($['value'], ($) => Value(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])],
            }))
            case 'list': return _pa.ss($, ($) => ({
                'state': "list",
                'value': ['list', $.map(($) => Value(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))],
            }))
            case 'nothing': return _pa.ss($, ($) => ({
                'state': "nothing",
                'value': ['nothing', null],
            }))
            case 'optional': return _pa.ss($, ($) => ({
                'state': "optional",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'not set': return _pa.ss($, ($) => ({
                            'state': "not set",
                            'value': ['nothing', null],
                        }))
                        case 'set': return _pa.ss($, ($) => ({
                            'state': "set",
                            'value': Value(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'state': return _pa.ss($, ($) => ({
                'state': "state",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'missing data': return _pa.ss($, ($) => ({
                            'state': "missing data",
                            'value': ['nothing', null],
                        }))
                        case 'set': return _pa.ss($, ($) => ({
                            'state': "set",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'state': _pa.cc($['state'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'value': _pa.cc($['value'], ($) => Value(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'text': return _pa.ss($, ($) => ({
                'state': "text",
                'value': ['verbose group', _pa.dictionary_literal({
                    'delimiter': _pa.cc($['delimiter'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'backtick': return _pa.ss($, ($) => ({
                                'state': "backtick",
                                'value': ['nothing', null],
                            }))
                            case 'none': return _pa.ss($, ($) => ({
                                'state': "none",
                                'value': ['nothing', null],
                            }))
                            case 'quote': return _pa.ss($, ($) => ({
                                'state': "quote",
                                'value': ['nothing', null],
                            }))
                            default: return _pa.au($[0])
                        }
                    })]),
                    'value': _pa.cc($['value'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                })],
            }))
            case 'verbose group': return _pa.ss($, ($) => ({
                'state': "verbose group",
                'value': ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
                    'key': _pa.cc($['key'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'value': _pa.cc($['value'], ($) => Value(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
