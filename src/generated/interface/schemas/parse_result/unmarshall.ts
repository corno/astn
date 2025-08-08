import * as _pt from 'exupery-core-types'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/unconstrained"

// **** TYPES

export type _T_Parse_Error = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Parse_Error

export type _T_Parse_Result = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Parse_Result

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Parse_Error = _T_Parse_Error

export type Parse_Result = _T_Parse_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Parse_Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parse_Error
}

export namespace _T_Parse_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parse_Result
}

// *** ALIASES FOR NESTED TYPES

export namespace Parse_Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parse_Error
}

export namespace Parse_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Parse_Result
}
