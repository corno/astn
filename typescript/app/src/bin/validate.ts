#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs'

import { $$ as c_command } from "lib/dist/implementation/manual/commands/validate"

p_h.run_main_command(
    ($r) => c_command(
        {
            'serialization parameters': {
                'indentation': "   ",
                'newline': "\n",
            },
            'tab size': 4,
        },
        {
            'get instream data': $r.stream.queries['get instream data']
        },
        {
            'write to stdout': $r.stream.commands['write to stdout'],
            'log error': $r.stream.commands['log error']
        },
    ),
)
