import * as _pt from 'pareto-core-transformer'

import * as d_out from "../../../../../interface/generated/pareto/schemas/ide/data_types/target"

import * as signatures from "../../../../../interface/signatures/transformers/authoring_parse_tree/ide"

export const Whitespace: signatures.Whitespace = ($, $p) => {
    return _pt.list_literal([
        //FIXME
    ])
}

export const Trivia: signatures.Trivia = ($, $p) => {
    return _pt.list_literal([
        Whitespace($['leading whitespace'], $p),
        $['comments'].map(($) => {
            return _pt.list_literal([
                //FIXME
                // _pt.cc($['type'], ($) => {
                //     switch ($[0]) {
                //         case 'line': return _pt.ss($, ($) => _pt.list_literal([]))
                //         case 'block': return _pt.ss($, ($) => _pt.list_literal([]))
                //         default: return _pt.au($[0])        
                //     }
                // }),
                // _pt.list_literal([$['content']]),
                // _pt.list_literal([$['begin']]),
                // _pt.list_literal([$['end']]),
                Whitespace($['trailing whitespace'], $p),
            ]).flatten(($) => $)
        }).flatten(($) => $),

    ]).flatten(($) => $)
}

export const Structural_Token: signatures.Structural_Token = ($, $p) => {
    return Trivia($['trailing trivia'], $p)
}

export const String: signatures.String = ($, $p) => {
    return _pt.list_literal([
        Trivia($['trailing trivia'], $p),
        //FIX right type
    ]).flatten(($) => $)
}

export const Key_Value_Pairs: signatures.Key_Value_Pairs = ($, $p) => {
    return $.flatten(($) => {
        return _pt.list_literal([
            String($.key, $p),
            $.value.transform(
                ($) => _pt.list_literal([
                    Structural_Token($[':'], $p),
                    Value($.value, $p),
                ]).flatten(($) => $),
                () => _pt.list_literal([])
            ),
            $[','].transform(
                ($) => _pt.list_literal([
                    $p['remove commas']
                        ? _pt.list_literal<d_out.Text_Edits.L>([['replace', { 'range': { 'start': $.range.start.relative, 'end': $.range.end.relative }, 'text': '' }]])
                        : _pt.list_literal([]),
                    Structural_Token($, $p)
                ]).flatten(($) => $),
                () => _pt.list_literal([])
            ),
        ]).flatten(($) => $)
    })
}


export const Elements: signatures.Elements = ($, $p) => {
    return $.flatten(($) => {
        return Value($.value, $p)
    })
}

export const Value: signatures.Value = ($, $p) => {
    return _pt.cc($.type, ($) => {
        switch ($[0]) {
            case 'concrete': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'string': return _pt.ss($, ($) => _pt.list_literal([]))
                    case 'indexed collection': return _pt.ss($, ($) => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _pt.ss($, ($) => _pt.list_literal([
                                Structural_Token($['{'], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($['}'], $p),
                            ]).flatten(($) => $))
                            case 'verbose group': return _pt.ss($, ($) => _pt.list_literal([
                                Structural_Token($['('], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($[')'], $p),
                            ]).flatten(($) => $))
                            default: return _pt.au($[0])
                        }
                    }))
                    case 'ordered collection': return _pt.ss($, ($) => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _pt.ss($, ($) => _pt.list_literal([
                                Structural_Token($['['], $p),
                                Elements($.elements, $p),
                                Structural_Token($[']'], $p),
                            ]).flatten(($) => $))
                            case 'concise group': return _pt.ss($, ($) => _pt.list_literal([
                                Structural_Token($['<'], $p),
                                Elements($['elements'], $p),
                                Structural_Token($['>'], $p),
                            ]).flatten(($) => $))
                            default: return _pt.au($[0])
                        }
                    }))
                    case 'tagged value': return _pt.ss($, ($) => _pt.list_literal<d_out.Text_Edits>([
                        Structural_Token($['|'], $p),
                        _pt.cc($.status, ($) => {
                            switch ($[0]) {
                                case 'missing data': return _pt.ss($, ($) => Structural_Token($['#'], $p))
                                case 'set': return _pt.ss($, ($) => _pt.list_literal([
                                    String($['state'], $p),
                                    Value($['value'], $p),
                                ]).flatten(($) => $))
                                default: return _pt.au($[0])
                            }
                        })
                    ]).flatten(($) => $))
                    case 'not set': return _pt.ss($, ($) => Structural_Token($['~'], $p))
                    case 'set optional value': return _pt.ss($, ($) => _pt.list_literal([
                        Structural_Token($['*'], $p),
                        Value($['value'], $p),
                    ]).flatten(($) => $))

                    default: return _pt.au($[0])
                }
            }))
            case 'include': return _pt.ss($, ($) => _pt.list_literal([
                Structural_Token($['@'], $p),
                String($['path'], $p),
            ]).flatten(($) => $))
            case 'missing data': return _pt.ss($, ($) => Structural_Token($['#'], $p))
            default: return _pt.au($[0])
        }
    })
}

export const Document: signatures.Document = ($, $p) => {
    return _pt.list_literal([

        $.header.transform(
            ($) => _pt.list_literal([
                Structural_Token($['!'], $p),
                Value($.value, $p)
            ]).flatten(($) => $),
            () => _pt.list_literal([])
        ),
        Value($.content, $p),
    ]).flatten(($) => $)
}