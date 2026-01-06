import * as _p from 'pareto-core-transformer'

import * as d_out from "../../../../../interface/generated/pareto/schemas/ide/data_types/target"

import * as signatures from "../../../../../interface/signatures/transformers/authoring_parse_tree/ide"

export const Whitespace: signatures.Whitespace = ($, $p) => _p.list.literal([
    //FIXME
])

export const Trivia: signatures.Trivia = ($, $p) => _p.list.nested_literal([
    Whitespace($['leading whitespace'], $p),
    $['comments'].map(($) => _p.list.nested_literal([
        //FIXME
        // _p.sg($['type'], ($) => {
        //     switch ($[0]) {
        //         case 'line': return _p.ss($, ($) => _p.list.literal([]))
        //         case 'block': return _p.ss($, ($) => _p.list.literal([]))
        //         default: return _p.au($[0])        
        //     }
        // }),
        // _p.list.literal([$['content']]),
        // _p.list.literal([$['begin']]),
        // _p.list.literal([$['end']]),
        Whitespace($['trailing whitespace'], $p),
    ]).flatten(($) => $)),

])

export const Structural_Token: signatures.Structural_Token = ($, $p) => Trivia($['trailing trivia'], $p)

export const String: signatures.String = ($, $p) => _p.list.nested_literal([
    Trivia($['trailing trivia'], $p),
    //FIX right type
])

export const Key_Value_Pairs: signatures.Key_Value_Pairs = ($, $p) => $.flatten(($) => _p.list.literal([
    String($.key, $p),
    $.value.transform(
        ($) => _p.list.literal([
            Structural_Token($[':'], $p),
            Value($.value, $p),
        ]).flatten(($) => $),
        () => _p.list.literal([])
    ),
    $[','].transform(
        ($) => _p.list.literal([
            $p['remove commas']
                ? _p.list.literal<d_out.Text_Edits.L>([['replace', { 'range': { 'start': $.range.start.relative, 'end': $.range.end.relative }, 'text': '' }]])
                : _p.list.literal([]),
            Structural_Token($, $p)
        ]).flatten(($) => $),
        () => _p.list.literal([])
    ),
]).flatten(($) => $))


export const Elements: signatures.Elements = ($, $p) => $.flatten(($) => Value($.value, $p))

export const Value: signatures.Value = ($, $p) => _p.sg($.type, ($) => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.sg($, ($) => {
            switch ($[0]) {
                case 'string': return _p.ss($, ($) => _p.list.literal([]))
                case 'indexed collection': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => _p.list.literal([
                            Structural_Token($['{'], $p),
                            Key_Value_Pairs($['entries'], $p),
                            Structural_Token($['}'], $p),
                        ]).flatten(($) => $))
                        case 'verbose group': return _p.ss($, ($) => _p.list.literal([
                            Structural_Token($['('], $p),
                            Key_Value_Pairs($['entries'], $p),
                            Structural_Token($[')'], $p),
                        ]).flatten(($) => $))
                        default: return _p.au($[0])
                    }
                }))
                case 'ordered collection': return _p.ss($, ($) => _p.sg($, ($) => {
                    switch ($[0]) {
                        case 'list': return _p.ss($, ($) => _p.list.literal([
                            Structural_Token($['['], $p),
                            Elements($.elements, $p),
                            Structural_Token($[']'], $p),
                        ]).flatten(($) => $))
                        case 'concise group': return _p.ss($, ($) => _p.list.literal([
                            Structural_Token($['<'], $p),
                            Elements($['elements'], $p),
                            Structural_Token($['>'], $p),
                        ]).flatten(($) => $))
                        default: return _p.au($[0])
                    }
                }))
                case 'tagged value': return _p.ss($, ($) => _p.list.literal<d_out.Text_Edits>([
                    Structural_Token($['|'], $p),
                    _p.sg($.status, ($) => {
                        switch ($[0]) {
                            case 'missing data': return _p.ss($, ($) => Structural_Token($['#'], $p))
                            case 'set': return _p.ss($, ($) => _p.list.literal([
                                String($['state'], $p),
                                Value($['value'], $p),
                            ]).flatten(($) => $))
                            default: return _p.au($[0])
                        }
                    })
                ]).flatten(($) => $))
                case 'not set': return _p.ss($, ($) => Structural_Token($['~'], $p))
                case 'set optional value': return _p.ss($, ($) => _p.list.literal([
                    Structural_Token($['*'], $p),
                    Value($['value'], $p),
                ]).flatten(($) => $))

                default: return _p.au($[0])
            }
        }))
        case 'include': return _p.ss($, ($) => _p.list.nested_literal([
            Structural_Token($['@'], $p),
            String($['path'], $p),
        ]))
        case 'missing data': return _p.ss($, ($) => Structural_Token($['#'], $p))
        default: return _p.au($[0])
    }
})

export const Document: signatures.Document = ($, $p) => _p.list.literal([

    $.header.transform(
        ($) => _p.list.literal([
            Structural_Token($['!'], $p),
            Value($.value, $p)
        ]).flatten(($) => $),
        () => _p.list.literal([])
    ),
    Value($.content, $p),
]).flatten(($) => $)