import * as _p from 'pareto-core/dist/assign'

//data types
import * as d_in from "../../../../../interface/to_be_generated/transform_file"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/block/data"

//dependencies
import * as s_file_in_file_out from "../../file_in_file_out/transformers/fountain_pen"

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

export const Error = ($: d_in.Error): d_out.Phrase => {
    return _p.decide.state($, ($): d_out.Phrase => {
        switch ($[0]) {
            case 'processing': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("error processing: "),
                $
            ]))
            case 'file in file out': return _p.ss($, ($) => s_file_in_file_out.Command_Error($))
            default: return _p.au($[0])
        }
    })
}