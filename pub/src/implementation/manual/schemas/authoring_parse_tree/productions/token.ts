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

    export type Structural_Token = _pi.Production_With_Parameters<d_target.Structural_Token, d_parse_result.Parse_Error, d_source.Annotated_Token, { 'token': d_source.Annotated_Token }>
    export type String = _pi.Production_With_Parameters<d_target.String, d_parse_result.Parse_Error, d_source.Annotated_Token, { 'token': d_source.Annotated_Token }>

    export type Elements = _pi.Production_With_Parameters<d_target.Elements, d_parse_result.Parse_Error, d_source.Annotated_Token, {
        'type':
        | ['list', null]
        | ['concise group', null]
    }>
    export type Key_Value_Pairs = _pi.Production_With_Parameters<d_target.Key_Value_Pairs, d_parse_result.Parse_Error, d_source.Annotated_Token, {
        'type':
        | ['dictionary', null]
        | ['verbose group', null]
    }>
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

const look_at_required_token = (
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    expected: _pi.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
): d_source.Annotated_Token => iterator.look().transform(
    ($) => $,
    () => abort(create_missing_token_error(iterator['get position'](), expected))
)

const consume = (
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    expected: _pi.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
): d_source.Annotated_Token => iterator.consume(
    () => abort(create_missing_token_error(iterator['get position'](), expected))

)

export const Document: signatures.Document = (iterator, abort) => ({
    'header': _p.cc(
        iterator.consume(
            ($) => abort(
                create_missing_token_error(
                    iterator['get position'](),
                    _p.list.literal([
                        ['!', null],
                        ['a value', null]
                    ])
                )
            )
        ),
        (token) => token.type[0] !== '!'
            ? _p.optional.not_set()
            : _p.optional.set({
                '!': Structural_Token(iterator, abort, { 'token': token }),
                'value': Value(iterator, abort)
            })
    ),
    'content': Value(iterator, abort)
})

