import * as _et from 'pareto-core-interface'


// **** TYPES

export type _T_Derived_Reference<M_Source, T_Type> = T_Type

export type _T_Dictionary<M_Source, T_D> = _et.Dictionary<T_D>

export type _T_List<M_Source, T_L> = _et.List<T_L>

export type _T_Ordered_Dictionary<M_Source, T_D> = {
    readonly 'dictionary': _et.Dictionary<T_D>
    readonly 'ordered list': _et.List<{
        readonly 'key': string
        readonly 'value': T_D
    }>
}

export type _T_Reference_To_Circular_Dependent_Sibling<M_Source, T_Dictionary_Entry> = {
    readonly 'entry': _et.Circular_Dependency<T_Dictionary_Entry>
    readonly 'key': string
}

export type _T_Reference_To_Normal_Dictionary_Entry<M_Source, T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry
    readonly 'key': string
}

export type _T_Reference_To_Stacked_Dictionary_Entry<M_Source, T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry
    readonly 'key': string
    readonly 'up steps': number
}

export type _T_State_Group<M_Source, T_SG> = T_SG

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
    export type D<M_Source, T_D> = T_D
}

export namespace _T_List {
    export type L<M_Source, T_L> = T_L
}

export namespace _T_Ordered_Dictionary {
    
    export namespace dictionary {
        export type D<M_Source, T_D> = T_D
    }
    export type dictionary<M_Source, T_D> = _et.Dictionary<T_D>
    
    export namespace ordered_list {
        
        export namespace L {
            export type key<M_Source, T_D> = string
            export type value<M_Source, T_D> = T_D
        }
        export type L<M_Source, T_D> = {
            readonly 'key': string
            readonly 'value': T_D
        }
    }
    export type ordered_list<M_Source, T_D> = _et.List<{
        readonly 'key': string
        readonly 'value': T_D
    }>
}

export namespace _T_Reference_To_Circular_Dependent_Sibling {
    
    export namespace entry {
        export type C<M_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    }
    export type entry<M_Source, T_Dictionary_Entry> = _et.Circular_Dependency<T_Dictionary_Entry>
    export type key<M_Source, T_Dictionary_Entry> = string
}

export namespace _T_Reference_To_Normal_Dictionary_Entry {
    export type entry<M_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<M_Source, T_Dictionary_Entry> = string
}

export namespace _T_Reference_To_Stacked_Dictionary_Entry {
    export type entry<M_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<M_Source, T_Dictionary_Entry> = string
    export type up_steps<M_Source, T_Dictionary_Entry> = number
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    export type D<M_Source, T_D> = T_D
}

export namespace List {
    export type L<M_Source, T_L> = T_L
}

export namespace Ordered_Dictionary {
    
    export namespace dictionary {
        export type D<M_Source, T_D> = T_D
    }
    export type dictionary<M_Source, T_D> = _et.Dictionary<T_D>
    
    export namespace ordered_list {
        
        export namespace L {
            export type key<M_Source, T_D> = string
            export type value<M_Source, T_D> = T_D
        }
        export type L<M_Source, T_D> = {
            readonly 'key': string
            readonly 'value': T_D
        }
    }
    export type ordered_list<M_Source, T_D> = _et.List<{
        readonly 'key': string
        readonly 'value': T_D
    }>
}

export namespace Reference_To_Circular_Dependent_Sibling {
    
    export namespace entry {
        export type C<M_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    }
    export type entry<M_Source, T_Dictionary_Entry> = _et.Circular_Dependency<T_Dictionary_Entry>
    export type key<M_Source, T_Dictionary_Entry> = string
}

export namespace Reference_To_Normal_Dictionary_Entry {
    export type entry<M_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<M_Source, T_Dictionary_Entry> = string
}

export namespace Reference_To_Stacked_Dictionary_Entry {
    export type entry<M_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<M_Source, T_Dictionary_Entry> = string
    export type up_steps<M_Source, T_Dictionary_Entry> = number
}
