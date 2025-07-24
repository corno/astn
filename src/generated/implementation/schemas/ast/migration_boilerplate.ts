import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/ast/unconstrained"
import * as _i_signatures from "../../../interface/schemas/ast/migration_boilerplate"


export const Document: _i_signatures._T_Document = ($) => ({
    'content': _pa.cc($['content'], ($) => Value(
        $,
        null
    )),
    'header': _pa.cc($['header'], ($) => $.map(($) => ({
        '!': _pa.cc($['!'], ($) => Structural_Token(
            $,
            null
        )),
        'value': _pa.cc($['value'], ($) => Value(
            $,
            null
        )),
    }))),
})
export const Elements: _i_signatures._T_Elements = ($) => $.map(($) => ({
    ',': _pa.cc($[','], ($) => $.map(($) => Structural_Token(
        $,
        null
    ))),
    'value': _pa.cc($['value'], ($) => Value(
        $,
        null
    )),
}))
export const Key_Value_Pairs: _i_signatures._T_Key_Value_Pairs = ($) => $.map(($) => ({
    ',': _pa.cc($[','], ($) => $.map(($) => Structural_Token(
        $,
        null
    ))),
    'key': _pa.cc($['key'], ($) => String(
        $,
        null
    )),
    'value': _pa.cc($['value'], ($) => $.map(($) => ({
        ':': _pa.cc($[':'], ($) => Structural_Token(
            $,
            null
        )),
        'value': _pa.cc($['value'], ($) => Value(
            $,
            null
        )),
    }))),
}))
export const Location: _i_signatures._T_Location = ($) => ({
    'absolute': _pa.cc($['absolute'], ($) => $),
    'relative': _pa.cc($['relative'], ($) => Relative_Location(
        $,
        null
    )),
})
export const Range: _i_signatures._T_Range = ($) => ({
    'end': _pa.cc($['end'], ($) => Location(
        $,
        null
    )),
    'start': _pa.cc($['start'], ($) => Location(
        $,
        null
    )),
})
export const Relative_Location: _i_signatures._T_Relative_Location = ($) => ({
    'column': _pa.cc($['column'], ($) => $),
    'line': _pa.cc($['line'], ($) => $),
})
export const Relative_Range: _i_signatures._T_Relative_Range = ($) => ({
    'end': _pa.cc($['end'], ($) => Relative_Location(
        $,
        null
    )),
    'start': _pa.cc($['start'], ($) => Relative_Location(
        $,
        null
    )),
})
export const String: _i_signatures._T_String = ($) => ({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        null
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => Trivia(
        $,
        null
    )),
    'type': _pa.cc($['type'], ($) => String_Type(
        $,
        null
    )),
    'value': _pa.cc($['value'], ($) => $),
})
export const String_Type: _i_signatures._T_String_Type = ($) => _pa.cc($, ($): _i_out._T_String_Type => {
    switch ($[0]) {
        case 'apostrophed': return _pa.ss($, ($) => ['apostrophed', null])
        case 'backticked': return _pa.ss($, ($) => ['backticked', null])
        case 'quoted': return _pa.ss($, ($) => ['quoted', null])
        case 'undelimited': return _pa.ss($, ($) => ['undelimited', null])
        default: return _pa.au($[0])
    }
})
export const Structural_Token: _i_signatures._T_Structural_Token = ($) => ({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        null
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => Trivia(
        $,
        null
    )),
})
export const Trivia: _i_signatures._T_Trivia = ($) => ({
    'comments': _pa.cc($['comments'], ($) => $.map(($) => ({
        'content': _pa.cc($['content'], ($) => $),
        'range': _pa.cc($['range'], ($) => Range(
            $,
            null
        )),
        'trailing whitespace': _pa.cc($['trailing whitespace'], ($) => Whitespace(
            $,
            null
        )),
        'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Trivia.comments.L._type => {
            switch ($[0]) {
                case 'block': return _pa.ss($, ($) => ['block', null])
                case 'line': return _pa.ss($, ($) => ['line', null])
                default: return _pa.au($[0])
            }
        })),
    }))),
    'leading whitespace': _pa.cc($['leading whitespace'], ($) => Whitespace(
        $,
        null
    )),
})
export const Value: _i_signatures._T_Value = ($) => ({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        null
    )),
    'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Value._type => {
        switch ($[0]) {
            case 'include': return _pa.ss($, ($) => ['include', ({
                '@': _pa.cc($['@'], ($) => Structural_Token(
                    $,
                    null
                )),
                'path': _pa.cc($['path'], ($) => String(
                    $,
                    null
                )),
            })])
            case 'indexed collection': return _pa.ss($, ($) => ['indexed collection', _pa.cc($, ($): _i_out._T_Value._type.SG.indexed_collection => {
                switch ($[0]) {
                    case 'dictionary': return _pa.ss($, ($) => ['dictionary', ({
                        'entries': _pa.cc($['entries'], ($) => Key_Value_Pairs(
                            $,
                            null
                        )),
                        '{': _pa.cc($['{'], ($) => Structural_Token(
                            $,
                            null
                        )),
                        '}': _pa.cc($['}'], ($) => Structural_Token(
                            $,
                            null
                        )),
                    })])
                    case 'verbose group': return _pa.ss($, ($) => ['verbose group', ({
                        '(': _pa.cc($['('], ($) => Structural_Token(
                            $,
                            null
                        )),
                        ')': _pa.cc($[')'], ($) => Structural_Token(
                            $,
                            null
                        )),
                        'entries': _pa.cc($['entries'], ($) => Key_Value_Pairs(
                            $,
                            null
                        )),
                    })])
                    default: return _pa.au($[0])
                }
            })])
            case 'not set': return _pa.ss($, ($) => ['not set', ({
                '~': _pa.cc($['~'], ($) => Structural_Token(
                    $,
                    null
                )),
            })])
            case 'ordered collection': return _pa.ss($, ($) => ['ordered collection', _pa.cc($, ($): _i_out._T_Value._type.SG.ordered_collection => {
                switch ($[0]) {
                    case 'concise group': return _pa.ss($, ($) => ['concise group', ({
                        '<': _pa.cc($['<'], ($) => Structural_Token(
                            $,
                            null
                        )),
                        '>': _pa.cc($['>'], ($) => Structural_Token(
                            $,
                            null
                        )),
                        'elements': _pa.cc($['elements'], ($) => Elements(
                            $,
                            null
                        )),
                    })])
                    case 'list': return _pa.ss($, ($) => ['list', ({
                        '[': _pa.cc($['['], ($) => Structural_Token(
                            $,
                            null
                        )),
                        ']': _pa.cc($[']'], ($) => Structural_Token(
                            $,
                            null
                        )),
                        'elements': _pa.cc($['elements'], ($) => Elements(
                            $,
                            null
                        )),
                    })])
                    default: return _pa.au($[0])
                }
            })])
            case 'set optional value': return _pa.ss($, ($) => ['set optional value', ({
                '*': _pa.cc($['*'], ($) => Structural_Token(
                    $,
                    null
                )),
                'value': _pa.cc($['value'], ($) => Value(
                    $,
                    null
                )),
            })])
            case 'string': return _pa.ss($, ($) => ['string', String(
                $,
                null
            )])
            case 'tagged value': return _pa.ss($, ($) => ['tagged value', ({
                'state': _pa.cc($['state'], ($) => String(
                    $,
                    null
                )),
                'value': _pa.cc($['value'], ($) => Value(
                    $,
                    null
                )),
                '|': _pa.cc($['|'], ($) => Structural_Token(
                    $,
                    null
                )),
            })])
            default: return _pa.au($[0])
        }
    })),
})
export const Whitespace: _i_signatures._T_Whitespace = ($) => ({
    'range': _pa.cc($['range'], ($) => Range(
        $,
        null
    )),
    'value': _pa.cc($['value'], ($) => $),
})
