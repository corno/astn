import * as _et from 'exupery-core-types'

import * as ast from "./ast"
import * as parse_result from "./parse_result"

export type Annotated_Token = {
    readonly 'start': ast.Location
    readonly 'type': parse_result.Token_Type
    readonly 'end': ast.Location
    readonly 'trailing trivia': ast.Trivia
}

export type Tokenizer_Result = {
    readonly 'leading trivia': ast.Trivia
    readonly 'tokens': _et.Array<Annotated_Token>
    readonly 'end': ast.Location
}