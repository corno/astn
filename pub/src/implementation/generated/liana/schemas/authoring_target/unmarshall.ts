
import * as _p from "pareto-core/dist/refiner"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/authoring_target/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_generic from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"
export const Value: t_signatures.Value = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'metadata': _p_cc(
            $.__get_entry(
                'metadata', 
                ($) => abort(
                    ['no such entry', "metadata"]
                )
            ), 
            ($) => _p_cc(
                v_generic.expect_group(
                    $, 
                    ($) => abort(
                        ['expected a group', null]
                    )
                ), 
                ($) => ({
                    'comments': _p_cc(
                        $.__get_entry(
                            'comments', 
                            ($) => abort(
                                ['no such entry', "comments"]
                            )
                        ), 
                        ($) => v_generic.expect_list(
                            $, 
                            ($) => abort(
                                ['expected a list', null]
                            )
                        ).__l_map(
                            ($) => v_generic.expect_text(
                                $, 
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            )
                        )
                    ),
                })
            )
        ),
        'data': _p_cc(
            $.__get_entry(
                'data', 
                ($) => abort(
                    ['no such entry', "data"]
                )
            ), 
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)
export const Document: t_signatures.Document = ($,abort) => _p_cc(
    v_generic.expect_group(
        $, 
        ($) => abort(
            ['expected a group', null]
        )
    ), 
    ($) => ({
        'header': _p_cc(
            $.__get_entry(
                'header', 
                ($) => abort(
                    ['no such entry', "header"]
                )
            ), 
            ($) => v_generic.expect_optional(
                $, 
                ($) => abort(
                    ['expected an optional', null]
                )
            ).__o_map(
                ($) => Value(
                    $, 
                    ($) => abort(
                        $
                    )
                )
            )
        ),
        'content': _p_cc(
            $.__get_entry(
                'content', 
                ($) => abort(
                    ['no such entry', "content"]
                )
            ), 
            ($) => Value(
                $, 
                ($) => abort(
                    $
                )
            )
        ),
    })
)
