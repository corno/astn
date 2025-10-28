import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unresolved"

// **** TYPES

export type _T_Dictionary<M_Source> = {
    readonly 'node': _T_Type_Node<M_Source>
    readonly 'ordered': boolean
}

export type _T_Globals<M_Source> = {
    readonly 'text types': _i_core._T_Dictionary<M_Source, _T_Text_Type<M_Source>>
}

export type _T_Group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>

export type _T_Imports<M_Source> = _i_core._T_Dictionary<M_Source, {
    readonly 'schema': _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
    readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
}>

export type _T_Schema<M_Source> = {
    readonly 'globals': _T_Globals<M_Source>
    readonly 'imports': _T_Imports<M_Source>
    readonly 'types': _T_Types<M_Source>
}

export type _T_Schema_Tree<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['schema', _T_Schema<M_Source>]
    | readonly ['set', _T_Schemas<M_Source>]
>

export type _T_Schemas<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, _T_Schema_Tree<M_Source>>

export type _T_Text_Type<M_Source> = {
    readonly 'type': _i_core._T_State_Group<M_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export type _T_Type<M_Source> = {
    readonly 'node': _T_Type_Node<M_Source>
}

export type _T_Type_Node<M_Source> = _i_core._T_State_Group<M_Source, 
    | readonly ['component', _i_core._T_State_Group<M_Source, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
        | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
    >]
    | readonly ['dictionary', _T_Dictionary<M_Source>]
    | readonly ['group', _T_Group<M_Source>]
    | readonly ['list', {
        readonly 'node': _T_Type_Node<M_Source>
    }]
    | readonly ['nothing', null]
    | readonly ['optional', _T_Type_Node<M_Source>]
    | readonly ['reference', {
        readonly 'type': _i_core._T_State_Group<M_Source, 
            | readonly ['derived', null]
            | readonly ['selected', null]
        >
    }]
    | readonly ['state group', _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>]
    | readonly ['text', _i_core._T_State_Group<M_Source, 
        | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
        | readonly ['local', _T_Text_Type<M_Source>]
    >]
>

export type _T_Types<M_Source> = _i_core._T_Ordered_Dictionary<M_Source, _T_Type<M_Source>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Dictionary<M_Source> = _T_Dictionary<M_Source>

export type Globals<M_Source> = _T_Globals<M_Source>

export type Group<M_Source> = _T_Group<M_Source>

export type Imports<M_Source> = _T_Imports<M_Source>

export type Schema<M_Source> = _T_Schema<M_Source>

export type Schema_Tree<M_Source> = _T_Schema_Tree<M_Source>

export type Schemas<M_Source> = _T_Schemas<M_Source>

export type Text_Type<M_Source> = _T_Text_Type<M_Source>

export type Type<M_Source> = _T_Type<M_Source>

export type Type_Node<M_Source> = _T_Type_Node<M_Source>

export type Types<M_Source> = _T_Types<M_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
    export type ordered<M_Source> = boolean
}

export namespace _T_Globals {
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D<M_Source> = _T_Text_Type<M_Source>
    }
    export type text_types<M_Source> = _i_core._T_Dictionary<M_Source, _T_Text_Type<M_Source>>
}

export namespace _T_Group {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type_Node<M_Source>
}

export namespace _T_Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Schema<M_Source>
        }
        export type schema<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Schemas.D<M_Source>
        }
        export type schema_set_child<M_Source> = _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
    export type D<M_Source> = {
        readonly 'schema': _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
}

export namespace _T_Schema {
    
    export namespace globals {
    }
    export type globals<M_Source> = _T_Globals<M_Source>
    
    export namespace imports {
    }
    export type imports<M_Source> = _T_Imports<M_Source>
    
    export namespace types {
    }
    export type types<M_Source> = _T_Types<M_Source>
}

export namespace _T_Schema_Tree {
    
    export namespace SG {
        
        export namespace schema {
        }
        export type schema<M_Source> = _T_Schema<M_Source>
        
        export namespace _set {
        }
        export type _set<M_Source> = _T_Schemas<M_Source>
    }
    export type SG<M_Source> = 
        | readonly ['schema', _T_Schema<M_Source>]
        | readonly ['set', _T_Schemas<M_Source>]
}

export namespace _T_Schemas {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Schema_Tree<M_Source>
}

export namespace _T_Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line<M_Source> = null
            export type single_line<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace _T_Type {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
}

export namespace _T_Type_Node {
    
