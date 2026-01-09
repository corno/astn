import * as _pi from 'pareto-core-interface'

import * as _i_out from "../../core/astn_target"
import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Relative_Location = (
    $$_: _i_in._T_Relative_Location,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Location = (
    $$_: _i_in._T_Location,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Range = (
    $$_: _i_in._T_Range,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Whitespace = (
    $$_: _i_in._T_Whitespace,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Trivia = (
    $$_: _i_in._T_Trivia,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Delimited_String = (
    $$_: _i_in._T_Delimited_String,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_String_Type = (
    $$_: _i_in._T_String_Type,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Token_Type = (
    $$_: _i_in._T_Token_Type,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Annotated_Token = (
    $$_: _i_in._T_Annotated_Token,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Tokenizer_Result = (
    $$_: _i_in._T_Tokenizer_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Relative_Location = _T_Relative_Location

export type Location = _T_Location

export type Range = _T_Range

export type Whitespace = _T_Whitespace

export type Trivia = _T_Trivia

export type Delimited_String = _T_Delimited_String

export type String_Type = _T_String_Type

export type Token_Type = _T_Token_Type

export type Annotated_Token = _T_Annotated_Token

export type Tokenizer_Result = _T_Tokenizer_Result

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Location
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Location
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Whitespace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Trivia {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Trivia
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Delimited_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Delimited_String
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_String_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Token_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Token_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Annotated_Token {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Annotated_Token
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Tokenizer_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tokenizer_Result
    
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

export namespace Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Location
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Location
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Whitespace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Trivia {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Trivia
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Delimited_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Delimited_String
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace String_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Token_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Token_Type
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Annotated_Token {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Annotated_Token
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Tokenizer_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tokenizer_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
