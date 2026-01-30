
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/unmarshall"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Schemas_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
) => Schemas_.O

export namespace Text_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
) => Globals_.O

export namespace Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Type_ = (
    context: Type_.I,
    abort: _pi.Abort<Type_.E>,
) => Type_.O

export namespace Types_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Types
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Types_ = (
    context: Types_.I,
    abort: _pi.Abort<Types_.E>,
) => Types_.O

export namespace Schema_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
) => Schema_.O

export namespace Schema_Tree_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
) => Schema_Tree_.O

export namespace Imports_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
) => Imports_.O

export namespace Dictionary_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Dictionary
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
) => Dictionary_.O

export namespace Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
) => Group_.O

export namespace Value_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Value
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Value_ = (
    context: Value_.I,
    abort: _pi.Abort<Value_.E>,
) => Value_.O

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
