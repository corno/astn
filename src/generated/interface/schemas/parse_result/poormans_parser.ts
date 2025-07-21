import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"
import * as _i_imports_ast from "../ast/poormans_parser"

// **** TYPES

export type _T_Annotated_Token<G_Source> = {
    readonly 'end': _i_imports_ast._T_Location<G_Source>
    readonly 'start': _i_imports_ast._T_Location<G_Source>
    readonly 'trailing trivia': _i_imports_ast._T_Trivia<G_Source>
    readonly 'type': _T_Token_Type<G_Source>
}

export type _T_Parse_Error<G_Source> = {
    readonly 'range': _i_imports_ast._T_Range<G_Source>
    readonly 'type': _i_core._T_State_Group<G_Source, 
        | readonly ['lexer', _i_core._T_State_Group<G_Source, 
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
            readonly 'cause': _i_core._T_State_Group<G_Source, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _T_Token_Type<G_Source>
                }]
            >
            readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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

export type _T_Parse_Result<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['failure', _T_Parse_Error<G_Source>]
    | readonly ['success', _i_imports_ast._T_Document<G_Source>]
>

export type _T_Token_Type<G_Source> = _i_core._T_State_Group<G_Source, 
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
        readonly 'type': _i_imports_ast._T_String_Type<G_Source>
        readonly 'value': string
    }]
    | readonly ['{', null]
    | readonly ['|', null]
    | readonly ['}', null]
    | readonly ['~', null]
>

export type _T_Tokenizer_Result<G_Source> = {
    readonly 'end': _i_imports_ast._T_Location<G_Source>
    readonly 'leading trivia': _i_imports_ast._T_Trivia<G_Source>
    readonly 'tokens': _i_core._T_List<G_Source, _T_Annotated_Token<G_Source>>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Annotated_Token<G_Source> = _T_Annotated_Token<G_Source>

export type Parse_Error<G_Source> = _T_Parse_Error<G_Source>

export type Parse_Result<G_Source> = _T_Parse_Result<G_Source>

export type Token_Type<G_Source> = _T_Token_Type<G_Source>

export type Tokenizer_Result<G_Source> = _T_Tokenizer_Result<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Annotated_Token {
    
    export namespace end {
    }
    export type end<G_Source> = _i_imports_ast._T_Location<G_Source>
    
    export namespace start {
    }
    export type start<G_Source> = _i_imports_ast._T_Location<G_Source>
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia<G_Source> = _i_imports_ast._T_Trivia<G_Source>
    
    export namespace _type {
    }
    export type _type<G_Source> = _T_Token_Type<G_Source>
}

export namespace _T_Parse_Error {
    
    export namespace range {
    }
    export type range<G_Source> = _i_imports_ast._T_Range<G_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace lexer {
                
                export namespace SG {
                    export type dangling_slash<G_Source> = null
                    export type invalid_unicode_escape_sequence<G_Source> = null
                    export type missing_character_after_escape<G_Source> = null
                    export type unexpected_character<G_Source> = number
                    export type unexpected_control_character<G_Source> = number
                    export type unexpected_end_of_input<G_Source> = null
                    export type unexpected_end_of_line_in_delimited_string<G_Source> = null
                    export type unknown_escape_character<G_Source> = null
                    export type unterminated_block_comment<G_Source> = null
                    export type unterminated_string<G_Source> = null
                    export type unterminated_unicode_escape_sequence<G_Source> = null
                }
                export type SG<G_Source> = 
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
            export type lexer<G_Source> = _i_core._T_State_Group<G_Source, 
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
                        export type missing_token<G_Source> = null
                        
                        export namespace unexpected_token {
                            
                            export namespace found {
                            }
                            export type found<G_Source> = _T_Token_Type<G_Source>
                        }
                        export type unexpected_token<G_Source> = {
                            readonly 'found': _T_Token_Type<G_Source>
                        }
                    }
                    export type SG<G_Source> = 
                        | readonly ['missing token', null]
                        | readonly ['unexpected token', {
                            readonly 'found': _T_Token_Type<G_Source>
                        }]
                }
                export type cause<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type<G_Source>
                    }]
                >
                
                export namespace expected {
                    
                    export namespace L {
                        
                        export namespace SG {
                            export type $ex_<G_Source> = null
                            export type $pc_<G_Source> = null
                            export type $cm_<G_Source> = null
                            export type $cl_<G_Source> = null
                            export type $gt_<G_Source> = null
                            export type $at_<G_Source> = null
                            export type $bc_<G_Source> = null
                            export type a_string<G_Source> = null
                            export type a_value<G_Source> = null
                            export type $cc_<G_Source> = null
                        }
                        export type SG<G_Source> = 
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
                    export type L<G_Source> = _i_core._T_State_Group<G_Source, 
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
                export type expected<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
            export type parser<G_Source> = {
                readonly 'cause': _i_core._T_State_Group<G_Source, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type<G_Source>
                    }]
                >
                readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
        export type SG<G_Source> = 
            | readonly ['lexer', _i_core._T_State_Group<G_Source, 
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
                readonly 'cause': _i_core._T_State_Group<G_Source, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type<G_Source>
                    }]
                >
                readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['lexer', _i_core._T_State_Group<G_Source, 
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
            readonly 'cause': _i_core._T_State_Group<G_Source, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _T_Token_Type<G_Source>
                }]
            >
            readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
        export type failure<G_Source> = _T_Parse_Error<G_Source>
        
        export namespace success {
        }
        export type success<G_Source> = _i_imports_ast._T_Document<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['failure', _T_Parse_Error<G_Source>]
        | readonly ['success', _i_imports_ast._T_Document<G_Source>]
}

