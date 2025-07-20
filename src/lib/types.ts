import * as _et from 'exupery-core-types'

export type Location = {
    readonly 'relative': Relative_Location
    readonly 'absolute': number
}

export type Range = {
    readonly 'start': Location
    readonly 'end': Location
}

export type Relative_Location = {
    readonly 'line': number
    readonly 'column': number //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
}

export type Document = {
    'header': _et.Optional_Value<{
        '!': Structural_Token
        'value': Value
    }>
    'content': Value
}

export type Value = {
    'start': Location //can be derived
    'end': Location //can be derived
    'type': Value_Type
}

export type Value_Type =
    | ['string', StringX]
    | ['indexed collection',
        | ['dictionary', {
            '{': Structural_Token
            'entries': Key_Value_Pairs
            '}': Structural_Token
        }]
        | ['verbose group', {
            '(': Structural_Token
            'entries': Key_Value_Pairs
            ')': Structural_Token
        }]
    ]
    | ['ordered collection',
        | ['list', {
            '[': Structural_Token
            'elements': Elements
            ']': Structural_Token
        }]
        | ['concise group', {
            '<': Structural_Token
            'elements': Elements
            '>': Structural_Token
        }]
    ]
    | ['include', {
        '@': Structural_Token
        'path': StringX
    }]
    | ['tagged value', {
        '|': Structural_Token
        'state': StringX
        'value': Value
    }]
    | ['not set', {
        '~': Structural_Token
    }]
    | ['set optional value', {
        '*': Structural_Token
        'value': Value
    }]

export type StringX = {
    readonly 'trailing trivia': Trivia
    readonly 'start': Location
    readonly 'value': string
    readonly 'type': String_Type
    readonly 'end': Location

}

export type String_Type =
    | ['quoted', null]
    | ['apostrophed', null]
    | ['undelimited', null]
    | ['backticked', null]


export type Key_Value_Pairs = _et.Array<Key_Value_Pair>

export type Element = {
    'value': Value
    ',': _et.Optional_Value<Structural_Token>
}

export type Elements = _et.Array<Element>

export type Key_Value_Pair = {
    'key': StringX
    'value': _et.Optional_Value<{
        ':': Structural_Token
        'value': Value
    }>
    ',': _et.Optional_Value<Structural_Token>
}

export type Structural_Token = {
    readonly 'trailing trivia': Trivia
    readonly 'start': Location
    readonly 'end': Location
}

export type Whitespace = {
    'start': Location
    'end': Location
    'value': string
}

export type Trivia = {
    'start': Location
    'leading whitespace': Whitespace
    'comments': _et.Array<{
        'type':
        | ['line', null]
        | ['block', null]
        'content': string
        'begin': Location
        'end': Location
        'trailing whitespace': Whitespace
    }>
}