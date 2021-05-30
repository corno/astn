/* eslint
    no-console:"off",
    max-classes-per-file:"off",
*/
import * as p from "pareto"
import { Location, Range, printRange, getEndLocationFromRange, createRangeFromSingleLocation } from "../../location"
import * as Char from "../../Characters"
import { createTreeParser, TreeParserEventConsumer, TreeEventType } from "../../treeParser"
import { TokenType, Token, PunctionationData, StringData, OverheadToken } from "../../treeParser"
import { TokenConsumer } from "../../tokenizer"
import { ITreeParser } from "../../treeParser"
import { TextErrorType, TextParserError } from "../api"

const DEBUG = false

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

enum TextState {
    EXPECTING_SCHEMA_START_OR_ROOT_VALUE,
    EXPECTING_SCHEMA,
    PROCESSING_SCHEMA,
    EXPECTING_BODY,
    PROCESSING_BODY,
    EXPECTING_END, // no more input expected}

}


type RootContext<ReturnType, ErrorType> = {
    state:
    | [TextState.EXPECTING_SCHEMA_START_OR_ROOT_VALUE]
    | [TextState.EXPECTING_SCHEMA]
    | [TextState.PROCESSING_SCHEMA, {
        treeParser: ITreeParser<null, null>
    }]
    | [TextState.EXPECTING_BODY, {
    }]
    | [TextState.PROCESSING_BODY, {
        treeParser: ITreeParser<ReturnType, ErrorType>
    }]
    | [TextState.EXPECTING_END, {
        result: p.IUnsafeValue<ReturnType, ErrorType>
    }]
}

/**
 * A parser is used to build a certain type,
 * for this reason it has 2 type parameters:
 * -ReturnType: The type if parsing went succesful
 * -ErrorType: The type if the parsing produced an unexpected error
 * @param onSchemaDataStart a document can contain schema data. If this is the case, this callback will be called.
 * it enables the consuming code to prepare for the instance data. It cannot produce a result itself, hence the type parameters are null and null
 * @param onInstanceDataStart when the instance data starts, this callback is called and a TextParserEventConsumer should be returned. This consumer will also produce the final resulting type
 * @param onerror a handler for when a parsing error occurs
 * @param onHeaderOverheadToken when a whitespace, newline or comment is encountered while parsing the header, this callback is called
 */
