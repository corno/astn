import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_r_ast from "../ast/serializer"
import * as _i_signatures from "../../../interface/schemas/ide/serializer"


export const Key_Value_Pairs_To_Be_Sorted: _i_signatures._T_s_Key_Value_Pairs_To_Be_Sorted = ($, $p) => ['dictionary', $.map(($) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})])]
export const Text_Edits: _i_signatures._T_s_Text_Edits = ($, $p) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'delete': return _pa.ss($, ($) => ({
            'state': "delete",
            'value': ['verbose group', _pa.dictionary_literal({
                'range': _pa.cc($['range'], ($) => _i_r_ast.Relative_Range(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'insert': return _pa.ss($, ($) => ({
            'state': "insert",
            'value': ['verbose group', _pa.dictionary_literal({
                'location': _pa.cc($['location'], ($) => _i_r_ast.Relative_Location(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _pa.cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        case 'replace': return _pa.ss($, ($) => ({
            'state': "replace",
            'value': ['verbose group', _pa.dictionary_literal({
                'range': _pa.cc($['range'], ($) => _i_r_ast.Relative_Range(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'text': _pa.cc($['text'], ($) => ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })]),
            })],
        }))
        default: return _pa.au($[0])
    }
})])]
