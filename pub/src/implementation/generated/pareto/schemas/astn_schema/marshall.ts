import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/astn_schema/marshall"


export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'node': _pa.cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'ordered': _pa.cc($['ordered'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['boolean'](
            $,
            null
        ),
    })]),
})]
export const Globals: _i_signatures._T_Globals = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'text types': _pa.cc($['text types'], ($) => ['dictionary', $.map(($) => Text_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
})]
export const Group: _i_signatures._T_Group = ($, $p) => ['dictionary', $.map(($) => Type_Node(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Imports: _i_signatures._T_Imports = ($, $p) => ['dictionary', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'schema': _pa.cc($['schema'], ($) => ['nothing', null]),
    'schema set child': _pa.cc($['schema set child'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $['key'],
    })]),
})])]
export const Schema: _i_signatures._T_Schema = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'globals': _pa.cc($['globals'], ($) => Globals(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'imports': _pa.cc($['imports'], ($) => Imports(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'types': _pa.cc($['types'], ($) => Types(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'schema': return _pa.ss($, ($) => ({
            'state': "schema",
            'value': Schema(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'set': return _pa.ss($, ($) => ({
            'state': "set",
            'value': Schemas(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Schemas: _i_signatures._T_Schemas = ($, $p) => ['dictionary', $['dictionary'].map(($) => Schema_Tree(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'multi line': return _pa.ss($, ($) => ({
                'state': "multi line",
                'value': ['nothing', null],
            }))
            case 'single line': return _pa.ss($, ($) => ({
                'state': "single line",
                'value': ['nothing', null],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Type: _i_signatures._T_Type = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'node': _pa.cc($['node'], ($) => Type_Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'component': return _pa.ss($, ($) => ({
            'state': "component",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'external': return _pa.ss($, ($) => ({
                        'state': "external",
                        'value': ['verbose group', _pa.dictionary_literal({
                            'import': _pa.cc($['import'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                            'type': _pa.cc($['type'], ($) => ['text', ({
                                'delimiter': ['backtick', null],
                                'value': $['key'],
                            })]),
                        })],
                    }))
                    case 'internal': return _pa.ss($, ($) => ({
                        'state': "internal",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'internal cyclic': return _pa.ss($, ($) => ({
                        'state': "internal cyclic",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        case 'dictionary': return _pa.ss($, ($) => ({
            'state': "dictionary",
            'value': Dictionary(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'group': return _pa.ss($, ($) => ({
            'state': "group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'list': return _pa.ss($, ($) => ({
            'state': "list",
            'value': ['verbose group', _pa.dictionary_literal({
                'node': _pa.cc($['node'], ($) => Type_Node(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': Type_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'reference': return _pa.ss($, ($) => ({
            'state': "reference",
            'value': ['verbose group', _pa.dictionary_literal({
                'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'derived': return _pa.ss($, ($) => ({
                            'state': "derived",
                            'value': ['nothing', null],
                        }))
                        case 'selected': return _pa.ss($, ($) => ({
                            'state': "selected",
                            'value': ['nothing', null],
                        }))
                        default: return _pa.au($[0])
                    }
                })]),
            })],
        }))
        case 'state group': return _pa.ss($, ($) => ({
            'state': "state group",
            'value': ['dictionary', $.map(($) => Type_Node(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ))],
        }))
        case 'text': return _pa.ss($, ($) => ({
            'state': "text",
            'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'global': return _pa.ss($, ($) => ({
                        'state': "global",
                        'value': ['text', ({
                            'delimiter': ['backtick', null],
                            'value': $['key'],
                        })],
                    }))
                    case 'local': return _pa.ss($, ($) => ({
                        'state': "local",
                        'value': Text_Type(
                            $,
                            {
                                'value serializers': $p['value serializers'],
                            }
                        ),
                    }))
                    default: return _pa.au($[0])
                }
            })],
        }))
        default: return _pa.au($[0])
    }
})]
export const Types: _i_signatures._T_Types = ($, $p) => ['dictionary', $['dictionary'].map(($) => Type(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
