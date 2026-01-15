
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

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
            
            export namespace _type {
                
                export namespace dictionary {
                    
                    export namespace D {
                        
                        export type O = Value_
                        
                    }
                    
                    export type D = _pi.Optional_Value<D.O>
                    
                }
                
                export type dictionary = _pi.Dictionary<dictionary.D>
                
                export namespace group {
                    
                    export namespace concise {
                        
                        export type L = Value_
                        
                    }
                    
                    export type concise = _pi.List<concise.L>
                    
                    export namespace verbose {
                        
                        export namespace D {
                            
                            export type O = Value_
                            
                        }
                        
                        export type D = _pi.Optional_Value<D.O>
                        
                    }
                    
                    export type verbose = _pi.Dictionary<verbose.D>
                    
                }
                
                export type group = 
                    | readonly ['concise', group.concise]
                    | readonly ['verbose', group.verbose]
                
                export namespace list {
                    
                    export type L = Value_
                    
                }
                
                export type list = _pi.List<list.L>
                
                export type nothing = null
                
                export namespace optional {
                    
                    export type not_set = null
                    
                    export type _set = Value_
                    
                }
                
                export type optional = 
                    | readonly ['not set', optional.not_set]
                    | readonly ['set', optional._set]
                
                export namespace state_group {
                    
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
                
                export type state_group = 
                    | readonly ['missing data', state_group.missing_data]
                    | readonly ['set', state_group._set]
                
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
            
            export type _type = 
                | readonly ['dictionary', _type.dictionary]
                | readonly ['group', _type.group]
                | readonly ['list', _type.list]
                | readonly ['nothing', _type.nothing]
                | readonly ['optional', _type.optional]
                | readonly ['state group', _type.state_group]
                | readonly ['text', _type.text]
            
        }
        
        export type concrete = {
            readonly 'type': concrete._type
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

export { 
    Value_ as Value, 
    Document_ as Document, 
}
