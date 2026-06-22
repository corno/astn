#!/usr/bin/env node

import * as p_h from 'pareto-host-nodejs/dist'




// _eb.run_main_command(
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
//     ($d, $s, $q) => {
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
//             ).map_exception_(
// ($) => ({
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
//             ).map_error(
// ($) => ({
//                 'exit code': 1,
//             })),
//         )
//     }
// )
