
import * as _pi from "pareto-core-interface"

import * as i_out from "./data_types/target"

export namespace Error_ {
    
    export type I = string
    
    export type O = i_out.Error
    
    export namespace P {
        
    }
    
}

export type Error_ = (
    $$_: Error_.I,
) => Error_.O

export { 
    Error_ as Error, 
}
