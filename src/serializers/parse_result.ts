import * as _ea from 'exupery-core-alg'

import * as _source from "../generated/interface/schemas/authoring_parse_result/data_types/source"

import { $$ as op_join_with_separator } from "pareto-standard-operations/dist/impure/text/join_list_of_texts_with_separator"

export const Parse_Error_Type = ($: _source.Parse_Error._type): string => {
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
            case 'parser': return _ea.ss($, ($) => `expected ${op_join_with_separator(
                $.expected.map(($) => _ea.cc($, ($) => {
                    switch ($[0]) {
                        case '!': return "'!'"
                        case ')': return "')'"
                        case ',': return "','"
                        case ':': return "':'"
                        case '>': return "'>'"
                        case '@': return "'@'"
                        case ']': return "']'"
                        case 'a string': return "a string"
                        case 'a value': return "a value"
                        case '}': return "'}'"
                        case '#': return "'#'"
                        default: return _ea.au($[0])
                    }
                })), 
                { 'separator': " or " }
            )}, found ${_ea.cc($.cause, ($) => {
                switch ($[0]) {
                    case 'unexpected token': return _ea.ss($, ($) => {
                        return $.found[0]
                    })
                    case 'missing token': return _ea.ss($, ($) => {
                        return `nothing`
                    })
                    default: return _ea.au($[0])
                }
            })}`)
            default: return _ea.au($[0])
        }
    })
}

export const Parse_Error = (
    $: _source.Parse_Error,
    $p: {
        'position info':
        |[ 'zero based', null]
        |[ 'one based', null]
    }
): string => {
    const extra: number = _ea.cc($p['position info'], ($) => {
        switch ($[0]) {
            case 'zero based': return 0
            case 'one based': return 1
            default: return _ea.au($[0])
        }
    })
    return `failed to parse ASTN, ${Parse_Error_Type($.type)} @ ${$.range.start.relative.line + extra}:${$.range.start.relative.column + extra}`
};
