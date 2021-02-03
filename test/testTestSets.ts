/* eslint
    no-console:"off",
    complexity: "off",
    max-classes-per-file: "off",
*/
import * as p from "pareto"
import * as p20 from "pareto-20"
import * as bc from "../src"
import { describe } from "mocha"
import * as chai from "chai"
import { ownJSONTests } from "./data/ownJSONTestset"
import { extensionTests } from "./data/JSONExtenstionsTestSet"
import { EventDefinition, TestRange, TestLocation, TestDefinition } from "./TestDefinition"
import { createStreamSplitter } from "../src/createStreamSplitter"
import { printParsingError, printStackedDataError } from "../src"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

const DEBUG = false

const selectedOwnJSONTests = Object.keys(ownJSONTests)
const selectedExtensionTests = Object.keys(extensionTests)

// const selectedJSONTests: string[] = []
// const selectedExtensionTests: string[] = ["comment"]

type OnError = (message: string, range: bc.Range) => void

interface HeaderSubscriber {
    onSchemaDataStart(range: bc.Range): void
    onInstanceDataStart(compact: null | bc.Range, location: bc.Location): void
}

class StrictJSONHeaderValidator implements HeaderSubscriber {
    private readonly onError: OnError

    constructor(onError: OnError) {
        this.onError = onError
    }
    onSchemaDataStart(range: bc.Range) {
        this.onError(`headers are not allowed in strict JSON`, range)
    }
    onInstanceDataStart() {
        return bc.createStrictJSONValidator(this.onError)
    }
}

function outputOverheadToken(out: string[], $: bc.OverheadToken) {
    switch ($.type[0]) {
        case bc.OverheadTokenType.BlockComment: {
            const $$ = $.type[1]
            out.push(`/*${$$.comment}*/`)
            break
        }
        case bc.OverheadTokenType.LineComment: {
            const $$ = $.type[1]
            out.push(`//${$$.comment}`)
            break
        }
        case bc.OverheadTokenType.NewLine: {
            out.push("\n")
            break
        }
        case bc.OverheadTokenType.WhiteSpace: {
            const $$ = $.type[1]
            out.push($$.value)
            break
        }
        default:
            assertUnreachable($.type[0])
    }
}

class OutPutter implements bc.ParserEventConsumer<null, null> {
    readonly out: string[]
    constructor(out: string[]) {
        this.out = out
    }
    onData(data: bc.BodyEvent) {
        switch (data.type[0]) {
            case bc.BodyEventType.CloseArray: {
                const $ = data.type[1]
                this.out.push($.closeCharacter)
                break
            }
            case bc.BodyEventType.CloseObject: {
                const $ = data.type[1]
                this.out.push($.closeCharacter)
                break
            }
            case bc.BodyEventType.Colon: {
                this.out.push(":")
                break
            }
            case bc.BodyEventType.Comma: {
                this.out.push(",")
                break
            }
            case bc.BodyEventType.OpenArray: {
                const $ = data.type[1]
                this.out.push($.openCharacter)
                break
            }
            case bc.BodyEventType.OpenObject: {
                const $ = data.type[1]
                this.out.push($.openCharacter)
                break
            }
            case bc.BodyEventType.Overhead: {
                const $ = data.type[1]
                outputOverheadToken(this.out, $)
                break
            }
            case bc.BodyEventType.SimpleValue: {
                const $ = data.type[1]
                if ($.quote !== null) {

                    function serialize(str: string) {
                        const escaped = JSON.stringify(str)
                        return escaped.substring(1, escaped.length - 1) //remove quotes
                    }
                    this.out.push(`${$.quote}${serialize($.value)}${$.terminated ? $.quote : ""}`)
                } else {
                    this.out.push($.value)
                }
                break
            }
            case bc.BodyEventType.TaggedUnion: {
                this.out.push("|")
                break
            }
            default:
                assertUnreachable(data.type[0])
        }
        return p.result(false)
    }
    //do the check
    onEnd(): p.IUnsafeValue<null, null> {
        return p.success(null)
    }
}

