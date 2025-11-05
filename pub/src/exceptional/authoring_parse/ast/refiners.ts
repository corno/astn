import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _target from "../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as _source from "../../../interface/generated/pareto/schemas/token/data_types/source"

import * as ti from "./iterator"
import * as h from "./helpers"
import { Abort } from '../refine_guard'

//this file contains the parser functionality, each function return a type from the 'ast' schema

export const Structural_Token = (
    token: _source.Annotated_Token,
    abort: Abort<d_parse_result.Parse_Error>,
): _target.Structural_Token => {
    return {
        'trailing trivia': token['trailing trivia'],
        'range': {
            'start': token['start'],
            'end': token['end']
        }
    }
}

export const String = (
    token_iterator: ti.ASTN_Tokens_Iterator,
    abort: Abort<d_parse_result.Parse_Error>,
): _target.String => {
    const token = h.get_required_token(token_iterator, _ea.array_literal([['a string', null]]), abort)
    if (token.type[0] !== 'string') {
        return abort(h.unexpected_token(token, _ea.array_literal([['a string', null]])))
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

export const Document = (
    token_iterator: ti.ASTN_Tokens_Iterator,
    abort: Abort<d_parse_result.Parse_Error>,
): _target.Document => {
    return {
        'header': _ea.block(() => {
            const token = h.get_required_token(token_iterator, _ea.array_literal([['!', null], ['a value', null]]), abort)
            if (token.type[0] !== '!') {
                return _ea.not_set()
            }
            token_iterator['consume token']()
            return _ea.set({
                '!': Structural_Token(token, abort),
                'value': Value(token_iterator, abort)
            })
        }),
        'content': Value(token_iterator, abort)
    }
}

export const Elements = (
    token_iterator: ti.ASTN_Tokens_Iterator,
    end_reached: ($: _source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    abort: Abort<d_parse_result.Parse_Error>,
): _target.Elements => {
    return _ea.build_list<_target.Elements.L>(($i): void => {
        while (true) {
            const current_token = h.get_required_token(token_iterator, _ea.array_literal([end_token, ['a value', null]]), abort)
            if (end_reached(current_token.type)) {
                return
            }
            $i['add element']({
                'value': Value(token_iterator, abort),
            })
        }
    })
}

export const Key_Value_Pairs = (
    token_iterator: ti.ASTN_Tokens_Iterator,
    end_reached: ($: _source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    abort: Abort<d_parse_result.Parse_Error>,
): _target.Key_Value_Pairs => {
    return _ea.build_list<_target.Key_Value_Pairs.L>(($i): void => {
        while (true) {
            const current_token = h.get_required_token(token_iterator, _ea.array_literal([end_token, ['a string', null]]), abort)
            if (end_reached(current_token.type)) {
                return
            }

            $i['add element']({
                'key': String(token_iterator, abort),
                'value': _ea.block(() => {
                    const candidate_colon = h.get_required_token(token_iterator, _ea.array_literal([['a string', null], [':', null], end_token]), abort)
                    if (candidate_colon.type[0] !== ':') {
                        return _ea.not_set()
                    }
                    token_iterator['consume token']()

                    return _ea.set({
                        ':': Structural_Token(candidate_colon, abort),
                        'value': Value(token_iterator, abort)
                    })
                }),
                ',': _ea.not_set()
            })
        }
    })
}

export const Value = (
    token_iterator: ti.ASTN_Tokens_Iterator,
    abort: Abort<d_parse_result.Parse_Error>,
): _target.Value => {
    const token = h.get_required_token(token_iterator, _ea.array_literal([['a value', null]]), abort)
    return {
        'type': _ea.cc(token.type, ($): _target.Value._type => {

            switch ($[0]) {
                case 'string': return _ea.ss($, ($): _target.Value._type => {

                    return ['concrete', ['string', String(token_iterator, abort)]]
                })
                case '{': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['concrete', ['indexed collection', ['dictionary', {
                        '{': Structural_Token(token, abort),
                        'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === '}', ['}', null], abort),
                        '}': _ea.block(() => {
                            const current_token = h.get_required_token(token_iterator, _ea.array_literal([['}', null]]), abort)
                            token_iterator['consume token']()
                            return Structural_Token(current_token, abort)
                        })
                    }]]]
                })
                case '(': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['concrete', ['indexed collection', ['verbose group', {
                        '(': Structural_Token(token, abort),
                        'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === ')', [')', null], abort),
                        ')': _ea.block(() => {
                            const current_token = h.get_required_token(token_iterator, _ea.array_literal([[')', null]]), abort)
                            token_iterator['consume token']()
                            return Structural_Token(current_token, abort)
                        })
                    }]]]
                })
                case '[': return _ea.ss($, ($): _target.Value._type => {
                    token_iterator['consume token']()
                    return ['concrete', ['ordered collection', ['list', {
                        '[': Structural_Token(token, abort),
                        'elements': Elements(token_iterator, ($) => $[0] === ']', [']', null], abort),
                        ']': _ea.block(() => {
                            const current_token = h.get_required_token(token_iterator, _ea.array_literal([[']', null]]), abort)
                            token_iterator['consume token']()
                            return Structural_Token(current_token, abort)
                        }),
                    }]]]
                })
                case '<': return _ea.ss($, ($): _target.Value._type => {
                    token_iterator['consume token']()
                    return ['concrete', ['ordered collection', ['concise group', {
                        '<': Structural_Token(token, abort),
                        'elements': Elements(token_iterator, ($) => $[0] === '>', ['>', null], abort),
                        '>': _ea.block(() => {
                            const current_token = h.get_required_token(token_iterator, _ea.array_literal([['>', null]]), abort)
                            token_iterator['consume token']()
                            return Structural_Token(current_token, abort)
                        }),
                    }]]]
                })
                case '@': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['include', {
                        '@': Structural_Token(token, abort),
                        'path': String(token_iterator, abort)
                    }]
                })
                case '~': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['concrete', ['not set', {
                        '~': Structural_Token(token, abort),
                    }]]
                })
                case '|': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    const token = h.get_required_token(token_iterator, _ea.array_literal([['a value', null], ['#', null]]), abort)

                    return ['concrete', ['tagged value', {
                        '|': Structural_Token(token, abort),
                        'status': _ea.cc(token.type, ($): _target.Concrete_Value.SG.tagged_value.status => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => {
                                    return ['set', {
                                        'state': String(token_iterator, abort),
                                        'value': Value(token_iterator, abort)
                                    }]
                                })
                                case '#': return _ea.ss($, ($) => {
                                    token_iterator['consume token']()
                                    return ['missing data', {
                                        '#': Structural_Token(token, abort),
                                    }]
                                })
                                default: return abort(h.unexpected_token(token, _ea.array_literal([
                                    ['a value', null],
                                    ['#', null],
                                ])))
                            }
                        })
                    }]]
                })
                case '*': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['concrete', ['set optional value', {
                        '*': Structural_Token(token, abort),
                        'value': Value(token_iterator, abort)
                    }]]
                })
                case '#': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['missing data', {
                        '#': Structural_Token(token, abort),
                    }]
                })


                //unexpected tokens

                case '!': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return abort(h.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ])))
                })
                case ':': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return abort(h.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ])))
                })
                case ')': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return abort(h.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ])))
                })
                case '>': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return abort(h.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ])))
                })
                case ']': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return abort(h.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ])))
                })
                case '}': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return abort(h.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ])))
                })


                default: return _ea.au($[0])

            }
        })
    }
}