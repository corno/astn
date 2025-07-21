import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"

// **** TYPES

export type _T_Document<G_Source> = {
    readonly 'content': _T_Value<G_Source>
    readonly 'header': _pt.Optional_Value<{
        readonly '!': _T_Structural_Token<G_Source>
        readonly 'value': _T_Value<G_Source>
    }>
}

export type _T_Elements<G_Source> = _i_core._T_List<G_Source, {
    readonly ',': _pt.Optional_Value<_T_Structural_Token<G_Source>>
    readonly 'value': _T_Value<G_Source>
}>

export type _T_Key_Value_Pairs<G_Source> = _i_core._T_List<G_Source, {
    readonly ',': _pt.Optional_Value<_T_Structural_Token<G_Source>>
    readonly 'key': _T_String<G_Source>
    readonly 'value': _pt.Optional_Value<{
        readonly ':': _T_Structural_Token<G_Source>
        readonly 'value': _T_Value<G_Source>
    }>
}>

export type _T_Location<G_Source> = {
    readonly 'absolute': number
    readonly 'relative': _T_Relative_Location<G_Source>
}

export type _T_Range<G_Source> = {
    readonly 'end': _T_Location<G_Source>
    readonly 'start': _T_Location<G_Source>
}

export type _T_Relative_Location<G_Source> = {
    readonly 'column': number
    readonly 'line': number
}

export type _T_String<G_Source> = {
    readonly 'range': _T_Range<G_Source>
    readonly 'trailing trivia': _T_Trivia<G_Source>
    readonly 'type': _T_String_Type<G_Source>
    readonly 'value': string
}

export type _T_String_Type<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['apostrophed', null]
    | readonly ['backticked', null]
    | readonly ['quoted', null]
    | readonly ['undelimited', null]
>

export type _T_Structural_Token<G_Source> = {
    readonly 'range': _T_Range<G_Source>
    readonly 'trailing trivia': _T_Trivia<G_Source>
}

export type _T_Trivia<G_Source> = {
    readonly 'comments': _i_core._T_List<G_Source, {
        readonly 'content': string
        readonly 'range': _T_Range<G_Source>
        readonly 'trailing whitespace': _T_Whitespace<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['block', null]
            | readonly ['line', null]
        >
    }>
    readonly 'leading whitespace': _T_Whitespace<G_Source>
}

export type _T_Value<G_Source> = {
    readonly 'range': _T_Range<G_Source>
    readonly 'type': _i_core._T_State_Group<G_Source, 
        | readonly ['include', {
            readonly '@': _T_Structural_Token<G_Source>
            readonly 'path': _T_String<G_Source>
        }]
        | readonly ['indexed collection', _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', {
                readonly 'entries': _T_Key_Value_Pairs<G_Source>
                readonly '{': _T_Structural_Token<G_Source>
                readonly '}': _T_Structural_Token<G_Source>
            }]
            | readonly ['verbose group', {
                readonly '(': _T_Structural_Token<G_Source>
                readonly ')': _T_Structural_Token<G_Source>
                readonly 'entries': _T_Key_Value_Pairs<G_Source>
            }]
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token<G_Source>
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<G_Source, 
            | readonly ['concise group', {
                readonly '<': _T_Structural_Token<G_Source>
                readonly '>': _T_Structural_Token<G_Source>
                readonly 'elements': _T_Elements<G_Source>
            }]
            | readonly ['list', {
                readonly '[': _T_Structural_Token<G_Source>
                readonly ']': _T_Structural_Token<G_Source>
                readonly 'elements': _T_Elements<G_Source>
            }]
        >]
        | readonly ['set optional value', {
            readonly '*': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }]
        | readonly ['string', _T_String<G_Source>]
        | readonly ['tagged value', {
            readonly 'state': _T_String<G_Source>
            readonly 'value': _T_Value<G_Source>
            readonly '|': _T_Structural_Token<G_Source>
        }]
    >
}

