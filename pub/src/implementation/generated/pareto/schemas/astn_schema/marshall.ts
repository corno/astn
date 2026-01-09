import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/astn_schema/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Schemas: _i_signatures._T_Schemas = ($, $p) => ['dictionary', $['dictionary'].map(($) => Schema_Tree(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => ['verbose group', _p.dictionary.literal({
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'multi line': return _p.ss($, ($) => ({
                'state': "multi line",
                'value': ['nothing', null],
            }))
            case 'single line': return _p.ss($, ($) => ({
                'state': "single line",
                'value': ['nothing', null],
            }))
            default: return _p.au($[0])
        }
    })]),
})]
export const Globals: _i_signatures._T_Globals = ($, $p) => ['verbose group', _p.dictionary.literal({
    'text types': _p.deprecated_cc($['text types'], ($) => ['dictionary', $.map(($) => Text_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
})]
export const Type: _i_signatures._T_Type = ($, $p) => ['verbose group', _p.dictionary.literal({
    'node': _p.deprecated_cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Types: _i_signatures._T_Types = ($, $p) => ['dictionary', $['dictionary'].map(($) => Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Schema: _i_signatures._T_Schema = ($, $p) => ['verbose group', _p.dictionary.literal({
    'imports': _p.deprecated_cc($['imports'], ($) => Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'globals': _p.deprecated_cc($['globals'], ($) => Globals(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'types': _p.deprecated_cc($['types'], ($) => Types(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'set': return _p.ss($, ($) => ({
            'state': "set",
            'value': Schemas(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'schema': return _p.ss($, ($) => ({
            'state': "schema",
            'value': Schema(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _p.au($[0])
    }
})]
export const Imports: _i_signatures._T_Imports = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _p.dictionary.literal({
    'schema set child': _p.deprecated_cc($['schema set child'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]),
    'schema': _p.deprecated_cc($['schema'], ($) => ['nothing', null]),
})])]
export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => ['verbose group', _p.dictionary.literal({
    'node': _p.deprecated_cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'ordered': _p.deprecated_cc($['ordered'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Group: _i_signatures._T_Group = ($, $p) => ['dictionary', $.map(($) => Type_Node(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'component': return _p.ss($, ($) => ({
            'state': "component",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => ({
                        'state': "external",
                        'value': ['verbose group', _p.dictionary.literal({
                            'import': _p.deprecated_cc($['import'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'type': _p.deprecated_cc($['type'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'internal': return _p.ss($, ($) => ({
                        'state': "internal",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'internal cyclic': return _p.ss($, ($) => ({
                        'state': "internal cyclic",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'dictionary': return _p.ss($, ($) => ({
            'state': "dictionary",
            'value': Dictionary(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'group': return _p.ss($, ($) => ({
            'state': "group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'list': return _p.ss($, ($) => ({
            'state': "list",
            'value': ['verbose group', _p.dictionary.literal({
                'node': _p.deprecated_cc($['node'], ($) => Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'nothing': return _p.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'optional': return _p.ss($, ($) => ({
            'state': "optional",
            'value': Type_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'state group': return _p.ss($, ($) => ({
            'state': "state group",
            'value': ['dictionary', $.map(($) => Type_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'text': return _p.ss($, ($) => ({
            'state': "text",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'global': return _p.ss($, ($) => ({
                        'state': "global",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'local': return _p.ss($, ($) => ({
                        'state': "local",
                        'value': Text_Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        default: return _p.au($[0])
    }
})]
