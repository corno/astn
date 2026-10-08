#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-core-application/index'


import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "pareto-common/modules/stream_in_stream_out/commands/implementations/operation"

import { $$ as q_query } from "lib/modules/parse_tree/queries/implementations/validate"

p_h.run_main_command(
    () => c_command(
        {
            'indentation': "    ",
            'newline': "\n",
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
            'log error paragraph': rs_stream.$.commands['log error paragraph'],
            'log paragraph': rs_stream.$.commands['log paragraph'],
        },
    ),
)
