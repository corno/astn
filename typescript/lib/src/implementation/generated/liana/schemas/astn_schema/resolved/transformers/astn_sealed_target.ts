
import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
const p_decide_state = <State, B>($: State,  assign: ($: State) => B) => assign($)
const p_decide_optional = <OV extends p_di.Value, B extends p_di.Value>($: p_di.Optional_Value<OV>,  assign: ($: OV) => B,  otherwise: () => B) => p_.from.optional($).decide(assign, otherwise)
const p_decide_text = <B>($: string,  assign: ($: string) => B) => assign($)

import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'

import _p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as t_signatures from "../../../../../../../interface/generated/liana/schemas/astn_schema/signatures/resolved/transformers/astn_sealed_target"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_primitives_to_text from "liana-core/dist/implementation/manual/transformers/primitives/text"

export const Schema_Tree: t_signatures.Schema_Tree = ($) => ['state', p_decide_state(
    $,
    ($): t_out.Value.state => {
        switch ($[0]) {
            case 'set':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'set',
                        'value': Schemas(
                            $,
                        ),
                    }),
                )
            case 'schema':
                return p_.ss(
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

export const Schemas: t_signatures.Schemas = ($) => ['dictionary', p_.from.dictionary(
    $,
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

export const Imports: t_signatures.Imports = ($) => ['dictionary', p_.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', p_.literal.dictionary(
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
            ($) => ['dictionary', p_.from.dictionary(
                $,
            ).map(
                ($, id) => Text_Type(
                    $,
                ),
            )],
        ),
    },
)]]

export const Modules: t_signatures.Modules = ($) => ['dictionary', p_.from.dictionary(
    $,
).map(
    ($, id) => ['group', ['verbose', p_.literal.dictionary(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'component',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'external':
                                        return p_.ss(
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
                                        return p_.ss(
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
                                        return p_.ss(
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
                return p_.ss(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'group',
                        'value': ['dictionary', p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'list':
                return p_.ss(
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
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'nothing',
                        'value': ['nothing', null],
                    }),
                )
            case 'optional':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'optional',
                        'value': Value(
                            $,
                        ),
                    }),
                )
            case 'state':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'state',
                        'value': ['dictionary', p_.from.dictionary(
                            $,
                        ).map(
                            ($, id) => Value(
                                $,
                            ),
                        )],
                    }),
                )
            case 'text':
                return p_.ss(
                    $,
                    ($) => ({
                        'option': 'text',
                        'value': ['state', p_decide_state(
                            $,
                            ($): t_out.Value.state => {
                                switch ($[0]) {
                                    case 'global':
                                        return p_.ss(
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
                                        return p_.ss(
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
                            return p_.ss(
                                $,
                                ($) => ({
                                    'option': 'multi line',
                                    'value': ['nothing', null],
                                }),
                            )
                        case 'single line':
                            return p_.ss(
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
