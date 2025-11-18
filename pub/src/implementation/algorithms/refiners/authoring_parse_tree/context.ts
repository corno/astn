import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _source from "../../../../interface/generated/pareto/schemas/token/data_types/source"
import * as d_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import { ASTN_Tokens_Iterator } from "./iterator"

import * as sh from "../../../../shorthands/parse_result"

export type Refinement_Context = {
    iterator: ASTN_Tokens_Iterator
    get_required_token: (
        expected: _et.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
    ) => _source.Annotated_Token
    unexpected_token: (
        token: _source.Annotated_Token,
        expected: _et.List<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
    ) => never
}

export const create_context = (
    token_iterator: ASTN_Tokens_Iterator,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): Refinement_Context => {
    return {
        iterator: token_iterator,
        get_required_token: (expected) => {
            return token_iterator['get current']().transform(
                ($) => $,
                () => abort(sh.parse_error(
                    ['parser', {
                        'expected': expected,
                        'cause': ['missing token', null]
                    }],
                    token_iterator['get state']()
                ))
            )
        },
        unexpected_token: (token, expected) => {
            return abort(sh.unexpected_token(
                token,
                expected,
            ))
        }
    }
}