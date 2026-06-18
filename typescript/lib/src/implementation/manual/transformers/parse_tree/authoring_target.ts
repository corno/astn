import * as p_ from 'pareto-core/dist/implementation/transformer'

import * as signatures from "../../../../interface/transformers/parse_tree/authoring_target"

import * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data"


export const Document: signatures.Document = ($) => {
    return {
        'header': p_.from.optional(
            $.header
        ).map(($) => Value($.value)),
        'content': Value($.content)
    }
}


export const ID_Value_Pairs: signatures.ID_Value_Pairs = ($) => $.__l_map_deprecated(($): d_out.ID_Value_Pairs.L => ({
    'id': $.id.token.value,
    'value': $.assignment.__decide(
        ($) => p_.from.optional($.value).map(($) => Value($)),
        () => p_.literal.not_set()
    )
}))

export const Items: signatures.Items = ($) => $.__l_map_deprecated(($) => Value($.value))
export const Structural_Token: signatures.Structural_Token = ($) => ({
    'comments': $['trailing trivia'].comments
})

export const Concrete_Value: signatures.Concrete_Value = ($) => p_.from.state($).decide(($): d_out.Value.data.concrete => {
    switch ($[0]) {
        case 'dictionary': return p_.ss($, ($) => ({
            'type': ['dictionary', {
                '{': Structural_Token($['{']),
                'entries': ID_Value_Pairs($.entries),
                '}': Structural_Token($['}']),
            }]
        }))
        case 'group': return p_.ss($, ($) => ({
            'type': ['group', p_.from.state($).decide(($): d_out.Value.data.concrete.type_.group => {
                switch ($[0]) {
                    case 'concise': return p_.ss($, ($) => {
                        return ['concise', {
                            '<': Structural_Token($['<']),
                            'properties': Items($.properties),
                            '>': Structural_Token($['>']),
                        }]
                    })
                    case 'verbose': return p_.ss($, ($) => {
                        return ['verbose', {
                            '(': Structural_Token($['(']),
                            'properties': ID_Value_Pairs($.properties),
                            ')': Structural_Token($[')']),
                        }]
                    })
                    default: return p_.au($[0])
                }
            })]
        }))
        case 'list': return p_.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['list', {
                '[': Structural_Token($['[']),
                'items': Items($.items),
                ']': Structural_Token($[']']),
            }]
        }))
        case 'state': return p_.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['state', {
                '|': Structural_Token($['|']),
                'status': p_.from.state($.status).decide(($): d_out.Value.data.concrete.type_.state.status => {
                    switch ($[0]) {
                        case 'missing': return p_.ss($, ($): d_out.Value.data.concrete.type_.state.status => ['missing', {
                            '#': Structural_Token($['#']),
                        }])
                        case 'set': return p_.ss($, ($): d_out.Value.data.concrete.type_.state.status => ['set', {
                            'option': $.option.token.value,
                            'value': Value($.value)
                        }])
                        default: return p_.au($[0])
                    }
                })
            }]
        }))
        case 'nothing': return p_.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['nothing', {
                '~': Structural_Token($['~']),
            }]
        }))
        case 'optional': return p_.ss($, ($): d_out.Value.data.concrete => ({
            'type': ['optional', p_.from.state($).decide(($): d_out.Value.data.concrete.type_.optional => {
                switch ($[0]) {
                    case 'set': return p_.ss($, ($): d_out.Value.data.concrete.type_.optional => ['set', {
                        '*': Structural_Token($['*']),
                        'value': Value($.value)
                    }])
                    case 'not set': return p_.ss($, ($): d_out.Value.data.concrete.type_.optional => ['not set', {
                        '_': Structural_Token($['_']),
                    }])
                    default: return p_.au($[0])
                }
            })]
        }))
        case 'text': return p_.ss($, ($) => ({
            'type': ['text', {
                'value': $.token.value,
                'delimiter': p_.from.state($.token.type).decide(($) => {
                    switch ($[0]) {
                        case 'quoted': return p_.ss($, ($) => ['quote', null])
                        case 'apostrophed': return p_.ss($, ($) => ['apostrophe', null])
                        case 'undelimited': return p_.ss($, ($) => ['none', null])
                        case 'backticked': return p_.ss($, ($) => ['quote', null])
                        default: return p_.au($[0])
                    }
                }),
                'trivia': {
                    'comments': $['trailing trivia'].comments
                },
            }]
        }))
        default: return p_.au($[0])
    }
})

export const Value: signatures.Value = ($) => {
    return {
        'metadata': {
            'comments': p_.literal.list([]),
        },
        'data': p_.from.state($.type).decide(($): d_out.Value.data => {
            switch ($[0]) {
                case 'concrete': return p_.ss($, ($) => ['concrete', Concrete_Value($)])

                case 'include': return p_.ss($, ($): d_out.Value.data => ['include', {
                    '@': Structural_Token($['@']),
                    'path': $.path.token.value,
                }])
                case 'missing': return p_.ss($, ($): d_out.Value.data => ['missing', {
                    '#': Structural_Token($['#']),
                }])
                default: return p_.au($[0])
            }
        })
    }
}