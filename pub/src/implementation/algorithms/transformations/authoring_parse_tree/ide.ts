import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/source"
import * as _in_token from "../../../../interface/generated/pareto/schemas/token/data_types/source"
import * as _out from "../../../../interface/generated/pareto/schemas/ide/data_types/target"

import { $$ as op_flatten } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/flatten"
import { Signature } from "../../../../interface/algorithms/transformations/authoring_parse_tree/ide"


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
    return op_flatten(_ea.array_literal([
        Whitespace($['leading whitespace'], $p),
        op_flatten($['comments'].map(($) => {
            return op_flatten(_ea.array_literal([
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
    return op_flatten(_ea.array_literal([
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
    return op_flatten($.map(($) => {
        return op_flatten(_ea.array_literal([
            String($.key, $p),
            $.value.transform(
                ($) => op_flatten(_ea.array_literal([
                    Structural_Token($[':'], $p),
                    Value($.value, $p),
                ])),
                () => _ea.array_literal([])
            ),
            $[','].transform(
                ($) => op_flatten(_ea.array_literal<_out.Text_Edits>([
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
    return op_flatten($.map(($) => {
        return op_flatten(_ea.array_literal([
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
                            case 'dictionary': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                                Structural_Token($['{'], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($['}'], $p),
                            ])))
                            case 'verbose group': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                                Structural_Token($['('], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($[')'], $p),
                            ])))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                                Structural_Token($['['], $p),
                                Elements($.elements, $p),
                                Structural_Token($[']'], $p),
                            ])))
                            case 'concise group': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                                Structural_Token($['<'], $p),
                                Elements($['elements'], $p),
                                Structural_Token($['>'], $p),
                            ])))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'tagged value': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                        Structural_Token($['|'], $p),
                        _ea.cc($.status, ($) => {
                            switch ($[0]) {
                                case 'missing data': return _ea.ss($, ($) => Structural_Token($['#'], $p))
                                case 'set': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                                    String($['state'], $p),
                                    Value($['value'], $p),
                                ])))
                                default: return _ea.au($[0])
                            }
                        })
                    ])))
                    case 'not set': return _ea.ss($, ($) => Structural_Token($['~'], $p))
                    case 'set optional value': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                        Structural_Token($['*'], $p),
                        Value($['value'], $p),
                    ])))

                    default: return _ea.au($[0])
                }
            }))
            case 'include': return _ea.ss($, ($) => op_flatten(_ea.array_literal([
                Structural_Token($['@'], $p),
                String($['path'], $p),
            ])))
            case 'missing data': return _ea.ss($, ($) => Structural_Token($['#'], $p))
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
    return op_flatten(_ea.array_literal<_out.Text_Edits>([

        $.header.transform(
            ($) => op_flatten(_ea.array_literal([
                Structural_Token($['!'], $p),
                Value($.value, $p)
            ])),
            () => _ea.array_literal([])
        ),
        Value($.content, $p),
    ]))
}