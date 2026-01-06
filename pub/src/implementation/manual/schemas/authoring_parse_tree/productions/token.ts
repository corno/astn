import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as d_target from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_source from "../../../../../interface/generated/pareto/schemas/token/data_types/source"

//this file contains the parser functionality, each function represents a 'production'/'grammar rule' and return a type from the 'ast' schema

import * as sh from "../../../../../shorthands/parse_result"

export namespace signatures {

    export type Document = _pi.Production<d_target.Document, d_parse_result.Parse_Error, d_source.Annotated_Token>
    export type Value = _pi.Production<d_target.Value, d_parse_result.Parse_Error, d_source.Annotated_Token>

    export type Structural_Token = _pi.Production_With_Parameters<d_target.Structural_Token, d_parse_result.Parse_Error, d_source.Annotated_Token, {
        'expected token': d_source.Annotated_Token._type
    }>
    export type String = _pi.Production<d_target.String, d_parse_result.Parse_Error, d_source.Annotated_Token>

    export type Element = _pi.Production<d_target.Elements.L, d_parse_result.Parse_Error, d_source.Annotated_Token>
    export type Key_Value_Pair = _pi.Production<d_target.Key_Value_Pairs.L, d_parse_result.Parse_Error, d_source.Annotated_Token>
}

const loop = <Iterator_Element>(
    iterator: _pi.Iterator<Iterator_Element>,
    callback: (
        element: Iterator_Element,
        $i: {
            'end reached': () => void
        },
    ) => void
) => {
    while (true) {
        let end_reached = false
        iterator.look().transform(
            ($) => callback(
                $,
                {
                    'end reached': () => {
                        end_reached = true
                    }
                }
            ),
            () => { end_reached = true }
        )
        if (end_reached) {
            return
        }
    }
}

const create_missing_token_error = (
    position: number,
    expected: _pi.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
): d_parse_result.Parse_Error => sh.parse_error(
    ['parser', {
        'expected': expected,
        'cause': ['missing token', null]
    }],
    {
        'start': {
            'absolute': position,
            'relative': {
                'line': -1,
                'column': -1,
            }
        },
        'end': {
            'absolute': position,
            'relative': {
                'line': -1,
                'column': -1,
            }
        },
    }
)

const look_at_required_token = <T>(
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    expected: _pi.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
    callback: (token: d_source.Annotated_Token) => T,
): T => iterator.look().transform(
    ($) => callback($),
    () => abort(create_missing_token_error(iterator['get position'](), expected))
)

const consume = <T>(
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    expected: _pi.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
    callback: (token: d_source.Annotated_Token) => T,
): T => callback(iterator.consume(
    () => abort(create_missing_token_error(iterator['get position'](), expected))
))

export const Document: signatures.Document = (iterator, abort) => ({
    'header': look_at_required_token(
        iterator,
        abort,
        _p.list.literal([
            ['!', null],
            ['a value', null]
        ]), (token) => token.type[0] !== '!'
            ? _p.optional.not_set()
            : _p.optional.set({
                '!': Structural_Token(iterator, abort, { 'expected token': ['!', null] }),
                'value': Value(iterator, abort)
            })
    ),
    'content': Value(iterator, abort)
})

