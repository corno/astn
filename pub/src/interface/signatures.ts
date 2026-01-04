import * as _pi from 'pareto-core-interface'

import * as resources_exupery from "pareto-resources/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type stream_in_to_stream_out = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'log error': resources_exupery.commands.log_error
            'write to stdout': resources_exupery.commands.write_to_stdout
        },
        {
            'get instream data': resources_exupery.queries.get_instream_data,
        }
    >

}