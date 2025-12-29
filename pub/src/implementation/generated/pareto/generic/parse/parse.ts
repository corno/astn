import * as _ea from 'pareto-core-deserializer'
import * as _et from 'pareto-core-interface'
import * as _ei from 'pareto-core-internals'

import * as d_ast from "./ast"
import * as _target from "../../../../../interface/generated/pareto/core/parse_result"
import * as s_ast from "../../../../../interface/generated/pareto/core/astn_source"

import * as pg from "./astn_parse_generic"
import * as si from "./string_iterator"

import * as tokenize from "./token"

export const parse = (
    $: string,
    $p: {
        'tab size': number
    },
    abort: ($: _target._T_Parse_Error) => never,
): s_ast._T_Document => {
    const string_iterator = si.create_string_iterator($, {
        'tab size': $p['tab size']
    })
    const tokenizer_result = tokenize.Tokenizer_Result(
        null,
        {
            'string iterator': string_iterator
        },
        ($) => {
            abort({
                'type': ['lexer', $.type],
                'range': $.range
            })
        }
    )
    const token_iterator = pg.create_astn_token_iterator(
        tokenizer_result.tokens,
        tokenizer_result.end,
        ($) => {
            abort({
                'type': ['parser', $.type],
                'range': $.range
            })
        }
    )
    return d_ast.Document(
        token_iterator,
        ($) => abort({
            'type': ['parser', $.type],
            'range': $.range
        })
    )

}
