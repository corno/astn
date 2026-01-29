
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Schemas_ {
    
    export type location = i__location.Relative_Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export type entry = Schema_Tree_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Schemas_ = {
    readonly 'location': Schemas_.location
    readonly 'dictionary': Schemas_.dictionary
}

export namespace Text_Type_ {
    
    export namespace type_ {
        
        export type location = i__location.Relative_Location
        
        export namespace state {
            
            export type multi_line = null
            
            export type single_line = null
            
        }
        
        export type state = 
            | readonly ['multi line', state.multi_line]
            | readonly ['single line', state.single_line]
        
    }
    
    export type type_ = {
        readonly 'location': type_.location
        readonly 'state': type_.state
    }
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_.type_
}

export namespace Globals_ {
    
    export namespace text_types {
        
        export type location = i__location.Relative_Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i__location.Relative_Location
                
                export type entry = Text_Type_
                
            }
            
            export type D = {
                readonly 'location': D.location
                readonly 'entry': D.entry
            }
            
        }
        
        export type dictionary = _pi.Dictionary<dictionary.D>
        
    }
    
    export type text_types = {
        readonly 'location': text_types.location
        readonly 'dictionary': text_types.dictionary
    }
    
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
    
    export type location = i__location.Relative_Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export type entry = Type_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Types_ = {
    readonly 'location': Types_.location
    readonly 'dictionary': Types_.dictionary
}

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
    
    export type location = i__location.Relative_Location
    
    export namespace state {
        
        export type set_ = Schemas_
        
        export type schema = Schema_
        
    }
    
    export type state = 
        | readonly ['set', state.set_]
        | readonly ['schema', state.schema]
    
}

export type Schema_Tree_ = {
    readonly 'location': Schema_Tree_.location
    readonly 'state': Schema_Tree_.state
}

export namespace Imports_ {
    
    export type location = i__location.Relative_Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export namespace entry {
                
                export namespace schema_set_child {
                    
                    export type location = i__location.Relative_Location
                    
                    export type id = string
                    
                }
                
                export type schema_set_child = {
                    readonly 'location': schema_set_child.location
                    readonly 'id': schema_set_child.id
                }
                
                export type schema = null
                
            }
            
            export type entry = {
                readonly 'schema set child': entry.schema_set_child
                readonly 'schema': entry.schema
            }
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Imports_ = {
    readonly 'location': Imports_.location
    readonly 'dictionary': Imports_.dictionary
}

export namespace Dictionary_ {
    
    export type node = Type_Node_
    
    export type ordered = boolean
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
    readonly 'ordered': Dictionary_.ordered
}

export namespace Group_ {
    
    export type location = i__location.Relative_Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i__location.Relative_Location
            
            export type entry = Type_Node_
            
        }
        
        export type D = {
            readonly 'location': D.location
            readonly 'entry': D.entry
        }
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
}

export type Group_ = {
    readonly 'location': Group_.location
    readonly 'dictionary': Group_.dictionary
}

export namespace Type_Node_ {
    
    export type location = i__location.Relative_Location
    
    export namespace state {
        
        export namespace component {
            
            export type location = i__location.Relative_Location
            
            export namespace state {
                
                export namespace external {
                    
                    export namespace import_ {
                        
                        export type location = i__location.Relative_Location
                        
                        export type id = string
                        
                    }
                    
                    export type import_ = {
                        readonly 'location': import_.location
                        readonly 'id': import_.id
                    }
                    
                    export namespace type_ {
                        
                        export type location = i__location.Relative_Location
                        
                        export type id = string
                        
                    }
                    
                    export type type_ = {
                        readonly 'location': type_.location
                        readonly 'id': type_.id
                    }
                    
                }
                
                export type external = {
                    readonly 'import': external.import_
                    readonly 'type': external.type_
                }
                
                export namespace internal {
                    
                    export type location = i__location.Relative_Location
                    
                    export type id = string
                    
                }
                
                export type internal = {
                    readonly 'location': internal.location
                    readonly 'id': internal.id
                }
                
                export namespace internal_cyclic {
                    
                    export type location = i__location.Relative_Location
                    
                    export type id = string
                    
                }
                
                export type internal_cyclic = {
                    readonly 'location': internal_cyclic.location
                    readonly 'id': internal_cyclic.id
                }
                
            }
            
            export type state = 
                | readonly ['external', state.external]
                | readonly ['internal', state.internal]
                | readonly ['internal cyclic', state.internal_cyclic]
            
        }
        
        export type component = {
            readonly 'location': component.location
            readonly 'state': component.state
        }
        
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
            
            export type location = i__location.Relative_Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i__location.Relative_Location
                    
                    export type entry = Type_Node_
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type state = {
            readonly 'location': state.location
            readonly 'dictionary': state.dictionary
        }
        
        export namespace text {
            
            export type location = i__location.Relative_Location
            
            export namespace state {
                
                export namespace global {
                    
                    export type location = i__location.Relative_Location
                    
                    export type id = string
                    
                }
                
                export type global = {
                    readonly 'location': global.location
                    readonly 'id': global.id
                }
                
                export type local = Text_Type_
                
            }
            
            export type state = 
                | readonly ['global', state.global]
                | readonly ['local', state.local]
            
        }
        
        export type text = {
            readonly 'location': text.location
            readonly 'state': text.state
        }
        
    }
    
    export type state = 
        | readonly ['component', state.component]
        | readonly ['dictionary', state.dictionary]
        | readonly ['group', state.group]
        | readonly ['list', state.list]
        | readonly ['nothing', state.nothing]
        | readonly ['optional', state.optional]
        | readonly ['state', state.state]
        | readonly ['text', state.text]
    
}

export type Type_Node_ = {
    readonly 'location': Type_Node_.location
    readonly 'state': Type_Node_.state
}

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
