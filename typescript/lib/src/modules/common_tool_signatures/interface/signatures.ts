import * as _pi from 'pareto-core/dist/interface'

import * as resources_pareto from "pareto-resources/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type stream_in_to_stream_out = _pi.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'log error': resources_pareto.stream.commands.log_error
            'log': resources_pareto.stream.commands.log
        },
        {
            'get instream data': resources_pareto.stream.queries.get_instream_data,
        }
    >

    export type file_in_to_file_out = _pi.Command_Procedure<
        resources_pareto.resources.commands.main,
        {
            'log error': resources_pareto.stream.commands.log_error
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        },
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file,
        }
    >

}