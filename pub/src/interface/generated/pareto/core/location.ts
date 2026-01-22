
import * as _pi from "pareto-core/dist/interface"

export namespace Location_ {
    
    export type file = string
    
    export type line = number
    
    export type column = number
    
}

export type Location_ = {
    readonly 'file': Location_.file
    readonly 'line': Location_.line
    readonly 'column': Location_.column
}

export { 
    Location_ as Location, 
}
