import * as pt from 'pareto-core/dist/assign'
import * as p_ti from 'pareto-core/dist/transformer/interface'
import p_list_from_text from 'pareto-core/dist/specials/list_from_text'
import * as p_di from 'pareto-core/dist/data/interface'

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

export const Document: p_ti.Transformer<d_in.Document, d_out.Paragraph> = ($) => sh.pg.composed([
    $.header.__decide(
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


export const Value: p_ti.Transformer_With_Parameter<d_in.Value, d_out.Phrase, Parameters> = ($, $p) => sh.ph.composed([
    pt.decide.state($.data, ($) => {
        switch ($[0]) {
            case 'include': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("@ "),
                Token_Trivia($['@']),
                sh.ph.serialize(t_primitives_to_text.Quoted($.path, {
                    'add delimiters': true,
                })),
            ]))
            case 'missing': return pt.ss($, ($) => sh.ph.composed([
                sh.ph.literal("#"),
                Token_Trivia($['#']),
            ]))
            case 'concrete': return pt.ss($, ($) => pt.decide.state($.type, ($) => pt.decide.state($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return pt.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("{") : sh.ph.nothing(), //we always want a newline here
                        Token_Trivia($['{']),
                        sh.ph.indent(
                            sh.pg.sentences(pt.list.from.list(
                                $.entries,
                            ).map(
                                ($) => sh.sentence([
                                    sh.ph.serialize(t_primitives_to_text.Apostrophed($.id, {
                                        'add delimiters': true,
                                    })),
                                    sh.ph.literal(": "),
                                    $.value.__decide(
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
                    case 'group': return pt.ss($, ($) => pt.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'concise': return pt.ss($, ($) => sh.ph.composed([
                                // $p['in concise group']
                                //     ? sh.ph.nothing()
                                //     : $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(),
                                $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(), //for now, always write the <, even in concise groups. Need to implement a proper parser first
                                Token_Trivia($['<']),
                                sh.ph.composed($.properties.__l_map(($) => sh.ph.composed([
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
                            case 'verbose': return pt.ss($, ($) => sh.ph.composed([
                                sh.ph.composed([
                                    $p['write delimiters'] ? sh.ph.literal("(") : sh.ph.nothing(), //we always want a newline here
                                    Token_Trivia($['(']),
                                    sh.ph.indent(
                                        sh.pg.sentences(pt.list.from.list(
                                            $.properties,
                                        ).map(
                                            ($) => sh.sentence([
                                                sh.ph.serialize(t_primitives_to_text.Backticked($.id, {
                                                    'add delimiters': true,
                                                })),
                                                sh.ph.literal(": "),
                                                $.value.__decide(
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
                            default: return pt.au($[0])
                        }
                    }))
                    case 'list': return pt.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("[") : sh.ph.nothing(),
                        Token_Trivia($['[']),
                        sh.ph.composed($.items.__l_map(($) => sh.ph.composed([
                            sh.ph.literal(" "),
                            Value($, {
                                'write delimiters': true,
                            }),
                        ]))),
                        $p['write delimiters'] ? sh.ph.literal(" ]") : sh.ph.nothing(),
                        Token_Trivia($[']']),
                    ]))
                    case 'optional': return pt.ss($, ($) => pt.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'not set': return pt.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("_"),
                                Token_Trivia($['_']),
                            ]))
                            case 'set': return pt.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("* "),
                                Token_Trivia($['*']),
                                Value($.value, {
                                    'write delimiters': true,
                                }),
                            ]))

                            default: return pt.au($[0])
                        }
                    }))
                    case 'nothing': return pt.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("~"),
                        Token_Trivia($['~']),
                    ]))
                    case 'state': return pt.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("| ") : sh.ph.nothing(),
                        Token_Trivia($['|']),
                        pt.decide.state($.status, ($) => {
                            switch ($[0]) {
                                case 'missing': return pt.ss($, ($) => sh.ph.composed([
                                    Token_Trivia($['#']),
                                    sh.ph.literal("#"),
                                ]))
                                case 'set': return pt.ss($, ($) => sh.ph.composed([
                                    sh.ph.serialize(t_primitives_to_text.Backticked($.option, {
                                        'add delimiters': true,
                                    })),
                                    sh.ph.literal(" "),
                                    Value($.value, {
                                        'write delimiters': true,
                                    }),
                                ]))
                                default: return pt.au($[0])
                            }
                        })
                    ]))
                    case 'text': return pt.ss($, ($) => {
                        const value = $.value // fixme: move value to the inside of the delimiter states
                        return sh.ph.composed([
                            pt.decide.state($.delimiter, ($) => {
                                switch ($[0]) {
                                    case 'apostrophe': return pt.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Apostrophed(value, {
                                        'add delimiters': $p['write delimiters'],
                                    })))
                                    case 'quote': return pt.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Quoted(value, {
                                        'add delimiters': $p['write delimiters'],
                                    })))
                                    case 'none': return pt.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Undelimited(value)))
                                    default: return pt.au($[0])
                                }
                            }),
                            Token_Trivia($['trivia']),
                        ])
                    })

                    default: return pt.au($[0])
                }
            })))
            default: return pt.au($[0])
        }
    })
])

export const Token_Trivia: p_ti.Transformer<d_in.Token_Trivia, d_out.Phrase> = ($) => sh.ph.composed([
    //FIXME
])
