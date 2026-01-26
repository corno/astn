
import * as _pi from "pareto-core/dist/interface"

import * as i_generic from "../../generic/deserialize"

import * as i_out from "./data"

export namespace Relative_Location_ {
    
    export type I = string
    
    export type O = i_out.Relative_Location
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Relative_Location_ = (
    context: Relative_Location_.I,
    abort: _pi.Abort<Relative_Location_.E>,
) => Relative_Location_.O

export namespace Relative_Range_ {
    
    export type I = string
    
    export type O = i_out.Relative_Range
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Relative_Range_ = (
    context: Relative_Range_.I,
    abort: _pi.Abort<Relative_Range_.E>,
) => Relative_Range_.O

export namespace Text_Edits_ {
    
    export type I = string
    
    export type O = i_out.Text_Edits
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Text_Edits_ = (
    context: Text_Edits_.I,
    abort: _pi.Abort<Text_Edits_.E>,
) => Text_Edits_.O

export namespace Key_Value_Pairs_To_Be_Sorted_ {
    
    export type I = string
    
    export type O = i_out.Key_Value_Pairs_To_Be_Sorted
    
    export type E = i_generic.Error
    
    export namespace P {
        
    }
    
}

export type Key_Value_Pairs_To_Be_Sorted_ = (
    context: Key_Value_Pairs_To_Be_Sorted_.I,
    abort: _pi.Abort<Key_Value_Pairs_To_Be_Sorted_.E>,
) => Key_Value_Pairs_To_Be_Sorted_.O

export { 
    Relative_Location_ as Relative_Location, 
    Relative_Range_ as Relative_Range, 
    Text_Edits_ as Text_Edits, 
    Key_Value_Pairs_To_Be_Sorted_ as Key_Value_Pairs_To_Be_Sorted, 
}
