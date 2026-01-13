
import * as _pi from "pareto-core-interface"

import * as i_in from "./data_types/source"

export namespace Error_ {
    
    export type I = i_in.Error
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    $$_: Error_.I,
) => Error_.O

export { 
    Error_ as Error, 
}
