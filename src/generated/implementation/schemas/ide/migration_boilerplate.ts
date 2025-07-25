import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/ide/unconstrained"
import * as _i_r_ast from "../ast/migration_boilerplate"
import * as _i_signatures from "../../../interface/schemas/ide/migration_boilerplate"


export const Key_Value_Pairs_To_Be_Sorted: _i_signatures._T_Key_Value_Pairs_To_Be_Sorted = ($) => $.map(($) => $)
export const Text_Edits: _i_signatures._T_Text_Edits = ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Text_Edits.L => {
    switch ($[0]) {
        case 'delete': return _pa.ss($, ($) => ['delete', ({
            'range': _pa.cc($['range'], ($) => _i_r_ast.Relative_Range(
                $,
                null
            )),
        })])
        case 'insert': return _pa.ss($, ($) => ['insert', ({
            'location': _pa.cc($['location'], ($) => _i_r_ast.Relative_Location(
                $,
                null
            )),
            'text': _pa.cc($['text'], ($) => $),
        })])
        case 'replace': return _pa.ss($, ($) => ['replace', ({
            'range': _pa.cc($['range'], ($) => _i_r_ast.Relative_Range(
                $,
                null
            )),
            'text': _pa.cc($['text'], ($) => $),
        })])
        default: return _pa.au($[0])
    }
}))
