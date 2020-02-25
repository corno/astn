import { Location, Range} from "./location"

export interface Pauser {
    pause(): void
    continue(): void
}

export interface IParser {
    onSnippet(chunk: string, begin: number, end: number, pauser: Pauser): void
    onLineCommentBegin(range: Range, pauser: Pauser): void
    onLineCommentEnd(location: Location, pauser: Pauser): void

    onBlockCommentBegin(range: Range, indent: null | string, pauser: Pauser): void
    onBlockCommentEnd(range: Range, pauser: Pauser | null): void //pauser can be null for unterminated comments

    onUnquotedTokenBegin(location: Location, pauser: Pauser): void
    onUnquotedTokenEnd(location: Location): void

    onQuotedStringBegin(range: Range, quote: string, pauser: Pauser): void
    onQuotedStringEnd(range: Range, quote: string | null, pauser: Pauser | null): void //quote can be null for unterminated strings

    onPunctuation(char: number, range: Range, pauser: Pauser): void

    assertIsEnded(location: Location): void
}