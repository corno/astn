import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as string_iterator from "../tokens/iterator"

import * as _source from "../../../interface/generated/pareto/schemas/token/data_types/source"
import * as d_parse_result from "../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import { Parse_Error_Class } from "../ast/helpers"

export const throw_lexer_error = (
    type: d_parse_result.Parse_Error._type.SG.lexer,
    range: _source.Range
): never => {
    throw new Parse_Error_Class(['lexer', type], range)
}