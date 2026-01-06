import * as d_file_in_file_out from "./file_in_file_out"

export type Error =
    | ['processing', string]
    | ['file in file out', d_file_in_file_out.Command_Error]