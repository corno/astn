import * as _p from 'pareto-core/dist/transformer'

import * as d_out from "../../../../../interface/generated/liana/schemas/ide/data"

import * as signatures from "../../../../../interface/signatures/refiners/ide/parse_tree"

export const Whitespace: signatures.Whitespace = ($, $p) => _p.list.literal([
    //FIXME
])

export const Trivia: signatures.Trivia = ($, $p) => _p.list.nested_literal_old([
    Whitespace($['leading whitespace'], $p),
    _p.list.flatten(
        $['comments'],
        ($) => _p.list.nested_literal_old([
            //FIXME
            // _p.decide.state($['type'], ($) => {
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
        ])
    ),

])

export const Structural_Token: signatures.Structural_Token = ($, $p) => Trivia($['trailing trivia'], $p)

export const String: signatures.Text = ($, $p) => _p.list.nested_literal_old([
    Trivia($['trailing trivia'], $p),
    //FIX right type
])

export const Key_Value_Pairs: signatures.Key_Value_Pairs = ($, $p) => _p.list.flatten(
    $,
    ($) => _p.list.nested_literal_old([
        String($.key, $p),
        $.value.__decide(
            ($) => _p.list.nested_literal_old([
                Structural_Token($[':'], $p),
                Value($.value, $p),
            ]),
            () => _p.list.nested_literal_old([])
        ),
    ])
)


export const Elements: signatures.Elements = ($, $p) => _p.list.flatten($, ($) => Value($.value, $p))

export const Value: signatures.Value = ($, $p) => _p.decide.state($.type, ($) => {
    switch ($[0]) {
        case 'concrete': return _p.ss($, ($) => _p.decide.state($, ($) => {
            switch ($[0]) {
                case 'dictionary': return _p.ss($, ($) => _p.list.nested_literal_old([
                    Structural_Token($['{'], $p),
                    Key_Value_Pairs($['entries'], $p),
                    Structural_Token($['}'], $p),
                ]))
                case 'group': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'concise': return _p.ss($, ($) => _p.list.nested_literal_old([
                            Structural_Token($['<'], $p),
                            Elements($['elements'], $p),
                            Structural_Token($['>'], $p),
                        ]))
                        case 'verbose': return _p.ss($, ($) => _p.list.nested_literal_old([
                            Structural_Token($['('], $p),
                            Key_Value_Pairs($['entries'], $p),
                            Structural_Token($[')'], $p),
                        ]))
                        default: return _p.au($[0])
                    }
                }))
                case 'list': return _p.ss($, ($) => _p.list.nested_literal_old([
                    Structural_Token($['['], $p),
                    Elements($.elements, $p),
                    Structural_Token($[']'], $p),
                ]))
                case 'nothing': return _p.ss($, ($) => Structural_Token($['~'], $p))
                case 'optional': return _p.ss($, ($) => _p.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'set': return _p.ss($, ($) => _p.list.nested_literal_old([
                            Structural_Token($['*'], $p),
                            Value($['value'], $p),
                        ]))
                        default: return _p.au($[0])
                    }
                }))
                case 'state group': return _p.ss($, ($) => _p.list.nested_literal_old<d_out.Text_Edits.L>([
                    Structural_Token($['|'], $p),
                    _p.decide.state($.status, ($) => {
                        switch ($[0]) {
                            case 'missing data': return _p.ss($, ($) => Structural_Token($['#'], $p))
                            case 'set': return _p.ss($, ($) => _p.list.nested_literal_old([
                                String($['state'], $p),
                                Value($['value'], $p),
                            ]))
                            default: return _p.au($[0])
                        }
                    })
                ]))
                case 'text': return _p.ss($, ($) => _p.list.literal([]))

                default: return _p.au($[0])
            }
        }))
        case 'include': return _p.ss($, ($) => _p.list.nested_literal_old([
            Structural_Token($['@'], $p),
            String($['path'], $p),
        ]))
        case 'missing data': return _p.ss($, ($) => Structural_Token($['#'], $p))
        default: return _p.au($[0])
    }
})

export const Document: signatures.Document = ($, $p) => _p.list.nested_literal_old([

    $.header.__decide(
        ($) => _p.list.nested_literal_old([
            Structural_Token($['!'], $p),
            Value($.value, $p)
        ]),
        () => _p.list.nested_literal_old([])
    ),
    Value($.content, $p),
])