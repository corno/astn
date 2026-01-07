import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as new_pi from "./new_interface_signatures"

import * as d_target from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_source from "../../../../../interface/generated/pareto/schemas/token/data_types/source"
export namespace signatures {

    export type Document = new_pi.Production_Without_Parameters<
        d_target.Document,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L
    >

    export type Value = new_pi.Production_Without_Parameters<
        d_target.Value,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L
    >

    export type Structural_Token = new_pi.Production_Without_Parameters<d_target.Structural_Token,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L
    >

    export type String = new_pi.Production<
        d_target.String,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L,
        {
            'string': d_source.Token_Type.SG._string
        }
    >

    export type Elements = new_pi.Production<
        d_target.Elements,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L,
        {
            'end token': d_parse_result.Parse_Error._type.SG.parser.expected.L
        }
    >

    export type Element = new_pi.Production<
        d_target.Elements,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L,
        {
            'end token': d_parse_result.Parse_Error._type.SG.parser.expected.L
        }
    >

    export type Key_Value_Pairs = new_pi.Production<
        d_target.Key_Value_Pairs,
        d_source.Annotated_Token,
        d_parse_result.Parse_Error._type.SG.parser.expected.L,
        {
            'end token': d_parse_result.Parse_Error._type.SG.parser.expected.L
        }
    >

}


export const Document: signatures.Document = (iterator) => ({
    'header': iterator.expect(
        [
            ['!', null],
            ['a value', null]
        ],
        (token, abort) => token.type[0] === '!'
            ? _p.optional.set({
                '!': Structural_Token(iterator),
                'value': Value(iterator)
            })
            : _p.optional.not_set()
    ),
    'content': Value(iterator)
})

export const Value: signatures.Value = (iterator) => iterator.expect(
    [
        ['a value', null]
    ],
    (token, abort) => ({
        'type': _p.sg(token.type, ($): d_target.Value._type => {
            switch ($[0]) {
                case 'string': return _p.ss($, ($): d_target.Value._type => ['concrete',
                    ['string', iterator.expect(
                        [
                            ['a string', null]
                        ],
                        (token, abort) => token.type[0] === 'string'
                            ? String(iterator, { 'string': token.type[1] })
                            : abort()

                    )]
                ])
                case '{': return _p.ss($, ($) => ['concrete', ['indexed collection', ['dictionary', {
                    '{': Structural_Token(iterator),
                    'entries': Key_Value_Pairs(iterator, { 'end token': ['}', null] }),
                    '}': Structural_Token(iterator)
                }]]])
                case '(': return _p.ss($, ($) => ['concrete', ['indexed collection', ['verbose group', {
                    '(': Structural_Token(iterator),
                    'entries': Key_Value_Pairs(iterator, { 'end token': [')', null] }),
                    ')': Structural_Token(iterator)
                }]]])
                case '[': return _p.ss($, ($): d_target.Value._type => ['concrete', ['ordered collection', ['list', {
                    '[': Structural_Token(iterator),
                    'elements': Elements(iterator, { 'end token': [']', null] }),
                    ']': Structural_Token(iterator)
                }]]])
                case '<': return _p.ss($, ($): d_target.Value._type => ['concrete', ['ordered collection', ['concise group', {
                    '<': Structural_Token(iterator),
                    'elements': Elements(iterator, { 'end token': ['>', null] }),
                    '>': Structural_Token(iterator)
                }]]])
                case '@': return _p.ss($, ($) => ['include', {
                    '@': Structural_Token(iterator),
                    'path': iterator.expect(
                        [
                            ['a string', null]
                        ],
                        (token, abort) => token.type[0] === 'string'
                            ? String(iterator, { 'string': token.type[1] })
                            : abort()
                    )
                }])
                case '~': return _p.ss($, ($) => ['concrete', ['not set', {
                    '~': Structural_Token(iterator),
                }]])
                case '|': return _p.ss($, ($) => ['concrete', ['tagged value', {
                    '|': Structural_Token(iterator),
                    'status': iterator.expect(
                        [
                            ['a value', null],
                            ['#', null]
                        ],
                        (token, abort) => _p.sg(token.type, ($): d_target.Concrete_Value.SG.tagged_value.status => {
                            switch ($[0]) {
                                case 'string': return _p.ss($, ($) => ['set', {
                                    'state': String(iterator, { 'string': $ }),
                                    'value': Value(iterator)
                                }])
                                case '#': return _p.ss($, ($) => ['missing data', {
                                    '#': Structural_Token(iterator),
                                }])
                                default: return abort()
                            }
                        }))
                }]])
                case '*': return _p.ss($, ($) => ['concrete', ['set optional value', {
                    '*': Structural_Token(iterator),
                    'value': Value(iterator)
                }]])
                case '#': return _p.ss($, ($) => ['missing data', {
                    '#': Structural_Token(iterator),
                }])

                //unexpected tokens

                // case '!': return _p.ss($, ($) => iterator.unexpected_token(token, _p.list.literal([
                //     ['a value', null]
                // ])))
                // case ':': return _p.ss($, ($) => iterator.unexpected_token(token, _p.list.literal([
                //     ['a value', null]
                // ])))
                // case ')': return _p.ss($, ($) => iterator.unexpected_token(token, _p.list.literal([
                //     ['a value', null]
                // ])))
                // case '>': return _p.ss($, ($) => iterator.unexpected_token(token, _p.list.literal([
                //     ['a value', null]
                // ])))
                // case ']': return _p.ss($, ($) => iterator.unexpected_token(token, _p.list.literal([
                //     ['a value', null]
                // ])))
                // case '}': return _p.ss($, ($) => iterator.unexpected_token(token, _p.list.literal([
                //     ['a value', null]
                // ])))
                default: return abort()
            }
        })
    })
)

