import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

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
//     return _ea.cc($.type, ($) => {
//         switch ($[0]) {
//             case 'concrete':
//             case 'include':
//             case 'missing data':
//             default: return _ea.au($[0])
//         }
//     })
// }