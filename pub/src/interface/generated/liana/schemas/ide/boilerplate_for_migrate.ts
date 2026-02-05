    
    import * as _pi from "pareto-core/dist/interface"
    
    import * as i_out from "./data"
    
    import * as i_in from "./data"
    
    export namespace Text_Edits_ {
        
        export type I = i_in.Text_Edits
        
        export type O = i_out.Text_Edits
        
        export namespace P {
            
        }
        
    }
    
    export type Text_Edits_ = (
        context: Text_Edits_.I,
    ) => Text_Edits_.O
    
    export namespace Relative_Range_ {
        
        export type I = i_in.Relative_Range
        
        export type O = i_out.Relative_Range
        
        export namespace P {
            
        }
        
    }
    
    export type Relative_Range_ = (
        context: Relative_Range_.I,
    ) => Relative_Range_.O
    
    export namespace ID_Value_Pairs_To_Be_Sorted_ {
        
        export type I = i_in.ID_Value_Pairs_To_Be_Sorted
        
        export type O = i_out.ID_Value_Pairs_To_Be_Sorted
        
        export namespace P {
            
        }
        
    }
    
    export type ID_Value_Pairs_To_Be_Sorted_ = (
        context: ID_Value_Pairs_To_Be_Sorted_.I,
    ) => ID_Value_Pairs_To_Be_Sorted_.O
    
    export namespace Relative_Location_ {
        
        export type I = i_in.Relative_Location
        
        export type O = i_out.Relative_Location
        
        export namespace P {
            
        }
        
    }
    
    export type Relative_Location_ = (
        context: Relative_Location_.I,
    ) => Relative_Location_.O
    
    export { 
        Text_Edits_ as Text_Edits, 
        Relative_Range_ as Relative_Range, 
        ID_Value_Pairs_To_Be_Sorted_ as ID_Value_Pairs_To_Be_Sorted, 
        Relative_Location_ as Relative_Location, 
    }