export type _T_Whitespace<G_Source> = {
    readonly 'range': _T_Range<G_Source>
    readonly 'value': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Document<G_Source> = _T_Document<G_Source>

export type Elements<G_Source> = _T_Elements<G_Source>

export type Key_Value_Pairs<G_Source> = _T_Key_Value_Pairs<G_Source>

export type Location<G_Source> = _T_Location<G_Source>

export type Range<G_Source> = _T_Range<G_Source>

export type Relative_Location<G_Source> = _T_Relative_Location<G_Source>

export type String<G_Source> = _T_String<G_Source>

export type String_Type<G_Source> = _T_String_Type<G_Source>

export type Structural_Token<G_Source> = _T_Structural_Token<G_Source>

export type Trivia<G_Source> = _T_Trivia<G_Source>

export type Value<G_Source> = _T_Value<G_Source>

export type Whitespace<G_Source> = _T_Whitespace<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Document {
    
    export namespace content {
    }
    export type content<G_Source> = _T_Value<G_Source>
    
    export namespace header {
        
        export namespace O {
            
            export namespace $ex_ {
            }
            export type $ex_<G_Source> = _T_Structural_Token<G_Source>
            
            export namespace value {
            }
            export type value<G_Source> = _T_Value<G_Source>
        }
        export type O<G_Source> = {
            readonly '!': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }
    }
    export type header<G_Source> = _pt.Optional_Value<{
        readonly '!': _T_Structural_Token<G_Source>
        readonly 'value': _T_Value<G_Source>
    }>
}

export namespace _T_Elements {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O<G_Source> = _T_Structural_Token<G_Source>
        }
        export type $cm_<G_Source> = _pt.Optional_Value<_T_Structural_Token<G_Source>>
        
        export namespace value {
        }
        export type value<G_Source> = _T_Value<G_Source>
    }
    export type L<G_Source> = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token<G_Source>>
        readonly 'value': _T_Value<G_Source>
    }
}

export namespace _T_Key_Value_Pairs {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O<G_Source> = _T_Structural_Token<G_Source>
        }
        export type $cm_<G_Source> = _pt.Optional_Value<_T_Structural_Token<G_Source>>
        
        export namespace key {
        }
        export type key<G_Source> = _T_String<G_Source>
        
        export namespace value {
            
            export namespace O {
                
                export namespace $cl_ {
                }
                export type $cl_<G_Source> = _T_Structural_Token<G_Source>
                
                export namespace value {
                }
                export type value<G_Source> = _T_Value<G_Source>
            }
            export type O<G_Source> = {
                readonly ':': _T_Structural_Token<G_Source>
                readonly 'value': _T_Value<G_Source>
            }
        }
        export type value<G_Source> = _pt.Optional_Value<{
            readonly ':': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }>
    }
    export type L<G_Source> = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token<G_Source>>
        readonly 'key': _T_String<G_Source>
        readonly 'value': _pt.Optional_Value<{
            readonly ':': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }>
    }
}

export namespace _T_Location {
    export type absolute<G_Source> = number
    
    export namespace relative {
    }
    export type relative<G_Source> = _T_Relative_Location<G_Source>
}

export namespace _T_Range {
    
    export namespace end {
    }
    export type end<G_Source> = _T_Location<G_Source>
    
    export namespace start {
    }
    export type start<G_Source> = _T_Location<G_Source>
}

export namespace _T_Relative_Location {
    export type column<G_Source> = number
    export type line<G_Source> = number
}

export namespace _T_String {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia<G_Source> = _T_Trivia<G_Source>
    
    export namespace _type {
    }
    export type _type<G_Source> = _T_String_Type<G_Source>
    export type value<G_Source> = string
}

export namespace _T_String_Type {
    
    export namespace SG {
        export type apostrophed<G_Source> = null
        export type backticked<G_Source> = null
        export type quoted<G_Source> = null
        export type undelimited<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['apostrophed', null]
        | readonly ['backticked', null]
        | readonly ['quoted', null]
        | readonly ['undelimited', null]
}

export namespace _T_Structural_Token {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia<G_Source> = _T_Trivia<G_Source>
}

export namespace _T_Trivia {
    
    export namespace comments {
        
        export namespace L {
            export type content<G_Source> = string
            
            export namespace range {
            }
            export type range<G_Source> = _T_Range<G_Source>
            
