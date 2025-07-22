import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"
import * as _i_imports_ast from "../ast/poormans_parser"

// **** TYPES

export type _T_Text_Edits<G_Source> = _i_core._T_List<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['delete', {
        readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
    }]
    | readonly ['insert', {
        readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
        readonly 'text': string
    }]
    | readonly ['replace', {
        readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
        readonly 'text': string
    }]
>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Text_Edits<G_Source> = _T_Text_Edits<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Text_Edits {
    
    export namespace L {
        
        export namespace SG {
            
            export namespace _delete {
                
                export namespace range {
                }
                export type range<G_Source> = _i_imports_ast._T_Relative_Range<G_Source>
            }
            export type _delete<G_Source> = {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
            }
            
            export namespace insert {
                
                export namespace location {
                }
                export type location<G_Source> = _i_imports_ast._T_Relative_Location<G_Source>
                export type text<G_Source> = string
            }
            export type insert<G_Source> = {
                readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
                readonly 'text': string
            }
            
            export namespace replace {
                
                export namespace range {
                }
                export type range<G_Source> = _i_imports_ast._T_Relative_Range<G_Source>
                export type text<G_Source> = string
            }
            export type replace<G_Source> = {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
                readonly 'text': string
            }
        }
        export type SG<G_Source> = 
            | readonly ['delete', {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
            }]
            | readonly ['insert', {
                readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
                readonly 'text': string
            }]
            | readonly ['replace', {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
                readonly 'text': string
            }]
    }
    export type L<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['delete', {
            readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
        }]
        | readonly ['insert', {
            readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
            readonly 'text': string
        }]
        | readonly ['replace', {
            readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
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
                export type range<G_Source> = _i_imports_ast._T_Relative_Range<G_Source>
            }
            export type _delete<G_Source> = {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
            }
            
            export namespace insert {
                
                export namespace location {
                }
                export type location<G_Source> = _i_imports_ast._T_Relative_Location<G_Source>
                export type text<G_Source> = string
            }
            export type insert<G_Source> = {
                readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
                readonly 'text': string
            }
            
            export namespace replace {
                
                export namespace range {
                }
                export type range<G_Source> = _i_imports_ast._T_Relative_Range<G_Source>
                export type text<G_Source> = string
            }
            export type replace<G_Source> = {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
                readonly 'text': string
            }
        }
        export type SG<G_Source> = 
            | readonly ['delete', {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
            }]
            | readonly ['insert', {
                readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
                readonly 'text': string
            }]
            | readonly ['replace', {
                readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
                readonly 'text': string
            }]
    }
    export type L<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['delete', {
            readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
        }]
        | readonly ['insert', {
            readonly 'location': _i_imports_ast._T_Relative_Location<G_Source>
            readonly 'text': string
        }]
        | readonly ['replace', {
            readonly 'range': _i_imports_ast._T_Relative_Range<G_Source>
            readonly 'text': string
        }]
    >
}
