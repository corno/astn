
import * as _p from "pareto-core/dist/refiner"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/unresolved"

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
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Text_Type.type_ => {
                        switch ($t) {
                            case 'multi line':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['multi line', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )],
                                    })
                                )
                            case 'single line':
                                return _p_cc(
                                    $['value'],
                                    ($) => ({
                                        'location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'state': ['single line', v_unmarshalled_from_parse_tree.Nothing(
                                            $,
                                            ($) => abort(
                                                ['expected a nothing', null]
                                            )
                                        )],
                                    })
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']]
                                )
                        }
                    }
                )
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

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Schema_Tree => {
            switch ($t) {
                case 'set':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['set', Schemas(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'schema':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['schema', Schema(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
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

export const Type_Node: t_signatures.Type_Node = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Type_Node => {
            switch ($t) {
                case 'component':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['component', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Type_Node.state.component => {
                                        switch ($t) {
                                            case 'external':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['external', _p_cc(
                                                            v_unmarshalled_from_parse_tree.Group(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a group', null]
                                                                )
                                                            ),
                                                            ($) => ({
                                                                'import': _p_cc(
                                                                    $.__get_entry(
                                                                        'import',
                                                                        ($) => abort(
                                                                            ['no such entry', "import"]
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
                                                                'type': _p_cc(
                                                                    $.__get_entry(
                                                                        'type',
                                                                        ($) => abort(
                                                                            ['no such entry', "type"]
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
                                                            })
                                                        )],
                                                    })
                                                )
                                            case 'internal':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['internal', {
                                                            'location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null]
                                                                )
                                                            ),
                                                        }],
                                                    })
                                                )
                                            case 'internal cyclic':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['internal cyclic', {
                                                            'location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null]
                                                                )
                                                            ),
                                                        }],
                                                    })
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )],
                        })
                    )
                case 'dictionary':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['dictionary', Dictionary(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'group':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['group', Group(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'list':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['list', _p_cc(
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
                            )],
                        })
                    )
                case 'nothing':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                $,
                                ($) => abort(
                                    ['expected a nothing', null]
                                )
                            )],
                        })
                    )
                case 'optional':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['optional', Type_Node(
                                $,
                                ($) => abort(
                                    $
                                )
                            )],
                        })
                    )
                case 'state':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['state', {
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
                            }],
                        })
                    )
                case 'text':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'state': ['text', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Type_Node.state.text => {
                                        switch ($t) {
                                            case 'global':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['global', {
                                                            'location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'id': v_unmarshalled_from_parse_tree.Text(
                                                                $,
                                                                ($) => abort(
                                                                    ['expected a text', null]
                                                                )
                                                            ),
                                                        }],
                                                    })
                                                )
                                            case 'local':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'state': ['local', Text_Type(
                                                            $,
                                                            ($) => abort(
                                                                $
                                                            )
                                                        )],
                                                    })
                                                )
                                            default:
                                                return abort(
                                                    ['unknown option', $['option']['value']]
                                                )
                                        }
                                    }
                                )
                            )],
                        })
                    )
                default:
                    return abort(
                        ['unknown option', $['option']['value']]
                    )
            }
        }
    )
)
