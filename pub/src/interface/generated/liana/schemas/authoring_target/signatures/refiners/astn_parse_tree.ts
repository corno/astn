
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"

import * as i_out from "../../data"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Document_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
) => Document_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
) => Value_.O

export namespace ID_Value_Pairs_ {
    
    export type I = i_in.Value
    
    export type O = i_out.ID_Value_Pairs
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type ID_Value_Pairs_ = (
    context: ID_Value_Pairs_.I,
    abort: _pi.Abort<ID_Value_Pairs_.E>,
) => ID_Value_Pairs_.O

export namespace Items_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Items
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Items_ = (
    context: Items_.I,
    abort: _pi.Abort<Items_.E>,
) => Items_.O

export { 
    Document_ as Document, 
    Value_ as Value, 
    ID_Value_Pairs_ as ID_Value_Pairs, 
    Items_ as Items, 
}
