import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as pso from "pareto-standard-operations"

import * as types from "./types"

export type Range = types.Range

const increment_location = (location: types.Relative_Location, increment: number): types.Relative_Location => {
    return {
        'column': location.column + increment,
        'line': location.line,
    }
}

export type Text_Edit =
    | ['insert', {
        'location': types.Relative_Location
        'text': string
    }]
    | ['replace', {
        'range': Range
        'text': string
    }]
    | ['delete', {
        'range': Range
    }]

export type Text_Edits = _et.Array<Text_Edit>

const op = {
    'flatten': pso.pure.list.flatten,
}

export const Whitespace = (
    $: types.Whitespace,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
    return _ea.array_literal([
        //FIXME
    ])
}

export const Trivia = (
    $: types.Trivia,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
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
    $: types.Structural_Token,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
    return Trivia($['trailing trivia'], $p)
}

export const String = (
    $: types.StringX,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
    return op.flatten(_ea.array_literal([
        Trivia($['trailing trivia'], $p),
        //FIX right type
    ]))
}

export const Key_Value_Pairs = (
    $: types.Key_Value_Pairs,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
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
                ($) => op.flatten(_ea.array_literal<Text_Edits>([
                    $p['remove commas']
                        ? _ea.array_literal<Text_Edit>([['replace', { 'range': $.range, 'text': '' }]])
                        : _ea.array_literal([]),
                    Structural_Token($, $p)
                ])),
                () => _ea.array_literal([])
            ),
        ]))
    }))
}


export const Elements = (
    $: types.Elements,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
    return op.flatten($.map(($) => {
        return op.flatten(_ea.array_literal([
            Value($.value, $p),
            $[','].transform(
                ($) => op.flatten(_ea.array_literal<Text_Edits>([
                    $p['remove commas']
                        ? _ea.array_literal([['replace', { 'range': $.range, 'text': '' }]])
                        : _ea.array_literal([]),
                    Structural_Token($, $p)
                ])),
                () => _ea.array_literal([])
            ),
        ]))
    }))
}

export const Value = (
    $: types.Value,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
    return _ea.cc($.type, ($) => {
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
            case 'include': return _ea.ss($, ($) => op.flatten(_ea.array_literal([
                Structural_Token($['@'], $p),
                String($['path'], $p),
            ])))
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
            default: return _ea.au($[0])
        }
    })
}

export const Document = (
    $: types.Document,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): Text_Edits => {
    return op.flatten(_ea.array_literal<Text_Edits>([

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