
import * as _p from "pareto-core/dist/deserializer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/ide/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"
export const Relative_Location: t_signatures.Relative_Location = ($,abort,$p) => v_unmarshall.Relative_Location(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Relative_Range: t_signatures.Relative_Range = ($,abort,$p) => v_unmarshall.Relative_Range(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const Text_Edits: t_signatures.Text_Edits = ($,abort,$p) => v_unmarshall.Text_Edits(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($,abort,$p) => v_unmarshall.ID_Value_Pairs_To_Be_Sorted(
    v_deserialize.Document(
        $, 
        ($) => abort(
            ['tbd', null]
        ), 
        ({
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        })
    )['content'], 
    ($) => abort(
        ['tbd', null]
    )
)
