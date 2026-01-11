#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/manual/commands/convert_to_json"

_pn.run_main_command(
    ($r) => procedure(
        {
            'write file': $r.commands['write file'],
            'log error': $r.commands['log error'],
        },
        {
            'read file': $r.queries['read file'],
        },
    ),
)
