import * as p_ci from 'pareto-core/dist/interface/command'

import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as commands_pareto_stream from "pareto-stream/dist/interface/commands"
import * as queries_pareto_stream from "pareto-stream/dist/interface/queries"

import * as d_serialize_prose from "pareto-fountain-pen/dist/interface/to_be_generated/prose_serialize"

export namespace procedures {

    export type process_file_data = p_ci.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file,
            'log error': commands_pareto_stream.commands.log_error,
        }
    >

    export type process_stream_data = p_ci.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        {
            'get instream data': queries_pareto_stream.queries.get_instream_data
        },
        {
            'write to stdout': commands_pareto_stream.commands.write_to_stdout,
            'log error': commands_pareto_stream.commands.log_error,
        }
    >

}