import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"
import * as _i_imports_parse_tree from "../../authoring_parse_tree/data_types/source"
import * as _i_imports_token from "../../token/data_types/source"

// **** TYPES

export type _T_Error = {
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['lexer', _i_core._T_State_Group<null, 
            | readonly ['unexpected control character', number]
            | readonly ['missing character after escape', null]
            | readonly ['unexpected end of line in delimited string', null]
            | readonly ['unexpected character', number]
            | readonly ['unterminated string', null]
            | readonly ['unterminated block comment', null]
            | readonly ['unterminated unicode escape sequence', null]
            | readonly ['invalid unicode escape sequence', null]
            | readonly ['unknown escape character', null]
            | readonly ['unexpected end of input', null]
            | readonly ['dangling slash', null]
        >]
        | readonly ['parser', {
            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['a string', null]
                | readonly ['a value', null]
                | readonly ['!', null]
                | readonly ['>', null]
                | readonly ['}', null]
                | readonly ['@', null]
                | readonly [',', null]
                | readonly [':', null]
                | readonly [')', null]
                | readonly [']', null]
                | readonly ['#', null]
            >>
            readonly 'cause': _i_core._T_State_Group<null, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _i_imports_token._T_Token_Type
                }]
            >
        }]
    >
    readonly 'range': _pi.Optional_Value<_i_imports_token._T_Range>
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Error {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace lexer {
                
                export namespace SG {
                    export type unexpected_control_character = number
                    export type missing_character_after_escape = null
                    export type unexpected_end_of_line_in_delimited_string = null
                    export type unexpected_character = number
                    export type unterminated_string = null
                    export type unterminated_block_comment = null
                    export type unterminated_unicode_escape_sequence = null
                    export type invalid_unicode_escape_sequence = null
                    export type unknown_escape_character = null
                    export type unexpected_end_of_input = null
                    export type dangling_slash = null
                }
                export type SG = 
                    | readonly ['unexpected control character', number]
                    | readonly ['missing character after escape', null]
                    | readonly ['unexpected end of line in delimited string', null]
                    | readonly ['unexpected character', number]
                    | readonly ['unterminated string', null]
                    | readonly ['unterminated block comment', null]
                    | readonly ['unterminated unicode escape sequence', null]
                    | readonly ['invalid unicode escape sequence', null]
                    | readonly ['unknown escape character', null]
                    | readonly ['unexpected end of input', null]
                    | readonly ['dangling slash', null]
            }
            export type lexer = _i_core._T_State_Group<null, 
                | readonly ['unexpected control character', number]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unexpected character', number]
                | readonly ['unterminated string', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated unicode escape sequence', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['unknown escape character', null]
                | readonly ['unexpected end of input', null]
                | readonly ['dangling slash', null]
            >
            
            export namespace parser {
                
                export namespace expected {
                    
                    export namespace L {
                        
                        export namespace SG {
                            export type a_string = null
                            export type a_value = null
                            export type $ex_ = null
                            export type $gt_ = null
                            export type $cc_ = null
                            export type $at_ = null
                            export type $cm_ = null
                            export type $cl_ = null
                            export type $pc_ = null
                            export type $bc_ = null
                            export type $ha_ = null
                        }
                        export type SG = 
                            | readonly ['a string', null]
                            | readonly ['a value', null]
                            | readonly ['!', null]
                            | readonly ['>', null]
                            | readonly ['}', null]
                            | readonly ['@', null]
                            | readonly [',', null]
                            | readonly [':', null]
                            | readonly [')', null]
                            | readonly [']', null]
                            | readonly ['#', null]
                    }
                    export type L = _i_core._T_State_Group<null, 
                        | readonly ['a string', null]
                        | readonly ['a value', null]
                        | readonly ['!', null]
                        | readonly ['>', null]
                        | readonly ['}', null]
                        | readonly ['@', null]
                        | readonly [',', null]
                        | readonly [':', null]
                        | readonly [')', null]
                        | readonly [']', null]
                        | readonly ['#', null]
                    >
                }
                export type expected = _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['!', null]
                    | readonly ['>', null]
                    | readonly ['}', null]
                    | readonly ['@', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly [')', null]
                    | readonly [']', null]
                    | readonly ['#', null]
                >>
                
                export namespace cause {
                    
                    export namespace SG {
                        export type missing_token = null
                        
                        export namespace unexpected_token {
                            
                            export namespace found {
                            }
                            export type found = _i_imports_token._T_Token_Type
                        }
                        export type unexpected_token = {
                            readonly 'found': _i_imports_token._T_Token_Type
                        }
                    }
                    export type SG = 
                        | readonly ['missing token', null]
                        | readonly ['unexpected token', {
                            readonly 'found': _i_imports_token._T_Token_Type
                        }]
                }
                export type cause = _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _i_imports_token._T_Token_Type
                    }]
                >
            }
            export type parser = {
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['!', null]
                    | readonly ['>', null]
                    | readonly ['}', null]
                    | readonly ['@', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly [')', null]
                    | readonly [']', null]
                    | readonly ['#', null]
                >>
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _i_imports_token._T_Token_Type
                    }]
                >
            }
        }
        export type SG = 
            | readonly ['lexer', _i_core._T_State_Group<null, 
                | readonly ['unexpected control character', number]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unexpected character', number]
                | readonly ['unterminated string', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated unicode escape sequence', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['unknown escape character', null]
                | readonly ['unexpected end of input', null]
                | readonly ['dangling slash', null]
            >]
            | readonly ['parser', {
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['!', null]
                    | readonly ['>', null]
                    | readonly ['}', null]
                    | readonly ['@', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly [')', null]
                    | readonly [']', null]
                    | readonly ['#', null]
                >>
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _i_imports_token._T_Token_Type
                    }]
                >
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['lexer', _i_core._T_State_Group<null, 
            | readonly ['unexpected control character', number]
            | readonly ['missing character after escape', null]
            | readonly ['unexpected end of line in delimited string', null]
            | readonly ['unexpected character', number]
            | readonly ['unterminated string', null]
            | readonly ['unterminated block comment', null]
            | readonly ['unterminated unicode escape sequence', null]
            | readonly ['invalid unicode escape sequence', null]
            | readonly ['unknown escape character', null]
            | readonly ['unexpected end of input', null]
            | readonly ['dangling slash', null]
        >]
        | readonly ['parser', {
            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['a string', null]
                | readonly ['a value', null]
                | readonly ['!', null]
                | readonly ['>', null]
                | readonly ['}', null]
                | readonly ['@', null]
                | readonly [',', null]
                | readonly [':', null]
                | readonly [')', null]
                | readonly [']', null]
                | readonly ['#', null]
            >>
            readonly 'cause': _i_core._T_State_Group<null, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _i_imports_token._T_Token_Type
                }]
            >
        }]
    >
    
    export namespace range {
        
        export namespace O {
        }
        export type O = _i_imports_token._T_Range
    }
    export type range = _pi.Optional_Value<_i_imports_token._T_Range>
}

