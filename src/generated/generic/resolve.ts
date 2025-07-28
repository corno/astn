import * as pa from 'exupery-core-alg'
import * as pt from 'exupery-core-types'
import * as pd from 'exupery-core-data'

import * as unresolved$ from "../interface/core/unresolved"
import * as resolved$ from "../interface/core/resolved"

export type Location_to_String<Source> = ($: Source) => string
export type Acyclic_Entry_Reference<T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry
    readonly 'key': string
}
export type Parameters<Source, V, L> = {
    'location 2 string': Location_to_String<Source>
    'parameters': {
        'lookups': L,
        'values': V
    }
}
export type Key_Value_Location_Triplet<Source, T> = {
    'key': string,
    'value': T,
    'location': Source
}
export type Possibly_Circular_Result<T> = pt.Computed_Value<T>
export type Non_Circular_Result<T> =
    | ['error', ['circular', pt.Array<string>]]
    | ['resolved', T]
export type Path<Source, Resolved_Element, Seed> = {
    'list': pt.Array<Resolved_Element>
    'result': {
        'data': Seed
    }
}
export type Resolved_Step<Resolved_Element, Seed> = {
    'element': Resolved_Element,
    'result': Seed
}

export type _T_Location_2_String<Source> = Location_to_String<Source>
export type _T_Location_Info = pd.Source_Location
export type Location_Info = pd.Source_Location

export type Acyclic_Lookup<T> = pt.Optional_Value<pt.Lookup<Non_Circular_Result<T>>> //FIXME this should not be optional
export type Cyclic_Lookup<T> = pt.Optional_Value<pt.Lookup<Possibly_Circular_Result<T>>> //FIXME this should not be optional
export type Lookup_Stack<T> = pt.Array<Acyclic_Lookup<T>>

export type _T_Cyclic_Lookup<T> = Cyclic_Lookup<T>
export type _T_Acyclic_Lookup<T> = Acyclic_Lookup<T>
export type _T_Lookup_Stack<T> = Lookup_Stack<T>

export const dictionary_to_lookup = <T>(
    $: pt.Dictionary<T>,
    $p: null,
): Acyclic_Lookup<T> => {
    return pa.set($.map(($) => (['resolved', $])))
}

export const get_possibly_circular_dependent_sibling_entry = <Source, T>(
    $: Cyclic_Lookup<T>,
    $p: {
        'reference': unresolved$.Reference_To_Circular_Dependent_Sibling<Source, T>,
        'location 2 string': Location_to_String<Source>
    },
): resolved$.Reference_To_Circular_Dependent_Sibling<Source, T> => {
    return $.transform(
        ($) => ({
            'key': $p.reference.key,
            'entry': $.__get_entry($p.reference.key).transform(
                ($) => $,
                () => pa.panic("no such entry: '", $p.reference.key, "' @ ", $p['location 2 string']($p.reference.location))
            )
        }),
        () => pa.panic("no context lookup @ ", $p['location 2 string']($p.reference.location))
    )
}

export const push_stack = <T>($: pt.Array<T>, $p: { 'element': T }): pt.Array<T> => {
    return pa.pure.list.build<T>(($i) => {
        $i['add list']($)
        $i['add element']($p['element'])
    })
}


export const get_entry_from_stack = <Source, T>(
    $: Lookup_Stack<T>,
    $p: {
        'reference': unresolved$.Reference_To_Stacked_Dictionary_Entry<Source, T>,
        'location 2 string': Location_to_String<Source>
    },
): resolved$.Reference_To_Stacked_Dictionary_Entry<Source, T> => {

    const get_lookup_from_stack = <T>(
        $: Lookup_Stack<T>,
        $p: { 'up steps': number }
    ): Acyclic_Lookup<T> => $.__get_element_at($.__get_length() - 1 - $p['up steps']).transform(
        ($) => $,
        () => pa.panic(`index out of bounds, ${$.__get_length()} ${$p['up steps']}`),
    )
    const x = get_entry(
        get_lookup_from_stack($, { 'up steps': $p.reference['up steps'] }),
        {
            'reference': $p.reference,
            'location 2 string': $p['location 2 string'],
        }
    )
    return {
        'key': x.key,
        'entry': x.entry,
        'up steps': $p.reference['up steps'],
    }
}

