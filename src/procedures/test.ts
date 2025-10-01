#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as cmd_log_error } from "exupery-resources/dist/actions/log_error"

export const $$: _eb.Unguaranteed_Main = ($i) => $i.execute(() => cmd_log_error(_ea.array_literal([
    "No tests yet"
])))
