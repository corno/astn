import * as _et from 'exupery-core-types'

export type Annotated_Character = {
    'code': number
    'location': {
        'line': number
        'column': number
    }
    'line indentation': number
}

export type Annotated_Characters = _et.List<Annotated_Character>