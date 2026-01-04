import * as _p from 'pareto-core-serializer'
import * as _pi from 'pareto-core-interface'

import * as d_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/source"

import { $$ as s_list_of_separated_texts } from "pareto-standard-operations/dist/implementation/temp_serializers/schemas/list_of_separated_texts"

type Parameters = {
    'position info':
    | ['zero based', null]
    | ['one based', null]
}

export namespace signatures {
    
    export type Parse_Error = _pi.Serializer_With_Parameters<d_parse_result.Parse_Error, Parameters>
}


export const Parse_Error: signatures.Parse_Error = ($, $p) => {
    const extra: number = _p.cc($p['position info'], ($) => {
        switch ($[0]) {
            case 'zero based': return 0
            case 'one based': return 1
            default: return _p.au($[0])
        }
    })
    const Parse_Error_Type = ($: d_parse_result.Parse_Error._type): string => _p.cc($, ($) => {
        switch ($[0]) {
            case 'lexer': return _p.ss($, ($) => _p.cc($, ($) => {
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
                    default: return _p.au($[0])
                }
            }))
            case 'parser': return _p.ss($, ($) => `expected ${s_list_of_separated_texts(
                $.expected.map(($) => _p.cc($, ($) => {
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
                        default: return _p.au($[0])
                    }
                })),
                { 'separator': " or " }
            )}, found ${_p.cc($.cause, ($) => {
                switch ($[0]) {
                    case 'unexpected token': return _p.ss($, ($) => {
                        return $.found[0]
                    })
                    case 'missing token': return _p.ss($, ($) => {
                        return `nothing`
                    })
                    default: return _p.au($[0])
                }
            })}`)
            default: return _p.au($[0])
        }
    })
    return `failed to parse ASTN, ${Parse_Error_Type($.type)} @ ${$.range.start.relative.line + extra}:${$.range.start.relative.column + extra}`
};
