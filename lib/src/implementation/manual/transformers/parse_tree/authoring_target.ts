import * as _p from 'pareto-core/dist/assign'

import * as signatures from "../../../../interface/signatures/transformers/parse_tree/authoring_target"

import * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data"


export const Document: signatures.Document = ($) => {
    return {
        'header': _p.optional.from.optional(
            $.header
        ).map(($) => Value($.value)),
        'content': Value($.content)
    }
}


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($) => $.__l_map(($) => ({
    'id': $.id.token.value,
    'value': $.assignment.__decide(
        ($) => _p.optional.from.optional($.value).map(($) => Value($)),
        () => _p.optional.literal.not_set()
    )
}))

export const Items: signatures.Items = ($) => $.__l_map(($) => Value($.value))

export const Concrete_Value: signatures.Concrete_Value = ($) => _p.decide.state($, ($): d_out.Value.data.concrete => {
    switch ($[0]) {
        case 'dictionary': return _p.ss($, ($) => ({
            'type': ['dictionary', ID_Value_Pairs($.entries)]
        }))
        case 'group': return _p.ss($, ($) => ({
            'type': ['group', _p.decide.state($, ($): d_out.Value.data.concrete.type_.group => {
                switch ($[0]) {
                    case 'concise': return _p.ss($, ($) => {
                        return ['concise', Items($.items)]
                    })
                    case 'verbose': return _p.ss($, ($) => {
                        const entries = $.entries
                        return  ['verbose', ID_Value_Pairs(entries)]
                    })
                    default: return _p.au($[0])
                }
            })]
        }))
        case 'list': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['list', Items($.items)]
        }))
        case 'state': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['state', _p.decide.state($.status, ($): d_out.Value.data.concrete.type_.state => {
                switch ($[0]) {
                    case 'missing': return _p.ss($, ($): d_out.Value.data.concrete.type_.state => ['missing', null])
                    case 'set': return _p.ss($, ($): d_out.Value.data.concrete.type_.state => ['set', {
                        'option': $.option.token.value,
                        'value': Value($.value)
                    }])
                    default: return _p.au($[0])
                }
            })]
        }))
        case 'nothing': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['nothing', null]
        }))
        case 'optional': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['optional', _p.decide.state($, ($): d_out.Value.data.concrete.type_.optional => {
                switch ($[0]) {
                    case 'set': return _p.ss($, ($): d_out.Value.data.concrete.type_.optional => ['set', Value($.value)])
                    case 'not set': return _p.ss($, ($): d_out.Value.data.concrete.type_.optional => ['not set', null])
                    default: return _p.au($[0])
                }
            })]
        }))
        case 'text': return _p.ss($, ($) => ({
            'type': ['text', {
                'value': $.token.value,
                'delimiter': _p.decide.state($.token.type, ($) => {
                    switch ($[0]) {
                        case 'quoted': return _p.ss($, ($) => ['quote', null])
                        case 'apostrophed': return _p.ss($, ($) => ['apostrophe', null])
                        case 'undelimited': return _p.ss($, ($) => ['none', null])
                        case 'backticked': return _p.ss($, ($) => ['quote', null])
                        default: return _p.au($[0])
                    }
                })
            }]
        }))
        default: return _p.au($[0])
    }
})

export const Value: signatures.Value = ($) => {
    return {
        'metadata': {
            'comments': _p.list.literal([]),
        },
        'data': _p.decide.state($.type, ($): d_out.Value.data => {
            switch ($[0]) {
                case 'concrete': return _p.ss($, ($) => ['concrete', Concrete_Value($)])

                case 'include': return _p.ss($, ($): d_out.Value.data => ['include', {
                    'path': $.path.token.value,
                }])
                case 'missing': return _p.ss($, ($): d_out.Value.data => ['missing', null])
                default: return _p.au($[0])
            }
        })
    }
}