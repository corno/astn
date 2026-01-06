import * as _et from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Value = _i_core._T_State_Group<null, 
    | readonly ['array', _i_core._T_List<null, _T_Value>]
    | readonly ['object', _i_core._T_State_Group<null, 
        | readonly ['key value array', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
    >]
    | readonly ['number', _i_core._T_State_Group<null, 
        | readonly ['integer', number]
        | readonly ['float', number]
    >]
    | readonly ['string', string]
    | readonly ['boolean', boolean]
    | readonly ['null', null]
>

export type _T_Document = _T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value = _T_Value

export type Document = _T_Document

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L = _T_Value
        }
        export type array = _i_core._T_List<null, _T_Value>
        
        export namespace _object {
            
            export namespace SG {
                
                export namespace key_value_array {
                    
                    export namespace L {
                        export type key = string
                        
                        export namespace value {
                        }
                        export type value = _T_Value
                    }
                    export type L = {
                        readonly 'key': string
                        readonly 'value': _T_Value
                    }
                }
                export type key_value_array = _i_core._T_List<null, {
                    readonly 'key': string
                    readonly 'value': _T_Value
                }>
                
                export namespace dictionary {
                    
                    export namespace D {
                    }
                    export type D = _T_Value
                }
                export type dictionary = _i_core._T_Dictionary<null, _T_Value>
            }
            export type SG = 
                | readonly ['key value array', _i_core._T_List<null, {
                    readonly 'key': string
                    readonly 'value': _T_Value
                }>]
                | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
        }
        export type _object = _i_core._T_State_Group<null, 
            | readonly ['key value array', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
        >
        
        export namespace _number {
            
            export namespace SG {
                export type integer = number
                export type float = number
            }
            export type SG = 
                | readonly ['integer', number]
                | readonly ['float', number]
        }
        export type _number = _i_core._T_State_Group<null, 
            | readonly ['integer', number]
            | readonly ['float', number]
        >
        export type _string = string
        export type _boolean = boolean
        export type _null = null
    }
    export type SG = 
        | readonly ['array', _i_core._T_List<null, _T_Value>]
        | readonly ['object', _i_core._T_State_Group<null, 
            | readonly ['key value array', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
        >]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['integer', number]
            | readonly ['float', number]
        >]
        | readonly ['string', string]
        | readonly ['boolean', boolean]
        | readonly ['null', null]
}

export namespace _T_Document {
}

// *** ALIASES FOR NESTED TYPES

export namespace Value {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L = _T_Value
        }
        export type array = _i_core._T_List<null, _T_Value>
        
        export namespace _object {
            
            export namespace SG {
                
                export namespace key_value_array {
                    
                    export namespace L {
                        export type key = string
                        
                        export namespace value {
                        }
                        export type value = _T_Value
                    }
                    export type L = {
                        readonly 'key': string
                        readonly 'value': _T_Value
                    }
                }
                export type key_value_array = _i_core._T_List<null, {
                    readonly 'key': string
                    readonly 'value': _T_Value
                }>
                
                export namespace dictionary {
                    
                    export namespace D {
                    }
                    export type D = _T_Value
                }
                export type dictionary = _i_core._T_Dictionary<null, _T_Value>
            }
            export type SG = 
                | readonly ['key value array', _i_core._T_List<null, {
                    readonly 'key': string
                    readonly 'value': _T_Value
                }>]
                | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
        }
        export type _object = _i_core._T_State_Group<null, 
            | readonly ['key value array', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
        >
        
        export namespace _number {
            
            export namespace SG {
                export type integer = number
                export type float = number
            }
            export type SG = 
                | readonly ['integer', number]
                | readonly ['float', number]
        }
        export type _number = _i_core._T_State_Group<null, 
            | readonly ['integer', number]
            | readonly ['float', number]
        >
        export type _string = string
        export type _boolean = boolean
        export type _null = null
    }
    export type SG = 
        | readonly ['array', _i_core._T_List<null, _T_Value>]
        | readonly ['object', _i_core._T_State_Group<null, 
            | readonly ['key value array', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['dictionary', _i_core._T_Dictionary<null, _T_Value>]
        >]
        | readonly ['number', _i_core._T_State_Group<null, 
            | readonly ['integer', number]
            | readonly ['float', number]
        >]
        | readonly ['string', string]
        | readonly ['boolean', boolean]
        | readonly ['null', null]
}

export namespace Document {
}
