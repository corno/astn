
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "../../data"

import * as i_in from "../../data"

export namespace Document_ {
    
    export type I = i_in.Document
    
    export type O = i_out.Document
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
) => Document_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
) => Value_.O

export namespace Token_Trivia_ {
    
    export type I = i_in.Token_Trivia
    
    export type O = i_out.Token_Trivia
    
    export namespace P {
        
    }
    
}

export type Token_Trivia_ = (
    context: Token_Trivia_.I,
) => Token_Trivia_.O

export namespace ID_Value_Pairs_ {
    
    export type I = i_in.ID_Value_Pairs
    
    export type O = i_out.ID_Value_Pairs
    
    export namespace P {
        
    }
    
}

export type ID_Value_Pairs_ = (
    context: ID_Value_Pairs_.I,
) => ID_Value_Pairs_.O

export namespace Items_ {
    
    export type I = i_in.Items
    
    export type O = i_out.Items
    
    export namespace P {
        
    }
    
}

export type Items_ = (
    context: Items_.I,
) => Items_.O

export { 
    Document_ as Document, 
    Value_ as Value, 
    Token_Trivia_ as Token_Trivia, 
    ID_Value_Pairs_ as ID_Value_Pairs, 
    Items_ as Items, 
}
