
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

export namespace Relative_Location_ {
    
    export type line = number
    
    export type column = number
    
}

export type Relative_Location_ = {
    readonly 'line': Relative_Location_.line
    readonly 'column': Relative_Location_.column
}

export namespace Location_ {
    
    export type relative = Relative_Location_
    
    export type absolute = number
    
}

export type Location_ = {
    readonly 'relative': Location_.relative
    readonly 'absolute': Location_.absolute
}

export namespace Range_ {
    
    export type start = Location_
    
    export type end = Location_
    
}

export type Range_ = {
    readonly 'start': Range_.start
    readonly 'end': Range_.end
}

export namespace Whitespace_ {
    
    export type range = Range_
    
    export type value = string
    
}

export type Whitespace_ = {
    readonly 'range': Whitespace_.range
    readonly 'value': Whitespace_.value
}

export namespace Trivia_ {
    
    export type leading_whitespace = Whitespace_
    
    export namespace comments {
        
        export namespace L {
            
            export namespace _type {
                
                export type line = null
                
                export type block = null
                
            }
            
            export type _type = 
                | readonly ['line', _type.line]
                | readonly ['block', _type.block]
            
            export type content = string
            
            export type range = Range_
            
            export type trailing_whitespace = Whitespace_
            
        }
        
        export type L = {
            readonly 'type': L._type
            readonly 'content': L.content
            readonly 'range': L.range
            readonly 'trailing whitespace': L.trailing_whitespace
        }
        
    }
    
    export type comments = _pi.List<comments.L>
    
}

export type Trivia_ = {
    readonly 'leading whitespace': Trivia_.leading_whitespace
    readonly 'comments': Trivia_.comments
}

export type Delimited_String_ = string

export namespace String_Type_ {
    
    export type quoted = null
    
    export type apostrophed = null
    
    export type undelimited = null
    
    export type backticked = null
    
}

export type String_Type_ = 
    | readonly ['quoted', String_Type_.quoted]
    | readonly ['apostrophed', String_Type_.apostrophed]
    | readonly ['undelimited', String_Type_.undelimited]
    | readonly ['backticked', String_Type_.backticked]

export namespace Token_Type_ {
    
    export type $co_ = null
    
    export type $cc_ = null
    
    export type $bo_ = null
    
    export type $bc_ = null
    
    export type $po_ = null
    
    export type $pc_ = null
    
    export type $st_ = null
    
    export type $gt_ = null
    
    export type $ex_ = null
    
    export type $at_ = null
    
    export type $ti_ = null
    
    export type $sr_ = null
    
    export type $cl_ = null
    
    export type $vb_ = null
    
    export type $ha_ = null
    
    export namespace _string {
        
        export type value = Delimited_String_
        
        export type _type = String_Type_
        
    }
    
    export type _string = {
        readonly 'value': _string.value
        readonly 'type': _string._type
    }
    
}

export type Token_Type_ = 
    | readonly ['{', Token_Type_.$co_]
    | readonly ['}', Token_Type_.$cc_]
    | readonly ['[', Token_Type_.$bo_]
    | readonly [']', Token_Type_.$bc_]
    | readonly ['(', Token_Type_.$po_]
    | readonly [')', Token_Type_.$pc_]
    | readonly ['<', Token_Type_.$st_]
    | readonly ['>', Token_Type_.$gt_]
    | readonly ['!', Token_Type_.$ex_]
    | readonly ['@', Token_Type_.$at_]
    | readonly ['~', Token_Type_.$ti_]
    | readonly ['*', Token_Type_.$sr_]
    | readonly [':', Token_Type_.$cl_]
    | readonly ['|', Token_Type_.$vb_]
    | readonly ['#', Token_Type_.$ha_]
    | readonly ['string', Token_Type_._string]

export namespace Annotated_Token_ {
    
    export type start = Location_
    
    export type _type = Token_Type_
    
    export type end = Location_
    
    export type trailing_trivia = Trivia_
    
}

export type Annotated_Token_ = {
    readonly 'start': Annotated_Token_.start
    readonly 'type': Annotated_Token_._type
    readonly 'end': Annotated_Token_.end
    readonly 'trailing trivia': Annotated_Token_.trailing_trivia
}

export namespace Tokenizer_Result_ {
    
    export type leading_trivia = Trivia_
    
    export namespace tokens {
        
        export type L = Annotated_Token_
        
    }
    
    export type tokens = _pi.List<tokens.L>
    
    export type end = Location_
    
}

export type Tokenizer_Result_ = {
    readonly 'leading trivia': Tokenizer_Result_.leading_trivia
    readonly 'tokens': Tokenizer_Result_.tokens
    readonly 'end': Tokenizer_Result_.end
}

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
    Whitespace_ as Whitespace, 
    Trivia_ as Trivia, 
    Delimited_String_ as Delimited_String, 
    String_Type_ as String_Type, 
    Token_Type_ as Token_Type, 
    Annotated_Token_ as Annotated_Token, 
    Tokenizer_Result_ as Tokenizer_Result, 
}
