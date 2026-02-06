    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"
    
    import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"
    
    import * as i_out from "./data/unresolved"
    
    export namespace Schema_Tree_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Schema_Tree
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Schema_Tree_ = (
        context: Schema_Tree_.I,
        abort: _pi.Abort<Schema_Tree_.E>,
        parameters: {
            readonly 'document resource identifier': Schema_Tree_.P.document_resource_identifier
            readonly 'tab size': Schema_Tree_.P.tab_size
        },
    ) => Schema_Tree_.O
    
    export namespace Schemas_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Schemas
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Schemas_ = (
        context: Schemas_.I,
        abort: _pi.Abort<Schemas_.E>,
        parameters: {
            readonly 'document resource identifier': Schemas_.P.document_resource_identifier
            readonly 'tab size': Schemas_.P.tab_size
        },
    ) => Schemas_.O
    
    export namespace Schema_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Schema
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Schema_ = (
        context: Schema_.I,
        abort: _pi.Abort<Schema_.E>,
        parameters: {
            readonly 'document resource identifier': Schema_.P.document_resource_identifier
            readonly 'tab size': Schema_.P.tab_size
        },
    ) => Schema_.O
    
    export namespace Imports_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Imports
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Imports_ = (
        context: Imports_.I,
        abort: _pi.Abort<Imports_.E>,
        parameters: {
            readonly 'document resource identifier': Imports_.P.document_resource_identifier
            readonly 'tab size': Imports_.P.tab_size
        },
    ) => Imports_.O
    
    export namespace Globals_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Globals
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Globals_ = (
        context: Globals_.I,
        abort: _pi.Abort<Globals_.E>,
        parameters: {
            readonly 'document resource identifier': Globals_.P.document_resource_identifier
            readonly 'tab size': Globals_.P.tab_size
        },
    ) => Globals_.O
    
    export namespace Modules_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Modules
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Modules_ = (
        context: Modules_.I,
        abort: _pi.Abort<Modules_.E>,
        parameters: {
            readonly 'document resource identifier': Modules_.P.document_resource_identifier
            readonly 'tab size': Modules_.P.tab_size
        },
    ) => Modules_.O
    
    export namespace Value_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Value
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Value_ = (
        context: Value_.I,
        abort: _pi.Abort<Value_.E>,
        parameters: {
            readonly 'document resource identifier': Value_.P.document_resource_identifier
            readonly 'tab size': Value_.P.tab_size
        },
    ) => Value_.O
    
    export namespace Text_Type_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.Text_Type
        
        export type E = i_generic.Error
        
        export namespace P {
            
            export type document_resource_identifier = string
            
            export type tab_size = number
            
        }
        
    }
    
    export type Text_Type_ = (
        context: Text_Type_.I,
        abort: _pi.Abort<Text_Type_.E>,
        parameters: {
            readonly 'document resource identifier': Text_Type_.P.document_resource_identifier
            readonly 'tab size': Text_Type_.P.tab_size
        },
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