// *** ALIASES FOR NESTED TYPES

export namespace Error {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace lexer {
                
                export namespace SG {
                    export type unexpected_control_character = number
                    export type missing_character_after_escape = null
                    export type unexpected_end_of_line_in_delimited_string = null
                    export type unexpected_character = number
                    export type unterminated_string = null
                    export type unterminated_block_comment = null
                    export type unterminated_unicode_escape_sequence = null
                    export type invalid_unicode_escape_sequence = null
                    export type unknown_escape_character = null
                    export type unexpected_end_of_input = null
                    export type dangling_slash = null
                }
                export type SG = 
                    | readonly ['unexpected control character', number]
                    | readonly ['missing character after escape', null]
                    | readonly ['unexpected end of line in delimited string', null]
                    | readonly ['unexpected character', number]
                    | readonly ['unterminated string', null]
                    | readonly ['unterminated block comment', null]
                    | readonly ['unterminated unicode escape sequence', null]
                    | readonly ['invalid unicode escape sequence', null]
                    | readonly ['unknown escape character', null]
                    | readonly ['unexpected end of input', null]
                    | readonly ['dangling slash', null]
            }
            export type lexer = _i_core._T_State_Group<null, 
                | readonly ['unexpected control character', number]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unexpected character', number]
                | readonly ['unterminated string', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated unicode escape sequence', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['unknown escape character', null]
                | readonly ['unexpected end of input', null]
                | readonly ['dangling slash', null]
            >
            
            export namespace parser {
                
                export namespace expected {
                    
                    export namespace L {
                        
                        export namespace SG {
                            export type a_string = null
                            export type a_value = null
                            export type $ex_ = null
                            export type $gt_ = null
                            export type $cc_ = null
                            export type $at_ = null
                            export type $cm_ = null
                            export type $cl_ = null
                            export type $pc_ = null
                            export type $bc_ = null
                            export type $ha_ = null
                        }
                        export type SG = 
                            | readonly ['a string', null]
                            | readonly ['a value', null]
                            | readonly ['!', null]
                            | readonly ['>', null]
                            | readonly ['}', null]
                            | readonly ['@', null]
                            | readonly [',', null]
                            | readonly [':', null]
                            | readonly [')', null]
                            | readonly [']', null]
                            | readonly ['#', null]
                    }
                    export type L = _i_core._T_State_Group<null, 
                        | readonly ['a string', null]
                        | readonly ['a value', null]
                        | readonly ['!', null]
                        | readonly ['>', null]
                        | readonly ['}', null]
                        | readonly ['@', null]
                        | readonly [',', null]
                        | readonly [':', null]
                        | readonly [')', null]
                        | readonly [']', null]
                        | readonly ['#', null]
                    >
                }
                export type expected = _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['!', null]
                    | readonly ['>', null]
                    | readonly ['}', null]
                    | readonly ['@', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly [')', null]
                    | readonly [']', null]
                    | readonly ['#', null]
                >>
                
                export namespace cause {
                    
                    export namespace SG {
                        export type missing_token = null
                        
                        export namespace unexpected_token {
                            
                            export namespace found {
                            }
                            export type found = _i_imports_token._T_Token_Type
                        }
                        export type unexpected_token = {
                            readonly 'found': _i_imports_token._T_Token_Type
                        }
                    }
                    export type SG = 
                        | readonly ['missing token', null]
                        | readonly ['unexpected token', {
                            readonly 'found': _i_imports_token._T_Token_Type
                        }]
                }
                export type cause = _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _i_imports_token._T_Token_Type
                    }]
                >
            }
            export type parser = {
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['!', null]
                    | readonly ['>', null]
                    | readonly ['}', null]
                    | readonly ['@', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly [')', null]
                    | readonly [']', null]
                    | readonly ['#', null]
                >>
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _i_imports_token._T_Token_Type
                    }]
                >
            }
        }
        export type SG = 
            | readonly ['lexer', _i_core._T_State_Group<null, 
                | readonly ['unexpected control character', number]
                | readonly ['missing character after escape', null]
                | readonly ['unexpected end of line in delimited string', null]
                | readonly ['unexpected character', number]
                | readonly ['unterminated string', null]
                | readonly ['unterminated block comment', null]
                | readonly ['unterminated unicode escape sequence', null]
                | readonly ['invalid unicode escape sequence', null]
                | readonly ['unknown escape character', null]
                | readonly ['unexpected end of input', null]
                | readonly ['dangling slash', null]
            >]
            | readonly ['parser', {
                readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                    | readonly ['a string', null]
                    | readonly ['a value', null]
                    | readonly ['!', null]
                    | readonly ['>', null]
                    | readonly ['}', null]
                    | readonly ['@', null]
                    | readonly [',', null]
                    | readonly [':', null]
                    | readonly [')', null]
                    | readonly [']', null]
                    | readonly ['#', null]
                >>
                readonly 'cause': _i_core._T_State_Group<null, 
                    | readonly ['missing token', null]
                    | readonly ['unexpected token', {
                        readonly 'found': _i_imports_token._T_Token_Type
                    }]
                >
            }]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['lexer', _i_core._T_State_Group<null, 
            | readonly ['unexpected control character', number]
            | readonly ['missing character after escape', null]
            | readonly ['unexpected end of line in delimited string', null]
            | readonly ['unexpected character', number]
            | readonly ['unterminated string', null]
            | readonly ['unterminated block comment', null]
            | readonly ['unterminated unicode escape sequence', null]
            | readonly ['invalid unicode escape sequence', null]
            | readonly ['unknown escape character', null]
            | readonly ['unexpected end of input', null]
            | readonly ['dangling slash', null]
        >]
        | readonly ['parser', {
            readonly 'expected': _i_core._T_List<null, _i_core._T_State_Group<null, 
                | readonly ['a string', null]
                | readonly ['a value', null]
                | readonly ['!', null]
                | readonly ['>', null]
                | readonly ['}', null]
                | readonly ['@', null]
                | readonly [',', null]
                | readonly [':', null]
                | readonly [')', null]
                | readonly [']', null]
                | readonly ['#', null]
            >>
            readonly 'cause': _i_core._T_State_Group<null, 
                | readonly ['missing token', null]
                | readonly ['unexpected token', {
                    readonly 'found': _i_imports_token._T_Token_Type
                }]
            >
        }]
    >
    
    export namespace range {
        
        export namespace O {
        }
        export type O = _i_imports_token._T_Range
    }
    export type range = _pi.Optional_Value<_i_imports_token._T_Range>
}
