
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "astn-core/dist/interface/generated/liana/schemas/location/data"

export namespace Schemas_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Schema_Tree_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Schemas_ = {
    readonly 'l location': Schemas_.l_location
    readonly 'l dictionary': Schemas_.l_dictionary
}

export namespace Text_Type_ {
    
    export namespace type_ {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_state {
            
            export type multi_line = null
            
            export type single_line = null
            
        }
        
        export type l_state = 
            | readonly ['multi line', l_state.multi_line]
            | readonly ['single line', l_state.single_line]
        
    }
    
    export type type_ = {
        readonly 'l location': type_.l_location
        readonly 'l state': type_.l_state
    }
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_.type_
}

export namespace Globals_ {
    
    export namespace text_types {
        
        export type l_location = i__location.Relative_Location
        
        export namespace l_dictionary {
            
            export namespace D {
                
                export type l_location = i__location.Relative_Location
                
                export type l_entry = Text_Type_
                
            }
            
            export type D = {
                readonly 'l location': D.l_location
                readonly 'l entry': D.l_entry
            }
            
        }
        
        export type l_dictionary = _pi.Dictionary<l_dictionary.D>
        
    }
    
    export type text_types = {
        readonly 'l location': text_types.l_location
        readonly 'l dictionary': text_types.l_dictionary
    }
    
}

export type Globals_ = {
    readonly 'text types': Globals_.text_types
}

export namespace Type_ {
    
    export type node = Value_
    
}

export type Type_ = {
    readonly 'node': Type_.node
}

export namespace Types_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Type_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Types_ = {
    readonly 'l location': Types_.l_location
    readonly 'l dictionary': Types_.l_dictionary
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
    
    export namespace l_state {
        
        export type set_ = Schemas_
        
        export type schema = Schema_
        
    }
    
    export type l_state = 
        | readonly ['set', l_state.set_]
        | readonly ['schema', l_state.schema]
    
}

export type Schema_Tree_ = {
    readonly 'l location': Schema_Tree_.l_location
    readonly 'l state': Schema_Tree_.l_state
}

export namespace Imports_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_entry {
                
                export namespace schema_set_child {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type schema_set_child = {
                    readonly 'l location': schema_set_child.l_location
                    readonly 'l reference': schema_set_child.l_reference
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
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Imports_ = {
    readonly 'l location': Imports_.l_location
    readonly 'l dictionary': Imports_.l_dictionary
}

export namespace Dictionary_ {
    
    export type node = Value_
    
    export type ordered = boolean
    
}

export type Dictionary_ = {
    readonly 'node': Dictionary_.node
    readonly 'ordered': Dictionary_.ordered
}

export namespace Group_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_dictionary {
        
        export namespace D {
            
            export type l_location = i__location.Relative_Location
            
            export type l_entry = Value_
            
        }
        
        export type D = {
            readonly 'l location': D.l_location
            readonly 'l entry': D.l_entry
        }
        
    }
    
    export type l_dictionary = _pi.Dictionary<l_dictionary.D>
    
}

export type Group_ = {
    readonly 'l location': Group_.l_location
    readonly 'l dictionary': Group_.l_dictionary
}

export namespace Value_ {
    
    export type l_location = i__location.Relative_Location
    
    export namespace l_state {
        
        export namespace component {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace external {
                    
                    export namespace import_ {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type import_ = {
                        readonly 'l location': import_.l_location
                        readonly 'l reference': import_.l_reference
                    }
                    
                    export namespace type_ {
                        
                        export type l_location = i__location.Relative_Location
                        
                        export type l_reference = string
                        
                    }
                    
                    export type type_ = {
                        readonly 'l location': type_.l_location
                        readonly 'l reference': type_.l_reference
                    }
                    
                }
                
                export type external = {
                    readonly 'import': external.import_
                    readonly 'type': external.type_
                }
                
                export namespace internal {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type internal = {
                    readonly 'l location': internal.l_location
                    readonly 'l reference': internal.l_reference
                }
                
                export namespace internal_cyclic {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type internal_cyclic = {
                    readonly 'l location': internal_cyclic.l_location
                    readonly 'l reference': internal_cyclic.l_reference
                }
                
            }
            
            export type l_state = 
                | readonly ['external', l_state.external]
                | readonly ['internal', l_state.internal]
                | readonly ['internal cyclic', l_state.internal_cyclic]
            
        }
        
        export type component = {
            readonly 'l location': component.l_location
            readonly 'l state': component.l_state
        }
        
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
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_dictionary {
                
                export namespace D {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_entry = Value_
                    
                }
                
                export type D = {
                    readonly 'l location': D.l_location
                    readonly 'l entry': D.l_entry
                }
                
            }
            
            export type l_dictionary = _pi.Dictionary<l_dictionary.D>
            
        }
        
        export type state = {
            readonly 'l location': state.l_location
            readonly 'l dictionary': state.l_dictionary
        }
        
        export namespace text {
            
            export type l_location = i__location.Relative_Location
            
            export namespace l_state {
                
                export namespace global {
                    
                    export type l_location = i__location.Relative_Location
                    
                    export type l_reference = string
                    
                }
                
                export type global = {
                    readonly 'l location': global.l_location
                    readonly 'l reference': global.l_reference
                }
                
                export type local = Text_Type_
                
            }
            
            export type l_state = 
                | readonly ['global', l_state.global]
                | readonly ['local', l_state.local]
            
        }
        
        export type text = {
            readonly 'l location': text.l_location
            readonly 'l state': text.l_state
        }
        
    }
    
    export type l_state = 
        | readonly ['component', l_state.component]
        | readonly ['dictionary', l_state.dictionary]
        | readonly ['group', l_state.group]
        | readonly ['list', l_state.list]
        | readonly ['nothing', l_state.nothing]
        | readonly ['optional', l_state.optional]
        | readonly ['state', l_state.state]
        | readonly ['text', l_state.text]
    
}

export type Value_ = {
    readonly 'l location': Value_.l_location
    readonly 'l state': Value_.l_state
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
    Value_ as Value, 
}
