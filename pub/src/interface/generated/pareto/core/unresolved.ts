import * as _et from 'pareto-core-interface'


// **** TYPES

export type _T_Derived_Reference<M_Source, T_Type> = null

export type _T_Dictionary<M_Source, T_D> = {
    readonly 'dictionary': _et.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': M_Source
    }>
    readonly 'location': M_Source
}

export type _T_List<M_Source, T_L> = {
    readonly 'list': _et.List<{
        readonly 'element': T_L
        readonly 'location': M_Source
    }>
    readonly 'location': M_Source
}

export type _T_Ordered_Dictionary<M_Source, T_D> = {
    readonly 'dictionary': _et.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': M_Source
    }>
    readonly 'location': M_Source
}

export type _T_Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': M_Source
}

export type _T_Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': M_Source
}

export type _T_Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': M_Source
}

export type _T_State_Group<M_Source, T_SG> = {
    readonly 'location': M_Source
    readonly 'state group': T_SG
}

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Derived_Reference<M_Source, T_Type> = _T_Derived_Reference<M_Source, T_Type>

export type Dictionary<M_Source, T_D> = _T_Dictionary<M_Source, T_D>

export type List<M_Source, T_L> = _T_List<M_Source, T_L>

export type Ordered_Dictionary<M_Source, T_D> = _T_Ordered_Dictionary<M_Source, T_D>

export type Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry> = _T_Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry>

export type Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry> = _T_Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry>

export type Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry> = _T_Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry>

export type State_Group<M_Source, T_SG> = _T_State_Group<M_Source, T_SG>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<M_Source, T_D> = T_D
            export type location<M_Source, T_D> = M_Source
        }
        export type D<M_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': M_Source
        }
    }
    export type dictionary<M_Source, T_D> = _et.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': M_Source
    }>
    export type location<M_Source, T_D> = M_Source
}

export namespace _T_List {
    
    export namespace list {
        
        export namespace L {
            export type element<M_Source, T_L> = T_L
            export type location<M_Source, T_L> = M_Source
        }
        export type L<M_Source, T_L> = {
            readonly 'element': T_L
            readonly 'location': M_Source
        }
    }
    export type list<M_Source, T_L> = _et.List<{
        readonly 'element': T_L
        readonly 'location': M_Source
    }>
    export type location<M_Source, T_L> = M_Source
}

export namespace _T_Ordered_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<M_Source, T_D> = T_D
            export type location<M_Source, T_D> = M_Source
        }
        export type D<M_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': M_Source
        }
    }
    export type dictionary<M_Source, T_D> = _et.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': M_Source
    }>
    export type location<M_Source, T_D> = M_Source
}

export namespace _T_Reference_To_Circular_Dependent_Sibling {
    export type key<M_Source, T_Dictionary_Entry> = string
    export type location<M_Source, T_Dictionary_Entry> = M_Source
}

export namespace _T_Reference_To_Normal_Dictionary_Entry {
    export type key<M_Source, T_Dictionary_Entry> = string
    export type location<M_Source, T_Dictionary_Entry> = M_Source
}

export namespace _T_Reference_To_Stacked_Dictionary_Entry {
    export type key<M_Source, T_Dictionary_Entry> = string
    export type location<M_Source, T_Dictionary_Entry> = M_Source
}

export namespace _T_State_Group {
    export type location<M_Source, T_SG> = M_Source
    export type state_group<M_Source, T_SG> = T_SG
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<M_Source, T_D> = T_D
            export type location<M_Source, T_D> = M_Source
        }
        export type D<M_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': M_Source
        }
    }
    export type dictionary<M_Source, T_D> = _et.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': M_Source
    }>
    export type location<M_Source, T_D> = M_Source
}

export namespace List {
    
    export namespace list {
        
        export namespace L {
            export type element<M_Source, T_L> = T_L
            export type location<M_Source, T_L> = M_Source
        }
        export type L<M_Source, T_L> = {
            readonly 'element': T_L
            readonly 'location': M_Source
        }
    }
    export type list<M_Source, T_L> = _et.List<{
        readonly 'element': T_L
        readonly 'location': M_Source
    }>
    export type location<M_Source, T_L> = M_Source
}

export namespace Ordered_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<M_Source, T_D> = T_D
            export type location<M_Source, T_D> = M_Source
        }
        export type D<M_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': M_Source
        }
    }
    export type dictionary<M_Source, T_D> = _et.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': M_Source
    }>
    export type location<M_Source, T_D> = M_Source
}

export namespace Reference_To_Circular_Dependent_Sibling {
    export type key<M_Source, T_Dictionary_Entry> = string
    export type location<M_Source, T_Dictionary_Entry> = M_Source
}

export namespace Reference_To_Normal_Dictionary_Entry {
    export type key<M_Source, T_Dictionary_Entry> = string
    export type location<M_Source, T_Dictionary_Entry> = M_Source
}

export namespace Reference_To_Stacked_Dictionary_Entry {
    export type key<M_Source, T_Dictionary_Entry> = string
    export type location<M_Source, T_Dictionary_Entry> = M_Source
}

export namespace State_Group {
    export type location<M_Source, T_SG> = M_Source
    export type state_group<M_Source, T_SG> = T_SG
}