    export namespace SG {
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                    }
                    export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                    }
                    export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                export type external<M_Source> = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal_cyclic<M_Source> = _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>
            }
            export type SG<M_Source> = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        }
        export type component<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >
        
        export namespace dictionary {
        }
        export type dictionary<M_Source> = _T_Dictionary<M_Source>
        
        export namespace group {
        }
        export type group<M_Source> = _T_Group<M_Source>
        
        export namespace list {
            
            export namespace node {
            }
            export type node<M_Source> = _T_Type_Node<M_Source>
        }
        export type list<M_Source> = {
            readonly 'node': _T_Type_Node<M_Source>
        }
        export type nothing<M_Source> = null
        
        export namespace optional {
        }
        export type optional<M_Source> = _T_Type_Node<M_Source>
        
        export namespace reference {
            
            export namespace _type {
                
                export namespace SG {
                    export type derived<M_Source> = null
                    export type selected<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['derived', null]
                    | readonly ['selected', null]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        export type reference<M_Source> = {
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type_Node<M_Source>
        }
        export type state_group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Globals.text_types.D<M_Source>
                }
                export type global<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>
                
                export namespace local {
                }
                export type local<M_Source> = _T_Text_Type<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
                | readonly ['local', _T_Text_Type<M_Source>]
        }
        export type text<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >
    }
    export type SG<M_Source> = 
        | readonly ['component', _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >]
        | readonly ['dictionary', _T_Dictionary<M_Source>]
        | readonly ['group', _T_Group<M_Source>]
        | readonly ['list', {
            readonly 'node': _T_Type_Node<M_Source>
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _T_Type_Node<M_Source>]
        | readonly ['reference', {
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>]
        | readonly ['text', _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >]
}

export namespace _T_Types {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type<M_Source>
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
    export type ordered<M_Source> = boolean
}

export namespace Globals {
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D<M_Source> = _T_Text_Type<M_Source>
    }
    export type text_types<M_Source> = _i_core._T_Dictionary<M_Source, _T_Text_Type<M_Source>>
}

export namespace Group {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type_Node<M_Source>
}

export namespace Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type<M_Source> = _T_Schema<M_Source>
        }
        export type schema<M_Source> = _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry<M_Source> = _T_Schemas.D<M_Source>
        }
        export type schema_set_child<M_Source> = _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
    export type D<M_Source> = {
        readonly 'schema': _i_core._T_Derived_Reference<M_Source, _T_Schema<M_Source>>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<M_Source, _T_Schemas.D<M_Source>>
    }
}

export namespace Schema {
    
    export namespace globals {
    }
    export type globals<M_Source> = _T_Globals<M_Source>
    
    export namespace imports {
    }
    export type imports<M_Source> = _T_Imports<M_Source>
    
    export namespace types {
    }
    export type types<M_Source> = _T_Types<M_Source>
}

export namespace Schema_Tree {
    
    export namespace SG {
        
        export namespace schema {
        }
        export type schema<M_Source> = _T_Schema<M_Source>
        
        export namespace _set {
        }
        export type _set<M_Source> = _T_Schemas<M_Source>
    }
    export type SG<M_Source> = 
        | readonly ['schema', _T_Schema<M_Source>]
        | readonly ['set', _T_Schemas<M_Source>]
}

export namespace Schemas {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Schema_Tree<M_Source>
}

export namespace Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line<M_Source> = null
            export type single_line<M_Source> = null
        }
        export type SG<M_Source> = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace Type {
    
    export namespace node {
    }
    export type node<M_Source> = _T_Type_Node<M_Source>
}

export namespace Type_Node {
    
    export namespace SG {
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Imports.D<M_Source>
                    }
                    export type _import<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                    }
                    export type _type<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                export type external<M_Source> = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Types.D<M_Source>
                }
                export type internal_cyclic<M_Source> = _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>
            }
            export type SG<M_Source> = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        }
        export type component<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >
        
        export namespace dictionary {
        }
        export type dictionary<M_Source> = _T_Dictionary<M_Source>
        
        export namespace group {
        }
        export type group<M_Source> = _T_Group<M_Source>
        
        export namespace list {
            
            export namespace node {
            }
            export type node<M_Source> = _T_Type_Node<M_Source>
        }
        export type list<M_Source> = {
            readonly 'node': _T_Type_Node<M_Source>
        }
        export type nothing<M_Source> = null
        
        export namespace optional {
        }
        export type optional<M_Source> = _T_Type_Node<M_Source>
        
        export namespace reference {
            
            export namespace _type {
                
                export namespace SG {
                    export type derived<M_Source> = null
                    export type selected<M_Source> = null
                }
                export type SG<M_Source> = 
                    | readonly ['derived', null]
                    | readonly ['selected', null]
            }
            export type _type<M_Source> = _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        export type reference<M_Source> = {
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D<M_Source> = _T_Type_Node<M_Source>
        }
        export type state_group<M_Source> = _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry<M_Source> = _T_Globals.text_types.D<M_Source>
                }
                export type global<M_Source> = _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>
                
                export namespace local {
                }
                export type local<M_Source> = _T_Text_Type<M_Source>
            }
            export type SG<M_Source> = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
                | readonly ['local', _T_Text_Type<M_Source>]
        }
        export type text<M_Source> = _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >
    }
    export type SG<M_Source> = 
        | readonly ['component', _i_core._T_State_Group<M_Source, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Imports.D<M_Source>>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Types.D<M_Source>>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<M_Source, _T_Types.D<M_Source>>]
        >]
        | readonly ['dictionary', _T_Dictionary<M_Source>]
        | readonly ['group', _T_Group<M_Source>]
        | readonly ['list', {
            readonly 'node': _T_Type_Node<M_Source>
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _T_Type_Node<M_Source>]
        | readonly ['reference', {
            readonly 'type': _i_core._T_State_Group<M_Source, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<M_Source, _T_Type_Node<M_Source>>]
        | readonly ['text', _i_core._T_State_Group<M_Source, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<M_Source, _T_Globals.text_types.D<M_Source>>]
            | readonly ['local', _T_Text_Type<M_Source>]
        >]
}

export namespace Types {
    
    export namespace D {
    }
    export type D<M_Source> = _T_Type<M_Source>
}
