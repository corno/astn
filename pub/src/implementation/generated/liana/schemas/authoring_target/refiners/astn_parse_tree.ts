
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
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
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
                            'document resource identifier': "dummy dri",
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
                    "metadata": null,
                    "data": null,
                },
            ),
            'document resource identifier': "dummy dri",
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
                {
                    'document resource identifier': "dummy dri",
                },
            )
            return {
                'metadata': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'metadata',
                            'document resource identifier': "dummy dri",
                        },
                    ),
                    ($) => _p_change_context(
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
                                'document resource identifier': "dummy dri",
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
                                    {
                                        'document resource identifier': "dummy dri",
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
                                                'document resource identifier': "dummy dri",
                                            },
                                        ),
                                        ($) => _p.list.from.list(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'document resource identifier': "dummy dri",
                                                },
                                            )['items'],
                                        ).map(
                                            ($) => _p_change_context(
                                                $['value'],
                                                ($) => v_unmarshalled_from_parse_tree.Text(
                                                    $,
                                                    ($) => abort(
                                                        $,
                                                    ),
                                                ),
                                            ),
                                        ),
                                    ),
                                }
                            },
                        ),
                    ),
                ),
                'data': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'data',
                            'document resource identifier': "dummy dri",
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
                                            ($) => ['missing', v_unmarshalled_from_parse_tree.Nothing(
                                                $,
                                                ($) => abort(
                                                    $,
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
                                                                "path": null,
                                                            },
                                                        ),
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'document resource identifier': "dummy dri",
                                                            },
                                                        )
                                                        return {
                                                            'path': _p_change_context(
                                                                v_unmarshalled_from_parse_tree.Property(
                                                                    $,
                                                                    ($) => abort(
                                                                        $,
                                                                    ),
                                                                    {
                                                                        'id': 'path',
                                                                        'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
                                                            {
                                                                'document resource identifier': "dummy dri",
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
                                                                        'document resource identifier': "dummy dri",
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
                                                                                        ($) => ['dictionary', ID_Value_Pairs(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ($) => ['concise', Items(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
                                                                                                                    ),
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'verbose':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['verbose', ID_Value_Pairs(
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
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                        ($) => ['list', Items(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
                                                                                            ),
                                                                                        )],
                                                                                    )
                                                                                case 'nothing':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['nothing', v_unmarshalled_from_parse_tree.Nothing(
                                                                                            $,
                                                                                            ($) => abort(
                                                                                                $,
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
                                                                                                                ($) => ['not set', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
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
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['token']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
                                                                                                                        {
                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                            v_unmarshalled_from_parse_tree.State(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.decide.text(
                                                                                                $['option']['token']['value'],
                                                                                                ($t): t_out.Value.data.concrete.type_.state => {
                                                                                                    switch ($t) {
                                                                                                        case 'missing':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['missing', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                    $,
                                                                                                                    ($) => abort(
                                                                                                                        $,
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
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
                                                                                                                                {
                                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                                            'document resource identifier': "dummy dri",
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
                                                                                                                            'document resource identifier': "dummy dri",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                }],
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
                                                                                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                                {
                                                                                                    'expected properties': _p.dictionary.literal(
                                                                                                        {
                                                                                                            "value": null,
                                                                                                            "delimiter": null,
                                                                                                        },
                                                                                                    ),
                                                                                                    'document resource identifier': "dummy dri",
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_variables(
                                                                                                () => {
                                                                                                    
                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                        $['value'],
                                                                                                        {
                                                                                                            'document resource identifier': "dummy dri",
                                                                                                        },
                                                                                                    )
                                                                                                    return {
                                                                                                        'value': _p_change_context(
                                                                                                            v_unmarshalled_from_parse_tree.Property(
                                                                                                                $,
                                                                                                                ($) => abort(
                                                                                                                    $,
                                                                                                                ),
                                                                                                                {
                                                                                                                    'id': 'value',
                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                    'document resource identifier': "dummy dri",
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
                                                                                                                                                'document resource identifier': "dummy dri",
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
                                                                                                    'document resource identifier': "dummy dri",
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
                                                        'document resource identifier': "dummy dri",
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

export const ID_Value_Pairs: t_signatures.ID_Value_Pairs = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
        {
            'document resource identifier': "dummy dri",
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
                    'document resource identifier': "dummy dri",
                },
            ),
            ($) => _p_variables(
                () => {
                    
                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                        $['value'],
                        {
                            'document resource identifier': "dummy dri",
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
                                    'document resource identifier': "dummy dri",
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
                                    'document resource identifier': "dummy dri",
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
            'document resource identifier': "dummy dri",
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
