import * as _pt from 'exupery-core-types'

import * as _i_in from "./unconstrained"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Document = (
    $$_: _i_in._T_Document,
    $$_p: null,
) => _i_out._T_Value

export type _T_Value = (
    $$_: _i_in._T_Value,
    $$_p: null,
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Document = _T_Document

export type Value = _T_Value

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Document {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Document
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Document {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Document
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
