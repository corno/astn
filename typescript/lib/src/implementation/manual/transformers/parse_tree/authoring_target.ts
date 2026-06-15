import * as pt from 'pareto-core/dist/transformer/implementation'

import * as signatures from "../../../../interface/signatures/transformers/parse_tree/authoring_target"

import * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data"


export const Document: signatures.Document = ($) => {
    return {
        'header': pt.optional.from.optional(
            $.header
        ).map(($) => Value($.value)),
        'content': Value($.content)
    }
}


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($) => $.__l_map(($): d_out.ID_Value_Pairs.L => ({
    'id': $.id.token.value,
    'value': $.assignment.__decide(
        ($) => pt.optional.from.optional($.value).map(($) => Value($)),
        () => pt.literal.not_set()
    )
}))

export const Items: signatures.Items = ($) => $.__l_map(($) => Value($.value))
export const Structural_Token: signatures.Structural_Token = ($) => ({
    'comments': $['trailing trivia'].comments
})

export const Concrete_Value: signatures.Concrete_Value = ($) => pt.decide.state($, ($): d_out.Value.data.concrete => {
    switch ($[0]) {
        case 'dictionary': return pt.ss($, ($) => ({
            'type': ['dictionary', {
                '{': Structural_Token($['{']),
                'entries': ID_Value_Pairs($.entries),
                '}': Structural_Token($['}']),
            }]
        }))
        case 'group': return pt.ss($, ($) => ({
            'type': ['group', pt.decide.state($, ($): d_out.Value.data.concrete.type_.group => {
                switch ($[0]) {
                    case 'concise': return pt.ss($, ($) => {
                        return ['concise', {
                            '<': Structural_Token($['<']),
                            'properties': Items($.properties),
                            '>': Structural_Token($['>']),
                        }]
                    })
                    case 'verbose': return pt.ss($, ($) => {
                        return ['verbose', {
                            '(': Structural_Token($['(']),
                            'properties': ID_Value_Pairs($.properties),
                            ')': Structural_Token($[')']),
                        }]
                    })
                    default: return pt.au($[0])
                }
            })]
        }))
        case 'list': return pt.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['list', {
                '[': Structural_Token($['[']),
                'items': Items($.items),
                ']': Structural_Token($[']']),
            }]
        }))
        case 'state': return pt.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['state', {
                '|': Structural_Token($['|']),
                'status': pt.decide.state($.status, ($): d_out.Value.data.concrete.type_.state.status => {
                    switch ($[0]) {
                        case 'missing': return pt.ss($, ($): d_out.Value.data.concrete.type_.state.status => ['missing', {
                            '#': Structural_Token($['#']),
                        }])
                        case 'set': return pt.ss($, ($): d_out.Value.data.concrete.type_.state.status => ['set', {
                            'option': $.option.token.value,
                            'value': Value($.value)
                        }])
                        default: return pt.au($[0])
                    }
                })
            }]
        }))
        case 'nothing': return pt.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['nothing', {
                '~': Structural_Token($['~']),
            }]
        }))
        case 'optional': return pt.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['optional', pt.decide.state($, ($): d_out.Value.data.concrete.type_.optional => {
                switch ($[0]) {
                    case 'set': return pt.ss($, ($): d_out.Value.data.concrete.type_.optional => ['set', {
                        '*': Structural_Token($['*']),
                        'value': Value($.value)
                    }])
                    case 'not set': return pt.ss($, ($): d_out.Value.data.concrete.type_.optional => ['not set', {
                        '_': Structural_Token($['_']),
                    }])
                    default: return pt.au($[0])
                }
            })]
        }))
        case 'text': return pt.ss($, ($) => ({
            'type': ['text', {
                'value': $.token.value,
                'delimiter': pt.decide.state($.token.type, ($) => {
                    switch ($[0]) {
                        case 'quoted': return pt.ss($, ($) => ['quote', null])
                        case 'apostrophed': return pt.ss($, ($) => ['apostrophe', null])
                        case 'undelimited': return pt.ss($, ($) => ['none', null])
                        case 'backticked': return pt.ss($, ($) => ['quote', null])
                        default: return pt.au($[0])
                    }
                }),
                'trivia': {
                    'comments': $['trailing trivia'].comments
                },
            }]
        }))
        default: return pt.au($[0])
    }
})

export const Value: signatures.Value = ($) => {
    return {
        'metadata': {
            'comments': pt.literal.list([]),
        },
        'data': pt.decide.state($.type, ($): d_out.Value.data => {
            switch ($[0]) {
                case 'concrete': return pt.ss($, ($) => ['concrete', Concrete_Value($)])

                case 'include': return pt.ss($, ($): d_out.Value.data => ['include', {
                    '@': Structural_Token($['@']),
                    'path': $.path.token.value,
                }])
                case 'missing': return pt.ss($, ($): d_out.Value.data => ['missing', {
                    '#': Structural_Token($['#']),
                }])
                default: return pt.au($[0])
            }
        })
    }
}