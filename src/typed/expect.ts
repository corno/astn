import * as p from "pareto"
import * as astn from ".."
import { ArrayData, ObjectData, OptionData, SimpleValueData2, PropertyData } from "../handlers"
import { ExpectContext, ExpectedProperties } from "./ExpectContext"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

type PropertyHandler<Annotation> = (data: {
    data: PropertyData
    annotation: Annotation
}) => ValueType<Annotation>

type OnInvalidType<Annotation> = (annotation: Annotation) => void

export type ValueType<Annotation> =
    // | [
    //     "shorthand type",
    //     {
    //         valueType: ValueType
    //         name: string
    //     }[],
    //     {
    //         onBegin?: (range: astn.Range, metaData: astn.ArrayOpenData) => void
    //         onEnd?: (range: astn.Range, metaData: astn.ArrayCloseData) => void
    //         onMissing?: () => void
    //         onInvalidType?: () => void
    //     }?
    // ]
    | [
        "boolean",
        (value: boolean, data: {
            data: SimpleValueData2
            annotation: Annotation
        }) => p.IValue<boolean>,
        {
            onMissing?: () => void
            onInvalidType?: () => void
        }?
    ]
    | [
        "dicionary",
        (propertyData: {
            data: PropertyData
            annotation: Annotation
        }) => ValueType<Annotation>,
        {
            onBegin: (data: {
                data: ObjectData
                annotation: Annotation
            }) => void
            onEnd: (objectEndData: {
                annotation: Annotation
            }) => void
            onMissing?: () => void
            onInvalidType?: () => void
        }
    ]
    | ["list",
        ValueType<Annotation>,
        {
            onBegin: (data: {
                data: ArrayData
                annotation: Annotation
            }) => void
            onEnd: (endData: {
                annotation: Annotation
            }) => void
            onMissing?: () => void
            onInvalidType?: () => void
        }
    ]
    | [
        "null",
        (data: {
            data: SimpleValueData2
            annotation: Annotation
        }) => p.IValue<boolean>,
        {
            onMissing?: () => void
            onInvalidType?: () => void
        }?
    ]
    | [
        "number",
        (number: number, data: {
            data: SimpleValueData2
            annotation: Annotation
        }) => p.IValue<boolean>,
        {
            onMissing?: () => void
            onInvalidType?: () => void
        }?
    ]
    | [
        "simple value",
        (data: {
            data: SimpleValueData2
            annotation: Annotation
        }) => p.IValue<boolean>,
        {
            onMissing?: () => void
            onInvalidType?: () => void
        }?
    ]
    | [
        "tagged union", {
            [key: string]: (
                taggedUnionData: {
                    annotation: Annotation
                },
                optionData: {
                    data: OptionData
                    annotation: Annotation
                },
            ) => astn.RequiredValueHandler<Annotation>
        },
        {
            onUnexpectedOption?: (
                $: {
                    tuAnnotation: Annotation
                    data: OptionData
                    optionAnnotation: Annotation
                },
            ) => void
            onMissingOption?: () => void
            onMissing?: () => void
            onInvalidType?: () => void
        }?
    ]
    | [
        "type",
        {
            [key: string]:
            | PropertyHandler<Annotation>
            | [PropertyHandler<Annotation>, {
                onNotExists?: ($: {
                    data: ObjectData
                    beginAnnotation: Annotation
                    endAnnotation: Annotation
                }) => void
            }?
            ]
        },
        {
            onBegin?: ($: {
                data: ObjectData
                annotation: Annotation
            }) => void
            onEnd?: ($: {
                hasErrors: boolean
                annotation: Annotation
            }) => void
            onUnexpectedProperty?: ($: {
                data: PropertyData
                annotation: Annotation
            }) => astn.RequiredValueHandler<Annotation>
            onMissing?: () => void
            onInvalidType?: OnInvalidType<Annotation>
        }?
    ]

export function createRequiredValueHandler<Annotation>(
    context: ExpectContext<Annotation>,
    valueType: ValueType<Annotation>,
): astn.RequiredValueHandler<Annotation> {
    return context.expectValue(
        createValueHandler(
            context,
            valueType,
        ),
        valueType[2]?.onMissing
    )
}

export function createValueHandler<Annotation>(
    context: ExpectContext<Annotation>,
    valueType: ValueType<Annotation>,
): astn.ValueHandler<Annotation> {
    switch (valueType[0]) {
        // case "shorthand type": {
        //     const $1 = valueType[1]
        //     const $2 = valueType[2]
        //     return context.expectShorthandType(
        //         $1.map(e => {
        //             return {
        //                 getHandler: (): astn.RequiredValueHandler => createRequiredValueHandler(
        //                     context,
        //                     e.valueType,
        //                 ),
        //                 name: e.name,
        //             }
        //         }),
        //         $2?.onBegin,
        //         $2?.onEnd,
        //         $2?.onInvalidType
        //     )
        // }
        case "boolean": {
            const $1 = valueType[1]
            const $2 = valueType[2]
            return context.expectBoolean(
                $1,
                $2?.onInvalidType,
            )
        }
        case "dicionary": {
            const $1 = valueType[1]
            const $2 = valueType[2]
            return context.expectDictionary(
                $2.onBegin,
                propertyData => {
                    return createRequiredValueHandler(
                        context,
                        $1(propertyData),
                    )
                },
                $2.onEnd,
                $2.onInvalidType,
            )
        }
        case "list": {
            const $1 = valueType[1]
            const $2 = valueType[2]
            return context.expectList(
                $2.onBegin,
                () => {
                    return createValueHandler(context, $1)
                },
                $2.onEnd,
                $2.onInvalidType,
            )
        }
        case "null": {
            const $1 = valueType[1]
            const $2 = valueType[2]

            return context.expectNull(
                $1,
                $2?.onInvalidType,
            )
        }
        case "number": {
            const $1 = valueType[1]
            const $2 = valueType[2]

            return context.expectNumber(
                $1,
                $2?.onInvalidType,
            )
        }
        case "simple value": {
            const $1 = valueType[1]
            const $2 = valueType[2]

            return context.expectSimpleValue(
                $1,
                $2?.onInvalidType,
            )
        }
        case "tagged union": {
            const $1 = valueType[1]
            const $2 = valueType[2]
            return context.expectTaggedUnion(
                $1,
                $2?.onUnexpectedOption,
                $2?.onMissingOption,
                $2?.onInvalidType,
            )
        }
        case "type": {
            const $1 = valueType[1]
            const $2 = valueType[2]
            const props: ExpectedProperties<Annotation> = {}
            Object.keys($1).forEach(key => {
                const rawProp = $1[key]
                if (rawProp instanceof Array) {
                    props[key] = {
                        onExists: data => {
                            return createRequiredValueHandler(context, rawProp[0](data))
                        },
                        onNotExists: rawProp[1] !== undefined && rawProp[1].onNotExists !== undefined
                            ? rawProp[1].onNotExists
                            : null,
                    }
                } else {
                    props[key] = {
                        onExists: data => {
                            return createRequiredValueHandler(context, rawProp(data))
                        },
                        onNotExists: null,
                    }
                }
            })
            return context.expectType(
                props,
                $2?.onBegin,
                $2?.onEnd,
                $2?.onUnexpectedProperty,
                $2?.onInvalidType,
            )
        }
        default:
            return assertUnreachable(valueType[0])
    }
}