import * as _pi from 'pareto-core/dist/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type stream_in_to_stream_out = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'log error': resources_pareto.commands.log_error
            'write to stdout': resources_pareto.commands.write_to_stdout
        },
        {
            'get instream data': resources_pareto.queries.get_instream_data,
        }
    >

    export type file_in_to_file_out = _pi.Command_Procedure<
        resources_pareto.commands.main,
        {
            'log error': resources_pareto.commands.log_error
            'write file': resources_pareto.commands.write_file
        },
        {
            'read file': resources_pareto.queries.read_file,
        }
    >

}