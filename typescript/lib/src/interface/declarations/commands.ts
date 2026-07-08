import * as p_ from 'pareto-core/interface/command'

import * as actions_queries_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/query_actions"
import * as actions_commands_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/command_actions"
import * as actions_commands_pareto_stream_api from "pareto-stream-api/interface/command_actions"
import * as actions_queries_pareto_stream_api from "pareto-stream-api/interface/query_actions"
import * as actions_commands_pareto_application_api from "pareto-application-api/interface/command_actions"

import type * as d_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"


export type process_file_data = p_.Command<
    actions_commands_pareto_application_api.main,
    {
        'tab size': number,
        'serialization parameters': d_serialize_prose.Parameters,
    },
    {
        'read file': actions_queries_pareto_filesystem_unrestricted_api.read_file
    },
    {
        'write file': actions_commands_pareto_filesystem_unrestricted_api.write_file,
        'log error': actions_commands_pareto_stream_api.log_error,
    }
>

export type process_stream_data = p_.Command<
    actions_commands_pareto_application_api.main,
    {
        'tab size': number,
        'serialization parameters': d_serialize_prose.Parameters,
    },
    {
        'get instream data': actions_queries_pareto_stream_api.get_instream_data
    },
    {
        'write to stdout': actions_commands_pareto_stream_api.write_to_stdout,
        'log error': actions_commands_pareto_stream_api.log_error,
    }
>