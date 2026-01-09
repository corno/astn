import * as _pi from 'pareto-core-interface'

export type _T_Annotated_Token = {
    readonly 'end': _T_Location
    readonly 'start': _T_Location
    readonly 'trailing trivia': _T_Trivia
    readonly 'type': _T_Token_Type
}

export type _T_Delimited_String = string

export type _T_Location = {
    readonly 'absolute': number
    readonly 'relative': _T_Relative_Location
}

export type _T_Range = {
    readonly 'end': _T_Location
    readonly 'start': _T_Location
}

export type _T_Relative_Location = {
    readonly 'column': number
    readonly 'line': number
}

export type _T_String_Type =
    | readonly ['apostrophed', null]
    | readonly ['backticked', null]
    | readonly ['quoted', null]
    | readonly ['undelimited', null]


export type _T_Token_Type =
    | readonly ['!', null]
    | readonly ['#', null]
    | readonly ['(', null]
    | readonly [')', null]
    | readonly ['*', null]
    | readonly [':', null]
    | readonly ['<', null]
    | readonly ['>', null]
    | readonly ['@', null]
    | readonly ['[', null]
    | readonly [']', null]
    | readonly ['string', {
        readonly 'type': _T_String_Type
        readonly 'value': _T_Delimited_String
    }]
    | readonly ['{', null]
    | readonly ['|', null]
    | readonly ['}', null]
    | readonly ['~', null]


export type _T_Tokenizer_Result = {
    readonly 'end': _T_Location
    readonly 'leading trivia': _T_Trivia
    readonly 'tokens': _pi.List<_T_Annotated_Token>
}

export namespace _T_Tokenizer_Result {
    export type tokens = _pi.List<_T_Annotated_Token>
}

export type _T_Trivia = {
    readonly 'comments': _pi.List<{
        readonly 'content': string
        readonly 'range': _T_Range
        readonly 'trailing whitespace': _T_Whitespace
        readonly 'type':
        | readonly ['block', null]
        | readonly ['line', null]

    }>
    readonly 'leading whitespace': _T_Whitespace
}

export type _T_Whitespace = {
    readonly 'range': _T_Range
    readonly 'value': string
}