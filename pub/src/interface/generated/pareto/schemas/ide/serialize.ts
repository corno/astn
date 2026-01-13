
import * as _pi from "pareto-core-interface"

import * as i_in from "./data_types/source"

export namespace Relative_Range_ {
    
    export type I = i_in.Relative_Range
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Relative_Range_ = (
    $$_: Relative_Range_.I,
) => Relative_Range_.O

export namespace Text_Edits_ {
    
    export type I = i_in.Text_Edits
    
    export type O = string
    
    export namespace P {
        
    }
    
}

export type Text_Edits_ = (
    $$_: Text_Edits_.I,
) => Text_Edits_.O

export namespace Key_Value_Pairs_To_Be_Sorted_ {
    
    export type I = i_in.Key_Value_Pairs_To_Be_Sorted
    
    export type O = string
    
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
