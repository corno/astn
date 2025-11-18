import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _target from "../../../../../interface/generated/pareto/core/astn_source"
import * as d_parse_result from "../../../../../interface/generated/pareto/core/parse_result"
import * as _source from "../../../../../interface/generated/pareto/core/token"

import * as pg from "./astn_parse_generic"

//this file contains the parser functionality, each function return a type from the 'ast' schema

export const Structural_Token = (token: _source._T_Annotated_Token): _target._T_Structural_Token => {
    return {
        'trailing trivia': token['trailing trivia'],
        'range': {
            'start': token['start'],
            'end': token['end']
        }
    }
}

export const String = (token_iterator: pg.ASTN_Token_Iterator): _target._T_String => {
    const token = token_iterator['get required token'](_ea.list_literal([['a string', null]]))
    if (token.type[0] !== 'string') {
        return pg.throw_unexpected_token(token, _ea.list_literal([['a string', null]]))
    }
    token_iterator['consume token']()
    return {
        'range': {
            'start': token['start'],
            'end': token['end']
        },
        'value': token.type[1].value,
        'type': token.type[1].type,
        'trailing trivia': token['trailing trivia'],
    }
}

export const Document = (token_iterator: pg.ASTN_Token_Iterator): _target._T_Document => {
    return {
        'header': _ea.block(() => {
            const token = token_iterator['get required token'](_ea.list_literal([['!', null], ['a value', null]]))
            if (token.type[0] !== '!') {
                return _ea.not_set()
            }
            token_iterator['consume token']()
            return _ea.set({
                '!': Structural_Token(token),
                'value': Value(token_iterator)
            })
        }),
        'content': Value(token_iterator)
    }
}

export const Elements = (token_iterator: pg.ASTN_Token_Iterator, end_reached: ($: _source._T_Token_Type) => boolean, end_token: d_parse_result.Expected): _target._T_Elements => {
    return _ea.build_list<_target._T_Elements.L>(($i): void => {
        while (true) {
            const current_token = token_iterator['get required token'](_ea.list_literal([end_token, ['a value', null]]))
            if (end_reached(current_token.type)) {
                return
            }
            $i['add element']({
                'value': Value(token_iterator),
            })
        }
    })
}

export const Key_Value_Pairs = (token_iterator: pg.ASTN_Token_Iterator, end_reached: ($: _source._T_Token_Type) => boolean, end_token: d_parse_result.Expected): _target._T_Key_Value_Pairs => {
    return _ea.build_list<_target._T_Key_Value_Pairs.L>(($i): void => {
        while (true) {
            const current_token = token_iterator['get required token'](_ea.list_literal([end_token, ['a string', null]]))
            if (end_reached(current_token.type)) {
                return
            }

            $i['add element']({
                'key': String(token_iterator),
                'value': _ea.block(() => {
                    const candidate_colon = token_iterator['get required token'](_ea.list_literal([['a string', null], [':', null], end_token]))
                    if (candidate_colon.type[0] !== ':') {
                        return _ea.not_set()
                    }
                    token_iterator['consume token']()

                    return _ea.set({
                        ':': Structural_Token(candidate_colon),
                        'value': Value(token_iterator)
                    })
                }),
                ',': _ea.not_set()
            })
        }
    })
}

export const Value = (token_iterator: pg.ASTN_Token_Iterator): _target._T_Value => {
    const token = token_iterator['get required token'](_ea.list_literal([['a value', null]]))
    return _ea.cc(token.type, ($): _target._T_Value => {

        switch ($[0]) {
            case 'string': return _ea.ss($, ($): _target._T_Value => {

                return ['string', String(token_iterator)]
            })
            case '{': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return ['indexed collection', ['dictionary', {
                    '{': Structural_Token(token),
                    'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === '}', ['}', null]),
                    '}': _ea.block(() => {
                        const current_token = token_iterator['get required token'](_ea.list_literal([['}', null]]))
                        token_iterator['consume token']()
                        return Structural_Token(current_token)
                    })
                }]]
            })
            case '(': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return ['indexed collection', ['verbose group', {
                    '(': Structural_Token(token),
                    'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === ')', [')', null]),
                    ')': _ea.block(() => {
                        const current_token = token_iterator['get required token'](_ea.list_literal([[')', null]]))
                        token_iterator['consume token']()
                        return Structural_Token(current_token)
                    })
                }]]
            })
            case '[': return _ea.ss($, ($): _target._T_Value => {
                token_iterator['consume token']()
                return ['ordered collection', ['list', {
                    '[': Structural_Token(token),
                    'elements': Elements(token_iterator, ($) => $[0] === ']', [']', null]),
                    ']': _ea.block(() => {
                        const current_token = token_iterator['get required token'](_ea.list_literal([[']', null]]))
                        token_iterator['consume token']()
                        return Structural_Token(current_token)
                    }),
                }]]
            })
            case '<': return _ea.ss($, ($): _target._T_Value => {
                token_iterator['consume token']()
                return ['ordered collection', ['concise group', {
                    '<': Structural_Token(token),
                    'elements': Elements(token_iterator, ($) => $[0] === '>', ['>', null]),
                    '>': _ea.block(() => {
                        const current_token = token_iterator['get required token'](_ea.list_literal([['>', null]]))
                        token_iterator['consume token']()
                        return Structural_Token(current_token)
                    }),
                }]]
            })
            case '|': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                const token = token_iterator['get required token'](_ea.list_literal([['a value', null], ['#', null]]))

                return ['tagged value', {
                    '|': Structural_Token(token),
                    'state': String(token_iterator),
                    'value': Value(token_iterator)
                }]
            })
            case '*': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return ['set optional value', {
                    '*': Structural_Token(token),
                    'value': Value(token_iterator)
                }]
            })

            case '~': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return ['not set', {
                    '~': Structural_Token(token),
                }]
            })


            //unexpected tokens


            case '#': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })

            case '@': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })

            case '!': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })
            case ':': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })
            case ')': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })
            case '>': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })
            case ']': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })
            case '}': return _ea.ss($, ($) => {
                token_iterator['consume token']()
                return pg.throw_unexpected_token(token, _ea.list_literal([
                    ['a value', null]
                ]))
            })


            default: return _ea.au($[0])

        }
    })
}