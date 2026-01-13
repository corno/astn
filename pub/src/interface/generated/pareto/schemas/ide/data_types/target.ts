
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

import * as i_imports_token from "../../token/data_types/source"

export namespace Relative_Range_ {
    
    export type start = i_imports_token.Relative_Location
    
    export type end = i_imports_token.Relative_Location
    
}

export type Relative_Range_ = {
    readonly 'start': Relative_Range_.start
    readonly 'end': Relative_Range_.end
}

export namespace Text_Edits_ {
    
    export namespace L {
        
        export namespace insert {
            
            export type location = i_imports_token.Relative_Location
            
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
        
        export namespace _delete {
            
            export type range = Relative_Range_
            
        }
        
        export type _delete = {
            readonly 'range': _delete.range
        }
        
    }
    
    export type L = 
        | readonly ['insert', L.insert]
        | readonly ['replace', L.replace]
        | readonly ['delete', L._delete]
    
}

export type Text_Edits_ = _pi.List<Text_Edits_.L>

export namespace Key_Value_Pairs_To_Be_Sorted_ {
    
    export type D = string
    
}

export type Key_Value_Pairs_To_Be_Sorted_ = _pi.Dictionary<Key_Value_Pairs_To_Be_Sorted_.D>

export { 
    Relative_Range_ as Relative_Range, 
    Text_Edits_ as Text_Edits, 
    Key_Value_Pairs_To_Be_Sorted_ as Key_Value_Pairs_To_Be_Sorted, 
}
