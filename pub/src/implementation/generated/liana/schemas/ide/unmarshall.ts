
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/ide/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Relative_Location: t_signatures.Relative_Location = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'line': _p_cc(
            $.__get_entry(
                'line', 
                ($) => abort(
                    ['no such entry', "line"]
                )
            ), 
            ($) => v_deserialize_number.deserialize(
                v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ), 
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
        'column': _p_cc(
            $.__get_entry(
                'column', 
                ($) => abort(
                    ['no such entry', "column"]
                )
            ), 
            ($) => v_deserialize_number.deserialize(
                v_generic.expect_text(
                    $, 
                    ($) => abort(
                        ['expected a text', null]
                    )
                ), 
                ($) => abort(
                    ['not a valid number', null]
                )
            )
        ),
    })
)
export const Relative_Range: t_signatures.Relative_Range = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'start': _p_cc(
            $.__get_entry(
                'start', 
                ($) => abort(
                    ['no such entry', "start"]
                )
            ), 
            ($) => Relative_Location(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
        'end': _p_cc(
            $.__get_entry(
                'end', 
                ($) => abort(
                    ['no such entry', "end"]
                )
            ), 
            ($) => Relative_Location(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
    })
)
export const Text_Edits: t_signatures.Text_Edits = ($,abort) => v_generic.expect_list(
    $, 
    ($) => abort(
        ['expected a list', null]
    )
).__l_map(
    ($) => _p_unreachable_code_path(
    )
)
export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($,abort) => v_generic.expect_dictionary(
    $, 
    ($) => abort(
        ['expected a dictionary', null]
    )
).__d_map(
    ($,id) => v_generic.expect_text(
        $, 
        ($) => abort(
            ['expected a text', null]
        )
    )
)
