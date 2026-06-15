
import * as p_i from 'pareto-core/dist/__internals/Abort'
import * as p_di from 'pareto-core/dist/data/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/resolve"

import * as i_resolved from "../../../data/resolved"

import * as i_unresolved from "../../../data/unresolved"

export namespace Text_Type_ {
    
    export type I = i_unresolved.Text_Type
    
    export type O = i_resolved.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: p_i.Abort<Text_Type_.E>,
    lookups: symbol,
    parameters: symbol,
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
    abort: p_i.Abort<Globals_.E>,
    lookups: symbol,
    parameters: symbol,
) => Globals_.O

export namespace Value_ {
    
    export type I = i_unresolved.Value
    
    export type O = i_resolved.Value
    
    export type E = i_generic.Error
    
    export namespace L {
        
        export type noncircular_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace L {
        
        export type possibly_circular_dependent_sibling_modules = i_resolved.Modules_.D
        
    }
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = p_di.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = p_di.Optional_Value<imports.O>
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: p_i.Abort<Value_.E>,
    lookups: {
        readonly 'noncircular sibling modules': p_di.static_lookup.Acyclic<Value_.L.noncircular_sibling_modules>
        readonly 'possibly circular dependent sibling modules': p_di.static_lookup.Cyclic<Value_.L.possibly_circular_dependent_sibling_modules>
    },
    parameters: {
        readonly 'globals': Value_.P.globals
        readonly 'imports': Value_.P.imports
    },
) => Value_.O

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
    abort: p_i.Abort<Schemas_.E>,
    lookups: {
        readonly 'sibling schemas': p_di.static_lookup.Stack<Schemas_.L.sibling_schemas>
    },
    parameters: symbol,
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
    abort: p_i.Abort<Schema_Tree_.E>,
    lookups: {
        readonly 'sibling schemas': p_di.static_lookup.Stack<Schema_Tree_.L.sibling_schemas>
    },
    parameters: symbol,
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
    abort: p_i.Abort<Schema_.E>,
    lookups: {
        readonly 'sibling schemas': p_di.static_lookup.Stack<Schema_.L.sibling_schemas>
    },
    parameters: symbol,
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
    abort: p_i.Abort<Imports_.E>,
    lookups: {
        readonly 'sibling schemas': p_di.static_lookup.Stack<Imports_.L.sibling_schemas>
    },
    parameters: symbol,
) => Imports_.O

export namespace Modules_ {
    
    export type I = i_unresolved.Modules
    
    export type O = i_resolved.Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export namespace globals {
            
            export type O = i_resolved.Globals_
            
        }
        
        export type globals = p_di.Optional_Value<globals.O>
        
        export namespace imports {
            
            export type O = i_resolved.Imports_
            
        }
        
        export type imports = p_di.Optional_Value<imports.O>
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
    abort: p_i.Abort<Modules_.E>,
    lookups: symbol,
    parameters: {
        readonly 'globals': Modules_.P.globals
        readonly 'imports': Modules_.P.imports
    },
) => Modules_.O

export { 
    Text_Type_ as Text_Type, 
    Globals_ as Globals, 
    Value_ as Value, 
    Schemas_ as Schemas, 
    Schema_Tree_ as Schema_Tree, 
    Schema_ as Schema, 
    Imports_ as Imports, 
    Modules_ as Modules, 
}
