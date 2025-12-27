import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _in from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/source"
import * as _in_token from "../../../../interface/generated/pareto/schemas/token/data_types/source"
import * as _out from "../../../../interface/generated/pareto/schemas/ide/data_types/target"

export const Whitespace = (
    $: _in_token.Whitespace,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return _ea.list_literal([
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
    return _ea.list_literal([
        Whitespace($['leading whitespace'], $p),
        $['comments'].map(($) => {
            return _ea.list_literal([
                //FIXME
                // _ea.cc($['type'], ($) => {
                //     switch ($[0]) {
                //         case 'line': return _ea.ss($, ($) => _ea.list_literal([]))
                //         case 'block': return _ea.ss($, ($) => _ea.list_literal([]))
                //         default: return _ea.au($[0])        
                //     }
                // }),
                // _ea.list_literal([$['content']]),
                // _ea.list_literal([$['begin']]),
                // _ea.list_literal([$['end']]),
                Whitespace($['trailing whitespace'], $p),
            ]).flatten(($) => $)
        }).flatten(($) => $),

    ]).flatten(($) => $)
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
    return _ea.list_literal([
        Trivia($['trailing trivia'], $p),
        //FIX right type
    ]).flatten(($) => $)
}

export const Key_Value_Pairs = (
    $: _in.Key_Value_Pairs,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return $.flatten(($) => {
        return _ea.list_literal([
            String($.key, $p),
            $.value.transform(
                ($) => _ea.list_literal([
                    Structural_Token($[':'], $p),
                    Value($.value, $p),
                ]).flatten(($) => $),
                () => _ea.list_literal([])
            ),
            $[','].transform(
                ($) => _ea.list_literal<_out.Text_Edits>([
                    $p['remove commas']
                        ? _ea.list_literal<_out.Text_Edits.L>([['replace', { 'range': { 'start': $.range.start.relative, 'end': $.range.end.relative }, 'text': '' }]])
                        : _ea.list_literal([]),
                    Structural_Token($, $p)
                ]).flatten(($) => $),
                () => _ea.list_literal([])
            ),
        ]).flatten(($) => $)
    })
}


export const Elements = (
    $: _in.Elements,
    $p: {
        'remove commas': boolean
        'indentation string': string
        'current indentation': string
    }
): _out.Text_Edits => {
    return $.flatten(($) => {
        return Value($.value, $p)
    })
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
                    case 'string': return _ea.ss($, ($) => _ea.list_literal([]))
                    case 'indexed collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'dictionary': return _ea.ss($, ($) => _ea.list_literal([
                                Structural_Token($['{'], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($['}'], $p),
                            ]).flatten(($) => $))
                            case 'verbose group': return _ea.ss($, ($) => _ea.list_literal([
                                Structural_Token($['('], $p),
                                Key_Value_Pairs($['entries'], $p),
                                Structural_Token($[')'], $p),
                            ]).flatten(($) => $))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'ordered collection': return _ea.ss($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'list': return _ea.ss($, ($) => _ea.list_literal([
                                Structural_Token($['['], $p),
                                Elements($.elements, $p),
                                Structural_Token($[']'], $p),
                            ]).flatten(($) => $))
                            case 'concise group': return _ea.ss($, ($) => _ea.list_literal([
                                Structural_Token($['<'], $p),
                                Elements($['elements'], $p),
                                Structural_Token($['>'], $p),
                            ]).flatten(($) => $))
                            default: return _ea.au($[0])
                        }
                    }))
                    case 'tagged value': return _ea.ss($, ($) => _ea.list_literal<_out.Text_Edits>([
                        Structural_Token($['|'], $p),
                        _ea.cc($.status, ($) => {
                            switch ($[0]) {
                                case 'missing data': return _ea.ss($, ($) => Structural_Token($['#'], $p))
                                case 'set': return _ea.ss($, ($) => _ea.list_literal([
                                    String($['state'], $p),
                                    Value($['value'], $p),
                                ]).flatten(($) => $))
                                default: return _ea.au($[0])
                            }
                        })
                    ]).flatten(($) => $))
                    case 'not set': return _ea.ss($, ($) => Structural_Token($['~'], $p))
                    case 'set optional value': return _ea.ss($, ($) => _ea.list_literal([
                        Structural_Token($['*'], $p),
                        Value($['value'], $p),
                    ]).flatten(($) => $))

                    default: return _ea.au($[0])
                }
            }))
            case 'include': return _ea.ss($, ($) => _ea.list_literal([
                Structural_Token($['@'], $p),
                String($['path'], $p),
            ]).flatten(($) => $))
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
    return _ea.list_literal<_out.Text_Edits>([

        $.header.transform(
            ($) => _ea.list_literal([
                Structural_Token($['!'], $p),
                Value($.value, $p)
            ]).flatten(($) => $),
            () => _ea.list_literal([])
        ),
        Value($.content, $p),
    ]).flatten(($) => $)
}