export const Value: signatures.Value = (iterator, abort) => look_at_required_token(
    iterator,
    abort,
    _p.list.literal([
        ['a value', null]
    ]),
    (token) => ({
        'type': _p.sg(token.type, ($): d_target.Value._type => {
            switch ($[0]) {
                case 'string': return _p.ss($, ($): d_target.Value._type => ['concrete', ['string', String(iterator, abort)]])
                case '{': return _p.ss($, ($) => ['concrete', ['indexed collection', ['dictionary', {
                    '{': Structural_Token(iterator, abort, { 'expected token': ['{', null] }),
                    'entries': _p.list.build(($i): void => {
                        loop(
                            iterator,
                            (current_token, $i2) => {
                                if (current_token.type[0] === '}') {
                                    $i2['end reached']()
                                } else {
                                    $i['add element'](Key_Value_Pair(iterator, abort))
                                }
                            }
                        )
                    }),
                    '}': Structural_Token(iterator, abort, { 'expected token': ['}', null] })
                }]]])
                case '(': return _p.ss($, ($) => ['concrete', ['indexed collection', ['verbose group', {
                    '(': Structural_Token(iterator, abort, { 'expected token': ['(', null] }),
                    'entries': _p.list.build(($i): void => {
                        loop(
                            iterator,
                            (current_token, $i2) => {
                                if (current_token.type[0] === ')') {
                                    $i2['end reached']()
                                } else {
                                    $i['add element'](Key_Value_Pair(iterator, abort))
                                }
                            }
                        )
                    }),
                    ')': Structural_Token(iterator, abort, { 'expected token': [')', null] })
                }]]])
                case '[': return _p.ss($, ($): d_target.Value._type => ['concrete', ['ordered collection', ['list', {
                    '[': Structural_Token(iterator, abort, { 'expected token': ['[', null] }),
                    'elements': _p.list.build(($i): void => {
                        loop(
                            iterator,
                            (current_token, $i2) => {
                                if (current_token.type[0] === ']') {
                                    $i2['end reached']()
                                } else {
                                    $i['add element'](Element(iterator, abort))
                                }
                            }
                        )
                    }),
                    ']': Structural_Token(iterator, abort, { 'expected token': [']', null] })
                }]]])
                case '<': return _p.ss($, ($): d_target.Value._type => ['concrete', ['ordered collection', ['concise group', {
                    '<': Structural_Token(iterator, abort, { 'expected token': ['<', null] }),
                    'elements': _p.list.build(($i): void => {
                        loop(
                            iterator,
                            (current_token, $i2) => {
                                if (current_token.type[0] === '>') {
                                    $i2['end reached']()
                                } else {
                                    $i['add element'](Element(iterator, abort))
                                }
                            }
                        )
                    }),
                    '>': Structural_Token(iterator, abort, { 'expected token': ['>', null] })
                }]]])
                case '@': return _p.ss($, ($) => ['include', {
                    '@': Structural_Token(iterator, abort, { 'expected token': ['@', null] }),
                    'path': String(iterator, abort)
                }])
                case '~': return _p.ss($, ($) => ['concrete', ['not set', {
                    '~': Structural_Token(iterator, abort, { 'expected token': ['~', null] }),
                }]])
                case '|': return _p.ss($, ($) => ['concrete', ['tagged value', {
                    '|': Structural_Token(iterator, abort, { 'expected token': ['|', null] }),
                    'status': consume(
                        iterator,
                        abort,
                        _p.list.literal([
                            ['a value', null],
                            ['#', null]
                        ]),
                        (token) => _p.sg(token.type, ($): d_target.Concrete_Value.SG.tagged_value.status => {
                            switch ($[0]) {
                                case 'string': return _p.ss($, ($) => ['set', {
                                    'state': String(iterator, abort),
                                    'value': Value(iterator, abort)
                                }])
                                case '#': return _p.ss($, ($) => ['missing data', {
                                    '#': Structural_Token(iterator, abort, { 'expected token': ['#', null] }),
                                }])
                                default: return abort(sh.unexpected_token(token, _p.list.literal([
                                    ['a value', null],
                                    ['#', null],
                                ])))
                            }
                        }))
                }]])
                case '*': return _p.ss($, ($) => ['concrete', ['set optional value', {
                    '*': Structural_Token(iterator, abort, { 'expected token': ['*', null] }),
                    'value': Value(iterator, abort)
                }]])
                case '#': return _p.ss($, ($) => ['missing data', {
                    '#': Structural_Token(iterator, abort, { 'expected token': ['#', null] }),
                }])

                //unexpected tokens

                case '!': return _p.ss($, ($) => abort(sh.unexpected_token(token, _p.list.literal([
                    ['a value', null]
                ]))))
                case ':': return _p.ss($, ($) => abort(sh.unexpected_token(token, _p.list.literal([
                    ['a value', null]
                ]))))
                case ')': return _p.ss($, ($) => abort(sh.unexpected_token(token, _p.list.literal([
                    ['a value', null]
                ]))))
                case '>': return _p.ss($, ($) => abort(sh.unexpected_token(token, _p.list.literal([
                    ['a value', null]
                ]))))
                case ']': return _p.ss($, ($) => abort(sh.unexpected_token(token, _p.list.literal([
                    ['a value', null]
                ]))))
                case '}': return _p.ss($, ($) => abort(sh.unexpected_token(token, _p.list.literal([
                    ['a value', null]
                ]))))
                default: return _p.au($[0])
            }
        })
    })
)

export const Structural_Token: signatures.Structural_Token = (iterator, abort, $p) => consume(
    iterator,
    abort,
    _p.list.literal([
        _p.sg($p['expected token'], ($): d_parse_result.Parse_Error._type.SG.parser.expected.L => {
            switch ($[0]) {
                case 'string': return _p.ss($, ($) => ['a string', null])
                case '!': return _p.ss($, ($) => ['!', null])
                case '#': return _p.ss($, ($) => ['#', null])
                case ')': return _p.ss($, ($) => [')', null])
                case ':': return _p.ss($, ($) => [':', null])
                case '>': return _p.ss($, ($) => ['>', null])
                case '@': return _p.ss($, ($) => ['@', null])
                case ']': return _p.ss($, ($) => [']', null])
                case '}': return _p.ss($, ($) => ['}', null])

                //fix these!
                case '(': return _p.ss($, ($) => ['!', null])
                case '*': return _p.ss($, ($) => ['!', null])
                case '<': return _p.ss($, ($) => ['!', null])
                case '[': return _p.ss($, ($) => ['!', null])
                case '{': return _p.ss($, ($) => ['!', null])
                case '|': return _p.ss($, ($) => ['!', null])
                case '~': return _p.ss($, ($) => ['!', null])
                default: return _p.au($[0])

            }
        })
    ]),
    (token) => ({
        'trailing trivia': token['trailing trivia'],
        'range': {
            'start': token['start'],
            'end': token['end']
        }
    })
)

export const String: signatures.String = (iterator, abort) => consume(
    iterator,
    abort,
    _p.list.literal([
        ['a string', null]
    ]),
    (token) => token.type[0] !== 'string'
        ? abort(sh.unexpected_token(token, _p.list.literal([['a string', null]])))
        : ({
            'range': {
                'start': token['start'],
                'end': token['end']
            },
            'value': token.type[1].value,
            'type': token.type[1].type,
            'trailing trivia': token['trailing trivia'],
        })
)

export const Element: signatures.Element = (iterator, abort) => ({
    'value': Value(iterator, abort)
    //',': _p.optional.not_set() //FIXME implement optional comma
})

export const Key_Value_Pair: signatures.Key_Value_Pair = (iterator, abort) => ({
    'key': String(iterator, abort),
    'value': iterator.look().transform(
        ($) => $.type[0] !== ':'
            ? _p.optional.not_set()
            : _p.optional.set({
                ':': Structural_Token(iterator, abort, { 'expected token': [':', null] }),
                'value': Value(iterator, abort)
            }),
        () => _p.optional.not_set()
    ),
    ',': _p.optional.not_set() //FIXME implement optional comma
})