export function createTextParser<ReturnType, ErrorType>(
    onSchemaDataStart: (range: Range) => TreeParserEventConsumer<null, null>,
    onInstanceDataStart: (location: Location) => TreeParserEventConsumer<ReturnType, ErrorType>,
    onerror: (error: TextParserError, range: Range) => void,
    onHeaderOverheadToken: (token: OverheadToken, range: Range) => p.IValue<boolean>,
): TokenConsumer<ReturnType, ErrorType> {
    class TextParser {
        private readonly rootContext: RootContext<ReturnType, ErrorType> = { state: [TextState.EXPECTING_SCHEMA_START_OR_ROOT_VALUE] }
        /*
        a structure overhead token is a newline/whitspace/comment outside the content parts: (schema data, instance data)
        */
        public onEnd(aborted: boolean, location: Location): p.IUnsafeValue<ReturnType, ErrorType> {

            const range = createRangeFromSingleLocation(location)

            switch (this.rootContext.state[0]) {
                case TextState.EXPECTING_SCHEMA_START_OR_ROOT_VALUE: {
                    //const $ = this.rootContext.state[1]

                    this.raiseStructureError(["expected the schema start (!) or root value"], range)

                    return onInstanceDataStart(location).onEnd(aborted, location)
                }
                case TextState.EXPECTING_SCHEMA: {
                    //const $ = this.rootContext.state[1]

                    this.raiseStructureError(["expected the schema"], range)
                    return onInstanceDataStart(location).onEnd(aborted, location)
                }
                case TextState.PROCESSING_SCHEMA: {
                    const $ = this.rootContext.state[1]
                    return $.treeParser.forceEnd(aborted, location).reworkAndCatch(
                        () => {
                            return p.value(false)
                        },
                        () => {
                            return p.value(false)

                        }
                    ).try(() => {
                        //this.raiseError("incomplete schema", range)
                        return onInstanceDataStart(location).onEnd(aborted, location)
                    })
                }
                case TextState.EXPECTING_BODY: {
                    //const $ = this.rootContext.state[1]
                    this.raiseStructureError(["expected rootvalue"], range)

                    return onInstanceDataStart(location).onEnd(aborted, location)
                }
                case TextState.PROCESSING_BODY: {
                    const $ = this.rootContext.state[1]
                    //this.raiseError("incomplete document", range)

                    return $.treeParser.forceEnd(aborted, location)
                }
                case TextState.EXPECTING_END: {
                    const $ = this.rootContext.state[1]
                    return $.result
                }
                default:
                    return assertUnreachable(this.rootContext.state[0])
            }
        }
        private handleToken(
            token: Token,
            onPunctuation: (data: PunctionationData) => p.IValue<boolean>,
            onString: (stringData: StringData) => p.IValue<boolean>,
        ): p.IValue<boolean> {
            switch (token.type[0]) {
                case TokenType.Overhead: {
                    const $ = token.type[1]
                    return onHeaderOverheadToken($, token.range)
                }
                case TokenType.Structural: {
                    const $ = token.type[1]
                    return onPunctuation($)
                }
                case TokenType.String: {
                    const $ = token.type[1]
                    return onString($)
                }
                default:
                    return assertUnreachable(token.type[0])
            }
        }
        public onData(data: Token): p.IValue<boolean> {
            switch (this.rootContext.state[0]) {
                case TextState.EXPECTING_SCHEMA_START_OR_ROOT_VALUE: {
                    return this.handleToken(
                        data,
                        punctuation => {
                            switch (punctuation.char) {
                                case Char.Punctuation.exclamationMark:
                                    this.rootContext.state = [TextState.EXPECTING_SCHEMA]
                                    return p.value(false)
                                default:
                                    return this.processComplexValueInstanceData(data, data.range)
                            }
                        },
                        string => {
                            return this.processStringInstanceData(string, data.range, data.tokenString)
                        }
                    )
                }
                case TextState.EXPECTING_SCHEMA: {
                    return this.handleToken(
                        data,
                        _punctuation => {
                            const bp = createTreeParser(
                                (error, errorRange) => {
                                    onerror(
                                        {
                                            type: ["body", error],
                                        },
                                        errorRange
                                    )
                                },
                                onSchemaDataStart(data.range),
                            )
                            this.rootContext.state = [TextState.PROCESSING_SCHEMA, {
                                treeParser: bp,
                            }]
                            return bp.onData(data, result => {
                                this.rootContext.state = [TextState.EXPECTING_BODY, {
                                }]
                                return result.reworkAndCatch(
                                    () => {
                                        return p.value(false)
                                    },
                                    () => {
                                        return p.value(false)
                                    }
                                )
                            })
                        },
                        string => {
                            const consumer = onSchemaDataStart(data.range)
                            return consumer.onData({
                                tokenString: data.tokenString,
                                range: data.range,
                                type: [TreeEventType.String, string],
                            }).mapResult(() => {

                                this.rootContext.state = [TextState.EXPECTING_BODY, {
                                }]
                                return consumer.onEnd(false, getEndLocationFromRange(data.range)).reworkAndCatch(
                                    () => {
                                        return p.value(false)
                                    },
                                    () => {
                                        return p.value(false)
                                    },
                                )
                            })
                        }
                    )
                }
                case TextState.PROCESSING_SCHEMA: {
                    const $ = this.rootContext.state[1]

                    return $.treeParser.onData(data, result => {
                        this.rootContext.state = [TextState.EXPECTING_BODY, {}]
                        return result.reworkAndCatch(
                            () => {
                                return p.value(false)
                            },
                            () => {
                                return p.value(false)

                            }
                        )
                    })

                }
                case TextState.EXPECTING_BODY: {
                    return this.handleToken(
                        data,
                        _punctuation => {
                            return this.processComplexValueInstanceData(data, data.range)
                        },
                        string => {
                            return this.processStringInstanceData(string, data.range, data.tokenString)
                        }
                    )
                }
                case TextState.PROCESSING_BODY: {
                    const $ = this.rootContext.state[1]

                    return $.treeParser.onData(data, result => {
                        this.rootContext.state = [TextState.EXPECTING_END, { result: result }]
                        return p.value(false)
                    })
                }
                case TextState.EXPECTING_END: {
                    return this.handleToken(
                        data,
                        punctuation => {
                            this.raiseStructureError([`unexpected data after end`, {
                                data: String.fromCharCode(punctuation.char),
                            }], data.range)
                            return p.value(false)
                        },
                        string => {

                            const valueAsString = (($: StringData): string => {
                                switch ($.type[0]) {
                                    case "quoted": {
                                        const $$ = $.type[1]
                                        return $$.value
                                    }
                                    case "apostrophed": {
                                        const $$ = $.type[1]
                                        return $$.value
                                    }
                                    case "multiline": {
                                        const $$ = $.type[1]
                                        return $$.lines.join("\n")
                                    }
                                    case "nonwrapped": {
                                        const $$ = $.type[1]
                                        return $$.value
                                    }
                                    default:
                                        return assertUnreachable($.type[0])
                                }
                            })(string)
                            this.raiseStructureError([`unexpected data after end`, {
                                data: valueAsString,
                            }], data.range)
                            return p.value(false)
                        }
                    )
                }
                default:
                    return assertUnreachable(this.rootContext.state[0])
            }
        }
        private processComplexValueInstanceData(data: Token, range: Range) {
            const bp = createTreeParser(
                (error, errorRange) => {
                    onerror(
                        {
                            type: ["body", error],
                        },
                        errorRange
                    )
                },
                onInstanceDataStart(range.start),
            )
            this.rootContext.state = [TextState.PROCESSING_BODY, {
                treeParser: bp,
            }]
            return bp.onData(data, result => {
                this.rootContext.state = [TextState.EXPECTING_END, {
                    result: result,
                }]
                return p.value(false)
            })
        }
        private processStringInstanceData(string: StringData, range: Range, tokenString: string) {

            const consumer = onInstanceDataStart(range.start)
            return consumer.onData({
                tokenString: tokenString,
                range: range,
                type: [TreeEventType.String, string],
            }).mapResult(() => {
                this.rootContext.state = [TextState.EXPECTING_END, {
                    result: consumer.onEnd(false, getEndLocationFromRange(range)),
                }]
                return p.value(false)
            })

        }
        private raiseStructureError(type: TextErrorType, range: Range) {
            if (DEBUG) { console.log("error raised:", type[0], printRange(range)) }
            onerror(
                {
                    type: ["structure", {
                        type: type,
                    }],
                },
                range)
        }
    }
    return new TextParser()
}
