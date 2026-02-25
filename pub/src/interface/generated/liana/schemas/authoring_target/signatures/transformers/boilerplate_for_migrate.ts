
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
    ID_Value_Pairs_ as ID_Value_Pairs, 
    Items_ as Items, 
}
