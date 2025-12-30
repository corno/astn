#!/usr/bin/env -S node --enable-source-maps

import * as _pn from 'pareto-host-nodejs'

import { $$ as procedure } from "../implementation/manual/commands/validate_astn"

import * as d_resources from "../implementation/manual/commands/validate_astn"

_pn.run_main_procedure(
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
