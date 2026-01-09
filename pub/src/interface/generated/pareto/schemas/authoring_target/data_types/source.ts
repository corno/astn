import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Value = {
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['list', _i_core._T_List<null, _T_Value>]
        | readonly ['concise group', _i_core._T_List<null, _T_Value>]
        | readonly ['dictionary', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['verbose group', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['text', {
            readonly 'value': string
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['quote', null]
                | readonly ['backtick', null]
            >
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value]
        >]
        | readonly ['state', _i_core._T_State_Group<null, 
            | readonly ['missing data', null]
            | readonly ['set', {
                readonly 'state': string
                readonly 'value': _T_Value
            }]
        >]
    >
}

export type _T_Document = _T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value = _T_Value

export type Document = _T_Document

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace list {
                
                export namespace L {
                }
                export type L = _T_Value
            }
            export type list = _i_core._T_List<null, _T_Value>
            
            export namespace concise_group {
                
                export namespace L {
                }
                export type L = _T_Value
            }
            export type concise_group = _i_core._T_List<null, _T_Value>
            
            export namespace dictionary {
                
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
            export type dictionary = _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>
            
            export namespace verbose_group {
                
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
            export type verbose_group = _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>
            
            export namespace text {
                export type value = string
                
                export namespace delimiter {
                    
                    export namespace SG {
                        export type none = null
                        export type quote = null
                        export type backtick = null
                    }
                    export type SG = 
                        | readonly ['none', null]
                        | readonly ['quote', null]
                        | readonly ['backtick', null]
                }
                export type delimiter = _i_core._T_State_Group<null, 
                    | readonly ['none', null]
                    | readonly ['quote', null]
                    | readonly ['backtick', null]
                >
            }
            export type text = {
                readonly 'value': string
                readonly 'delimiter': _i_core._T_State_Group<null, 
                    | readonly ['none', null]
                    | readonly ['quote', null]
                    | readonly ['backtick', null]
                >
            }
            export type nothing = null
            
            export namespace optional {
                
                export namespace SG {
                    export type not_set = null
                    
                    export namespace _set {
                    }
                    export type _set = _T_Value
                }
                export type SG = 
                    | readonly ['not set', null]
                    | readonly ['set', _T_Value]
            }
            export type optional = _i_core._T_State_Group<null, 
                | readonly ['not set', null]
                | readonly ['set', _T_Value]
            >
            
            export namespace state {
                
                export namespace SG {
                    export type missing_data = null
                    
                    export namespace _set {
                        export type state = string
                        
                        export namespace value {
                        }
                        export type value = _T_Value
                    }
                    export type _set = {
                        readonly 'state': string
                        readonly 'value': _T_Value
                    }
                }
                export type SG = 
                    | readonly ['missing data', null]
                    | readonly ['set', {
                        readonly 'state': string
                        readonly 'value': _T_Value
                    }]
            }
            export type state = _i_core._T_State_Group<null, 
                | readonly ['missing data', null]
                | readonly ['set', {
                    readonly 'state': string
                    readonly 'value': _T_Value
                }]
            >
        }
        export type SG = 
            | readonly ['list', _i_core._T_List<null, _T_Value>]
            | readonly ['concise group', _i_core._T_List<null, _T_Value>]
            | readonly ['dictionary', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['verbose group', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['text', {
                readonly 'value': string
                readonly 'delimiter': _i_core._T_State_Group<null, 
                    | readonly ['none', null]
                    | readonly ['quote', null]
                    | readonly ['backtick', null]
                >
            }]
            | readonly ['nothing', null]
            | readonly ['optional', _i_core._T_State_Group<null, 
                | readonly ['not set', null]
                | readonly ['set', _T_Value]
            >]
            | readonly ['state', _i_core._T_State_Group<null, 
                | readonly ['missing data', null]
                | readonly ['set', {
                    readonly 'state': string
                    readonly 'value': _T_Value
                }]
            >]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['list', _i_core._T_List<null, _T_Value>]
        | readonly ['concise group', _i_core._T_List<null, _T_Value>]
        | readonly ['dictionary', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['verbose group', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['text', {
            readonly 'value': string
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['quote', null]
                | readonly ['backtick', null]
            >
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value]
        >]
        | readonly ['state', _i_core._T_State_Group<null, 
            | readonly ['missing data', null]
            | readonly ['set', {
                readonly 'state': string
                readonly 'value': _T_Value
            }]
        >]
    >
}

export namespace _T_Document {
}

// *** ALIASES FOR NESTED TYPES

export namespace Value {
    
    export namespace _type {
        
        export namespace SG {
            
            export namespace list {
                
                export namespace L {
                }
                export type L = _T_Value
            }
            export type list = _i_core._T_List<null, _T_Value>
            
            export namespace concise_group {
                
                export namespace L {
                }
                export type L = _T_Value
            }
            export type concise_group = _i_core._T_List<null, _T_Value>
            
            export namespace dictionary {
                
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
            export type dictionary = _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>
            
            export namespace verbose_group {
                
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
            export type verbose_group = _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>
            
            export namespace text {
                export type value = string
                
                export namespace delimiter {
                    
                    export namespace SG {
                        export type none = null
                        export type quote = null
                        export type backtick = null
                    }
                    export type SG = 
                        | readonly ['none', null]
                        | readonly ['quote', null]
                        | readonly ['backtick', null]
                }
                export type delimiter = _i_core._T_State_Group<null, 
                    | readonly ['none', null]
                    | readonly ['quote', null]
                    | readonly ['backtick', null]
                >
            }
            export type text = {
                readonly 'value': string
                readonly 'delimiter': _i_core._T_State_Group<null, 
                    | readonly ['none', null]
                    | readonly ['quote', null]
                    | readonly ['backtick', null]
                >
            }
            export type nothing = null
            
            export namespace optional {
                
                export namespace SG {
                    export type not_set = null
                    
                    export namespace _set {
                    }
                    export type _set = _T_Value
                }
                export type SG = 
                    | readonly ['not set', null]
                    | readonly ['set', _T_Value]
            }
            export type optional = _i_core._T_State_Group<null, 
                | readonly ['not set', null]
                | readonly ['set', _T_Value]
            >
            
            export namespace state {
                
                export namespace SG {
                    export type missing_data = null
                    
                    export namespace _set {
                        export type state = string
                        
                        export namespace value {
                        }
                        export type value = _T_Value
                    }
                    export type _set = {
                        readonly 'state': string
                        readonly 'value': _T_Value
                    }
                }
                export type SG = 
                    | readonly ['missing data', null]
                    | readonly ['set', {
                        readonly 'state': string
                        readonly 'value': _T_Value
                    }]
            }
            export type state = _i_core._T_State_Group<null, 
                | readonly ['missing data', null]
                | readonly ['set', {
                    readonly 'state': string
                    readonly 'value': _T_Value
                }]
            >
        }
        export type SG = 
            | readonly ['list', _i_core._T_List<null, _T_Value>]
            | readonly ['concise group', _i_core._T_List<null, _T_Value>]
            | readonly ['dictionary', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['verbose group', _i_core._T_List<null, {
                readonly 'key': string
                readonly 'value': _T_Value
            }>]
            | readonly ['text', {
                readonly 'value': string
                readonly 'delimiter': _i_core._T_State_Group<null, 
                    | readonly ['none', null]
                    | readonly ['quote', null]
                    | readonly ['backtick', null]
                >
            }]
            | readonly ['nothing', null]
            | readonly ['optional', _i_core._T_State_Group<null, 
                | readonly ['not set', null]
                | readonly ['set', _T_Value]
            >]
            | readonly ['state', _i_core._T_State_Group<null, 
                | readonly ['missing data', null]
                | readonly ['set', {
                    readonly 'state': string
                    readonly 'value': _T_Value
                }]
            >]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['list', _i_core._T_List<null, _T_Value>]
        | readonly ['concise group', _i_core._T_List<null, _T_Value>]
        | readonly ['dictionary', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['verbose group', _i_core._T_List<null, {
            readonly 'key': string
            readonly 'value': _T_Value
        }>]
        | readonly ['text', {
            readonly 'value': string
            readonly 'delimiter': _i_core._T_State_Group<null, 
                | readonly ['none', null]
                | readonly ['quote', null]
                | readonly ['backtick', null]
            >
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _i_core._T_State_Group<null, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value]
        >]
        | readonly ['state', _i_core._T_State_Group<null, 
            | readonly ['missing data', null]
            | readonly ['set', {
                readonly 'state': string
                readonly 'value': _T_Value
            }]
        >]
    >
}

export namespace Document {
}
