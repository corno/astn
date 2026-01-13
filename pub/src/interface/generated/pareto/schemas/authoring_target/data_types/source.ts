
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

export namespace Value_ {
    
    export namespace _type {
        
        export namespace list {
            
            export type L = Value_
            
        }
        
        export type list = _pi.List<list.L>
        
        export namespace concise_group {
            
            export type L = Value_
            
        }
        
        export type concise_group = _pi.List<concise_group.L>
        
        export namespace dictionary {
            
            export namespace L {
                
                export type key = string
                
                export type value = Value_
                
            }
            
            export type L = {
                readonly 'key': L.key
                readonly 'value': L.value
            }
            
        }
        
        export type dictionary = _pi.List<dictionary.L>
        
        export namespace verbose_group {
            
            export namespace L {
                
                export type key = string
                
                export type value = Value_
                
            }
            
            export type L = {
                readonly 'key': L.key
                readonly 'value': L.value
            }
            
        }
        
        export type verbose_group = _pi.List<verbose_group.L>
        
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
            
            export type missing_data = null
            
            export namespace _set {
                
                export type state = string
                
                export type value = Value_
                
            }
            
            export type _set = {
                readonly 'state': _set.state
                readonly 'value': _set.value
            }
            
        }
        
        export type state = 
            | readonly ['missing data', state.missing_data]
            | readonly ['set', state._set]
        
    }
    
    export type _type = 
        | readonly ['list', _type.list]
        | readonly ['concise group', _type.concise_group]
        | readonly ['dictionary', _type.dictionary]
        | readonly ['verbose group', _type.verbose_group]
        | readonly ['text', _type.text]
        | readonly ['nothing', _type.nothing]
        | readonly ['optional', _type.optional]
        | readonly ['state', _type.state]
    
}

export type Value_ = {
    readonly 'type': Value_._type
}

export type Document_ = Value_

export { 
    Value_ as Value, 
    Document_ as Document, 
}
