import * as _et from 'pareto-core-interface'


// **** TYPES

export type _T_Dictionary<M_Source, T_D> = _et.Dictionary<T_D>

export type _T_List<M_Source, T_L> = _et.List<T_L>

export type _T_State_Group<M_Source, T_SG> = T_SG

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Dictionary<M_Source, T_D> = _T_Dictionary<M_Source, T_D>

export type List<M_Source, T_L> = _T_List<M_Source, T_L>

export type State_Group<M_Source, T_SG> = _T_State_Group<M_Source, T_SG>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Dictionary {
    export type D<M_Source, T_D> = T_D
}

export namespace _T_List {
    export type L<M_Source, T_L> = T_L
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    export type D<M_Source, T_D> = T_D
}

export namespace List {
    export type L<M_Source, T_L> = T_L
}
