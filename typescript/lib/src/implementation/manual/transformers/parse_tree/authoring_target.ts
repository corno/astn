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


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($) => $.__l_map(($): d_out.ID_Value_Pairs.L => ({
    'id': $.id.token.value,
    'value': $.assignment.__decide(
        ($) => _p.optional.from.optional($.value).map(($) => Value($)),
        () => _p.optional.literal.not_set()
    )
}))

export const Items: signatures.Items = ($) => $.__l_map(($) => Value($.value))
export const Structural_Token: signatures.Structural_Token = ($) => ({
    'comments': $['trailing trivia'].comments
})

export const Concrete_Value: signatures.Concrete_Value = ($) => _p.decide.state($, ($): d_out.Value.data.concrete => {
    switch ($[0]) {
        case 'dictionary': return _p.ss($, ($) => ({
            'type': ['dictionary', {
                '{': Structural_Token($['{']),
                'entries': ID_Value_Pairs($.entries),
                '}': Structural_Token($['}']),
            }]
        }))
        case 'group': return _p.ss($, ($) => ({
            'type': ['group', _p.decide.state($, ($): d_out.Value.data.concrete.type_.group => {
                switch ($[0]) {
                    case 'concise': return _p.ss($, ($) => {
                        return ['concise', {
                            '<': Structural_Token($['<']),
                            'properties': Items($.properties),
                            '>': Structural_Token($['>']),
                        }]
                    })
                    case 'verbose': return _p.ss($, ($) => {
                        return ['verbose', {
                            '(': Structural_Token($['(']),
                            'properties': ID_Value_Pairs($.properties),
                            ')': Structural_Token($[')']),
                        }]
                    })
                    default: return _p.au($[0])
                }
            })]
        }))
        case 'list': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['list', {
                '[': Structural_Token($['[']),
                'items': Items($.items),
                ']': Structural_Token($[']']),
            }]
        }))
        case 'state': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['state', {
                '|': Structural_Token($['|']),
                'status': _p.decide.state($.status, ($): d_out.Value.data.concrete.type_.state.status => {
                    switch ($[0]) {
                        case 'missing': return _p.ss($, ($): d_out.Value.data.concrete.type_.state.status => ['missing', {
                            '#': Structural_Token($['#']),
                        }])
                        case 'set': return _p.ss($, ($): d_out.Value.data.concrete.type_.state.status => ['set', {
                            'option': $.option.token.value,
                            'value': Value($.value)
                        }])
                        default: return _p.au($[0])
                    }
                })
            }]
        }))
        case 'nothing': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['nothing', {
                '~': Structural_Token($['~']),
            }]
        }))
        case 'optional': return _p.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['optional', _p.decide.state($, ($): d_out.Value.data.concrete.type_.optional => {
                switch ($[0]) {
                    case 'set': return _p.ss($, ($): d_out.Value.data.concrete.type_.optional => ['set', {
                        '*': Structural_Token($['*']),
                        'value': Value($.value)
                    }])
                    case 'not set': return _p.ss($, ($): d_out.Value.data.concrete.type_.optional => ['not set', {
                        '_': Structural_Token($['_']),
                    }])
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
                }),
                'trivia': {
                    'comments': $['trailing trivia'].comments
                },
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
                    '@': Structural_Token($['@']),
                    'path': $.path.token.value,
                }])
                case 'missing': return _p.ss($, ($): d_out.Value.data => ['missing', {
                    '#': Structural_Token($['#']),
                }])
                default: return _p.au($[0])
            }
        })
    }
}