export const get_entry = <Source, T>(
    $: Acyclic_Lookup<T>,
    $p: {
        'reference': unresolved$.Reference_To_Normal_Dictionary_Entry<Source, T>,
        'location 2 string': Location_to_String<Source>
    },
): resolved$.Reference_To_Normal_Dictionary_Entry<Source, T> => {
    return $.transform(
        ($) => ({
            'key': $p.reference.key,
            'entry': $.__get_entry($p.reference.key).transform(
                ($) => pa.cc($, ($) => {
                    switch ($[0]) {
                        case 'error': return pa.ss($, ($) => pa.cc($, ($) => {
                            switch ($[0]) {
                                case 'circular': return pa.ss($, ($) => {
                                    const keys = pa.pure.text.build(($i) => {
                                        $.__for_each(($) => {
                                            $i['add snippet'](` '${$}', `)
                                        })
                                    })
                                    return pa.panic("circular dependency: '", $p.reference.key, "' (", keys, ")@ ", $p['location 2 string']($p.reference.location))
                                })
                                default: return pa.au($[0])
                            }
                        }))
                        case 'resolved': return pa.ss($, ($) => $)
                        default: return pa.au($[0])
                    }
                }),
                () => {
                    return pa.panic("no such entry: '", $p.reference.key, "' @ ", $p['location 2 string']($p.reference.location))
                }
            )
        }),
        () => pa.panic("no context lookup @ ", $p['location 2 string']($p.reference.location))
    )
}

export const resolve_path = <Source, Unresolved_Element, Resolved_Element, Seed>(
    $: unresolved$.List<Source, Unresolved_Element>,
    $p: {
        'seed': Seed
        'map': ($: Unresolved_Element, current: Seed) => Resolved_Step<Resolved_Element, Seed>
    },
): Path<Source, Resolved_Element, Seed> => {
    let current: Path<Source, Resolved_Element, Seed> = {
        'list': pa.array_literal([]),
        'result': {
            'data': $p.seed,
        },
    }
    $.list.__for_each(($) => {
        const result = $p.map($.element, current.result.data)
        const data = pa.pure.list.build<Resolved_Element>(($i) => {
            current.list.__for_each(($) => {
                $i['add element']($)
            })
            $i['add element'](result.element)
        })
        current = {
            'list': data,
            'result': {
                'data': result.result,
            }
        }
    })
    return current
}

