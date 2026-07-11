import * as p_ from 'pareto-core/interface/query_implementation'

import type * as query_interfaces_pareto_common from "pareto-common/interface/queries"

import type * as s_serialize_prose from "pareto-fountain-pen/interface/data/prose_serialize"

export namespace functions {

    export type process_file_data = p_.Query_Implementation<
        query_interfaces_pareto_common.process_file_data,
        {
            'tab size': number,
            'serialization parameters': s_serialize_prose.Parameters,
        },
        null
    >
    export type process_stream_data = p_.Query_Implementation<
        query_interfaces_pareto_common.process_stream_data,
        {
            'tab size': number,
            'serialization parameters': s_serialize_prose.Parameters,
        },
        null
    >

}
