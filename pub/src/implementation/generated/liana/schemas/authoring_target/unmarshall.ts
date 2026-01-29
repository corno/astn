
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/authoring_target/unmarshall"

import * as t_out from "../../../../../interface/generated/liana/schemas/authoring_target/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Value: t_signatures.Value = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
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
                v_unmarshalled_from_parse_tree.Group(
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
                        ($) => v_unmarshalled_from_parse_tree.List(
                            $,
                            ($) => abort(
                                ['expected a list', null]
                            )
                        ).__l_map(
                            ($) => v_unmarshalled_from_parse_tree.Text(
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
            ($) => _p_cc(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null]
                    )
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Value.data => {
                        switch ($t) {
                            case 'missing':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['missing', v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null]
                                        )
                                    )]
                                )
                            case 'include':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['include', _p_cc(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null]
                                            )
                                        ),
                                        ($) => ({
                                            'path': _p_cc(
                                                $.__get_entry(
                                                    'path',
                                                    ($) => abort(
                                                        ['no such entry', "path"]
                                                    )
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null]
                                                    )
                                                )
                                            ),
                                        })
                                    )]
                                )
                            case 'concrete':
                                return _p_cc(
                                    $['value'],
                                    ($) => ['concrete', _p_cc(
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
                                                        ($t): t_out.Value.data.concrete.type_ => {
                                                            switch ($t) {
                                                                case 'dictionary':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['dictionary', v_unmarshalled_from_parse_tree.Dictionary(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a dictionary', null]
                                                                            )
                                                                        ).__d_map(
                                                                            ($, id) => v_unmarshalled_from_parse_tree.Optional(
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
                                                                        )]
                                                                    )
                                                                case 'group':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['group', _p_cc(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null]
                                                                                )
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Value.data.concrete.type_.group => {
                                                                                    switch ($t) {
                                                                                        case 'concise':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['concise', v_unmarshalled_from_parse_tree.List(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a list', null]
                                                                                                    )
                                                                                                ).__l_map(
                                                                                                    ($) => Value(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $
                                                                                                        )
                                                                                                    )
                                                                                                )]
                                                                                            )
                                                                                        case 'verbose':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['verbose', v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a dictionary', null]
                                                                                                    )
                                                                                                ).__d_map(
                                                                                                    ($, id) => v_unmarshalled_from_parse_tree.Optional(
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
                                                                                                )]
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )
                                                                        )]
                                                                    )
                                                                case 'list':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['list', v_unmarshalled_from_parse_tree.List(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a list', null]
                                                                            )
                                                                        ).__l_map(
                                                                            ($) => Value(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $
                                                                                )
                                                                            )
                                                                        )]
                                                                    )
                                                                case 'nothing':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a nothing', null]
                                                                            )
                                                                        )]
                                                                    )
                                                                case 'optional':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['optional', _p_cc(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null]
                                                                                )
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Value.data.concrete.type_.optional => {
                                                                                    switch ($t) {
                                                                                        case 'not set':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null]
                                                                                                    )
                                                                                                )]
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['set', Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $
                                                                                                    )
                                                                                                )]
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )
                                                                        )]
                                                                    )
                                                                case 'state':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['state', _p_cc(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null]
                                                                                )
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Value.data.concrete.type_.state => {
                                                                                    switch ($t) {
                                                                                        case 'missing data':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['missing data', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null]
                                                                                                    )
                                                                                                )]
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p_cc(
                                                                                                $['value'],
                                                                                                ($) => ['set', _p_cc(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null]
                                                                                                        )
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'option': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'option',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "option"]
                                                                                                                )
                                                                                                            ),
                                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null]
                                                                                                                )
                                                                                                            )
                                                                                                        ),
                                                                                                        'value': _p_cc(
                                                                                                            $.__get_entry(
                                                                                                                'value',
                                                                                                                ($) => abort(
                                                                                                                    ['no such entry', "value"]
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
                                                                                                )]
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']]
                                                                                            )
                                                                                    }
                                                                                }
                                                                            )
                                                                        )]
                                                                    )
                                                                case 'text':
                                                                    return _p_cc(
                                                                        $['value'],
                                                                        ($) => ['text', _p_cc(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null]
                                                                                )
                                                                            ),
                                                                            ($) => ({
                                                                                'value': _p_cc(
                                                                                    $.__get_entry(
                                                                                        'value',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "value"]
                                                                                        )
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null]
                                                                                        )
                                                                                    )
                                                                                ),
                                                                                'delimiter': _p_cc(
                                                                                    $.__get_entry(
                                                                                        'delimiter',
                                                                                        ($) => abort(
                                                                                            ['no such entry', "delimiter"]
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
                                                                                            ($t): t_out.Value.data.concrete.type_.text.delimiter => {
                                                                                                switch ($t) {
                                                                                                    case 'none':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null]
                                                                                                                )
                                                                                                            )]
                                                                                                        )
                                                                                                    case 'quote':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ['quote', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null]
                                                                                                                )
                                                                                                            )]
                                                                                                        )
                                                                                                    case 'backtick':
                                                                                                        return _p_cc(
                                                                                                            $['value'],
                                                                                                            ($) => ['backtick', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null]
                                                                                                                )
                                                                                                            )]
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
                                                                        )]
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
                                    )]
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

export const Document: t_signatures.Document = ($, abort) => _p_cc(
    v_unmarshalled_from_parse_tree.Group(
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
            ($) => v_unmarshalled_from_parse_tree.Optional(
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
