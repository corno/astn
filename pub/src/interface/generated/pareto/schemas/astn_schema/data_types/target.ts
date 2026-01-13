
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

export namespace Schemas_ {
    
    export type location = i_location__.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i_location__.Location
            
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
    
    export namespace _type {
        
        export type location = i_location__.Location
        
        export namespace state_group {
            
            export type multi_line = null
            
            export type single_line = null
            
        }
        
        export type state_group = 
            | readonly ['multi line', state_group.multi_line]
            | readonly ['single line', state_group.single_line]
        
    }
    
    export type _type = {
        readonly 'location': _type.location
        readonly 'state group': _type.state_group
    }
    
}

export type Text_Type_ = {
    readonly 'type': Text_Type_._type
}

export namespace Globals_ {
    
    export namespace text_types {
        
        export type location = i_location__.Location
        
        export namespace dictionary {
            
            export namespace D {
                
                export type location = i_location__.Location
                
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
    
    export type location = i_location__.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i_location__.Location
            
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
    
    export type location = i_location__.Location
    
    export namespace state_group {
        
        export type _set = Schemas_
        
        export type schema = Schema_
        
    }
    
    export type state_group = 
        | readonly ['set', state_group._set]
        | readonly ['schema', state_group.schema]
    
}

export type Schema_Tree_ = {
    readonly 'location': Schema_Tree_.location
    readonly 'state group': Schema_Tree_.state_group
}

export namespace Imports_ {
    
    export type location = i_location__.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i_location__.Location
            
            export namespace entry {
                
                export namespace schema_set_child {
                    
                    export type location = i_location__.Location
                    
                    export type key = string
                    
                }
                
                export type schema_set_child = {
                    readonly 'location': schema_set_child.location
                    readonly 'key': schema_set_child.key
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
    
    export type location = i_location__.Location
    
    export namespace dictionary {
        
        export namespace D {
            
            export type location = i_location__.Location
            
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
    
    export type location = i_location__.Location
    
    export namespace state_group {
        
        export namespace component {
            
            export type location = i_location__.Location
            
            export namespace state_group {
                
                export namespace external {
                    
                    export namespace _import {
                        
                        export type location = i_location__.Location
                        
                        export type key = string
                        
                    }
                    
                    export type _import = {
                        readonly 'location': _import.location
                        readonly 'key': _import.key
                    }
                    
                    export namespace _type {
                        
                        export type location = i_location__.Location
                        
                        export type key = string
                        
                    }
                    
                    export type _type = {
                        readonly 'location': _type.location
                        readonly 'key': _type.key
                    }
                    
                }
                
                export type external = {
                    readonly 'import': external._import
                    readonly 'type': external._type
                }
                
                export namespace internal {
                    
                    export type location = i_location__.Location
                    
                    export type key = string
                    
                }
                
                export type internal = {
                    readonly 'location': internal.location
                    readonly 'key': internal.key
                }
                
                export namespace internal_cyclic {
                    
                    export type location = i_location__.Location
                    
                    export type key = string
                    
                }
                
                export type internal_cyclic = {
                    readonly 'location': internal_cyclic.location
                    readonly 'key': internal_cyclic.key
                }
                
            }
            
            export type state_group = 
                | readonly ['external', state_group.external]
                | readonly ['internal', state_group.internal]
                | readonly ['internal cyclic', state_group.internal_cyclic]
            
        }
        
        export type component = {
            readonly 'location': component.location
            readonly 'state group': component.state_group
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
        
        export namespace state_group {
            
            export type location = i_location__.Location
            
            export namespace dictionary {
                
                export namespace D {
                    
                    export type location = i_location__.Location
                    
                    export type entry = Type_Node_
                    
                }
                
                export type D = {
                    readonly 'location': D.location
                    readonly 'entry': D.entry
                }
                
            }
            
            export type dictionary = _pi.Dictionary<dictionary.D>
            
        }
        
        export type state_group = {
            readonly 'location': state_group.location
            readonly 'dictionary': state_group.dictionary
        }
        
        export namespace text {
            
            export type location = i_location__.Location
            
            export namespace state_group {
                
                export namespace global {
                    
                    export type location = i_location__.Location
                    
                    export type key = string
                    
                }
                
                export type global = {
                    readonly 'location': global.location
                    readonly 'key': global.key
                }
                
                export type local = Text_Type_
                
            }
            
            export type state_group = 
                | readonly ['global', state_group.global]
                | readonly ['local', state_group.local]
            
        }
        
        export type text = {
            readonly 'location': text.location
            readonly 'state group': text.state_group
        }
        
    }
    
    export type state_group = 
        | readonly ['component', state_group.component]
        | readonly ['dictionary', state_group.dictionary]
        | readonly ['group', state_group.group]
        | readonly ['list', state_group.list]
        | readonly ['nothing', state_group.nothing]
        | readonly ['optional', state_group.optional]
        | readonly ['state group', state_group.state_group]
        | readonly ['text', state_group.text]
    
}

export type Type_Node_ = {
    readonly 'location': Type_Node_.location
    readonly 'state group': Type_Node_.state_group
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
