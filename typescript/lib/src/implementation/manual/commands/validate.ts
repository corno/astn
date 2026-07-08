import * as p_ from 'pareto-core/implementation/command'

import type * as interface_ from "../../../interface/declarations/commands.js"

//data types
import type * as d_main from "pareto-application-api/interface/data/main"

//dependencies
import * as c_file_to_file from "pareto-common/implementation/manual/commands/stream_to_stream"
import * as q_validate from "../queries/validate.js"

export const $$: interface_.process_stream_data = p_.command(
    ($d, $s, $q, $c) => [
        c_file_to_file.$$(
            null,
            {
                'get instream data': $q['get instream data'],
                'process data': q_validate.$$(
                    $s,
                    null,
                )
            },
            {
                'write to stdout': $c['write to stdout'],
                'log error': $c['log error'],
            },
        ).execute(
            {
                'arguments': $d.arguments
            },
            ($): d_main.Error => $
        ),
    ]
)
