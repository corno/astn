import * as _pt from 'exupery-core-types'


// **** TYPES

export type _T_Derived_Reference<G_Source, T_Type> = null

export type _T_Dictionary<G_Source, T_D> = {
    readonly 'dictionary': _pt.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': G_Source
    }>
    readonly 'location': G_Source
}

export type _T_List<G_Source, T_L> = {
    readonly 'list': _pt.Array<{
        readonly 'element': T_L
        readonly 'location': G_Source
    }>
    readonly 'location': G_Source
}

export type _T_Ordered_Dictionary<G_Source, T_D> = {
    readonly 'dictionary': _pt.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': G_Source
    }>
    readonly 'location': G_Source
}

export type _T_Reference_To_Circular_Dependent_Sibling<G_Source, T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': G_Source
}

export type _T_Reference_To_Normal_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': G_Source
}

export type _T_Reference_To_Stacked_Dictionary_Entry<G_Source, T_Dictionary_Entry> = {
    readonly 'key': string
    readonly 'location': G_Source
    readonly 'up steps': number
}

export type _T_State_Group<G_Source, T_SG> = {
    readonly 'location': G_Source
    readonly 'state group': T_SG
}

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
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<G_Source, T_D> = T_D
            export type location<G_Source, T_D> = G_Source
        }
        export type D<G_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': G_Source
        }
    }
    export type dictionary<G_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': G_Source
    }>
    export type location<G_Source, T_D> = G_Source
}

export namespace _T_List {
    
    export namespace list {
        
        export namespace L {
            export type element<G_Source, T_L> = T_L
            export type location<G_Source, T_L> = G_Source
        }
        export type L<G_Source, T_L> = {
            readonly 'element': T_L
            readonly 'location': G_Source
        }
    }
    export type list<G_Source, T_L> = _pt.Array<{
        readonly 'element': T_L
        readonly 'location': G_Source
    }>
    export type location<G_Source, T_L> = G_Source
}

export namespace _T_Ordered_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<G_Source, T_D> = T_D
            export type location<G_Source, T_D> = G_Source
        }
        export type D<G_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': G_Source
        }
    }
    export type dictionary<G_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': G_Source
    }>
    export type location<G_Source, T_D> = G_Source
}

export namespace _T_Reference_To_Circular_Dependent_Sibling {
    export type key<G_Source, T_Dictionary_Entry> = string
    export type location<G_Source, T_Dictionary_Entry> = G_Source
}

export namespace _T_Reference_To_Normal_Dictionary_Entry {
    export type key<G_Source, T_Dictionary_Entry> = string
    export type location<G_Source, T_Dictionary_Entry> = G_Source
}

export namespace _T_Reference_To_Stacked_Dictionary_Entry {
    export type key<G_Source, T_Dictionary_Entry> = string
    export type location<G_Source, T_Dictionary_Entry> = G_Source
    export type up_steps<G_Source, T_Dictionary_Entry> = number
}

export namespace _T_State_Group {
    export type location<G_Source, T_SG> = G_Source
    export type state_group<G_Source, T_SG> = T_SG
}

// *** ALIASES FOR NESTED TYPES

export namespace Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<G_Source, T_D> = T_D
            export type location<G_Source, T_D> = G_Source
        }
        export type D<G_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': G_Source
        }
    }
    export type dictionary<G_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': G_Source
    }>
    export type location<G_Source, T_D> = G_Source
}

export namespace List {
    
    export namespace list {
        
        export namespace L {
            export type element<G_Source, T_L> = T_L
            export type location<G_Source, T_L> = G_Source
        }
        export type L<G_Source, T_L> = {
            readonly 'element': T_L
            readonly 'location': G_Source
        }
    }
    export type list<G_Source, T_L> = _pt.Array<{
        readonly 'element': T_L
        readonly 'location': G_Source
    }>
    export type location<G_Source, T_L> = G_Source
}

export namespace Ordered_Dictionary {
    
    export namespace dictionary {
        
        export namespace D {
            export type entry<G_Source, T_D> = T_D
            export type location<G_Source, T_D> = G_Source
        }
        export type D<G_Source, T_D> = {
            readonly 'entry': T_D
            readonly 'location': G_Source
        }
    }
    export type dictionary<G_Source, T_D> = _pt.Dictionary<{
        readonly 'entry': T_D
        readonly 'location': G_Source
    }>
    export type location<G_Source, T_D> = G_Source
}

export namespace Reference_To_Circular_Dependent_Sibling {
    export type key<G_Source, T_Dictionary_Entry> = string
    export type location<G_Source, T_Dictionary_Entry> = G_Source
}

export namespace Reference_To_Normal_Dictionary_Entry {
    export type key<G_Source, T_Dictionary_Entry> = string
    export type location<G_Source, T_Dictionary_Entry> = G_Source
}

export namespace Reference_To_Stacked_Dictionary_Entry {
    export type key<G_Source, T_Dictionary_Entry> = string
    export type location<G_Source, T_Dictionary_Entry> = G_Source
    export type up_steps<G_Source, T_Dictionary_Entry> = number
}

export namespace State_Group {
    export type location<G_Source, T_SG> = G_Source
    export type state_group<G_Source, T_SG> = T_SG
}