            export namespace trailing_whitespace {
            }
            export type trailing_whitespace<G_Source> = _T_Whitespace<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type block<G_Source> = null
                    export type line<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['block', null]
                    | readonly ['line', null]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
        export type L<G_Source> = {
            readonly 'content': string
            readonly 'range': _T_Range<G_Source>
            readonly 'trailing whitespace': _T_Whitespace<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
    }
    export type comments<G_Source> = _i_core._T_List<G_Source, {
        readonly 'content': string
        readonly 'range': _T_Range<G_Source>
        readonly 'trailing whitespace': _T_Whitespace<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['block', null]
            | readonly ['line', null]
        >
    }>
    
    export namespace leading_whitespace {
    }
    export type leading_whitespace<G_Source> = _T_Whitespace<G_Source>
}

export namespace _T_Value {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace include {
                
                export namespace $at_ {
                }
                export type $at_<G_Source> = _T_Structural_Token<G_Source>
                
                export namespace path {
                }
                export type path<G_Source> = _T_String<G_Source>
            }
            export type include<G_Source> = {
                readonly '@': _T_Structural_Token<G_Source>
                readonly 'path': _T_String<G_Source>
            }
            
            export namespace indexed_collection {
                
                export namespace SG {
                    
                    export namespace dictionary {
                        
                        export namespace entries {
                        }
                        export type entries<G_Source> = _T_Key_Value_Pairs<G_Source>
                        
                        export namespace $co_ {
                        }
                        export type $co_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $cc_ {
                        }
                        export type $cc_<G_Source> = _T_Structural_Token<G_Source>
                    }
                    export type dictionary<G_Source> = {
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                        readonly '{': _T_Structural_Token<G_Source>
                        readonly '}': _T_Structural_Token<G_Source>
                    }
                    
                    export namespace verbose_group {
                        
                        export namespace $po_ {
                        }
                        export type $po_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $pc_ {
                        }
                        export type $pc_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace entries {
                        }
                        export type entries<G_Source> = _T_Key_Value_Pairs<G_Source>
                    }
                    export type verbose_group<G_Source> = {
                        readonly '(': _T_Structural_Token<G_Source>
                        readonly ')': _T_Structural_Token<G_Source>
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['dictionary', {
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                        readonly '{': _T_Structural_Token<G_Source>
                        readonly '}': _T_Structural_Token<G_Source>
                    }]
                    | readonly ['verbose group', {
                        readonly '(': _T_Structural_Token<G_Source>
                        readonly ')': _T_Structural_Token<G_Source>
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    }]
            }
            export type indexed_collection<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', {
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    readonly '{': _T_Structural_Token<G_Source>
                    readonly '}': _T_Structural_Token<G_Source>
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token<G_Source>
                    readonly ')': _T_Structural_Token<G_Source>
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                }]
            >
            
            export namespace not_set {
                
                export namespace $ti_ {
                }
                export type $ti_<G_Source> = _T_Structural_Token<G_Source>
            }
            export type not_set<G_Source> = {
                readonly '~': _T_Structural_Token<G_Source>
            }
            
            export namespace ordered_collection {
                
                export namespace SG {
                    
                    export namespace concise_group {
                        
                        export namespace $st_ {
                        }
                        export type $st_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $gt_ {
                        }
                        export type $gt_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace elements {
                        }
                        export type elements<G_Source> = _T_Elements<G_Source>
                    }
                    export type concise_group<G_Source> = {
                        readonly '<': _T_Structural_Token<G_Source>
                        readonly '>': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }
                    
                    export namespace list {
                        
