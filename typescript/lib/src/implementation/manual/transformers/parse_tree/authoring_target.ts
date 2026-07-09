import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../../declarations/transformers/parse_tree/authoring_target.js"

import type * as d_out from "../../../../interface/generated/liana/schemas/authoring_target/data.js"


export const Document: interface_.Document = ($) => {
    return {
        'header': p_.from.optional($.header).map(
            ($) => Value($.value)),
        'content': Value($.content)
    }
}


export const ID_Value_Pairs: interface_.ID_Value_Pairs = ($) => p_.from.list($).map(
    ($) => ({
        'id': $.id.token.value,
        'value': p_.from.optional($.assignment).decide(
            ($) => p_.from.optional($.value).map(
                ($) => Value($)),
            () => p_.literal.not_set()
        )
    })
)

export const Items: interface_.Items = ($) => p_.from.list($).map(
    ($) => Value($.value)
)

export const Structural_Token: interface_.Structural_Token = ($) => ({
    'comments': $['trailing trivia'].comments
})

export const Concrete_Value: interface_.Concrete_Value = ($) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'dictionary': return p_.option($, ($) => ({
                'type': ['dictionary', {
                    '{': Structural_Token($['{']),
                    'entries': ID_Value_Pairs($.entries),
                    '}': Structural_Token($['}']),
                }]
            }))
            case 'group': return p_.option($, ($) => ({
                'type': ['group', p_.from.state($).decide(
                    ($): d_out.Value.data.concrete.type_.group => {
                        switch ($[0]) {
                            case 'concise': return p_.option($, ($) => {
                                return ['concise', {
                                    '<': Structural_Token($['<']),
                                    'properties': Items($.properties),
                                    '>': Structural_Token($['>']),
                                }]
                            })
                            case 'verbose': return p_.option($, ($) => {
                                return ['verbose', {
                                    '(': Structural_Token($['(']),
                                    'properties': ID_Value_Pairs($.properties),
                                    ')': Structural_Token($[')']),
                                }]
                            })
                            default: return p_.exhaustive($[0])
                        }
                    })]
            }))
            case 'list': return p_.option($, ($) => ({
                'type': ['list', {
                    '[': Structural_Token($['[']),
                    'items': Items($.items),
                    ']': Structural_Token($[']']),
                }]
            }))
            case 'state': return p_.option($, ($) => ({
                'type': ['state', {
                    '|': Structural_Token($['|']),
                    'status': p_.from.state($.status).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'missing': return p_.option($, ($) => ['missing', {
                                    '#': Structural_Token($['#']),
                                }])
                                case 'set': return p_.option($, ($) => ['set', {
                                    'option': $.option.token.value,
                                    'value': Value($.value)
                                }])
                                default: return p_.exhaustive($[0])
                            }
                        })
                }]
            }))
            case 'nothing': return p_.option($, ($) => ({
                'type': ['nothing', {
                    '~': Structural_Token($['~']),
                }]
            }))
            case 'optional': return p_.option($, ($) => ({
                'type': ['optional', p_.from.state($).decide(
                    ($): d_out.Value.data.concrete.type_.optional => {
                        switch ($[0]) {
                            case 'set': return p_.option($, ($) => ['set', {
                                '*': Structural_Token($['*']),
                                'value': Value($.value)
                            }])
                            case 'not set': return p_.option($, ($) => ['not set', {
                                '_': Structural_Token($['_']),
                            }])
                            default: return p_.exhaustive($[0])
                        }
                    })]
            }))
            case 'text': return p_.option($, ($) => ({
                'type': ['text', {
                    'value': $.token.value,
                    'delimiter': p_.from.state($.token.type).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'quoted': return p_.option($, ($) => ['quote', null])
                                case 'apostrophed': return p_.option($, ($) => ['apostrophe', null])
                                case 'undelimited': return p_.option($, ($) => ['none', null])
                                case 'backticked': return p_.option($, ($) => ['quote', null])
                                default: return p_.exhaustive($[0])
                            }
                        }),
                    'trivia': {
                        'comments': $['trailing trivia'].comments
                    },
                }]
            }))
            default: return p_.exhaustive($[0])
        }
    })

export const Value: interface_.Value = ($) => {
    return {
        'metadata': {
            'comments': p_.literal.list([]),
        },
        'data': p_.from.state($.type).decide(
            ($) => {
                switch ($[0]) {
                    case 'concrete': return p_.option($, ($) => ['concrete', Concrete_Value($)])

                    case 'include': return p_.option($, ($) => ['include', {
                        '@': Structural_Token($['@']),
                        'path': $.path.token.value,
                    }])
                    case 'missing': return p_.option($, ($) => ['missing', {
                        '#': Structural_Token($['#']),
                    }])
                    default: return p_.exhaustive($[0])
                }
            })
    }
}