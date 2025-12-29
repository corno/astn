#!/usr/bin/env node

import * as _pt from 'pareto-core-transformer'
import * as _ed from 'pareto-core-dev'
import * as _pi from 'pareto-core-interface'

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
