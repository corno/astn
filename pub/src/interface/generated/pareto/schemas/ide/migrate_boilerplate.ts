import * as _pi from 'pareto-core-interface'

import * as _i_in from "./data_types/source"
import * as _i_out from "./data_types/target"

// **** TYPES

export type _T_Key_Value_Pairs_To_Be_Sorted = (
    $$_: _i_in._T_Key_Value_Pairs_To_Be_Sorted,
    $$_p: null,
) => _i_out._T_Key_Value_Pairs_To_Be_Sorted

export type _T_Relative_Range = (
    $$_: _i_in._T_Relative_Range,
    $$_p: null,
) => _i_out._T_Relative_Range

export type _T_Text_Edits = (
    $$_: _i_in._T_Text_Edits,
    $$_p: null,
) => _i_out._T_Text_Edits

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
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Key_Value_Pairs_To_Be_Sorted
}

export namespace _T_Relative_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Range
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Relative_Range
}

export namespace _T_Text_Edits {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edits
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Text_Edits
}

// *** ALIASES FOR NESTED TYPES

export namespace Key_Value_Pairs_To_Be_Sorted {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs_To_Be_Sorted
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Key_Value_Pairs_To_Be_Sorted
}

export namespace Relative_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Range
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Relative_Range
}

export namespace Text_Edits {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edits
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Text_Edits
}