export namespace _T_Token_Type {
    
    export namespace SG {
        export type $ex_<G_Source> = null
        export type $po_<G_Source> = null
        export type $pc_<G_Source> = null
        export type $sr_<G_Source> = null
        export type $cm_<G_Source> = null
        export type $cl_<G_Source> = null
        export type $st_<G_Source> = null
        export type $gt_<G_Source> = null
        export type $at_<G_Source> = null
        export type $bo_<G_Source> = null
        export type $bc_<G_Source> = null
        
        export namespace _string {
            
            export namespace _type {
            }
            export type _type<G_Source> = _i_imports_ast._T_String_Type<G_Source>
            export type value<G_Source> = string
        }
        export type _string<G_Source> = {
            readonly 'type': _i_imports_ast._T_String_Type<G_Source>
            readonly 'value': string
        }
        export type $co_<G_Source> = null
        export type $vb_<G_Source> = null
        export type $cc_<G_Source> = null
        export type $ti_<G_Source> = null
    }
    export type SG<G_Source> = 
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
            readonly 'type': _i_imports_ast._T_String_Type<G_Source>
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
    export type end<G_Source> = _i_imports_ast._T_Location<G_Source>
    
    export namespace leading_trivia {
    }
    export type leading_trivia<G_Source> = _i_imports_ast._T_Trivia<G_Source>
    
    export namespace tokens {
        
        export namespace L {
        }
        export type L<G_Source> = _T_Annotated_Token<G_Source>
    }
    export type tokens<G_Source> = _i_core._T_List<G_Source, _T_Annotated_Token<G_Source>>
}

// *** ALIASES FOR NESTED TYPES

export namespace Annotated_Token {
    
    export namespace end {
    }
    export type end<G_Source> = _i_imports_ast._T_Location<G_Source>
    
    export namespace start {
    }
    export type start<G_Source> = _i_imports_ast._T_Location<G_Source>
    
    export namespace trailing_trivia {
    }
    export type trailing_trivia<G_Source> = _i_imports_ast._T_Trivia<G_Source>
    
    export namespace _type {
    }
    export type _type<G_Source> = _T_Token_Type<G_Source>
}

export namespace Parse_Error {
    
