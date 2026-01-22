
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/resolve"

import * as i_resolved from "./data/resolved"

import * as i_unresolved from "./data/unresolved"

export namespace Text_Type_ {
    
    export type I = i_unresolved.Text_Type
    
    export type O = i_resolved.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    $$_: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
    lookups: null,
    p: null,
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = i_unresolved.Globals
    
    export type O = i_resolved.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    $$_: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
    lookups: null,
    p: null,
) => Globals_.O

export namespace Group_ {
    
    export type I = i_unresolved.Group
    
    export type O = i_resolved.Group
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Group_ = (
    $$_: Group_.I,
    abort: _pi.Abort<Group_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Group_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Group_.L.possibly_circular_dependent_sibling_types>
    },
    p: {
        readonly 'globals': Group_.P.globals
        readonly 'imports': Group_.P.imports
    },
) => Group_.O

export namespace Dictionary_ {
    
    export type I = i_unresolved.Dictionary
    
    export type O = i_resolved.Dictionary
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Dictionary_ = (
    $$_: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Dictionary_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Dictionary_.L.possibly_circular_dependent_sibling_types>
    },
    p: {
        readonly 'globals': Dictionary_.P.globals
        readonly 'imports': Dictionary_.P.imports
    },
) => Dictionary_.O

export namespace Type_Node_ {
    
    export type I = i_unresolved.Type_Node
    
    export type O = i_resolved.Type_Node
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Type_Node_ = (
    $$_: Type_Node_.I,
    abort: _pi.Abort<Type_Node_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Type_Node_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Type_Node_.L.possibly_circular_dependent_sibling_types>
    },
    p: {
        readonly 'globals': Type_Node_.P.globals
        readonly 'imports': Type_Node_.P.imports
    },
) => Type_Node_.O

export namespace Type_ {
    
    export type I = i_unresolved.Type
    
    export type O = i_resolved.Type
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Types_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Type_ = (
    $$_: Type_.I,
    abort: _pi.Abort<Type_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Type_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Type_.L.possibly_circular_dependent_sibling_types>
    },
    p: {
        readonly 'globals': Type_.P.globals
        readonly 'imports': Type_.P.imports
    },
) => Type_.O

export namespace Schemas_ {
    
    export type I = i_unresolved.Schemas
    
    export type O = i_resolved.Schemas
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    $$_: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schemas_.L.sibling_schemas>
    },
    p: null,
) => Schemas_.O

export namespace Schema_Tree_ {
    
    export type I = i_unresolved.Schema_Tree
    
    export type O = i_resolved.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    $$_: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schema_Tree_.L.sibling_schemas>
    },
    p: null,
) => Schema_Tree_.O

export namespace Schema_ {
    
    export type I = i_unresolved.Schema
    
    export type O = i_resolved.Schema
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    $$_: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schema_.L.sibling_schemas>
    },
    p: null,
) => Schema_.O

export namespace Imports_ {
    
    export type I = i_unresolved.Imports
    
    export type O = i_resolved.Imports
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type sibling_schemas = i_resolved.Schemas_.D
        
    }
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    $$_: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Imports_.L.sibling_schemas>
    },
    p: null,
) => Imports_.O

export namespace Types_ {
    
    export type I = i_unresolved.Types
    
    export type O = i_resolved.Types
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = _pi.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = _pi.Optional_Value<imports.O>
        
    }
    
}

export type Types_ = (
    $$_: Types_.I,
    abort: _pi.Abort<Types_.E>,
    lookups: null,
    p: {
        readonly 'globals': Types_.P.globals
        readonly 'imports': Types_.P.imports
    },
) => Types_.O

export { 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Group_ as Group, 
    Dictionary_ as Dictionary, 
    Type_Node_ as Type_Node, 
    Type_ as Type, 
    Schemas_ as Schemas, 
    Schema_Tree_ as Schema_Tree, 
    Schema_ as Schema, 
    Imports_ as Imports, 
    Types_ as Types, 
}
