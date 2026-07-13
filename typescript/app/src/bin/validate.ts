#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'


import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "pareto-common/implementation/commands/stream_in_stream_out"

import { $$ as q_query } from "lib/implementation/queries/validate"

p_h.run_main_command(
    () => c_command(
        null,
        {
            'get instream data': rs_stream.$.queries['get instream data'],
            'process data': q_query(
                {
                    'tab size': 4,
                    'serialization parameters': {
                        'indentation': "   ",
                        'newline': "\n",
                    },
                },
                null
            ),
        },
        {
            'write to stdout': rs_stream.$.commands['write to stdout'],
            'log error': rs_stream.$.commands['log error'],
        },
    ),
)
