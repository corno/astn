import * as _p from 'pareto-core/dist/transformer'

//data types
import * as d_file_in_file_out from "../../../../interface/to_be_generated/file_in_file_out"

//dependencies
import * as t_read_file from "pareto-resources/dist/implementation/manual/schemas/read_file/transformers/fountain_pen"
import * as s_fp from "pareto-fountain-pen/dist/implementation/manual/schemas/block/serializers"
import * as s_file_in_file_out from "./serializers"

export const Path_Error = ($: d_file_in_file_out.Path_Error): string => _p.sg($, ($) => {
    switch ($[0]) {
        case 'missing': return _p.ss($, ($) => `missing`)
        case 'not valid': return _p.ss($, ($) => `not valid`)
        default: return _p.au($[0])
    }
})

export const Error = ($: d_file_in_file_out.Error): string => _p.sg($, ($): string => {
    switch ($[0]) {
        case 'too many arguments': return _p.ss($, ($) => `too many arguments`)
        case 'in path': return _p.ss($, ($) => `in path: ` + Path_Error($))
        case 'out path': return _p.ss($, ($) => `out path: ` + Path_Error($))
        default: return _p.au($[0])
    }
})

export const Command_Error = ($: d_file_in_file_out.Command_Error): string => _p.sg($, ($): string => {
    switch ($[0]) {
        case 'command line arguments': return _p.ss($, ($) => `command line arguments: ` + s_file_in_file_out.Error($))
        case 'reading file': return _p.ss($, ($) => `error reading: ` + s_fp.Block_Part(t_read_file.Error($), { 'indentation': `    `, 'newline': '\n' }))
        case 'deserializing': return _p.ss($, ($) => `error deserializing: ` + $)
        case 'writing file': return _p.ss($, ($) => `error writing file`)
        default: return _p.au($[0])
    }
})