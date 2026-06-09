#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/validate"

_pn.run_main_command(
    ($r) => procedure(
        {
            'log': $r.stream.commands['log'],
            'log error': $r.stream.commands['log error']
        },
        {
            'get instream data': $r.stream.queries['get instream data']
        },
        null,
    ),
)
