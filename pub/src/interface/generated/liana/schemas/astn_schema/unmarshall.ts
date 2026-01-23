
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data/unresolved"

import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"

export namespace Schemas_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schemas
    
    export namespace P {
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
) => Schemas_.O

export namespace Text_Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Text_Type
    
    export namespace P {
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Globals
    
    export namespace P {
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
) => Globals_.O

export namespace Type_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Type
    
    export namespace P {
        
    }
    
}

export type Type_ = (
    context: Type_.I,
) => Type_.O

export namespace Types_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Types
    
    export namespace P {
        
    }
    
}

export type Types_ = (
    context: Types_.I,
) => Types_.O

export namespace Schema_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema
    
    export namespace P {
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
) => Schema_.O

export namespace Schema_Tree_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Schema_Tree
    
    export namespace P {
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
) => Schema_Tree_.O

export namespace Imports_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Imports
    
    export namespace P {
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
) => Imports_.O

export namespace Dictionary_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Dictionary
    
    export namespace P {
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
) => Dictionary_.O

export namespace Group_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Group
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    context: Group_.I,
) => Group_.O

export namespace Type_Node_ {
    
    export type I = i_in.Value
    
    export type O = i_out.Type_Node
    
    export namespace P {
        
    }
    
}

export type Type_Node_ = (
    context: Type_Node_.I,
) => Type_Node_.O

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
