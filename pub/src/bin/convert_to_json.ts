#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/convert_to_json"

import * as d_resources from "../implementation/commands/convert_to_json"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'write to stdout': $r.commands['write to stdout'],
                'log error': $r.commands['log error'],
            },
            {
                'get instream data': $r.queries['get instream data'],
            },
        )
    },
)
