import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Error = (
    $$_: _i_in._T_Error,
    $$_p: null,
) => _i_out._T_Error

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Error = _T_Error

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Error
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Error
}

// *** ALIASES FOR NESTED TYPES

export namespace Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Error
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Error
}
