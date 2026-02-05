    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_in from "./data/resolved"
    
    export namespace Schema_Tree_ {
        
        export type I = i_in.Schema_Tree
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Schema_Tree_ = (
        context: Schema_Tree_.I,
    ) => Schema_Tree_.O
    
    export namespace Schemas_ {
        
        export type I = i_in.Schemas
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Schemas_ = (
        context: Schemas_.I,
    ) => Schemas_.O
    
    export namespace Schema_ {
        
        export type I = i_in.Schema
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Schema_ = (
        context: Schema_.I,
    ) => Schema_.O
    
    export namespace Imports_ {
        
        export type I = i_in.Imports
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Imports_ = (
        context: Imports_.I,
    ) => Imports_.O
    
    export namespace Globals_ {
        
        export type I = i_in.Globals
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Globals_ = (
        context: Globals_.I,
    ) => Globals_.O
    
    export namespace Modules_ {
        
        export type I = i_in.Modules
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Modules_ = (
        context: Modules_.I,
    ) => Modules_.O
    
    export namespace Value_ {
        
        export type I = i_in.Value
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Value_ = (
        context: Value_.I,
    ) => Value_.O
    
    export namespace Text_Type_ {
        
        export type I = i_in.Text_Type
        
        export type O = string
        
        export namespace P {
            
        }
        
    }
    
    export type Text_Type_ = (
        context: Text_Type_.I,
    ) => Text_Type_.O
    
    export { 
        Schema_Tree_ as Schema_Tree, 
        Schemas_ as Schemas, 
        Schema_ as Schema, 
        Imports_ as Imports, 
        Globals_ as Globals, 
        Modules_ as Modules, 
        Value_ as Value, 
        Text_Type_ as Text_Type, 
    }
