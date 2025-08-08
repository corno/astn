import * as _et from "exupery-core-types"
import * as _ea from "exupery-core-alg"
import * as _ed from "exupery-core-dev"

import * as t from "../../interface/core/astn_source"
import * as unconstrained from "../../interface/core/unconstrained"
import * as unresolved from "../../interface/core/unresolved"

export const process_state_group = <X>(
    $: t._T_Value,
    $p: {
        'states': _et.Dictionary<($: t._T_Value) => X>,
    }

): X => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => _ed.implement_me())
            case 'include': return _ea.ss($, ($) => _ed.implement_me())
            case 'indexed collection': return _ea.ss($, ($) => _ed.implement_me())
            case 'not set': return _ea.ss($, ($) => _ed.implement_me())
            case 'ordered collection': return _ea.ss($, ($) => _ed.implement_me())
            case 'set optional value': return _ea.ss($, ($) => _ed.implement_me())
            case 'tagged value': return _ea.ss($, ($) => {
                const data = $.value
                return $p.states.__get_entry(
                    $.state.value
                ).transform(
                    ($) => $(data),
                    () => _ed.implement_me()
                )
            })
            default: return _ea.au($[0])
        }
    })
}

export const process_group = <X>(
    $: t._T_Value,
    $p: {
        'properties': ($: _et.Dictionary<t._T_Value>) => X,
    }

): X => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => _ed.implement_me())
            case 'include': return _ea.ss($, ($) => _ed.implement_me())
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => _ed.implement_me())
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
                    default: return _ea.au($[0])
                }
            }))
            case 'not set': return _ea.ss($, ($) => _ed.implement_me())
            case 'ordered collection': return _ea.ss($, ($) => _ed.implement_me())
            case 'set optional value': return _ea.ss($, ($) => _ed.implement_me())
            case 'tagged value': return _ed.implement_me()
            default: return _ea.au($[0])
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
        () => _ed.implement_me()
    )
}

export const process_unresolved_dictionary = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): unresolved.Dictionary<null, X> => {
    return _ed.implement_me()
}

export const process_unconstrained_dictionary = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): unconstrained.Dictionary<null, X> => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => _ed.implement_me())
            case 'include': return _ea.ss($, ($) => _ed.implement_me())
            case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _ea.ss($, ($) => {
                        return _ea.pure.dictionary["build, overwrite clashing keys"](($i) => {
                            $.entries.__for_each(($) => {
                                $i['add entry']($.key.value, $.value.transform(
                                    ($) => $p.value($.value),
                                    () => _ed.implement_me()
                                ))
                            })
                        })
                    })
                    case 'verbose group': return _ea.ss($, ($) => _ed.implement_me())
                    default: return _ea.au($[0])
                }
            }))
            case 'not set': return _ea.ss($, ($) => _ed.implement_me())
            case 'ordered collection': return _ea.ss($, ($) => _ed.implement_me())
            case 'set optional value': return _ea.ss($, ($) => _ed.implement_me())
            case 'tagged value': return _ed.implement_me()
            default: return _ea.au($[0])
        }
    })
}


export const process_number = (
    $: t._T_Value,
    $p: {
        'deserializer': ($: string, $p: null) => number
    }
): number => {
    return _ed.implement_me()
}

export const process_boolean = (
    $: t._T_Value,
    $p: {
        'deserializer': ($: string, $p: null) => boolean
    }

): boolean => {
    return _ed.implement_me()
}

export const process_text = (
    $: t._T_Value,
    $p: null

): string => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'string': return _ea.ss($, ($) => $.value)
            case 'include': return _ea.ss($, ($) => _ed.implement_me())
            case 'indexed collection': return _ea.ss($, ($) => _ed.implement_me())
            case 'not set': return _ea.ss($, ($) => _ed.implement_me())
            case 'ordered collection': return _ea.ss($, ($) => _ed.implement_me())
            case 'set optional value': return _ea.ss($, ($) => _ed.implement_me())
            case 'tagged value': return _ea.ss($, ($) => _ed.implement_me())
            default: return _ea.au($[0])
        }
    })
}

export const process_unresolved_list = <X>(
    $: t._T_Value,
    $p: {
        'value': ($: t._T_Value) => X
    }

): unresolved.List<null, X> => {
    return _ed.implement_me()
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
    return _ed.implement_me()
}

export const process_nothing = (
    $: t._T_Value,
    $p: null
): null => {
    return _ed.implement_me()
}

export const wrap_unconstrained_state_group = <X>(
    $: X,
    $p: null,
): unconstrained.State_Group<null, X> => {
    return $
}

export const wrap_unresolved_state_group = <X>(
    $: X,
    $p: null,
): unresolved.State_Group<null, X> => {
    return _ed.implement_me()
}

export const process_selected_reference = (
    $: any,
    $p: null
): unresolved.Reference_To_Normal_Dictionary_Entry<null, null> => {
    return _ed.implement_me()
}

export const process_stack_reference = (
    $: any,
    $p: null
): unresolved.Reference_To_Stacked_Dictionary_Entry<null, null> => {
    return _ed.implement_me()
}

export const process_derived_reference = (
    $: any,
    $p: null
): null => {
    return _ed.implement_me()
}