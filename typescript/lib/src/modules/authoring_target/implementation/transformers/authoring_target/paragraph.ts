import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../schemas/authoring_target.js"

import type * as s_out from "../../../schemas/paragraph.js"

namespace s_parameters {

    export type Parameters = {
        'write delimiters': boolean
    }

}

namespace declarations {
    export type Document = p_.Transformer<
        s_in.Document,
        s_out.Paragraph
    >
    export type Value = p_.Transformer_With_Parameter<
        s_in.Value,
        s_out.Phrase.composed,
        s_parameters.Parameters
    >
    export type Token_Trivia = p_.Transformer<
        s_in.Token_Trivia,
        s_out.Phrase.composed
    >
}

//shorthands
import * as sh from "pareto-fountain-pen/shorthands/paragraph/deprecated"

//dependencies
import * as ser_primitives from "astn-core/modules/serialization/implementation/serializers/primitives"

export const Document: declarations.Document = ($) => sh.pg.sentences(
    p_.literal.segmented_list([
        p_.from.optional($.header).decide(
            ($) => p_.literal.list([
                sh.sentence(
                    Value($, {
                        'write delimiters': true,
                    })
                ),
            ]),
            () => p_.literal.list([])
        ),
        p_.literal.list([
            sh.sentence(
                Value($.content, {
                    'write delimiters': true,
                }),
            )
        ])
    ])
)


export const Value: declarations.Value = ($, $p) => p_.from.state($.data).decide(
    ($) => {
        switch ($[0]) {
            case 'include': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.text("@ "),
                ]),
                Token_Trivia($['@']),
                p_.literal.list([
                    sh.ph.text(
                        ser_primitives.Quoted($.path, {
                            'add delimiters': true,
                        })
                    ),
                ])
            ]))
            case 'missing': return p_.option($, ($) => p_.literal.segmented_list([
                p_.literal.list([
                    sh.ph.text("#"),
                ]),
                Token_Trivia($['#']),
            ]))
            case 'concrete': return p_.option($, ($) => p_.from.state($.type).decide(
                ($) => p_.from.state($).decide(
                    ($): s_out.Phrase.composed => {
                        switch ($[0]) {
                            case 'dictionary': return p_.option($, ($) => p_.literal.segmented_list([
                                $p['write delimiters'] ?
                                    p_.literal.list([
                                        sh.ph.text("{")
                                    ])
                                    : p_.literal.list([]), //we always want a newline here
                                Token_Trivia($['{']),
                                p_.literal.list([
                                    sh.ph.indent(
                                        sh.pg.sentences(p_.from.list($.entries).map(
                                            ($) => sh.sentence(p_.literal.segmented_list([
                                                p_.literal.list([
                                                    sh.ph.text(ser_primitives.Apostrophed($.id, {
                                                        'add delimiters': true,
                                                    })),
                                                    sh.ph.text(": "),
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
                                        sh.ph.text("}")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($['}']),
                            ]))
                            case 'group': return p_.option($, ($) => p_.from.state($).decide(
                                ($): s_out.Phrase.composed => {
                                    switch ($[0]) {
                                        case 'concise': return p_.option($, ($) => p_.literal.segmented_list([
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.text("<")
                                                ])
                                                : p_.literal.list([]), //for now, always write the <, even in concise groups. Need to implement a proper parser first
                                            // $p['in concise group']
                                            //     ? sh.ph.nothing()
                                            //     : $p['write delimiters'] 
                                            // ? sh.ph.text("<")
                                            //  : sh.ph.nothing(),

                                            Token_Trivia($['<']),
                                            p_.from.list($.properties).flatten(
                                                ($) => p_.literal.segmented_list([
                                                    p_.literal.list([
                                                        sh.ph.text(" "),
                                                    ]),
                                                    Value($, {
                                                        'write delimiters': true,
                                                    })
                                                ])
                                            ),
                                            // $p['in concise group']
                                            //     ? sh.ph.nothing()
                                            //     : $p['write delimiters'] 
                                            // ? sh.ph.text(" >") 
                                            // : sh.ph.nothing(),
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.text(" >")
                                                ])
                                                : p_.literal.list([]), //for now, always write the >, even in concise groups. Need to implement a proper parser first
                                            Token_Trivia($['>']),
                                        ]))
                                        case 'verbose': return p_.option($, ($) => p_.literal.segmented_list([
                                            $p['write delimiters']
                                                ? p_.literal.list([
                                                    sh.ph.text("(")
                                                ])
                                                : p_.literal.list([]),
                                            Token_Trivia($['(']),
                                            p_.literal.list([
                                                sh.ph.indent(
                                                    sh.pg.sentences(
                                                        p_.from.list($.properties).map(
                                                            ($) => sh.sentence(p_.literal.segmented_list([
                                                                p_.literal.list([
                                                                    sh.ph.text(ser_primitives.Backticked($.id, {
                                                                        'add delimiters': true,
                                                                    })),
                                                                    sh.ph.text(": "),
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
                                                    sh.ph.text(")")
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
                                        sh.ph.text("[")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($['[']),
                                p_.from.list($.items).flatten(
                                    ($) => p_.literal.segmented_list([
                                        p_.literal.list([
                                            sh.ph.text(" "),
                                        ]),
                                        Value($, {
                                            'write delimiters': true,
                                        }),
                                    ])),
                                $p['write delimiters']
                                    ? p_.literal.list([
                                        sh.ph.text(" ]")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($[']']),
                            ]))
                            case 'optional': return p_.option($, ($) => p_.from.state($).decide(
                                ($) => {
                                    switch ($[0]) {
                                        case 'not set': return p_.option($, ($) => p_.literal.segmented_list([
                                            p_.literal.list([
                                                sh.ph.text("_"),
                                            ]),
                                            Token_Trivia($['_']),
                                        ]))
                                        case 'set': return p_.option($, ($) => p_.literal.segmented_list([
                                            p_.literal.list([
                                                sh.ph.text("* "),
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
                                    sh.ph.text("~"),
                                ]),
                                Token_Trivia($['~']),
                            ]))
                            case 'state': return p_.option($, ($) => p_.literal.segmented_list([
                                $p['write delimiters']
                                    ? p_.literal.list([
                                        sh.ph.text("| ")
                                    ])
                                    : p_.literal.list([]),
                                Token_Trivia($['|']),
                                p_.from.state($.status).decide(
                                    ($) => {
                                        switch ($[0]) {
                                            case 'missing': return p_.option($, ($) => p_.literal.segmented_list([
                                                Token_Trivia($['#']),
                                                p_.literal.list([
                                                    sh.ph.text("#"),
                                                ]),
                                            ]))
                                            case 'set': return p_.option($, ($) => p_.literal.segmented_list([
                                                p_.literal.list([
                                                    sh.ph.text(
                                                        ser_primitives.Backticked($.option, {
                                                            'add delimiters': true,
                                                        })
                                                    ),
                                                    sh.ph.text(" "),
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
                                                    case 'apostrophe': return p_.option($, ($) => sh.ph.text(
                                                        ser_primitives.Apostrophed(value, {
                                                            'add delimiters': $p['write delimiters'],
                                                        })
                                                    ))
                                                    case 'quote': return p_.option($, ($) => sh.ph.text(
                                                        ser_primitives.Quoted(value, {
                                                            'add delimiters': $p['write delimiters'],
                                                        })
                                                    ))
                                                    case 'none': return p_.option($, ($) => sh.ph.text(
                                                        ser_primitives.Undelimited(value)
                                                    ))
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

export const Token_Trivia: declarations.Token_Trivia = ($) => p_.literal.list([
    //FIXME
])