                        export namespace $bo_ {
                        }
                        export type $bo_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $bc_ {
                        }
                        export type $bc_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace elements {
                        }
                        export type elements<G_Source> = _T_Elements<G_Source>
                    }
                    export type list<G_Source> = {
                        readonly '[': _T_Structural_Token<G_Source>
                        readonly ']': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['concise group', {
                        readonly '<': _T_Structural_Token<G_Source>
                        readonly '>': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }]
                    | readonly ['list', {
                        readonly '[': _T_Structural_Token<G_Source>
                        readonly ']': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }]
            }
            export type ordered_collection<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token<G_Source>
                    readonly '>': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
                | readonly ['list', {
                    readonly '[': _T_Structural_Token<G_Source>
                    readonly ']': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
            >
            
            export namespace set_optional_value {
                
                export namespace $sr_ {
                }
                export type $sr_<G_Source> = _T_Structural_Token<G_Source>
                
                export namespace value {
                }
                export type value<G_Source> = _T_Value<G_Source>
            }
            export type set_optional_value<G_Source> = {
                readonly '*': _T_Structural_Token<G_Source>
                readonly 'value': _T_Value<G_Source>
            }
            
            export namespace _string {
            }
            export type _string<G_Source> = _T_String<G_Source>
            
            export namespace tagged_value {
                
                export namespace state {
                }
                export type state<G_Source> = _T_String<G_Source>
                
                export namespace value {
                }
                export type value<G_Source> = _T_Value<G_Source>
                
                export namespace $vb_ {
                }
                export type $vb_<G_Source> = _T_Structural_Token<G_Source>
            }
            export type tagged_value<G_Source> = {
                readonly 'state': _T_String<G_Source>
                readonly 'value': _T_Value<G_Source>
                readonly '|': _T_Structural_Token<G_Source>
            }
        }
        export type SG<G_Source> = 
            | readonly ['include', {
                readonly '@': _T_Structural_Token<G_Source>
                readonly 'path': _T_String<G_Source>
            }]
            | readonly ['indexed collection', _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', {
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    readonly '{': _T_Structural_Token<G_Source>
                    readonly '}': _T_Structural_Token<G_Source>
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token<G_Source>
                    readonly ')': _T_Structural_Token<G_Source>
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                }]
            >]
            | readonly ['not set', {
                readonly '~': _T_Structural_Token<G_Source>
            }]
            | readonly ['ordered collection', _i_core._T_State_Group<G_Source, 
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token<G_Source>
                    readonly '>': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
                | readonly ['list', {
                    readonly '[': _T_Structural_Token<G_Source>
                    readonly ']': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
            >]
            | readonly ['set optional value', {
                readonly '*': _T_Structural_Token<G_Source>
                readonly 'value': _T_Value<G_Source>
            }]
            | readonly ['string', _T_String<G_Source>]
            | readonly ['tagged value', {
                readonly 'state': _T_String<G_Source>
                readonly 'value': _T_Value<G_Source>
                readonly '|': _T_Structural_Token<G_Source>
            }]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['include', {
            readonly '@': _T_Structural_Token<G_Source>
            readonly 'path': _T_String<G_Source>
        }]
        | readonly ['indexed collection', _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', {
                readonly 'entries': _T_Key_Value_Pairs<G_Source>
                readonly '{': _T_Structural_Token<G_Source>
                readonly '}': _T_Structural_Token<G_Source>
            }]
            | readonly ['verbose group', {
                readonly '(': _T_Structural_Token<G_Source>
                readonly ')': _T_Structural_Token<G_Source>
                readonly 'entries': _T_Key_Value_Pairs<G_Source>
            }]
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token<G_Source>
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<G_Source, 
            | readonly ['concise group', {
                readonly '<': _T_Structural_Token<G_Source>
                readonly '>': _T_Structural_Token<G_Source>
                readonly 'elements': _T_Elements<G_Source>
            }]
            | readonly ['list', {
                readonly '[': _T_Structural_Token<G_Source>
                readonly ']': _T_Structural_Token<G_Source>
                readonly 'elements': _T_Elements<G_Source>
            }]
        >]
        | readonly ['set optional value', {
            readonly '*': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }]
        | readonly ['string', _T_String<G_Source>]
        | readonly ['tagged value', {
            readonly 'state': _T_String<G_Source>
            readonly 'value': _T_Value<G_Source>
            readonly '|': _T_Structural_Token<G_Source>
        }]
    >
}

export namespace _T_Whitespace {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    export type value<G_Source> = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Document {
    
    export namespace content {
    }
    export type content<G_Source> = _T_Value<G_Source>
    
    export namespace header {
        
        export namespace O {
            
            export namespace $ex_ {
            }
            export type $ex_<G_Source> = _T_Structural_Token<G_Source>
            
