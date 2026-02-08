
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/authoring_target/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/schemas/unmarshalled/refiners/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/schemas/parse_tree/transformers/location"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'header': _p_change_context(
            $.__get_entry_deprecated(
                'header',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "header"],
                    ),
                },
            ),
            ($) => _p.optional.from.optional(
                v_unmarshalled_from_parse_tree.Optional(
                    $,
                    ($) => abort(
                        ['expected an optional', null],
                    ),
                ),
            ).map(
                ($) => Value(
                    $,
                    ($) => abort(
                        $,
                    ),
                ),
            ),
        ),
        'content': _p_change_context(
            $.__get_entry_deprecated(
                'content',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "content"],
                    ),
                },
            ),
            ($) => Value(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'metadata': _p_change_context(
            $.__get_entry_deprecated(
                'metadata',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "metadata"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.Group(
                    $,
                    ($) => abort(
                        ['expected a group', null],
                    ),
                ),
                ($) => ({
                    'comments': _p_change_context(
                        $.__get_entry_deprecated(
                            'comments',
                            {
                                no_such_entry: ($) => abort(
                                    ['no such entry', "comments"],
                                ),
                            },
                        ),
                        ($) => _p.list.from.list(
                            v_unmarshalled_from_parse_tree.List(
                                $,
                                ($) => abort(
                                    ['expected a list', null],
                                ),
                            ),
                        ).map(
                            ($) => v_unmarshalled_from_parse_tree.Text(
                                $,
                                ($) => abort(
                                    ['expected a text', null],
                                ),
                            ),
                        ),
                    ),
                }),
            ),
        ),
        'data': _p_change_context(
            $.__get_entry_deprecated(
                'data',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "data"],
                    ),
                },
            ),
            ($) => _p_change_context(
                v_unmarshalled_from_parse_tree.State(
                    $,
                    ($) => abort(
                        ['expected a state', null],
                    ),
                ),
                ($) => _p.decide.text(
                    $['option']['value'],
                    ($t): t_out.Value.data => {
                        switch ($t) {
                            case 'missing':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['missing', v_unmarshalled_from_parse_tree.Nothing(
                                        $,
                                        ($) => abort(
                                            ['expected a nothing', null],
                                        ),
                                    )],
                                )
                            case 'include':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['include', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'path': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'path',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "path"],
                                                        ),
                                                    },
                                                ),
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        ['expected a text', null],
                                                    ),
                                                ),
                                            ),
                                        }),
                                    )],
                                )
                            case 'concrete':
                                return _p_change_context(
                                    $['value'],
                                    ($) => ['concrete', _p_change_context(
                                        v_unmarshalled_from_parse_tree.Group(
                                            $,
                                            ($) => abort(
                                                ['expected a group', null],
                                            ),
                                        ),
                                        ($) => ({
                                            'type': _p_change_context(
                                                $.__get_entry_deprecated(
                                                    'type',
                                                    {
                                                        no_such_entry: ($) => abort(
                                                            ['no such entry', "type"],
                                                        ),
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            ['expected a state', null],
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['value'],
                                                        ($t): t_out.Value.data.concrete.type_ => {
                                                            switch ($t) {
                                                                case 'dictionary':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['dictionary', _p.dictionary.from.dictionary(
                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a dictionary', null],
                                                                                ),
                                                                            ),
                                                                        ).map(
                                                                            ($, id) => _p.optional.from.optional(
                                                                                v_unmarshalled_from_parse_tree.Optional(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        ['expected an optional', null],
                                                                                    ),
                                                                                ),
                                                                            ).map(
                                                                                ($) => Value(
                                                                                    $,
                                                                                    ($) => abort(
                                                                                        $,
                                                                                    ),
                                                                                ),
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'group':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['group', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Value.data.concrete.type_.group => {
                                                                                    switch ($t) {
                                                                                        case 'concise':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['concise', _p.list.from.list(
                                                                                                    v_unmarshalled_from_parse_tree.List(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a list', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ).map(
                                                                                                    ($) => Value(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            $,
                                                                                                        ),
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'verbose':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['verbose', _p.dictionary.from.dictionary(
                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a dictionary', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                ).map(
                                                                                                    ($, id) => _p.optional.from.optional(
                                                                                                        v_unmarshalled_from_parse_tree.Optional(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                ['expected an optional', null],
                                                                                                            ),
                                                                                                        ),
                                                                                                    ).map(
                                                                                                        ($) => Value(
                                                                                                            $,
                                                                                                            ($) => abort(
                                                                                                                $,
                                                                                                            ),
                                                                                                        ),
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'list':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['list', _p.list.from.list(
                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a list', null],
                                                                                ),
                                                                            ),
                                                                        ).map(
                                                                            ($) => Value(
                                                                                $,
                                                                                ($) => abort(
                                                                                    $,
                                                                                ),
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'nothing':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                ['expected a nothing', null],
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'optional':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['optional', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Value.data.concrete.type_.optional => {
                                                                                    switch ($t) {
                                                                                        case 'not set':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null],
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['set', Value(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        $,
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'state':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['state', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a state', null],
                                                                                ),
                                                                            ),
                                                                            ($) => _p.decide.text(
                                                                                $['option']['value'],
                                                                                ($t): t_out.Value.data.concrete.type_.state => {
                                                                                    switch ($t) {
                                                                                        case 'missing data':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['missing data', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                    $,
                                                                                                    ($) => abort(
                                                                                                        ['expected a nothing', null],
                                                                                                    ),
                                                                                                )],
                                                                                            )
                                                                                        case 'set':
                                                                                            return _p_change_context(
                                                                                                $['value'],
                                                                                                ($) => ['set', _p_change_context(
                                                                                                    v_unmarshalled_from_parse_tree.Group(
                                                                                                        $,
                                                                                                        ($) => abort(
                                                                                                            ['expected a group', null],
                                                                                                        ),
                                                                                                    ),
                                                                                                    ($) => ({
                                                                                                        'option': _p_change_context(
                                                                                                            $.__get_entry_deprecated(
                                                                                                                'option',
                                                                                                                {
                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                        ['no such entry', "option"],
                                                                                                                    ),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a text', null],
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        'value': _p_change_context(
                                                                                                            $.__get_entry_deprecated(
                                                                                                                'value',
                                                                                                                {
                                                                                                                    no_such_entry: ($) => abort(
                                                                                                                        ['no such entry', "value"],
                                                                                                                    ),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Value(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                    }),
                                                                                                )],
                                                                                            )
                                                                                        default:
                                                                                            return abort(
                                                                                                ['unknown option', $['option']['value']],
                                                                                            )
                                                                                    }
                                                                                },
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'text':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['text', _p_change_context(
                                                                            v_unmarshalled_from_parse_tree.Group(
                                                                                $,
                                                                                ($) => abort(
                                                                                    ['expected a group', null],
                                                                                ),
                                                                            ),
                                                                            ($) => ({
                                                                                'value': _p_change_context(
                                                                                    $.__get_entry_deprecated(
                                                                                        'value',
                                                                                        {
                                                                                            no_such_entry: ($) => abort(
                                                                                                ['no such entry', "value"],
                                                                                            ),
                                                                                        },
                                                                                    ),
                                                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                                                        $,
                                                                                        ($) => abort(
                                                                                            ['expected a text', null],
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                                'delimiter': _p_change_context(
                                                                                    $.__get_entry_deprecated(
                                                                                        'delimiter',
                                                                                        {
                                                                                            no_such_entry: ($) => abort(
                                                                                                ['no such entry', "delimiter"],
                                                                                            ),
                                                                                        },
                                                                                    ),
                                                                                    ($) => _p_change_context(
                                                                                        v_unmarshalled_from_parse_tree.State(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                ['expected a state', null],
                                                                                            ),
                                                                                        ),
                                                                                        ($) => _p.decide.text(
                                                                                            $['option']['value'],
                                                                                            ($t): t_out.Value.data.concrete.type_.text.delimiter => {
                                                                                                switch ($t) {
                                                                                                    case 'none':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null],
                                                                                                                ),
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'quote':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ['quote', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null],
                                                                                                                ),
                                                                                                            )],
                                                                                                        )
                                                                                                    case 'backtick':
                                                                                                        return _p_change_context(
                                                                                                            $['value'],
                                                                                                            ($) => ['backtick', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    ['expected a nothing', null],
                                                                                                                ),
                                                                                                            )],
                                                                                                        )
                                                                                                    default:
                                                                                                        return abort(
                                                                                                            ['unknown option', $['option']['value']],
                                                                                                        )
                                                                                                }
                                                                                            },
                                                                                        ),
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        )],
                                                                    )
                                                                default:
                                                                    return abort(
                                                                        ['unknown option', $['option']['value']],
                                                                    )
                                                            }
                                                        },
                                                    ),
                                                ),
                                            ),
                                        }),
                                    )],
                                )
                            default:
                                return abort(
                                    ['unknown option', $['option']['value']],
                                )
                        }
                    },
                ),
            ),
        ),
    }),
)
