import * as p from "pareto"
import * as fs from "fs"
import * as astn from "../src"
import * as stream from "stream"

const [, , sourcePath, targetPath] = process.argv


const ws: stream.Writable = targetPath !== undefined
? fs.createWriteStream(targetPath, { encoding: "utf-8" })
: process.stdout


if (sourcePath === undefined) {
    console.error("missing path")
    process.exit(1)
}

const dataAsString = fs.readFileSync(sourcePath, { encoding: "utf-8" })

function createRequiredValuePrettyPrinter(indentation: string, writer: (str: string) => void): astn.RequiredValueHandler {
    return {
        onExists: createValuePrettyPrinter(indentation, writer),
        onMissing: () => {
            //write out an empty string to fix this missing data?
        },
    }
}

function createValuePrettyPrinter(indentation: string, writer: (str: string) => void): astn.OnValue {
    return () => {
        return {
            array: (_beginRange, _beginMetaData) => {
                writer(`[`)
                return {
                    onData: () => createValuePrettyPrinter(`${indentation}\t`, writer),
                    onEnd: () => {
                        writer(`${indentation}]`)
                        return p.value(null)
                    },
                }

            },
            object: (_beginRange, _data) => {
                let isFirstProperty = true
                writer(`{`)
                return {
                    onData: propertyData => {
                        writer(`${isFirstProperty? `` : `, ` }${indentation}\t"${propertyData.key}": `)
                        isFirstProperty = false
                        return p.value(createRequiredValuePrettyPrinter(`${indentation}\t`, writer))
                    },
                    onEnd: () => {
                        writer(`${indentation}}`)
                        return p.value(null)
                    },
                }
            },
            simpleValue: (_range, data) => {
                if (data.quote !== null) {
                    writer(`${JSON.stringify(data.value)}`)
                } else {
                    writer(`${data.value}`)
                }
                return p.value(false)
            },
            taggedUnion: () => {
                return {
                    option: (_range, option) => {
                        writer(`[ "${option}", `)
                        return createRequiredValuePrettyPrinter(`${indentation}`, writer)
                    },
                    missingOption: () => {
                        //
                    },
                    end: () => {
                        write(`]`)
                    },
                }
            },
        }
    }
}

export function createPrettyPrinter(indentation: string, writer: (str: string) => void): astn.TextParserEventConsumer<null, null> {
    const datasubscriber = astn.createStackedParser<null, null>(
        {
            onExists: createValuePrettyPrinter(indentation, writer),
            onMissing: () => {
                console.error("FOUND MISSING DATA")

            },
        },
        error => {
            console.error("FOUND STACKED DATA ERROR", error)
        },
        () => {
            //onEnd
            //no need to return an value, we're only here for the side effects, so return 'null'
            return p.success(null)
        }
    )
    return datasubscriber
}

export function createDummyEventConsumer(): astn.TextParserEventConsumer<null, null> {
    const datasubscriber = astn.createStackedParser<null, null>(
        {
            onExists: astn.createDummyValueHandler(),
            onMissing: () => {
                //
            },
        },
        _error => {
            //
        },
        () => {
            //onEnd
            //no need to return an value, we're only here for the side effects, so return 'null'
            return p.success(null)
        }
    )
    return datasubscriber
}

function write(str: string) {
    ws.write(str)
}

astn.parseString(
    dataAsString,
    _range => {
        return createDummyEventConsumer()
    },
    () => {
        return createPrettyPrinter("\r\n", write)
    },
    err => { console.error("FOUND ERROR", astn.printParsingError(err)) },
    _overheadToken => {
        return p.value(false)
    },
).handle(
    () => {
        write("\r\n")
        //we're only here for the side effects, so no need to handle the error
        ws.end()
    },
    () => {
        write("\r\n")
        //we're only here for the side effects, so no need to handle the result (which is 'null' anyway)
        ws.end()
    }
)