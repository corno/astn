import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as pso from "pareto-standard-operations"

import * as _in from "../../generated/interface/schemas/ast/data_types/unconstrained"
import * as _in_token from "../../generated/interface/schemas/token/data_types/unconstrained"
import * as _out from "../../generated/interface/schemas/ide/data_types/unconstrained"

const op = {
    'flatten': pso.pure.list.flatten,
}

export const Whitespace = (
    $: _in_token.Whitespace,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return _ea.array_literal([
        //FIXME
    ])
}

export const Trivia = (
    $: _in_token.Trivia,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return op.flatten(_ea.array_literal([
        Whitespace($['leading whitespace'], $p),
        op.flatten($['comments'].map(($) => {
            return op.flatten(_ea.array_literal([
                //FIXME
                // _ea.cc($['type'], ($) => {
                //     switch ($[0]) {
                //         case 'line': return _ea.ss($, ($) => _ea.array_literal([]))
                //         case 'block': return _ea.ss($, ($) => _ea.array_literal([]))
                //         default: return _ea.au($[0])        
                //     }
                // }),
                // _ea.array_literal([$['content']]),
                // _ea.array_literal([$['begin']]),
                // _ea.array_literal([$['end']]),
                Whitespace($['trailing whitespace'], $p),
            ]))
        })),

    ]))
}

export const Structural_Token = (
    $: _in.Structural_Token,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return Trivia($['trailing trivia'], $p)
}

export const String = (
    $: _in.String,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return op.flatten(_ea.array_literal([
        Trivia($['trailing trivia'], $p),
        //FIX right type
    ]))
}

export const Key_Value_Pairs = (
    $: _in.Key_Value_Pairs,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return op.flatten($.map(($) => {
        return op.flatten(_ea.array_literal([
            String($.key, $p),
            $.value.transform(
                ($) => op.flatten(_ea.array_literal([
                    Structural_Token($[':'], $p),
                    Value($.value, $p),
                ])),
                () => _ea.array_literal([])
            ),
            $[','].transform(
                ($) => op.flatten(_ea.array_literal<_out.Text_Edits>([
                    $p['remove commas']
                        ? _ea.array_literal<_out.Text_Edits.L>([['replace', { 'range': { 'start': $.range.start.relative, 'end': $.range.end.relative }, 'text': '' }]])
                        : _ea.array_literal([]),
                    Structural_Token($, $p)
                ])),
                () => _ea.array_literal([])
            ),
        ]))
    }))
}


export const Elements = (
    $: _in.Elements,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return op.flatten($.map(($) => {
        return op.flatten(_ea.array_literal([
            Value($.value, $p),
        ]))
    }))
}

export const Value = (
    $: _in.Value,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return _ea.cc($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'string': return _ea.ss($, ($) => _ea.array_literal([]))
                    case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                                Structural_Token($['{'], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($['}'], $p),
                            ])))
                            case 'verbose group': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                                Structural_Token($['('], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($[')'], $p),
                            ])))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                                Structural_Token($['['], $p),
                                Elements($.elements, $p),
                                Structural_Token($[']'], $p),
                            ])))
                            case 'concise group': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                                Structural_Token($['<'], $p),
                                Elements($['elements'], $p),
                                Structural_Token($['>'], $p),
                            ])))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'tagged value': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                        Structural_Token($['|'], $p),
                        String($['state'], $p),
                        Value($['value'], $p),
                    ])))
                    case 'not set': return _ea.ss($, ($) => Structural_Token($['~'], $p))
                    case 'set optional value': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                        Structural_Token($['*'], $p),
                        Value($['value'], $p),
                    ])))
                    case 'missing data': return _ea.ss($, ($) => Structural_Token($['#'], $p))

                    default: return _ea.au($[0])
                }
            }))
            case 'include': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                Structural_Token($['@'], $p),
                String($['path'], $p),
            ])))
            default: return _ea.au($[0])
        }
    })
}

export const Document = (
    $: _in.Document,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return op.flatten(_ea.array_literal<_out.Text_Edits>([

        $.header.transform(
            ($) => op.flatten(_ea.array_literal([
                Structural_Token($['!'], $p),
                Value($.value, $p)
            ])),
            () => _ea.array_literal([])
        ),
        Value($.content, $p),
    ]))
}