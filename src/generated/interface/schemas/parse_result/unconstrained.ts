import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unconstrained"
import * as _i_imports_ast from "../ast/unconstrained"

// **** TYPES

export type _T_Annotated_Token = {
    readonly 'end': _i_imports_ast._T_Location
    readonly 'start': _i_imports_ast._T_Location
    readonly 'trailing trivia': _i_imports_ast._T_Trivia
    readonly 'type': _T_Token_Type
}

export type _T_Parse_Error = {
    readonly 'range': _i_imports_ast._T_Range
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['lexer', _i_core._T_State_Group<null, 
            | readonly ['dangling slash', null]
            | readonly ['invalid unicode escape sequence', null]
            | readonly ['missing character after escape', null]
            | readonly ['unexpected character', number]
            | readonly ['unexpected control character', number]
            | readonly ['unexpected end of input', null]
            | readonly ['unexpected end of line in delimited string', null]
            | readonly ['unknown escape character', null]
            | readonly ['unterminated block comment', null]
            | readonly ['unterminated string', null]
            | readonly ['unterminated unicode escape sequence', null]
        >]
        | readonly ['parser', {
            readonly 'cause': _i_core._T_State_Group<null, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _T_Token_Type
                }]
            >
            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['!', null]
                | readonly [')', null]
                | readonly [',', null]
                | readonly [':', null]
                | readonly ['>', null]
                | readonly ['@', null]
                | readonly [']', null]
                | readonly ['a string', null]
                | readonly ['a value', null]
                | readonly ['}', null]
            >>
        }]
    >
}

export type _T_Parse_Result = _i_core._T_State_Group<null, 
    | readonly ['failure', _T_Parse_Error]
    | readonly ['success', _i_imports_ast._T_Document]
>

export type _T_Token_Type = _i_core._T_State_Group<null, 
    | readonly ['!', null]
    | readonly ['(', null]
    | readonly [')', null]
    | readonly ['*', null]
    | readonly [',', null]
    | readonly [':', null]
    | readonly ['<', null]
    | readonly ['>', null]
    | readonly ['@', null]
    | readonly ['[', null]
    | readonly [']', null]
    | readonly ['string', {
        readonly 'type': _i_imports_ast._T_String_Type
        readonly 'value': string
    }]
    | readonly ['{', null]
    | readonly ['|', null]
    | readonly ['}', null]
    | readonly ['~', null]
>