function createTestFunction(chunks: string[], test: TestDefinition, strictJSON: boolean) {
    return function () {
        if (DEBUG) console.log("CHUNKS:", chunks)

        const actualEvents: EventDefinition[] = []

        function getRange(mustCheck: boolean | undefined, range: bc.Range): TestRange | undefined {
            if (mustCheck) {
                const end = bc.getEndLocationFromRange(range)
                return [
                    range.start.line,
                    range.start.column,
                    end.line,
                    end.column,
                ]
            } else {
                return undefined
            }
        }
        function getLocation(mustCheck: boolean | undefined, location: bc.Location): TestLocation | undefined {
            if (mustCheck) {
                return [
                    location.line,
                    location.column,
                ]
            } else {
                return undefined
            }
        }

        /*
        RECREATE THE ORIGINAL STRING
        */

        function createTestRequiredValueHandler(): bc.RequiredValueHandler {
            return {
                onValue: createTestValueHandler(),
                onMissing: () => {
                    actualEvents.push(["stacked error", "missing value"])
                },
            }
        }
        function createTestValueHandler(): bc.OnValue {
            return _contextData => {
                return {
                    array: () => {
                        return {
                            element: () => {
                                return createTestValueHandler()
                            },
                            end: () => {
                                //
                            },
                        }
                    },
                    object: () => {
                        return {
                            property: () => {
                                return p.result(createTestRequiredValueHandler())
                            },
                            end: () => {
                                //
                            },
                        }

                    },
                    simpleValue: () => {
                        return p.result(false)
                    },
                    taggedUnion: () => {
                        return {
                            missingOption: () => {
                                //
                            },
                            option: () => {
                                return createTestRequiredValueHandler()
                            },
                        }
                    },
                }
            }
        }

        const stackedSubscriber = bc.createStackedDataSubscriber(
            createTestRequiredValueHandler(),
            error => {

                actualEvents.push(["stacked error", printStackedDataError(error)])
            },
            () => {
                return p.success<null, null>(null)
            }
        )
        function onOverheadTokenEvent($: bc.OverheadToken, range: bc.Range) {

            switch ($.type[0]) {
                case bc.OverheadTokenType.BlockComment: {
                    const $$ = $.type[1]
                    if (DEBUG) console.log("found block comment")
                    actualEvents.push(["token", "blockcomment", $$.comment, getRange(test.testForLocation, range)])
                    break
                }
                case bc.OverheadTokenType.LineComment: {
                    const $$ = $.type[1]
                    if (DEBUG) console.log("found line comment")
                    actualEvents.push(["token", "linecomment", $$.comment, getRange(test.testForLocation, range)])
                    break
                }
                case bc.OverheadTokenType.NewLine: {
                    //const $ = data.type[1]
                    //place your code here
                    break
                }
                case bc.OverheadTokenType.WhiteSpace: {
                    //const $ = data.type[1]
                    //place your code here
                    break
                }
                default:
                    assertUnreachable($.type[0])
            }
        }
        const eventSubscriber: bc.ParserEventConsumer<null, null> = {
            onData: data => {
                switch (data.type[0]) {
                    case bc.BodyEventType.CloseArray: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found close array")
                        actualEvents.push(["token", "closearray", $.closeCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case bc.BodyEventType.CloseObject: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found close object")
                        actualEvents.push(["token", "closeobject", $.closeCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case bc.BodyEventType.Colon: {
                        break
                    }
                    case bc.BodyEventType.Comma: {
                        break
                    }
                    case bc.BodyEventType.OpenArray: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found open array")
                        actualEvents.push(["token", "openarray", $.openCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case bc.BodyEventType.OpenObject: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found open object")
                        actualEvents.push(["token", "openobject", $.openCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case bc.BodyEventType.Overhead: {
                        const $ = data.type[1]
                        onOverheadTokenEvent($, data.range)
                        break
                    }
                    case bc.BodyEventType.SimpleValue: {
                        const $ = data.type[1]
                        if ($.quote === null) {
                            if (DEBUG) console.log("found unquoted token")
                            actualEvents.push(["token", "unquotedtoken", $.value, getRange(test.testForLocation, data.range)])
                        } else {
                            if (DEBUG) console.log("found quoted string")
                            actualEvents.push(["token", "quotedstring", $.value, getRange(test.testForLocation, data.range)])
                        }
                        break
                    }
                    case bc.BodyEventType.TaggedUnion: {
                        //const $ = data.type[1]

                        if (DEBUG) console.log("found open tagged union")
                        actualEvents.push(["token", "opentaggedunion", getRange(test.testForLocation, data.range)])
                        break
                    }
                    default:
                        assertUnreachable(data.type[0])
                }
                return p.result(false)
            },
            onEnd: (_aborted, location): p.IUnsafeValue<null, null> => {
                if (DEBUG) console.log("found end")
                actualEvents.push(["end", getLocation(test.testForLocation, location)])
                return p.success(null)
            },
        }

        let formattedText = test.text
        let offset = 0

        function createFormatter() {
            return bc.createFormatter(
                "    ",
                (range, newValue) => {
                    formattedText =
                        formattedText.substr(0, offset + range.start.position) +
                        newValue +
                        formattedText.substr(offset + bc.getEndLocationFromRange(range).position)
                    offset +=
                        + newValue.length
                        - range.length
                },
                range => {
                    formattedText =
                        formattedText.substr(0, offset + range.start.position) +
                        formattedText.substr(offset + range.start.position + range.length)
                    offset +=
                        - range.length
                },
                (location, value) => {
                    formattedText =
                        formattedText.substr(0, offset + location.position) +
                        value +
                        formattedText.substr(offset + location.position)
                    offset += value.length
                },
                () => {

                    return p.result(null)

                },
            )
        }
        const out: string[] = []
        const schemaDataSubscribers: bc.ParserEventConsumer<null, null>[] = [
            new OutPutter(out),
            eventSubscriber,
            createFormatter(),
        ]
        const instanceDataSubscribers: bc.ParserEventConsumer<null, null>[] = [
            new OutPutter(out),
            eventSubscriber,
            stackedSubscriber,
            createFormatter(),
        ]
        const headerSubscribers: HeaderSubscriber[] = [
            {
                onSchemaDataStart: () => {
                    out.push("!")
                    return []
                },
                onInstanceDataStart: compact => {
                    if (compact) {
                        out.push("# ")
                    }
                    return []
                },
            },
        ]

        if (test.testHeaders) {
            headerSubscribers.push({
                onSchemaDataStart: _range => {
                    actualEvents.push(["token", "schema data start"])
                },
                onInstanceDataStart: compact => {
                    if (compact !== null) {
                        actualEvents.push(["token", "compact"])
                    }
                    actualEvents.push(["instance data start", compact !== null])
                },
            })
        }
        if (strictJSON) {
            headerSubscribers.push(new StrictJSONHeaderValidator((v, _range) => {
                actualEvents.push(["validationerror", v])
            }))
            instanceDataSubscribers.push(bc.createStrictJSONValidator((v, _range) => {
                if (DEBUG) console.log("found JSON validation error", v)
                actualEvents.push(["validationerror", v])
            }))
        }
        const parserStack = bc.createParserStack(
            range => {
                headerSubscribers.forEach(s => {
                    s.onSchemaDataStart(range)
                })
                return createStreamSplitter(schemaDataSubscribers)
            },
            (compact, location) => {
                headerSubscribers.forEach(s => {
                    s.onInstanceDataStart(compact, location)
                })
                return createStreamSplitter(instanceDataSubscribers)
            },
            (error, _location) => {
                if (DEBUG) console.log("found error")
                actualEvents.push(["parsingerror", printParsingError(error)])


            },
            (token, range) => {
                outputOverheadToken(out, token)
                onOverheadTokenEvent(token, range)
                return p.result(false)
            },
        )

        return p20.createArray(chunks).streamify().tryToConsume(
            null,
            parserStack,
        ).convertToNativePromise(() => "Error found").then(() => {
            //

            if (test.events !== undefined) {
                chai.assert.deepEqual(actualEvents, test.events)
            }
            const expectedFormattedText = test.formattedText ? test.formattedText : test.text

            if (!test.skipRoundTripCheck) {
                chai.assert.equal("roundtrip:\n" + out.join(""), "roundtrip:\n" + chunks.join("")
                    .replace(/\r\n/g, "\n")
                    .replace(/\n\r/g, "\n")
                    .replace(/\r/g, "\n")
                )
            }
            chai.assert.equal(
                "formatted:\n" + formattedText
                    .replace(/\r\n/g, "\n")
                    .replace(/\n\r/g, "\n")
                    .replace(/\r/g, "\n"),
                "formatted:\n" + expectedFormattedText
            )
        })
    }
}

describe('bass-clarinet', () => {
    describe('#strictJSON', () => {
        selectedOwnJSONTests.forEach(key => {
            const test = ownJSONTests[key]
            it('[' + key + '] should be able to parse -> one chunk', createTestFunction([test.text], test, true));
            it('[' + key + '] should be able to parse -> every character is a chunck', createTestFunction(test.text.split(''), test, true));
        })
    })
    describe('#extensions', () => {
        selectedExtensionTests.forEach(key => {
            const test = extensionTests[key]
            it('[' + key + '] should be able to parse -> one chunk', createTestFunction([test.text], test, false));
            it('[' + key + '] should be able to parse -> every character is a chunck', createTestFunction(test.text.split(''), test, false));
        })
    });

    describe('#pre-chunked', () => {
        selectedOwnJSONTests.forEach(key => {
            const test = ownJSONTests[key]
            if (!test.chunks) return;
            it('[' + key + '] should be able to parse pre-chunked', createTestFunction(test.chunks, test, true));
        })
    });
});