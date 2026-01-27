
import * as _pi from "pareto-core/dist/interface"

import * as i__location from "../../generic/location"

export namespace Relative_Location_ {
    
    export type line = number
    
    export type column = number
    
}

export type Relative_Location_ = {
    readonly 'line': Relative_Location_.line
    readonly 'column': Relative_Location_.column
}

export namespace Relative_Range_ {
    
    export type start = Relative_Location_
    
    export type end = Relative_Location_
    
}

export type Relative_Range_ = {
    readonly 'start': Relative_Range_.start
    readonly 'end': Relative_Range_.end
}

export namespace Text_Edits_ {
    
    export namespace L {
        
        export namespace insert {
            
            export type location = Relative_Location_
            
            export type text = string
            
        }
        
        export type insert = {
            readonly 'location': insert.location
            readonly 'text': insert.text
        }
        
        export namespace replace {
            
            export type range = Relative_Range_
            
            export type text = string
            
        }
        
        export type replace = {
            readonly 'range': replace.range
            readonly 'text': replace.text
        }
        
        export namespace delete_ {
            
            export type range = Relative_Range_
            
        }
        
        export type delete_ = {
            readonly 'range': delete_.range
        }
        
    }
    
    export type L = 
        | readonly ['insert', L.insert]
        | readonly ['replace', L.replace]
        | readonly ['delete', L.delete_]
    
}

export type Text_Edits_ = _pi.List<Text_Edits_.L>

export namespace ID_Value_Pairs_To_Be_Sorted_ {
    
    export type D = string
    
}

export type ID_Value_Pairs_To_Be_Sorted_ = _pi.Dictionary<ID_Value_Pairs_To_Be_Sorted_.D>

export { 
    Relative_Location_ as Relative_Location, 
    Relative_Range_ as Relative_Range, 
    Text_Edits_ as Text_Edits, 
    ID_Value_Pairs_To_Be_Sorted_ as ID_Value_Pairs_To_Be_Sorted, 
}
