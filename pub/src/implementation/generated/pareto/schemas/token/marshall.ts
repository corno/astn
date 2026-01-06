import * as _pa from 'pareto-core-transformer'
import * as _pd from 'pareto-core-dev'

import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/token/marshall"


export const Annotated_Token: _i_signatures._T_Annotated_Token = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'end': _pa.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.deprecated_cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'trailing trivia': _pa.deprecated_cc($['trailing trivia'], ($) => Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.deprecated_cc($['type'], ($) => Token_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Delimited_String: _i_signatures._T_Delimited_String = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Location: _i_signatures._T_Location = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'absolute': _pa.deprecated_cc($['absolute'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'relative': _pa.deprecated_cc($['relative'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Range: _i_signatures._T_Range = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'end': _pa.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'start': _pa.deprecated_cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'column': _pa.deprecated_cc($['column'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'line': _pa.deprecated_cc($['line'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
export const String_Type: _i_signatures._T_String_Type = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
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
export const Token_Type: _i_signatures._T_Token_Type = ($, $p) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case '!': return _pa.ss($, ($) => ({
            'state': "!",
            'value': ['nothing', null],
        }))
        case '#': return _pa.ss($, ($) => ({
            'state': "#",
            'value': ['nothing', null],
        }))
        case '(': return _pa.ss($, ($) => ({
            'state': "(",
            'value': ['nothing', null],
        }))
        case ')': return _pa.ss($, ($) => ({
            'state': ")",
            'value': ['nothing', null],
        }))
        case '*': return _pa.ss($, ($) => ({
            'state': "*",
            'value': ['nothing', null],
        }))
        case ':': return _pa.ss($, ($) => ({
            'state': ":",
            'value': ['nothing', null],
        }))
        case '<': return _pa.ss($, ($) => ({
            'state': "<",
            'value': ['nothing', null],
        }))
        case '>': return _pa.ss($, ($) => ({
            'state': ">",
            'value': ['nothing', null],
        }))
        case '@': return _pa.ss($, ($) => ({
            'state': "@",
            'value': ['nothing', null],
        }))
        case '[': return _pa.ss($, ($) => ({
            'state': "[",
            'value': ['nothing', null],
        }))
        case ']': return _pa.ss($, ($) => ({
            'state': "]",
            'value': ['nothing', null],
        }))
        case 'string': return _pa.ss($, ($) => ({
            'state': "string",
            'value': ['verbose group', _pa.dictionary.literal({
                'type': _pa.deprecated_cc($['type'], ($) => String_Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'value': _pa.deprecated_cc($['value'], ($) => Delimited_String(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        case '{': return _pa.ss($, ($) => ({
            'state': "{",
            'value': ['nothing', null],
        }))
        case '|': return _pa.ss($, ($) => ({
            'state': "|",
            'value': ['nothing', null],
        }))
        case '}': return _pa.ss($, ($) => ({
            'state': "}",
            'value': ['nothing', null],
        }))
        case '~': return _pa.ss($, ($) => ({
            'state': "~",
            'value': ['nothing', null],
        }))
        default: return _pa.au($[0])
    }
})]
export const Tokenizer_Result: _i_signatures._T_Tokenizer_Result = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'end': _pa.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'leading trivia': _pa.deprecated_cc($['leading trivia'], ($) => Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'tokens': _pa.deprecated_cc($['tokens'], ($) => ['list', $.map(($) => Annotated_Token(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
})]
export const Trivia: _i_signatures._T_Trivia = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'comments': _pa.deprecated_cc($['comments'], ($) => ['list', $.map(($) => ['verbose group', _pa.dictionary.literal({
        'content': _pa.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'range': _pa.deprecated_cc($['range'], ($) => Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'trailing whitespace': _pa.deprecated_cc($['trailing whitespace'], ($) => Whitespace(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'type': _pa.deprecated_cc($['type'], ($) => ['state', _pa.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
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
    'leading whitespace': _pa.deprecated_cc($['leading whitespace'], ($) => Whitespace(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Whitespace: _i_signatures._T_Whitespace = ($, $p) => ['verbose group', _pa.dictionary.literal({
    'range': _pa.deprecated_cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _pa.deprecated_cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
