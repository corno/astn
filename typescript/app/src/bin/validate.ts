#!/usr/bin/env -S node --enable-source-maps

import * as ph from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/validate"

ph.run_main_command(
    ($r) => procedure(
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
