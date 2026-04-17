
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
    
    export namespace data {
        
        export namespace missing {
            
            export type $ha_ = Token_Trivia_
            
        }
        
        export type missing = {
            readonly '#': missing.$ha_
        }
        
        export namespace include {
            
            export type $at_ = Token_Trivia_
            
            export type path = string
            
        }
        
        export type include = {
            readonly '@': include.$at_
            readonly 'path': include.path
        }
        
        export namespace concrete {
            
            export namespace type_ {
                
                export namespace dictionary {
                    
                    export type $co_ = Token_Trivia_
                    
                    export type entries = ID_Value_Pairs_
                    
                    export type $cc_ = Token_Trivia_
                    
                }
                
                export type dictionary = {
                    readonly '{': dictionary.$co_
                    readonly 'entries': dictionary.entries
                    readonly '}': dictionary.$cc_
                }
                
                export namespace group {
                    
                    export namespace concise {
                        
                        export type $st_ = Token_Trivia_
                        
                        export type properties = Items_
                        
                        export type $gt_ = Token_Trivia_
                        
                    }
                    
                    export type concise = {
                        readonly '<': concise.$st_
                        readonly 'properties': concise.properties
                        readonly '>': concise.$gt_
                    }
                    
                    export namespace verbose {
                        
                        export type $po_ = Token_Trivia_
                        
                        export type properties = ID_Value_Pairs_
                        
                        export type $pc_ = Token_Trivia_
                        
                    }
                    
                    export type verbose = {
                        readonly '(': verbose.$po_
                        readonly 'properties': verbose.properties
                        readonly ')': verbose.$pc_
                    }
                    
                }
                
                export type group = 
                    | readonly ['concise', group.concise]
                    | readonly ['verbose', group.verbose]
                
                export namespace list {
                    
                    export type $bo_ = Token_Trivia_
                    
                    export type items = Items_
                    
                    export type $bc_ = Token_Trivia_
                    
                }
                
                export type list = {
                    readonly '[': list.$bo_
                    readonly 'items': list.items
                    readonly ']': list.$bc_
                }
                
                export namespace nothing {
                    
                    export type $ti_ = Token_Trivia_
                    
                }
                
                export type nothing = {
                    readonly '~': nothing.$ti_
                }
                
                export namespace optional {
                    
                    export namespace not_set {
                        
                        export type $_ = Token_Trivia_
                        
                    }
                    
                    export type not_set = {
                        readonly '_': not_set.$_
                    }
                    
                    export namespace set_ {
                        
                        export type $sr_ = Token_Trivia_
                        
                        export type value = Value_
                        
                    }
                    
                    export type set_ = {
                        readonly '*': set_.$sr_
                        readonly 'value': set_.value
                    }
                    
                }
                
                export type optional = 
                    | readonly ['not set', optional.not_set]
                    | readonly ['set', optional.set_]
                
                export namespace state {
                    
                    export type $vb_ = Token_Trivia_
                    
                    export namespace status {
                        
                        export namespace missing {
                            
                            export type $ha_ = Token_Trivia_
                            
                        }
                        
                        export type missing = {
                            readonly '#': missing.$ha_
                        }
                        
                        export namespace set_ {
                            
                            export type option = string
                            
                            export type value = Value_
                            
                        }
                        
                        export type set_ = {
                            readonly 'option': set_.option
                            readonly 'value': set_.value
                        }
                        
                    }
                    
                    export type status = 
                        | readonly ['missing', status.missing]
                        | readonly ['set', status.set_]
                    
                }
                
                export type state = {
                    readonly '|': state.$vb_
                    readonly 'status': state.status
                }
                
                export namespace text {
                    
                    export type trivia = Token_Trivia_
                    
                    export type value = string
                    
                    export namespace delimiter {
                        
                        export type none = null
                        
                        export type quote = null
                        
                        export type apostrophe = null
                        
                    }
                    
                    export type delimiter = 
                        | readonly ['none', delimiter.none]
                        | readonly ['quote', delimiter.quote]
                        | readonly ['apostrophe', delimiter.apostrophe]
                    
                }
                
                export type text = {
                    readonly 'trivia': text.trivia
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
    readonly 'data': Value_.data
}

export namespace Token_Trivia_ {
    
    export namespace comments {
        
        export namespace L {
            
            export type content = string
            
            export namespace type_ {
                
                export type line = null
                
                export type block = null
                
            }
            
            export type type_ = 
                | readonly ['line', type_.line]
                | readonly ['block', type_.block]
            
        }
        
        export type L = {
            readonly 'content': L.content
            readonly 'type': L.type_
        }
        
    }
    
    export type comments = _pi.List<comments.L>
    
}

export type Token_Trivia_ = {
    readonly 'comments': Token_Trivia_.comments
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
    Token_Trivia_ as Token_Trivia, 
    ID_Value_Pairs_ as ID_Value_Pairs, 
    Items_ as Items, 
}
