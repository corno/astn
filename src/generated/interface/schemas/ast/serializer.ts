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

export type _T_s_Document = (
    $$_: _i_in._T_Document,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Elements = (
    $$_: _i_in._T_Elements,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Key_Value_Pairs = (
    $$_: _i_in._T_Key_Value_Pairs,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Location = (
    $$_: _i_in._T_Location,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Range = (
    $$_: _i_in._T_Range,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Relative_Location = (
    $$_: _i_in._T_Relative_Location,
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

export type _T_s_String = (
    $$_: _i_in._T_String,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_String_Type = (
    $$_: _i_in._T_String_Type,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Structural_Token = (
    $$_: _i_in._T_Structural_Token,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Trivia = (
    $$_: _i_in._T_Trivia,
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

export type _T_s_Whitespace = (
    $$_: _i_in._T_Whitespace,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Document = _T_s_Document

export type s_Elements = _T_s_Elements

export type s_Key_Value_Pairs = _T_s_Key_Value_Pairs

export type s_Location = _T_s_Location

export type s_Range = _T_s_Range

export type s_Relative_Location = _T_s_Relative_Location

export type s_Relative_Range = _T_s_Relative_Range

export type s_String = _T_s_String

export type s_String_Type = _T_s_String_Type

export type s_Structural_Token = _T_s_Structural_Token

export type s_Trivia = _T_s_Trivia

export type s_Value = _T_s_Value

export type s_Whitespace = _T_s_Whitespace

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

export namespace _T_s_Elements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Elements
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Key_Value_Pairs {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Location
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Location
    
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

export namespace _T_s_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_String_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Structural_Token {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Structural_Token
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Trivia {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Trivia
    
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

export namespace _T_s_Whitespace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace
    
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

export namespace s_Elements {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Elements
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Key_Value_Pairs {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Key_Value_Pairs
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Location
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Location
    
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

export namespace s_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_String_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Structural_Token {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Structural_Token
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Trivia {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Trivia
    
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

export namespace s_Whitespace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
