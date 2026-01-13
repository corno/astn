
import * as _pi from "pareto-core-interface"

import * as i_in from "./data_types/source"

export namespace Relative_Location_ {
    
    export type I = i_in.Relative_Location
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Relative_Location_ = (
    $$_: Relative_Location_.I,
) => Relative_Location_.O

export namespace Location_ {
    
    export type I = i_in.Location
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Location_ = (
    $$_: Location_.I,
) => Location_.O

export namespace Range_ {
    
    export type I = i_in.Range
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Range_ = (
    $$_: Range_.I,
) => Range_.O

export namespace Whitespace_ {
    
    export type I = i_in.Whitespace
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Whitespace_ = (
    $$_: Whitespace_.I,
) => Whitespace_.O

export namespace Trivia_ {
    
    export type I = i_in.Trivia
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Trivia_ = (
    $$_: Trivia_.I,
) => Trivia_.O

export namespace Delimited_String_ {
    
    export type I = i_in.Delimited_String
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Delimited_String_ = (
    $$_: Delimited_String_.I,
) => Delimited_String_.O

export namespace String_Type_ {
    
    export type I = i_in.String_Type
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type String_Type_ = (
    $$_: String_Type_.I,
) => String_Type_.O

export namespace Token_Type_ {
    
    export type I = i_in.Token_Type
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Token_Type_ = (
    $$_: Token_Type_.I,
) => Token_Type_.O

export namespace Annotated_Token_ {
    
    export type I = i_in.Annotated_Token
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Annotated_Token_ = (
    $$_: Annotated_Token_.I,
) => Annotated_Token_.O

export namespace Tokenizer_Result_ {
    
    export type I = i_in.Tokenizer_Result
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Tokenizer_Result_ = (
    $$_: Tokenizer_Result_.I,
) => Tokenizer_Result_.O

export { 
    Relative_Location_ as Relative_Location, 
    Location_ as Location, 
    Range_ as Range, 
    Whitespace_ as Whitespace, 
    Trivia_ as Trivia, 
    Delimited_String_ as Delimited_String, 
    String_Type_ as String_Type, 
    Token_Type_ as Token_Type, 
    Annotated_Token_ as Annotated_Token, 
    Tokenizer_Result_ as Tokenizer_Result, 
}
