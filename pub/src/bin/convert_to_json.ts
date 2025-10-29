#!/usr/bin/env -S node --enable-source-maps

import * as _eb from 'exupery-core-bin'

import { $$ } from "../implementation/algorithms/procedures/unguaranteed/convert_to_json"

_eb.run_unguaranteed_main_procedure($$)