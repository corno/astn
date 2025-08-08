import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_r_ast from "../ast/marshall"
import * as _i_r_token from "../token/marshall"
import * as _i_signatures from "../../../interface/schemas/parse_result/marshall"


export const Parse_Error: _i_signatures._T_Parse_Error = ($, $p) => ['verbose group', _pa.dictionary_literal({
    'range': _pa.cc($['range'], ($) => _i_r_token.Range(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )),
    'type': _pa.cc($['type'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'lexer': return _pa.ss($, ($) => ({
                'state': "lexer",
                'value': ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                    switch ($[0]) {
                        case 'dangling slash': return _pa.ss($, ($) => ({
                            'state': "dangling slash",
                            'value': ['nothing', null],
                        }))
                        case 'invalid unicode escape sequence': return _pa.ss($, ($) => ({
                            'state': "invalid unicode escape sequence",
                            'value': ['nothing', null],
                        }))
                        case 'missing character after escape': return _pa.ss($, ($) => ({
                            'state': "missing character after escape",
                            'value': ['nothing', null],
                        }))
                        case 'unexpected character': return _pa.ss($, ($) => ({
                            'state': "unexpected character",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': _pd.implement_me(),
                            })],
                        }))
                        case 'unexpected control character': return _pa.ss($, ($) => ({
                            'state': "unexpected control character",
                            'value': ['text', ({
                                'delimiter': ['backtick', null],
                                'value': _pd.implement_me(),
                            })],
                        }))
                        case 'unexpected end of input': return _pa.ss($, ($) => ({
                            'state': "unexpected end of input",
                            'value': ['nothing', null],
                        }))
                        case 'unexpected end of line in delimited string': return _pa.ss($, ($) => ({
                            'state': "unexpected end of line in delimited string",
                            'value': ['nothing', null],
                        }))
                        case 'unknown escape character': return _pa.ss($, ($) => ({
                            'state': "unknown escape character",
                            'value': ['nothing', null],
                        }))
                        case 'unterminated block comment': return _pa.ss($, ($) => ({
                            'state': "unterminated block comment",
                            'value': ['nothing', null],
                        }))
                        case 'unterminated string': return _pa.ss($, ($) => ({
                            'state': "unterminated string",
                            'value': ['nothing', null],
                        }))
                        case 'unterminated unicode escape sequence': return _pa.ss($, ($) => ({
                            'state': "unterminated unicode escape sequence",
                            'value': ['nothing', null],
                        }))
                        default: return _pa.au($[0])
                    }
                })],
            }))
            case 'parser': return _pa.ss($, ($) => ({
                'state': "parser",
                'value': ['verbose group', _pa.dictionary_literal({
                    'cause': _pa.cc($['cause'], ($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'missing token': return _pa.ss($, ($) => ({
                                'state': "missing token",
                                'value': ['nothing', null],
                            }))
                            case 'unexpected token': return _pa.ss($, ($) => ({
                                'state': "unexpected token",
                                'value': ['verbose group', _pa.dictionary_literal({
                                    'found': _pa.cc($['found'], ($) => _i_r_token.Token_Type(
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
                    'expected': _pa.cc($['expected'], ($) => ['list', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case '!': return _pa.ss($, ($) => ({
                                'state': "!",
                                'value': ['nothing', null],
                            }))
                            case ')': return _pa.ss($, ($) => ({
                                'state': ")",
                                'value': ['nothing', null],
                            }))
                            case ',': return _pa.ss($, ($) => ({
                                'state': ",",
                                'value': ['nothing', null],
                            }))
                            case ':': return _pa.ss($, ($) => ({
                                'state': ":",
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
                            case ']': return _pa.ss($, ($) => ({
                                'state': "]",
                                'value': ['nothing', null],
                            }))
                            case 'a string': return _pa.ss($, ($) => ({
                                'state': "a string",
                                'value': ['nothing', null],
                            }))
                            case 'a value': return _pa.ss($, ($) => ({
                                'state': "a value",
                                'value': ['nothing', null],
                            }))
                            case '}': return _pa.ss($, ($) => ({
                                'state': "}",
                                'value': ['nothing', null],
                            }))
                            default: return _pa.au($[0])
                        }
                    })])]),
                })],
            }))
            default: return _pa.au($[0])
        }
    })]),
})]
export const Parse_Result: _i_signatures._T_Parse_Result = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'failure': return _pa.ss($, ($) => ({
            'state': "failure",
            'value': Parse_Error(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'success': return _pa.ss($, ($) => ({
            'state': "success",
            'value': _i_r_ast.Document(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
