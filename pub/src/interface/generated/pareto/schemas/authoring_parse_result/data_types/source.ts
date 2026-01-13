
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

import * as i_imports_parse_tree from "../../authoring_parse_tree/data_types/source"

import * as i_imports_token from "../../token/data_types/source"

export namespace Error_ {
    
    export namespace _type {
        
        export namespace lexer {
            
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
        
        export type lexer = 
            | readonly ['unexpected control character', lexer.unexpected_control_character]
            | readonly ['missing character after escape', lexer.missing_character_after_escape]
            | readonly ['unexpected end of line in delimited string', lexer.unexpected_end_of_line_in_delimited_string]
            | readonly ['unexpected character', lexer.unexpected_character]
            | readonly ['unterminated string', lexer.unterminated_string]
            | readonly ['unterminated block comment', lexer.unterminated_block_comment]
            | readonly ['unterminated unicode escape sequence', lexer.unterminated_unicode_escape_sequence]
            | readonly ['invalid unicode escape sequence', lexer.invalid_unicode_escape_sequence]
            | readonly ['unknown escape character', lexer.unknown_escape_character]
            | readonly ['unexpected end of input', lexer.unexpected_end_of_input]
            | readonly ['dangling slash', lexer.dangling_slash]
        
        export namespace parser {
            
            export namespace expected {
                
                export namespace L {
                    
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
                
                export type L = 
                    | readonly ['a string', L.a_string]
                    | readonly ['a value', L.a_value]
                    | readonly ['!', L.$ex_]
                    | readonly ['>', L.$gt_]
                    | readonly ['}', L.$cc_]
                    | readonly ['@', L.$at_]
                    | readonly [',', L.$cm_]
                    | readonly [':', L.$cl_]
                    | readonly [')', L.$pc_]
                    | readonly [']', L.$bc_]
                    | readonly ['#', L.$ha_]
                
            }
            
            export type expected = _pi.List<expected.L>
            
            export namespace cause {
                
                export type missing_token = null
                
                export namespace unexpected_token {
                    
                    export type found = i_imports_token.Token_Type
                    
                }
                
                export type unexpected_token = {
                    readonly 'found': unexpected_token.found
                }
                
            }
            
            export type cause = 
                | readonly ['missing token', cause.missing_token]
                | readonly ['unexpected token', cause.unexpected_token]
            
        }
        
        export type parser = {
            readonly 'expected': parser.expected
            readonly 'cause': parser.cause
        }
        
    }
    
    export type _type = 
        | readonly ['lexer', _type.lexer]
        | readonly ['parser', _type.parser]
    
    export namespace range {
        
        export type O = i_imports_token.Range
        
    }
    
    export type range = _pi.Optional_Value<range.O>
    
}

export type Error_ = {
    readonly 'type': Error_._type
    readonly 'range': Error_.range
}

export { 
    Error_ as Error, 
}
