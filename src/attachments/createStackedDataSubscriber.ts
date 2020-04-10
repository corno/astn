/* eslint
    no-console:"off",
    no-underscore-dangle: "off",
*/
import { IDataSubscriber, StringData } from "../IDataSubscriber"
import { Location, Range } from "../location"
import { createDummyValueHandler } from "./dummyHandlers"
import { ValueHandler, ObjectHandler, ArrayHandler, Comment, PreData } from "./handlers"
import { RangeError } from "../errors"

const DEBUG = false

class StackedDataSubscriberPanic extends RangeError {
    constructor(message: string, range: Range) {
        super(`stack panic: ${message}`, range)
    }
}

export type ContextType =
    | ["root", {
        readonly valueHandler: ValueHandler
    }]
    | ["object", {
        readonly objectHandler: ObjectHandler
        propertyValueHandler: null | ValueHandler
    }]
    | ["array", {
        readonly arrayHandler: ArrayHandler
    }]
    | ["taggedunion", {
        readonly start: Range
        readonly parentValueHandler: ValueHandler
        dataHandler: null | ValueHandler
        preData: PreData
    }]

type StackedDataError = {
    message: string
    context:
    | ["range", Range]
    | ["location", Location]
}

function raiseRangeError(onError: (error: StackedDataError) => void, message: string, range: Range) {
    onError({
        message: message,
        context: ["range", range],
    })
}

/**
 * attachStackedDataSubscriber allows for capturing objects and arrays in a callback, so that the consumer does not have to match
 * 'onopenobject' with 'oncloseobject'
 * and
 * 'onopenarray' with 'onclosearray'
 */
