import * as pt from 'pareto-core/dist/command'
import * as pi from 'pareto-core/dist/interface'

import * as signatures from "../../../modules/common_tool_signatures/interface/commands"

//data types

//dependencies
import { $$ as create_stream_to_stream_command } from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_stream_to_stream_command"
import { $$ as my_func } from "../text_to_text/validate_astn"


export const $$: signatures.procedures.stream_in_to_stream_out = create_stream_to_stream_command(
    my_func
)