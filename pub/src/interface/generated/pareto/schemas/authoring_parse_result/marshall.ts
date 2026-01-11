import * as _pi from "pareto-core-interface"
    
    import * as _i_out from "../../core/astn_target"
    import * as _i_in from "./data_types/source"
    import * as _i_vs from "./value_serializers"
    
    // **** TYPES
    
    export type _T_Error = (
        $$_: _i_in._T_Error,
        $$_p: {
            readonly 'value serializers': _i_vs._T_Value_Serializers
        },
    ) => _i_out._T_Value
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Error = _T_Error
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Error {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Error
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Error {
        
        export namespace CONTEXT {
        }
        export type CONTEXT = _i_in._T_Error
        
        export namespace PARAMS {
            
            export namespace value_serializers {
            }
            export type value_serializers = _i_vs._T_Value_Serializers
        }
        
        export namespace RESULT {
        }
        export type RESULT = _i_out._T_Value
    }
