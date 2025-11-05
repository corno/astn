import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _source from "../../../interface/generated/pareto/schemas/token/data_types/source"
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import { Token_Iterator } from "./iterator"
import { Abort } from '../refine_guard'

export class Parse_Error_Class {

    constructor(
        public readonly type: d_parse_result.Parse_Error._type,
        public readonly range: _source.Range,
    ) {
    }
}

const parse_error = (
    type: d_parse_result.Parse_Error._type,
    range: _source.Range
): d_parse_result.Parse_Error => {
    return {
        'type': type,
        'range': {
            'start': range.start,
            'end': range.end,
        }
    }
}

export const unexpected_token = (
    found: _source.Annotated_Token,
    expected: _et.Array<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
): d_parse_result.Parse_Error => {
    return parse_error(
        ['parser', {
            'expected': expected,
            'cause': ['unexpected token', {
                'found': found.type,
            }]
        }],
        {
            'start': found.start,
            'end': found.end
        }
    )
}

export const get_required_token = <Token>(
    token_iterator: Token_Iterator<Token>,
    expected: _et.Array<d_parse_result.Parse_Error._type.SG.parser.expected.L>,
    abort: Abort<d_parse_result.Parse_Error>,
): Token => {
    return token_iterator['get next token']().transform(
        ($) => $,
        () => abort(parse_error(
            ['parser', {
                'expected': expected,
                'cause': ['missing token', null]
            }],
            token_iterator['get location']()
        ))
    )
}