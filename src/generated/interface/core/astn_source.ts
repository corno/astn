import * as _et from 'exupery-core-types'

export type _T_Document = {
    readonly 'content': _T_Value
    readonly 'header': _et.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export type _T_Elements = _et.Array<{
    readonly ',': _et.Optional_Value<_T_Structural_Token>
    readonly 'value': _T_Value
}>

export type _T_Key_Value_Pairs = _et.Array< {
    readonly ',': _et.Optional_Value<_T_Structural_Token>
    readonly 'key': _T_String
    readonly 'value': _et.Optional_Value<{
        readonly ':': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}>

export type _T_String = {
    readonly 'range': _T_Range
    readonly 'trailing trivia': _T_Trivia
    readonly 'type': _T_String_Type
    readonly 'value': string
}

export type _T_Structural_Token = {
    readonly 'range': _T_Range
    readonly 'trailing trivia': _T_Trivia
}

export type _T_Value = {
    readonly 'type': 
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['indexed collection', 
            | readonly ['dictionary', {
                readonly 'entries': _T_Key_Value_Pairs
                readonly '{': _T_Structural_Token
                readonly '}': _T_Structural_Token
            }]
            | readonly ['verbose group', {
                readonly '(': _T_Structural_Token
                readonly ')': _T_Structural_Token
                readonly 'entries': _T_Key_Value_Pairs
            }]
        ]
        | readonly ['missing data', {
            readonly '#': _T_Structural_Token
        }]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token
        }]
        | readonly ['ordered collection', 
            | readonly ['concise group', {
                readonly '<': _T_Structural_Token
                readonly '>': _T_Structural_Token
                readonly 'elements': _T_Elements
            }]
            | readonly ['list', {
                readonly '[': _T_Structural_Token
                readonly ']': _T_Structural_Token
                readonly 'elements': _T_Elements
            }]
        ]
        | readonly ['set optional value', {
            readonly '*': _T_Structural_Token
            readonly 'value': _T_Value
        }]
        | readonly ['string', _T_String]
        | readonly ['tagged value', {
            readonly 'state': _T_String
            readonly 'value': _T_Value
            readonly '|': _T_Structural_Token
        }]

}



export type _T_Range = {
    readonly 'end': _T_Location
    readonly 'start': _T_Location
}

export type _T_Location = {
    readonly 'absolute': number
    readonly 'relative': _T_Relative_Location
}

export type _T_Relative_Location = {
    readonly 'column': number
    readonly 'line': number
}

export type _T_Trivia = {
    readonly 'comments': _et.Array<{
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

export type _T_String_Type =
    | readonly ['apostrophed', null]
    | readonly ['backticked', null]
    | readonly ['quoted', null]
    | readonly ['undelimited', null]