export type _T_Tokenizer_Result = {
    readonly 'end': _i_imports_ast._T_Location
    readonly 'leading trivia': _i_imports_ast._T_Trivia
    readonly 'tokens': _i_core._T_List<null, _T_Annotated_Token>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Annotated_Token = _T_Annotated_Token

export type Parse_Error = _T_Parse_Error

export type Parse_Result = _T_Parse_Result

export type Token_Type = _T_Token_Type

export type Tokenizer_Result = _T_Tokenizer_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Annotated_Token {
    
    export namespace end {
    }
    export type end = _i_imports_ast._T_Location
    
    export namespace start {
    }
    export type start = _i_imports_ast._T_Location
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _i_imports_ast._T_Trivia
    
    export namespace _type {
    }
    export type _type = _T_Token_Type
}

export namespace _T_Parse_Error {
    
    export namespace range {
    }
    export type range = _i_imports_ast._T_Range
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace lexer {
                
                export namespace SG {
                    export type dangling_slash = null
                    export type invalid_unicode_escape_sequence = null
                    export type missing_character_after_escape = null
                    export type unexpected_character = number
                    export type unexpected_control_character = number
                    export type unexpected_end_of_input = null
                    export type unexpected_end_of_line_in_delimited_string = null
                    export type unknown_escape_character = null
                    export type unterminated_block_comment = null
                    export type unterminated_string = null
                    export type unterminated_unicode_escape_sequence = null
                }
                export type SG = 
                    | readonly ['dangling slash', null]
                    | readonly ['invalid unicode escape sequence', null]
                    | readonly ['missing character after escape', null]
                    | readonly ['unexpected character', number]
                    | readonly ['unexpected control character', number]
                    | readonly ['unexpected end of input', null]
                    | readonly ['unexpected end of line in delimited string', null]
                    | readonly ['unknown escape character', null]
                    | readonly ['unterminated block comment', null]
                    | readonly ['unterminated string', null]
                    | readonly ['unterminated unicode escape sequence', null]
            }
            export type lexer = _i_core._T_State_Group<null, 
                | readonly ['dangling slash', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected character', number]
                | readonly ['unexpected control character', number]
                | readonly ['unexpected end of input', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unknown escape character', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated string', null]
                | readonly ['unterminated unicode escape sequence', null]
            >
            
            export namespace parser {
                
                export namespace cause {
                    
                    export namespace SG {
                        export type missing_token = null
                        
                        export namespace unexpected_token {
                            
                            export namespace found {
                            }
                            export type found = _T_Token_Type
                        }
                        export type unexpected_token = {
                            readonly 'found': _T_Token_Type
                        }
                    }
                    export type SG = 
                        | readonly ['missing token', null]
                        | readonly ['unexpected token', {
                            readonly 'found': _T_Token_Type
                        }]
                }
                export type cause = _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type
                    }]
                >
                
                export namespace expected {
                    
                    export namespace L {
                        
                        export namespace SG {
                            export type $ex_ = null
                            export type $pc_ = null
                            export type $cm_ = null
                            export type $cl_ = null
                            export type $gt_ = null
                            export type $at_ = null
                            export type $bc_ = null
                            export type a_string = null
                            export type a_value = null
                            export type $cc_ = null
                        }
                        export type SG = 
                            | readonly ['!', null]
                            | readonly [')', null]
                            | readonly [',', null]
                            | readonly [':', null]
                            | readonly ['>', null]
                            | readonly ['@', null]
                            | readonly [']', null]
                            | readonly ['a string', null]
                            | readonly ['a value', null]
                            | readonly ['}', null]
                    }
                    export type L = _i_core._T_State_Group<null, 
                        | readonly ['!', null]
                        | readonly [')', null]
                        | readonly [',', null]
                        | readonly [':', null]
                        | readonly ['>', null]
                        | readonly ['@', null]
                        | readonly [']', null]
                        | readonly ['a string', null]
                        | readonly ['a value', null]
                        | readonly ['}', null]
                    >
                }
                export type expected = _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['!', null]
                    | readonly [')', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly ['>', null]
                    | readonly ['@', null]
                    | readonly [']', null]
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['}', null]
                >>
            }
            export type parser = {
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type
                    }]
                >
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['!', null]
                    | readonly [')', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly ['>', null]
                    | readonly ['@', null]
                    | readonly [']', null]
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['}', null]
                >>
            }
        }
        export type SG = 
            | readonly ['lexer', _i_core._T_State_Group<null, 
                | readonly ['dangling slash', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected character', number]
                | readonly ['unexpected control character', number]
                | readonly ['unexpected end of input', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unknown escape character', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated string', null]
                | readonly ['unterminated unicode escape sequence', null]
            >]
            | readonly ['parser', {
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type
                    }]
                >
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['!', null]
                    | readonly [')', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly ['>', null]
                    | readonly ['@', null]
                    | readonly [']', null]
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['}', null]
                >>
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['lexer', _i_core._T_State_Group<null, 
            | readonly ['dangling slash', null]
            | readonly ['invalid unicode escape sequence', null]
            | readonly ['missing character after escape', null]
            | readonly ['unexpected character', number]
            | readonly ['unexpected control character', number]
            | readonly ['unexpected end of input', null]
            | readonly ['unexpected end of line in delimited string', null]
            | readonly ['unknown escape character', null]
            | readonly ['unterminated block comment', null]
            | readonly ['unterminated string', null]
            | readonly ['unterminated unicode escape sequence', null]
        >]
        | readonly ['parser', {
            readonly 'cause': _i_core._T_State_Group<null, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _T_Token_Type
                }]
            >
            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['!', null]
                | readonly [')', null]
                | readonly [',', null]
                | readonly [':', null]
                | readonly ['>', null]
                | readonly ['@', null]
                | readonly [']', null]
                | readonly ['a string', null]
                | readonly ['a value', null]
                | readonly ['}', null]
            >>
        }]
    >
}

export namespace _T_Parse_Result {
    
    export namespace SG {
        
        export namespace failure {
        }
        export type failure = _T_Parse_Error
        
        export namespace success {
        }
        export type success = _i_imports_ast._T_Document
    }
    export type SG = 
        | readonly ['failure', _T_Parse_Error]
        | readonly ['success', _i_imports_ast._T_Document]
}

export namespace _T_Token_Type {
    
    export namespace SG {
        export type $ex_ = null
        export type $po_ = null
        export type $pc_ = null
        export type $sr_ = null
        export type $cm_ = null
        export type $cl_ = null
        export type $st_ = null
        export type $gt_ = null
        export type $at_ = null
        export type $bo_ = null
        export type $bc_ = null
        
