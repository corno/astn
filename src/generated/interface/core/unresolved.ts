import * as _pt from 'exupery-core-types'


// **** TYPES

export type _T_Derived_Reference<G_Source, T_Type> = null

export type _T_Dictionary<G_Source, T_D> = _pt.Dictionary<T_D>

export type _T_List<G_Source, T_L> = _pt.Array<T_L>

export type _T_Ordered_Dictionary<G_Source, T_D> = _pt.Dictionary<T_D>

export type _T_Reference_To_Circular_Dependent_Sibling<G_Source, T_Dictionary_Entry> = string

export type _T_Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry> = string

export type _T_Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry> = string

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
    export type D<G_Source, T_D> = T_D
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    export type D<G_Source, T_D> = T_D
}

export namespace List {
    export type L<G_Source, T_L> = T_L
}

export namespace Ordered_Dictionary {
    export type D<G_Source, T_D> = T_D
}
