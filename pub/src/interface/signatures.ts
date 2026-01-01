import * as _pi from 'pareto-core-interface'

import * as resources_exupery from "pareto-resources/dist/interface/resources"

export namespace queries {

}

export namespace commands {

    export type convert_to_json = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'log error': resources_exupery.commands.log_error
            'write to stdout': resources_exupery.commands.write_to_stdout
        },
        {
            'get instream data': resources_exupery.queries.get_instream_data,
        }
    >

    export type validate_astn = _pi.Command_Procedure<
        resources_exupery.commands.main,
        {
            'log': resources_exupery.commands.log,
            'log error': resources_exupery.commands.log_error
        },
        {
            'get instream data': resources_exupery.queries.get_instream_data,
        }
    >

}