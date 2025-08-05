import * as _pt from 'exupery-core-types'

import * as _i_in from "./unconstrained"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Value_Serializers = {
    readonly 'boolean': (
        $$_: boolean,
        $$_p: null,
    ) => string
    readonly 'custom numbers': null
    readonly 'default number': (
        $$_: number,
        $$_p: null,
    ) => string
}

export type _T_s_Key_Value_Pairs_To_Be_Sorted = (
    $$_: _i_in._T_Key_Value_Pairs_To_Be_Sorted,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Relative_Range = (
    $$_: _i_in._T_Relative_Range,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Text_Edits = (
    $$_: _i_in._T_Text_Edits,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Key_Value_Pairs_To_Be_Sorted = _T_s_Key_Value_Pairs_To_Be_Sorted

export type s_Relative_Range = _T_s_Relative_Range

export type s_Text_Edits = _T_s_Text_Edits

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
    }
    export type custom_numbers = null
    
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

export namespace _T_s_Key_Value_Pairs_To_Be_Sorted {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs_To_Be_Sorted
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Relative_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Text_Edits {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edits
    
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
    }
    export type custom_numbers = null
    
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

export namespace s_Key_Value_Pairs_To_Be_Sorted {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs_To_Be_Sorted
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Relative_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Text_Edits {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edits
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
