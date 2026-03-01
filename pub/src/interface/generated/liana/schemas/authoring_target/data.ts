
import * as _pi from 'pareto-core/dist/interface'

export namespace Document_ {
    
    export namespace header {
        
        export type O = Value_
        
    }
    
    export type header = _pi.Optional_Value<header.O>
    
    export type content = Value_
    
}

export type Document_ = {
    readonly 'header': Document_.header
    readonly 'content': Document_.content
}

export namespace Value_ {
    
    export namespace metadata {
        
        export namespace comments {
            
            export type L = string
            
        }
        
        export type comments = _pi.List<comments.L>
        
    }
    
    export type metadata = {
        readonly 'comments': metadata.comments
    }
    
    export namespace data {
        
        export type missing = null
        
        export namespace include {
            
            export type path = string
            
        }
        
        export type include = {
            readonly 'path': include.path
        }
        
        export namespace concrete {
            
            export namespace type_ {
                
                export type dictionary = ID_Value_Pairs_
                
                export namespace group {
                    
                    export type concise = Items_
                    
                    export type verbose = ID_Value_Pairs_
                    
                }
                
                export type group = 
                    | readonly ['concise', group.concise]
                    | readonly ['verbose', group.verbose]
                
                export type list = Items_
                
                export type nothing = null
                
                export namespace optional {
                    
                    export type not_set = null
                    
                    export type set_ = Value_
                    
                }
                
                export type optional = 
                    | readonly ['not set', optional.not_set]
                    | readonly ['set', optional.set_]
                
                export namespace state {
                    
                    export type missing = null
                    
                    export namespace set_ {
                        
                        export type option = string
                        
                        export type value = Value_
                        
                    }
                    
                    export type set_ = {
                        readonly 'option': set_.option
                        readonly 'value': set_.value
                    }
                    
                }
                
                export type state = 
                    | readonly ['missing', state.missing]
                    | readonly ['set', state.set_]
                
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
                
            }
            
            export type type_ = 
                | readonly ['dictionary', type_.dictionary]
                | readonly ['group', type_.group]
                | readonly ['list', type_.list]
                | readonly ['nothing', type_.nothing]
                | readonly ['optional', type_.optional]
                | readonly ['state', type_.state]
                | readonly ['text', type_.text]
            
        }
        
        export type concrete = {
            readonly 'type': concrete.type_
        }
        
    }
    
    export type data = 
        | readonly ['missing', data.missing]
        | readonly ['include', data.include]
        | readonly ['concrete', data.concrete]
    
}

export type Value_ = {
    readonly 'metadata': Value_.metadata
    readonly 'data': Value_.data
}

export namespace ID_Value_Pairs_ {
    
    export namespace L {
        
        export type id = string
        
        export namespace value {
            
            export type O = Value_
            
        }
        
        export type value = _pi.Optional_Value<value.O>
        
    }
    
    export type L = {
        readonly 'id': L.id
        readonly 'value': L.value
    }
    
}

export type ID_Value_Pairs_ = _pi.List<ID_Value_Pairs_.L>

export namespace Items_ {
    
    export type L = Value_
    
}

export type Items_ = _pi.List<Items_.L>

export { 
    Document_ as Document, 
    Value_ as Value, 
    ID_Value_Pairs_ as ID_Value_Pairs, 
    Items_ as Items, 
}
