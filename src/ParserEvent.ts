import { Range } from "./location"

export type SimpleValueData = {
    value: string
    quote: string | null
    terminated: boolean | null
}

export type WhiteSpaceData = {
    value: string
}

export type CommentData = {
    comment: string
    innerRange: Range //without the open and close tokens:
    indentation: null | string
}

export enum ParserEventType {
    BlockComment,
    CloseArray,
    CloseObject,
    Colon,
    Comma,
    LineComment,
    NewLine,
    OpenArray,
    OpenObject,
    SimpleValue,
    TaggedUnion,
    WhiteSpace
}

export type OpenData = {
    openCharacter: string
}

export type CloseData = {
    closeCharacter: string
}

export type PunctionationData = {
    char: number
}

export type ParserEvent = {
    range: Range
    type:
    | [ParserEventType.BlockComment, CommentData]
    | [ParserEventType.CloseArray, CloseData]
    | [ParserEventType.CloseObject, CloseData]
    | [ParserEventType.Colon, {
        //
    }]
    | [ParserEventType.Comma, {
        //
    }]
    | [ParserEventType.LineComment, CommentData]
    | [ParserEventType.NewLine, {
        //
    }]
    | [ParserEventType.OpenArray, OpenData]
    | [ParserEventType.OpenObject, OpenData]
    | [ParserEventType.SimpleValue, SimpleValueData]
    | [ParserEventType.TaggedUnion, {
        //
    }]
    | [ParserEventType.WhiteSpace, WhiteSpaceData]
}


export enum ParserPreEventType {
    BlockComment,
    LineComment,
    NewLine,
    Punctuation,
    SimpleValue,
    WhiteSpace
}

export type ParserPreEvent = {
    range: Range
    type:
    | [ParserPreEventType.BlockComment, CommentData]
    | [ParserPreEventType.LineComment, CommentData]
    | [ParserPreEventType.NewLine, {
        //
    }]
    | [ParserPreEventType.Punctuation, PunctionationData]
    | [ParserPreEventType.SimpleValue, SimpleValueData]
    | [ParserPreEventType.WhiteSpace, WhiteSpaceData]
}