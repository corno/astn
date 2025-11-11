#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ as procedure } from "../implementation/algorithms/procedures/unguaranteed/convert_to_json"

import * as d_resources from "../implementation/algorithms/procedures/unguaranteed/convert_to_json"

_eb.run_unguaranteed_main_procedure<d_resources.Resources>(
    ($r) => {
        return {
            'queries': {
                'get instream data': $r.queries['get instream data'],
            },
            'procedures': {
                'log': $r.procedures.log,
            }
        }
    },
    procedure
)
