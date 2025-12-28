import * as _et from 'exupery-core-types'


export type Location_to_String<Source> = ($: Source) => string
export type _T_Location_2_String<Source> = Location_to_String<Source>


export type Non_Circular_Result<T> =
    | ['error', ['circular', _et.List<string>]]
    | ['resolved', T]

export type Lookup<T> = { get_entry: (key: string) => _et.Optional_Value<T> }
export type Acyclic_Lookup<T> = _et.Optional_Value<Lookup<Non_Circular_Result<T>>> //FIXME should this not be optional?
export type _T_Acyclic_Lookup<T> = Acyclic_Lookup<T>

export type Possibly_Circular_Result<T> = _et.Circular_Dependency<T>

export type Cyclic_Lookup<T> = _et.Optional_Value<Lookup<Possibly_Circular_Result<T>>> //FIXME should this not be optional?
export type _T_Cyclic_Lookup<T> = Cyclic_Lookup<T>

export type Lookup_Stack<T> = _et.List<Acyclic_Lookup<T>>
export type _T_Lookup_Stack<T> = Lookup_Stack<T>