            export namespace value {
            }
            export type value<G_Source> = _T_Value<G_Source>
        }
        export type O<G_Source> = {
            readonly '!': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }
    }
    export type header<G_Source> = _pt.Optional_Value<{
        readonly '!': _T_Structural_Token<G_Source>
        readonly 'value': _T_Value<G_Source>
    }>
}

export namespace Elements {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O<G_Source> = _T_Structural_Token<G_Source>
        }
        export type $cm_<G_Source> = _pt.Optional_Value<_T_Structural_Token<G_Source>>
        
        export namespace value {
        }
        export type value<G_Source> = _T_Value<G_Source>
    }
    export type L<G_Source> = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token<G_Source>>
        readonly 'value': _T_Value<G_Source>
    }
}

export namespace Key_Value_Pairs {
    
    export namespace L {
        
        export namespace $cm_ {
            
            export namespace O {
            }
            export type O<G_Source> = _T_Structural_Token<G_Source>
        }
        export type $cm_<G_Source> = _pt.Optional_Value<_T_Structural_Token<G_Source>>
        
        export namespace key {
        }
        export type key<G_Source> = _T_String<G_Source>
        
        export namespace value {
            
            export namespace O {
                
                export namespace $cl_ {
                }
                export type $cl_<G_Source> = _T_Structural_Token<G_Source>
                
                export namespace value {
                }
                export type value<G_Source> = _T_Value<G_Source>
            }
            export type O<G_Source> = {
                readonly ':': _T_Structural_Token<G_Source>
                readonly 'value': _T_Value<G_Source>
            }
        }
        export type value<G_Source> = _pt.Optional_Value<{
            readonly ':': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }>
    }
    export type L<G_Source> = {
        readonly ',': _pt.Optional_Value<_T_Structural_Token<G_Source>>
        readonly 'key': _T_String<G_Source>
        readonly 'value': _pt.Optional_Value<{
            readonly ':': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }>
    }
}

export namespace Location {
    export type absolute<G_Source> = number
    
    export namespace relative {
    }
    export type relative<G_Source> = _T_Relative_Location<G_Source>
}

export namespace Range {
    
    export namespace end {
    }
    export type end<G_Source> = _T_Location<G_Source>
    
    export namespace start {
    }
    export type start<G_Source> = _T_Location<G_Source>
}

export namespace Relative_Location {
    export type column<G_Source> = number
    export type line<G_Source> = number
}

export namespace String {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia<G_Source> = _T_Trivia<G_Source>
    
    export namespace _type {
    }
    export type _type<G_Source> = _T_String_Type<G_Source>
    export type value<G_Source> = string
}

export namespace String_Type {
    
    export namespace SG {
        export type apostrophed<G_Source> = null
        export type backticked<G_Source> = null
        export type quoted<G_Source> = null
        export type undelimited<G_Source> = null
    }
    export type SG<G_Source> = 
        | readonly ['apostrophed', null]
        | readonly ['backticked', null]
        | readonly ['quoted', null]
        | readonly ['undelimited', null]
}

export namespace Structural_Token {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia<G_Source> = _T_Trivia<G_Source>
}

export namespace Trivia {
    
    export namespace comments {
        
        export namespace L {
            export type content<G_Source> = string
            
            export namespace range {
            }
            export type range<G_Source> = _T_Range<G_Source>
            
            export namespace trailing_whitespace {
            }
            export type trailing_whitespace<G_Source> = _T_Whitespace<G_Source>
            
            export namespace _type {
                
                export namespace SG {
                    export type block<G_Source> = null
                    export type line<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['block', null]
                    | readonly ['line', null]
            }
            export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
        export type L<G_Source> = {
            readonly 'content': string
            readonly 'range': _T_Range<G_Source>
            readonly 'trailing whitespace': _T_Whitespace<G_Source>
            readonly 'type': _i_core._T_State_Group<G_Source, 
                | readonly ['block', null]
                | readonly ['line', null]
            >
        }
    }
    export type comments<G_Source> = _i_core._T_List<G_Source, {
        readonly 'content': string
        readonly 'range': _T_Range<G_Source>
        readonly 'trailing whitespace': _T_Whitespace<G_Source>
        readonly 'type': _i_core._T_State_Group<G_Source, 
            | readonly ['block', null]
            | readonly ['line', null]
        >
    }>
    