        export namespace _string {
            
            export namespace _type {
            }
            export type _type = _i_imports_ast._T_String_Type
            export type value = string
        }
        export type _string = {
            readonly 'type': _i_imports_ast._T_String_Type
            readonly 'value': string
        }
        export type $co_ = null
        export type $vb_ = null
        export type $cc_ = null
        export type $ti_ = null
    }
    export type SG = 
        | readonly ['!', null]
        | readonly ['(', null]
        | readonly [')', null]
        | readonly ['*', null]
        | readonly [',', null]
        | readonly [':', null]
        | readonly ['<', null]
        | readonly ['>', null]
        | readonly ['@', null]
        | readonly ['[', null]
        | readonly [']', null]
        | readonly ['string', {
            readonly 'type': _i_imports_ast._T_String_Type
            readonly 'value': string
        }]
        | readonly ['{', null]
        | readonly ['|', null]
        | readonly ['}', null]
        | readonly ['~', null]
}

export namespace _T_Tokenizer_Result {
    
    export namespace end {
    }
    export type end = _i_imports_ast._T_Location
    
    export namespace leading_trivia {
    }
    export type leading_trivia = _i_imports_ast._T_Trivia
    
    export namespace tokens {
        
        export namespace L {
        }
        export type L = _T_Annotated_Token
    }
    export type tokens = _i_core._T_List<null, _T_Annotated_Token>
}

// *** ALIASES FOR NESTED TYPES

export namespace Annotated_Token {
    
    export namespace end {
    }
    export type end = _i_imports_ast._T_Location
    
    export namespace start {
    }
    export type start = _i_imports_ast._T_Location
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia = _i_imports_ast._T_Trivia
    
    export namespace _type {
    }
    export type _type = _T_Token_Type
}

export namespace Parse_Error {
    
    export namespace range {
    }
    export type range = _i_imports_ast._T_Range
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace lexer {
                
                export namespace SG {
                    export type dangling_slash = null
                    export type invalid_unicode_escape_sequence = null
                    export type missing_character_after_escape = null
                    export type unexpected_character = number
                    export type unexpected_control_character = number
                    export type unexpected_end_of_input = null
                    export type unexpected_end_of_line_in_delimited_string = null
                    export type unknown_escape_character = null
                    export type unterminated_block_comment = null
                    export type unterminated_string = null
                    export type unterminated_unicode_escape_sequence = null
                }
                export type SG = 
                    | readonly ['dangling slash', null]
                    | readonly ['invalid unicode escape sequence', null]
                    | readonly ['missing character after escape', null]
                    | readonly ['unexpected character', number]
                    | readonly ['unexpected control character', number]
                    | readonly ['unexpected end of input', null]
                    | readonly ['unexpected end of line in delimited string', null]
                    | readonly ['unknown escape character', null]
                    | readonly ['unterminated block comment', null]
                    | readonly ['unterminated string', null]
                    | readonly ['unterminated unicode escape sequence', null]
            }
            export type lexer = _i_core._T_State_Group<null, 
                | readonly ['dangling slash', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected character', number]
                | readonly ['unexpected control character', number]
                | readonly ['unexpected end of input', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unknown escape character', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated string', null]
                | readonly ['unterminated unicode escape sequence', null]
            >
            
            export namespace parser {
                
                export namespace cause {
                    
                    export namespace SG {
                        export type missing_token = null
                        
                        export namespace unexpected_token {
                            
                            export namespace found {
                            }
                            export type found = _T_Token_Type
                        }
                        export type unexpected_token = {
                            readonly 'found': _T_Token_Type
                        }
                    }
                    export type SG = 
                        | readonly ['missing token', null]
                        | readonly ['unexpected token', {
                            readonly 'found': _T_Token_Type
                        }]
                }
                export type cause = _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type
                    }]
                >
                
                export namespace expected {
                    
                    export namespace L {
                        
