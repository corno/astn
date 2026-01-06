import * as _p from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../interface/signatures"

//data types

//dependencies
import { $$ as create_file_to_file_command } from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"
import { $$ as my_func } from "../text_to_text/convert_to_json"


export const $$: signatures.commands.file_in_to_file_out = create_file_to_file_command(
    my_func
)