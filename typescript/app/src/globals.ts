interface Array<T> {
    [n: number]: T
    length: number
    // Minimal marker to distinguish arrays from single values for type checking
    readonly __isArray: true
}
interface Boolean { }
interface CallableFunction { }
interface Function {
    (...args: unknown[]): unknown
}
interface IArguments { }
interface NewableFunction { }
interface Number { }
interface Object { }
interface RegExp { }
interface String { }
interface Promise<T> { }
