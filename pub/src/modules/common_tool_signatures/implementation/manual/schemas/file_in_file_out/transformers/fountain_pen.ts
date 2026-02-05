import * as _p from 'pareto-core/dist/expression'

//data types
import * as d_in from "../../../../../interface/to_be_generated/file_in_file_out"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

//dependencies
import * as t_read_file from "pareto-resources/dist/implementation/manual/schemas/read_file/transformers/fountain_pen"
import * as t_file_in_file_out_to_fountain_pen from "./fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Path_Error = ($: d_in.Path_Error): d_out.Phrase => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'missing': return _p.ss($, ($) => sh.ph.literal("missing"))
        case 'not valid': return _p.ss($, ($) => sh.ph.literal("not valid"))
        default: return _p.au($[0])
    }
})

export const Error = ($: d_in.Error): d_out.Phrase => _p.decide.state($, ($): d_out.Phrase => {
    switch ($[0]) {
        case 'too many arguments': return _p.ss($, ($) => sh.ph.literal("too many arguments"))
        case 'in path': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("in path: "),
            Path_Error($)
        ]))
        case 'out path': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("out path: "),
            Path_Error($)
        ]))
        default: return _p.au($[0])
    }
})

export const Command_Error = ($: d_in.Command_Error): d_out.Phrase => _p.decide.state($, ($): d_out.Phrase => {
    switch ($[0]) {
        case 'command line arguments': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("command line arguments: "),
            t_file_in_file_out_to_fountain_pen.Error($)
        ]))
        case 'reading file': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("error reading: "),
            t_read_file.Error($)
        ]))
        case 'deserializing': return _p.ss($, ($) => sh.ph.composed([
            sh.ph.literal("error deserializing: "),
            sh.ph.literal($)
        ]))
        case 'writing file': return _p.ss($, ($) => sh.ph.literal("error writing file"))
        default: return _p.au($[0])
    }
})