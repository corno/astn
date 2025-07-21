import * as _pt from 'exupery-core-types'


// **** TYPES

export type _T_Derived_Reference<G_Source, T_Type> = T_Type

export type _T_Dictionary<G_Source, T_D> = _pt.Dictionary<T_D>

export type _T_List<G_Source, T_L> = _pt.Array<T_L>

export type _T_Ordered_Dictionary<G_Source, T_D> = {
    readonly 'dictionary': _pt.Dictionary<T_D>
    readonly 'ordered list': _pt.Array<_pt.Key_Value_Pair<T_D>>
}

export type _T_Reference_To_Circular_Dependent_Sibling<G_Source, T_Dictionary_Entry> = {
    readonly 'entry': _pt.Computed_Value<T_Dictionary_Entry>
    readonly 'key': string
}

export type _T_Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry
    readonly 'key': string
}

export type _T_Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry
    readonly 'key': string
    readonly 'up steps': number
}

export type _T_State_Group<G_Source, T_SG> = T_SG

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Derived_Reference<G_Source, T_Type> = _T_Derived_Reference<G_Source, T_Type>

export type Dictionary<G_Source, T_D> = _T_Dictionary<G_Source, T_D>

export type List<G_Source, T_L> = _T_List<G_Source, T_L>

export type Ordered_Dictionary<G_Source, T_D> = _T_Ordered_Dictionary<G_Source, T_D>

export type Reference_To_Circular_Dependent_Sibling<G_Source, T_Dictionary_Entry> = _T_Reference_To_Circular_Dependent_Sibling<G_Source, T_Dictionary_Entry>

export type Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry> = _T_Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry>

export type Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry> = _T_Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry>

export type State_Group<G_Source, T_SG> = _T_State_Group<G_Source, T_SG>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    export type D<G_Source, T_D> = T_D
}

export namespace _T_List {
    export type L<G_Source, T_L> = T_L
}

export namespace _T_Ordered_Dictionary {
    
    export namespace dictionary {
        export type D<G_Source, T_D> = T_D
    }
    export type dictionary<G_Source, T_D> = _pt.Dictionary<T_D>
    
    export namespace ordered_list {
        
        export namespace L {
            export type K<G_Source, T_D> = T_D
        }
        export type L<G_Source, T_D> = _pt.Key_Value_Pair<T_D>
    }
    export type ordered_list<G_Source, T_D> = _pt.Array<_pt.Key_Value_Pair<T_D>>
}

export namespace _T_Reference_To_Circular_Dependent_Sibling {
    
    export namespace entry {
        export type C<G_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    }
    export type entry<G_Source, T_Dictionary_Entry> = _pt.Computed_Value<T_Dictionary_Entry>
    export type key<G_Source, T_Dictionary_Entry> = string
}

export namespace _T_Reference_To_Normal_Dictionary_Entry {
    export type entry<G_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<G_Source, T_Dictionary_Entry> = string
}

export namespace _T_Reference_To_Stacked_Dictionary_Entry {
    export type entry<G_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<G_Source, T_Dictionary_Entry> = string
    export type up_steps<G_Source, T_Dictionary_Entry> = number
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    export type D<G_Source, T_D> = T_D
}

export namespace List {
    export type L<G_Source, T_L> = T_L
}

export namespace Ordered_Dictionary {
    
    export namespace dictionary {
        export type D<G_Source, T_D> = T_D
    }
    export type dictionary<G_Source, T_D> = _pt.Dictionary<T_D>
    
    export namespace ordered_list {
        
        export namespace L {
            export type K<G_Source, T_D> = T_D
        }
        export type L<G_Source, T_D> = _pt.Key_Value_Pair<T_D>
    }
    export type ordered_list<G_Source, T_D> = _pt.Array<_pt.Key_Value_Pair<T_D>>
}

export namespace Reference_To_Circular_Dependent_Sibling {
    
    export namespace entry {
        export type C<G_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    }
    export type entry<G_Source, T_Dictionary_Entry> = _pt.Computed_Value<T_Dictionary_Entry>
    export type key<G_Source, T_Dictionary_Entry> = string
}

export namespace Reference_To_Normal_Dictionary_Entry {
    export type entry<G_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<G_Source, T_Dictionary_Entry> = string
}

export namespace Reference_To_Stacked_Dictionary_Entry {
    export type entry<G_Source, T_Dictionary_Entry> = T_Dictionary_Entry
    export type key<G_Source, T_Dictionary_Entry> = string
    export type up_steps<G_Source, T_Dictionary_Entry> = number
}
