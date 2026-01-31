
import * as _pi from "pareto-core/dist/interface"

import * as i_location from "./location"

export namespace Error_ {
    
    export namespace type_ {
        
        export namespace constraint {
            
            export namespace state {
                
                export type expected = string
                
                export type found = string
                
            }
            
            export type state = {
                readonly 'expected': state.expected
                readonly 'found': state.found
            }
            
            export type optional_value_is_not_set = null
            
            export type same_node = string
            
        }
        
        export type constraint = 
            | readonly ['state', constraint.state]
            | readonly ['optional value is not set', constraint.optional_value_is_not_set]
            | readonly ['same node', constraint.same_node]
        
        export namespace lookup {
            
            export type cycle_detected = null
            
            export type no_context_lookup = null
            
            export type no_such_entry = string
            
        }
        
        export type lookup = 
            | readonly ['cycle detected', lookup.cycle_detected]
            | readonly ['no context lookup', lookup.no_context_lookup]
            | readonly ['no such entry', lookup.no_such_entry]
        
        export namespace missing_required_entries {
            
            export type D = null
            
        }
        
        export type missing_required_entries = _pi.Dictionary<missing_required_entries.D>
        
    }
    
    export type type_ = 
        | readonly ['constraint', type_.constraint]
        | readonly ['lookup', type_.lookup]
        | readonly ['missing required entries', type_.missing_required_entries]
    
    export type location = i_location.Location
    
}

export type Error_ = {
    readonly 'type': Error_.type_
    readonly 'location': Error_.location
}

export { 
    Error_ as Error, 
}
