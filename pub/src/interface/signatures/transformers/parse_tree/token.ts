import * as _pi from 'pareto-core-interface'

import * as d_in from "astn-core/dist/interface/generated/pareto/schemas/parse_tree/data"
import * as d_out from "astn-core/dist/interface/generated/pareto/schemas/token/data"

export type Value = _pi.Transformer<d_in.Value, d_out.Range>