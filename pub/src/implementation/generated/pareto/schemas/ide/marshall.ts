import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/ide/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_token from "../token/marshall"


export const Relative_Range: _i_signatures._T_Relative_Range = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => _i_r_token.Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'end': _p.deprecated_cc($['end'], ($) => _i_r_token.Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Text_Edits: _i_signatures._T_Text_Edits = ($, $p) => ['list', $.map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'insert': return _p.ss($, ($) => ({
            'state': "insert",
            'value': ['verbose group', _p.dictionary.literal({
                'location': _p.deprecated_cc($['location'], ($) => _i_r_token.Relative_Location(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _p.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'replace': return _p.ss($, ($) => ({
            'state': "replace",
            'value': ['verbose group', _p.dictionary.literal({
                'range': _p.deprecated_cc($['range'], ($) => Relative_Range(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _p.deprecated_cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'delete': return _p.ss($, ($) => ({
            'state': "delete",
            'value': ['verbose group', _p.dictionary.literal({
                'range': _p.deprecated_cc($['range'], ($) => Relative_Range(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        default: return _p.au($[0])
    }
})])]
export const Key_Value_Pairs_To_Be_Sorted: _i_signatures._T_Key_Value_Pairs_To_Be_Sorted = ($, $p) => ['dictionary', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
