import * as p from "pareto"
import { ArrayHandler, ObjectHandler, ValueHandler, RequiredValueHandler, TaggedUnionHandler } from "./handlers"

export function createDummyRequiredValueHandler(): RequiredValueHandler {
    return {
        valueHandler: createDummyValueHandler(),
        onMissing: (): void => {
            //
        },
    }
}

export function createDummyValueHandler(): ValueHandler {
    return {
        array: (): ArrayHandler => createDummyArrayHandler(),
        object: (): ObjectHandler => createDummyObjectHandler(),
        simpleValue: (): p.IValue<boolean> => {
            //do nothing
            return p.result(false)
        },
        taggedUnion: (): TaggedUnionHandler => {
            return {
                option: (): RequiredValueHandler => createDummyRequiredValueHandler(),
                missingOption: (): void => {
                    //
                },
            }
        },
    }
}

export function createDummyArrayHandler(): ArrayHandler {
    return {
        element: (): ValueHandler => createDummyValueHandler(),
        end: (): void => {
            //do nothing
        },
    }
}

export function createDummyObjectHandler(): ObjectHandler {
    return {
        property: (): RequiredValueHandler => {
            return createDummyRequiredValueHandler()
        },
        end: (): void => {
            //do nothing
        },
    }
}
