import * as p from "pareto"
import * as core from "astn-core"
import { createErrorStreamHandler, createParserStack } from "../parser"
import { TokenizerAnnotationData } from "../../interfaces"
import { createSerializedQuotedString } from "astn-core"

export function createASTNTextFormatter(
    formatter: core.Formatter<TokenizerAnnotationData, null>,
    endString: string,
    write: (str: string) => void,
): p.IStreamConsumer<string, null, null> {
    const ps = createParserStack(

        _range => {
            write(formatter.onSchemaHeader())
            return core.createStackedParser<TokenizerAnnotationData, null, null>(
                core.createDecoratedTree(
                    formatter.schemaFormatter,
                    core.createTreeConcatenator(write, () => p.value(null)),
                ),
                _error => {
                    //
                },
                () => {
                    write(formatter.onAfterSchema())
                    //onEnd
                    //no need to return an value, we're only here for the side effects, so return 'null'
                    return p.success(null)
                },
                () => core.createDummyValueHandler(() => p.value(null)),
            )
        },
        schemaReference => {
            write(createSerializedQuotedString(schemaReference.value))
        },
        () => {
            const datasubscriber = core.createStackedParser<TokenizerAnnotationData, null, null>(
                core.createDecoratedTree(
                    formatter.bodyFormatter,
                    core.createTreeConcatenator(write, () => p.value(null)),
                ),
                error => {
                    console.error("FOUND STACKED DATA ERROR", error)
                },
                () => {
                    //onEnd
                    //no need to return an value, we're only here for the side effects, so return 'null'
                    return p.success(null)
                },

                () => core.createDummyValueHandler(() => p.value(null)),
            )
            return datasubscriber
        },
        createErrorStreamHandler(true, str => console.error(str))
    )

    return {
        onData: $ => ps.onData($),
        onEnd: (aborted, data) => {
            write(endString)
            return ps.onEnd(aborted, data).reworkAndCatch(
                () => {
                    //we're only here for the side effects, so no need to handle the error
                    return p.value(null)
                },
                () => {
                    //we're only here for the side effects, so no need to handle the result (which is 'null' anyway)
                    return p.value(null)
                }
            )
        },
    }
}