    export namespace leading_whitespace {
    }
    export type leading_whitespace<G_Source> = _T_Whitespace<G_Source>
}

export namespace Value {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace include {
                
                export namespace $at_ {
                }
                export type $at_<G_Source> = _T_Structural_Token<G_Source>
                
                export namespace path {
                }
                export type path<G_Source> = _T_String<G_Source>
            }
            export type include<G_Source> = {
                readonly '@': _T_Structural_Token<G_Source>
                readonly 'path': _T_String<G_Source>
            }
            
            export namespace indexed_collection {
                
                export namespace SG {
                    
                    export namespace dictionary {
                        
                        export namespace entries {
                        }
                        export type entries<G_Source> = _T_Key_Value_Pairs<G_Source>
                        
                        export namespace $co_ {
                        }
                        export type $co_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $cc_ {
                        }
                        export type $cc_<G_Source> = _T_Structural_Token<G_Source>
                    }
                    export type dictionary<G_Source> = {
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                        readonly '{': _T_Structural_Token<G_Source>
                        readonly '}': _T_Structural_Token<G_Source>
                    }
                    
                    export namespace verbose_group {
                        
                        export namespace $po_ {
                        }
                        export type $po_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $pc_ {
                        }
                        export type $pc_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace entries {
                        }
                        export type entries<G_Source> = _T_Key_Value_Pairs<G_Source>
                    }
                    export type verbose_group<G_Source> = {
                        readonly '(': _T_Structural_Token<G_Source>
                        readonly ')': _T_Structural_Token<G_Source>
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['dictionary', {
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                        readonly '{': _T_Structural_Token<G_Source>
                        readonly '}': _T_Structural_Token<G_Source>
                    }]
                    | readonly ['verbose group', {
                        readonly '(': _T_Structural_Token<G_Source>
                        readonly ')': _T_Structural_Token<G_Source>
                        readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    }]
            }
            export type indexed_collection<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', {
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    readonly '{': _T_Structural_Token<G_Source>
                    readonly '}': _T_Structural_Token<G_Source>
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token<G_Source>
                    readonly ')': _T_Structural_Token<G_Source>
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                }]
            >
            
            export namespace not_set {
                
                export namespace $ti_ {
                }
                export type $ti_<G_Source> = _T_Structural_Token<G_Source>
            }
            export type not_set<G_Source> = {
                readonly '~': _T_Structural_Token<G_Source>
            }
            
            export namespace ordered_collection {
                
                export namespace SG {
                    
                    export namespace concise_group {
                        
                        export namespace $st_ {
                        }
                        export type $st_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $gt_ {
                        }
                        export type $gt_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace elements {
                        }
                        export type elements<G_Source> = _T_Elements<G_Source>
                    }
                    export type concise_group<G_Source> = {
                        readonly '<': _T_Structural_Token<G_Source>
                        readonly '>': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }
                    
                    export namespace list {
                        
                        export namespace $bo_ {
                        }
                        export type $bo_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace $bc_ {
                        }
                        export type $bc_<G_Source> = _T_Structural_Token<G_Source>
                        
