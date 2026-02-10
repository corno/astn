
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/ide/data"

import * as v_deserialize_number from "liana-core/dist/implementation/manual/primitives/integer/deserializers/decimal"

import * as v_deserialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/deserializers/true_false"

import * as v_unmarshalled_from_parse_tree from "astn-core/dist/implementation/manual/refiners/unmarshalled/parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const Text_Edits: t_signatures.Text_Edits = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            ['expected a list', null],
        ),
    ),
).map(
    ($) => _p_change_context(
        v_unmarshalled_from_parse_tree.State(
            $,
            ($) => abort(
                ['expected a state', null],
            ),
        ),
        ($) => _p.decide.text(
            $['option']['value'],
            ($t): t_out.Text_Edits.L => {
                switch ($t) {
                    case 'insert':
                        return _p_change_context(
                            $['value'],
                            ($) => ['insert', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'location': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'location',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "location"],
                                                ),
                                            },
                                        ),
                                        ($) => Relative_Location(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'text': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'text',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "text"],
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
                    case 'replace':
                        return _p_change_context(
                            $['value'],
                            ($) => ['replace', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'range': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'range',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "range"],
                                                ),
                                            },
                                        ),
                                        ($) => Relative_Range(
                                            $,
                                            ($) => abort(
                                                $,
                                            ),
                                        ),
                                    ),
                                    'text': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'text',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "text"],
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
                    case 'delete':
                        return _p_change_context(
                            $['value'],
                            ($) => ['delete', _p_change_context(
                                v_unmarshalled_from_parse_tree.Group(
                                    $,
                                    ($) => abort(
                                        ['expected a group', null],
                                    ),
                                ),
                                ($) => ({
                                    'range': _p_change_context(
                                        $.__get_entry_deprecated(
                                            'range',
                                            {
                                                no_such_entry: ($) => abort(
                                                    ['no such entry', "range"],
                                                ),
                                            },
                                        ),
                                        ($) => Relative_Range(
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
    ),
)

export const Relative_Range: t_signatures.Relative_Range = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'start': _p_change_context(
            $.__get_entry_deprecated(
                'start',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "start"],
                    ),
                },
            ),
            ($) => Relative_Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
        'end': _p_change_context(
            $.__get_entry_deprecated(
                'end',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "end"],
                    ),
                },
            ),
            ($) => Relative_Location(
                $,
                ($) => abort(
                    $,
                ),
            ),
        ),
    }),
)

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($, abort) => _p.dictionary.from.dictionary(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            ['expected a dictionary', null],
        ),
    ),
).map(
    ($, id) => v_unmarshalled_from_parse_tree.Text(
        $,
        ($) => abort(
            ['expected a text', null],
        ),
    ),
)

export const Relative_Location: t_signatures.Relative_Location = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Group(
        $,
        ($) => abort(
            ['expected a group', null],
        ),
    ),
    ($) => ({
        'line': _p_change_context(
            $.__get_entry_deprecated(
                'line',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "line"],
                    ),
                },
            ),
            ($) => v_deserialize_number.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid number', null],
                ),
            ),
        ),
        'column': _p_change_context(
            $.__get_entry_deprecated(
                'column',
                {
                    no_such_entry: ($) => abort(
                        ['no such entry', "column"],
                    ),
                },
            ),
            ($) => v_deserialize_number.deserialize(
                _p_list_from_text(
                    v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            ['expected a text', null],
                        ),
                    ),
                    ($) => $,
                ),
                ($) => abort(
                    ['not a valid number', null],
                ),
            ),
        ),
    }),
)
