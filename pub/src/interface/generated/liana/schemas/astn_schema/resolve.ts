
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
    context: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
    lookups: null,
    parameters: null,
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = i_unresolved.Globals
    
    export type O = i_resolved.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
    lookups: null,
    parameters: null,
) => Globals_.O

export namespace Group_ {
    
    export type I = i_unresolved.Group
    
    export type O = i_resolved.Group
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Modules_.D
        
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
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Group_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Group_.L.possibly_circular_dependent_sibling_types>
    },
    parameters: {
        readonly 'globals': Group_.P.globals
        readonly 'imports': Group_.P.imports
    },
) => Group_.O

export namespace Dictionary_ {
    
    export type I = i_unresolved.Dictionary
    
    export type O = i_resolved.Dictionary
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Modules_.D
        
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
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Dictionary_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Dictionary_.L.possibly_circular_dependent_sibling_types>
    },
    parameters: {
        readonly 'globals': Dictionary_.P.globals
        readonly 'imports': Dictionary_.P.imports
    },
) => Dictionary_.O

export namespace Value_ {
    
    export type I = i_unresolved.Value
    
    export type O = i_resolved.Value
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Modules_.D
        
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

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Value_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Value_.L.possibly_circular_dependent_sibling_types>
    },
    parameters: {
        readonly 'globals': Value_.P.globals
        readonly 'imports': Value_.P.imports
    },
) => Value_.O

export namespace Module_ {
    
    export type I = i_unresolved.Module
    
    export type O = i_resolved.Module
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_types = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_types = i_resolved.Modules_.D
        
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

export type Module_ = (
    context: Module_.I,
    abort: _pi.Abort<Module_.E>,
    lookups: {
        readonly 'noncircular sibling types': _pi.Acyclic_Lookup<Module_.L.noncircular_sibling_types>
        readonly 'possibly circular dependent sibling types': _pi.Cyclic_Lookup<Module_.L.possibly_circular_dependent_sibling_types>
    },
    parameters: {
        readonly 'globals': Module_.P.globals
        readonly 'imports': Module_.P.imports
    },
) => Module_.O

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
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schemas_.L.sibling_schemas>
    },
    parameters: null,
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
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schema_Tree_.L.sibling_schemas>
    },
    parameters: null,
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
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Schema_.L.sibling_schemas>
    },
    parameters: null,
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
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    lookups: {
        readonly 'sibling schemas': _pi.Stack_Lookup<Imports_.L.sibling_schemas>
    },
    parameters: null,
) => Imports_.O

export namespace Modules_ {
    
    export type I = i_unresolved.Modules
    
    export type O = i_resolved.Modules
    
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

export type Modules_ = (
    context: Modules_.I,
    abort: _pi.Abort<Modules_.E>,
    lookups: null,
    parameters: {
        readonly 'globals': Modules_.P.globals
        readonly 'imports': Modules_.P.imports
    },
) => Modules_.O

export { 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Group_ as Group, 
    Dictionary_ as Dictionary, 
    Value_ as Value, 
    Module_ as Module, 
    Schemas_ as Schemas, 
    Schema_Tree_ as Schema_Tree, 
    Schema_ as Schema, 
    Imports_ as Imports, 
    Modules_ as Modules, 
}
