#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'

import { $$ as x } from "exupery-resources/dist/implementation/queries/guaranteed/execute_query_executable_and_catch"


// x({
//     'program': "./pub/dist/bin/convert_to_json.js",
//     'args': _ea.array_literal([])
// }).__start(
//     ($) => {
//         _ea.cc($, ($) => {
//             switch ($[0]) {
//                 case 'success': return _ea.ss($, ($) => {
//                     _ed.log_debug_message(`succes: ${$.stdout}`, () => { })

//                 })
//                 case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
//                     switch ($[0]) {
//                         case 'failed to spawn': return _ea.ss($, ($) => {
//                             _ed.log_debug_message(`error: ${$.message}`, () => { })

//                         })
//                         case 'non zero exit code': return _ea.ss($, ($) => {
//                             _ed.log_debug_message(`error: ${$.exitCode}>${$.stderr}`, () => { })

//                         })
//                         default: return _ea.au($[0])
//                     }
//                 }))
//                 default: return _ea.au($[0])
//             }
//         })
//         on
//     }
// )

_ed.log_debug_message("TEST NOT IMPLEMENTED YET", () => { })