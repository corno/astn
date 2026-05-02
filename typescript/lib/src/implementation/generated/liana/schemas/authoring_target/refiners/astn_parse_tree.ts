
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/signatures/refiners/astn_parse_tree"

import * as t_out from "../../../../../../interface/generated/liana/schemas/authoring_target/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "liana-core/dist/implementation/manual/transformers/parse_tree/start_token_range"

export const Document: t_signatures.Document = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "header": null,
                    "content": null,
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
                'header': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'header',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p.optional.from.optional(
                        v_unmarshalled_from_parse_tree.Optional(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )['optional'],
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
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'content',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => Value(
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

export const Value: t_signatures.Value = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "data": null,
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
                'data': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'data',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p_change_context(
                        v_unmarshalled_from_parse_tree.State(
                            $,
                            ($) => abort(
                                $,
                            ),
                        ),
                        ($) => _p.decide.text(
                            $['option']['token']['value'],
                            ($t): t_out.Value.data => {
                                switch ($t) {
                                    case 'missing':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['missing', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "#": null,
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
                                                            '#': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': '#',
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Token_Trivia(
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
                                    case 'include':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['include', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "@": null,
                                                                "path": null,
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
                                                            '@': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': '@',
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => Token_Trivia(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                ),
                                                            ),
                                                            'path': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'path',
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
                                    case 'concrete':
                                        return _p_change_context(
                                            $['value'],
                                            ($) => ['concrete', _p_change_context(
                                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'expected properties': _p.dictionary.literal(
                                                            {
                                                                "type": null,
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
                                                            'type': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'type',
                                                                        'subdocument context': _p.optional.literal.not_set(),
                                                                    },
                                                                ),
                                                                ($) => _p_change_context(
                                                                    v_unmarshalled_from_parse_tree.State(
                                                                        $,
                                                                        ($) => abort(
                                                                            $,
                                                                        ),
                                                                    ),
                                                                    ($) => _p.decide.text(
                                                                        $['option']['token']['value'],
                                                                        ($t): t_out.Value.data.concrete.type_ => {
                                                                            switch ($t) {
                                                                                case 'dictionary':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['dictionary', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                        {
                                                                                                            "{": null,
                                                                                                            "entries": null,
                                                                                                            "}": null,
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
                                                                                                        '{': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': '{',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        'entries': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'entries',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => ID_Value_Pairs(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        '}': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': '}',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
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
                                                                                case 'group':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['group', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): t_out.Value.data.concrete.type_.group => {
                                                                                                    switch ($t) {
                                                                                                        case 'concise':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['concise', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "<": null,
                                                                                                                                    "properties": null,
                                                                                                                                    ">": null,
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
                                                                                                                                '<': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': '<',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Token_Trivia(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'properties': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'properties',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Items(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                '>': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': '>',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Token_Trivia(
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
                                                                                                        case 'verbose':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['verbose', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "(": null,
                                                                                                                                    "properties": null,
                                                                                                                                    ")": null,
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
                                                                                                                                '(': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': '(',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Token_Trivia(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'properties': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'properties',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => ID_Value_Pairs(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                ')': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': ')',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Token_Trivia(
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
                                                                                        )],
                                                                                    )
                                                                                case 'list':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['list', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                        {
                                                                                                            "[": null,
                                                                                                            "items": null,
                                                                                                            "]": null,
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
                                                                                                        '[': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': '[',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        'items': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'items',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Items(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        ']': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': ']',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
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
                                                                                case 'nothing':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['nothing', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                        {
                                                                                                            "~": null,
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
                                                                                                        '~': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': '~',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
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
                                                                                case 'optional':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['optional', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): t_out.Value.data.concrete.type_.optional => {
                                                                                                    switch ($t) {
                                                                                                        case 'not set':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['not set', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "_": null,
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
                                                                                                                                '_': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': '_',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Token_Trivia(
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
                                                                                                        case 'set':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['set', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                        {
                                                                                                                            'expected properties': _p.dictionary.literal(
                                                                                                                                {
                                                                                                                                    "*": null,
                                                                                                                                    "value": null,
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
                                                                                                                                '*': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': '*',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Token_Trivia(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    ),
                                                                                                                                ),
                                                                                                                                'value': _p_change_context(
                                                                                                                                    v_unmarshalled_from_parse_tree.Property(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                        {
                                                                                                                                            'id': 'value',
                                                                                                                                            'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    ($) => Value(
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
                                                                                        )],
                                                                                    )
                                                                                case 'state':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['state', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                        {
                                                                                                            "|": null,
                                                                                                            "status": null,
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
                                                                                                        '|': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': '|',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        'status': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'status',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => _p.decide.text(
                                                                                                                    $['option']['token']['value'],
                                                                                                                    ($t): t_out.Value.data.concrete.type_.state.status => {
                                                                                                                        switch ($t) {
                                                                                                                            case 'missing':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ['missing', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                            {
                                                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                                                    {
                                                                                                                                                        "#": null,
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
                                                                                                                                                    '#': _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'id': '#',
                                                                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => Token_Trivia(
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
                                                                                                                            case 'set':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ['set', _p_change_context(
                                                                                                                                        v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                                                            $,
                                                                                                                                            ($) => abort(
                                                                                                                                                $,
                                                                                                                                            ),
                                                                                                                                            {
                                                                                                                                                'expected properties': _p.dictionary.literal(
                                                                                                                                                    {
                                                                                                                                                        "option": null,
                                                                                                                                                        "value": null,
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
                                                                                                                                                    'option': _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'id': 'option',
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
                                                                                                                                                    'value': _p_change_context(
                                                                                                                                                        v_unmarshalled_from_parse_tree.Property(
                                                                                                                                                            $,
                                                                                                                                                            ($) => abort(
                                                                                                                                                                $,
                                                                                                                                                            ),
                                                                                                                                                            {
                                                                                                                                                                'id': 'value',
                                                                                                                                                                'subdocument context': _p.optional.literal.not_set(),
                                                                                                                                                            },
                                                                                                                                                        ),
                                                                                                                                                        ($) => Value(
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
                                                                                                    }
                                                                                                },
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'text':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['text', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                        {
                                                                                                            "trivia": null,
                                                                                                            "value": null,
                                                                                                            "delimiter": null,
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
                                                                                                        'trivia': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'trivia',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => Token_Trivia(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                            ),
                                                                                                        ),
                                                                                                        'value': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'value',
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
                                                                                                        'delimiter': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'delimiter',
                                                                                                                    'subdocument context': _p.optional.literal.not_set(),
                                                                                                                },
                                                                                                            ),
                                                                                                            ($) => _p_change_context(
                                                                                                                v_unmarshalled_from_parse_tree.State(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                ),
                                                                                                                ($) => _p.decide.text(
                                                                                                                    $['option']['token']['value'],
                                                                                                                    ($t): t_out.Value.data.concrete.type_.text.delimiter => {
                                                                                                                        switch ($t) {
                                                                                                                            case 'none':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ['none', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                )
                                                                                                                            case 'quote':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ['quote', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                )
                                                                                                                            case 'apostrophe':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ['apostrophe', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
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
            }
        },
    ),
)

export const Token_Trivia: t_signatures.Token_Trivia = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "comments": null,
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
                'comments': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'comments',
                            'subdocument context': _p.optional.literal.not_set(),
                        },
                    ),
                    ($) => _p.list.from.list(
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
                                v_unmarshalled_from_parse_tree.Verbose_Group(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                    {
                                        'expected properties': _p.dictionary.literal(
                                            {
                                                "content": null,
                                                "type": null,
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
                                            'content': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'content',
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
                                            'type': _p_change_context(
                                                v_unmarshalled_from_parse_tree.Property(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                    {
                                                        'id': 'type',
                                                        'subdocument context': _p.optional.literal.not_set(),
                                                    },
                                                ),
                                                ($) => _p_change_context(
                                                    v_unmarshalled_from_parse_tree.State(
                                                        $,
                                                        ($) => abort(
                                                            $,
                                                        ),
                                                    ),
                                                    ($) => _p.decide.text(
                                                        $['option']['token']['value'],
                                                        ($t): t_out.Token_Trivia.comments.L.type_ => {
                                                            switch ($t) {
                                                                case 'line':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['line', v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
                                                                            ),
                                                                        )],
                                                                    )
                                                                case 'block':
                                                                    return _p_change_context(
                                                                        $['value'],
                                                                        ($) => ['block', v_unmarshalled_from_parse_tree.Nothing(
                                                                            $,
                                                                            ($) => abort(
                                                                                $,
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
                                        }
                                    },
                                ),
                            ),
                        ),
                    ),
                ),
            }
        },
    ),
)

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($, abort) => _p.list.from.list(
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
            v_unmarshalled_from_parse_tree.Verbose_Group(
                $,
                ($) => abort(
                    $,
                ),
                {
                    'expected properties': _p.dictionary.literal(
                        {
                            "id": null,
                            "value": null,
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
                        'id': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'id',
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
                        'value': _p_change_context(
                            v_unmarshalled_from_parse_tree.Property(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'id': 'value',
                                    'subdocument context': _p.optional.literal.not_set(),
                                },
                            ),
                            ($) => _p.optional.from.optional(
                                v_unmarshalled_from_parse_tree.Optional(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                )['optional'],
                            ).map(
                                ($) => Value(
                                    $,
                                    ($) => abort(
                                        $,
                                    ),
                                ),
                            ),
                        ),
                    }
                },
            ),
        ),
    ),
)

export const Items: t_signatures.Items = ($, abort) => _p.list.from.list(
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
        ($) => Value(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)
