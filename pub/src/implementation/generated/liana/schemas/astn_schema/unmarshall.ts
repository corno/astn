
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/unmarshall"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Schemas: t_signatures.Schemas = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Schema_Tree(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Text_Type: t_signatures.Text_Type = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'type': _p_cc(
            $.__get_entry(
                'type',
                ($) => abort(
                    ['no such entry', "type"]
                )
            ),
            ($) => _p_unreachable_code_path(
            )
        ),
    })
)

export const Globals: t_signatures.Globals = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'text types': _p_cc(
            $.__get_entry(
                'text types',
                ($) => abort(
                    ['no such entry', "text types"]
                )
            ),
            ($) => ({
                'location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
                    $,
                    ($) => abort(
                        ['expected a dictionary', null]
                    )
                ).__d_map(
                    ($, id) => ({
                        'location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'entry': Text_Type(
                            $,
                            ($) => abort(
                                $
                            )
                        ),
                    })
                ),
            })
        ),
    })
)

export const Type: t_signatures.Type = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'node': _p_cc(
            $.__get_entry(
                'node',
                ($) => abort(
                    ['no such entry', "node"]
                )
            ),
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Types: t_signatures.Types = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Type(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Schema: t_signatures.Schema = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'imports': _p_cc(
            $.__get_entry(
                'imports',
                ($) => abort(
                    ['no such entry', "imports"]
                )
            ),
            ($) => Imports(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'globals': _p_cc(
            $.__get_entry(
                'globals',
                ($) => abort(
                    ['no such entry', "globals"]
                )
            ),
            ($) => Globals(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'types': _p_cc(
            $.__get_entry(
                'types',
                ($) => abort(
                    ['no such entry', "types"]
                )
            ),
            ($) => Types(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => _p_unreachable_code_path(
)

export const Imports: t_signatures.Imports = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': _p_cc(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null]
                    )
                ),
                ($) => ({
                    'schema set child': _p_cc(
                        $.__get_entry(
                            'schema set child',
                            ($) => abort(
                                ['no such entry', "schema set child"]
                            )
                        ),
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'id': v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null]
                                )
                            ),
                        })
                    ),
                    'schema': _p_cc(
                        $.__get_entry(
                            'schema',
                            ($) => abort(
                                ['no such entry', "schema"]
                            )
                        ),
                        ($) => v_unmarshalled_from_parse_tree.Nothing(
                            $,
                            ($) => abort(
                                ['expected a nothing', null]
                            )
                        )
                    ),
                })
            ),
        })
    ),
})

export const Dictionary: t_signatures.Dictionary = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null]
        )
    ),
    ($) => ({
        'node': _p_cc(
            $.__get_entry(
                'node',
                ($) => abort(
                    ['no such entry', "node"]
                )
            ),
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                )
            )
        ),
        'ordered': _p_cc(
            $.__get_entry(
                'ordered',
                ($) => abort(
                    ['no such entry', "ordered"]
                )
            ),
            ($) => v_deserialize_boolean.deserialize(
                v_unmarshalled_from_parse_tree.Text(
                    $,
                    ($) => abort(
                        ['expected a text', null]
                    )
                ),
                ($) => abort(
                    ['not a valid boolean', null]
                )
            )
        ),
    })
)

export const Group: t_signatures.Group = ($, abort) => ({
    'location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'dictionary': v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null]
        )
    ).__d_map(
        ($, id) => ({
            'location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'entry': Type_Node(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Type_Node: t_signatures.Type_Node = ($, abort) => _p_unreachable_code_path(
)
