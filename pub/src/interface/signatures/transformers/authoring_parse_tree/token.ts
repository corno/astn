import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../generated/pareto/schemas/authoring_parse_tree/data_types/source"
import * as d_out from "../../../generated/pareto/schemas/token/data_types/target"

export type Value = _pi.Transformer<d_in.Value, d_out.Range>