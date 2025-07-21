#!/usr/bin/env node

import * as _er from 'exupery-core-resources'
import * as _ea from 'exupery-core-alg'

import * as parse from "../lib/transformations/parse"
import * as create_error_message from "../lib/transformations/create_error_message"


_er.temp_resources.process["get instream data"](($) => {
    _ea.cc(parse.Parse_Result(
        $,
        {
            'tab size': 4,
        }
    ), ($) => {
        switch ($[0]) {
            case 'failure': return _ea.ss($, ($) => {
                _er.temp_resources.console.error(`Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`)
                // process.exit(1)
            })
            case 'success': return _ea.ss($, ($) => {
                _er.temp_resources.console.log(`document is valid ASTN`)
                // process.exit(0)
            })
            default: return _ea.au($[0])
        }
    })
})