import * as p20 from "pareto-20"
import * as fs from "fs"
import { describe } from "mocha"
import assert from "assert"
import * as path from "path"
import * as bc from "../src"

function tokenizeStrings(
    strings: string[],
    parser: bc.Parser,
    onError: () => void,
) {
    bc.tokenizeStream(
        new p20.Stream(p20.streamifyArray(strings, null)),
        parser,
        onError
    )
}

const parsingDir = path.join(__dirname, "/../../JSONTestSuite/test_parsing")
describe('parsing', () => {
    fs.readdirSync(parsingDir).forEach(file => {
        it(file, () => {
            const expected = file[0]
            switch (expected) {
                case "n": {
                    try {
                        let foundError = false
                        const data = fs.readFileSync(path.join(parsingDir, file), { encoding: "utf-8" })
                        const parser = new bc.Parser(
                            () => {
                                foundError = true
                            },
                        )
                        tokenizeStrings(
                            [data],
                            parser,
                            () => {
                                foundError = true
                            },
                        )
                        assert.ok(foundError, "no errors found")
                    } catch (e) {
                        //nothing to do
                    }
                    break
                }
                case "y": {
                    try {
                        let foundError = false
                        const data = fs.readFileSync(path.join(parsingDir, file), { encoding: "utf-8" })
                        const parser = new bc.Parser(
                            () => {
                                foundError = true
                            },
                        )
                        tokenizeStrings(
                            [data],
                            parser,
                            () => {
                                foundError = true
                            },
                        )
                        assert.ok(!foundError, "errors found")
                    } catch (e) {
                        //do nothing
                    }
                    break
                }
                case "i":
                    try {
                        const data = fs.readFileSync(path.join(parsingDir, file), { encoding: "utf-8" })
                        const parser = new bc.Parser(
                            () => {
                                //do nothing with error
                            },
                        )
                        tokenizeStrings(
                            [data],
                            parser,
                            () => {
                                //do nothing with error
                            },
                        )
                    } catch (e) {
                        //do nothing
                    }
                    break
                default:
                    throw new Error("unknown expected result: " + expected)
            }
        })
    })
})

const transformDir = path.join(__dirname, "/../../JSONTestSuite/test_transform")
describe('transform', () => {
    fs.readdirSync(transformDir).forEach(file => {
        it(file, () => {
            try {
                const data = fs.readFileSync(path.join(transformDir, file), { encoding: "utf-8" })
                const parser = new bc.Parser(
                    () => {
                        //do nothing with error
                    },
                )
                tokenizeStrings(
                    [data],
                    parser,
                    () => {
                        //do nothing with error
                    },
                )
            } catch (e) {
                //do nothing
            }
        })
    })
})
