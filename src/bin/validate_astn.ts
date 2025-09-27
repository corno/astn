#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as parse from "../parse/parse"
import * as create_error_message from "../serializers/parse_result"

import { $$ as log } from "exupery-resources/dist/commands/log"


_eb.run_program(($) => {
    return log("bla bla").then(() => _ea.panic("not implemented yet"))
})

// _er.temp_resources.process["get instream data"](($) => {
//     _ea.cc(parse.parse(
//         $,
//         {
//             'tab size': 4,
//         }
//     ), ($) => {
//         switch ($[0]) {
//             case 'failure': return _ea.ss($, ($) => {
//                 _er.temp_resources.console.error(`Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`)
//                 // process.exit(1)
//             })
//             case 'success': return _ea.ss($, ($) => {
//                 _er.temp_resources.console.log(`document is valid ASTN`)
//                 // process.exit(0)
//             })
//             default: return _ea.au($[0])
//         }
//     })
// })