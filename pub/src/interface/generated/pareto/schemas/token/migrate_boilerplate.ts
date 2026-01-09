import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Relative_Location = (
    $$_: _i_in._T_Relative_Location,
    $$_p: null,
) => _i_out._T_Relative_Location

export type _T_Location = (
    $$_: _i_in._T_Location,
    $$_p: null,
) => _i_out._T_Location

export type _T_Range = (
    $$_: _i_in._T_Range,
    $$_p: null,
) => _i_out._T_Range

export type _T_Whitespace = (
    $$_: _i_in._T_Whitespace,
    $$_p: null,
) => _i_out._T_Whitespace

export type _T_Trivia = (
    $$_: _i_in._T_Trivia,
    $$_p: null,
) => _i_out._T_Trivia

export type _T_Delimited_String = (
    $$_: _i_in._T_Delimited_String,
    $$_p: null,
) => _i_out._T_Delimited_String

export type _T_String_Type = (
    $$_: _i_in._T_String_Type,
    $$_p: null,
) => _i_out._T_String_Type

export type _T_Token_Type = (
    $$_: _i_in._T_Token_Type,
    $$_p: null,
) => _i_out._T_Token_Type

export type _T_Annotated_Token = (
    $$_: _i_in._T_Annotated_Token,
    $$_p: null,
) => _i_out._T_Annotated_Token

export type _T_Tokenizer_Result = (
    $$_: _i_in._T_Tokenizer_Result,
    $$_p: null,
) => _i_out._T_Tokenizer_Result

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
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Relative_Location
}

export namespace _T_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Location
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Location
}

export namespace _T_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Range
}

export namespace _T_Whitespace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Whitespace
}

export namespace _T_Trivia {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Trivia
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Trivia
}

export namespace _T_Delimited_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Delimited_String
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Delimited_String
}

export namespace _T_String_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_String_Type
}

export namespace _T_Token_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Token_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Token_Type
}

export namespace _T_Annotated_Token {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Annotated_Token
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Annotated_Token
}

export namespace _T_Tokenizer_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tokenizer_Result
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Tokenizer_Result
}

// *** ALIASES FOR NESTED TYPES

export namespace Relative_Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Relative_Location
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Relative_Location
}

export namespace Location {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Location
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Location
}

export namespace Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Range
}

export namespace Whitespace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Whitespace
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Whitespace
}

export namespace Trivia {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Trivia
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Trivia
}

export namespace Delimited_String {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Delimited_String
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Delimited_String
}

export namespace String_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_String_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_String_Type
}

export namespace Token_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Token_Type
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Token_Type
}

export namespace Annotated_Token {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Annotated_Token
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Annotated_Token
}

export namespace Tokenizer_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Tokenizer_Result
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Tokenizer_Result
}
