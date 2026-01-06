import * as _et from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Value = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Value

export type _T_Document = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Document

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value = _T_Value

export type Document = _T_Document

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Document {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Document
}

// *** ALIASES FOR NESTED TYPES

export namespace Value {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Document {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Document
}
