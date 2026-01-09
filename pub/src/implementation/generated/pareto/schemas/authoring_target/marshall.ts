import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_target/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Value: _i_signatures._T_Value = ($, $p) => ['verbose group', _p.dictionary.literal({
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'list': return _p.ss($, ($) => ({
                'state': "list",
                'value': ['list', $.map(($) => Value(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))],
            }))
            case 'concise group': return _p.ss($, ($) => ({
                'state': "concise group",
                'value': ['list', $.map(($) => Value(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ))],
            }))
            case 'dictionary': return _p.ss($, ($) => ({
                'state': "dictionary",
                'value': ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'key': _p.deprecated_cc($['key'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'value': _p.deprecated_cc($['value'], ($) => Value(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])],
            }))
            case 'verbose group': return _p.ss($, ($) => ({
                'state': "verbose group",
                'value': ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
                    'key': _p.deprecated_cc($['key'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'value': _p.deprecated_cc($['value'], ($) => Value(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })])],
            }))
            case 'text': return _p.ss($, ($) => ({
                'state': "text",
                'value': ['verbose group', _p.dictionary.literal({
                    'value': _p.deprecated_cc($['value'], ($) => ['text', ({
                        'delimiter': ['quote', null],
                        'value': $,
                    })]),
                    'delimiter': _p.deprecated_cc($['delimiter'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'none': return _p.ss($, ($) => ({
                                'state': "none",
                                'value': ['nothing', null],
                            }))
                            case 'quote': return _p.ss($, ($) => ({
                                'state': "quote",
                                'value': ['nothing', null],
                            }))
                            case 'backtick': return _p.ss($, ($) => ({
                                'state': "backtick",
                                'value': ['nothing', null],
                            }))
                            default: return _p.au($[0])
                        }
                    })]),
                })],
            }))
            case 'nothing': return _p.ss($, ($) => ({
                'state': "nothing",
                'value': ['nothing', null],
            }))
            case 'optional': return _p.ss($, ($) => ({
                'state': "optional",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'not set': return _p.ss($, ($) => ({
                            'state': "not set",
                            'value': ['nothing', null],
                        }))
                        case 'set': return _p.ss($, ($) => ({
                            'state': "set",
                            'value': Value(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            ),
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            case 'state': return _p.ss($, ($) => ({
                'state': "state",
                'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'missing data': return _p.ss($, ($) => ({
                            'state': "missing data",
                            'value': ['nothing', null],
                        }))
                        case 'set': return _p.ss($, ($) => ({
                            'state': "set",
                            'value': ['verbose group', _p.dictionary.literal({
                                'state': _p.deprecated_cc($['state'], ($) => ['text', ({
                                    'delimiter': ['quote', null],
                                    'value': $,
                                })]),
                                'value': _p.deprecated_cc($['value'], ($) => Value(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })],
            }))
            default: return _p.au($[0])
        }
    })]),
})]
export const Document: _i_signatures._T_Document = ($, $p) => Value(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
