import * as _et from 'exupery-core-types'

import * as ast from "./ast"

export type Text_Edit =
    | ['insert', {
        'location': ast.Relative_Location
        'text': string
    }]
    | ['replace', {
        'range': ast.Range
        'text': string
    }]
    | ['delete', {
        'range': ast.Range
    }]

export type Text_Edits = _et.Array<Text_Edit>