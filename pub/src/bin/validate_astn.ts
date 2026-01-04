#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/manual/commands/validate_astn"

_pn.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write to stdout': $r.commands['write to stdout'],
                'log error': $r.commands['log error']
            },
            {
                'get instream data': $r.queries['get instream data']
            },
        )
    },
)
