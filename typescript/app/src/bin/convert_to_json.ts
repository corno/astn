#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import { $$ as c_command } from "lib/implementation/manual/commands/convert_to_json"

p_h.run_main_command(
    ($r) => c_command(
            {
                'serialization parameters': {
                    'indentation': "   ",
                    'newline': "\n",
                },
                'tab size': 4,
            },
        {
            'read file': $r['filesystem unrestricted'].queries['read file'],
        },
        {
            'write file': $r['filesystem unrestricted'].commands['write file'],
            'log error': $r.stream.commands['log error'],
        },
    ),
)
