import * as _pi from 'pareto-core-interface'

import * as _i_imports_token from "./token"
import * as _i_imports_ast from "./astn_source"

export type _T_Parse_Error = {
    readonly 'range': _i_imports_token._T_Range
    readonly 'type': _T_Parse_Error._type

}

export namespace _T_Parse_Error {
    export type _type =
        | readonly ['lexer', Lexer_Error
        ]
        | readonly ['parser', Parser_Error]
}

export type Lexer_Error =
    | readonly ['dangling slash', null]
    | readonly ['invalid unicode escape sequence', null]
    | readonly ['missing character after escape', null]
    | readonly ['unexpected character', number]
    | readonly ['unexpected control character', number]
    | readonly ['unexpected end of input', null]
    | readonly ['unexpected end of line in delimited string', null]
    | readonly ['unknown escape character', null]
    | readonly ['unterminated block comment', null]
    | readonly ['unterminated string', null]
    | readonly ['unterminated unicode escape sequence', null]

export type Parser_Error = {
    readonly 'cause':
    | readonly ['missing token', null]
    | readonly ['unexpected token', {
        readonly 'found': _i_imports_token._T_Token_Type
    }]

    readonly 'expected': _pi.List<Expected
    >
}

export type Expected = 
        | readonly ['!', null]
        | readonly ['#', null]
        | readonly [')', null]
        | readonly [',', null]
        | readonly [':', null]
        | readonly ['>', null]
        | readonly ['@', null]
        | readonly [']', null]
        | readonly ['a string', null]
        | readonly ['a value', null]
        | readonly ['}', null]

export type _T_Parse_Result =
    | readonly ['failure', _T_Parse_Error]
    | readonly ['success', _i_imports_ast._T_Document]

