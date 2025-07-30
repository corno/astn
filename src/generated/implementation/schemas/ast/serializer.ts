import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/ast/serializer"


export const Document: _i_signatures._T_s_Document = ($, $p) => ['verbose group', _pa.dictionary_literal({
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
export const Elements: _i_signatures._T_s_Elements = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
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
export const Key_Value_Pairs: _i_signatures._T_s_Key_Value_Pairs = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
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
export const Location: _i_signatures._T_s_Location = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'absolute': _pa.cc($['absolute'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': "FIXME NUMBER",
    })]),
    'relative': _pa.cc($['relative'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Range: _i_signatures._T_s_Range = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'end': _pa.cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Relative_Location: _i_signatures._T_s_Relative_Location = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'column': _pa.cc($['column'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': "FIXME NUMBER",
    })]),
    'line': _pa.cc($['line'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': "FIXME NUMBER",
    })]),
})]
export const Relative_Range: _i_signatures._T_s_Relative_Range = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'end': _pa.cc($['end'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.cc($['start'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const String: _i_signatures._T_s_String = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => String_Type(
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
export const String_Type: _i_signatures._T_s_String_Type = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'apostrophed': return _pa.ss($, ($) => ({
            'state': "apostrophed",
            'value': ['nothing', null],
        }))
        case 'backticked': return _pa.ss($, ($) => ({
            'state': "backticked",
            'value': ['nothing', null],
        }))
        case 'quoted': return _pa.ss($, ($) => ({
            'state': "quoted",
            'value': ['nothing', null],
        }))
        case 'undelimited': return _pa.ss($, ($) => ({
            'state': "undelimited",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Structural_Token: _i_signatures._T_s_Structural_Token = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Trivia: _i_signatures._T_s_Trivia = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'comments': _pa.cc($['comments'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
        'content': _pa.cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'range': _pa.cc($['range'], ($) => Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'trailing whitespace': _pa.cc($['trailing whitespace'], ($) => Whitespace(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'block': return _pa.ss($, ($) => ({
                    'state': "block",
                    'value': ['nothing', null],
                }))
                case 'line': return _pa.ss($, ($) => ({
                    'state': "line",
                    'value': ['nothing', null],
                }))
                default: return _pa.au($[0])
            }
        })]),
    })])]),
    'leading whitespace': _pa.cc($['leading whitespace'], ($) => Whitespace(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Value: _i_signatures._T_s_Value = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => Range(
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
export const Whitespace: _i_signatures._T_s_Whitespace = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => Range(
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
