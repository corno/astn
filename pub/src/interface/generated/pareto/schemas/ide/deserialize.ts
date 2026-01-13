
import * as _pi from "pareto-core-interface"

import * as i_out from "./data_types/target"

export namespace Relative_Range_ {
    
    export type I = string
    
    export type O = i_out.Relative_Range
    
    export namespace P {
        
    }
    
}

export type Relative_Range_ = (
    $$_: Relative_Range_.I,
) => Relative_Range_.O

export namespace Text_Edits_ {
    
    export type I = string
    
    export type O = i_out.Text_Edits
    
    export namespace P {
        
    }
    
}

export type Text_Edits_ = (
    $$_: Text_Edits_.I,
) => Text_Edits_.O

export namespace Key_Value_Pairs_To_Be_Sorted_ {
    
    export type I = string
    
    export type O = i_out.Key_Value_Pairs_To_Be_Sorted
    
    export namespace P {
        
    }
    
}

export type Key_Value_Pairs_To_Be_Sorted_ = (
    $$_: Key_Value_Pairs_To_Be_Sorted_.I,
) => Key_Value_Pairs_To_Be_Sorted_.O

export { 
    Relative_Range_ as Relative_Range, 
    Text_Edits_ as Text_Edits, 
    Key_Value_Pairs_To_Be_Sorted_ as Key_Value_Pairs_To_Be_Sorted, 
}
