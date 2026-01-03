import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as d_target from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_source from "../../../../../interface/generated/pareto/schemas/token/data_types/source"

//this file contains the parser functionality, each function represents a 'production'/'grammar rule' and return a type from the 'ast' schema

import * as sh from "../../../../../shorthands/parse_result"

const get_required_token = (
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    expected: _pi.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
): d_source.Annotated_Token => {
    return iterator.look().transform(
        ($) => $,
        () => abort(sh.parse_error(
            ['parser', {
                'expected': expected,
                'cause': ['missing token', null]
            }],
            {
                'start': {
                    'absolute': iterator['get position'](),
                    'relative': {
                        'line': -1,
                        'column': -1,
                    }
                },
                'end': {
                    'absolute': iterator['get position'](),
                    'relative': {
                        'line': -1,
                        'column': -1,
                    }
                },
            }
        ))
    )
}

export const Structural_Token = (
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    token: d_source.Annotated_Token, //FIXME: this should be an iterator
): d_target.Structural_Token => {
    return {
        'trailing trivia': token['trailing trivia'],
        'range': {
            'start': token['start'],
            'end': token['end']
        }
    }
}

export const String = (
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
    token: d_source.Annotated_Token,
): d_target.String => {
    if (token.type[0] !== 'string') {
        return abort(sh.unexpected_token(token, _p.list.literal([['a string', null]])))
    }
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
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
): d_target.Document => ({
    'header': _p.block(() => {
        const token = get_required_token(iterator, abort, _p.list.literal([['!', null], ['a value', null]]))
        if (token.type[0] !== '!') {
            return _p.optional.not_set()
        }
        iterator.discard()
        return _p.optional.set({
            '!': Structural_Token(iterator, abort, token),
            'value': Value(iterator, abort)
        })
    }),
    'content': Value(iterator, abort)
})

