
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

export namespace Value_ {
    
    export type I = string
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
) => Value_.O

export namespace Document_ {
    
    export type I = string
    
    export type O = i_out.Document
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
) => Document_.O

export { 
    Value_ as Value, 
    Document_ as Document, 
}
