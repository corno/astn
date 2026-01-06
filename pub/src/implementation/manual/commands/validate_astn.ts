import * as _p from 'pareto-core-command'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../interface/signatures"

//data types

//dependencies
import { $$ as create_stream_to_stream_command } from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_stream_to_stream_command"
import { $$ as my_func } from "../text_to_text/validate_astn"


export const $$: signatures.commands.stream_in_to_stream_out = create_stream_to_stream_command(
    my_func
)