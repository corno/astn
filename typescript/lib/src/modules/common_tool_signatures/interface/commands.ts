import * as p_ci from 'pareto-core/dist/command/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as commands_pareto_stream from "pareto-stream/dist/interface/commands"
import * as queries_pareto_stream from "pareto-stream/dist/interface/queries"

export namespace procedures {

    export type stream_in_to_stream_out = p_ci.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'get instream data': queries_pareto_stream.queries.get_instream_data,
        },
        {
            'log error': commands_pareto_stream.commands.log_error
            'log': commands_pareto_stream.commands.log
        }
    >

    export type file_in_to_file_out = p_ci.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file,
        },
        {
            'log error': commands_pareto_stream.commands.log_error
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        }
    >

}