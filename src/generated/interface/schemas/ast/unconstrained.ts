import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unconstrained"

// **** TYPES

export type _T_Document = {
    readonly 'content': _T_Value
    readonly 'header': _pt.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export type _T_Elements = _i_core._T_List<null, {
    readonly ',': _pt.Optional_Value<_T_Structural_Token>
    readonly 'value': _T_Value
}>

export type _T_Key_Value_Pairs = _i_core._T_List<null, {
    readonly ',': _pt.Optional_Value<_T_Structural_Token>
    readonly 'key': _T_String
    readonly 'value': _pt.Optional_Value<{
        readonly ':': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}>

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

export type _T_Relative_Range = {
    readonly 'end': _T_Relative_Location
    readonly 'start': _T_Relative_Location
}

export type _T_String = {
    readonly 'range': _T_Range
    readonly 'trailing trivia': _T_Trivia
    readonly 'type': _T_String_Type
    readonly 'value': string
}

export type _T_String_Type = _i_core._T_State_Group<null, 
    | readonly ['apostrophed', null]
    | readonly ['backticked', null]
    | readonly ['quoted', null]
    | readonly ['undelimited', null]
>

export type _T_Structural_Token = {
    readonly 'range': _T_Range
    readonly 'trailing trivia': _T_Trivia
}

export type _T_Trivia = {
    readonly 'comments': _i_core._T_List<null, {
        readonly 'content': string
        readonly 'range': _T_Range
        readonly 'trailing whitespace': _T_Whitespace
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['block', null]
            | readonly ['line', null]
        >
    }>
    readonly 'leading whitespace': _T_Whitespace
}

export type _T_Value = {
    readonly 'range': _T_Range
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['indexed collection', _i_core._T_State_Group<null, 
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
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<null, 
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
        >]
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
    >
}

export type _T_Whitespace = {
    readonly 'range': _T_Range
    readonly 'value': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Document = _T_Document

export type Elements = _T_Elements

export type Key_Value_Pairs = _T_Key_Value_Pairs

export type Location = _T_Location

export type Range = _T_Range

export type Relative_Location = _T_Relative_Location

export type Relative_Range = _T_Relative_Range

export type String = _T_String

export type String_Type = _T_String_Type

export type Structural_Token = _T_Structural_Token

export type Trivia = _T_Trivia

export type Value = _T_Value

export type Whitespace = _T_Whitespace

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Document {
    
    export namespace content {
    }
    export type content = _T_Value
    
    export namespace header {
        
        export namespace O {
            
            export namespace $ex_ {
            }
            export type $ex_ = _T_Structural_Token
            
            export namespace value {
            }
            export type value = _T_Value
        }
        export type O = {
            readonly '!': _T_Structural_Token
            readonly 'value': _T_Value
        }
    }
    export type header = _pt.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export namespace _T_Elements {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O = _T_Structural_Token
        }
        export type $cm_ = _pt.Optional_Value<_T_Structural_Token>
        
        export namespace value {
        }
        export type value = _T_Value
    }
    export type L = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token>
        readonly 'value': _T_Value
    }
}

export namespace _T_Key_Value_Pairs {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O = _T_Structural_Token
        }
        export type $cm_ = _pt.Optional_Value<_T_Structural_Token>
        
        export namespace key {
        }
        export type key = _T_String
        
        export namespace value {
            
            export namespace O {
                
                export namespace $cl_ {
                }
                export type $cl_ = _T_Structural_Token
                
                export namespace value {
                }
                export type value = _T_Value
            }
            export type O = {
                readonly ':': _T_Structural_Token
                readonly 'value': _T_Value
            }
        }
        export type value = _pt.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
    export type L = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token>
        readonly 'key': _T_String
        readonly 'value': _pt.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
}

export namespace _T_Location {
    export type absolute = number
    
    export namespace relative {
    }
    export type relative = _T_Relative_Location
}

export namespace _T_Range {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace start {
    }
    export type start = _T_Location
}

export namespace _T_Relative_Location {
    export type column = number
    export type line = number
}

export namespace _T_Relative_Range {
    
    export namespace end {
    }
    export type end = _T_Relative_Location
    