export const resolve_dictionary = <Source, TUnresolved, TResolved>(
    $: unresolved$.Dictionary<Source, TUnresolved>,
    $p: {
        'map': ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
            'possibly circular dependent siblings': Cyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Dictionary<Source, TResolved> => {
    return resolve_ordered_dictionary($, $p).dictionary
}


export const resolve_dense_dictionary = <Source, TUnresolved, TResolved, TBenchmark>(
    $: unresolved$.Dictionary<Source, TUnresolved>,
    $p: {
        'denseness benchmark': pt.Dictionary<TBenchmark>
        'map': ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
            'possibly circular dependent siblings': Cyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Dictionary<Source, TResolved> => {
    return resolve_dense_ordered_dictionary($, $p).dictionary
}

export const resolve_dense_ordered_dictionary = <Source, TUnresolved, TResolved, TBenchmark>(
    $: unresolved$.Dictionary<Source, TUnresolved>,
    $p: {
        'denseness benchmark': pt.Dictionary<TBenchmark>
        'map': ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
            'possibly circular dependent siblings': Cyclic_Lookup<TResolved>
            'not circular dependent siblings': Acyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Ordered_Dictionary<Source, TResolved> => {
    const location = $.location
    const result = resolve_ordered_dictionary($, $p)
    $p['denseness benchmark'].map(($) => {
        const validate_denseness = (
            benchmark: pt.Dictionary<TBenchmark>,
            focus: pt.Dictionary<TResolved>,
            location: Source,
            location_to_string: Location_to_String<Source>,
        ) => {
            benchmark.map(($, key) => {
                const benchmark = $
                focus.__get_entry(key).transform(
                    ($) => {
                    },
                    () => {
                        pa.panic("missing entry '", key, "' @ ", location_to_string(location))
                    }
                )
            })
        }

        validate_denseness(
            $p['denseness benchmark'],
            result.dictionary,
            location,
            $p['location 2 string'],

        )
    })
    return result
}

export const resolve_ordered_dictionary = <Source, TUnresolved, TResolved>(
    $: unresolved$.Dictionary<Source, TUnresolved>,
    $p: {
        'map': ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
            'possibly circular dependent siblings': Cyclic_Lookup<TResolved>
            'not circular dependent siblings': Acyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Ordered_Dictionary<Source, TResolved> => {
    const dictionary_location = $.location
    /**
     * this variable contains all the entries on which siblings have subscribed 
     */
    const all_siblings_subscribed_entries: {
        [key: string]: {
            entry: TResolved | null
        }
    } = {}

    const finished: { [key: string]: TResolved } = {}

    const ordered_list = pa.pure.list.build<pt.Key_Value_Pair<TResolved>>(($i) => {

        const source_dictionary = $

        const status_dictionary: {
            [key: string]:
            | ['processing', null]
            | ['failed', null]
            | ['success', TResolved]
        } = {}

        function process_entry($: TUnresolved, location: Source, key_of_entry_being_processed: string) {
            status_dictionary[key_of_entry_being_processed] = ['processing', null]
            const entry = $p.map({
                'key': key_of_entry_being_processed,
                'value': $,
                'location': location,
            }, {
                'possibly circular dependent siblings': pa.set({
                    __get_entry(key) {
                        //does the entry exist?
                        return source_dictionary.dictionary.__get_entry(key).map(($) => {
                            //yes, it exists in the source dictionary
                            if (all_siblings_subscribed_entries[key] === undefined) {
                                all_siblings_subscribed_entries[key] = { 'entry': null }
                            }
                            const subscr = all_siblings_subscribed_entries[key]
                            return {
                                'compute': () => {
                                    if (subscr.entry === null) {
                                        pa.panic(`entry not set: ${key}`)
                                    }
                                    return subscr.entry
                                }
                            }

                        })
                    },

                }),
                'not circular dependent siblings': pa.set({
                    __get_entry(key): pt.Optional_Value<Non_Circular_Result<TResolved>> {
                        const status = status_dictionary[key]
                        if (status === undefined) {
                            return source_dictionary.dictionary.__get_entry(key).transform(
                                ($) => pa.set(['resolved', process_entry($.entry, $.location, key)]),
                                () => {
                                    return pa.not_set()
                                    // throw new ResolveError("")
                                }
                            )
                        } else {
                            const get_keys_of_entries_being_processed = () => {
                                return pa.pure.list.build<string>(($i) => {
                                    pa.dictionary_literal(status_dictionary).map(($, key) => {
                                        if ($[0] === 'processing') {
                                            $i['add element'](key)
                                        }
                                    })

                                })
                            }
                            return pa.cc(status, (s) => {
                                switch (s[0]) {
                                    case 'failed':
                                        return pa.ss(s, (s) => {
                                            //nothing to report





                                            return pa.set(['error', ['circular', get_keys_of_entries_being_processed()]])
                                            //return notSet()
                                        })
                                    case 'processing':
                                        if (key === key_of_entry_being_processed) {
                                            //$se.onError(`'${key}' is referencing itself`)
                                        } else {
                                            // const keys: string[] = []
                                            // Object.keys(status_dictionary).forEach((key) => {
                                            //     if (status_dictionary[key][0] === 'processing') {
                                            //         keys.push(key)
                                            //     }
                                            // })
                                            //$se.onError(`the following entries are referencing each other: ${keys.join(", ")}`)
                                        }
                                        status_dictionary[key_of_entry_being_processed] = ['failed', null]
                                        return pa.set(['error', ['circular', get_keys_of_entries_being_processed()]])

                                    case 'success':
                                        return pa.set(['resolved', s[1]])
                                    default: return pa.au(s[0])
                                }
                            })
                        }
                    },
                }),
            })
            finished[key_of_entry_being_processed] = entry
            $i['add element']({
                'key': key_of_entry_being_processed,
                'value': entry,
            })
            status_dictionary[key_of_entry_being_processed] = ['success', entry]
            return entry
        }

        $.dictionary.map(($, key) => {
            if (status_dictionary[key] === undefined) {
                process_entry($.entry, $.location, key)
            }
        })
        pa.dictionary_literal(all_siblings_subscribed_entries).map(($, key) => {
            if (finished[key] === undefined) {
                pa.panic(`implementation error: entry not resolved: ${key}`)
            }
            all_siblings_subscribed_entries[key].entry = finished[key]
        })
    })
    return {
        'dictionary': pa.dictionary_literal(finished),
        'ordered list': ordered_list,
    }
}