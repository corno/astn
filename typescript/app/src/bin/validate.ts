#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'


import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "pareto-common/modules/stream_in_stream_out/implementation/commands/operation"

import { $$ as q_query } from "lib/modules/parse_tree/implementation/queries/validate"

p_h.run_main_command(
    () => c_command(
        {
            'indentation': "    ",
        },
        {
            'get instream data': rs_stream.$.queries['get instream data'],
            'process data': q_query(
                {
                    'tab size': 4,
                },
                null
            ),
        },
        {
            'log error lines': rs_stream.$.commands['log error lines'],
            'log lines': rs_stream.$.commands['log lines'],
        },
    ),
)
