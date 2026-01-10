import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/token/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => ['verbose group', _p.dictionary.literal({
    'line': _p.deprecated_cc($['line'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
    'column': _p.deprecated_cc($['column'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
export const Location: _i_signatures._T_Location = ($, $p) => ['verbose group', _p.dictionary.literal({
    'relative': _p.deprecated_cc($['relative'], ($) => Relative_Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'absolute': _p.deprecated_cc($['absolute'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': $p['value serializers']['default number'](
            $,
            null
        ),
    })]),
})]
export const Range: _i_signatures._T_Range = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'end': _p.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Whitespace: _i_signatures._T_Whitespace = ($, $p) => ['verbose group', _p.dictionary.literal({
    'range': _p.deprecated_cc($['range'], ($) => Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'value': _p.deprecated_cc($['value'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})]
export const Trivia: _i_signatures._T_Trivia = ($, $p) => ['verbose group', _p.dictionary.literal({
    'leading whitespace': _p.deprecated_cc($['leading whitespace'], ($) => Whitespace(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'comments': _p.deprecated_cc($['comments'], ($) => ['list', $.map(($) => ['verbose group', _p.dictionary.literal({
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'line': return _p.ss($, ($) => ({
                    'state': "line",
                    'value': ['nothing', null],
                }))
                case 'block': return _p.ss($, ($) => ({
                    'state': "block",
                    'value': ['nothing', null],
                }))
                default: return _p.au($[0])
            }
        })]),
        'content': _p.deprecated_cc($['content'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'range': _p.deprecated_cc($['range'], ($) => Range(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
        'trailing whitespace': _p.deprecated_cc($['trailing whitespace'], ($) => Whitespace(
            $,
            {
                'value serializers': $p['value serializers'],
            }
        )),
    })])]),
})]
export const Delimited_String: _i_signatures._T_Delimited_String = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const String_Type: _i_signatures._T_String_Type = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'quoted': return _p.ss($, ($) => ({
            'state': "quoted",
            'value': ['nothing', null],
        }))
        case 'apostrophed': return _p.ss($, ($) => ({
            'state': "apostrophed",
            'value': ['nothing', null],
        }))
        case 'undelimited': return _p.ss($, ($) => ({
            'state': "undelimited",
            'value': ['nothing', null],
        }))
        case 'backticked': return _p.ss($, ($) => ({
            'state': "backticked",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Token_Type: _i_signatures._T_Token_Type = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case '{': return _p.ss($, ($) => ({
            'state': "{",
            'value': ['nothing', null],
        }))
        case '}': return _p.ss($, ($) => ({
            'state': "}",
            'value': ['nothing', null],
        }))
        case '[': return _p.ss($, ($) => ({
            'state': "[",
            'value': ['nothing', null],
        }))
        case ']': return _p.ss($, ($) => ({
            'state': "]",
            'value': ['nothing', null],
        }))
        case '(': return _p.ss($, ($) => ({
            'state': "(",
            'value': ['nothing', null],
        }))
        case ')': return _p.ss($, ($) => ({
            'state': ")",
            'value': ['nothing', null],
        }))
        case '<': return _p.ss($, ($) => ({
            'state': "<",
            'value': ['nothing', null],
        }))
        case '>': return _p.ss($, ($) => ({
            'state': ">",
            'value': ['nothing', null],
        }))
        case '!': return _p.ss($, ($) => ({
            'state': "!",
            'value': ['nothing', null],
        }))
        case '@': return _p.ss($, ($) => ({
            'state': "@",
            'value': ['nothing', null],
        }))
        case '~': return _p.ss($, ($) => ({
            'state': "~",
            'value': ['nothing', null],
        }))
        case '*': return _p.ss($, ($) => ({
            'state': "*",
            'value': ['nothing', null],
        }))
        case ':': return _p.ss($, ($) => ({
            'state': ":",
            'value': ['nothing', null],
        }))
        case '|': return _p.ss($, ($) => ({
            'state': "|",
            'value': ['nothing', null],
        }))
        case '#': return _p.ss($, ($) => ({
            'state': "#",
            'value': ['nothing', null],
        }))
        case 'string': return _p.ss($, ($) => ({
            'state': "string",
            'value': ['verbose group', _p.dictionary.literal({
                'value': _p.deprecated_cc($['value'], ($) => Delimited_String(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
                'type': _p.deprecated_cc($['type'], ($) => String_Type(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )),
            })],
        }))
        default: return _p.au($[0])
    }
})]
export const Annotated_Token: _i_signatures._T_Annotated_Token = ($, $p) => ['verbose group', _p.dictionary.literal({
    'start': _p.deprecated_cc($['start'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _p.deprecated_cc($['type'], ($) => Token_Type(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'end': _p.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'trailing trivia': _p.deprecated_cc($['trailing trivia'], ($) => Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
export const Tokenizer_Result: _i_signatures._T_Tokenizer_Result = ($, $p) => ['verbose group', _p.dictionary.literal({
    'leading trivia': _p.deprecated_cc($['leading trivia'], ($) => Trivia(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'tokens': _p.deprecated_cc($['tokens'], ($) => ['list', $.map(($) => Annotated_Token(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    ))]),
    'end': _p.deprecated_cc($['end'], ($) => Location(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
})]
