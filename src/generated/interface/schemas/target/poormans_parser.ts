import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"

// **** TYPES

export type _T_Document<G_Source> = _T_Value<G_Source>

export type _T_Value<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['concise group', _i_core._T_List<G_Source, _T_Value<G_Source>>]
    | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
    | readonly ['list', _i_core._T_List<G_Source, _T_Value<G_Source>>]
    | readonly ['nothing', null]
    | readonly ['optional', _i_core._T_State_Group<G_Source, 
        | readonly ['not set', null]
        | readonly ['set', _T_Value<G_Source>]
    >]
    | readonly ['state', {
        readonly 'state': string
        readonly 'value': _T_Value<G_Source>
    }]
    | readonly ['text', {
        readonly 'delimiter': _i_core._T_State_Group<G_Source, 
            | readonly ['backtick', null]
            | readonly ['none', null]
            | readonly ['quote', null]
        >
        readonly 'value': string
    }]
    | readonly ['verbose group', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Document<G_Source> = _T_Document<G_Source>

export type Value<G_Source> = _T_Value<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Document {
}

export namespace _T_Value {
    
    export namespace SG {
        
        export namespace concise_group {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Value<G_Source>
        }
        export type concise_group<G_Source> = _i_core._T_List<G_Source, _T_Value<G_Source>>
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Value<G_Source>
        }
        export type dictionary<G_Source> = _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>
        
        export namespace list {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Value<G_Source>
        }
        export type list<G_Source> = _i_core._T_List<G_Source, _T_Value<G_Source>>
        export type nothing<G_Source> = null
        
        export namespace optional {
            
            export namespace SG {
                export type not_set<G_Source> = null
                
                export namespace _set {
                }
                export type _set<G_Source> = _T_Value<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['not set', null]
                | readonly ['set', _T_Value<G_Source>]
        }
        export type optional<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value<G_Source>]
        >
        
        export namespace state {
            export type state<G_Source> = string
            
            export namespace value {
            }
            export type value<G_Source> = _T_Value<G_Source>
        }
        export type state<G_Source> = {
            readonly 'state': string
            readonly 'value': _T_Value<G_Source>
        }
        
        export namespace text {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick<G_Source> = null
                    export type none<G_Source> = null
                    export type quote<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['backtick', null]
                    | readonly ['none', null]
                    | readonly ['quote', null]
            }
            export type delimiter<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['none', null]
                | readonly ['quote', null]
            >
            export type value<G_Source> = string
        }
        export type text<G_Source> = {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['none', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace verbose_group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Value<G_Source>
        }
        export type verbose_group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>
    }
    export type SG<G_Source> = 
        | readonly ['concise group', _i_core._T_List<G_Source, _T_Value<G_Source>>]
        | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
        | readonly ['list', _i_core._T_List<G_Source, _T_Value<G_Source>>]
        | readonly ['nothing', null]
        | readonly ['optional', _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value<G_Source>]
        >]
        | readonly ['state', {
            readonly 'state': string
            readonly 'value': _T_Value<G_Source>
        }]
        | readonly ['text', {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['none', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['verbose group', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
}

// *** ALIASES FOR NESTED TYPES

export namespace Document {
}

export namespace Value {
    
    export namespace SG {
        
        export namespace concise_group {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Value<G_Source>
        }
        export type concise_group<G_Source> = _i_core._T_List<G_Source, _T_Value<G_Source>>
        
        export namespace dictionary {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Value<G_Source>
        }
        export type dictionary<G_Source> = _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>
        
        export namespace list {
            
            export namespace L {
            }
            export type L<G_Source> = _T_Value<G_Source>
        }
        export type list<G_Source> = _i_core._T_List<G_Source, _T_Value<G_Source>>
        export type nothing<G_Source> = null
        
        export namespace optional {
            
            export namespace SG {
                export type not_set<G_Source> = null
                
                export namespace _set {
                }
                export type _set<G_Source> = _T_Value<G_Source>
            }
            export type SG<G_Source> = 
                | readonly ['not set', null]
                | readonly ['set', _T_Value<G_Source>]
        }
        export type optional<G_Source> = _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value<G_Source>]
        >
        
        export namespace state {
            export type state<G_Source> = string
            
            export namespace value {
            }
            export type value<G_Source> = _T_Value<G_Source>
        }
        export type state<G_Source> = {
            readonly 'state': string
            readonly 'value': _T_Value<G_Source>
        }
        
        export namespace text {
            
            export namespace delimiter {
                
                export namespace SG {
                    export type backtick<G_Source> = null
                    export type none<G_Source> = null
                    export type quote<G_Source> = null
                }
                export type SG<G_Source> = 
                    | readonly ['backtick', null]
                    | readonly ['none', null]
                    | readonly ['quote', null]
            }
            export type delimiter<G_Source> = _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['none', null]
                | readonly ['quote', null]
            >
            export type value<G_Source> = string
        }
        export type text<G_Source> = {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['none', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }
        
        export namespace verbose_group {
            
            export namespace D {
            }
            export type D<G_Source> = _T_Value<G_Source>
        }
        export type verbose_group<G_Source> = _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>
    }
    export type SG<G_Source> = 
        | readonly ['concise group', _i_core._T_List<G_Source, _T_Value<G_Source>>]
        | readonly ['dictionary', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
        | readonly ['list', _i_core._T_List<G_Source, _T_Value<G_Source>>]
        | readonly ['nothing', null]
        | readonly ['optional', _i_core._T_State_Group<G_Source, 
            | readonly ['not set', null]
            | readonly ['set', _T_Value<G_Source>]
        >]
        | readonly ['state', {
            readonly 'state': string
            readonly 'value': _T_Value<G_Source>
        }]
        | readonly ['text', {
            readonly 'delimiter': _i_core._T_State_Group<G_Source, 
                | readonly ['backtick', null]
                | readonly ['none', null]
                | readonly ['quote', null]
            >
            readonly 'value': string
        }]
        | readonly ['verbose group', _i_core._T_Dictionary<G_Source, _T_Value<G_Source>>]
}
