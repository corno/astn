#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'

import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "lib/implementation/manual/commands/validate"

p_h.run_main_command(
    () => c_command(
        {
            'serialization parameters': {
                'indentation': "   ",
                'newline': "\n",
            },
            'tab size': 4,
        },
        {
            'get instream data': rs_stream.$.queries['get instream data']
        },
        {
            'write to stdout': rs_stream.$.commands['write to stdout'],
            'log error': rs_stream.$.commands['log error']
        },
    ),
)
