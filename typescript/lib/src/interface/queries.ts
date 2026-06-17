import * as p_ from 'pareto-core/dist/interface/query'

import * as queries_common from "pareto-common/dist/interface/queries"

import * as d_serialize_prose from "pareto-fountain-pen/dist/interface/data/prose_serialize"

export namespace query_functions {

    export type process_file_data = p_.Query_Function<
        queries_common.queries.process_file_data,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        null
    >
    export type process_stream_data = p_.Query_Function<
        queries_common.queries.process_stream_data,
        {
            'tab size': number,
            'serialization parameters': d_serialize_prose.Parameters,
        },
        null
    >

}
