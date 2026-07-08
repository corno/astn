import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import * as d_in from "../../../../interface/generated/liana/schemas/authoring_target/data.js"

namespace d_function {

    export type Parameters = {
        'write delimiters': boolean
    }

}

export namespace interface_ {
    export type Document = p_i.Transformer<
        d_in.Document, d_out.Paragraph
    >

    export type Value = p_i.Transformer_With_Parameter<
        d_in.Value,
        d_out.Phrase.composed,
        d_function.Parameters
    >

    export type Token_Trivia = p_i.Transformer<
        d_in.Token_Trivia, d_out.Phrase.composed
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/prose/deprecated"

//dependencies
import * as t_primitives_to_text from "astn-core/implementation/manual/transformers/primitives/text"

export const Document: interface_.Document = ($) => sh.pg.composed([
    p_.from.optional($.header).decide(
        ($) => sh.pg.sentences([
            sh.sentence(
                Value($, {
                    'write delimiters': true,
                })
            ),
        ]),
        () => sh.pg.nothing()
    ),
    sh.pg.sentences(
        p_.literal.list([
            sh.sentence(
                Value($.content, {
                    'write delimiters': true,
                }),
            )
        ])
    )
])


export const Value: interface_.Value = ($, $p) => p_.from.state($.data).decide(
    ($) => {
        switch ($[0]) {
            case 'include': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.literal("@ "),
                ]),
                Token_Trivia($['@']),
                p_.literal.list([
                    sh.ph.serialize(t_primitives_to_text.Quoted($.path, {
                        'add delimiters': true,
                    })),
                ])
            ]))
            case 'missing': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.literal("#"),
                ]),
                Token_Trivia($['#']),
            ]))
            case 'concrete': return p_.option($, ($) => p_.from.state($.type).decide(
                ($) => p_.from.state($).decide(
                    ($): d_out.Phrase.composed => {
                        switch ($[0]) {
                            case 'dictionary': return p_.option($, ($) => p_.literal.segmented_list([
                                $p['write delimiters'] ?
                                    p_.literal.list([
                                        sh.ph.literal("{")
                                    ])
                                    : p_.literal.list([]), //we always want a newline here
                                Token_Trivia($['{']),
                                p_.literal.list([
                                    sh.ph.indent(
                                        sh.pg.sentences(p_.from.list($.entries).map(
                                            ($) => sh.sentence(p_.literal.segmented_list([
                                                p_.literal.list([
                                                    sh.ph.serialize(t_primitives_to_text.Apostrophed($.id, {
                                                        'add delimiters': true,
                                                    })),
                                                    sh.ph.literal(": "),
                                                ]),
                                                p_.from.optional($.value).decide(
                                                    ($) => Value($, {
                                                        'write delimiters': true,
                                                    }),
                                                    () => p_.literal.list([])
                                                ),
                                            ])))),
                                    ),
                                ]),
                                $p['write delimiters']
                                    ? p_.literal.list([
                                        sh.ph.literal("}")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($['}']),
                            ]))
                            case 'group': return p_.option($, ($) => p_.from.state($).decide(
                                ($): d_out.Phrase.composed => {
                                    switch ($[0]) {
                                        case 'concise': return p_.option($, ($) => p_.literal.segmented_list([
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.literal("<")
                                                ])
                                                : p_.literal.list([]), //for now, always write the <, even in concise groups. Need to implement a proper parser first
                                            // $p['in concise group']
                                            //     ? sh.ph.nothing()
                                            //     : $p['write delimiters'] 
                                            // ? sh.ph.literal("<")
                                            //  : sh.ph.nothing(),

                                            Token_Trivia($['<']),
                                            p_.from.list($.properties).flatten(
                                                ($) => p_.literal.segmented_list([
                                                    p_.literal.list([
                                                        sh.ph.literal(" "),
                                                    ]),
                                                    Value($, {
                                                        'write delimiters': true,
                                                    })
                                                ])
                                            ),
                                            // $p['in concise group']
                                            //     ? sh.ph.nothing()
                                            //     : $p['write delimiters'] 
                                            // ? sh.ph.literal(" >") 
                                            // : sh.ph.nothing(),
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.literal(" >")
                                                ])
                                                : p_.literal.list([]), //for now, always write the >, even in concise groups. Need to implement a proper parser first
                                            Token_Trivia($['>']),
                                        ]))
                                        case 'verbose': return p_.option($, ($) => p_.literal.segmented_list([
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.literal("(")
                                                ])
                                                : p_.literal.list([]),
                                            Token_Trivia($['(']),
                                            p_.literal.list([
                                                sh.ph.indent(
                                                    sh.pg.sentences(
                                                        p_.from.list($.properties).map(
                                                            ($) => sh.sentence(p_.literal.segmented_list([
                                                                p_.literal.list([
                                                                    sh.ph.serialize(t_primitives_to_text.Backticked($.id, {
                                                                        'add delimiters': true,
                                                                    })),
                                                                    sh.ph.literal(": "),
                                                                ]),
                                                                p_.from.optional($.value).decide(
                                                                    ($) => Value($, {
                                                                        'write delimiters': true,
                                                                    }),
                                                                    () => p_.literal.list([]),
                                                                ),
                                                            ])
                                                            )),
                                                    )),
                                            ]),
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.literal(")")
                                                ])
                                                : p_.literal.list([]),
                                            Token_Trivia($[')']),
                                        ]))
                                        default: return p_.exhaustive($[0])
                                    }
                                }))
                            case 'list': return p_.option($, ($) => p_.literal.segmented_list([
                                $p['write delimiters']
                                    ? p_.literal.list([
                                        sh.ph.literal("[")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($['[']),
                                p_.from.list($.items).flatten(
                                    ($) => p_.literal.segmented_list([
                                        p_.literal.list([
                                            sh.ph.literal(" "),
                                        ]),
                                        Value($, {
                                            'write delimiters': true,
                                        }),
                                    ])),
                                $p['write delimiters']
                                    ? p_.literal.list([
                                        sh.ph.literal(" ]")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($[']']),
                            ]))
                            case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'not set': return p_.option($, ($) => p_.literal.segmented_list([
                                            p_.literal.list([
                                                sh.ph.literal("_"),
                                            ]),
                                            Token_Trivia($['_']),
                                        ]))
                                        case 'set': return p_.option($, ($) => p_.literal.segmented_list([
                                            p_.literal.list([
                                                sh.ph.literal("* "),
                                            ]),
                                            Token_Trivia($['*']),
                                            Value($.value, {
                                                'write delimiters': true,
                                            }),
                                        ]))

                                        default: return p_.exhaustive($[0])
                                    }
                                }))
                            case 'nothing': return p_.option($, ($) => p_.literal.segmented_list([
                                p_.literal.list([
                                    sh.ph.literal("~"),
                                ]),
                                Token_Trivia($['~']),
                            ]))
                            case 'state': return p_.option($, ($) => p_.literal.segmented_list([
                                $p['write delimiters']
                                    ? p_.literal.list([
                                        sh.ph.literal("| ")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($['|']),
                                p_.from.state($.status).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'missing': return p_.option($, ($) => p_.literal.segmented_list([
                                                Token_Trivia($['#']),
                                                p_.literal.list([
                                                    sh.ph.literal("#"),
                                                ]),
                                            ]))
                                            case 'set': return p_.option($, ($) => p_.literal.segmented_list([
                                                p_.literal.list([
                                                    sh.ph.serialize(t_primitives_to_text.Backticked($.option, {
                                                        'add delimiters': true,
                                                    })),
                                                    sh.ph.literal(" "),
                                                ]),
                                                Value($.value, {
                                                    'write delimiters': true,
                                                }),
                                            ]))
                                            default: return p_.exhaustive($[0])
                                        }
                                    }
                                )
                            ]))
                            case 'text': return p_.option($, ($) => {
                                const value = $.value // fixme: move value to the inside of the delimiter states
                                return p_.literal.segmented_list([
                                    p_.literal.list([
                                        p_.from.state($.delimiter).decide(
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'apostrophe': return p_.option($, ($) => sh.ph.serialize(t_primitives_to_text.Apostrophed(value, {
                                                        'add delimiters': $p['write delimiters'],
                                                    })))
                                                    case 'quote': return p_.option($, ($) => sh.ph.serialize(t_primitives_to_text.Quoted(value, {
                                                        'add delimiters': $p['write delimiters'],
                                                    })))
                                                    case 'none': return p_.option($, ($) => sh.ph.serialize(t_primitives_to_text.Undelimited(value)))
                                                    default: return p_.exhaustive($[0])
                                                }
                                            }),
                                    ]),
                                    Token_Trivia($['trivia']),
                                ])
                            })

                            default: return p_.exhaustive($[0])
                        }
                    })))
            default: return p_.exhaustive($[0])
        }
    }
)

export const Token_Trivia: interface_.Token_Trivia = ($) => p_.literal.list([
    //FIXME
])
