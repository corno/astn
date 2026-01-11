import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/resolved"
    import * as _i_imports_token from "../../token/data_types/source"
    
    // **** TYPES
    
    export type _T_Structural_Token = {
        readonly 'trailing trivia': _i_imports_token._T_Trivia
        readonly 'range': _i_imports_token._T_Range
    }
    
    export type _T_String = {
        readonly 'trailing trivia': _i_imports_token._T_Trivia
        readonly 'range': _i_imports_token._T_Range
        readonly 'value': string
        readonly 'type': _i_imports_token._T_String_Type
    }
    
    export type _T_Key_Value_Pairs = _i_core._T_List<null, {
        readonly 'key': _T_String
        readonly 'value': _pi.Optional_Value<{
            readonly ':': _T_Structural_Token
            readonly 'value': _T_Value
        }>
    }>
    
    export type _T_Elements = _i_core._T_List<null, {
        readonly 'value': _T_Value
    }>
    
    export type _T_Concrete_Value = _i_core._T_State_Group<null, 
        | readonly ['indexed collection', _i_core._T_State_Group<null, 
            | readonly ['dictionary', {
                readonly '{': _T_Structural_Token
                readonly 'entries': _T_Key_Value_Pairs
                readonly '}': _T_Structural_Token
            }]
            | readonly ['verbose group', {
                readonly '(': _T_Structural_Token
                readonly 'entries': _T_Key_Value_Pairs
                readonly ')': _T_Structural_Token
            }]
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<null, 
            | readonly ['list', {
                readonly '[': _T_Structural_Token
                readonly 'elements': _T_Elements
                readonly ']': _T_Structural_Token
            }]
            | readonly ['concise group', {
                readonly '<': _T_Structural_Token
                readonly 'elements': _T_Elements
                readonly '>': _T_Structural_Token
            }]
        >]
        | readonly ['set optional value', {
            readonly '*': _T_Structural_Token
            readonly 'value': _T_Value
        }]
        | readonly ['state', {
            readonly '|': _T_Structural_Token
            readonly 'status': _i_core._T_State_Group<null, 
                | readonly ['missing data', {
                    readonly '#': _T_Structural_Token
                }]
                | readonly ['set', {
                    readonly 'state': _T_String
                    readonly 'value': _T_Value
                }]
            >
        }]
        | readonly ['text', _T_String]
    >
    
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
    
    export type _T_Content = _T_Value
    
    export type _T_Document = {
        readonly 'header': _pi.Optional_Value<{
            readonly '!': _T_Structural_Token
            readonly 'value': _T_Value
        }>
        readonly 'content': _T_Content
    }
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Structural_Token = _T_Structural_Token
    
    export type String = _T_String
    
    export type Key_Value_Pairs = _T_Key_Value_Pairs
    
    export type Elements = _T_Elements
    
    export type Concrete_Value = _T_Concrete_Value
    
    export type Value = _T_Value
    
    export type Content = _T_Content
    
    export type Document = _T_Document
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Structural_Token {
        
        export namespace trailing_trivia {
        }
        export type trailing_trivia = _i_imports_token._T_Trivia
        
        export namespace range {
        }
        export type range = _i_imports_token._T_Range
    }
    
    export namespace _T_String {
        
        export namespace trailing_trivia {
        }
        export type trailing_trivia = _i_imports_token._T_Trivia
        
        export namespace range {
        }
        export type range = _i_imports_token._T_Range
        export type value = string
        
        export namespace _type {
        }
        export type _type = _i_imports_token._T_String_Type
    }
    
    export namespace _T_Key_Value_Pairs {
        
        export namespace L {
            
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
            export type value = _pi.Optional_Value<{
                readonly ':': _T_Structural_Token
                readonly 'value': _T_Value
            }>
        }
        export type L = {
            readonly 'key': _T_String
            readonly 'value': _pi.Optional_Value<{
                readonly ':': _T_Structural_Token
                readonly 'value': _T_Value
            }>
        }
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
    
    export namespace _T_Concrete_Value {
        
        export namespace SG {
            
            export namespace indexed_collection {
                
                export namespace SG {
                    
                    export namespace dictionary {
                        
                        export namespace $co_ {
                        }
                        export type $co_ = _T_Structural_Token
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                        
                        export namespace $cc_ {
                        }
                        export type $cc_ = _T_Structural_Token
                    }
                    export type dictionary = {
                        readonly '{': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly '}': _T_Structural_Token
                    }
                    
                    export namespace verbose_group {
                        
                        export namespace $po_ {
                        }
                        export type $po_ = _T_Structural_Token
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                        
                        export namespace $pc_ {
                        }
                        export type $pc_ = _T_Structural_Token
                    }
                    export type verbose_group = {
                        readonly '(': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly ')': _T_Structural_Token
                    }
                }
                export type SG = 
                    | readonly ['dictionary', {
                        readonly '{': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly '}': _T_Structural_Token
                    }]
                    | readonly ['verbose group', {
                        readonly '(': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly ')': _T_Structural_Token
                    }]
            }
            export type indexed_collection = _i_core._T_State_Group<null, 
                | readonly ['dictionary', {
                    readonly '{': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly '}': _T_Structural_Token
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly ')': _T_Structural_Token
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
                    
                    export namespace list {
                        
                        export namespace $bo_ {
                        }
                        export type $bo_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                        
                        export namespace $bc_ {
                        }
                        export type $bc_ = _T_Structural_Token
                    }
                    export type list = {
                        readonly '[': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly ']': _T_Structural_Token
                    }
                    
                    export namespace concise_group {
                        
                        export namespace $st_ {
                        }
                        export type $st_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                        
                        export namespace $gt_ {
                        }
                        export type $gt_ = _T_Structural_Token
                    }
                    export type concise_group = {
                        readonly '<': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly '>': _T_Structural_Token
                    }
                }
                export type SG = 
                    | readonly ['list', {
                        readonly '[': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly ']': _T_Structural_Token
                    }]
                    | readonly ['concise group', {
                        readonly '<': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly '>': _T_Structural_Token
                    }]
            }
            export type ordered_collection = _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly '[': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly ']': _T_Structural_Token
                }]
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly '>': _T_Structural_Token
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
            
            export namespace state {
                
                export namespace $vb_ {
                }
                export type $vb_ = _T_Structural_Token
                
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
            }
            export type state = {
                readonly '|': _T_Structural_Token
                readonly 'status': _i_core._T_State_Group<null, 
                    | readonly ['missing data', {
                        readonly '#': _T_Structural_Token
                    }]
                    | readonly ['set', {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }]
                >
            }
            
            export namespace text {
            }
            export type text = _T_String
        }
        export type SG = 
            | readonly ['indexed collection', _i_core._T_State_Group<null, 
                | readonly ['dictionary', {
                    readonly '{': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly '}': _T_Structural_Token
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly ')': _T_Structural_Token
                }]
            >]
            | readonly ['not set', {
                readonly '~': _T_Structural_Token
            }]
            | readonly ['ordered collection', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly '[': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly ']': _T_Structural_Token
                }]
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly '>': _T_Structural_Token
                }]
            >]
            | readonly ['set optional value', {
                readonly '*': _T_Structural_Token
                readonly 'value': _T_Value
            }]
            | readonly ['state', {
                readonly '|': _T_Structural_Token
                readonly 'status': _i_core._T_State_Group<null, 
                    | readonly ['missing data', {
                        readonly '#': _T_Structural_Token
                    }]
                    | readonly ['set', {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }]
                >
            }]
            | readonly ['text', _T_String]
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
    
    export namespace _T_Content {
    }
    
    export namespace _T_Document {
        
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
        export type header = _pi.Optional_Value<{
            readonly '!': _T_Structural_Token
            readonly 'value': _T_Value
        }>
        
        export namespace content {
        }
        export type content = _T_Content
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Structural_Token {
        
        export namespace trailing_trivia {
        }
        export type trailing_trivia = _i_imports_token._T_Trivia
        
        export namespace range {
        }
        export type range = _i_imports_token._T_Range
    }
    
    export namespace String {
        
        export namespace trailing_trivia {
        }
        export type trailing_trivia = _i_imports_token._T_Trivia
        
        export namespace range {
        }
        export type range = _i_imports_token._T_Range
        export type value = string
        
        export namespace _type {
        }
        export type _type = _i_imports_token._T_String_Type
    }
    
    export namespace Key_Value_Pairs {
        
        export namespace L {
            
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
            export type value = _pi.Optional_Value<{
                readonly ':': _T_Structural_Token
                readonly 'value': _T_Value
            }>
        }
        export type L = {
            readonly 'key': _T_String
            readonly 'value': _pi.Optional_Value<{
                readonly ':': _T_Structural_Token
                readonly 'value': _T_Value
            }>
        }
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
    
    export namespace Concrete_Value {
        
        export namespace SG {
            
            export namespace indexed_collection {
                
                export namespace SG {
                    
                    export namespace dictionary {
                        
                        export namespace $co_ {
                        }
                        export type $co_ = _T_Structural_Token
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                        
                        export namespace $cc_ {
                        }
                        export type $cc_ = _T_Structural_Token
                    }
                    export type dictionary = {
                        readonly '{': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly '}': _T_Structural_Token
                    }
                    
                    export namespace verbose_group {
                        
                        export namespace $po_ {
                        }
                        export type $po_ = _T_Structural_Token
                        
                        export namespace entries {
                        }
                        export type entries = _T_Key_Value_Pairs
                        
                        export namespace $pc_ {
                        }
                        export type $pc_ = _T_Structural_Token
                    }
                    export type verbose_group = {
                        readonly '(': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly ')': _T_Structural_Token
                    }
                }
                export type SG = 
                    | readonly ['dictionary', {
                        readonly '{': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly '}': _T_Structural_Token
                    }]
                    | readonly ['verbose group', {
                        readonly '(': _T_Structural_Token
                        readonly 'entries': _T_Key_Value_Pairs
                        readonly ')': _T_Structural_Token
                    }]
            }
            export type indexed_collection = _i_core._T_State_Group<null, 
                | readonly ['dictionary', {
                    readonly '{': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly '}': _T_Structural_Token
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly ')': _T_Structural_Token
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
                    
                    export namespace list {
                        
                        export namespace $bo_ {
                        }
                        export type $bo_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                        
                        export namespace $bc_ {
                        }
                        export type $bc_ = _T_Structural_Token
                    }
                    export type list = {
                        readonly '[': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly ']': _T_Structural_Token
                    }
                    
                    export namespace concise_group {
                        
                        export namespace $st_ {
                        }
                        export type $st_ = _T_Structural_Token
                        
                        export namespace elements {
                        }
                        export type elements = _T_Elements
                        
                        export namespace $gt_ {
                        }
                        export type $gt_ = _T_Structural_Token
                    }
                    export type concise_group = {
                        readonly '<': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly '>': _T_Structural_Token
                    }
                }
                export type SG = 
                    | readonly ['list', {
                        readonly '[': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly ']': _T_Structural_Token
                    }]
                    | readonly ['concise group', {
                        readonly '<': _T_Structural_Token
                        readonly 'elements': _T_Elements
                        readonly '>': _T_Structural_Token
                    }]
            }
            export type ordered_collection = _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly '[': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly ']': _T_Structural_Token
                }]
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly '>': _T_Structural_Token
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
            
            export namespace state {
                
                export namespace $vb_ {
                }
                export type $vb_ = _T_Structural_Token
                
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
            }
            export type state = {
                readonly '|': _T_Structural_Token
                readonly 'status': _i_core._T_State_Group<null, 
                    | readonly ['missing data', {
                        readonly '#': _T_Structural_Token
                    }]
                    | readonly ['set', {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }]
                >
            }
            
            export namespace text {
            }
            export type text = _T_String
        }
        export type SG = 
            | readonly ['indexed collection', _i_core._T_State_Group<null, 
                | readonly ['dictionary', {
                    readonly '{': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly '}': _T_Structural_Token
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token
                    readonly 'entries': _T_Key_Value_Pairs
                    readonly ')': _T_Structural_Token
                }]
            >]
            | readonly ['not set', {
                readonly '~': _T_Structural_Token
            }]
            | readonly ['ordered collection', _i_core._T_State_Group<null, 
                | readonly ['list', {
                    readonly '[': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly ']': _T_Structural_Token
                }]
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token
                    readonly 'elements': _T_Elements
                    readonly '>': _T_Structural_Token
                }]
            >]
            | readonly ['set optional value', {
                readonly '*': _T_Structural_Token
                readonly 'value': _T_Value
            }]
            | readonly ['state', {
                readonly '|': _T_Structural_Token
                readonly 'status': _i_core._T_State_Group<null, 
                    | readonly ['missing data', {
                        readonly '#': _T_Structural_Token
                    }]
                    | readonly ['set', {
                        readonly 'state': _T_String
                        readonly 'value': _T_Value
                    }]
                >
            }]
            | readonly ['text', _T_String]
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
    
    export namespace Content {
    }
    
    export namespace Document {
        
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
        export type header = _pi.Optional_Value<{
            readonly '!': _T_Structural_Token
            readonly 'value': _T_Value
        }>
        
        export namespace content {
        }
        export type content = _T_Content
    }
