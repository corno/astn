
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

export namespace Module_ {
    
    export type node = Value_
    
}

export type Module_ = {
    readonly 'node': Module_.node
}

export namespace Modules_ {
    
    export type D = Module_
    
}

export type Modules_ = _pi.Dictionary<Modules_.D>

export namespace Schema_ {
    
    export type imports = Imports_
    
    export type globals = Globals_
    
    export type types = Modules_
    
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
            
            export type l_entry = Schemas_.D
            
            export type l_id = string
            
            export type l_up_steps = number
            
        }
        
        export type schema_set_child = {
            readonly 'l entry': schema_set_child.l_entry
            readonly 'l id': schema_set_child.l_id
            readonly 'l up steps': schema_set_child.l_up_steps
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
    
    export type node = Value_
    
    export type ordered = boolean
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
    readonly 'ordered': Dictionary_.ordered
}

export namespace Group_ {
    
    export type D = Value_
    
}

export type Group_ = _pi.Dictionary<Group_.D>

export namespace Value_ {
    
    export namespace component {
        
        export namespace external {
            
            export namespace import_ {
                
                export type l_entry = Imports_.D
                
                export type l_id = string
                
            }
            
            export type import_ = {
                readonly 'l entry': import_.l_entry
                readonly 'l id': import_.l_id
            }
            
            export namespace type_ {
                
                export type l_entry = Modules_.D
                
                export type l_id = string
                
            }
            
            export type type_ = {
                readonly 'l entry': type_.l_entry
                readonly 'l id': type_.l_id
            }
            
        }
        
        export type external = {
            readonly 'import': external.import_
            readonly 'type': external.type_
        }
        
        export namespace internal {
            
            export type l_entry = Modules_.D
            
            export type l_id = string
            
        }
        
        export type internal = {
            readonly 'l entry': internal.l_entry
            readonly 'l id': internal.l_id
        }
        
        export namespace internal_cyclic {
            
            export type l_entry = _pi.Circular_Dependency<Modules_.D>
            
            export type l_id = string
            
        }
        
        export type internal_cyclic = {
            readonly 'l entry': internal_cyclic.l_entry
            readonly 'l id': internal_cyclic.l_id
        }
        
    }
    
    export type component = 
        | readonly ['external', component.external]
        | readonly ['internal', component.internal]
        | readonly ['internal cyclic', component.internal_cyclic]
    
    export type dictionary = Dictionary_
    
    export type group = Group_
    
    export namespace list {
        
        export type node = Value_
        
    }
    
    export type list = {
        readonly 'node': list.node
    }
    
    export type nothing = null
    
    export type optional = Value_
    
    export namespace state {
        
        export type D = Value_
        
    }
    
    export type state = _pi.Dictionary<state.D>
    
    export namespace text {
        
        export namespace global {
            
            export type l_entry = Globals_.text_types.D
            
            export type l_id = string
            
        }
        
        export type global = {
            readonly 'l entry': global.l_entry
            readonly 'l id': global.l_id
        }
        
        export type local = Text_Type_
        
    }
    
    export type text = 
        | readonly ['global', text.global]
        | readonly ['local', text.local]
    
}

export type Value_ = 
    | readonly ['component', Value_.component]
    | readonly ['dictionary', Value_.dictionary]
    | readonly ['group', Value_.group]
    | readonly ['list', Value_.list]
    | readonly ['nothing', Value_.nothing]
    | readonly ['optional', Value_.optional]
    | readonly ['state', Value_.state]
    | readonly ['text', Value_.text]

export { 
    Schemas_ as Schemas, 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Module_ as Module, 
    Modules_ as Modules, 
    Schema_ as Schema, 
    Schema_Tree_ as Schema_Tree, 
    Imports_ as Imports, 
    Dictionary_ as Dictionary, 
    Group_ as Group, 
    Value_ as Value, 
}
