import * as p_ from 'pareto-core/interface/command'

import * as resources_pareto from "pareto-resources/interface/resources"
import * as commands_pareto_stream_api from "pareto-stream-api/interface/commands"
import * as queries_pareto_stream_api from "pareto-stream-api/interface/queries"
import * as commands_pareto_application_api from "pareto-application-api/interface/resources"

import * as d_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"

export namespace procedures {

    export type process_file_data = p_.Command_Procedure<
        commands_pareto_application_api.resources.commands.main,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file
        },
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file,
            'log error': commands_pareto_stream_api.commands.log_error,
        }
    >

    export type process_stream_data = p_.Command_Procedure<
        commands_pareto_application_api.resources.commands.main,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        {
            'get instream data': queries_pareto_stream_api.queries.get_instream_data
        },
        {
            'write to stdout': commands_pareto_stream_api.commands.write_to_stdout,
            'log error': commands_pareto_stream_api.commands.log_error,
        }
    >

}