
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Schemas_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Schema_Tree_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Schemas_ = {
    readonly 'l location': Schemas_.l_location
    readonly 'l value': Schemas_.l_value
}

export namespace Text_Type_ {
    
    export namespace type_ {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_value {
            
            export type multi_line = null
            
            export type single_line = null
            
        }
        
        export type l_value = 
            | readonly ['multi line', l_value.multi_line]
            | readonly ['single line', l_value.single_line]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l value': type_.l_value
    }
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_.type_
}

export namespace Globals_ {
    
    export namespace text_types {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_value {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export type l_entry = Text_Type_
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_value = _pi.Dictionary<l_value.D>
        
    }
    
    export type text_types = {
        readonly 'l location': text_types.l_location
        readonly 'l value': text_types.l_value
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
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Type_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Types_ = {
    readonly 'l location': Types_.l_location
    readonly 'l value': Types_.l_value
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
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export type set_ = Schemas_
        
        export type schema = Schema_
        
    }
    
    export type l_value = 
        | readonly ['set', l_value.set_]
        | readonly ['schema', l_value.schema]
    
}

export type Schema_Tree_ = {
    readonly 'l location': Schema_Tree_.l_location
    readonly 'l value': Schema_Tree_.l_value
}

export namespace Imports_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export namespace schema_set_child {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type schema_set_child = {
                    readonly 'l location': schema_set_child.l_location
                    readonly 'l value': schema_set_child.l_value
                }
                
                export type schema = null
                
            }
            
            export type l_entry = {
                readonly 'schema set child': l_entry.schema_set_child
                readonly 'schema': l_entry.schema
            }
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Imports_ = {
    readonly 'l location': Imports_.l_location
    readonly 'l value': Imports_.l_value
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
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Type_Node_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_value = _pi.Dictionary<l_value.D>
    
}

export type Group_ = {
    readonly 'l location': Group_.l_location
    readonly 'l value': Group_.l_value
}

export namespace Type_Node_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_value {
        
        export namespace component {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace external {
                    
                    export namespace import_ {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = string
                        
                    }
                    
                    export type import_ = {
                        readonly 'l location': import_.l_location
                        readonly 'l value': import_.l_value
                    }
                    
                    export namespace type_ {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_value = string
                        
                    }
                    
                    export type type_ = {
                        readonly 'l location': type_.l_location
                        readonly 'l value': type_.l_value
                    }
                    
                }
                
                export type external = {
                    readonly 'import': external.import_
                    readonly 'type': external.type_
                }
                
                export namespace internal {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type internal = {
                    readonly 'l location': internal.l_location
                    readonly 'l value': internal.l_value
                }
                
                export namespace internal_cyclic {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type internal_cyclic = {
                    readonly 'l location': internal_cyclic.l_location
                    readonly 'l value': internal_cyclic.l_value
                }
                
            }
            
            export type l_value = 
                | readonly ['external', l_value.external]
                | readonly ['internal', l_value.internal]
                | readonly ['internal cyclic', l_value.internal_cyclic]
            
        }
        
        export type component = {
            readonly 'l location': component.l_location
            readonly 'l value': component.l_value
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
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Type_Node_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_value = _pi.Dictionary<l_value.D>
            
        }
        
        export type state = {
            readonly 'l location': state.l_location
            readonly 'l value': state.l_value
        }
        
        export namespace text {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_value {
                
                export namespace global {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_value = string
                    
                }
                
                export type global = {
                    readonly 'l location': global.l_location
                    readonly 'l value': global.l_value
                }
                
                export type local = Text_Type_
                
            }
            
            export type l_value = 
                | readonly ['global', l_value.global]
                | readonly ['local', l_value.local]
            
        }
        
        export type text = {
            readonly 'l location': text.l_location
            readonly 'l value': text.l_value
        }
        
    }
    
    export type l_value = 
        | readonly ['component', l_value.component]
        | readonly ['dictionary', l_value.dictionary]
        | readonly ['group', l_value.group]
        | readonly ['list', l_value.list]
        | readonly ['nothing', l_value.nothing]
        | readonly ['optional', l_value.optional]
        | readonly ['state', l_value.state]
        | readonly ['text', l_value.text]
    
}

export type Type_Node_ = {
    readonly 'l location': Type_Node_.l_location
    readonly 'l value': Type_Node_.l_value
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
