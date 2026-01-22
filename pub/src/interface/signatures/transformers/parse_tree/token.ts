import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/token/data"

export type Value = _pi.Transformer<d_in.Value, d_out.Range>