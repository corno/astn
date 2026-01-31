
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['set', Schemas(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['schema', Schema(
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

export const Schemas: t_signatures.Schemas = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l dictionary': _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null]
            )
        ),
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'l entry': Schema_Tree(
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
            ($) => Modules(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Imports: t_signatures.Imports = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l dictionary': _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null]
            )
        ),
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'l entry': _p_cc(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l reference': v_unmarshalled_from_parse_tree.Text(
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
                'l location': v_parse_tree_to_location.Value(
                    $
                )['start']['relative'],
                'l dictionary': _p.dictionary.map(
                    v_unmarshalled_from_parse_tree.Dictionary(
                        $,
                        ($) => abort(
                            ['expected a dictionary', null]
                        )
                    ),
                    ($, id) => ({
                        'l location': v_parse_tree_to_location.Value(
                            $
                        )['start']['relative'],
                        'l entry': Text_Type(
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

export const Modules: t_signatures.Modules = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l dictionary': _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null]
            )
        ),
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'l entry': Module(
                $,
                ($) => abort(
                    $
                )
            ),
        })
    ),
})

export const Module: t_signatures.Module = ($, abort) => _p_cc(
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
            ($) => Value(
                $,
                ($) => abort(
                    $
                )
            )
        ),
    })
)

export const Value: t_signatures.Value = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            ['expected a state', null]
        )
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Value => {
            switch ($t) {
                case 'component':
                    return _p_cc(
                        $['value'],
                        ($) => ({
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['component', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Value.l_state.component => {
                                        switch ($t) {
                                            case 'external':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['external', _p_cc(
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
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
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
                                                                        'l location': v_parse_tree_to_location.Value(
                                                                            $
                                                                        )['start']['relative'],
                                                                        'l reference': v_unmarshalled_from_parse_tree.Text(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['internal', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['internal cyclic', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['dictionary', Dictionary(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['group', Group(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['list', _p_cc(
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
                                        ($) => Value(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['nothing', v_unmarshalled_from_parse_tree.Nothing(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['optional', Value(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['state', {
                                'l location': v_parse_tree_to_location.Value(
                                    $
                                )['start']['relative'],
                                'l dictionary': _p.dictionary.map(
                                    v_unmarshalled_from_parse_tree.Dictionary(
                                        $,
                                        ($) => abort(
                                            ['expected a dictionary', null]
                                        )
                                    ),
                                    ($, id) => ({
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l entry': Value(
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
                            'l location': v_parse_tree_to_location.Value(
                                $
                            )['start']['relative'],
                            'l state': ['text', _p_cc(
                                v_unmarshalled_from_parse_tree.State(
                                    $,
                                    ($) => abort(
                                        ['expected a state', null]
                                    )
                                ),
                                ($) => _p.decide.text(
                                    $['option']['value'],
                                    ($t): t_out.Value.l_state.text => {
                                        switch ($t) {
                                            case 'global':
                                                return _p_cc(
                                                    $['value'],
                                                    ($) => ({
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['global', {
                                                            'l location': v_parse_tree_to_location.Value(
                                                                $
                                                            )['start']['relative'],
                                                            'l reference': v_unmarshalled_from_parse_tree.Text(
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
                                                        'l location': v_parse_tree_to_location.Value(
                                                            $
                                                        )['start']['relative'],
                                                        'l state': ['local', Text_Type(
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
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l state': ['multi line', v_unmarshalled_from_parse_tree.Nothing(
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
                                        'l location': v_parse_tree_to_location.Value(
                                            $
                                        )['start']['relative'],
                                        'l state': ['single line', v_unmarshalled_from_parse_tree.Nothing(
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

export const Group: t_signatures.Group = ($, abort) => ({
    'l location': v_parse_tree_to_location.Value(
        $
    )['start']['relative'],
    'l dictionary': _p.dictionary.map(
        v_unmarshalled_from_parse_tree.Dictionary(
            $,
            ($) => abort(
                ['expected a dictionary', null]
            )
        ),
        ($, id) => ({
            'l location': v_parse_tree_to_location.Value(
                $
            )['start']['relative'],
            'l entry': Value(
                $,
                ($) => abort(
                    $
                )
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
            ($) => Value(
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
