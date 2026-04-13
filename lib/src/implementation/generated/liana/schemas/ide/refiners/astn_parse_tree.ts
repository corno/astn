
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/ide/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Text_Edits: t_signatures.Text_Edits = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => _p_change_context(
            v_unmarshalled_from_parse_tree.State(
                $,
                ($) => abort(
                    $,
                ),
            ),
            ($) => _p.decide.text(
                $['option']['token']['value'],
                ($t): t_out.Text_Edits.L => {
                    switch ($t) {
                        case 'insert':
                            return _p_change_context(
                                $['value'],
                                ($) => ['insert', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "location": null,
                                                    "text": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            )
                                            return {
                                                'location': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'location',
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'text',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'replace':
                            return _p_change_context(
                                $['value'],
                                ($) => ['replace', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "range": null,
                                                    "text": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            )
                                            return {
                                                'range': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'range',
                                                            'subdocument context': _p.optional.literal.not_set(),
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
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'text',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => v_unmarshalled_from_parse_tree.Text(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }
                                        },
                                    ),
                                )],
                            )
                        case 'delete':
                            return _p_change_context(
                                $['value'],
                                ($) => ['delete', _p_change_context(
                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                        $,
                                        ($) => abort(
                                            $,
                                        ),
                                        {
                                            'expected properties': _p.dictionary.literal(
                                                {
                                                    "range": null,
                                                },
                                            ),
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                    ($) => _p_variables(
                                        () => {
                                            
                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                $['value'],
                                                {
                                                    'subdocument context': _p.optional.literal.not_set(),
                                                },
                                            )
                                            return {
                                                'range': _p_change_context(
                                                    v_unmarshalled_from_parse_tree.Property(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                        {
                                                            'id': 'range',
                                                            'subdocument context': _p.optional.literal.not_set(),
                                                        },
                                                    ),
                                                    ($) => Relative_Range(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                ),
                                            }
                                        },
                                    ),
                                )],
                            )
                        default:
                            return abort(
                                ['liana', {
                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                    'range': v_parse_tree_to_location.Value(
                                        $['value'],
                                        {
                                            'subdocument context': _p.optional.literal.not_set(),
                                        },
                                    ),
                                }],
                            )
                    }
                },
            ),
        ),
    ),
)

export const Relative_Range: t_signatures.Relative_Range = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "start": null,
                    "end": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'start': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                            'subdocument context': _p.optional.literal.not_set(),
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
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'end',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => Relative_Location(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Dictionary(
        $,
        ($) => abort(
            $,
        ),
        {
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p.dictionary.from.dictionary(
        $['entries'],
    ).map(
        ($, id) => v_unmarshalled_from_parse_tree.Text(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Relative_Location: t_signatures.Relative_Location = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "line": null,
                    "column": null,
                },
            ),
            'subdocument context': _p.optional.literal.not_set(),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'subdocument context': _p.optional.literal.not_set(),
                },
            )
            return {
                'line': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'line',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Number(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['decimal', null],
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                ),
                'column': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'column',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Number(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['decimal', null],
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                ),
            }
        },
    ),
)
