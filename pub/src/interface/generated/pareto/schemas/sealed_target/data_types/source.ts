
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

export namespace Value_ {
    
    export namespace list {
        
        export type L = Value_
        
    }
    
    export type list = _pi.List<list.L>
    
    export namespace dictionary {
        
        export type D = Value_
        
    }
    
    export type dictionary = _pi.Dictionary<dictionary.D>
    
    export namespace verbose_group {
        
        export type D = Value_
        
    }
    
    export type verbose_group = _pi.Dictionary<verbose_group.D>
    
    export namespace text {
        
        export type value = string
        
        export namespace delimiter {
            
            export type none = null
            
            export type quote = null
            
            export type backtick = null
            
        }
        
        export type delimiter = 
            | readonly ['none', delimiter.none]
            | readonly ['quote', delimiter.quote]
            | readonly ['backtick', delimiter.backtick]
        
    }
    
    export type text = {
        readonly 'value': text.value
        readonly 'delimiter': text.delimiter
    }
    
    export type nothing = null
    
    export namespace optional {
        
        export type not_set = null
        
        export type _set = Value_
        
    }
    
    export type optional = 
        | readonly ['not set', optional.not_set]
        | readonly ['set', optional._set]
    
    export namespace state {
        
        export type state = string
        
        export type value = Value_
        
    }
    
    export type state = {
        readonly 'state': state.state
        readonly 'value': state.value
    }
    
}

export type Value_ = 
    | readonly ['list', Value_.list]
    | readonly ['dictionary', Value_.dictionary]
    | readonly ['verbose group', Value_.verbose_group]
    | readonly ['text', Value_.text]
    | readonly ['nothing', Value_.nothing]
    | readonly ['optional', Value_.optional]
    | readonly ['state', Value_.state]

export type Document_ = Value_

export { 
    Value_ as Value, 
    Document_ as Document, 
}
