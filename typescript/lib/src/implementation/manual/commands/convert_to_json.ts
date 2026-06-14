import * as pt from 'pareto-core/dist/command'
import * as pi from 'pareto-core/dist/interface'

import * as signatures from "../../../modules/common_tool_signatures/interface/commands"

//data types

//dependencies
import { $$ as create_file_to_file_command } from "../../../modules/common_tool_signatures/implementation/manual/command_creators/create_file_to_file_command"
import { $$ as my_func } from "../text_to_text/convert_to_json"


export const $$: signatures.procedures.file_in_to_file_out = create_file_to_file_command(
    my_func
)