import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

import * as _in from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/source"
import * as _out from "../../../../interface/generated/pareto/schemas/authoring_target/data_types/target"


// export const Value = (
//     $: _in.Value,
//     $p: {
//         'remove commas': boolean
//         'indentation string': string
//         'current indentation': string
//     }
// ): _out.Value => {
//     return _pt.cc($.type, ($) => {
//         switch ($[0]) {
//             case 'concrete':
//             case 'include':
//             case 'missing data':
//             default: return _pt.au($[0])
//         }
//     })
// }