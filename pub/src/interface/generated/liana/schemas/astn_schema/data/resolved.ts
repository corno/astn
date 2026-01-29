
import * as _pi from "pareto-core/dist/interface"

export namespace Schemas_ {
    
    export type D = Schema_Tree_
    
}

export type Schemas_ = _pi.Dictionary<Schemas_.D>

export namespace Text_Type_ {
    
    export namespace type_ {
        
        export type multi_line = null
        
        export type single_line = null
        
    }
    
    export type type_ = 
        | readonly ['multi line', type_.multi_line]
        | readonly ['single line', type_.single_line]
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_.type_
}

export namespace Globals_ {
    
    export namespace text_types {
        
        export type D = Text_Type_
        
    }
    
    export type text_types = _pi.Dictionary<text_types.D>
    
}

export type Globals_ = {
    readonly 'text types': Globals_.text_types
}

export namespace Type_ {
    
    export type node = Type_Node_
    
}

export type Type_ = {
    readonly 'node': Type_.node
}

export namespace Types_ {
    
    export type D = Type_
    
}

export type Types_ = _pi.Dictionary<Types_.D>

export namespace Schema_ {
    
    export type imports = Imports_
    
    export type globals = Globals_
    
    export type types = Types_
    
}

export type Schema_ = {
    readonly 'imports': Schema_.imports
    readonly 'globals': Schema_.globals
    readonly 'types': Schema_.types
}

export namespace Schema_Tree_ {
    
    export type set_ = Schemas_
    
    export type schema = Schema_
    
}

export type Schema_Tree_ = 
    | readonly ['set', Schema_Tree_.set_]
    | readonly ['schema', Schema_Tree_.schema]

export namespace Imports_ {
    
    export namespace D {
        
        export namespace schema_set_child {
            
            export type entry = Schemas_.D
            
            export type id = string
            
            export type up_steps = number
            
        }
        
        export type schema_set_child = {
            readonly 'entry': schema_set_child.entry
            readonly 'id': schema_set_child.id
            readonly 'up steps': schema_set_child.up_steps
        }
        
        export type schema = Schema_
        
    }
    
    export type D = {
        readonly 'schema set child': D.schema_set_child
        readonly 'schema': D.schema
    }
    
}

export type Imports_ = _pi.Dictionary<Imports_.D>

export namespace Dictionary_ {
    
    export type node = Type_Node_
    
    export type ordered = boolean
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
    readonly 'ordered': Dictionary_.ordered
}

export namespace Group_ {
    
    export type D = Type_Node_
    
}

export type Group_ = _pi.Dictionary<Group_.D>

export namespace Type_Node_ {
    
    export namespace component {
        
        export namespace external {
            
            export namespace import_ {
                
                export type entry = Imports_.D
                
                export type id = string
                
            }
            
            export type import_ = {
                readonly 'entry': import_.entry
                readonly 'id': import_.id
            }
            
            export namespace type_ {
                
                export type entry = Types_.D
                
                export type id = string
                
            }
            
            export type type_ = {
                readonly 'entry': type_.entry
                readonly 'id': type_.id
            }
            
        }
        
        export type external = {
            readonly 'import': external.import_
            readonly 'type': external.type_
        }
        
        export namespace internal {
            
            export type entry = Types_.D
            
            export type id = string
            
        }
        
        export type internal = {
            readonly 'entry': internal.entry
            readonly 'id': internal.id
        }
        
        export namespace internal_cyclic {
            
            export type entry = _pi.Circular_Dependency<Types_.D>
            
            export type id = string
            
        }
        
        export type internal_cyclic = {
            readonly 'entry': internal_cyclic.entry
            readonly 'id': internal_cyclic.id
        }
        
    }
    
    export type component = 
        | readonly ['external', component.external]
        | readonly ['internal', component.internal]
        | readonly ['internal cyclic', component.internal_cyclic]
    
    export type dictionary = Dictionary_
    
    export type group = Group_
    
    export namespace list {
        
        export type node = Type_Node_
        
    }
    
    export type list = {
        readonly 'node': list.node
    }
    
    export type nothing = null
    
    export type optional = Type_Node_
    
    export namespace state {
        
        export type D = Type_Node_
        
    }
    
    export type state = _pi.Dictionary<state.D>
    
    export namespace text {
        
        export namespace global {
            
            export type entry = Globals_.text_types.D
            
            export type id = string
            
        }
        
        export type global = {
            readonly 'entry': global.entry
            readonly 'id': global.id
        }
        
        export type local = Text_Type_
        
    }
    
    export type text = 
        | readonly ['global', text.global]
        | readonly ['local', text.local]
    
}

export type Type_Node_ = 
    | readonly ['component', Type_Node_.component]
    | readonly ['dictionary', Type_Node_.dictionary]
    | readonly ['group', Type_Node_.group]
    | readonly ['list', Type_Node_.list]
    | readonly ['nothing', Type_Node_.nothing]
    | readonly ['optional', Type_Node_.optional]
    | readonly ['state', Type_Node_.state]
    | readonly ['text', Type_Node_.text]

export { 
    Schemas_ as Schemas, 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Type_ as Type, 
    Types_ as Types, 
    Schema_ as Schema, 
    Schema_Tree_ as Schema_Tree, 
    Imports_ as Imports, 
    Dictionary_ as Dictionary, 
    Group_ as Group, 
    Type_Node_ as Type_Node, 
}
