import * as _et from 'exupery-core-types'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Dictionary = {
    readonly 'node': _T_Type_Node
    readonly 'ordered': boolean
}

export type _T_Globals = {
    readonly 'text types': _i_core._T_Dictionary<null, _T_Text_Type>
}

export type _T_Group = _i_core._T_Dictionary<null, _T_Type_Node>

export type _T_Imports = _i_core._T_Dictionary<null, {
    readonly 'schema': _i_core._T_Derived_Reference<null, _T_Schema>
    readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
}>

export type _T_Schema = {
    readonly 'globals': _T_Globals
    readonly 'imports': _T_Imports
    readonly 'types': _T_Types
}

export type _T_Schema_Tree = _i_core._T_State_Group<null, 
    | readonly ['schema', _T_Schema]
    | readonly ['set', _T_Schemas]
>

export type _T_Schemas = _i_core._T_Ordered_Dictionary<null, _T_Schema_Tree>

export type _T_Text_Type = {
    readonly 'type': _i_core._T_State_Group<null, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export type _T_Type = {
    readonly 'node': _T_Type_Node
}

export type _T_Type_Node = _i_core._T_State_Group<null, 
    | readonly ['component', _i_core._T_State_Group<null, 
        | readonly ['external', {
            readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
            readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
        }]
        | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
        | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
    >]
    | readonly ['dictionary', _T_Dictionary]
    | readonly ['group', _T_Group]
    | readonly ['list', {
        readonly 'node': _T_Type_Node
    }]
    | readonly ['nothing', null]
    | readonly ['optional', _T_Type_Node]
    | readonly ['reference', {
        readonly 'type': _i_core._T_State_Group<null, 
            | readonly ['derived', null]
            | readonly ['selected', null]
        >
    }]
    | readonly ['state group', _i_core._T_Dictionary<null, _T_Type_Node>]
    | readonly ['text', _i_core._T_State_Group<null, 
        | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
        | readonly ['local', _T_Text_Type]
    >]
>

export type _T_Types = _i_core._T_Ordered_Dictionary<null, _T_Type>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Dictionary = _T_Dictionary

export type Globals = _T_Globals

export type Group = _T_Group

export type Imports = _T_Imports

export type Schema = _T_Schema

export type Schema_Tree = _T_Schema_Tree

export type Schemas = _T_Schemas

export type Text_Type = _T_Text_Type

export type Type = _T_Type

export type Type_Node = _T_Type_Node

export type Types = _T_Types

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    
    export namespace node {
    }
    export type node = _T_Type_Node
    export type ordered = boolean
}

export namespace _T_Globals {
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D = _T_Text_Type
    }
    export type text_types = _i_core._T_Dictionary<null, _T_Text_Type>
}

export namespace _T_Group {
    
    export namespace D {
    }
    export type D = _T_Type_Node
}

export namespace _T_Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type = _T_Schema
        }
        export type schema = _i_core._T_Derived_Reference<null, _T_Schema>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Schemas.D
        }
        export type schema_set_child = _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
    }
    export type D = {
        readonly 'schema': _i_core._T_Derived_Reference<null, _T_Schema>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
    }
}

export namespace _T_Schema {
    
    export namespace globals {
    }
    export type globals = _T_Globals
    
    export namespace imports {
    }
    export type imports = _T_Imports
    
    export namespace types {
    }
    export type types = _T_Types
}

export namespace _T_Schema_Tree {
    
    export namespace SG {
        
        export namespace schema {
        }
        export type schema = _T_Schema
        
        export namespace _set {
        }
        export type _set = _T_Schemas
    }
    export type SG = 
        | readonly ['schema', _T_Schema]
        | readonly ['set', _T_Schemas]
}

export namespace _T_Schemas {
    
    export namespace D {
    }
    export type D = _T_Schema_Tree
}

export namespace _T_Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line = null
            export type single_line = null
        }
        export type SG = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace _T_Type {
    
    export namespace node {
    }
    export type node = _T_Type_Node
}

export namespace _T_Type_Node {
    
