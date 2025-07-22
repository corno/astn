import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as ast from "../generated/interface/schemas/ast/resolved"
import * as parse_result from "../generated/interface/schemas/parse_result/resolved"

import * as pg from "./parse_generic"



/**
 * to get from a Annotated_Token to a Structural_Token, the type should be omitted.
 * but it is parsd in between the 'start' and 'end' properties, so a little post-processing is needed.
 */
const make_structural_token = (token: parse_result.Annotated_Token): ast.Structural_Token => {
    return {
        'trailing trivia': token['trailing trivia'],
        'range': {
            'start': token['start'],
            'end': token['end']
        }
    }
}

export const String = (token_iterator: pg.Token_Iterator): ast.String => {
    const token = token_iterator['get required token'](_ea.array_literal([['a string', null]]))
    if (token.type[0] !== 'string') {
        return pg.throw_unexpected_token(token, _ea.array_literal([['a string', null]]))
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

export const Document = (token_iterator: pg.Token_Iterator): ast.Document => {
    return {
        'header': _ea.block(() => {
            const token = token_iterator['get required token'](_ea.array_literal([['!', null], ['a value', null]]))
            if (token.type[0] !== '!') {
                return _ea.not_set()
            }
            token_iterator['consume token']()
            return _ea.set({
                '!': make_structural_token(token),
                'value': Value(token_iterator)
            })
        }),
        'content': Value(token_iterator)
    }
}

export const Elements = (token_iterator: pg.Token_Iterator, end_reached: ($: parse_result.Token_Type) => boolean, end_token: parse_result.Parse_Error._type.SG.parser.expected.L): ast.Elements => {
    return _ea.pure.list.build<ast.Elements.L>(($i): void => {
        while (true) {
            const current_token = token_iterator['get required token'](_ea.array_literal([end_token, ['a value', null]]))
            if (end_reached(current_token.type)) {
                return
            }
            $i['add element']({
                'value': Value(token_iterator),
                ',': _ea.block(() => {
                    const current_token = token_iterator['get required token'](_ea.array_literal([end_token, [',', null], ['a value', null]]))
                    if (current_token.type[0] !== ',') {
                        return _ea.not_set()
                    }
                    token_iterator['consume token']()
                    return _ea.set(make_structural_token(current_token))
                })
            })
        }
    })
}

export const Key_Value_Pairs = (token_iterator: pg.Token_Iterator, end_reached: ($: parse_result.Token_Type) => boolean, end_token: parse_result.Parse_Error._type.SG.parser.expected.L): ast.Key_Value_Pairs => {
    return _ea.pure.list.build<ast.Key_Value_Pairs.L>(($i): void => {
        while (true) {
            const current_token = token_iterator['get required token'](_ea.array_literal([end_token, ['a string', null]]))
            if (end_reached(current_token.type)) {
                return
            }

            $i['add element']({
                'key': String(token_iterator),
                'value': _ea.block(() => {
                    const candidate_colon = token_iterator['get required token'](_ea.array_literal([['a string', null], [':', null], end_token]))
                    if (candidate_colon.type[0] !== ':') {
                        return _ea.not_set()
                    }
                    token_iterator['consume token']()

                    return _ea.set({
                        ':': make_structural_token(candidate_colon),
                        'value': Value(token_iterator)
                    })
                }),
                ',': _ea.block(() => {
                    const current_token = token_iterator['get required token'](_ea.array_literal([['a string', null], [',', null], end_token]))
                    if (current_token.type[0] !== ',') {
                        return _ea.not_set()
                    }
                    token_iterator['consume token']()
                    return _ea.set(make_structural_token(current_token))
                })
            })
        }
    })
}

export const Value = (token_iterator: pg.Token_Iterator): ast.Value => {
    const token = token_iterator['get required token'](_ea.array_literal([['a value', null]]))
    return {
        'range': {
            'start': token.start,
            'end': token.end
        },
        'type': _ea.cc(token.type, ($): ast.Value._type => {

            switch ($[0]) {
                case 'string': return _ea.ss($, ($): ast.Value._type => {

                    return ['string', String(token_iterator)]
                })
                case '{': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['indexed collection', ['dictionary', {
                        '{': make_structural_token(token),
                        'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === '}',['}', null]),
                        '}': _ea.block(() => {
                            const current_token = token_iterator['get required token'](_ea.array_literal([['}', null]]))
                            token_iterator['consume token']()
                            return make_structural_token(current_token)
                        })
                    }]]
                })
                case '(': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['indexed collection', ['verbose group', {
                        '(': make_structural_token(token),
                        'entries': Key_Value_Pairs(token_iterator, ($) => $[0] === ')', [')', null]),
                        ')': _ea.block(() => {
                            const current_token = token_iterator['get required token'](_ea.array_literal([[')', null]]))
                            token_iterator['consume token']()
                            return make_structural_token(current_token)
                        })
                    }]]
                })
                case '[': return _ea.ss($, ($): ast.Value._type => {
                    token_iterator['consume token']()
                    return ['ordered collection', ['list', {
                        '[': make_structural_token(token),
                        'elements': Elements(token_iterator, ($) => $[0] === ']', [']', null]),
                        ']': _ea.block(() => {
                            const current_token = token_iterator['get required token'](_ea.array_literal([[']', null]]))
                            token_iterator['consume token']()
                            return make_structural_token(current_token)
                        }),
                    }]]
                })
                case '<': return _ea.ss($, ($): ast.Value._type => {
                    token_iterator['consume token']()
                    return ['ordered collection', ['concise group', {
                        '<': make_structural_token(token),
                        'elements': Elements(token_iterator, ($) => $[0] === '>', ['>', null]),
                        '>': _ea.block(() => {
                            const current_token = token_iterator['get required token'](_ea.array_literal([['>', null]]))
                            token_iterator['consume token']()
                            return make_structural_token(current_token)
                        }),
                    }]]
                })
                case '@': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['include', {
                        '@': make_structural_token(token),
                        'path': String(token_iterator)
                    }]
                })
                case '~': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['not set', {
                        '~': make_structural_token(token),
                    }]
                })
                case '|': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['tagged value', {
                        '|': make_structural_token(token),
                        'state': String(token_iterator),
                        'value': Value(token_iterator)
                    }]
                })
                case '*': return _ea.ss($, ($) => {
                    token_iterator['consume token']()
                    return ['set optional value', {
                        '*': make_structural_token(token),
                        'value': Value(token_iterator)
                    }]
                })

                default:
                    //unexpected token
                    return pg.throw_unexpected_token(token, _ea.array_literal([
                        ['a value', null]
                    ]))
            }
        })
    }
}

export const Parse_Result = (
    $: string,
    $p: {
        'tab size': number
    }
): parse_result.Parse_Result => {
    try {
        const string_iterator = pg.create_string_iterator($, {
            'tab size': $p['tab size']
        })
        const tokenizer_result = pg.Tokenizer_Result(null, {
            'string iterator': string_iterator
        })
        // tokenizer_result.tokens.__for_each(($) => {
        //     pdev.log_debug_message(`token: ${_ea.cc($.type, ($) => {
        //         switch ($[0]) {
        //             case 'string': return _ea.ss($, ($) => `string: ${$.value.value}`)
        //             default: return `structural: ${$[0]}`
        //         }
        //     })}`)
        // })
        const token_iterator = pg.create_token_iterator(tokenizer_result)
        return ['success', Document(token_iterator)]

    } catch (error) {
        if (error instanceof _ea.Error) {
            const parse_error: parse_result.Parse_Error = error.type //this has to be the case
            return ['failure', parse_error]
        }
        return _ea.panic("unknown error thrown")
    }
}