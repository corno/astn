/* eslint
    complexity:"off",
    no-console:"off",
    max-classes-per-file: "off",
*/
import * as p from "pareto"
import { Range } from "./location"
import { ITokenStreamConsumer } from "./ITokenStreamConsumer"
import { Chunk, PreTokenizer, TokenizerOptions, LocationState, PreTokenizerError } from "./PreTokenizer"

const DEBUG = false

class StreamPreTokenizer<ReturnType, ErrorType> implements p.IUnsafeStreamConsumer<string, null, ReturnType, ErrorType> {

    private readonly tokenizerState: PreTokenizer
    private readonly locationState: LocationState
    private readonly tokenStreamConsumer: ITokenStreamConsumer<ReturnType, ErrorType>
    private aborted = false

    constructor(tokenStreamConsumer: ITokenStreamConsumer<ReturnType, ErrorType>, onerror: (error: PreTokenizerError, range: Range) => void, opt?: TokenizerOptions) {
        this.tokenStreamConsumer = tokenStreamConsumer
        this.locationState = new LocationState(
            opt === undefined
                ? 4
                : opt.spaces_per_tab === undefined
                    ? 4
                    : opt.spaces_per_tab
        )
        this.tokenizerState = new PreTokenizer(this.locationState, onerror)
    }
    private loopUntilPromiseOrEnd(currentChunk: Chunk): p.IValue<boolean> {
        if (this.aborted) {
            //ignore this data
            return p.value(true)
        }
        while (true) {
            const la = currentChunk.lookahead()
            if (la === null) {
                return p.value(false)
            }

            const tokenData = this.tokenizerState.createNextToken(currentChunk)

            if (tokenData !== null) {
                const onDataResult = this.tokenStreamConsumer.onData(tokenData)
                return onDataResult.mapResult(abortRequested => {

                    if (abortRequested) {
                        this.aborted = true
                        return p.value(true)
                    } else {
                        return this.loopUntilPromiseOrEnd(currentChunk)
                    }
                })
            }
        }
    }
    public onData(chunk: string): p.IValue<boolean> {
        if (DEBUG) console.log(`write -> [${JSON.stringify(chunk)}]`)
        const currentChunk = new Chunk(chunk)
        return this.loopUntilPromiseOrEnd(currentChunk)
    }

    public onEnd(aborted: boolean): p.IUnsafeValue<ReturnType, ErrorType> {
        const tokenData = this.tokenizerState.handleDanglingToken()
        if (tokenData !== null) {
            const onDataReturnValue = this.tokenStreamConsumer.onData(tokenData)
            return onDataReturnValue.try(_abort => {
                //nothing to abort anymore
                return this.tokenStreamConsumer.onEnd(aborted, this.locationState.getCurrentLocation())

            })
        } else {
            return this.tokenStreamConsumer.onEnd(aborted, this.locationState.getCurrentLocation())
        }
    }
}

/**
 *
 * @param tokenStreamConsumer
 * @param onerror
 * @param opt
 */
export function createStreamPreTokenizer<ReturnType, ErrorType>(
    tokenStreamConsumer: ITokenStreamConsumer<ReturnType, ErrorType>,
    onerror: (error: PreTokenizerError, range: Range) => void,
    opt?: TokenizerOptions
): p.IUnsafeStreamConsumer<string, null, ReturnType, ErrorType> {
    return new StreamPreTokenizer(tokenStreamConsumer, onerror, opt)
}