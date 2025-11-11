#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/validate_astn"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/validate_astn"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return {
            'procedures': {
                'log': $r.procedures.log,
                'log error': $r.procedures['log error']
            },
            'queries': {
                'get instream data': $r.queries['get instream data']
            }
        }
    },
    procedure
)
