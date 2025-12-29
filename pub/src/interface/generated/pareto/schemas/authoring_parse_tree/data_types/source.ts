import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"
import * as _i_imports_token from "../../token/data_types/source"

// **** TYPES

export type _T_Concrete_Value = _i_core._T_State_Group<null, 
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
        readonly 'status': _i_core._T_State_Group<null, 
            | readonly ['missing data', {
                readonly '#': _T_Structural_Token
            }]
            | readonly ['set', {
                readonly 'state': _T_String
                readonly 'value': _T_Value
            }]
        >
        readonly '|': _T_Structural_Token
    }]
>

export type _T_Document = {
    readonly 'content': _T_Value
    readonly 'header': _et.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export type _T_Elements = _i_core._T_List<null, {
    readonly 'value': _T_Value
}>

export type _T_Key_Value_Pairs = _i_core._T_List<null, {
    readonly ',': _et.Optional_Value<_T_Structural_Token>
    readonly 'key': _T_String
    readonly 'value': _et.Optional_Value<{
        readonly ':': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}>

export type _T_String = {
    readonly 'range': _i_imports_token._T_Range
    readonly 'trailing trivia': _i_imports_token._T_Trivia
    readonly 'type': _i_imports_token._T_String_Type
    readonly 'value': string
}

export type _T_Structural_Token = {
    readonly 'range': _i_imports_token._T_Range
    readonly 'trailing trivia': _i_imports_token._T_Trivia
}

export type _T_Value = {
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['concrete', _T_Concrete_Value]
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['missing data', {
            readonly '#': _T_Structural_Token
        }]
    >
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Concrete_Value = _T_Concrete_Value

export type Document = _T_Document

export type Elements = _T_Elements

export type Key_Value_Pairs = _T_Key_Value_Pairs

export type String = _T_String

export type Structural_Token = _T_Structural_Token

export type Value = _T_Value

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Concrete_Value {
    
    export namespace SG {
        
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
            
            export namespace status {
                
                export namespace SG {
                    
                    export namespace missing_data {
                        
                        export namespace $ha_ {
                        }
                        export type $ha_ = _T_Structural_Token
                    }
                    export type missing_data = {
                        readonly '#': _T_Structural_Token
                    }
                    
                    export namespace _set {
                        
                        export namespace state {
                        }
                        export type state = _T_String
                        
                        export namespace value {
                        }
                        export type value = _T_Value
                    }
                    export type _set = {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }
                }
                export type SG = 
                    | readonly ['missing data', {
                        readonly '#': _T_Structural_Token
                    }]
                    | readonly ['set', {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }]
            }
            export type status = _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
            
            export namespace $vb_ {
            }
            export type $vb_ = _T_Structural_Token
        }
        export type tagged_value = {
            readonly 'status': _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
            readonly '|': _T_Structural_Token
        }
    }
    export type SG = 
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
            readonly 'status': _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
            readonly '|': _T_Structural_Token
        }]
}

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
    export type header = _et.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export namespace _T_Elements {
    
    export namespace L {
        
        export namespace value {
        }
        export type value = _T_Value
    }
    export type L = {
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
        export type $cm_ = _et.Optional_Value<_T_Structural_Token>
        
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
        export type value = _et.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
    export type L = {
        readonly ',': _et.Optional_Value<_T_Structural_Token>
        readonly 'key': _T_String
        readonly 'value': _et.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
}

export namespace _T_String {
    
    export namespace range {
    }
    export type range = _i_imports_token._T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _i_imports_token._T_Trivia
    
    export namespace _type {
    }
    export type _type = _i_imports_token._T_String_Type
    export type value = string
}

export namespace _T_Structural_Token {
    
    export namespace range {
    }
    export type range = _i_imports_token._T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _i_imports_token._T_Trivia
}

export namespace _T_Value {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace concrete {
            }
            export type concrete = _T_Concrete_Value
            
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
            
            export namespace missing_data {
                
                export namespace $ha_ {
                }
                export type $ha_ = _T_Structural_Token
            }
            export type missing_data = {
                readonly '#': _T_Structural_Token
            }
        }
        export type SG = 
            | readonly ['concrete', _T_Concrete_Value]
            | readonly ['include', {
                readonly '@': _T_Structural_Token
                readonly 'path': _T_String
            }]
            | readonly ['missing data', {
                readonly '#': _T_Structural_Token
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['concrete', _T_Concrete_Value]
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['missing data', {
            readonly '#': _T_Structural_Token
        }]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Concrete_Value {
    
    export namespace SG {
        
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
            
            export namespace status {
                
                export namespace SG {
                    
                    export namespace missing_data {
                        
                        export namespace $ha_ {
                        }
                        export type $ha_ = _T_Structural_Token
                    }
                    export type missing_data = {
                        readonly '#': _T_Structural_Token
                    }
                    
                    export namespace _set {
                        
                        export namespace state {
                        }
                        export type state = _T_String
                        
                        export namespace value {
                        }
                        export type value = _T_Value
                    }
                    export type _set = {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }
                }
                export type SG = 
                    | readonly ['missing data', {
                        readonly '#': _T_Structural_Token
                    }]
                    | readonly ['set', {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }]
            }
            export type status = _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
            
            export namespace $vb_ {
            }
            export type $vb_ = _T_Structural_Token
        }
        export type tagged_value = {
            readonly 'status': _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
            readonly '|': _T_Structural_Token
        }
    }
    export type SG = 
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
            readonly 'status': _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
            readonly '|': _T_Structural_Token
        }]
}

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
    export type header = _et.Optional_Value<{
        readonly '!': _T_Structural_Token
        readonly 'value': _T_Value
    }>
}

export namespace Elements {
    
    export namespace L {
        
        export namespace value {
        }
        export type value = _T_Value
    }
    export type L = {
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
        export type $cm_ = _et.Optional_Value<_T_Structural_Token>
        
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
        export type value = _et.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
    export type L = {
        readonly ',': _et.Optional_Value<_T_Structural_Token>
        readonly 'key': _T_String
        readonly 'value': _et.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }
}

export namespace String {
    
    export namespace range {
    }
    export type range = _i_imports_token._T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _i_imports_token._T_Trivia
    
    export namespace _type {
    }
    export type _type = _i_imports_token._T_String_Type
    export type value = string
}

export namespace Structural_Token {
    
    export namespace range {
    }
    export type range = _i_imports_token._T_Range
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _i_imports_token._T_Trivia
}

export namespace Value {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace concrete {
            }
            export type concrete = _T_Concrete_Value
            
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
            
            export namespace missing_data {
                
                export namespace $ha_ {
                }
                export type $ha_ = _T_Structural_Token
            }
            export type missing_data = {
                readonly '#': _T_Structural_Token
            }
        }
        export type SG = 
            | readonly ['concrete', _T_Concrete_Value]
            | readonly ['include', {
                readonly '@': _T_Structural_Token
                readonly 'path': _T_String
            }]
            | readonly ['missing data', {
                readonly '#': _T_Structural_Token
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['concrete', _T_Concrete_Value]
        | readonly ['include', {
            readonly '@': _T_Structural_Token
            readonly 'path': _T_String
        }]
        | readonly ['missing data', {
            readonly '#': _T_Structural_Token
        }]
    >
}
