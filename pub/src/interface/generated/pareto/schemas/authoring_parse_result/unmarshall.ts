import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "./data_types/target"
    import * as _i_in from "../../core/astn_source"
    import * as _i_vd from "./value_deserializers"
    
    // **** TYPES
    
    export type _T_Error = (
        $$_: _i_in._T_Value,
        $$_p: {
            readonly 'value deserializers': _i_vd._T_Value_Deserializers
        },
    ) => _i_out._T_Error
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Error = _T_Error
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Error {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Value
        
        export namespace PARAMS {
            
            export namespace value_deserializers {
            }
            export type value_deserializers = _i_vd._T_Value_Deserializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Error
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Error {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Value
        
        export namespace PARAMS {
            
            export namespace value_deserializers {
            }
            export type value_deserializers = _i_vd._T_Value_Deserializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Error
    }
