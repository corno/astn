import * as _pqi from 'pareto-core/dist/query_interface'
import * as _pci from 'pareto-core/dist/command_interface'


import * as resources_pareto from "pareto-resources/dist/interface/resources"
import * as resources_pareto_stream from "pareto-stream/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type stream_in_to_stream_out = _pci.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'get instream data': resources_pareto_stream.queries.get_instream_data,
        },
        {
            'log error': resources_pareto_stream.commands.log_error
            'log': resources_pareto_stream.commands.log
        }
    >

    export type file_in_to_file_out = _pci.Command_Procedure<
        resources_pareto.resources.commands.main,
        null,
        {
            'read file': resources_pareto.filesystem_unrestricted.queries.read_file,
        },
        {
            'log error': resources_pareto_stream.commands.log_error
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        }
    >

}