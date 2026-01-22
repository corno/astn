
import * as _pi from "pareto-core/dist/interface"

import * as i_location from "./location"

export namespace Error_ {
    
    export namespace type_ {
        
        export type cyclic_lookup_in_acyclic_context = string
        
        export type missing_required_entry = string
        
        export type no_context_lookup = null
        
        export type no_such_entry = string
        
        export type not_the_same_node = string
        
        export namespace wrong_state {
            
            export type expected = string
            
            export type found = string
            
        }
        
        export type wrong_state = {
            readonly 'expected': wrong_state.expected
            readonly 'found': wrong_state.found
        }
        
        export type tbd = string
        
    }
    
    export type type_ = 
        | readonly ['cyclic lookup in acyclic context', type_.cyclic_lookup_in_acyclic_context]
        | readonly ['missing required entry', type_.missing_required_entry]
        | readonly ['no context lookup', type_.no_context_lookup]
        | readonly ['no such entry', type_.no_such_entry]
        | readonly ['not the same node', type_.not_the_same_node]
        | readonly ['wrong state', type_.wrong_state]
        | readonly ['tbd', type_.tbd]
    
    export type location = i_location.Location
    
}

export type Error_ = {
    readonly 'type': Error_.type_
    readonly 'location': Error_.location
}

export { 
    Error_ as Error, 
}