export const Structural_Token: signatures.Structural_Token = (iterator) => iterator.consume((token) => ({
    'trailing trivia': token['trailing trivia'],
    'range': {
        'start': token['start'],
        'end': token['end']
    }
}))

export const String: signatures.String = (iterator, $p) => iterator.consume((token) => ({
    'range': {
        'start': token['start'],
        'end': token['end']
    },
    'value': $p.string.value,
    'type': $p.string.type,
    'trailing trivia': token['trailing trivia'],
}))

export const Elements: signatures.Elements = (iterator, $p) => iterator.list(
    (current_token) => current_token.type[0] === $p['end token'][0],
    () => iterator.expect(
        [
            ['a value', null],
            $p['end token']
        ],
        (token, abort) => ({
            'value': Value(iterator)
        })
    )

)

export const Key_Value_Pairs: signatures.Key_Value_Pairs = (iterator, $p) => iterator.list(
    (current_token) => current_token.type[0] === $p['end token'][0],
    () => ({
        'key': iterator.expect(
            [
                ['a string', null],
                $p['end token'],
            ],
            (token, abort) => token.type[0] === 'string'
                ? String(iterator, { 'string': token.type[1] })
                : abort()
        ),
        'value': iterator.expect(
            [
                ['a string', null],
                [':', null],
                $p['end token'],
            ],
            (token, abort) => _p.sg(token.type, ($) => {
                switch ($[0]) {
                    case ':': return _p.ss($, ($) => _p.optional.set({
                        ':': Structural_Token(iterator),
                        'value': Value(iterator)
                    }))
                    case ')': return _p.ss($, ($) => _p.optional.not_set())
                    case '}': return _p.ss($, ($) => _p.optional.not_set())
                    case 'string': return _p.ss($, ($) => _p.optional.not_set())
                    default: return abort()
                }
            })
        ),
        ',': _p.optional.not_set() //FIXME implement optional comma (or keep it as 'whitespace' but then remove this property)
    })
)