export function createStackedDataSubscriber(
    valueHandler: ValueHandler,
    onError: (error: StackedDataError) => void,
    onend: (preData: PreData) => void
): IDataSubscriber {
    const stack: ContextType[] = []
    let comments: Comment[] = []
    let indentation = ""
    let lineIsDirty = false

    let currentContext: ContextType = ["root", { valueHandler: valueHandler }]

    function flushPreData(): PreData {
        const preData = {
            comments: comments,
            indentation: indentation,
        }
        comments = []
        indentation = ""
        lineIsDirty = false
        return preData
    }

    function pop(range: Range) {
        const previousContext = stack.pop()
        if (previousContext === undefined) {
            raiseRangeError(onError, "lost context", range)
        } else {
            currentContext = previousContext
        }
    }
    function initValueHandler(): ValueHandler {
        switch (currentContext[0]) {
            case "array": {
                return currentContext[1].arrayHandler.element()
            }
            case "object": {
                if (currentContext[1].propertyValueHandler === null) {
                    //error is already reported by parser
                    return createDummyValueHandler()
                } else {
                    return currentContext[1].propertyValueHandler
                }
            }
            case "root": {
                return currentContext[1].valueHandler
            }
            case "taggedunion": {
                if (currentContext[1].dataHandler === null) {
                    //error is already reported by parser
                    return createDummyValueHandler()
                } else {
                    return currentContext[1].dataHandler
                }
            }
            default:
                return assertUnreachable(currentContext[0])
        }
    }
    function onSimpleValue(value: string, metaData: StringData) {
        if (DEBUG) { console.log("on simple value", value) }
        const vh = initValueHandler()
        vh.simpleValue(
            value,
            metaData,
            flushPreData()
        )
        wrapupValue(metaData.range)
    }
    function wrapupValue(range: Range): void {
        switch (currentContext[0]) {
            case "array": {
                break
            }
            case "object": {
                currentContext[1].propertyValueHandler = null
                break
            }
            case "root": {
                break
            }
            case "taggedunion": {
                if (currentContext[1].dataHandler === null) {
                    //error is already reported by parser
                    break
                } else {
                    pop(range)
                    wrapupValue(range)
                    break
                }
            }
            default:
                return assertUnreachable(currentContext[0])
        }
    }
    // function getAfterValueContext(): AfterValueContext {
    //     switch (currentContext[0]) {
    //         case "array": {
    //             return AfterValueContext.ARRAY
    //         }
    //         case "object": {
    //             return AfterValueContext.OBJECT
    //         }
    //         case "root": {
    //             return AfterValueContext.END
    //         }
    //         case "taggedunion": {
    //             if (currentContext[1].valueHandler === null) {
    //                 //error is already reported by parser
    //                 return createDummyValueHandler()
    //             } else {
    //                 return currentContext[1].valueHandler
    //             }
    //         }
    //         default:
    //             return assertUnreachable(currentContext[0])
    //     }
    // }

    return {
        onComma: () => {
            lineIsDirty = true
            //
        },
        onColon: () => {
            lineIsDirty = true
            //
        },
        onNewLine: () => {
            lineIsDirty = false
            indentation = ""

            //
        },
        onWhitespace: (value: string) => {
            if (!lineIsDirty) {
                indentation = value
            }
            //
        },
        onLineComment: (comment, range) => {
            lineIsDirty = true
            comments.push({
                text: comment,
                type: "line",
                indent: null,
                range: range,
            })
        },
        onBlockComment: (comment, range) => {
            lineIsDirty = true
            comments.push({
                text: comment,
                type: "line",
                indent: null, //FIX get the right indent info
                range: range,
            })
        },
        onOpenArray: metaData => {
            lineIsDirty = true
            const arrayHandler = initValueHandler().array(
                metaData,
                flushPreData()
            )
            stack.push(currentContext)
            currentContext = ["array", { arrayHandler: arrayHandler }]
        },
        onCloseArray: metaData => {
            lineIsDirty = true
            if (currentContext[0] !== "array") {
                raiseRangeError(onError, "unexpected end of array", metaData.range)
            } else {
                currentContext[1].arrayHandler.end(
                    metaData,
                    flushPreData()
                )
                pop(metaData.range)
                wrapupValue(metaData.range)
            }
        },
        onOpenTaggedUnion: range => {
            lineIsDirty = true
            if (DEBUG) { console.log("on open tagged union") }
            stack.push(currentContext)
            currentContext = ["taggedunion", { start: range, parentValueHandler: initValueHandler(), dataHandler: null, preData: flushPreData() }]
        },
        onOpenObject: metaData => {
            lineIsDirty = true
            if (DEBUG) { console.log("on open object") }
            const vh = initValueHandler()
            const objectHandler = vh.object(
                metaData,
                flushPreData()
            )
            stack.push(currentContext)
            currentContext = ["object", {
                objectHandler: objectHandler,
                propertyValueHandler: null,
            }]
        },
        onCloseObject: metaData => {
            if (DEBUG) { console.log("on close object") }
            lineIsDirty = true
            if (currentContext[0] !== "object") {
                raiseRangeError(onError, "unexpected end of object", metaData.range)
            } else {
                currentContext[1].objectHandler.end(
                    metaData,
                    flushPreData()
                )
                pop(metaData.range)
                wrapupValue(metaData.range)
            }

        },
        onString: (value, metaData) => {
            lineIsDirty = true
            switch (currentContext[0]) {
                case "array": {
                    onSimpleValue(value, metaData)
                    break
                }
                case "object": {
                    const $ = currentContext[1]
                    if ($.propertyValueHandler === null) {
                        if (DEBUG) { console.log("on key", value) }
                        if (currentContext[0] !== "object") {
                            raiseRangeError(onError, "unexpected key", metaData.range)
                        } else {
                            currentContext[1].propertyValueHandler = currentContext[1].objectHandler.property(
                                value,
                                {
                                    keyRange: metaData.range,
                                },
                                flushPreData()
                            )
                        }
                    } else {
                        onSimpleValue(value, metaData)
                    }
                    break
                }
                case "root": {
                    onSimpleValue(value, metaData)
                    break
                }
                case "taggedunion": {
                    const $ = currentContext[1]
                    if ($.dataHandler === null) {
                        if (DEBUG) { console.log("on option", value) }
                        if (currentContext[0] !== "taggedunion") {
                            raiseRangeError(onError, "unexpected option", metaData.range)
                        } else {
                            currentContext[1].dataHandler = currentContext[1].parentValueHandler.taggedUnion(
                                value,
                                {
                                    startRange: currentContext[1].start,
                                    optionRange: metaData.range,
                                    pauser: metaData.pauser,
                                },
                                currentContext[1].preData,
                                flushPreData()
                            )
                        }
                    } else {
                        onSimpleValue(value, metaData)
                    }
                    break
                }
                default:
                    return assertUnreachable(currentContext[0])
            }
        },
        onEnd: (location: Location) => {
            const range = { start: location, end: location }
            while (currentContext[0] !== "root") {
                raiseRangeError(onError, "unexpected end of document, still in nested type", range)
                const popped = stack.pop()
                if (popped === undefined) {
                    throw new StackedDataSubscriberPanic("unexpected end of stack", range)
                } else {
                    currentContext = popped
                }
            }
            onend(flushPreData())
        },
    }
}

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}