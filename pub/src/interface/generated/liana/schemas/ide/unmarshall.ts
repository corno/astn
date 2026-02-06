    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_generic from "liana-core/dist/interface/to_be_generated/unmarshall"
    
    import * as i_out from "./data"
    
    import * as i_in from "astn-core/dist/interface/generated/liana/schemas/parse_tree/data"
    
    export namespace Text_Edits_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Text_Edits
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Text_Edits_ = (
        context: Text_Edits_.I,
        abort: _pi.Abort<Text_Edits_.E>,
    ) => Text_Edits_.O
    
    export namespace Relative_Range_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Relative_Range
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Relative_Range_ = (
        context: Relative_Range_.I,
        abort: _pi.Abort<Relative_Range_.E>,
    ) => Relative_Range_.O
    
    export namespace ID_Value_Pairs_To_Be_Sorted_ {
        
        export type I = i_in.Value
        
        export type O = i_out.ID_Value_Pairs_To_Be_Sorted
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type ID_Value_Pairs_To_Be_Sorted_ = (
        context: ID_Value_Pairs_To_Be_Sorted_.I,
        abort: _pi.Abort<ID_Value_Pairs_To_Be_Sorted_.E>,
    ) => ID_Value_Pairs_To_Be_Sorted_.O
    
    export namespace Relative_Location_ {
        
        export type I = i_in.Value
        
        export type O = i_out.Relative_Location
        
        export type E = i_generic.Error
        
        export namespace P {
            
        }
        
    }
    
    export type Relative_Location_ = (
        context: Relative_Location_.I,
        abort: _pi.Abort<Relative_Location_.E>,
    ) => Relative_Location_.O
    
    export { 
        Text_Edits_ as Text_Edits, 
        Relative_Range_ as Relative_Range, 
        ID_Value_Pairs_To_Be_Sorted_ as ID_Value_Pairs_To_Be_Sorted, 
        Relative_Location_ as Relative_Location, 
    }