                        export namespace elements {
                        }
                        export type elements<G_Source> = _T_Elements<G_Source>
                    }
                    export type list<G_Source> = {
                        readonly '[': _T_Structural_Token<G_Source>
                        readonly ']': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }
                }
                export type SG<G_Source> = 
                    | readonly ['concise group', {
                        readonly '<': _T_Structural_Token<G_Source>
                        readonly '>': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }]
                    | readonly ['list', {
                        readonly '[': _T_Structural_Token<G_Source>
                        readonly ']': _T_Structural_Token<G_Source>
                        readonly 'elements': _T_Elements<G_Source>
                    }]
            }
            export type ordered_collection<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token<G_Source>
                    readonly '>': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
                | readonly ['list', {
                    readonly '[': _T_Structural_Token<G_Source>
                    readonly ']': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
            >
            
            export namespace set_optional_value {
                
                export namespace $sr_ {
                }
                export type $sr_<G_Source> = _T_Structural_Token<G_Source>
                
                export namespace value {
                }
                export type value<G_Source> = _T_Value<G_Source>
            }
            export type set_optional_value<G_Source> = {
                readonly '*': _T_Structural_Token<G_Source>
                readonly 'value': _T_Value<G_Source>
            }
            
            export namespace _string {
            }
            export type _string<G_Source> = _T_String<G_Source>
            
            export namespace tagged_value {
                
                export namespace state {
                }
                export type state<G_Source> = _T_String<G_Source>
                
                export namespace value {
                }
                export type value<G_Source> = _T_Value<G_Source>
                
                export namespace $vb_ {
                }
                export type $vb_<G_Source> = _T_Structural_Token<G_Source>
            }
            export type tagged_value<G_Source> = {
                readonly 'state': _T_String<G_Source>
                readonly 'value': _T_Value<G_Source>
                readonly '|': _T_Structural_Token<G_Source>
            }
        }
        export type SG<G_Source> = 
            | readonly ['include', {
                readonly '@': _T_Structural_Token<G_Source>
                readonly 'path': _T_String<G_Source>
            }]
            | readonly ['indexed collection', _i_core._T_State_Group<G_Source, 
                | readonly ['dictionary', {
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                    readonly '{': _T_Structural_Token<G_Source>
                    readonly '}': _T_Structural_Token<G_Source>
                }]
                | readonly ['verbose group', {
                    readonly '(': _T_Structural_Token<G_Source>
                    readonly ')': _T_Structural_Token<G_Source>
                    readonly 'entries': _T_Key_Value_Pairs<G_Source>
                }]
            >]
            | readonly ['not set', {
                readonly '~': _T_Structural_Token<G_Source>
            }]
            | readonly ['ordered collection', _i_core._T_State_Group<G_Source, 
                | readonly ['concise group', {
                    readonly '<': _T_Structural_Token<G_Source>
                    readonly '>': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
                | readonly ['list', {
                    readonly '[': _T_Structural_Token<G_Source>
                    readonly ']': _T_Structural_Token<G_Source>
                    readonly 'elements': _T_Elements<G_Source>
                }]
            >]
            | readonly ['set optional value', {
                readonly '*': _T_Structural_Token<G_Source>
                readonly 'value': _T_Value<G_Source>
            }]
            | readonly ['string', _T_String<G_Source>]
            | readonly ['tagged value', {
                readonly 'state': _T_String<G_Source>
                readonly 'value': _T_Value<G_Source>
                readonly '|': _T_Structural_Token<G_Source>
            }]
    }
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['include', {
            readonly '@': _T_Structural_Token<G_Source>
            readonly 'path': _T_String<G_Source>
        }]
        | readonly ['indexed collection', _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', {
                readonly 'entries': _T_Key_Value_Pairs<G_Source>
                readonly '{': _T_Structural_Token<G_Source>
                readonly '}': _T_Structural_Token<G_Source>
            }]
            | readonly ['verbose group', {
                readonly '(': _T_Structural_Token<G_Source>
                readonly ')': _T_Structural_Token<G_Source>
                readonly 'entries': _T_Key_Value_Pairs<G_Source>
            }]
        >]
        | readonly ['not set', {
            readonly '~': _T_Structural_Token<G_Source>
        }]
        | readonly ['ordered collection', _i_core._T_State_Group<G_Source, 
            | readonly ['concise group', {
                readonly '<': _T_Structural_Token<G_Source>
                readonly '>': _T_Structural_Token<G_Source>
                readonly 'elements': _T_Elements<G_Source>
            }]
            | readonly ['list', {
                readonly '[': _T_Structural_Token<G_Source>
                readonly ']': _T_Structural_Token<G_Source>
                readonly 'elements': _T_Elements<G_Source>
            }]
        >]
        | readonly ['set optional value', {
            readonly '*': _T_Structural_Token<G_Source>
            readonly 'value': _T_Value<G_Source>
        }]
        | readonly ['string', _T_String<G_Source>]
        | readonly ['tagged value', {
            readonly 'state': _T_String<G_Source>
            readonly 'value': _T_Value<G_Source>
            readonly '|': _T_Structural_Token<G_Source>
        }]
    >
}

export namespace Whitespace {
    
    export namespace range {
    }
    export type range<G_Source> = _T_Range<G_Source>
    export type value<G_Source> = string
}
