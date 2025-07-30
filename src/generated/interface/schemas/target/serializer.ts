import * as _pt from 'exupery-core-types'

import * as _i_in from "./unconstrained"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Value_Serializers = {
    readonly 'boolean': (
        $$_: boolean,
        $$_p: null,
    ) => string
    readonly 'custom numbers': {
        readonly 'Position': (
            $$_: number,
            $$_p: null,
        ) => string
    }
    readonly 'default number': (
        $$_: number,
        $$_p: null,
    ) => string
}

export type _T_s_Document = (
    $$_: _i_in._T_Document,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Value = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Document = _T_s_Document

export type s_Value = _T_s_Value

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
        
        export namespace Position {
            export type CONTEXT = number
            
            export namespace PARAMS {
            }
            export type RESULT = string
        }
        export type Position = (
            $$_: number,
            $$_p: null,
        ) => string
    }
    export type custom_numbers = {
        readonly 'Position': (
            $$_: number,
            $$_p: null,
        ) => string
    }
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace _T_s_Document {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Document
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
        
        export namespace Position {
            export type CONTEXT = number
            
            export namespace PARAMS {
            }
            export type RESULT = string
        }
        export type Position = (
            $$_: number,
            $$_p: null,
        ) => string
    }
    export type custom_numbers = {
        readonly 'Position': (
            $$_: number,
            $$_p: null,
        ) => string
    }
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace s_Document {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Document
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Value {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
