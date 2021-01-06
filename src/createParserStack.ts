import * as p from "pareto"
import {
    ParserEventConsumer,
    createParser,
} from "./createParser"
import {
    OverheadToken,
} from "./Token"
import {
    Range,
    Location,
} from "./location"
import {
    createStreamPreTokenizer,
} from "./createStreamPreTokenizer"
import {
    createTokenizer,
} from "./createTokenizer"

/**
 * the top level function for this package.
 * @param onSchemaDataStart a callback that should provide a handler for the (optional) schema part of the document
 * @param onInstanceDataStart a callback that must provide a handler for the instance data part of the document
 * @param onTokenizerError an optional callback for when a tokenizer error occurs.
 * @param onParserError an optional callback for when a parser error occurs.
 * @param onHeaderOverheadToken an optional callback for handling overhead tokens in the header (comments, whitespace, newlines).
 */
export function createParserStack<ReturnType, ErrorType>(
    onSchemaDataStart: (range: Range) => ParserEventConsumer<null, null>,
    onInstanceDataStart: (compact: null | Range, location: Location) => ParserEventConsumer<ReturnType, ErrorType>,
    onTokenizerError: (message: string, range: Range) => void = () => {
        //
    },
    onParserError: (message: string, range: Range) => void = () => {
        //
    },
    onHeaderOverheadToken: (token: OverheadToken, range: Range) => p.IValue<boolean> = () => p.result(false),
): p.IStreamConsumer<string, null, ReturnType, ErrorType> {
    return createStreamPreTokenizer(
        createTokenizer(createParser(
            onSchemaDataStart,
            onInstanceDataStart,
            onParserError,
            onHeaderOverheadToken,
        )),
        onTokenizerError,
    )
}