
import * as _pi from "pareto-core/dist/interface"

export namespace Error_ {
    
    export type expected_a_dictionary = null
    
    export type expected_a_group = null
    
    export type expected_a_list = null
    
    export type expected_a_nothing = null
    
    export type expected_an_optional = null
    
    export type expected_a_state = null
    
    export type expected_a_text = null
    
    export type not_a_valid_number = null
    
    export type not_a_valid_boolean = null
    
    export type no_such_entry = string
    
    export type unknown_option = string
    
}

export type Error_ = 
    | readonly ['expected a dictionary', Error_.expected_a_dictionary]
    | readonly ['expected a group', Error_.expected_a_group]
    | readonly ['expected a list', Error_.expected_a_list]
    | readonly ['expected a nothing', Error_.expected_a_nothing]
    | readonly ['expected an optional', Error_.expected_an_optional]
    | readonly ['expected a state', Error_.expected_a_state]
    | readonly ['expected a text', Error_.expected_a_text]
    | readonly ['not a valid number', Error_.not_a_valid_number]
    | readonly ['not a valid boolean', Error_.not_a_valid_boolean]
    | readonly ['no such entry', Error_.no_such_entry]
    | readonly ['unknown option', Error_.unknown_option]

export { 
    Error_ as Error, 
}