                        export namespace SG {
                            export type $ex_ = null
                            export type $pc_ = null
                            export type $cm_ = null
                            export type $cl_ = null
                            export type $gt_ = null
                            export type $at_ = null
                            export type $bc_ = null
                            export type a_string = null
                            export type a_value = null
                            export type $cc_ = null
                        }
                        export type SG = 
                            | readonly ['!', null]
                            | readonly [')', null]
                            | readonly [',', null]
                            | readonly [':', null]
                            | readonly ['>', null]
                            | readonly ['@', null]
                            | readonly [']', null]
                            | readonly ['a string', null]
                            | readonly ['a value', null]
                            | readonly ['}', null]
                    }
                    export type L = _i_core._T_State_Group<null, 
                        | readonly ['!', null]
                        | readonly [')', null]
                        | readonly [',', null]
                        | readonly [':', null]
                        | readonly ['>', null]
                        | readonly ['@', null]
                        | readonly [']', null]
                        | readonly ['a string', null]
                        | readonly ['a value', null]
                        | readonly ['}', null]
                    >
                }
                export type expected = _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['!', null]
                    | readonly [')', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly ['>', null]
                    | readonly ['@', null]
                    | readonly [']', null]
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['}', null]
                >>
            }
            export type parser = {
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type
                    }]
                >
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['!', null]
                    | readonly [')', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly ['>', null]
                    | readonly ['@', null]
                    | readonly [']', null]
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['}', null]
                >>
            }
        }
        export type SG = 
            | readonly ['lexer', _i_core._T_State_Group<null, 
                | readonly ['dangling slash', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected character', number]
                | readonly ['unexpected control character', number]
                | readonly ['unexpected end of input', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unknown escape character', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated string', null]
                | readonly ['unterminated unicode escape sequence', null]
            >]
            | readonly ['parser', {
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type
                    }]
                >
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['!', null]
                    | readonly [')', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly ['>', null]
                    | readonly ['@', null]
                    | readonly [']', null]
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['}', null]
                >>
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['lexer', _i_core._T_State_Group<null, 
            | readonly ['dangling slash', null]
            | readonly ['invalid unicode escape sequence', null]
            | readonly ['missing character after escape', null]
            | readonly ['unexpected character', number]
            | readonly ['unexpected control character', number]
            | readonly ['unexpected end of input', null]
            | readonly ['unexpected end of line in delimited string', null]
            | readonly ['unknown escape character', null]
            | readonly ['unterminated block comment', null]
            | readonly ['unterminated string', null]
            | readonly ['unterminated unicode escape sequence', null]
        >]
        | readonly ['parser', {
            readonly 'cause': _i_core._T_State_Group<null, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _T_Token_Type
                }]
            >
            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['!', null]
                | readonly [')', null]
                | readonly [',', null]
                | readonly [':', null]
                | readonly ['>', null]
                | readonly ['@', null]
                | readonly [']', null]
                | readonly ['a string', null]
                | readonly ['a value', null]
                | readonly ['}', null]
            >>
        }]
    >
}

export namespace Parse_Result {
    
    export namespace SG {
        
        export namespace failure {
        }
        export type failure = _T_Parse_Error
        
        export namespace success {
        }
        export type success = _i_imports_ast._T_Document
    }
    export type SG = 
        | readonly ['failure', _T_Parse_Error]
        | readonly ['success', _i_imports_ast._T_Document]
}

export namespace Token_Type {
    
    export namespace SG {
        export type $ex_ = null
        export type $po_ = null
        export type $pc_ = null
        export type $sr_ = null
        export type $cm_ = null
        export type $cl_ = null
        export type $st_ = null
        export type $gt_ = null
        export type $at_ = null
        export type $bo_ = null
        export type $bc_ = null
        
        export namespace _string {
            
            export namespace _type {
            }
            export type _type = _i_imports_ast._T_String_Type
            export type value = string
        }
        export type _string = {
            readonly 'type': _i_imports_ast._T_String_Type
            readonly 'value': string
        }
        export type $co_ = null
        export type $vb_ = null
        export type $cc_ = null
        export type $ti_ = null
    }
    export type SG = 
        | readonly ['!', null]
        | readonly ['(', null]
        | readonly [')', null]
        | readonly ['*', null]
        | readonly [',', null]
        | readonly [':', null]
        | readonly ['<', null]
        | readonly ['>', null]
        | readonly ['@', null]
        | readonly ['[', null]
        | readonly [']', null]
        | readonly ['string', {
            readonly 'type': _i_imports_ast._T_String_Type
            readonly 'value': string
        }]
        | readonly ['{', null]
        | readonly ['|', null]
        | readonly ['}', null]
        | readonly ['~', null]
}

export namespace Tokenizer_Result {
    
    export namespace end {
    }
    export type end = _i_imports_ast._T_Location
    
    export namespace leading_trivia {
    }
    export type leading_trivia = _i_imports_ast._T_Trivia
    
    export namespace tokens {
        
        export namespace L {
        }
        export type L = _T_Annotated_Token
    }
    export type tokens = _i_core._T_List<null, _T_Annotated_Token>
}
