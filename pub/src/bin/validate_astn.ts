#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/commands/validate_astn"

import * as d_resources from "../implementation/commands/validate_astn"

_eb.run_main_procedure(
    ($r) => {
        return procedure(
            {
                'log': $r.commands.log,
                'log error': $r.commands['log error']
            },
            {
                'get instream data': $r.queries['get instream data']
            },
        )
    },
)
