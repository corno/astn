
import * as _pi from "pareto-core/dist/interface"

import * as i_location from "./location"

export namespace Error_ {
    
    export namespace type_ {
        
        export namespace constraint {
            
            export namespace state_group {
                
                export type expected = string
                
                export type found = string
                
            }
            
            export type state_group = {
                readonly 'expected': state_group.expected
                readonly 'found': state_group.found
            }
            
            export namespace optional_value {
                
                export type set_ = string
                
            }
            
            export type optional_value = 
                | readonly ['set', optional_value.set_]
            
            export type same_node = string
            
        }
        
        export type constraint = 
            | readonly ['state group', constraint.state_group]
            | readonly ['optional value', constraint.optional_value]
            | readonly ['same node', constraint.same_node]
        
        export namespace lookup {
            
            export type cyclic_lookup_in_acyclic_context = string
            
            export type optional_lookup_not_set = null
            
            export type no_such_entry = string
            
        }
        
        export type lookup = 
            | readonly ['cyclic lookup in acyclic context', lookup.cyclic_lookup_in_acyclic_context]
            | readonly ['optional lookup not set', lookup.optional_lookup_not_set]
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
