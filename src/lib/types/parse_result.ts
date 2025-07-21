import * as _et from 'exupery-core-types'

import * as ast from "./ast"

export type Token_Type =
    | readonly ['{', null]
    | readonly ['}', null]
    | readonly ['[', null]
    | readonly [']', null]
    | readonly ['(', null]
    | readonly [')', null]
    | readonly ['<', null]
    | readonly ['>', null]

    | readonly ['!', null]
    | readonly ['@', null]
    | readonly ['~', null]
    | readonly ['*', null]
    | readonly [',', null]
    | readonly [':', null]
    | readonly ['|', null]

    | readonly ['string', {
        'value': string
        'type': ast.String_Type
    }]

export type Parse_Error_Type =
    | ['lexer',
        | ['unexpected control character', number]
        | ['missing character after escape', null]
        | ['unexpected end of line in delimited string', null]
        | ['unexpected character', number]
        | ['unterminated string', null]
        | ['unterminated block comment', null]
        | ['unterminated unicode escape sequence', null]
        | ['invalid unicode escape sequence', null]
        | ['unknown escape character', null]
        | ['unexpected end of input', null]
        | ['dangling slash', null]
    ]
    | ['parser', {
        'expected': _et.Array<Expected>
        'cause':
        | ['missing token', null]
        | ['unexpected token', {
            'found': Token_Type
        }]
    }
    ]

export type Expected = 'a string' | 'a value' | '!' | '>' | '}' | '@' | ',' | ':' | ')' | ']'

export type Parse_Error = {
    'type': Parse_Error_Type
    'range': ast.Range
}

export type Parse_Result =
    | ['failure', Parse_Error]
    | ['success', ast.Document]