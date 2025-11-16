#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/validate_astn"

import * as d_resources from "../implementation/algorithms/procedures/validate_astn"

_eb.run_main_procedure(
    ($r) => {
        return procedure({
            'procedures': {
                'log': $r.commands.log,
                'log error': $r.commands['log error']
            },
            'queries': {
                'get instream data': $r.queries['get instream data']
            }
        })
    },
)
