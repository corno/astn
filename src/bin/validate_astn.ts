#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as parse from "../parse/parse"
import * as create_error_message from "../serializers/parse_result"

import { $$ as log } from "exupery-resources/dist/commands/log"
import { $$ as log_error } from "exupery-resources/dist/commands/log_error"
import { $$ as get_instream_data } from "exupery-resources/dist/queries/get_instream_data"


_eb.run_unsafe_program(
    ($) => get_instream_data(
    ).execute_unsafe_command(($) => _ea.cc(
        parse.parse(
            $,
            {
                'tab size': 4,
            }
        ),
        ($): _easync.Unsafe_Command_Result<number> => {
            switch ($[0]) {
                case 'failure': return _ea.ss($, ($) => {
                    // _er.temp_resources.console.error()
                    return log_error(_ea.array_literal([`Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`])).cast_to_unsafe()
                })
                case 'success': return _ea.ss($, ($) => {
                    return log(_ea.array_literal(["document is valid ASTN"])).throw_exception(1)
                })
                default: return _ea.au($[0])
            }
        }
    ))
)
