/* eslint
    no-console:"off",
    complexity: "off",
*/
import * as p20 from "pareto-20"
import * as bc from "../src"
import { describe } from "mocha"
import * as chai from "chai"
import { JSONTests } from "./ownJSONTestset"
import { extensionTests } from "./JSONExtenstionsTestSet"
import { EventDefinition, TestRange, TestLocation, TestDefinition } from "./testDefinition"
import { createStackedDataSubscriber, ValueHandler, RequiredValueHandler, DataType } from "../src"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}

const DEBUG = false

const selectedJSONTests = Object.keys(JSONTests)
const selectedExtensionTests = Object.keys(extensionTests)

// const selectedJSONTests: string[] = ["wrong inline formatting"]
// const selectedExtensionTests: string[] = []

function createTestFunction(chunks: string[], test: TestDefinition, strictJSON: boolean) {
    const expectedEvents = test.events
    return function () {
        if (DEBUG) console.log("CHUNKS:", chunks)
        const parser = new bc.Parser(
            (message, _range) => {
                if (DEBUG) console.log("found error")
                actualEvents.push(["parsererror", message])
            }
        )

        const actualEvents: EventDefinition[] = []

        function getRange(mustCheck: boolean | undefined, range: bc.Range): TestRange | undefined {
            if (mustCheck) {
                return [
                    range.start.line,
                    range.start.column,
                    range.end.line,
                    range.end.column,
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

        if (test.testHeaders) {
            parser.onheaderdata.subscribe({
                onHeaderStart: _range => {
                    if (DEBUG) console.log("found header start")
                    actualEvents.push(["token", "headerstart"])
                },
                onHeaderEnd: () => {
                    if (DEBUG) console.log("found header end")
                    actualEvents.push(["headerend"])
                },
                onCompact: () => {
                    if (DEBUG) console.log("found compact")
                    actualEvents.push(["token", "compact"])
                },
            })
        }

        /*
        RECREATE THE ORIGINAL STRING
        */
        const out: string[] = []

        function serialize(str: string) {
            const escaped = JSON.stringify(str)
            return escaped.substring(1, escaped.length - 1) //remove quotes
        }
        const outputter: bc.IDataSubscriber = {
            onData: data => {
                switch (data.type[0]) {
                    case DataType.BlockComment: {
                        const $ = data.type[1]
                        out.push(`/*${$.comment}*/`)
                        break
                    }
                    case DataType.CloseArray: {
                        const $ = data.type[1]
                        out.push($.closeCharacter)
                        break
                    }
                    case DataType.CloseObject: {
                        const $ = data.type[1]
                        out.push($.closeCharacter)
                        break
                    }
                    case DataType.Colon: {
                        out.push(":")
                        break
                    }
                    case DataType.Comma: {
                        out.push(",")
                        break
                    }
                    case DataType.LineComment: {
                        const $ = data.type[1]
                        out.push(`//${$.comment}`)
                        break
                    }
                    case DataType.NewLine: {
                        out.push("\n")
                        break
                    }
                    case DataType.OpenArray: {
                        const $ = data.type[1]
                        out.push($.openCharacter)
                        break
                    }
                    case DataType.OpenObject: {
                        const $ = data.type[1]
                        out.push($.openCharacter)
                        break
                    }
                    case DataType.SimpleValue: {
                        const $ = data.type[1]
                        if ($.quote !== null) {
                            out.push(`${$.quote}${serialize($.value)}${$.terminated ? $.quote : ""}`)
                        } else {
                            out.push($.value)
                        }
                        break
                    }
                    case DataType.TaggedUnion: {
                        out.push("|")
                        break
                    }
                    case DataType.WhiteSpace: {
                        const $ = data.type[1]
                        out.push($.value)
                        break
                    }
                    default:
                        assertUnreachable(data.type[0])
                }
                return false
            },
            //do the check
            onEnd: () => {
                if (!test.skipRoundTripCheck) {
                    chai.assert.equal(out.join(""), chunks.join("")
                        .replace(/\r\n/g, "\n")
                        .replace(/\n\r/g, "\n")
                        .replace(/\r/g, "\n")
                    )
                }
            },
        }
        parser.onschemadata.subscribe(outputter)
        parser.onheaderdata.subscribe({
            onHeaderStart: () => {
                out.push("!")
            },
            onCompact: () => {
                out.push("#")
            },
            onHeaderEnd: () => {
                //
            },
        })
        parser.ondata.subscribe(outputter)

        if (strictJSON) {
            bc.attachStrictJSONValidator(parser, (v, _range) => {
                if (DEBUG) console.log("found JSON validation error", v)
                actualEvents.push(["validationerror", v])
            })
        }

        function createTestRequiredValueHandler(): RequiredValueHandler {
            return {
                valueHandler: createTestValueHandler(),
                onMissing: () => {
                    actualEvents.push(["stacked error", "missing value"])

                },
            }
        }
        function createTestValueHandler(): ValueHandler {
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
                            return createTestRequiredValueHandler()
                        },
                        end: () => {
                            //
                        },
                    }

                },
                simpleValue: () => {
                    //
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

        const stackedSubscriber = createStackedDataSubscriber(
            createTestRequiredValueHandler(),
            error => {
                actualEvents.push(["stacked error", error.rangeLessMessage])
            },
            () => {
                //
            }
        )
        const eventSubscriber: bc.IDataSubscriber = {
            onData: data => {
                switch (data.type[0]) {
                    case DataType.BlockComment: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found block comment")
                        actualEvents.push(["token", "blockcomment", $.comment, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.CloseArray: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found close array")
                        actualEvents.push(["token", "closearray", $.closeCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.CloseObject: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found close object")
                        actualEvents.push(["token", "closeobject", $.closeCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.Colon: {
                        break
                    }
                    case DataType.Comma: {
                        break
                    }
                    case DataType.LineComment: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found line comment")
                        actualEvents.push(["token", "linecomment", $.comment, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.NewLine: {
                        //const $ = data.type[1]
                        //place your code here
                        break
                    }
                    case DataType.OpenArray: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found open array")
                        actualEvents.push(["token", "openarray", $.openCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.OpenObject: {
                        const $ = data.type[1]
                        if (DEBUG) console.log("found open object")
                        actualEvents.push(["token", "openobject", $.openCharacter, getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.SimpleValue: {
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
                    case DataType.TaggedUnion: {
                        //const $ = data.type[1]

                        if (DEBUG) console.log("found open tagged union")
                        actualEvents.push(["token", "opentaggedunion", getRange(test.testForLocation, data.range)])
                        break
                    }
                    case DataType.WhiteSpace: {
                        //const $ = data.type[1]
                        //place your code here
                        break
                    }
                    default:
                        assertUnreachable(data.type[0])
                }
                return false
            },
            onEnd: location => {
                if (DEBUG) console.log("found end")
                actualEvents.push(["end", getLocation(test.testForLocation, location)])
                if (expectedEvents !== undefined) {
                    chai.assert.deepEqual(actualEvents, expectedEvents)
                }
            },
        }
        parser.onschemadata.subscribe(eventSubscriber)
        parser.ondata.subscribe(eventSubscriber)
        parser.ondata.subscribe(stackedSubscriber)

        let formattedText = test.text
        let offset = 0

        const formatter = bc.createFormatter(
            (range, newValue) => {
                formattedText =
                    formattedText.substr(0, offset + range.start.position) +
                    newValue +
                    formattedText.substr(offset + range.end.position)
                offset +=
                    + newValue.length
                    - range.end.position
                    + range.start.position
            },
            range => {
                formattedText =
                    formattedText.substr(0, offset + range.start.position) +
                    formattedText.substr(offset + range.end.position)
                offset +=
                    - range.end.position
                    + range.start.position
            },
            (location, value) => {
                formattedText =
                    formattedText.substr(0, offset + location.position) +
                    value +
                    formattedText.substr(offset + location.position)
                offset += value.length
            },
            () => {

                const expectedFormattedText = test.formattedText ? test.formattedText : test.text
                chai.assert.equal(
                    formattedText
                        .replace(/\r\n/g, "\n")
                        .replace(/\n\r/g, "\n")
                        .replace(/\r/g, "\n"),
                    expectedFormattedText
                )
            },
        )
        parser.ondata.subscribe(formatter)
        parser.onschemadata.subscribe(formatter)

        bc.tokenizeStream(
            new p20.Stream(p20.streamifyArray(chunks, null)),
            parser,
            (message, _location) => {
                if (DEBUG) console.log("found error")

                actualEvents.push(["tokenizererror", message])
            },
        )
    };
}

type Offset = {
    position: number
    offset: number
}

describe('bass-clarinet', () => {
    describe('#strictJSON', () => {
        selectedJSONTests.forEach(key => {
            const test = JSONTests[key]
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
        selectedJSONTests.forEach(key => {
            const test = JSONTests[key]
            if (!test.chunks) return;
            it('[' + key + '] should be able to parse pre-chunked', createTestFunction(test.chunks, test, true));
        })
    });
});
