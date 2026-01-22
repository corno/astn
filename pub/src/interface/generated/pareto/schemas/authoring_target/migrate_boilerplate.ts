
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    $$_: Value_.I,
) => Value_.O

export namespace Document_ {
    
    export type I = i_in.Document
    
    export type O = i_out.Document
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    $$_: Document_.I,
) => Document_.O

export { 
    Value_ as Value, 
    Document_ as Document, 
}
