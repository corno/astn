
import * as _pi from 'pareto-core/dist/interface'

import * as i_generic from "liana-core/dist/interface/to_be_generated/deserialize"

import * as i_in from "pareto-fountain-pen/dist/interface/to_be_generated/list_of_characters"

import * as i_out from "./data"

export namespace Text_Edits_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Text_Edits
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Text_Edits_ = (
    context: Text_Edits_.I,
    abort: _pi.Abort<Text_Edits_.E>,
    parameters: {
        readonly 'document resource identifier': Text_Edits_.P.document_resource_identifier
        readonly 'tab size': Text_Edits_.P.tab_size
    },
) => Text_Edits_.O

export namespace Relative_Range_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Relative_Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Relative_Range_ = (
    context: Relative_Range_.I,
    abort: _pi.Abort<Relative_Range_.E>,
    parameters: {
        readonly 'document resource identifier': Relative_Range_.P.document_resource_identifier
        readonly 'tab size': Relative_Range_.P.tab_size
    },
) => Relative_Range_.O

export namespace ID_Value_Pairs_To_Be_Sorted_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.ID_Value_Pairs_To_Be_Sorted
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type ID_Value_Pairs_To_Be_Sorted_ = (
    context: ID_Value_Pairs_To_Be_Sorted_.I,
    abort: _pi.Abort<ID_Value_Pairs_To_Be_Sorted_.E>,
    parameters: {
        readonly 'document resource identifier': ID_Value_Pairs_To_Be_Sorted_.P.document_resource_identifier
        readonly 'tab size': ID_Value_Pairs_To_Be_Sorted_.P.tab_size
    },
) => ID_Value_Pairs_To_Be_Sorted_.O

export namespace Relative_Location_ {
    
    export type I = i_in.List_of_Characters
    
    export type O = i_out.Relative_Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
        export type document_resource_identifier = string
        
        export type tab_size = number
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
    abort: _pi.Abort<Relative_Location_.E>,
    parameters: {
        readonly 'document resource identifier': Relative_Location_.P.document_resource_identifier
        readonly 'tab size': Relative_Location_.P.tab_size
    },
) => Relative_Location_.O

export { 
    Text_Edits_ as Text_Edits, 
    Relative_Range_ as Relative_Range, 
    ID_Value_Pairs_To_Be_Sorted_ as ID_Value_Pairs_To_Be_Sorted, 
    Relative_Location_ as Relative_Location, 
}