    export namespace SG {
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Imports.D
                    }
                    export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
                export type external = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Types.D
                }
                export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Types.D
                }
                export type internal_cyclic = _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>
            }
            export type SG = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        }
        export type component = _i_core._T_State_Group<null, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        >
        
        export namespace dictionary {
        }
        export type dictionary = _T_Dictionary
        
        export namespace group {
        }
        export type group = _T_Group
        
        export namespace list {
            
            export namespace node {
            }
            export type node = _T_Type_Node
        }
        export type list = {
            readonly 'node': _T_Type_Node
        }
        export type nothing = null
        
        export namespace optional {
        }
        export type optional = _T_Type_Node
        
        export namespace reference {
            
            export namespace _type {
                
                export namespace SG {
                    export type derived = null
                    export type selected = null
                }
                export type SG = 
                    | readonly ['derived', null]
                    | readonly ['selected', null]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        export type reference = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D = _T_Type_Node
        }
        export type state_group = _i_core._T_Dictionary<null, _T_Type_Node>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Globals.text_types.D
                }
                export type global = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>
                
                export namespace local {
                }
                export type local = _T_Text_Type
            }
            export type SG = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                | readonly ['local', _T_Text_Type]
        }
        export type text = _i_core._T_State_Group<null, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
            | readonly ['local', _T_Text_Type]
        >
    }
    export type SG = 
        | readonly ['component', _i_core._T_State_Group<null, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        >]
        | readonly ['dictionary', _T_Dictionary]
        | readonly ['group', _T_Group]
        | readonly ['list', {
            readonly 'node': _T_Type_Node
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _T_Type_Node]
        | readonly ['reference', {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<null, _T_Type_Node>]
        | readonly ['text', _i_core._T_State_Group<null, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
            | readonly ['local', _T_Text_Type]
        >]
}

export namespace _T_Types {
    
    export namespace D {
    }
    export type D = _T_Type
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    
    export namespace node {
    }
    export type node = _T_Type_Node
    export type ordered = boolean
}

export namespace Globals {
    
    export namespace text_types {
        
        export namespace D {
        }
        export type D = _T_Text_Type
    }
    export type text_types = _i_core._T_Dictionary<null, _T_Text_Type>
}

export namespace Group {
    
    export namespace D {
    }
    export type D = _T_Type_Node
}

export namespace Imports {
    
    export namespace D {
        
        export namespace schema {
            
            export namespace Type {
            }
            export type Type = _T_Schema
        }
        export type schema = _i_core._T_Derived_Reference<null, _T_Schema>
        
        export namespace schema_set_child {
            
            export namespace Dictionary_Entry {
            }
            export type Dictionary_Entry = _T_Schemas.D
        }
        export type schema_set_child = _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
    }
    export type D = {
        readonly 'schema': _i_core._T_Derived_Reference<null, _T_Schema>
        readonly 'schema set child': _i_core._T_Reference_To_Stacked_Dictionary_Entry<null, _T_Schemas.D>
    }
}

export namespace Schema {
    
    export namespace globals {
    }
    export type globals = _T_Globals
    
    export namespace imports {
    }
    export type imports = _T_Imports
    
    export namespace types {
    }
    export type types = _T_Types
}

export namespace Schema_Tree {
    
    export namespace SG {
        
        export namespace schema {
        }
        export type schema = _T_Schema
        
        export namespace _set {
        }
        export type _set = _T_Schemas
    }
    export type SG = 
        | readonly ['schema', _T_Schema]
        | readonly ['set', _T_Schemas]
}

export namespace Schemas {
    
    export namespace D {
    }
    export type D = _T_Schema_Tree
}

export namespace Text_Type {
    
    export namespace _type {
        
        export namespace SG {
            export type multi_line = null
            export type single_line = null
        }
        export type SG = 
            | readonly ['multi line', null]
            | readonly ['single line', null]
    }
    export type _type = _i_core._T_State_Group<null, 
        | readonly ['multi line', null]
        | readonly ['single line', null]
    >
}

export namespace Type {
    
    export namespace node {
    }
    export type node = _T_Type_Node
}

export namespace Type_Node {
    
    export namespace SG {
        
        export namespace component {
            
            export namespace SG {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Imports.D
                    }
                    export type _import = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    
                    export namespace _type {
                        
                        export namespace Dictionary_Entry {
                        }
                        export type Dictionary_Entry = _T_Types.D
                    }
                    export type _type = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
                export type external = {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }
                
                export namespace internal {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Types.D
                }
                export type internal = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                
                export namespace internal_cyclic {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Types.D
                }
                export type internal_cyclic = _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>
            }
            export type SG = 
                | readonly ['external', {
                    readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                    readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
                }]
                | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
                | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        }
        export type component = _i_core._T_State_Group<null, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        >
        
        export namespace dictionary {
        }
        export type dictionary = _T_Dictionary
        
        export namespace group {
        }
        export type group = _T_Group
        
        export namespace list {
            
            export namespace node {
            }
            export type node = _T_Type_Node
        }
        export type list = {
            readonly 'node': _T_Type_Node
        }
        export type nothing = null
        
        export namespace optional {
        }
        export type optional = _T_Type_Node
        
        export namespace reference {
            
            export namespace _type {
                
                export namespace SG {
                    export type derived = null
                    export type selected = null
                }
                export type SG = 
                    | readonly ['derived', null]
                    | readonly ['selected', null]
            }
            export type _type = _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        export type reference = {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }
        
        export namespace state_group {
            
            export namespace D {
            }
            export type D = _T_Type_Node
        }
        export type state_group = _i_core._T_Dictionary<null, _T_Type_Node>
        
        export namespace text {
            
            export namespace SG {
                
                export namespace global {
                    
                    export namespace Dictionary_Entry {
                    }
                    export type Dictionary_Entry = _T_Globals.text_types.D
                }
                export type global = _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>
                
                export namespace local {
                }
                export type local = _T_Text_Type
            }
            export type SG = 
                | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
                | readonly ['local', _T_Text_Type]
        }
        export type text = _i_core._T_State_Group<null, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
            | readonly ['local', _T_Text_Type]
        >
    }
    export type SG = 
        | readonly ['component', _i_core._T_State_Group<null, 
            | readonly ['external', {
                readonly 'import': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Imports.D>
                readonly 'type': _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>
            }]
            | readonly ['internal', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Types.D>]
            | readonly ['internal cyclic', _i_core._T_Reference_To_Circular_Dependent_Sibling<null, _T_Types.D>]
        >]
        | readonly ['dictionary', _T_Dictionary]
        | readonly ['group', _T_Group]
        | readonly ['list', {
            readonly 'node': _T_Type_Node
        }]
        | readonly ['nothing', null]
        | readonly ['optional', _T_Type_Node]
        | readonly ['reference', {
            readonly 'type': _i_core._T_State_Group<null, 
                | readonly ['derived', null]
                | readonly ['selected', null]
            >
        }]
        | readonly ['state group', _i_core._T_Dictionary<null, _T_Type_Node>]
        | readonly ['text', _i_core._T_State_Group<null, 
            | readonly ['global', _i_core._T_Reference_To_Normal_Dictionary_Entry<null, _T_Globals.text_types.D>]
            | readonly ['local', _T_Text_Type]
        >]
}

export namespace Types {
    
    export namespace D {
    }
    export type D = _T_Type
}