    export namespace start {
    }
    export type start = _T_Relative_Location
}

export namespace _T_String {
    
    export namespace range {
    }
    export type range = _T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _T_Trivia
    
    export namespace _type {
    }
    export type _type = _T_String_Type
    export type value = string
}

export namespace _T_String_Type {
    
    export namespace SG {
        export type apostrophed = null
        export type backticked = null
        export type quoted = null
        export type undelimited = null
    }
    export type SG = 
        | readonly ['apostrophed', null]
        | readonly ['backticked', null]
        | readonly ['quoted', null]
        | readonly ['undelimited', null]
}

export namespace _T_Structural_Token {
    
    export namespace range {
    }
    export type range = _T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _T_Trivia
}

export namespace _T_Trivia {
    
    export namespace comments {
        
        export namespace L {
            export type content = string
            
            export namespace range {
            }
            export type range = _T_Range
            
            export namespace trailing_whitespace {
            }
            export type trailing_whitespace = _T_Whitespace
            
            export namespace _type {
                
                export namespace SG {
                    export type block = null
                    export type line = null
                }
                export type SG = 
                    | readonly ['block', null]
                    | readonly ['line', null]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
        export type L = {
            readonly 'content': string
            readonly 'range': _T_Range
            readonly 'trailing whitespace': _T_Whitespace
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
    }
    export type comments = _i_core._T_List<null, {
        readonly 'content': string
        readonly 'range': _T_Range
        readonly 'trailing whitespace': _T_Whitespace
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['block', null]
            | readonly ['line', null]
        >
    }>
    
    export namespace leading_whitespace {
    }
    export type leading_whitespace = _T_Whitespace
}

export namespace _T_Value {
    
    export namespace range {
    }
    export type range = _T_Range
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace include {
                
                export namespace $at_ {
                }
                export type $at_ = _T_Structural_Token
                
                export namespace path {
                }
                export type path = _T_String
            }
            export type include = {
                readonly '@': _T_Structural_Token
                readonly 'path': _T_String
            }
            
            export namespace indexed_collection {
                
                export namespace SG {
                    
                    export namespace dictionary {
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                        
                        export namespace $co_ {
                        }
                        export type $co_ = _T_Structural_Token
                        
                        export namespace $cc_ {
                        }
                        export type $cc_ = _T_Structural_Token
                    }
                    export type dictionary = {
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly '{': _T_Structural_Token
                        readonly '}': _T_Structural_Token
                    }
                    
                    export namespace verbose_group {
                        
                        export namespace $po_ {
                        }
                        export type $po_ = _T_Structural_Token
                        
                        export namespace $pc_ {
                        }
                        export type $pc_ = _T_Structural_Token
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                    }
                    export type verbose_group = {
                        readonly '(': _T_Structural_Token
                        readonly ')': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                    }
                }
                export type SG = 
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
            }
            export type indexed_collection = _i_core._T_State_Group<null, 
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
            >
            
            export namespace not_set {
                
                export namespace $ti_ {
                }
                export type $ti_ = _T_Structural_Token
            }
            export type not_set = {
                readonly '~': _T_Structural_Token
            }
            
            export namespace ordered_collection {
                
                export namespace SG {
                    
                    export namespace concise_group {
                        
                        export namespace $st_ {
                        }
                        export type $st_ = _T_Structural_Token
                        
                        export namespace $gt_ {
                        }
                        export type $gt_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                    }
                    export type concise_group = {
                        readonly '<': _T_Structural_Token
                        readonly '>': _T_Structural_Token
                        readonly 'elements': _T_Elements
                    }
                    
                    export namespace list {
                        
                        export namespace $bo_ {
                        }
                        export type $bo_ = _T_Structural_Token
                        
                        export namespace $bc_ {
                        }
                        export type $bc_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                    }
                    export type list = {
                        readonly '[': _T_Structural_Token
                        readonly ']': _T_Structural_Token
                        readonly 'elements': _T_Elements
                    }
                }
                export type SG = 
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
            }
            export type ordered_collection = _i_core._T_State_Group<null, 
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
            >
            
            export namespace set_optional_value {
                
                export namespace $sr_ {
                }
                export type $sr_ = _T_Structural_Token
                
