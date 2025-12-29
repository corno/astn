import * as _et from 'pareto-core-interface'

import * as _i_in from "../../core/astn_source"
import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Key_Value_Pairs_To_Be_Sorted = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Key_Value_Pairs_To_Be_Sorted

export type _T_Relative_Range = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Relative_Range

export type _T_Text_Edits = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Text_Edits

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Key_Value_Pairs_To_Be_Sorted = _T_Key_Value_Pairs_To_Be_Sorted

export type Relative_Range = _T_Relative_Range

export type Text_Edits = _T_Text_Edits

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Key_Value_Pairs_To_Be_Sorted {
    
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
    export type RESULT = _i_out._T_Key_Value_Pairs_To_Be_Sorted
}

export namespace _T_Relative_Range {
    
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
    export type RESULT = _i_out._T_Relative_Range
}

export namespace _T_Text_Edits {
    
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
    export type RESULT = _i_out._T_Text_Edits
}

// *** ALIASES FOR NESTED TYPES

export namespace Key_Value_Pairs_To_Be_Sorted {
    
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
    export type RESULT = _i_out._T_Key_Value_Pairs_To_Be_Sorted
}

export namespace Relative_Range {
    
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
    export type RESULT = _i_out._T_Relative_Range
}

export namespace Text_Edits {
    
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
    export type RESULT = _i_out._T_Text_Edits
}
