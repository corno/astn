import * as _et from "exupery-core-types"
import * as _ea from "exupery-core-alg"
import * as _ed from "exupery-core-dev"

import * as t from "../../interface/core/astn_source"
import * as unconstrained from "../../interface/core/unconstrained"
import * as unresolved from "../../interface/core/unresolved"

const process_value = (
    $: t._T_Value,
): t._T_Concrete_Value => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _ea.ss($, ($) => $)
            case 'include': return _ed.implement_me()
            default: return _ea.au($[0])
        }
    })
}

export const process_unconstrained_state_group = <X>(
    $: t._T_Value,
    $p: {
        'states': _et.Dictionary<($: t._T_Value) => X>,
    }

): X => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value
                return $p.states.__get_entry(
                    $.state.value
                ).transform(
                    ($) => $(data),
                    () => _ed.implement_me()
                )
            })
            default: return _ea.panic(`Unexpected type for state group: ${$[0]}`)
        }
    })
}

export const process_unresolved_state_group = <X>(
    $: t._T_Value,
    $p: {
        'states': _et.Dictionary<($: t._T_Value) => X>,
    }

): unresolved.State_Group<t._T_Range, X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value
                return {
                    'location': $["|"].range,
                    'state group': $p.states.__get_entry(
                        $.state.value
                    ).transform(
                        ($) => $(data),
                        () => _ed.implement_me()
                    )
                }
            })
            default: return _ea.panic(`Unexpected type for state group: ${$[0]}`)
        }
    })
}

export const process_group = <X>(
    $: t._T_Value,
    $p: {
        'properties': ($: _et.Dictionary<t._T_Value>) => X,
    }

): X => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'verbose group': return _ea.ss($, ($) => {
                        return $p.properties(_ea.pure.dictionary["build, overwrite clashing keys"](($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(
                                    ($) => $.value,
                                    () => _ed.implement_me()
                                ))
                            })
                        }))
                    })
                    default: return _ea.panic(`Unexpected type for group: ${$[0]}`)
                }
            }))
            default: return _ea.panic(`Unexpected type for group: ${$[0]}`)
        }
    })
}

export const get_entry = (
    $: _et.Dictionary<t._T_Value>,
    $p: {
        'key': string,
    }

): t._T_Value => {
    return $.__get_entry($p.key).transform(
        ($) => $,
        () => _ea.panic(`no such entry: ${$p.key}`)
    )
}

export const process_unresolved_dictionary = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }
): unresolved.Dictionary<t._T_Range, X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return {
                            'location': {
                                'start': $["{"].range.start,
                                'end': $["}"].range.end,
                            },
                            'dictionary': _ea.pure.dictionary["build, overwrite clashing keys"](($i) => {
                                $.entries.__for_each(($) => {
                                    const key_location = $.key.range
                                    $i['add entry']($.key.value, $.value.transform(
                                        ($) => ({
                                            'location': key_location,
                                            'entry': $p.value($.value),
                                        }),
                                        () => _ed.implement_me() //what to do if the property has no value?
                                    ))
                                })
                            })
                        }
                    })
                    default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`)
                }
            }))
            default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`)
        }
    })
}

export const process_unconstrained_dictionary = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }
): unconstrained.Dictionary<null, X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return _ea.pure.dictionary["build, overwrite clashing keys"](($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(
                                    ($) => $p.value($.value),
                                    () => _ed.implement_me() //what to do if the property has no value?
                                ))
                            })
                        })
                    })
                    default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`)
                }
            }))
            default: return _ea.panic(`Unexpected type for dictionary: ${$[0]}`)
        }
    })
}


export const process_number = (
    $: t._T_Value,
    $p: {
        'deserializer': ($: string, $p: null) => number
    }
): number => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $p.deserializer($.value, null))
            default: return _ea.panic(`Unexpected type for number: ${$[0]}`)

        }
    })
}

export const process_boolean = (
    $: t._T_Value,
    $p: {
        'deserializer': ($: string, $p: null) => boolean
    }

): boolean => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $p.deserializer($.value, null))
            default: return _ea.panic(`Unexpected type for boolean: ${$[0]}`)
        }
    })
}

export const process_text = (
    $: t._T_Value,
    $p: null

): string => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $.value)
            default: return _ea.panic(`Unexpected type for text: ${$[0]}`)
        }
    })
}

export const process_unresolved_list = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }
): unresolved.List<t._T_Range, X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'list': return _ea.ss($, ($) => {
                        const temp = $["["]
                        return {
                            'location': $["["].range,
                            'list': $["elements"].map(($) => ({
                                'location': temp.range,
                                'element': $p.value($.value)
                            }))
                        }
                    })
                    default: return _ea.panic(`Unexpected type for list: ${$[0]}`)
                }
            }))
            default: return _ea.panic(`Unexpected type for list: ${$[0]}`)
        }
    })
}

export const process_unconstrained_list = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): unconstrained.List<null, X> => {
    return _ed.implement_me()
}

export const process_optional = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): _et.Optional_Value<X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => _ea.not_set())
            case 'set optional value': return _ea.ss($, ($) => _ea.set($p.value($.value)))
            default: return _ea.panic(`Unexpected type for nothing: ${$[0]}`)

        }
    })
}

export const process_nothing = (
    $: t._T_Value,
    $p: null
): null => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => null)
            default: return _ea.panic(`Unexpected type for nothing: ${$[0]}`)

        }
    })
}

export const process_selected_reference = <X>(
    $: t._T_Value,
    $p: null
): unresolved.Reference_To_Normal_Dictionary_Entry<t._T_Range, X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ({
                'key': $.value,
                'location': $.range,
            }))
            default: return _ea.panic(`Unexpected type for selected reference key: ${$[0]}`)
        }
    })
}

export const process_stack_reference = <X>(
    $: t._T_Value,
    $p: null
): unresolved.Reference_To_Stacked_Dictionary_Entry<t._T_Range, X> => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => ({
                'key': $.value,
                'location': $.range,
            }))
            default: return _ea.panic(`Unexpected type for selected reference key: ${$[0]}`)
        }
    })
}

export const process_derived_reference = (
    $: t._T_Value,
    $p: null
): null => {
    return _ea.cc(process_value($), ($) => {
        switch ($[0]) {
            case 'not set': return _ea.ss($, ($) => null)
            default: return _ea.panic(`Unexpected type for derived reference: ${$[0]}`)

        }
    })
}