                export namespace value {
                }
                export type value = _T_Value
            }
            export type set_optional_value = {
                readonly '*': _T_Structural_Token
                readonly 'value': _T_Value
            }
            
            export namespace _string {
            }
            export type _string = _T_String
            
            export namespace tagged_value {
                
                export namespace state {
                }
                export type state = _T_String
                
                export namespace value {
                }
                export type value = _T_Value
                
                export namespace $vb_ {
                }
                export type $vb_ = _T_Structural_Token
            }
            export type tagged_value = {
                readonly 'state': _T_String
                readonly 'value': _T_Value
                readonly '|': _T_Structural_Token
            }
        }
        export type SG = 
            | readonly ['include', {
                readonly '@': _T_Structural_Token
                readonly 'path': _T_String
            }]
            | readonly ['indexed collection', _i_core._T_State_Group<null, 
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
            >]
            | readonly ['not set', {
                readonly '~': _T_Structural_Token
            }]
            | readonly ['ordered collection', _i_core._T_State_Group<null, 
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
            >]
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
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['indexed collection', _i_core._T_State_Group<null, 
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
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<null, 
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
        >]
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
    >
}

export namespace _T_Whitespace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type value = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Document {
    
    export namespace content {
    }
    export type content = _T_Value
    
    export namespace header {
        
        export namespace O {
            
            export namespace $ex_ {
            }
            export type $ex_ = _T_Structural_Token
            
            export namespace value {
            }
            export type value = _T_Value
        }
        export type O = {
            readonly '!': _T_Structural_Token
            readonly 'value': _T_Value
        }
    }
    export type header = _pt.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export namespace Elements {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O = _T_Structural_Token
        }
        export type $cm_ = _pt.Optional_Value<_T_Structural_Token>
        
        export namespace value {
        }
        export type value = _T_Value
    }
    export type L = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token>
        readonly 'value': _T_Value
    }
}

export namespace Key_Value_Pairs {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O = _T_Structural_Token
        }
        export type $cm_ = _pt.Optional_Value<_T_Structural_Token>
        
        export namespace key {
        }
        export type key = _T_String
        
        export namespace value {
            
            export namespace O {
                
                export namespace $cl_ {
                }
                export type $cl_ = _T_Structural_Token
                
                export namespace value {
                }
                export type value = _T_Value
            }
            export type O = {
                readonly ':': _T_Structural_Token
                readonly 'value': _T_Value
            }
        }
        export type value = _pt.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
    export type L = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token>
        readonly 'key': _T_String
        readonly 'value': _pt.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
}

export namespace Location {
    export type absolute = number
    
    export namespace relative {
    }
    export type relative = _T_Relative_Location
}

export namespace Range {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace start {
    }
    export type start = _T_Location
}

export namespace Relative_Location {
    export type column = number
    export type line = number
}

export namespace Relative_Range {
    
    export namespace end {
    }
    export type end = _T_Relative_Location
    
    export namespace start {
    }
    export type start = _T_Relative_Location
}

export namespace String {
    
    export namespace range {
    }
    export type range = _T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _T_Trivia
    
    export namespace _type {
    }
    export type _type = _T_String_Type
    export type value = string
}

export namespace String_Type {
    
    export namespace SG {
        export type apostrophed = null
        export type backticked = null
        export type quoted = null
        export type undelimited = null
    }
    export type SG = 
        | readonly ['apostrophed', null]
        | readonly ['backticked', null]
        | readonly ['quoted', null]
        | readonly ['undelimited', null]
}

export namespace Structural_Token {
    
    export namespace range {
    }
    export type range = _T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _T_Trivia
}

export namespace Trivia {
    
    export namespace comments {
        
        export namespace L {
            export type content = string
            
            export namespace range {
            }
            export type range = _T_Range
            
            export namespace trailing_whitespace {
            }
            export type trailing_whitespace = _T_Whitespace
            
            export namespace _type {
                
