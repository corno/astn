
import * as _pi from "pareto-core-interface"

import * as i_location__ from "../../../core/location"

import * as i_imports_token from "../../token/data_types/source"

export namespace Structural_Token_ {
    
    export type trailing_trivia = i_imports_token.Trivia
    
    export type range = i_imports_token.Range
    
}

export type Structural_Token_ = {
    readonly 'trailing trivia': Structural_Token_.trailing_trivia
    readonly 'range': Structural_Token_.range
}

export namespace String_ {
    
    export type trailing_trivia = i_imports_token.Trivia
    
    export type range = i_imports_token.Range
    
    export type value = string
    
    export type _type = i_imports_token.String_Type
    
}

export type String_ = {
    readonly 'trailing trivia': String_.trailing_trivia
    readonly 'range': String_.range
    readonly 'value': String_.value
    readonly 'type': String_._type
}

export namespace Key_Value_Pairs_ {
    
    export namespace L {
        
        export type key = String_
        
        export namespace value {
            
            export namespace O {
                
                export type $cl_ = Structural_Token_
                
                export type value = Value_
                
            }
            
            export type O = {
                readonly ':': O.$cl_
                readonly 'value': O.value
            }
            
        }
        
        export type value = _pi.Optional_Value<value.O>
        
    }
    
    export type L = {
        readonly 'key': L.key
        readonly 'value': L.value
    }
    
}

export type Key_Value_Pairs_ = _pi.List<Key_Value_Pairs_.L>

export namespace Elements_ {
    
    export namespace L {
        
        export type value = Value_
        
    }
    
    export type L = {
        readonly 'value': L.value
    }
    
}

export type Elements_ = _pi.List<Elements_.L>

export namespace Concrete_Value_ {
    
    export namespace indexed_collection {
        
        export namespace dictionary {
            
            export type $co_ = Structural_Token_
            
            export type entries = Key_Value_Pairs_
            
            export type $cc_ = Structural_Token_
            
        }
        
        export type dictionary = {
            readonly '{': dictionary.$co_
            readonly 'entries': dictionary.entries
            readonly '}': dictionary.$cc_
        }
        
        export namespace verbose_group {
            
            export type $po_ = Structural_Token_
            
            export type entries = Key_Value_Pairs_
            
            export type $pc_ = Structural_Token_
            
        }
        
        export type verbose_group = {
            readonly '(': verbose_group.$po_
            readonly 'entries': verbose_group.entries
            readonly ')': verbose_group.$pc_
        }
        
    }
    
    export type indexed_collection = 
        | readonly ['dictionary', indexed_collection.dictionary]
        | readonly ['verbose group', indexed_collection.verbose_group]
    
    export namespace not_set {
        
        export type $ti_ = Structural_Token_
        
    }
    
    export type not_set = {
        readonly '~': not_set.$ti_
    }
    
    export namespace ordered_collection {
        
        export namespace list {
            
            export type $bo_ = Structural_Token_
            
            export type elements = Elements_
            
            export type $bc_ = Structural_Token_
            
        }
        
        export type list = {
            readonly '[': list.$bo_
            readonly 'elements': list.elements
            readonly ']': list.$bc_
        }
        
        export namespace concise_group {
            
            export type $st_ = Structural_Token_
            
            export type elements = Elements_
            
            export type $gt_ = Structural_Token_
            
        }
        
        export type concise_group = {
            readonly '<': concise_group.$st_
            readonly 'elements': concise_group.elements
            readonly '>': concise_group.$gt_
        }
        
    }
    
    export type ordered_collection = 
        | readonly ['list', ordered_collection.list]
        | readonly ['concise group', ordered_collection.concise_group]
    
    export namespace set_optional_value {
        
        export type $sr_ = Structural_Token_
        
        export type value = Value_
        
    }
    
    export type set_optional_value = {
        readonly '*': set_optional_value.$sr_
        readonly 'value': set_optional_value.value
    }
    
    export namespace state {
        
        export type $vb_ = Structural_Token_
        
        export namespace status {
            
            export namespace missing_data {
                
                export type $ha_ = Structural_Token_
                
            }
            
            export type missing_data = {
                readonly '#': missing_data.$ha_
            }
            
            export namespace _set {
                
                export type state = String_
                
                export type value = Value_
                
            }
            
            export type _set = {
                readonly 'state': _set.state
                readonly 'value': _set.value
            }
            
        }
        
        export type status = 
            | readonly ['missing data', status.missing_data]
            | readonly ['set', status._set]
        
    }
    
    export type state = {
        readonly '|': state.$vb_
        readonly 'status': state.status
    }
    
    export type text = String_
    
}

export type Concrete_Value_ = 
    | readonly ['indexed collection', Concrete_Value_.indexed_collection]
    | readonly ['not set', Concrete_Value_.not_set]
    | readonly ['ordered collection', Concrete_Value_.ordered_collection]
    | readonly ['set optional value', Concrete_Value_.set_optional_value]
    | readonly ['state', Concrete_Value_.state]
    | readonly ['text', Concrete_Value_.text]

export namespace Value_ {
    
    export namespace _type {
        
        export type concrete = Concrete_Value_
        
        export namespace include {
            
            export type $at_ = Structural_Token_
            
            export type path = String_
            
        }
        
        export type include = {
            readonly '@': include.$at_
            readonly 'path': include.path
        }
        
        export namespace missing_data {
            
            export type $ha_ = Structural_Token_
            
        }
        
        export type missing_data = {
            readonly '#': missing_data.$ha_
        }
        
    }
    
    export type _type = 
        | readonly ['concrete', _type.concrete]
        | readonly ['include', _type.include]
        | readonly ['missing data', _type.missing_data]
    
}

export type Value_ = {
    readonly 'type': Value_._type
}

export type Content_ = Value_

export namespace Document_ {
    
    export namespace header {
        
        export namespace O {
            
            export type $ex_ = Structural_Token_
            
            export type value = Value_
            
        }
        
        export type O = {
            readonly '!': O.$ex_
            readonly 'value': O.value
        }
        
    }
    
    export type header = _pi.Optional_Value<header.O>
    
    export type content = Content_
    
}

export type Document_ = {
    readonly 'header': Document_.header
    readonly 'content': Document_.content
}

export { 
    Structural_Token_ as Structural_Token, 
    String_ as String, 
    Key_Value_Pairs_ as Key_Value_Pairs, 
    Elements_ as Elements, 
    Concrete_Value_ as Concrete_Value, 
    Value_ as Value, 
    Content_ as Content, 
    Document_ as Document, 
}
