import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"

// **** TYPES

export type _T_Document<G_Source> = _T_Value<G_Source>

export type _T_Value<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['array', _i_core._T_List<G_Source, _T_Value<G_Source>>]
    | readonly ['boolean', boolean]
    | readonly ['null', null]
    | readonly ['number', _i_core._T_State_Group<G_Source, 
        | readonly ['float', number]
        | readonly ['integer', number]
    >]
    | readonly ['object', _i_core._T_State_Group<G_Source, 
        | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
        | readonly ['key value array', _i_core._T_List<G_Source, {
            readonly 'key': string
            readonly 'value': _T_Value<G_Source>
        }>]
    >]
    | readonly ['string', string]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Document<G_Source> = _T_Document<G_Source>

export type Value<G_Source> = _T_Value<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Document {
}

export namespace _T_Value {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Value<G_Source>
        }
        export type array<G_Source> = _i_core._T_List<G_Source, _T_Value<G_Source>>
        export type _boolean<G_Source> = boolean
        export type _null<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type float<G_Source> = number
                export type integer<G_Source> = number
            }
            export type SG<G_Source> = 
                | readonly ['float', number]
                | readonly ['integer', number]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['float', number]
            | readonly ['integer', number]
        >
        
        export namespace _object {
            
            export namespace SG {
                
                export namespace dictionary {
                    
                    export namespace D {
                    }
                    export type D<G_Source> = _T_Value<G_Source>
                }
                export type dictionary<G_Source> = _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>
                
                export namespace key_value_array {
                    
                    export namespace L {
                        export type key<G_Source> = string
                        
                        export namespace value {
                        }
                        export type value<G_Source> = _T_Value<G_Source>
                    }
                    export type L<G_Source> = {
                        readonly 'key': string
                        readonly 'value': _T_Value<G_Source>
                    }
                }
                export type key_value_array<G_Source> = _i_core._T_List<G_Source, {
                    readonly 'key': string
                    readonly 'value': _T_Value<G_Source>
                }>
            }
            export type SG<G_Source> = 
                | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
                | readonly ['key value array', _i_core._T_List<G_Source, {
                    readonly 'key': string
                    readonly 'value': _T_Value<G_Source>
                }>]
        }
        export type _object<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
            | readonly ['key value array', _i_core._T_List<G_Source, {
                readonly 'key': string
                readonly 'value': _T_Value<G_Source>
            }>]
        >
        export type _string<G_Source> = string
    }
    export type SG<G_Source> = 
        | readonly ['array', _i_core._T_List<G_Source, _T_Value<G_Source>>]
        | readonly ['boolean', boolean]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['float', number]
            | readonly ['integer', number]
        >]
        | readonly ['object', _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
            | readonly ['key value array', _i_core._T_List<G_Source, {
                readonly 'key': string
                readonly 'value': _T_Value<G_Source>
            }>]
        >]
        | readonly ['string', string]
}

// *** ALIASES FOR NESTED TYPES

export namespace Document {
}

export namespace Value {
    
    export namespace SG {
        
        export namespace array {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Value<G_Source>
        }
        export type array<G_Source> = _i_core._T_List<G_Source, _T_Value<G_Source>>
        export type _boolean<G_Source> = boolean
        export type _null<G_Source> = null
        
        export namespace _number {
            
            export namespace SG {
                export type float<G_Source> = number
                export type integer<G_Source> = number
            }
            export type SG<G_Source> = 
                | readonly ['float', number]
                | readonly ['integer', number]
        }
        export type _number<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['float', number]
            | readonly ['integer', number]
        >
        
        export namespace _object {
            
            export namespace SG {
                
                export namespace dictionary {
                    
                    export namespace D {
                    }
                    export type D<G_Source> = _T_Value<G_Source>
                }
                export type dictionary<G_Source> = _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>
                
                export namespace key_value_array {
                    
                    export namespace L {
                        export type key<G_Source> = string
                        
                        export namespace value {
                        }
                        export type value<G_Source> = _T_Value<G_Source>
                    }
                    export type L<G_Source> = {
                        readonly 'key': string
                        readonly 'value': _T_Value<G_Source>
                    }
                }
                export type key_value_array<G_Source> = _i_core._T_List<G_Source, {
                    readonly 'key': string
                    readonly 'value': _T_Value<G_Source>
                }>
            }
            export type SG<G_Source> = 
                | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
                | readonly ['key value array', _i_core._T_List<G_Source, {
                    readonly 'key': string
                    readonly 'value': _T_Value<G_Source>
                }>]
        }
        export type _object<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
            | readonly ['key value array', _i_core._T_List<G_Source, {
                readonly 'key': string
                readonly 'value': _T_Value<G_Source>
            }>]
        >
        export type _string<G_Source> = string
    }
    export type SG<G_Source> = 
        | readonly ['array', _i_core._T_List<G_Source, _T_Value<G_Source>>]
        | readonly ['boolean', boolean]
        | readonly ['null', null]
        | readonly ['number', _i_core._T_State_Group<G_Source, 
            | readonly ['float', number]
            | readonly ['integer', number]
        >]
        | readonly ['object', _i_core._T_State_Group<G_Source, 
            | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
            | readonly ['key value array', _i_core._T_List<G_Source, {
                readonly 'key': string
                readonly 'value': _T_Value<G_Source>
            }>]
        >]
        | readonly ['string', string]
}
