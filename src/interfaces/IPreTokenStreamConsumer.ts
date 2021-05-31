
import * as p from "pareto"
import { Location, Range } from "../location"

export type WrappedStringType =
    | ["apostrophed", {
        //
    }]
    | ["quoted", {
        //
    }]
    | ["multiline", {
        previousLines: string[]
    }]

export enum PreTokenDataType {
    BlockCommentBegin,
    BlockCommentEnd,
    LineCommentBegin,
    LineCommentEnd,
    NewLine,
    Punctuation,
    WrappedStringBegin,
    WrappedStringEnd,
    Snippet,
    NonWrappedStringBegin,
    NonWrappedStringEnd,
    WhiteSpaceBegin,
    WhiteSpaceEnd,
}

/**
 * A PreToken is a low level token
 */
 export type PreToken = {
    type:
    | [PreTokenDataType.BlockCommentBegin, {
        range: Range
    }]
    | [PreTokenDataType.BlockCommentEnd, {
        range: Range //| null
    }]
    | [PreTokenDataType.LineCommentBegin, {
        range: Range
    }]
    | [PreTokenDataType.LineCommentEnd, {
        location: Location //| null
    }]
    | [PreTokenDataType.NewLine, {
        range: Range //| null
    }]
    | [PreTokenDataType.Punctuation, {
        char: number
        range: Range
    }]
    | [PreTokenDataType.WrappedStringBegin, {
        range: Range
        type: WrappedStringType
    }]
    | [PreTokenDataType.WrappedStringEnd, {
        range: Range
        wrapper: string | null
    }]
    | [PreTokenDataType.Snippet, {
        chunk: string
        begin: number
        end: number
    }]
    | [PreTokenDataType.NonWrappedStringBegin, {
        location: Location
    }]
    | [PreTokenDataType.NonWrappedStringEnd, {
        location: Location //| null
    }]
    | [PreTokenDataType.WhiteSpaceBegin, {
        location: Location
    }]
    | [PreTokenDataType.WhiteSpaceEnd, {
        location: Location //| null
    }]
}

export type IPreTokenStreamConsumer<ReturnType, ErrorType> = p.IUnsafeStreamConsumer<PreToken, Location, ReturnType, ErrorType>