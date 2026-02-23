
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/authoring_target/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/authoring_target/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

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
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
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
                            },
                        ),
                        ($) => _p_variables(
                            () => {
                                
                                const var_verbose_group_range = v_parse_tree_to_location.Value(
                                    $['value'],
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
                                            },
                                        ),
                                        ($) => _p.list.from.list(
                                            v_unmarshalled_from_parse_tree.List(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
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
                            $['option']['value'],
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
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
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
                                                    },
                                                ),
                                                ($) => _p_variables(
                                                    () => {
                                                        
                                                        const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                            $['value'],
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
                                                                        $['option']['value'],
                                                                        ($t): t_out.Value.data.concrete.type_ => {
                                                                            switch ($t) {
                                                                                case 'dictionary':
                                                                                    return _p_change_context(
                                                                                        $['value'],
                                                                                        ($) => ['dictionary', _p_change_context(
                                                                                            v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
                                                                                            ),
                                                                                            ($) => _p.dictionary.from.dictionary(
                                                                                                $['entries'],
                                                                                            ).map(
                                                                                                ($, id) => _p.optional.from.optional(
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
                                                                                                                            $,
                                                                                                                        ),
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
                                                                                                                )],
                                                                                                            )
                                                                                                        case 'verbose':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['verbose', _p_change_context(
                                                                                                                    v_unmarshalled_from_parse_tree.Dictionary(
                                                                                                                        $,
                                                                                                                        ($) => abort(
                                                                                                                            $,
                                                                                                                        ),
                                                                                                                    ),
                                                                                                                    ($) => _p.dictionary.from.dictionary(
                                                                                                                        $['entries'],
                                                                                                                    ).map(
                                                                                                                        ($, id) => _p.optional.from.optional(
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
                                                                                                                )],
                                                                                                            )
                                                                                                        default:
                                                                                                            return abort(
                                                                                                                ['liana', {
                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
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
                                                                                        ($) => ['list', _p.list.from.list(
                                                                                            v_unmarshalled_from_parse_tree.List(
                                                                                                $,
                                                                                                ($) => abort(
                                                                                                    $,
                                                                                                ),
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
                                                                                                $['option']['value'],
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
                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
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
                                                                                                $['option']['value'],
                                                                                                ($t): t_out.Value.data.concrete.type_.state => {
                                                                                                    switch ($t) {
                                                                                                        case 'missing data':
                                                                                                            return _p_change_context(
                                                                                                                $['value'],
                                                                                                                ($) => ['missing data', v_unmarshalled_from_parse_tree.Nothing(
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
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    ($) => _p_variables(
                                                                                                                        () => {
                                                                                                                            
                                                                                                                            const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                                                $['value'],
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
                                                                                                                    'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                    'range': v_parse_tree_to_location.Value(
                                                                                                                        $['value'],
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
                                                                                                },
                                                                                            ),
                                                                                            ($) => _p_variables(
                                                                                                () => {
                                                                                                    
                                                                                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                                                                                        $['value'],
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
                                                                                                                    $['option']['value'],
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
                                                                                                                            case 'backtick':
                                                                                                                                return _p_change_context(
                                                                                                                                    $['value'],
                                                                                                                                    ($) => ['backtick', v_unmarshalled_from_parse_tree.Nothing(
                                                                                                                                        $,
                                                                                                                                        ($) => abort(
                                                                                                                                            $,
                                                                                                                                        ),
                                                                                                                                    )],
                                                                                                                                )
                                                                                                                            default:
                                                                                                                                return abort(
                                                                                                                                    ['liana', {
                                                                                                                                        'type': ['state', ['unknown option', $['option']['value']]],
                                                                                                                                        'range': v_parse_tree_to_location.Value(
                                                                                                                                            $['value'],
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
                                                                                            'type': ['state', ['unknown option', $['option']['value']]],
                                                                                            'range': v_parse_tree_to_location.Value(
                                                                                                $['value'],
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
                                                'type': ['state', ['unknown option', $['option']['value']]],
                                                'range': v_parse_tree_to_location.Value(
                                                    $['value'],
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
