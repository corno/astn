import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/parse_result/unconstrained"
import * as _i_r_ast from "../ast/migration_boilerplate"
import * as _i_signatures from "../../../interface/schemas/parse_result/migration_boilerplate"


export const Annotated_Token: _i_signatures._T_Annotated_Token = ($) => ({
    'end': _pa.cc($['end'], ($) => _i_r_ast.Location(
        $,
        null
    )),
    'start': _pa.cc($['start'], ($) => _i_r_ast.Location(
        $,
        null
    )),
    'trailing trivia': _pa.cc($['trailing trivia'], ($) => _i_r_ast.Trivia(
        $,
        null
    )),
    'type': _pa.cc($['type'], ($) => Token_Type(
        $,
        null
    )),
})
export const Parse_Error: _i_signatures._T_Parse_Error = ($) => ({
    'range': _pa.cc($['range'], ($) => _i_r_ast.Range(
        $,
        null
    )),
    'type': _pa.cc($['type'], ($) => _pa.cc($, ($): _i_out._T_Parse_Error._type => {
        switch ($[0]) {
            case 'lexer': return _pa.ss($, ($) => ['lexer', _pa.cc($, ($): _i_out._T_Parse_Error._type.SG.lexer => {
                switch ($[0]) {
                    case 'dangling slash': return _pa.ss($, ($) => ['dangling slash', null])
                    case 'invalid unicode escape sequence': return _pa.ss($, ($) => ['invalid unicode escape sequence', null])
                    case 'missing character after escape': return _pa.ss($, ($) => ['missing character after escape', null])
                    case 'unexpected character': return _pa.ss($, ($) => ['unexpected character', $])
                    case 'unexpected control character': return _pa.ss($, ($) => ['unexpected control character', $])
                    case 'unexpected end of input': return _pa.ss($, ($) => ['unexpected end of input', null])
                    case 'unexpected end of line in delimited string': return _pa.ss($, ($) => ['unexpected end of line in delimited string', null])
                    case 'unknown escape character': return _pa.ss($, ($) => ['unknown escape character', null])
                    case 'unterminated block comment': return _pa.ss($, ($) => ['unterminated block comment', null])
                    case 'unterminated string': return _pa.ss($, ($) => ['unterminated string', null])
                    case 'unterminated unicode escape sequence': return _pa.ss($, ($) => ['unterminated unicode escape sequence', null])
                    default: return _pa.au($[0])
                }
            })])
            case 'parser': return _pa.ss($, ($) => ['parser', ({
                'cause': _pa.cc($['cause'], ($) => _pa.cc($, ($): _i_out._T_Parse_Error._type.SG.parser.cause => {
                    switch ($[0]) {
                        case 'missing token': return _pa.ss($, ($) => ['missing token', null])
                        case 'unexpected token': return _pa.ss($, ($) => ['unexpected token', ({
                            'found': _pa.cc($['found'], ($) => Token_Type(
                                $,
                                null
                            )),
                        })])
                        default: return _pa.au($[0])
                    }
                })),
                'expected': _pa.cc($['expected'], ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => {
                    switch ($[0]) {
                        case '!': return _pa.ss($, ($) => ['!', null])
                        case ')': return _pa.ss($, ($) => [')', null])
                        case ',': return _pa.ss($, ($) => [',', null])
                        case ':': return _pa.ss($, ($) => [':', null])
                        case '>': return _pa.ss($, ($) => ['>', null])
                        case '@': return _pa.ss($, ($) => ['@', null])
                        case ']': return _pa.ss($, ($) => [']', null])
                        case 'a string': return _pa.ss($, ($) => ['a string', null])
                        case 'a value': return _pa.ss($, ($) => ['a value', null])
                        case '}': return _pa.ss($, ($) => ['}', null])
                        default: return _pa.au($[0])
                    }
                }))),
            })])
            default: return _pa.au($[0])
        }
    })),
})
export const Parse_Result: _i_signatures._T_Parse_Result = ($) => _pa.cc($, ($): _i_out._T_Parse_Result => {
    switch ($[0]) {
        case 'failure': return _pa.ss($, ($) => ['failure', Parse_Error(
            $,
            null
        )])
        case 'success': return _pa.ss($, ($) => ['success', _i_r_ast.Document(
            $,
            null
        )])
        default: return _pa.au($[0])
    }
})
export const Token_Type: _i_signatures._T_Token_Type = ($) => _pa.cc($, ($): _i_out._T_Token_Type => {
    switch ($[0]) {
        case '!': return _pa.ss($, ($) => ['!', null])
        case '(': return _pa.ss($, ($) => ['(', null])
        case ')': return _pa.ss($, ($) => [')', null])
        case '*': return _pa.ss($, ($) => ['*', null])
        case ',': return _pa.ss($, ($) => [',', null])
        case ':': return _pa.ss($, ($) => [':', null])
        case '<': return _pa.ss($, ($) => ['<', null])
        case '>': return _pa.ss($, ($) => ['>', null])
        case '@': return _pa.ss($, ($) => ['@', null])
        case '[': return _pa.ss($, ($) => ['[', null])
        case ']': return _pa.ss($, ($) => [']', null])
        case 'string': return _pa.ss($, ($) => ['string', ({
            'type': _pa.cc($['type'], ($) => _i_r_ast.String_Type(
                $,
                null
            )),
            'value': _pa.cc($['value'], ($) => $),
        })])
        case '{': return _pa.ss($, ($) => ['{', null])
        case '|': return _pa.ss($, ($) => ['|', null])
        case '}': return _pa.ss($, ($) => ['}', null])
        case '~': return _pa.ss($, ($) => ['~', null])
        default: return _pa.au($[0])
    }
})
export const Tokenizer_Result: _i_signatures._T_Tokenizer_Result = ($) => ({
    'end': _pa.cc($['end'], ($) => _i_r_ast.Location(
        $,
        null
    )),
    'leading trivia': _pa.cc($['leading trivia'], ($) => _i_r_ast.Trivia(
        $,
        null
    )),
    'tokens': _pa.cc($['tokens'], ($) => $.map(($) => Annotated_Token(
        $,
        null
    ))),
})
