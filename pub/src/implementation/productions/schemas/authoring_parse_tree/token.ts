import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _target from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as _source from "../../../../interface/generated/pareto/schemas/token/data_types/source"

//this file contains the parser functionality, each function represents a 'production'/'grammar rule' and return a type from the 'ast' schema

import * as sh from "../../../../shorthands/parse_result"

const get_required_token = (
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
    expected: _et.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
): _source.Annotated_Token => {
    return iterator['get current']().transform(
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
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
    token: _source.Annotated_Token, //FIXME: this should be an iterator
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
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): _target.String => {
    const token = get_required_token(iterator, abort, _ea.list_literal([['a string', null]]))
    if (token.type[0] !== 'string') {
        return abort(sh.unexpected_token(token, _ea.list_literal([['a string', null]])))
    }
    iterator['consume']()
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
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): _target.Document => {
    return {
        'header': _ea.block(() => {
            const token = get_required_token(iterator, abort, _ea.list_literal([['!', null], ['a value', null]]))
            if (token.type[0] !== '!') {
                return _ea.not_set()
            }
            iterator['consume']()
            return _ea.set({
                '!': Structural_Token(iterator, abort, token),
                'value': Value(iterator, abort)
            })
        }),
        'content': Value(iterator, abort)
    }
}

export const Elements = (
    end_reached: ($: _source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): _target.Elements => {
    return _ea.build_list<_target.Elements.L>(($i): void => {
        while (true) {
            const current_token = get_required_token(iterator, abort, _ea.list_literal([end_token, ['a value', null]]))
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
    end_reached: ($: _source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): _target.Key_Value_Pairs => {
    return _ea.build_list<_target.Key_Value_Pairs.L>(($i): void => {
        while (true) {
            const current_token = get_required_token(iterator, abort, _ea.list_literal([end_token, ['a string', null]]))
            if (end_reached(current_token.type)) {
                return
            }

            $i['add element']({
                'key': String(iterator, abort),
                'value': _ea.block(() => {
                    const candidate_colon = get_required_token(iterator, abort, _ea.list_literal([['a string', null], [':', null], end_token]))
                    if (candidate_colon.type[0] !== ':') {
                        return _ea.not_set()
                    }
                    iterator['consume']()

                    return _ea.set({
                        ':': Structural_Token(iterator, abort, candidate_colon),
                        'value': Value(iterator, abort)
                    })
                }),
                ',': _ea.not_set()
            })
        }
    })
}

export const Value = (
    iterator: _et.Iterator<_source.Annotated_Token>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): _target.Value => {
    const token = get_required_token(iterator, abort, _ea.list_literal([['a value', null]]))
    return {
        'type': _ea.cc(token.type, ($): _target.Value._type => {

            switch ($[0]) {
                case 'string': return _ea.ss($, ($): _target.Value._type => {

                    return ['concrete', ['string', String(iterator, abort)]]
                })
                case '{': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return ['concrete', ['indexed collection', ['dictionary', {
                        '{': Structural_Token(iterator, abort, token),
                        'entries': Key_Value_Pairs(($) => $[0] === '}', ['}', null], iterator, abort),
                        '}': _ea.block(() => {
                            const current_token = get_required_token(iterator, abort, _ea.list_literal([['}', null]]))
                            iterator['consume']()
                            return Structural_Token(iterator, abort, current_token)
                        })
                    }]]]
                })
                case '(': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return ['concrete', ['indexed collection', ['verbose group', {
                        '(': Structural_Token(iterator, abort, token),
                        'entries': Key_Value_Pairs(($) => $[0] === ')', [')', null], iterator, abort),
                        ')': _ea.block(() => {
                            const current_token = get_required_token(iterator, abort, _ea.list_literal([[')', null]]))
                            iterator['consume']()
                            return Structural_Token(iterator, abort, current_token)
                        })
                    }]]]
                })
                case '[': return _ea.ss($, ($): _target.Value._type => {
                    iterator['consume']()
                    return ['concrete', ['ordered collection', ['list', {
                        '[': Structural_Token(iterator, abort, token),
                        'elements': Elements(($) => $[0] === ']', [']', null], iterator, abort),
                        ']': _ea.block(() => {
                            const current_token = get_required_token(iterator, abort, _ea.list_literal([[']', null]]))
                            iterator['consume']()
                            return Structural_Token(iterator, abort, current_token)
                        }),
                    }]]]
                })
                case '<': return _ea.ss($, ($): _target.Value._type => {
                    iterator['consume']()
                    return ['concrete', ['ordered collection', ['concise group', {
                        '<': Structural_Token(iterator, abort, token),
                        'elements': Elements(($) => $[0] === '>', ['>', null], iterator, abort),
                        '>': _ea.block(() => {
                            const current_token = get_required_token(iterator, abort, _ea.list_literal([['>', null]]))
                            iterator['consume']()
                            return Structural_Token(iterator, abort, current_token)
                        }),
                    }]]]
                })
                case '@': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return ['include', {
                        '@': Structural_Token(iterator, abort, token),
                        'path': String(iterator, abort)
                    }]
                })
                case '~': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return ['concrete', ['not set', {
                        '~': Structural_Token(iterator, abort, token),
                    }]]
                })
                case '|': return _ea.ss($, ($) => {
                    iterator['consume']()
                    const token = get_required_token(iterator, abort, _ea.list_literal([['a value', null], ['#', null]]))

                    return ['concrete', ['tagged value', {
                        '|': Structural_Token(iterator, abort, token),
                        'status': _ea.cc(token.type, ($): _target.Concrete_Value.SG.tagged_value.status => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => {
                                    return ['set', {
                                        'state': String(iterator, abort),
                                        'value': Value(iterator, abort)
                                    }]
                                })
                                case '#': return _ea.ss($, ($) => {
                                    iterator['consume']()
                                    return ['missing data', {
                                        '#': Structural_Token(iterator, abort, token),
                                    }]
                                })
                                default: return abort(sh.unexpected_token(token, _ea.list_literal([
                                    ['a value', null],
                                    ['#', null],
                                ])))
                            }
                        })
                    }]]
                })
                case '*': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return ['concrete', ['set optional value', {
                        '*': Structural_Token(iterator, abort, token),
                        'value': Value(iterator, abort)
                    }]]
                })
                case '#': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return ['missing data', {
                        '#': Structural_Token(iterator, abort, token),
                    }]
                })

                //unexpected tokens

                case '!': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return abort(sh.unexpected_token(token, _ea.list_literal([
                        ['a value', null]
                    ])))
                })
                case ':': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return abort(sh.unexpected_token(token, _ea.list_literal([
                        ['a value', null]
                    ])))
                })
                case ')': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return abort(sh.unexpected_token(token, _ea.list_literal([
                        ['a value', null]
                    ])))
                })
                case '>': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return abort(sh.unexpected_token(token, _ea.list_literal([
                        ['a value', null]
                    ])))
                })
                case ']': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return abort(sh.unexpected_token(token, _ea.list_literal([
                        ['a value', null]
                    ])))
                })
                case '}': return _ea.ss($, ($) => {
                    iterator['consume']()
                    return abort(sh.unexpected_token(token, _ea.list_literal([
                        ['a value', null]
                    ])))
                })

                default: return _ea.au($[0])
            }
        })
    }
}