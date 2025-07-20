import * as _ea from 'exupery-core-alg'

import * as parse from "./parse"

import * as pso from "pareto-standard-operations"

export const Parse_Error_Type = ($: parse.Parse_Error_Type): string => {
    return _ea.cc($, ($) => {
        switch ($[0]) {
            case 'lexer': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'unexpected control character': return `found unexpected control character`
                    case 'unexpected end of line in delimited string': return `found unexpected end of line in delimited string`
                    case 'missing character after escape': return `found missing character after escape`
                    case 'unexpected character': return `found unexpected character`
                    case 'unterminated string': return `found unterminated string`
                    case 'unterminated block comment': return `found unterminated block comment`
                    case 'unterminated unicode escape sequence': return `found unterminated unicode escape sequence`
                    case 'invalid unicode escape sequence': return `found invalid unicode escape sequence`
                    case 'unknown escape character': return `found unknown escape character`
                    case 'unexpected end of input': return `found unexpected end of input`
                    case 'dangling slash': return `found dangling slash`
                    default: return _ea.au($[0])
                }
            }))
            case 'parser': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'unexpected end of input': return `found unexpected end of input`
                    case 'unexpected token': return _ea.ss($, ($) => {
                        return `found unexpected token, expected ${pso.impure.text['join list of texts with separator']($.expected, { 'separator': "," })} found ${$.found[0]}`
                    })
                    default: return _ea.au($[0])
                }
            }))
            default: return _ea.au($[0])
        }
    })
}

export const Parse_Error = ($: parse.Parse_Error): string => {
    return `failed to parse ASTN, ${Parse_Error_Type($.type)} @ ${$.location.transform(
        ($) => `${$.relative.line}:${$.relative.column}`,
        () => "end of input"
    )}`
};
