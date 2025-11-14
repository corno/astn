import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as _target from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as _source from "../../../../interface/generated/pareto/schemas/token/data_types/source"

import * as ti from "./iterator"
import * as sh from "../../../../shorthands/parse_result"
import * as c from "./context"

//this file contains the parser functionality, each function return a type from the 'ast' schema

export const Structural_Token = (
    token: _source.Annotated_Token, //FIXME: this should be an iterator
    context: c.Refinement_Context
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
    context: c.Refinement_Context
): _target.String => {
    const token = context.get_required_token(_ea.array_literal([['a string', null]]))
    if (token.type[0] !== 'string') {
        return context.unexpected_token(token, _ea.array_literal([['a string', null]]))
    }
    context.iterator['consume']()
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
    context: c.Refinement_Context
): _target.Document => {
    return {
        'header': _ea.block(() => {
            const token = context.get_required_token(_ea.array_literal([['!', null], ['a value', null]]))
            if (token.type[0] !== '!') {
                return _ea.not_set()
            }
            context.iterator['consume']()
            return _ea.set({
                '!': Structural_Token(token, context),
                'value': Value(context)
            })
        }),
        'content': Value(context)
    }
}

export const Elements = (
    end_reached: ($: _source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    context: c.Refinement_Context
): _target.Elements => {
    return _ea.build_list<_target.Elements.L>(($i): void => {
        while (true) {
            const current_token = context.get_required_token(_ea.array_literal([end_token, ['a value', null]]))
            if (end_reached(current_token.type)) {
                return
            }
            $i['add element']({
                'value': Value(context)
            })
        }
    })
}

export const Key_Value_Pairs = (
    end_reached: ($: _source.Token_Type) => boolean,
    end_token: d_parse_result.Parse_Error._type.SG.parser.expected.L,
    context: c.Refinement_Context
): _target.Key_Value_Pairs => {
    return _ea.build_list<_target.Key_Value_Pairs.L>(($i): void => {
        while (true) {
            const current_token = context.get_required_token(_ea.array_literal([end_token, ['a string', null]]))
            if (end_reached(current_token.type)) {
                return
            }

            $i['add element']({
                'key': String(context),
                'value': _ea.block(() => {
                    const candidate_colon = context.get_required_token(_ea.array_literal([['a string', null], [':', null], end_token]))
                    if (candidate_colon.type[0] !== ':') {
                        return _ea.not_set()
                    }
                    context.iterator['consume']()

                    return _ea.set({
                        ':': Structural_Token(candidate_colon, context),
                        'value': Value(context)
                    })
                }),
                ',': _ea.not_set()
            })
        }
    })
}

export const Value = (
    context: c.Refinement_Context
): _target.Value => {
    const token = context.get_required_token(_ea.array_literal([['a value', null]]))
    return {
        'type': _ea.cc(token.type, ($): _target.Value._type => {

            switch ($[0]) {
                case 'string': return _ea.ss($, ($): _target.Value._type => {

                    return ['concrete', ['string', String(context)]]
                })
                case '{': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return ['concrete', ['indexed collection', ['dictionary', {
                        '{': Structural_Token(token, context),
                        'entries': Key_Value_Pairs(($) => $[0] === '}', ['}', null], context),
                        '}': _ea.block(() => {
                            const current_token = context.get_required_token(_ea.array_literal([['}', null]]))
                            context.iterator['consume']()
                            return Structural_Token(current_token, context)
                        })
                    }]]]
                })
                case '(': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return ['concrete', ['indexed collection', ['verbose group', {
                        '(': Structural_Token(token, context),
                        'entries': Key_Value_Pairs(($) => $[0] === ')', [')', null], context),
                        ')': _ea.block(() => {
                            const current_token = context.get_required_token(_ea.array_literal([[')', null]]))
                            context.iterator['consume']()
                            return Structural_Token(current_token, context)
                        })
                    }]]]
                })
                case '[': return _ea.ss($, ($): _target.Value._type => {
                    context.iterator['consume']()
                    return ['concrete', ['ordered collection', ['list', {
                        '[': Structural_Token(token, context),
                        'elements': Elements(($) => $[0] === ']', [']', null], context),
                        ']': _ea.block(() => {
                            const current_token = context.get_required_token(_ea.array_literal([[']', null]]))
                            context.iterator['consume']()
                            return Structural_Token(current_token, context)
                        }),
                    }]]]
                })
                case '<': return _ea.ss($, ($): _target.Value._type => {
                    context.iterator['consume']()
                    return ['concrete', ['ordered collection', ['concise group', {
                        '<': Structural_Token(token, context),
                        'elements': Elements(($) => $[0] === '>', ['>', null], context),
                        '>': _ea.block(() => {
                            const current_token = context.get_required_token(_ea.array_literal([['>', null]]))
                            context.iterator['consume']()
                            return Structural_Token(current_token, context)
                        }),
                    }]]]
                })
                case '@': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return ['include', {
                        '@': Structural_Token(token, context),
                        'path': String(context)
                    }]
                })
                case '~': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return ['concrete', ['not set', {
                        '~': Structural_Token(token, context),
                    }]]
                })
                case '|': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    const token = context.get_required_token(_ea.array_literal([['a value', null], ['#', null]]))

                    return ['concrete', ['tagged value', {
                        '|': Structural_Token(token, context),
                        'status': _ea.cc(token.type, ($): _target.Concrete_Value.SG.tagged_value.status => {
                            switch ($[0]) {
                                case 'string': return _ea.ss($, ($) => {
                                    return ['set', {
                                        'state': String(context),
                                        'value': Value(context)
                                    }]
                                })
                                case '#': return _ea.ss($, ($) => {
                                    context.iterator['consume']()
                                    return ['missing data', {
                                        '#': Structural_Token(token, context),
                                    }]
                                })
                                default: return context.unexpected_token(token, _ea.array_literal([
                                    ['a value', null],
                                    ['#', null],
                                ]))
                            }
                        })
                    }]]
                })
                case '*': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return ['concrete', ['set optional value', {
                        '*': Structural_Token(token, context),
                        'value': Value(context)
                    }]]
                })
                case '#': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return ['missing data', {
                        '#': Structural_Token(token, context),
                    }]
                })

                //unexpected tokens

                case '!': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return context.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
                })
                case ':': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return context.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
                })
                case ')': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return context.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
                })
                case '>': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return context.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
                })
                case ']': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return context.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
                })
                case '}': return _ea.ss($, ($) => {
                    context.iterator['consume']()
                    return context.unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
                })

                default: return _ea.au($[0])
            }
        })
    }
}