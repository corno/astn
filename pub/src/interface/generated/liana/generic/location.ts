
import * as _pi from "pareto-core/dist/interface"

export namespace Location_ {
    
    export type document_resource_identifier = string
    
    export type line = number
    
    export type column = number
    
}

export type Location_ = {
    readonly 'document resource identifier': Location_.document_resource_identifier
    readonly 'line': Location_.line
    readonly 'column': Location_.column
}

export { 
    Location_ as Location, 
}
