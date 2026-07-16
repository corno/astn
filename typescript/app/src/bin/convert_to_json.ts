#!/usr/bin/env -S node --enable-source-maps

import * as p_h from 'pareto-host-nodejs/index'


import * as rs_filesystem_unrestricted from "pareto-resource-filesystem-unrestricted/index"
import * as rs_stream from "pareto-resource-stream/index"

import { $$ as c_command } from "pareto-common/modules/file_in_file_out/implementation/command/operation"

import { $$ as q_query } from "lib/implementation/queries/convert_to_json"

p_h.run_main_command(
    () => c_command(
        {
            'indentation': "    ",
            'newline': "\n",
        },
        {
            'read file': rs_filesystem_unrestricted.$.queries['read file'],
            'process data': q_query(
                {
                    'tab size': 4,
                },
                null
            ),
        },
        {
            'log error lines': rs_stream.$.commands['log error lines'],
            'write file': rs_filesystem_unrestricted.$.commands['write file'],
        },
    ),
)
