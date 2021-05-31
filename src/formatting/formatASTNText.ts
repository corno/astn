import * as p from "pareto"
import { createDecoratedTree } from "../implementations/createDecorator"
import { TokenFormatInstruction, NonTokenFormatInstruction } from "./FormatInstruction"
import { createRequiredValueConcatenator } from "./concatenateFormatInstructions"
import { createStackedParser } from "../implementations/stackedParser"
import { parseString, printParsingError } from "../parser"
import { createDummyTreeHandler } from "../implementations/dummyHandlers"
import { printRange } from "../location"
import { Annotater } from "../interfaces/IAnnotater"
import { ParserAnnotationData } from "../interfaces/ParserAnnotationData"

export function formatASTNText(
    astnText: string,
    formatter: Annotater<ParserAnnotationData, null, TokenFormatInstruction, NonTokenFormatInstruction>,
    consumer: p.IStreamConsumer<string, null, null>,
): p.IValue<null> {

    function write(str: string) {
        consumer.onData(str)
    }

    return parseString(
        astnText,
        _range => {
            return createStackedParser<null, null>(
                createDummyTreeHandler(),
                _error => {
                    //
                },
                () => {
                    //onEnd
                    //no need to return an value, we're only here for the side effects, so return 'null'
                    return p.success(null)
                }
            )
        },
        () => {
            const datasubscriber = createStackedParser<null, null>(
                createDecoratedTree(
                    formatter,
                    createRequiredValueConcatenator(write),
                ),
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
        },
        (err, range) => { console.error(`found error: ${printParsingError(err)} @ ${printRange(range)}`) },
        _overheadToken => {
            return p.value(false)
        },
    ).reworkAndCatch(
        () => {
            write("\r\n")
            //we're only here for the side effects, so no need to handle the error
            return consumer.onEnd(false, null)
        },
        () => {
            write("\r\n")
            //we're only here for the side effects, so no need to handle the result (which is 'null' anyway)
            return consumer.onEnd(false, null)
        }
    )
}