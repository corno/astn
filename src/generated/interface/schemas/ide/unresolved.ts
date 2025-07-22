import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unresolved"
import * as _i_imports_ast from "../ast/unresolved"

// **** TYPES

export type _T_Text_Edits = _i_core._T_List<null, _i_core._T_State_Group<null, 
    | readonly ['delete', {
        readonly 'range': _i_imports_ast._T_Relative_Range
    }]
    | readonly ['insert', {
        readonly 'location': _i_imports_ast._T_Relative_Location
        readonly 'text': string
    }]
    | readonly ['replace', {
        readonly 'range': _i_imports_ast._T_Relative_Range
        readonly 'text': string
    }]
>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Text_Edits = _T_Text_Edits

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Text_Edits {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _delete {
                
                export namespace range {
                }
                export type range = _i_imports_ast._T_Relative_Range
            }
            export type _delete = {
                readonly 'range': _i_imports_ast._T_Relative_Range
            }
            
            export namespace insert {
                
                export namespace location {
                }
                export type location = _i_imports_ast._T_Relative_Location
                export type text = string
            }
            export type insert = {
                readonly 'location': _i_imports_ast._T_Relative_Location
                readonly 'text': string
            }
            
            export namespace replace {
                
                export namespace range {
                }
                export type range = _i_imports_ast._T_Relative_Range
                export type text = string
            }
            export type replace = {
                readonly 'range': _i_imports_ast._T_Relative_Range
                readonly 'text': string
            }
        }
        export type SG = 
            | readonly ['delete', {
                readonly 'range': _i_imports_ast._T_Relative_Range
            }]
            | readonly ['insert', {
                readonly 'location': _i_imports_ast._T_Relative_Location
                readonly 'text': string
            }]
            | readonly ['replace', {
                readonly 'range': _i_imports_ast._T_Relative_Range
                readonly 'text': string
            }]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['delete', {
            readonly 'range': _i_imports_ast._T_Relative_Range
        }]
        | readonly ['insert', {
            readonly 'location': _i_imports_ast._T_Relative_Location
            readonly 'text': string
        }]
        | readonly ['replace', {
            readonly 'range': _i_imports_ast._T_Relative_Range
            readonly 'text': string
        }]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Text_Edits {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _delete {
                
                export namespace range {
                }
                export type range = _i_imports_ast._T_Relative_Range
            }
            export type _delete = {
                readonly 'range': _i_imports_ast._T_Relative_Range
            }
            
            export namespace insert {
                
                export namespace location {
                }
                export type location = _i_imports_ast._T_Relative_Location
                export type text = string
            }
            export type insert = {
                readonly 'location': _i_imports_ast._T_Relative_Location
                readonly 'text': string
            }
            
            export namespace replace {
                
                export namespace range {
                }
                export type range = _i_imports_ast._T_Relative_Range
                export type text = string
            }
            export type replace = {
                readonly 'range': _i_imports_ast._T_Relative_Range
                readonly 'text': string
            }
        }
        export type SG = 
            | readonly ['delete', {
                readonly 'range': _i_imports_ast._T_Relative_Range
            }]
            | readonly ['insert', {
                readonly 'location': _i_imports_ast._T_Relative_Location
                readonly 'text': string
            }]
            | readonly ['replace', {
                readonly 'range': _i_imports_ast._T_Relative_Range
                readonly 'text': string
            }]
    }
    export type L = _i_core._T_State_Group<null, 
        | readonly ['delete', {
            readonly 'range': _i_imports_ast._T_Relative_Range
        }]
        | readonly ['insert', {
            readonly 'location': _i_imports_ast._T_Relative_Location
            readonly 'text': string
        }]
        | readonly ['replace', {
            readonly 'range': _i_imports_ast._T_Relative_Range
            readonly 'text': string
        }]
    >
}
