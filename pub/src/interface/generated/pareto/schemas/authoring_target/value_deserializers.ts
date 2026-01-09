import * as _pi from 'pareto-core-interface'

import * as _i_out from "../../core/astn_target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Value_Deserializers = {
    readonly 'default number': (
        $$_: string,
        $$_p: null,
    ) => number
    readonly 'boolean': (
        $$_: string,
        $$_p: null,
    ) => boolean
    readonly 'custom numbers': {
        readonly 'Position': (
            $$_: string,
            $$_p: null,
        ) => number
    }
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Deserializers = _T_Value_Deserializers

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value_Deserializers {
    
    export namespace default_number {
        export type CONTEXT = string
        
        export namespace PARAMS {
        }
        export type RESULT = number
    }
    export type default_number = (
        $$_: string,
        $$_p: null,
    ) => number
    
    export namespace _boolean {
        export type CONTEXT = string
        
        export namespace PARAMS {
        }
        export type RESULT = boolean
    }
    export type _boolean = (
        $$_: string,
        $$_p: null,
    ) => boolean
    
    export namespace custom_numbers {
        
        export namespace Position {
            export type CONTEXT = string
            
            export namespace PARAMS {
            }
            export type RESULT = number
        }
        export type Position = (
            $$_: string,
            $$_p: null,
        ) => number
    }
    export type custom_numbers = {
        readonly 'Position': (
            $$_: string,
            $$_p: null,
        ) => number
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Value_Deserializers {
    
    export namespace default_number {
        export type CONTEXT = string
        
        export namespace PARAMS {
        }
        export type RESULT = number
    }
    export type default_number = (
        $$_: string,
        $$_p: null,
    ) => number
    
    export namespace _boolean {
        export type CONTEXT = string
        
        export namespace PARAMS {
        }
        export type RESULT = boolean
    }
    export type _boolean = (
        $$_: string,
        $$_p: null,
    ) => boolean
    
    export namespace custom_numbers {
        
        export namespace Position {
            export type CONTEXT = string
            
            export namespace PARAMS {
            }
            export type RESULT = number
        }
        export type Position = (
            $$_: string,
            $$_p: null,
        ) => number
    }
    export type custom_numbers = {
        readonly 'Position': (
            $$_: string,
            $$_p: null,
        ) => number
    }
}