    export namespace range {
    }
    export type range<G_Source> = _i_imports_ast._T_Range<G_Source>
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace lexer {
                
                export namespace SG {
                    export type dangling_slash<G_Source> = null
                    export type invalid_unicode_escape_sequence<G_Source> = null
                    export type missing_character_after_escape<G_Source> = null
                    export type unexpected_character<G_Source> = number
                    export type unexpected_control_character<G_Source> = number
                    export type unexpected_end_of_input<G_Source> = null
                    export type unexpected_end_of_line_in_delimited_string<G_Source> = null
                    export type unknown_escape_character<G_Source> = null
                    export type unterminated_block_comment<G_Source> = null
                    export type unterminated_string<G_Source> = null
                    export type unterminated_unicode_escape_sequence<G_Source> = null
                }
                export type SG<G_Source> = 
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
            export type lexer<G_Source> = _i_core._T_State_Group<G_Source, 
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
                        export type missing_token<G_Source> = null
                        
                        export namespace unexpected_token {
                            
                            export namespace found {
                            }
                            export type found<G_Source> = _T_Token_Type<G_Source>
                        }
                        export type unexpected_token<G_Source> = {
                            readonly 'found': _T_Token_Type<G_Source>
                        }
                    }
                    export type SG<G_Source> = 
                        | readonly ['missing token', null]
                        | readonly ['unexpected token', {
                            readonly 'found': _T_Token_Type<G_Source>
                        }]
                }
                export type cause<G_Source> = _i_core._T_State_Group<G_Source, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type<G_Source>
                    }]
                >
                
                export namespace expected {
                    
                    export namespace L {
                        
                        export namespace SG {
                            export type $ex_<G_Source> = null
                            export type $pc_<G_Source> = null
                            export type $cm_<G_Source> = null
                            export type $cl_<G_Source> = null
                            export type $gt_<G_Source> = null
                            export type $at_<G_Source> = null
                            export type $bc_<G_Source> = null
                            export type a_string<G_Source> = null
                            export type a_value<G_Source> = null
                            export type $cc_<G_Source> = null
                        }
                        export type SG<G_Source> = 
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
                    export type L<G_Source> = _i_core._T_State_Group<G_Source, 
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
                export type expected<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
            export type parser<G_Source> = {
                readonly 'cause': _i_core._T_State_Group<G_Source, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type<G_Source>
                    }]
                >
                readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
        export type SG<G_Source> = 
            | readonly ['lexer', _i_core._T_State_Group<G_Source, 
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
                readonly 'cause': _i_core._T_State_Group<G_Source, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _T_Token_Type<G_Source>
                    }]
                >
                readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
    export type _type<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['lexer', _i_core._T_State_Group<G_Source, 
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
            readonly 'cause': _i_core._T_State_Group<G_Source, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _T_Token_Type<G_Source>
                }]
            >
            readonly 'expected': _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
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
        export type failure<G_Source> = _T_Parse_Error<G_Source>
        
        export namespace success {
        }
        export type success<G_Source> = _i_imports_ast._T_Document<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['failure', _T_Parse_Error<G_Source>]
        | readonly ['success', _i_imports_ast._T_Document<G_Source>]
}

export namespace Token_Type {
    
    export namespace SG {
        export type $ex_<G_Source> = null
        export type $po_<G_Source> = null
        export type $pc_<G_Source> = null
        export type $sr_<G_Source> = null
        export type $cm_<G_Source> = null
        export type $cl_<G_Source> = null
        export type $st_<G_Source> = null
        export type $gt_<G_Source> = null
        export type $at_<G_Source> = null
        export type $bo_<G_Source> = null
        export type $bc_<G_Source> = null
        
        export namespace _string {
            
            export namespace _type {
            }
            export type _type<G_Source> = _i_imports_ast._T_String_Type<G_Source>
            export type value<G_Source> = string
        }
        export type _string<G_Source> = {
            readonly 'type': _i_imports_ast._T_String_Type<G_Source>
            readonly 'value': string
        }
        export type $co_<G_Source> = null
        export type $vb_<G_Source> = null
        export type $cc_<G_Source> = null
        export type $ti_<G_Source> = null
    }
    export type SG<G_Source> = 
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
            readonly 'type': _i_imports_ast._T_String_Type<G_Source>
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
    export type end<G_Source> = _i_imports_ast._T_Location<G_Source>
    
    export namespace leading_trivia {
    }
    export type leading_trivia<G_Source> = _i_imports_ast._T_Trivia<G_Source>
    
    export namespace tokens {
        
        export namespace L {
        }
        export type L<G_Source> = _T_Annotated_Token<G_Source>
    }
    export type tokens<G_Source> = _i_core._T_List<G_Source, _T_Annotated_Token<G_Source>>
}
