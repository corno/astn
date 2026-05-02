import * as _p from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_in from "../../../../interface/generated/liana/schemas/authoring_target/data"

export type Parameters = {
    'write delimiters': boolean
    'in concise group': boolean
}
//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

//dependencies
import * as t_primitives_to_text from "astn-core/dist/implementation/manual/transformers/primitives/text"

export const Document: _pi.Transformer<d_in.Document, d_out.Paragraph> = ($) => sh.pg.composed([
    $.header.__decide(
        ($) => sh.pg.sentences([
            sh.sentence([
                Value($, {
                    'in concise group': false,
                    'write delimiters': true,
                })
            ]),
        ]),
        () => sh.pg.nothing()
    ),
    sh.pg.sentences([
        sh.sentence([
            Value($.content, {
                'in concise group': false,
                'write delimiters': true,
            }),
        ])
    ])
])


export const Value: _pi.Transformer_With_Parameter<d_in.Value, d_out.Phrase, Parameters> = ($, $p) => sh.ph.composed([
    sh.ph.literal(" "),
    _p.decide.state($.data, ($) => {
        switch ($[0]) {
            case 'include': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("@ "),
                Token_Trivia($['@']),
                sh.ph.serialize(t_primitives_to_text.Quoted($.path, {
                    'add delimiters': true,
                })),
            ]))
            case 'missing': return _p.ss($, ($) => sh.ph.composed([
                sh.ph.literal("#"),
                Token_Trivia($['#']),
            ]))
            case 'concrete': return _p.ss($, ($) => _p.decide.state($.type, ($) => _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'dictionary': return _p.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("{") : sh.ph.nothing(), //we always want a newline here
                        Token_Trivia($['{']),
                        sh.ph.indent(
                            sh.pg.sentences(_p.list.from.list(
                                $.entries,
                            ).map(
                                ($) => sh.sentence([
                                    sh.ph.serialize(t_primitives_to_text.Apostrophed($.id, {
                                        'add delimiters': true,
                                    })),
                                    sh.ph.literal(":"),
                                    $.value.__decide(
                                        ($) => Value($, {
                                            'in concise group': false,
                                            'write delimiters': true,
                                        }),
                                        () => sh.ph.nothing()
                                    ),
                                ]))),
                        ),
                        $p['write delimiters'] ? sh.ph.literal("}") : sh.ph.nothing(),
                        Token_Trivia($['}']),
                    ]))
                    case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'concise': return _p.ss($, ($) => sh.ph.composed([
                                // $p['in concise group']
                                //     ? sh.ph.nothing()
                                //     : $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(),
                                $p['write delimiters'] ? sh.ph.literal("<") : sh.ph.nothing(), //for now, always write the <, even in concise groups. Need to implement a proper parser first
                                Token_Trivia($['<']),
                                sh.ph.composed($.properties.__l_map(($) => Value($, {
                                    'in concise group': true,
                                    'write delimiters': true,
                                }))),
                                // $p['in concise group']
                                //     ? sh.ph.nothing()
                                //     : $p['write delimiters'] ? sh.ph.literal(" >") : sh.ph.nothing(),
                                $p['write delimiters'] ? sh.ph.literal(" >") : sh.ph.nothing(), //for now, always write the >, even in concise groups. Need to implement a proper parser first
                                Token_Trivia($['>']),
                            ]))
                            case 'verbose': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.composed([
                                    $p['write delimiters'] ? sh.ph.literal("(") : sh.ph.nothing(), //we always want a newline here
                                    Token_Trivia($['(']),
                                    sh.ph.indent(
                                        sh.pg.sentences(_p.list.from.list(
                                            $.properties,
                                        ).map(
                                            ($) => sh.sentence([
                                                sh.ph.serialize(t_primitives_to_text.Backticked($.id, {
                                                    'add delimiters': true,
                                                })),
                                                sh.ph.literal(":"),
                                                $.value.__decide(
                                                    ($) => Value($, {
                                                        'in concise group': false,
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
                            default: return _p.au($[0])
                        }
                    }))
                    case 'list': return _p.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("[") : sh.ph.nothing(),
                        Token_Trivia($['[']),
                        sh.ph.composed($.items.__l_map(($) => sh.ph.composed([
                            sh.ph.literal(" "),
                            Value($, {
                                'in concise group': false,
                                'write delimiters': true,
                            }),
                        ]))),
                        $p['write delimiters'] ? sh.ph.literal("]") : sh.ph.nothing(),
                        Token_Trivia($[']']),
                    ]))
                    case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                        switch ($[0]) {
                            case 'not set': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("_"),
                                Token_Trivia($['_']),
                            ]))
                            case 'set': return _p.ss($, ($) => sh.ph.composed([
                                sh.ph.literal("* "),
                                Token_Trivia($['*']),
                                Value($.value, {
                                    'in concise group': $p['in concise group'],
                                    'write delimiters': true,
                                }),
                            ]))

                            default: return _p.au($[0])
                        }
                    }))
                    case 'nothing': return _p.ss($, ($) => sh.ph.composed([
                        sh.ph.literal("~"),
                        Token_Trivia($['~']),
                    ]))
                    case 'state': return _p.ss($, ($) => sh.ph.composed([
                        $p['write delimiters'] ? sh.ph.literal("| ") : sh.ph.nothing(),
                        Token_Trivia($['|']),
                        _p.decide.state($.status, ($) => {
                            switch ($[0]) {
                                case 'missing': return _p.ss($, ($) => sh.ph.composed([
                                    Token_Trivia($['#']),
                                    sh.ph.literal("#"),
                                ]))
                                case 'set': return _p.ss($, ($) => sh.ph.composed([
                                    sh.ph.serialize(t_primitives_to_text.Backticked($.option, {
                                        'add delimiters': true,
                                    })),
                                    $p['in concise group']
                                        ? sh.ph.nothing()
                                        : sh.ph.literal(" "),
                                    Value($.value, {
                                        'in concise group': $p['in concise group'],
                                        'write delimiters': true
                                    }),
                                ]))
                                default: return _p.au($[0])
                            }
                        })
                    ]))
                    case 'text': return _p.ss($, ($) => {
                        const value = $.value // fixme: move value to the inside of the delimiter states
                        return sh.ph.composed([
                            _p.decide.state($.delimiter, ($) => {
                                switch ($[0]) {
                                    case 'apostrophe': return _p.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Apostrophed(value, {
                                        'add delimiters': $p['write delimiters'],
                                    })))
                                    case 'quote': return _p.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Quoted(value, {
                                        'add delimiters': $p['write delimiters'],
                                    })))
                                    case 'none': return _p.ss($, ($) => sh.ph.serialize(t_primitives_to_text.Undelimited(value)))
                                    default: return _p.au($[0])
                                }
                            }),
                            Token_Trivia($['trivia']),
                        ])
                    })

                    default: return _p.au($[0])
                }
            })))
            default: return _p.au($[0])
        }
    })
])

export const Token_Trivia: _pi.Transformer<d_in.Token_Trivia, d_out.Phrase> = ($) => sh.ph.composed([
    //FIXME
])
