import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

//data types
import * as d_file_in_file_out from "../../../../../interface/to_be_generated/file_in_file_out"

export type Signature = _pi.Production<d_file_in_file_out.Path, d_file_in_file_out.Path_Error, string>

//dependencies
import * as ds_path from "pareto-resources/dist/implementation/manual/schemas/node_path/deserializers"

export const Path: Signature = (iterator, abort) => ds_path.Node_Path(
    iterator.consume(
        ($) => $,
        () => abort(['missing', null])
    ),
    ($) => abort(['not valid', null]),
    {
        'pedantic': true,
    },
)