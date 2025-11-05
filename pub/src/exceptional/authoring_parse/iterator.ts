import * as _et from 'exupery-core-types'

export type Iterator<Element, State> = {
    'get current': () => _et.Optional_Value<Element>,
    'look ahead': (offset: number) => _et.Optional_Value<Element>
    'consume': () => void,
    'get state': () => State,
}