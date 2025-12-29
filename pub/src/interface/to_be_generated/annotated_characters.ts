import * as _pi from 'pareto-core-interface'

export type Annotated_Character = {
    'code': number
    'location': {
        'line': number
        'column': number
    }
    'line indentation': number
}

export type Annotated_Characters = _pi.List<Annotated_Character>