
import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"

import * as d_read_file from "pareto-resources/dist/interface/generated/liana/schemas/read_file/data"
import * as d_write_file from "pareto-resources/dist/interface/generated/liana/schemas/write_file/data"

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
    'in': d_path.Node_Path,
    'out': d_path.Node_Path,
}
