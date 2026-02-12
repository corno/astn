
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "astn-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"

import * as i_out from "./data"

export namespace Document_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Document
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Document_ = (
    context: Document_.I,
    abort: _pi.Abort<Document_.E>,
    parameters: {
        readonly 'document resource identifier': Document_.P.document_resource_identifier
        readonly 'tab size': Document_.P.tab_size
    },
) => Document_.O

export namespace Value_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    parameters: {
        readonly 'document resource identifier': Value_.P.document_resource_identifier
        readonly 'tab size': Value_.P.tab_size
    },
) => Value_.O

export { 
    Document_ as Document, 
    Value_ as Value, 
}
