
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data/unresolved"

export namespace Schemas_ {
    
    export type I = string
    
    export type O = i_out.Schemas
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Schemas_ = (
    context: Schemas_.I,
    abort: _pi.Abort<Schemas_.E>,
    parameters: {
        readonly 'document resource identifier': Schemas_.P.document_resource_identifier
        readonly 'indentation': Schemas_.P.indentation
    },
) => Schemas_.O

export namespace Text_Type_ {
    
    export type I = string
    
    export type O = i_out.Text_Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Text_Type_ = (
    context: Text_Type_.I,
    abort: _pi.Abort<Text_Type_.E>,
    parameters: {
        readonly 'document resource identifier': Text_Type_.P.document_resource_identifier
        readonly 'indentation': Text_Type_.P.indentation
    },
) => Text_Type_.O

export namespace Globals_ {
    
    export type I = string
    
    export type O = i_out.Globals
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Globals_ = (
    context: Globals_.I,
    abort: _pi.Abort<Globals_.E>,
    parameters: {
        readonly 'document resource identifier': Globals_.P.document_resource_identifier
        readonly 'indentation': Globals_.P.indentation
    },
) => Globals_.O

export namespace Type_ {
    
    export type I = string
    
    export type O = i_out.Type
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_ = (
    context: Type_.I,
    abort: _pi.Abort<Type_.E>,
    parameters: {
        readonly 'document resource identifier': Type_.P.document_resource_identifier
        readonly 'indentation': Type_.P.indentation
    },
) => Type_.O

export namespace Types_ {
    
    export type I = string
    
    export type O = i_out.Types
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Types_ = (
    context: Types_.I,
    abort: _pi.Abort<Types_.E>,
    parameters: {
        readonly 'document resource identifier': Types_.P.document_resource_identifier
        readonly 'indentation': Types_.P.indentation
    },
) => Types_.O

export namespace Schema_ {
    
    export type I = string
    
    export type O = i_out.Schema
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Schema_ = (
    context: Schema_.I,
    abort: _pi.Abort<Schema_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_.P.document_resource_identifier
        readonly 'indentation': Schema_.P.indentation
    },
) => Schema_.O

export namespace Schema_Tree_ {
    
    export type I = string
    
    export type O = i_out.Schema_Tree
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Schema_Tree_ = (
    context: Schema_Tree_.I,
    abort: _pi.Abort<Schema_Tree_.E>,
    parameters: {
        readonly 'document resource identifier': Schema_Tree_.P.document_resource_identifier
        readonly 'indentation': Schema_Tree_.P.indentation
    },
) => Schema_Tree_.O

export namespace Imports_ {
    
    export type I = string
    
    export type O = i_out.Imports
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Imports_ = (
    context: Imports_.I,
    abort: _pi.Abort<Imports_.E>,
    parameters: {
        readonly 'document resource identifier': Imports_.P.document_resource_identifier
        readonly 'indentation': Imports_.P.indentation
    },
) => Imports_.O

export namespace Dictionary_ {
    
    export type I = string
    
    export type O = i_out.Dictionary
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Dictionary_ = (
    context: Dictionary_.I,
    abort: _pi.Abort<Dictionary_.E>,
    parameters: {
        readonly 'document resource identifier': Dictionary_.P.document_resource_identifier
        readonly 'indentation': Dictionary_.P.indentation
    },
) => Dictionary_.O

export namespace Group_ {
    
    export type I = string
    
    export type O = i_out.Group
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Group_ = (
    context: Group_.I,
    abort: _pi.Abort<Group_.E>,
    parameters: {
        readonly 'document resource identifier': Group_.P.document_resource_identifier
        readonly 'indentation': Group_.P.indentation
    },
) => Group_.O

export namespace Type_Node_ {
    
    export type I = string
    
    export type O = i_out.Type_Node
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type indentation = number
        
    }
    
}

export type Type_Node_ = (
    context: Type_Node_.I,
    abort: _pi.Abort<Type_Node_.E>,
    parameters: {
        readonly 'document resource identifier': Type_Node_.P.document_resource_identifier
        readonly 'indentation': Type_Node_.P.indentation
    },
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
