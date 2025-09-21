import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

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

export type _T_String_Type = _i_core._T_State_Group<null, 
    | readonly ['apostrophed', null]
    | readonly ['backticked', null]
    | readonly ['quoted', null]
    | readonly ['undelimited', null]
>

export type _T_Token_Type = _i_core._T_State_Group<null, 
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
>

export type _T_Tokenizer_Result = {
    readonly 'end': _T_Location
    readonly 'leading trivia': _T_Trivia
    readonly 'tokens': _i_core._T_List<null, _T_Annotated_Token>
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

export type _T_Whitespace = {
    readonly 'range': _T_Range
    readonly 'value': string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Annotated_Token = _T_Annotated_Token

export type Delimited_String = _T_Delimited_String

export type Location = _T_Location

export type Range = _T_Range

export type Relative_Location = _T_Relative_Location

export type String_Type = _T_String_Type

export type Token_Type = _T_Token_Type

export type Tokenizer_Result = _T_Tokenizer_Result

export type Trivia = _T_Trivia

export type Whitespace = _T_Whitespace

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Annotated_Token {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace start {
    }
    export type start = _T_Location
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _T_Trivia
    
    export namespace _type {
    }
    export type _type = _T_Token_Type
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

export namespace _T_Token_Type {
    
    export namespace SG {
        export type $ex_ = null
        export type $ha_ = null
        export type $po_ = null
        export type $pc_ = null
        export type $sr_ = null
        export type $cl_ = null
        export type $st_ = null
        export type $gt_ = null
        export type $at_ = null
        export type $bo_ = null
        export type $bc_ = null
        
        export namespace _string {
            
            export namespace _type {
            }
            export type _type = _T_String_Type
            
            export namespace value {
            }
            export type value = _T_Delimited_String
        }
        export type _string = {
            readonly 'type': _T_String_Type
            readonly 'value': _T_Delimited_String
        }
        export type $co_ = null
        export type $vb_ = null
        export type $cc_ = null
        export type $ti_ = null
    }
    export type SG = 
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
}

export namespace _T_Tokenizer_Result {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace leading_trivia {
    }
    export type leading_trivia = _T_Trivia
    
    export namespace tokens {
        
        export namespace L {
        }
        export type L = _T_Annotated_Token
    }
    export type tokens = _i_core._T_List<null, _T_Annotated_Token>
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

export namespace _T_Whitespace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type value = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Annotated_Token {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace start {
    }
    export type start = _T_Location
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _T_Trivia
    
    export namespace _type {
    }
    export type _type = _T_Token_Type
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

export namespace Token_Type {
    
    export namespace SG {
        export type $ex_ = null
        export type $ha_ = null
        export type $po_ = null
        export type $pc_ = null
        export type $sr_ = null
        export type $cl_ = null
        export type $st_ = null
        export type $gt_ = null
        export type $at_ = null
        export type $bo_ = null
        export type $bc_ = null
        
        export namespace _string {
            
            export namespace _type {
            }
            export type _type = _T_String_Type
            
            export namespace value {
            }
            export type value = _T_Delimited_String
        }
        export type _string = {
            readonly 'type': _T_String_Type
            readonly 'value': _T_Delimited_String
        }
        export type $co_ = null
        export type $vb_ = null
        export type $cc_ = null
        export type $ti_ = null
    }
    export type SG = 
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
}

export namespace Tokenizer_Result {
    
    export namespace end {
    }
    export type end = _T_Location
    
    export namespace leading_trivia {
    }
    export type leading_trivia = _T_Trivia
    
    export namespace tokens {
        
        export namespace L {
        }
        export type L = _T_Annotated_Token
    }
    export type tokens = _i_core._T_List<null, _T_Annotated_Token>
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

export namespace Whitespace {
    
    export namespace range {
    }
    export type range = _T_Range
    export type value = string
}