                export namespace SG {
                    export type block = null
                    export type line = null
                }
                export type SG = 
                    | readonly ['block', null]
                    | readonly ['line', null]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
        export type L = {
            readonly 'content': string
            readonly 'range': _T_Range
            readonly 'trailing whitespace': _T_Whitespace
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
    }
    export type comments = _i_core._T_List<null, {
        readonly 'content': string
        readonly 'range': _T_Range
        readonly 'trailing whitespace': _T_Whitespace
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['block', null]
            | readonly ['line', null]
        >
    }>
    
    export namespace leading_whitespace {
    }
    export type leading_whitespace = _T_Whitespace
}

export namespace Value {
    
    export namespace range {
    }
    export type range = _T_Range
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace include {
                
                export namespace $at_ {
                }
                export type $at_ = _T_Structural_Token
                
                export namespace path {
                }
                export type path = _T_String
            }
            export type include = {
                readonly '@': _T_Structural_Token
                readonly 'path': _T_String
            }
            
            export namespace indexed_collection {
                
                export namespace SG {
                    
                    export namespace dictionary {
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                        
                        export namespace $co_ {
                        }
                        export type $co_ = _T_Structural_Token
                        
                        export namespace $cc_ {
                        }
                        export type $cc_ = _T_Structural_Token
                    }
                    export type dictionary = {
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly '{': _T_Structural_Token
                        readonly '}': _T_Structural_Token
                    }
                    
                    export namespace verbose_group {
                        
                        export namespace $po_ {
                        }
                        export type $po_ = _T_Structural_Token
                        
                        export namespace $pc_ {
                        }
                        export type $pc_ = _T_Structural_Token
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                    }
                    export type verbose_group = {
                        readonly '(': _T_Structural_Token
                        readonly ')': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                    }
                }
                export type SG = 
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
            }
            export type indexed_collection = _i_core._T_State_Group<null, 
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
            >
            
            export namespace not_set {
                
                export namespace $ti_ {
                }
                export type $ti_ = _T_Structural_Token
            }
            export type not_set = {
                readonly '~': _T_Structural_Token
            }
            
            export namespace ordered_collection {
                
                export namespace SG {
                    
                    export namespace concise_group {
                        
                        export namespace $st_ {
                        }
                        export type $st_ = _T_Structural_Token
                        
                        export namespace $gt_ {
                        }
                        export type $gt_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                    }
                    export type concise_group = {
                        readonly '<': _T_Structural_Token
                        readonly '>': _T_Structural_Token
                        readonly 'elements': _T_Elements
                    }
                    
                    export namespace list {
                        
                        export namespace $bo_ {
                        }
                        export type $bo_ = _T_Structural_Token
                        
                        export namespace $bc_ {
                        }
                        export type $bc_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                    }
                    export type list = {
                        readonly '[': _T_Structural_Token
                        readonly ']': _T_Structural_Token
                        readonly 'elements': _T_Elements
                    }
                }
                export type SG = 
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
            }
            export type ordered_collection = _i_core._T_State_Group<null, 
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
            >
            
            export namespace set_optional_value {
                
                export namespace $sr_ {
                }
                export type $sr_ = _T_Structural_Token
                
                export namespace value {
                }
                export type value = _T_Value
            }
            export type set_optional_value = {
                readonly '*': _T_Structural_Token
                readonly 'value': _T_Value
            }
            
            export namespace _string {
            }
            export type _string = _T_String
            
            export namespace tagged_value {
                
                export namespace state {
                }
                export type state = _T_String
                
                export namespace value {
                }
                export type value = _T_Value
                
                export namespace $vb_ {
                }
                export type $vb_ = _T_Structural_Token
            }
            export type tagged_value = {
                readonly 'state': _T_String
                readonly 'value': _T_Value
                readonly '|': _T_Structural_Token
            }
        }
        export type SG = 
            | readonly ['include', {
                readonly '@': _T_Structural_Token
                readonly 'path': _T_String
            }]
            | readonly ['indexed collection', _i_core._T_State_Group<null, 
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
            >]
            | readonly ['not set', {
                readonly '~': _T_Structural_Token
            }]
            | readonly ['ordered collection', _i_core._T_State_Group<null, 
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
            >]
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
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['indexed collection', _i_core._T_State_Group<null, 
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
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<null, 
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
        >]
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
    >
}

export namespace Whitespace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type value = string
}
