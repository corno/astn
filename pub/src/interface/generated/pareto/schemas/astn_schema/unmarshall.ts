import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "../../core/astn_source"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Schemas = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Schemas<_i_in._T_Range>

export type _T_Text_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Text_Type<_i_in._T_Range>

export type _T_Globals = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Globals<_i_in._T_Range>

export type _T_Type = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type<_i_in._T_Range>

export type _T_Types = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Types<_i_in._T_Range>

export type _T_Schema = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Schema<_i_in._T_Range>

export type _T_Schema_Tree = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Schema_Tree<_i_in._T_Range>

export type _T_Imports = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Imports<_i_in._T_Range>

export type _T_Dictionary = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Dictionary<_i_in._T_Range>

export type _T_Group = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Group<_i_in._T_Range>

export type _T_Type_Node = (
    $$_: _i_in._T_Value,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Type_Node<_i_in._T_Range>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Schemas = _T_Schemas

export type Text_Type = _T_Text_Type

export type Globals = _T_Globals

export type Type = _T_Type

export type Types = _T_Types

export type Schema = _T_Schema

export type Schema_Tree = _T_Schema_Tree

export type Imports = _T_Imports

export type Dictionary = _T_Dictionary

export type Group = _T_Group

export type Type_Node = _T_Type_Node

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Schemas {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schemas<_i_in._T_Range>
}

export namespace _T_Text_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Text_Type<_i_in._T_Range>
}

export namespace _T_Globals {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Globals<_i_in._T_Range>
}

export namespace _T_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type<_i_in._T_Range>
}

export namespace _T_Types {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Types<_i_in._T_Range>
}

export namespace _T_Schema {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema<_i_in._T_Range>
}

export namespace _T_Schema_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema_Tree<_i_in._T_Range>
}

export namespace _T_Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Imports<_i_in._T_Range>
}

export namespace _T_Dictionary {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Dictionary<_i_in._T_Range>
}

export namespace _T_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Group<_i_in._T_Range>
}

export namespace _T_Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Node<_i_in._T_Range>
}

// *** ALIASES FOR NESTED TYPES

export namespace Schemas {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schemas<_i_in._T_Range>
}

export namespace Text_Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Text_Type<_i_in._T_Range>
}

export namespace Globals {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Globals<_i_in._T_Range>
}

export namespace Type {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type<_i_in._T_Range>
}

export namespace Types {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Types<_i_in._T_Range>
}

export namespace Schema {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema<_i_in._T_Range>
}

export namespace Schema_Tree {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Schema_Tree<_i_in._T_Range>
}

export namespace Imports {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Imports<_i_in._T_Range>
}

export namespace Dictionary {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Dictionary<_i_in._T_Range>
}

export namespace Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Group<_i_in._T_Range>
}

export namespace Type_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Value
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
        
        export namespace annotation {
        }
        export type annotation = _i_in._T_Range
    }
    export type RESULT = _i_out._T_Type_Node<_i_in._T_Range>
}
