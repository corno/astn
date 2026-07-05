import * as p_ from 'pareto-core/implementation/command'

import * as interface_ from "../../../interface/commands.js"

//data types
import * as d_main from "pareto-resources/interface/data/temp_main"

//dependencies
import * as c_file_to_file from "pareto-common/implementation/manual/commands/file_to_file"
import * as q_genereer_jaarverslag from "../queries/format.js"

export const $$: interface_.procedures.process_file_data = p_.command_procedure(
    ($d, $s, $q, $c) => [
        c_file_to_file.$$(
            null,
            {
                'read file': $q['read file'],
                'process data': q_genereer_jaarverslag.$$(
                    $s,
                    null,
                )
            },
            {
                'log error': $c['log error'],
                'write file': $c['write file'],
            },
        ).execute(
            {
                'arguments': $d.arguments
            },
            ($): d_main.Error => $
        ),
    ]
)
