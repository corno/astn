
import * as _pi from "pareto-core-interface"

import * as i_out from "./data_types/target"

export namespace Structural_Token_ {
    
    export type I = string
    
    export type O = i_out.Structural_Token
    
    export namespace P {
        
    }
    
}

export type Structural_Token_ = (
    $$_: Structural_Token_.I,
) => Structural_Token_.O

export namespace String_ {
    
    export type I = string
    
    export type O = i_out.String
    
    export namespace P {
        
    }
    
}

export type String_ = (
    $$_: String_.I,
) => String_.O

export namespace Key_Value_Pairs_ {
    
    export type I = string
    
    export type O = i_out.Key_Value_Pairs
    
    export namespace P {
        
    }
    
}

export type Key_Value_Pairs_ = (
    $$_: Key_Value_Pairs_.I,
) => Key_Value_Pairs_.O

export namespace Elements_ {
    
    export type I = string
    
    export type O = i_out.Elements
    
    export namespace P {
        
    }
    
}

export type Elements_ = (
    $$_: Elements_.I,
) => Elements_.O

export namespace Concrete_Value_ {
    
    export type I = string
    
    export type O = i_out.Concrete_Value
    
    export namespace P {
        
    }
    
}

export type Concrete_Value_ = (
    $$_: Concrete_Value_.I,
) => Concrete_Value_.O

export namespace Value_ {
    
    export type I = string
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    $$_: Value_.I,
) => Value_.O

export namespace Content_ {
    
    export type I = string
    
    export type O = i_out.Content
    
    export namespace P {
        
    }
    
}

export type Content_ = (
    $$_: Content_.I,
) => Content_.O

export namespace Document_ {
    
    export type I = string
    
    export type O = i_out.Document
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    $$_: Document_.I,
) => Document_.O

export { 
    Structural_Token_ as Structural_Token, 
    String_ as String, 
    Key_Value_Pairs_ as Key_Value_Pairs, 
    Elements_ as Elements, 
    Concrete_Value_ as Concrete_Value, 
    Value_ as Value, 
    Content_ as Content, 
    Document_ as Document, 
}
