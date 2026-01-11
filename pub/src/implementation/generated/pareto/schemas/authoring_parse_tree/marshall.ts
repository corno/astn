import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_r_token from "../token/marshall"


export const Structural_Token: _i_signatures._T_Structural_Token = ($, $p) => ['verbose group', _p.dictionary.literal({
    'trailing trivia': _p.deprecated_cc($['trailing trivia'], ($) => _i_r_token.Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'range': _p.deprecated_cc($['range'], ($) => _i_r_token.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const String: _i_signatures._T_String = ($, $p) => ['verbose group', _p.dictionary.literal({
    'trailing trivia': _p.deprecated_cc($['trailing trivia'], ($) => _i_r_token.Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'range': _p.deprecated_cc($['range'], ($) => _i_r_token.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _p.deprecated_cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'type': _p.deprecated_cc($['type'], ($) => _i_r_token.String_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Key_Value_Pairs: _i_signatures._T_Key_Value_Pairs = ($, $p) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
    'key': _p.deprecated_cc($['key'], ($) => String(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _p.deprecated_cc($['value'], ($) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
            ':': _p.deprecated_cc($[':'], ($) => Structural_Token(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _p.deprecated_cc($['value'], ($) => Value(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]],
        () => ['not set', null]
    )]),
})])]
export const Elements: _i_signatures._T_Elements = ($, $p) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
    'value': _p.deprecated_cc($['value'], ($) => Value(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Concrete_Value: _i_signatures._T_Concrete_Value = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'indexed collection': return _p.ss($, ($) => ({
            'state': "indexed collection",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => ({
                        'state': "dictionary",
                        'value': ['verbose group', _p.dictionary.literal({
                            '{': _p.deprecated_cc($['{'], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'entries': _p.deprecated_cc($['entries'], ($) => Key_Value_Pairs(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            '}': _p.deprecated_cc($['}'], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    case 'verbose group': return _p.ss($, ($) => ({
                        'state': "verbose group",
                        'value': ['verbose group', _p.dictionary.literal({
                            '(': _p.deprecated_cc($['('], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'entries': _p.deprecated_cc($['entries'], ($) => Key_Value_Pairs(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            ')': _p.deprecated_cc($[')'], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'not set': return _p.ss($, ($) => ({
            'state': "not set",
            'value': ['verbose group', _p.dictionary.literal({
                '~': _p.deprecated_cc($['~'], ($) => Structural_Token(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'ordered collection': return _p.ss($, ($) => ({
            'state': "ordered collection",
            'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                switch ($[0]) {
                    case 'list': return _p.ss($, ($) => ({
                        'state': "list",
                        'value': ['verbose group', _p.dictionary.literal({
                            '[': _p.deprecated_cc($['['], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'elements': _p.deprecated_cc($['elements'], ($) => Elements(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            ']': _p.deprecated_cc($[']'], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    case 'concise group': return _p.ss($, ($) => ({
                        'state': "concise group",
                        'value': ['verbose group', _p.dictionary.literal({
                            '<': _p.deprecated_cc($['<'], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            'elements': _p.deprecated_cc($['elements'], ($) => Elements(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                            '>': _p.deprecated_cc($['>'], ($) => Structural_Token(
                                $,
                                {
                                    'value serializers': $p['value serializers'],
                                }
                            )),
                        })],
                    }))
                    default: return _p.au($[0])
                }
            })],
        }))
        case 'set optional value': return _p.ss($, ($) => ({
            'state': "set optional value",
            'value': ['verbose group', _p.dictionary.literal({
                '*': _p.deprecated_cc($['*'], ($) => Structural_Token(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'value': _p.deprecated_cc($['value'], ($) => Value(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case 'state': return _p.ss($, ($) => ({
            'state': "state",
            'value': ['verbose group', _p.dictionary.literal({
                '|': _p.deprecated_cc($['|'], ($) => Structural_Token(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'status': _p.deprecated_cc($['status'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'missing data': return _p.ss($, ($) => ({
                            'state': "missing data",
                            'value': ['verbose group', _p.dictionary.literal({
                                '#': _p.deprecated_cc($['#'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        case 'set': return _p.ss($, ($) => ({
                            'state': "set",
                            'value': ['verbose group', _p.dictionary.literal({
                                'state': _p.deprecated_cc($['state'], ($) => String(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'value': _p.deprecated_cc($['value'], ($) => Value(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _p.au($[0])
                    }
                })]),
            })],
        }))
        case 'text': return _p.ss($, ($) => ({
            'state': "text",
            'value': String(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _p.au($[0])
    }
})]
export const Value: _i_signatures._T_Value = ($, $p) => ['verbose group', _p.dictionary.literal({
    'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'concrete': return _p.ss($, ($) => ({
                'state': "concrete",
                'value': Concrete_Value(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'include': return _p.ss($, ($) => ({
                'state': "include",
                'value': ['verbose group', _p.dictionary.literal({
                    '@': _p.deprecated_cc($['@'], ($) => Structural_Token(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'path': _p.deprecated_cc($['path'], ($) => String(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'missing data': return _p.ss($, ($) => ({
                'state': "missing data",
                'value': ['verbose group', _p.dictionary.literal({
                    '#': _p.deprecated_cc($['#'], ($) => Structural_Token(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            default: return _p.au($[0])
        }
    })]),
})]
export const Content: _i_signatures._T_Content = ($, $p) => Value(
    $,
    {
        'value serializers': $p['value serializers'],
    }
)
export const Document: _i_signatures._T_Document = ($, $p) => ['verbose group', _p.dictionary.literal({
    'header': _p.deprecated_cc($['header'], ($) => ['optional', $.__decide(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _p.dictionary.literal({
            '!': _p.deprecated_cc($['!'], ($) => Structural_Token(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _p.deprecated_cc($['value'], ($) => Value(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]],
        () => ['not set', null]
    )]),
    'content': _p.deprecated_cc($['content'], ($) => Content(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
