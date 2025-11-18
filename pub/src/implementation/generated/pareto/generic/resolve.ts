import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as unresolved$ from "../../../../interface/generated/pareto/core/unresolved"
import * as resolved$ from "../../../../interface/generated/pareto/core/resolved"

import * as i from "../../../../interface/generated/pareto/core/resolve"

export type Acyclic_Entry_Reference<T_Dictionary_Entry> = {
    readonly 'entry': T_Dictionary_Entry
    readonly 'key': string
}
export type Parameters<Source, V, L> = {
    'location 2 string': i.Location_to_String<Source>
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
export type Path<Source, Resolved_Element, Seed> = {
    'list': _et.List<Resolved_Element>
    'result': {
        'data': Seed
    }
}
export type Resolved_Step<Resolved_Element, Seed> = {
    'element': Resolved_Element,
    'result': Seed
}

export type Resolve_Error<Source> = {
    'location': Source
    'type': Resolve_Error_Type
}

export type Resolve_Error_Type =
    | ['circular dependency', {
        'keys': _et.List<string>,
    }]
    | ['no such entry', {
        'key': string,
    }]
    | ['no context lookup', null]
    | ['missing denseness entry', {
        'key': string,
    }]
    | ['index out of bounds', {
        'up steps taken': number,
    }]
    | ['no element found at index', {
        'index': number,
    }]

export const abort = <Source>(location: Source, type: Resolve_Error_Type, location_to_string: i.Location_to_String<Source>): never => {
    return _ea.deprecated_panic(
        _ea.cc(type, ($) => {
            switch ($[0]) {
                case 'no such entry': return _ea.ss($, ($) => `no such entry: '${$['key']}'`)
                case 'missing denseness entry': return _ea.ss($, ($) => `missing denseness entry: '${$['key']}'`)
                case 'circular dependency': return _ea.ss($, ($) => {
                    const keys = _ea.build_text(($i) => {
                        $['keys'].__for_each(($) => {
                            $i['add snippet'](` '${$}', `)
                        })
                    })
                    return `circular dependency: (${keys})`
                })
                case 'no context lookup': return _ea.ss($, ($) => `no context lookup`)
                case 'index out of bounds': return _ea.ss($, ($) => `index out of bounds, ${$['up steps taken']}`)
                case 'no element found at index': return _ea.ss($, ($) => `no element found at index, ${$['index']}`)
                default: return _ea.au($[0])
            }
        }),
        ` @ ${location_to_string(location)}`
    )
}

export const dictionary_to_lookup = <T>(
    $: _et.Dictionary<T>,
    $p: null,
): i.Acyclic_Lookup<T> => {
    return _ea.set($.map(($) => (['resolved', $])))
}

export const get_possibly_circular_dependent_sibling_entry = <Source, T>(
    $: i.Cyclic_Lookup<T>,
    $p: {
        'reference': unresolved$.Reference_To_Circular_Dependent_Sibling<Source, T>,
        'location 2 string': i.Location_to_String<Source>
    },
): resolved$.Reference_To_Circular_Dependent_Sibling<Source, T> => {
    return $.transform(
        ($) => ({
            'key': $p.reference.key,
            'entry': $.__get_entry($p.reference.key).transform(
                ($) => $,
                () => abort($p.reference.location, ['no such entry', { 'key': $p.reference.key }], $p['location 2 string']),
            )
        }),
        () => abort($p.reference.location, ['no context lookup', null], $p['location 2 string'])
    )
}

export const push_stack = <T>($: _et.List<T>, $p: { 'element': T }): _et.List<T> => {
    return _ea.build_list<T>(($i) => {
        $i['add list']($)
        $i['add element']($p['element'])
    })
}


export const get_entry_from_stack = <Source, T>(
    $: i.Lookup_Stack<T>,
    $p: {
        'reference': unresolved$.Reference_To_Stacked_Dictionary_Entry<Source, T>,
        'location 2 string': i.Location_to_String<Source>
    },
): resolved$.Reference_To_Stacked_Dictionary_Entry<Source, T> => {
    const ref = $p.reference
    const get_entry_from_stack = (
        up_steps_taken: number
    ): resolved$.Reference_To_Stacked_Dictionary_Entry<Source, T> => {
        return $.__get_element_at($.__get_number_of_elements() - 1 - up_steps_taken).transform(
            ($): resolved$.Reference_To_Stacked_Dictionary_Entry<Source, T> => {
                return $.transform(
                    ($) => {
                        return $.__get_entry(ref.key).transform(
                            ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'error': return _ea.ss($, ($) => get_entry_from_stack(up_steps_taken += 1))
                                    case 'resolved': return _ea.ss($, ($): resolved$.Reference_To_Stacked_Dictionary_Entry<Source, T> => ({
                                        'key': ref.key,
                                        'up steps': up_steps_taken,
                                        'entry': $,
                                    }))
                                    default: return _ea.au($[0])
                                }
                            }),
                            () => _ea.deprecated_panic(`no clue yet of what is happening here`),
                        )
                    },
                    () => abort(ref.location, ['index out of bounds', { 'up steps taken': up_steps_taken }], $p['location 2 string']),
                )
            },
            () => abort(ref.location, ['no element found at index', { 'index': up_steps_taken }], $p['location 2 string'])
        )
    }

    return get_entry_from_stack(0)
}

