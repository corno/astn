import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as _source from "../../../interface/generated/pareto/schemas/token/data_types/source"
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import { Characters_Iterator } from "./iterator"

import * as sh from "../../../shorthands/parse_result"

export type Refinement_Context = {
    iterator: Characters_Iterator
    lexer_error: (
        type: d_parse_result.Parse_Error._type.SG.lexer,
        range: _source.Range
    ) => never
}

export const create_context = (
    token_iterator: Characters_Iterator,
    abort: _ea.Abort<d_parse_result.Parse_Error>,
): Refinement_Context => {
    return {
        iterator: token_iterator,
        lexer_error: (type, range) => {
            abort(sh.lexer_error(
                type,
                range
            ))
        }
    }
}