export const Elements = (
    end_reached: ($: d_source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
): d_target.Elements => {
    return _p.list.build<d_target.Elements.L>(($i): void => {
        while (true) {
            const current_token = get_required_token(iterator, abort, _p.list.literal([end_token, ['a value', null]]))
            if (end_reached(current_token.type)) {
                return
            }
            $i['add element']({
                'value': Value(iterator, abort)
            })
        }
    })
}

export const Key_Value_Pairs = (
    end_reached: ($: d_source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
): d_target.Key_Value_Pairs => {
    return _p.list.build<d_target.Key_Value_Pairs.L>(($i): void => {
        while (true) {
            const current_token = get_required_token(iterator, abort, _p.list.literal([end_token, ['a string', null]]))
            if (end_reached(current_token.type)) {
                return
            }
            iterator.discard()
            $i['add element']({
                'key': String(iterator, abort, current_token),
                'value': _p.block(() => {
                    const candidate_colon = get_required_token(iterator, abort, _p.list.literal([['a string', null], [':', null], end_token]))
                    if (candidate_colon.type[0] !== ':') {
                        return _p.optional.not_set()
                    }
                    iterator.discard()

                    return _p.optional.set({
                        ':': Structural_Token(iterator, abort, candidate_colon),
                        'value': Value(iterator, abort)
                    })
                }),
                ',': _p.optional.not_set()
            })
        }
    })
}

export const Value = (
    iterator: _pi.Iterator<d_source.Annotated_Token>,
    abort: _pi.Abort<d_parse_result.Parse_Error>,
): d_target.Value => {
    const token = get_required_token(iterator, abort, _p.list.literal([['a value', null]]))
    return {
        'type': _p.cc(token.type, ($): d_target.Value._type => {

            switch ($[0]) {
                case 'string': return _p.ss($, ($): d_target.Value._type => {
                    iterator.discard()
                    return ['concrete', ['string', String(iterator, abort, token)]]
                })
                case '{': return _p.ss($, ($) => {
                    iterator.discard()
                    return ['concrete', ['indexed collection', ['dictionary', {
                        '{': Structural_Token(iterator, abort, token),
                        'entries': Key_Value_Pairs(($) => $[0] === '}', ['}', null], iterator, abort),
                        '}': _p.block(() => {
                            const current_token = get_required_token(iterator, abort, _p.list.literal([['}', null]]))
                            iterator.discard()
                            return Structural_Token(iterator, abort, current_token)
                        })
                    }]]]
                })
                case '(': return _p.ss($, ($) => {
                    iterator.discard()
                    return ['concrete', ['indexed collection', ['verbose group', {
                        '(': Structural_Token(iterator, abort, token),
                        'entries': Key_Value_Pairs(($) => $[0] === ')', [')', null], iterator, abort),
                        ')': _p.block(() => {
                            const current_token = get_required_token(iterator, abort, _p.list.literal([[')', null]]))
                            iterator.discard()
                            return Structural_Token(iterator, abort, current_token)
                        })
                    }]]]
                })
                case '[': return _p.ss($, ($): d_target.Value._type => {
                    iterator.discard()
                    return ['concrete', ['ordered collection', ['list', {
                        '[': Structural_Token(iterator, abort, token),
                        'elements': Elements(($) => $[0] === ']', [']', null], iterator, abort),
                        ']': _p.block(() => {
                            const current_token = get_required_token(iterator, abort, _p.list.literal([[']', null]]))
                            iterator.discard()
                            return Structural_Token(iterator, abort, current_token)
                        }),
                    }]]]
                })
                case '<': return _p.ss($, ($): d_target.Value._type => {
                    iterator.discard()
                    return ['concrete', ['ordered collection', ['concise group', {
                        '<': Structural_Token(iterator, abort, token),
                        'elements': Elements(($) => $[0] === '>', ['>', null], iterator, abort),
                        '>': _p.block(() => {
                            const current_token = get_required_token(iterator, abort, _p.list.literal([['>', null]]))
                            iterator.discard()
                            return Structural_Token(iterator, abort, current_token)
                        }),
                    }]]]
                })
                case '@': return _p.ss($, ($) => {
                    iterator.discard()
                    return ['include', {
                        '@': Structural_Token(iterator, abort, token),
                        'path': _p.block(() => {
                            const token = get_required_token(iterator, abort, _p.list.literal([['a string', null]]))
                            iterator.discard()
                            return String(iterator, abort, token)
                        })
                    }]
                })
                case '~': return _p.ss($, ($) => {
                    iterator.discard()
                    return ['concrete', ['not set', {
                        '~': Structural_Token(iterator, abort, token),
                    }]]
                })
                case '|': return _p.ss($, ($) => {
                    iterator.discard()

                    return ['concrete', ['tagged value', {
                        '|': Structural_Token(iterator, abort, token),
                        'status': _p.block(() => {
                            const token = get_required_token(iterator, abort, _p.list.literal([['a value', null], ['#', null]]))
                            iterator.discard()
                            return _p.cc(token.type, ($): d_target.Concrete_Value.SG.tagged_value.status => {
                                switch ($[0]) {
                                    case 'string': return _p.ss($, ($) => {
                                        return ['set', {
                                            'state': String(iterator, abort, token),
                                            'value': Value(iterator, abort)
                                        }]
                                    })
                                    case '#': return _p.ss($, ($) => {
                                        iterator.discard()
                                        return ['missing data', {
                                            '#': Structural_Token(iterator, abort, token),
                                        }]
                                    })
                                    default: return abort(sh.unexpected_token(token, _p.list.literal([
                                        ['a value', null],
                                        ['#', null],
                                    ])))
                                }
                            })
                        })
                    }]]
                })
                case '*': return _p.ss($, ($) => {
                    iterator.discard()
                    return ['concrete', ['set optional value', {
                        '*': Structural_Token(iterator, abort, token),
                        'value': Value(iterator, abort)
                    }]]
                })
                case '#': return _p.ss($, ($) => {
                    iterator.discard()
                    return ['missing data', {
                        '#': Structural_Token(iterator, abort, token),
                    }]
                })

                //unexpected tokens

                case '!': return _p.ss($, ($) => {
                    iterator.discard()
                    return abort(sh.unexpected_token(token, _p.list.literal([
                        ['a value', null]
                    ])))
                })
                case ':': return _p.ss($, ($) => {
                    iterator.discard()
                    return abort(sh.unexpected_token(token, _p.list.literal([
                        ['a value', null]
                    ])))
                })
                case ')': return _p.ss($, ($) => {
                    iterator.discard()
                    return abort(sh.unexpected_token(token, _p.list.literal([
                        ['a value', null]
                    ])))
                })
                case '>': return _p.ss($, ($) => {
                    iterator.discard()
                    return abort(sh.unexpected_token(token, _p.list.literal([
                        ['a value', null]
                    ])))
                })
                case ']': return _p.ss($, ($) => {
                    iterator.discard()
                    return abort(sh.unexpected_token(token, _p.list.literal([
                        ['a value', null]
                    ])))
                })
                case '}': return _p.ss($, ($) => {
                    iterator.discard()
                    return abort(sh.unexpected_token(token, _p.list.literal([
                        ['a value', null]
                    ])))
                })

                default: return _p.au($[0])
            }
        })
    }
}