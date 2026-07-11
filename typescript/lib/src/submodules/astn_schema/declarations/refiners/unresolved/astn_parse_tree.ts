
import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "liana-core/interface/data/unmarshall"

import * as i_out from "../../../interface/schemas/unresolved.js"

import * as i_in from "astn-core/interface/data/parse_tree"

export namespace Schema_Tree_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: p_i.Abort<Schema_Tree_.E>,
) => Schema_Tree_.O

export namespace Schemas_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: p_i.Abort<Schemas_.E>,
) => Schemas_.O

export namespace Schema_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: p_i.Abort<Schema_.E>,
) => Schema_.O

export namespace Imports_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: p_i.Abort<Imports_.E>,
) => Imports_.O

export namespace Globals_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: p_i.Abort<Globals_.E>,
) => Globals_.O

export namespace Modules_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Modules
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Modules_ = (
    context: Modules_.I,
    abort: p_i.Abort<Modules_.E>,
) => Modules_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: p_i.Abort<Value_.E>,
) => Value_.O

export namespace Text_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: p_i.Abort<Text_Type_.E>,
) => Text_Type_.O

export type { 
    Schema_Tree_ as Schema_Tree, 
    Schemas_ as Schemas, 
    Schema_ as Schema, 
    Imports_ as Imports, 
    Globals_ as Globals, 
    Modules_ as Modules, 
    Value_ as Value, 
    Text_Type_ as Text_Type, 
}
