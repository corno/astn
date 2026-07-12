
import * as p_ from 'pareto-core/implementation/transformer'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)


import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import type * as s_in from "../../../interface/schemas/resolved.js"
namespace t_signatures {
    export type Schema_Tree = p_.Transformer<
        s_in.Schema_Tree,
        t_out.Value
    >
    export type Schemas = p_.Transformer<
        s_in.Schemas,
        t_out.Value
    >
    export type Schema = p_.Transformer<
        s_in.Schema,
        t_out.Value
    >
    export type Imports = p_.Transformer<
        s_in.Imports,
        t_out.Value
    >
    export type Globals = p_.Transformer<
        s_in.Globals,
        t_out.Value
    >
    export type Modules = p_.Transformer<
        s_in.Modules,
        t_out.Value
    >
    export type Value = p_.Transformer<
        s_in.Value,
        t_out.Value
    >
    export type Text_Type = p_.Transformer<
        s_in.Text_Type,
        t_out.Value
    >
}

import * as t_out from "astn-core/interface/data/sealed_target"

import * as v_primitives_to_text from "liana-core/implementation/transformers/primitives/text"

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'set':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'set',
                        'value': Schemas(
                            $,
                        ),
                    }),
                )
            case 'schema':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'schema',
                        'value': Schema(
                            $,
                        ),
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Schemas: t_signatures.Schemas = ($) => ['dictionary', p_.from.dictionary($,
).map(
    ($, id) => Schema_Tree(
        $,
    ),
)]

export const Schema: t_signatures.Schema = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "imports": p_change_context(
            $['imports'],
            ($) => Imports(
                $,
            ),
        ),
        "globals": p_change_context(
            $['globals'],
            ($) => Globals(
                $,
            ),
        ),
        "types": p_change_context(
            $['types'],
            ($) => Modules(
                $,
            ),
        ),
    },
)]]

export const Imports: t_signatures.Imports = ($) => ['dictionary', p_.from.dictionary($,
).map(
    ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
        {
            "schema set child": p_change_context(
                $['schema set child'],
                ($) => ['text', {
                    'delimiter': ['apostrophe', null],
                    'value': $['l value']['l id'],
                }],
            ),
            "schema": p_change_context(
                $['schema'],
                ($) => ['nothing', null],
            ),
        },
    )]],
)]

export const Globals: t_signatures.Globals = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "text types": p_change_context(
            $['text types'],
            ($) => ['dictionary', p_.from.dictionary($,
            ).map(
                ($, id) => Text_Type(
                    $,
                ),
            )],
        ),
    },
)]]

export const Modules: t_signatures.Modules = ($) => ['dictionary', p_.from.dictionary($,
).map(
    ($, id): t_out.Value => ['group', ['verbose', p_.literal.dictionary(
        {
            "root value": p_change_context(
                $['root value'],
                ($) => Value(
                    $,
                ),
            ),
        },
    )]],
)]

export const Value: t_signatures.Value = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'component':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'external':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'external',
                                                'value': ['group', ['verbose', p_.literal.dictionary(
                                                    {
                                                        "import": p_change_context(
                                                            $['import'],
                                                            ($) => ['text', {
                                                                'delimiter': ['apostrophe', null],
                                                                'value': $['l id'],
                                                            }],
                                                        ),
                                                        "type": p_change_context(
                                                            $['type'],
                                                            ($) => ['text', {
                                                                'delimiter': ['apostrophe', null],
                                                                'value': $['l id'],
                                                            }],
                                                        ),
                                                    },
                                                )]],
                                            }),
                                        )
                                    case 'internal acyclic':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'internal acyclic',
                                                'value': ['text', {
                                                    'delimiter': ['apostrophe', null],
                                                    'value': $['l id'],
                                                }],
                                            }),
                                        )
                                    case 'internal':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'internal',
                                                'value': ['text', {
                                                    'delimiter': ['apostrophe', null],
                                                    'value': $['l id'],
                                                }],
                                            }),
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            case 'dictionary':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'dictionary',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "value": p_change_context(
                                    $['value'],
                                    ($) => Value(
                                        $,
                                    ),
                                ),
                                "ordered": p_change_context(
                                    $['ordered'],
                                    ($) => ['text', {
                                        'delimiter': ['none', null],
                                        'value': v_primitives_to_text.true_false(
                                            $,
                                        ),
                                    }],
                                ),
                            },
                        )]],
                    }),
                )
            case 'group':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id) => Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'list':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'list',
                        'value': ['group', ['verbose', p_.literal.dictionary(
                            {
                                "value": p_change_context(
                                    $['value'],
                                    ($) => Value(
                                        $,
                                    ),
                                ),
                            },
                        )]],
                    }),
                )
            case 'nothing':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'optional':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            case 'state':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['dictionary', p_.from.dictionary($,
                        ).map(
                            ($, id) => Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'text':
                return p_.option(
                    $,
                    ($) => ({
                        'option': 'text',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'global':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'global',
                                                'value': ['text', {
                                                    'delimiter': ['apostrophe', null],
                                                    'value': $['l id'],
                                                }],
                                            }),
                                        )
                                    case 'local':
                                        return p_.option(
                                            $,
                                            ($) => ({
                                                'option': 'local',
                                                'value': Text_Type(
                                                    $,
                                                ),
                                            }),
                                        )
                                    default:
                                        return p_.au(
                                            $[0],
                                        )
                                }
                            },
                        )],
                    }),
                )
            default:
                return p_.au(
                    $[0],
                )
        }
    },
)]

export const Text_Type: t_signatures.Text_Type = ($) => ['group', ['verbose', p_.literal.dictionary(
    {
        "type": p_change_context(
            $['type'],
            ($) => ['state', p_decide_state(
                $,
                ($): t_out.Value.state => {
                    switch ($[0]) {
                        case 'multi line':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'multi line',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'single line':
                            return p_.option(
                                $,
                                ($) => ({
                                    'option': 'single line',
                                    'value': ['nothing', null],
                                }),
                            )
                        default:
                            return p_.au(
                                $[0],
                            )
                    }
                },
            )],
        ),
    },
)]]
