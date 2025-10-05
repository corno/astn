import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Value_Serializers = {
    readonly 'boolean': (
        $$_: boolean,
        $$_p: null,
    ) => string
    readonly 'custom numbers': {
        readonly 'Position': (
            $$_: number,
            $$_p: null,
        ) => string
    }
    readonly 'default number': (
        $$_: number,
        $$_p: null,
    ) => string
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
        
        export namespace Position {
            export type CONTEXT = number
            
            export namespace PARAMS {
            }
            export type RESULT = string
        }
        export type Position = (
            $$_: number,
            $$_p: null,
        ) => string
    }
    export type custom_numbers = {
        readonly 'Position': (
            $$_: number,
            $$_p: null,
        ) => string
    }
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

// *** ALIASES FOR NESTED TYPES

export namespace Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
        
        export namespace Position {
            export type CONTEXT = number
            
            export namespace PARAMS {
            }
            export type RESULT = string
        }
        export type Position = (
            $$_: number,
            $$_p: null,
        ) => string
    }
    export type custom_numbers = {
        readonly 'Position': (
            $$_: number,
            $$_p: null,
        ) => string
    }
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}
