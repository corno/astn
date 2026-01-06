
import * as d_path from "pareto-resources/dist/interface/generated/pareto/schemas/path/data_types/target"

import * as d_read_file from "pareto-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_write_file from "pareto-resources/dist/interface/generated/pareto/schemas/write_file/data_types/target"

export type Path_Error =
    | ['missing', null]
    | ['not valid', null]

export type Error =
    | ['in path', Path_Error]
    | ['out path', Path_Error]
    | ['too many arguments', null]


export type Command_Error =
    | ['command line arguments', Error]
    | ['reading file', d_read_file.Error]
    | ['deserializing', string]
    | ['writing file', d_write_file.Error]

export type Parameters = {
    'in': Path,
    'out': Path,
}

export type Path = d_path.Node_Path