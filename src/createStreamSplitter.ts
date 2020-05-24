import * as p from "pareto"
import { IStreamConsumer, OnDataReturnValue } from "./IStreamConsumer"

export function createStreamSplitter<DataType, EndDataType>(
    subStreamConsumers: IStreamConsumer<DataType, EndDataType>[]
): IStreamConsumer<DataType, EndDataType> {
    return {
        onData: (data: DataType): OnDataReturnValue => {
            let abortRequested = false
            const promises: p.ISafePromise<boolean>[] = []
            subStreamConsumers.forEach(s => {
                const returnValue = s.onData(data)
                if (typeof returnValue === "boolean") {
                    if (returnValue === true) {
                        abortRequested = true
                    }
                } else {
                    promises.push(returnValue)
                }
            })
            if (promises.length === 0) {
                return abortRequested
            }
            return p.mergeArrayOfSafePromises(promises).mapResult(abortResquests => {
                return p.result(abortRequested || abortResquests.includes(true)) //if 1 promise requested an abort
            })
        },
        onEnd: (aborted: boolean, endData: EndDataType): void => {
            subStreamConsumers.forEach(s => {
                s.onEnd(aborted, endData)
            })
        },
    }
}