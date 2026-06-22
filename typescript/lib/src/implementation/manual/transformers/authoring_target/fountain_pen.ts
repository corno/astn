import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_in from "../../../../interface/generated/liana/schemas/authoring_target/data"

export type Parameters = {
    'write delimiters': boolean
}
//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

//dependencies
import * as t_primitives_to_text from "astn-core/dist/implementation/manual/transformers/primitives/text"

export const Document: p_i.Transformer<d_in.Document, d_out.Paragraph> = ($) => sh.pg.composed([
    p_.from.optional($.header).decide(
        ($) => sh.pg.sentences([
            sh.sentence([
                Value($, {
                    'write delimiters': true,
                })
            ]),
        ]),
        () => sh.pg.nothing()
    ),
    sh.pg.sentences([
        sh.sentence([
            Value($.content, {
                'write delimiters': true,
            }),
        ])
    ])
])


export const Value: p_i.Transformer_With_Parameter<d_in.Value, d_out.Phrase, Parameters> = ($, $p) => sh.ph.composed([
    p_.from.state($.data).decide(
        ($) => {
            switch ($[0]) {
                case 'include': return p_.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("@ "),
                    Token_Trivia($['@']),
                    sh.ph.serialize(t_primitives_to_text.Quoted($.path, {
                        'add delimiters': true,
                    })),
                ]))
                case 'missing': return p_.ss($, ($) => sh.ph.composed([
                    sh.ph.literal("#"),
                    Token_Trivia($['#']),
                ]))
                case 'concrete': return p_.ss($, ($) => p_.from.state($.type).decide(
                    ($) => p_.from.state($).decide(
                        ($) => {
                            switch ($[0]) {
                                case 'dictionary': return p_.ss($, ($) => sh.ph.composed([
                                    $p['write delimiters'] ? sh.ph.literal("{") : sh.ph.nothing(), //we always want a newline here
                                    Token_Trivia($['{']),
                                    sh.ph.indent(
                                        sh.pg.sentences(p_.from.list($.entries,
                                        ).map(
                                            ($) => sh.sentence([
                                                sh.ph.serialize(t_primitives_to_text.Apostrophed($.id, {
                                                    'add delimiters': true,
                                                })),
                                                sh.ph.literal(": "),
                                                p_.from.optional($.value).decide(
                                                    ($) => Value($, {
                                                        'write delimiters': true,
                                                    }),
                                                    () => sh.ph.nothing()
                                                ),
                                            ]))),
                                    ),
                                    $p['write delimiters'] ? sh.ph.literal("}") : sh.ph.nothing(),
                                    Token_Trivia($['}']),
                                ]))
                                case 'group': return p_.ss($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'concise': return p_.ss($, ($) => sh.ph.composed([
                                                // $p['in concise group']
                                                //     ? sh.ph.nothing()
                                                //     : $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(),
                                                $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(), //for now, always write the <, even in concise groups. Need to implement a proper parser first
                                                Token_Trivia($['<']),
                                                sh.ph.composed(p_.from.list($.properties).map(
                                                    ($) => sh.ph.composed([
                                                        sh.ph.literal(" "),
                                                        Value($, {
                                                            'write delimiters': true,
                                                        })
                                                    ])
                                                )),
                                                // $p['in concise group']
                                                //     ? sh.ph.nothing()
                                                //     : $p['write delimiters'] ? sh.ph.literal(" >") : sh.ph.nothing(),
                                                $p['write delimiters'] ? sh.ph.literal(" >") : sh.ph.nothing(), //for now, always write the >, even in concise groups. Need to implement a proper parser first
                                                Token_Trivia($['>']),
                                            ]))
                                            case 'verbose': return p_.ss($, ($) => sh.ph.composed([
                                                sh.ph.composed([
                                                    $p['write delimiters'] ? sh.ph.literal("(") : sh.ph.nothing(), //we always want a newline here
                                                    Token_Trivia($['(']),
                                                    sh.ph.indent(
                                                        sh.pg.sentences(p_.from.list($.properties,
                                                        ).map(
                                                            ($) => sh.sentence([
                                                                sh.ph.serialize(t_primitives_to_text.Backticked($.id, {
                                                                    'add delimiters': true,
                                                                })),
                                                                sh.ph.literal(": "),
                                                                p_.from.optional($.value).decide(
                                                                    ($) => Value($, {
                                                                        'write delimiters': true,
                                                                    }),
                                                                    () => sh.ph.nothing(),
                                                                ),
                                                            ])
                                                        )),
                                                    ),
                                                    $p['write delimiters'] ? sh.ph.literal(")") : sh.ph.nothing(),
                                                    Token_Trivia($[')']),
                                                ])
                                            ]))
                                            default: return p_.au($[0])
                                        }
                                    }))
                                case 'list': return p_.ss($, ($) => sh.ph.composed([
                                    $p['write delimiters'] ? sh.ph.literal("[") : sh.ph.nothing(),
                                    Token_Trivia($['[']),
                                    sh.ph.composed(p_.from.list($.items).map(
                                        ($) => sh.ph.composed([
                                            sh.ph.literal(" "),
                                            Value($, {
                                                'write delimiters': true,
                                            }),
                                        ]))),
                                    $p['write delimiters'] ? sh.ph.literal(" ]") : sh.ph.nothing(),
                                    Token_Trivia($[']']),
                                ]))
                                case 'optional': return p_.ss($, ($) => p_.from.state($).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'not set': return p_.ss($, ($) => sh.ph.composed([
                                                sh.ph.literal("_"),
                                                Token_Trivia($['_']),
                                            ]))
                                            case 'set': return p_.ss($, ($) => sh.ph.composed([
                                                sh.ph.literal("* "),
                                                Token_Trivia($['*']),
                                                Value($.value, {
                                                    'write delimiters': true,
                                                }),
                                            ]))

                                            default: return p_.au($[0])
                                        }
                                    }))
                                case 'nothing': return p_.ss($, ($) => sh.ph.composed([
                                    sh.ph.literal("~"),
                                    Token_Trivia($['~']),
                                ]))
                                case 'state': return p_.ss($, ($) => sh.ph.composed([
                                    $p['write delimiters'] ? sh.ph.literal("| ") : sh.ph.nothing(),
                                    Token_Trivia($['|']),
                                    p_.from.state($.status).decide(
                                        ($) => {
                                            switch ($[0]) {
                                                case 'missing': return p_.ss($, ($) => sh.ph.composed([
                                                    Token_Trivia($['#']),
                                                    sh.ph.literal("#"),
                                                ]))
                                                case 'set': return p_.ss($, ($) => sh.ph.composed([
                                                    sh.ph.serialize(t_primitives_to_text.Backticked($.option, {
                                                        'add delimiters': true,
                                                    })),
                                                    sh.ph.literal(" "),
                                                    Value($.value, {
                                                        'write delimiters': true,
                                                    }),
                                                ]))
                                                default: return p_.au($[0])
                                            }
                                        })
                                ]))
                                case 'text': return p_.ss($, ($) => {
                                    const value = $.value // fixme: move value to the inside of the delimiter states
                                    return sh.ph.composed([
                                        p_.from.state($.delimiter).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'apostrophe': return p_.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Apostrophed(value, {
                                                        'add delimiters': $p['write delimiters'],
                                                    })))
                                                    case 'quote': return p_.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Quoted(value, {
                                                        'add delimiters': $p['write delimiters'],
                                                    })))
                                                    case 'none': return p_.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Undelimited(value)))
                                                    default: return p_.au($[0])
                                                }
                                            }),
                                        Token_Trivia($['trivia']),
                                    ])
                                })

                                default: return p_.au($[0])
                            }
                        })))
                default: return p_.au($[0])
            }
        })
])

export const Token_Trivia: p_i.Transformer<d_in.Token_Trivia, d_out.Phrase> = ($) => sh.ph.composed([
    //FIXME
])
