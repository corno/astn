import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_r_token from "../token/marshall"
import * as _i_signatures from "../../../interface/schemas/ast/marshall"


export const Document: _i_signatures._T_Document = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'content': _pa.cc($['content'], ($) => Value(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'header': _pa.cc($['header'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
            '!': _pa.cc($['!'], ($) => Structural_Token(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _pa.cc($['value'], ($) => Value(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]],
        () => ['not set', null]
    )]),
})]
export const Elements: _i_signatures._T_Elements = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    ',': _pa.cc($[','], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', Structural_Token(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
    'value': _pa.cc($['value'], ($) => Value(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})])]
export const Key_Value_Pairs: _i_signatures._T_Key_Value_Pairs = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    ',': _pa.cc($[','], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', Structural_Token(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )],
        () => ['not set', null]
    )]),
    'key': _pa.cc($['key'], ($) => String(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _pa.cc($['value'], ($) => ['optional', $.transform(
        ($): _i_out._T_Value.SG.optional => ['set', ['verbose group', _pa.dictionary_literal({
            ':': _pa.cc($[':'], ($) => Structural_Token(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
            'value': _pa.cc($['value'], ($) => Value(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )),
        })]],
        () => ['not set', null]
    )]),
})])]
export const String: _i_signatures._T_String = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => _i_r_token.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => _i_r_token.Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => _i_r_token.String_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _pa.cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Structural_Token: _i_signatures._T_Structural_Token = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => _i_r_token.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => _i_r_token.Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Value: _i_signatures._T_Value = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => _i_r_token.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'include': return _pa.ss($, ($) => ({
                'state': "include",
                'value': ['verbose group', _pa.dictionary_literal({
                    '@': _pa.cc($['@'], ($) => Structural_Token(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'path': _pa.cc($['path'], ($) => String(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'indexed collection': return _pa.ss($, ($) => ({
                'state': "indexed collection",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'dictionary': return _pa.ss($, ($) => ({
                            'state': "dictionary",
                            'value': ['verbose group', _pa.dictionary_literal({
                                'entries': _pa.cc($['entries'], ($) => Key_Value_Pairs(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                '{': _pa.cc($['{'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                '}': _pa.cc($['}'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        case 'verbose group': return _pa.ss($, ($) => ({
                            'state': "verbose group",
                            'value': ['verbose group', _pa.dictionary_literal({
                                '(': _pa.cc($['('], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                ')': _pa.cc($[')'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'entries': _pa.cc($['entries'], ($) => Key_Value_Pairs(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'not set': return _pa.ss($, ($) => ({
                'state': "not set",
                'value': ['verbose group', _pa.dictionary_literal({
                    '~': _pa.cc($['~'], ($) => Structural_Token(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'ordered collection': return _pa.ss($, ($) => ({
                'state': "ordered collection",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'concise group': return _pa.ss($, ($) => ({
                            'state': "concise group",
                            'value': ['verbose group', _pa.dictionary_literal({
                                '<': _pa.cc($['<'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                '>': _pa.cc($['>'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'elements': _pa.cc($['elements'], ($) => Elements(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        case 'list': return _pa.ss($, ($) => ({
                            'state': "list",
                            'value': ['verbose group', _pa.dictionary_literal({
                                '[': _pa.cc($['['], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                ']': _pa.cc($[']'], ($) => Structural_Token(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                                'elements': _pa.cc($['elements'], ($) => Elements(
                                    $,
                                    {
                                        'value serializers': $p['value serializers'],
                                    }
                                )),
                            })],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'set optional value': return _pa.ss($, ($) => ({
                'state': "set optional value",
                'value': ['verbose group', _pa.dictionary_literal({
                    '*': _pa.cc($['*'], ($) => Structural_Token(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'value': _pa.cc($['value'], ($) => Value(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            case 'string': return _pa.ss($, ($) => ({
                'state': "string",
                'value': String(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'tagged value': return _pa.ss($, ($) => ({
                'state': "tagged value",
                'value': ['verbose group', _pa.dictionary_literal({
                    'state': _pa.cc($['state'], ($) => String(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    'value': _pa.cc($['value'], ($) => Value(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                    '|': _pa.cc($['|'], ($) => Structural_Token(
                        $,
                        {
                            'value serializers': $p['value serializers'],
                        }
                    )),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