export const get_entry = <Source, T>(
    $: i.Acyclic_Lookup<T>,
    $p: {
        'reference': unresolved$.Reference_To_Normal_Dictionary_Entry<Source, T>,
        'location 2 string': i.Location_to_String<Source>
    },
): resolved$.Reference_To_Normal_Dictionary_Entry<Source, T> => {
    return $.transform(
        ($) => ({
            'key': $p.reference.key,
            'entry': $.__get_entry($p.reference.key).transform(
                ($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => {
                            switch ($[0]) {
                                case 'circular': return _ea.ss($, ($) => {
                                    return abort($p.reference.location, ['circular dependency', { 'keys': $ }], $p['location 2 string'])
                                })
                                default: return _ea.au($[0])
                            }
                        }))
                        case 'resolved': return _ea.ss($, ($) => $)
                        default: return _ea.au($[0])
                    }
                }),
                () => {
                    return abort($p.reference.location, ['no such entry', { 'key': $p.reference.key }], $p['location 2 string'])
                }
            )
        }),
        () => abort($p.reference.location, ['no context lookup', null], $p['location 2 string'])
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
        'list': _ea.list_literal([]),
        'result': {
            'data': $p.seed,
        },
    }
    $.list.__for_each(($) => {
        const result = $p.map($.element, current.result.data)
        const data = _ea.build_list<Resolved_Element>(($i) => {
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
            'possibly circular dependent siblings': i.Cyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Dictionary<Source, TResolved> => {
    return resolve_ordered_dictionary($, $p).dictionary
}


export const resolve_dense_dictionary = <Source, TUnresolved, TResolved, TBenchmark>(
    $: unresolved$.Dictionary<Source, TUnresolved>,
    $p: {
        'denseness benchmark': _et.Dictionary<TBenchmark>
        'map': ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
            'possibly circular dependent siblings': i.Cyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Dictionary<Source, TResolved> => {
    return resolve_dense_ordered_dictionary($, $p).dictionary
}

export const resolve_dense_ordered_dictionary = <Source, TUnresolved, TResolved, TBenchmark>(
    $: unresolved$.Dictionary<Source, TUnresolved>,
    $p: {
        'denseness benchmark': _et.Dictionary<TBenchmark>
        'map': ($: Key_Value_Location_Triplet<Source, TUnresolved>, $l: {
            'possibly circular dependent siblings': i.Cyclic_Lookup<TResolved>
            'not circular dependent siblings': i.Acyclic_Lookup<TResolved>
        }) => TResolved,
        'location 2 string': ($: Source) => string
    }
): resolved$.Ordered_Dictionary<Source, TResolved> => {
    const location = $.location
    const result = resolve_ordered_dictionary($, $p)
    $p['denseness benchmark'].map(($) => {
        const validate_denseness = (
            benchmark: _et.Dictionary<TBenchmark>,
            focus: _et.Dictionary<TResolved>,
            location: Source,
            location_to_string: i.Location_to_String<Source>,
        ) => {
            benchmark.map(($, key) => {
                const benchmark = $
                focus.__get_entry(key).transform(
                    ($) => {
                    },
                    () => {
                        abort(location, ['missing denseness entry', { 'key': key }], $p['location 2 string'])
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
            'possibly circular dependent siblings': i.Cyclic_Lookup<TResolved>
            'not circular dependent siblings': i.Acyclic_Lookup<TResolved>
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

    const ordered_list = _ea.build_list<_et.Key_Value_Pair<TResolved>>(($i) => {

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
                'possibly circular dependent siblings': _ea.set({
                    __get_entry(key) {
                        //does the entry exist?
                        return source_dictionary.dictionary.__get_entry(key).map(($) => {
                            //yes, it exists in the source dictionary
                            if (all_siblings_subscribed_entries[key] === undefined) {
                                all_siblings_subscribed_entries[key] = { 'entry': null }
                            }
                            const subscr = all_siblings_subscribed_entries[key]
                            return {
                                'get circular dependent': () => {
                                    if (subscr.entry === null) {
                                        return _ea.deprecated_panic(`entry not set: ${key}`)
                                    }
                                    return subscr.entry
                                }
                            }

                        })
                    },

                }),
                'not circular dependent siblings': _ea.set({
                    __get_entry(key): _et.Optional_Value<i.Non_Circular_Result<TResolved>> {
                        const status = status_dictionary[key]
                        if (status === undefined) {
                            return source_dictionary.dictionary.__get_entry(key).transform(
                                ($) => _ea.set(['resolved', process_entry($.entry, $.location, key)]),
                                () => {
                                    return _ea.not_set()
                                    // throw new ResolveError("")
                                }
                            )
                        } else {
                            const get_keys_of_entries_being_processed = () => {
                                return _ea.build_list<string>(($i) => {
                                    _ea.dictionary_literal(status_dictionary).map(($, key) => {
                                        if ($[0] === 'processing') {
                                            $i['add element'](key)
                                        }
                                    })

                                })
                            }
                            return _ea.cc(status, (s) => {
                                switch (s[0]) {
                                    case 'failed':
                                        return _ea.ss(s, (s) => {
                                            //nothing to report





                                            return _ea.set(['error', ['circular', get_keys_of_entries_being_processed()]])
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
                                        return _ea.set(['error', ['circular', get_keys_of_entries_being_processed()]])

                                    case 'success':
                                        return _ea.set(['resolved', s[1]])
                                    default: return _ea.au(s[0])
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
        _ea.dictionary_literal(all_siblings_subscribed_entries).map(($, key) => {
            if (finished[key] === undefined) {
                _ea.deprecated_panic(`implementation error: entry not resolved: ${key}`)
            }
            all_siblings_subscribed_entries[key].entry = finished[key]
        })
    })
    return {
        'dictionary': _ea.dictionary_literal(finished),
        'ordered list': ordered_list,
    }
}