import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _source from "../../../interface/generated/pareto/schemas/token/data_types/source"
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import { Token_Iterator } from "./iterator"

import * as sh from "../../../shorthands/parse_result"


export const get_required_token = <Token>(
    token_iterator: Token_Iterator<Token>,
    expected: _et.Array<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): Token => {
    return token_iterator['get next token']().transform(
        ($) => $,
        () => abort(sh.parse_error(
            ['parser', {
                'expected': expected,
                'cause': ['missing token', null]
            }],
            token_iterator['get location']()
        ))
    )
}