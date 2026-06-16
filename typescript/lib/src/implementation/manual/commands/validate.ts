import * as p_ from 'pareto-core/dist/implementation/command'

import * as signatures from "../../../interface/commands"

//data types
import * as d_main from "pareto-resources/dist/interface/data/temp_main"

//dependencies
import * as c_file_to_file from "pareto-common/dist/implementation/manual/commands/stream_to_stream"
import * as q_validate from "../queries/validate"

export const $$: signatures.procedures.process_stream_data = p_.command_procedure(
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
    ])
