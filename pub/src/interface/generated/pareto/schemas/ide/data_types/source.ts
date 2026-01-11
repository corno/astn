import * as _pi from "pareto-core-interface"
    
    import * as _i_core from "../../../core/resolved"
    import * as _i_imports_token from "../../token/data_types/source"
    
    // **** TYPES
    
    export type _T_Relative_Range = {
        readonly 'start': _i_imports_token._T_Relative_Location
        readonly 'end': _i_imports_token._T_Relative_Location
    }
    
    export type _T_Text_Edits = _i_core._T_List<null, _i_core._T_State_Group<null, 
        | readonly ['insert', {
            readonly 'location': _i_imports_token._T_Relative_Location
            readonly 'text': string
        }]
        | readonly ['replace', {
            readonly 'range': _T_Relative_Range
            readonly 'text': string
        }]
        | readonly ['delete', {
            readonly 'range': _T_Relative_Range
        }]
    >>
    
    export type _T_Key_Value_Pairs_To_Be_Sorted = _i_core._T_Dictionary<null, string>
    
    // **** FRIENDLY NAMES FOR THE GLOBAL TYPES
    
    export type Relative_Range = _T_Relative_Range
    
    export type Text_Edits = _T_Text_Edits
    
    export type Key_Value_Pairs_To_Be_Sorted = _T_Key_Value_Pairs_To_Be_Sorted
    
    // **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES
    
    export namespace _T_Relative_Range {
        
        export namespace start {
        }
        export type start = _i_imports_token._T_Relative_Location
        
        export namespace end {
        }
        export type end = _i_imports_token._T_Relative_Location
    }
    
    export namespace _T_Text_Edits {
        
        export namespace L {
            
            export namespace SG {
                
                export namespace insert {
                    
                    export namespace location {
                    }
                    export type location = _i_imports_token._T_Relative_Location
                    export type text = string
                }
                export type insert = {
                    readonly 'location': _i_imports_token._T_Relative_Location
                    readonly 'text': string
                }
                
                export namespace replace {
                    
                    export namespace range {
                    }
                    export type range = _T_Relative_Range
                    export type text = string
                }
                export type replace = {
                    readonly 'range': _T_Relative_Range
                    readonly 'text': string
                }
                
                export namespace _delete {
                    
                    export namespace range {
                    }
                    export type range = _T_Relative_Range
                }
                export type _delete = {
                    readonly 'range': _T_Relative_Range
                }
            }
            export type SG = 
                | readonly ['insert', {
                    readonly 'location': _i_imports_token._T_Relative_Location
                    readonly 'text': string
                }]
                | readonly ['replace', {
                    readonly 'range': _T_Relative_Range
                    readonly 'text': string
                }]
                | readonly ['delete', {
                    readonly 'range': _T_Relative_Range
                }]
        }
        export type L = _i_core._T_State_Group<null, 
            | readonly ['insert', {
                readonly 'location': _i_imports_token._T_Relative_Location
                readonly 'text': string
            }]
            | readonly ['replace', {
                readonly 'range': _T_Relative_Range
                readonly 'text': string
            }]
            | readonly ['delete', {
                readonly 'range': _T_Relative_Range
            }]
        >
    }
    
    export namespace _T_Key_Value_Pairs_To_Be_Sorted {
        export type D = string
    }
    
    // *** ALIASES FOR NESTED TYPES
    
    export namespace Relative_Range {
        
        export namespace start {
        }
        export type start = _i_imports_token._T_Relative_Location
        
        export namespace end {
        }
        export type end = _i_imports_token._T_Relative_Location
    }
    
    export namespace Text_Edits {
        
        export namespace L {
            
            export namespace SG {
                
                export namespace insert {
                    
                    export namespace location {
                    }
                    export type location = _i_imports_token._T_Relative_Location
                    export type text = string
                }
                export type insert = {
                    readonly 'location': _i_imports_token._T_Relative_Location
                    readonly 'text': string
                }
                
                export namespace replace {
                    
                    export namespace range {
                    }
                    export type range = _T_Relative_Range
                    export type text = string
                }
                export type replace = {
                    readonly 'range': _T_Relative_Range
                    readonly 'text': string
                }
                
                export namespace _delete {
                    
                    export namespace range {
                    }
                    export type range = _T_Relative_Range
                }
                export type _delete = {
                    readonly 'range': _T_Relative_Range
                }
            }
            export type SG = 
                | readonly ['insert', {
                    readonly 'location': _i_imports_token._T_Relative_Location
                    readonly 'text': string
                }]
                | readonly ['replace', {
                    readonly 'range': _T_Relative_Range
                    readonly 'text': string
                }]
                | readonly ['delete', {
                    readonly 'range': _T_Relative_Range
                }]
        }
        export type L = _i_core._T_State_Group<null, 
            | readonly ['insert', {
                readonly 'location': _i_imports_token._T_Relative_Location
                readonly 'text': string
            }]
            | readonly ['replace', {
                readonly 'range': _T_Relative_Range
                readonly 'text': string
            }]
            | readonly ['delete', {
                readonly 'range': _T_Relative_Range
            }]
        >
    }
    
    export namespace Key_Value_Pairs_To_Be_Sorted {
        export type D = string
    }
