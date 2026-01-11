import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"


export type Parameters = {
    'position info':
    | ['zero based', null]
    | ['one based', null]
}

export namespace signatures {
    export type Error = _pi.Transformer_With_Parameters<d_in.Error, d_out.Block_Part, Parameters>
}

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as s_list_of_separated_texts } from "pareto-standard-operations/dist/implementation/temp_serializers/schemas/list_of_separated_texts"

// import * as t_parse_result_to_fountain_pen from "astn/dist/implementation/manual/schemas/parse_result/serializers"

export const Error: signatures.Error = ($, $p) => {
    const extra: number = _p.sg($p['position info'], ($) => {
        switch ($[0]) {
            case 'zero based': return 0
            case 'one based': return 1
            default: return _p.au($[0])
        }
    })
    const Parse_Error_Type = ($: d_in.Error._type): string => _p.sg($, ($) => {
        switch ($[0]) {
            case 'lexer': return _p.ss($, ($) => _p.sg($, ($) => {
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
                $.expected.__l_map(($) => _p.sg($, ($) => {
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
            )}, found ${_p.sg($.cause, ($) => {
                switch ($[0]) {
                    case 'unexpected token': return _p.ss($, ($) => $.found[0])
                    case 'missing token': return _p.ss($, ($) => `nothing`)
                    default: return _p.au($[0])
                }
            })}`)
            default: return _p.au($[0])
        }
    })
    return sh.b.sub([
         sh.b.snippet(`failed to parse ASTN, ${Parse_Error_Type($.type)}`),
         $.range.__decide(
            ($) => sh.b.snippet(`@ ${$.start.relative.line + extra}:${$.start.relative.column + extra}`),
            () => sh.b.nothing()
        ),  
    ])
}