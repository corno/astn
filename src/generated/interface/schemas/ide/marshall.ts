import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/unconstrained"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Key_Value_Pairs_To_Be_Sorted = (
    $$_: _i_in._T_Key_Value_Pairs_To_Be_Sorted,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Relative_Range = (
    $$_: _i_in._T_Relative_Range,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Text_Edits = (
    $$_: _i_in._T_Text_Edits,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Key_Value_Pairs_To_Be_Sorted = _T_Key_Value_Pairs_To_Be_Sorted

export type Relative_Range = _T_Relative_Range

export type Text_Edits = _T_Text_Edits

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Key_Value_Pairs_To_Be_Sorted {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs_To_Be_Sorted
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Relative_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Text_Edits {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edits
    
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

export namespace Key_Value_Pairs_To_Be_Sorted {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs_To_Be_Sorted
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Relative_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Text_Edits {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edits
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
