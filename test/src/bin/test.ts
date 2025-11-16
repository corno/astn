#!/usr/bin/env node

import * as _eb from 'exupery-core-bin'
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'
import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'

import * as d_read_directory from "exupery-resources/dist/interface/generated/pareto/schemas/read_directory/data_types/source"




// _eb.run_main_procedure(
//     ($r) => {
//         return {
//             'queries': {
//                 'read file': $r.queries['read file'],
//                 'read directory': $r.queries['read directory'],
//             },
//             'procedures': {
//                 'write file': $r.commands['write file'],
//             }
//         }
//     },
//     ($p, $r) => {
//         return temp_execute_procedure_with_asynchronous_data<d_read_directory.Result, _eb.Error>(
//             $r.queries['read directory'](
//                 {
//                     'prepend results with path': false,
//                     'path': {
//                         'escape spaces in path': true,
//                         'path': "/some/path/to/a/file.txt",
//                     },
//                 },
//                 null,
//             ).map_exception_(($) => ({
//                 'exit code': 1,
//             })),
//             $r.commands['write file'](
//                 {
//                     'path': {
//                         'escape spaces in path': true,
//                         'path': "/some/path/to/a/file.txt",
//                     },
//                     'data': "some data",
//                 },
//                 null
//             ).map_error(($) => ({
//                 'exit code': 1,
//             })),
//         )
//     }
// )
