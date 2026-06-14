#!/usr/bin/env -S node --enable-source-maps

import * as ph from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/validate"

ph.run_main_command(
    ($r) => procedure(
        null,
        {
            'get instream data': $r.stream.queries['get instream data']
        },
        {
            'log': $r.stream.commands['log'],
            'log error': $r.stream.commands['log error']
        },
    ),
)