export const Value: signatures.Value = (iterator, abort) => _p.cc(
    consume(iterator, abort, _p.list.literal([['a value', null]])),
    (token) => ({
        'type': _p.cc(token.type, ($): d_target.Value._type => {

            switch ($[0]) {
                case 'string': return _p.ss($, ($): d_target.Value._type => ['concrete', ['string', String(iterator, abort, { 'token': token })]])
                case '{': return _p.ss($, ($) => ['concrete', ['indexed collection', ['dictionary', {
                    '{': Structural_Token(iterator, abort, { 'token': token }),
                    'entries': Key_Value_Pairs(iterator, abort, {
                        'type': ['dictionary', null],
                    }),
                    '}': Structural_Token(iterator, abort, { 'token': consume(iterator, abort, _p.list.literal([['}', null]])) })
                }]]])
                case '(': return _p.ss($, ($) => ['concrete', ['indexed collection', ['verbose group', {
                    '(': Structural_Token(iterator, abort, { 'token': token }),
                    'entries': Key_Value_Pairs(iterator, abort, {
                        'type': ['verbose group', null],
                    }),
                    ')': Structural_Token(iterator, abort, { 'token': consume(iterator, abort, _p.list.literal([[')', null]])) })
                }]]])
                case '[': return _p.ss($, ($): d_target.Value._type => ['concrete', ['ordered collection', ['list', {
                    '[': Structural_Token(iterator, abort, { 'token': token }),
                    'elements': Elements(iterator, abort, {
                        'type': ['list', null],
                    }),
                    ']': Structural_Token(iterator, abort, { 'token': consume(iterator, abort, _p.list.literal([[']', null]])) })
                }]]])
                case '<': return _p.ss($, ($): d_target.Value._type => ['concrete', ['ordered collection', ['concise group', {
                    '<': Structural_Token(iterator, abort, { 'token': token }),
                    'elements': Elements(iterator, abort, {
                        'type': ['concise group', null],
                    }),
                    '>': Structural_Token(iterator, abort, { 'token': consume(iterator, abort, _p.list.literal([['>', null]])) })
                }]]])
                case '@': return _p.ss($, ($) => ['include', {
                    '@': Structural_Token(iterator, abort, { 'token': token }),
                    'path': String(iterator, abort, { 'token': consume(iterator, abort, _p.list.literal([['a string', null]])) })
                }])
                case '~': return _p.ss($, ($) => ['concrete', ['not set', {
                    '~': Structural_Token(iterator, abort, { 'token': token }),
                }]])
                case '|': return _p.ss($, ($) => ['concrete', ['tagged value', {
                    '|': Structural_Token(iterator, abort, { 'token': token }),
                    'status': _p.cc(
                        consume(iterator, abort, _p.list.literal([['a value', null], ['#', null]])),
                        (token) => _p.cc(token.type, ($): d_target.Concrete_Value.SG.tagged_value.status => {
                            switch ($[0]) {
                                case 'string': return _p.ss($, ($) => ['set', {
                                    'state': String(iterator, abort, { 'token': token }),
                                    'value': Value(iterator, abort)
                                }])
                                case '#': return _p.ss($, ($) => ['missing data', {
                                    '#': Structural_Token(iterator, abort, { 'token': token }),
                                }])
                                default: return abort(sh.unexpected_token(token, _p.list.literal([
                                    ['a value', null],
                                    ['#', null],
                                ])))
                            }
                        })
                    )
                }]])
                case '*': return _p.ss($, ($) => ['concrete', ['set optional value', {
                    '*': Structural_Token(iterator, abort, { 'token': token }),
                    'value': Value(iterator, abort)
                }]])
                case '#': return _p.ss($, ($) => ['missing data', {
                    '#': Structural_Token(iterator, abort, { 'token': token }),
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

export const Structural_Token: signatures.Structural_Token = (iterator, abort, $p) => ({
    'trailing trivia': $p.token['trailing trivia'],
    'range': {
        'start': $p.token['start'],
        'end': $p.token['end']
    }
})

export const String: signatures.String = (iterator, abort, $p) => $p.token.type[0] !== 'string'
    ? abort(sh.unexpected_token($p.token, _p.list.literal([['a string', null]])))
    : {
        'range': {
            'start': $p.token['start'],
            'end': $p.token['end']
        },
        'value': $p.token.type[1].value,
        'type': $p.token.type[1].type,
        'trailing trivia': $p.token['trailing trivia'],
    }


export const Elements: signatures.Elements = (iterator, abort, $p) => _p.list.build<d_target.Elements.L>(($i): void => {
    while (true) {
        const end_token = _p.cc($p.type, ($): d_parse_result.Parse_Error._type.SG.parser.expected.L => {
            switch ($[0]) {
                case 'list': return _p.ss($, ($) => [']', null])
                case 'concise group': return _p.ss($, ($) => ['>', null])
                default: return _p.au($[0])
            }
        })
        const current_token = look_at_required_token(iterator, abort, _p.list.literal([end_token, ['a value', null]]))
        const end_reached = _p.cc($p.type, ($) => {
            switch ($[0]) {
                case 'list': return _p.ss($, ($) => current_token.type[0] === ']')
                case 'concise group': return _p.ss($, ($) => current_token.type[0] === '>')
                default: return _p.au($[0])
            }
        })
        if (end_reached) {
            return
        } else {
            $i['add element']({
                'value': Value(iterator, abort)
            })
        }
    }
})

export const Key_Value_Pairs: signatures.Key_Value_Pairs = (iterator, abort, $p) => _p.list.build<d_target.Key_Value_Pairs.L>(($i): void => {
    while (true) {
        const end_token = _p.cc($p.type, ($): d_parse_result.Parse_Error._type.SG.parser.expected.L => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => ['}', null])
                case 'verbose group': return _p.ss($, ($) => [')', null])
                default: return _p.au($[0])
            }
        })
        const current_token = look_at_required_token(iterator, abort, _p.list.literal([end_token, ['a string', null]]))
        const end_reached = _p.cc($p.type, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => current_token.type[0] === '}')
                case 'verbose group': return _p.ss($, ($) => current_token.type[0] === ')')
                default: return _p.au($[0])
            }
        })
        if (end_reached) {
            return
        } else {
            iterator.discard()
            $i['add element']({
                'key': String(iterator, abort, { 'token': current_token }),
                'value': _p.cc(
                    look_at_required_token(iterator, abort, _p.list.literal([['a string', null], [':', null], end_token])),
                    (candidate_colon) => {
                        if (candidate_colon.type[0] !== ':') {
                            return _p.optional.not_set()
                        } else {
                            iterator.discard()
                            return _p.optional.set({
                                ':': Structural_Token(iterator, abort, { 'token': candidate_colon }),
                                'value': Value(iterator, abort)
                            })
                        }
                    }),
                ',': _p.optional.not_set()
            })
        }
    }
})