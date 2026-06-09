#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "lib/dist/implementation/manual/commands/convert_to_json"

_pn.run_main_command(
    ($r) => procedure(
        {
            'write file': $r['filesystem unrestricted'].commands['write file'],
            'log error': $r.stream.commands['log error'],
        },
        {
            'read file': $r['filesystem unrestricted'].queries['read file'],
        },
        null,
    ),
)
