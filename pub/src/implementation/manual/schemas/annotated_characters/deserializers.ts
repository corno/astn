import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'

import * as d_annotated_characters from "../../../../interface/to_be_generated/annotated_characters"

export namespace signatures {

    export type Annotated_Characters = _pi.Deserializer_Without_Error_With_Parameters<d_annotated_characters.Annotated_Characters, { 'tab size': number }>

}



// const loop = <Iterator_Element, State>(
//     iterator: _pi.Iterator<Iterator_Element>,
//     initial_state: State,
//     callback: (
//         element: Iterator_Element,
//         state: State,
//         $i: {
//             'end reached': () => void
//         },
//     ) => State
// ): State => {
//     let current_state = initial_state
//     _pdev.log_debug_message("Starting loop...", () => { })
//     while (true) {
//         let end_reached = false
//         const next = iterator.look()
//         if (next === null) {
//             end_reached = true
//         } else {
//                 current_state = callback(
//                     next[0],
//                     current_state,
//                     {
//                         'end reached': () => {
//                             end_reached = true
//                         }
//                     }
//                 )
//         }
//         if (end_reached) {
//             break
//         }
//     }
//     _pdev.log_debug_message("Loop ended.", () => { })
//     return current_state

// }


export const map_with_state = <T, New_Type, State>(
    $: _pi.List<T>,
    initial_state: State,
    handle_value: (
        value: T,
        state: State
    ) => New_Type,
    update_state: (
        value: T,
        state: State
    ) => State
): _pi.List<New_Type> => {
    let current_state = initial_state
    return $.__l_map(($) => {
        const result = handle_value($, current_state)
        current_state = update_state($, current_state)
        return result
    })
}

type My_State = {
    'absolute': number
    'line': number
    'column': number
    'line indentation': number | null
    'found carriage return before': boolean
}

/**
 * Creates a string iterator that allows iterating over characters in a string,
 * while keeping track of line numbers, columns, and line indentation.
 */
export const Annotated_Characters: signatures.Annotated_Characters = ($, $p) => map_with_state<number, d_annotated_characters.Annotated_Character, My_State>(
    _p.list.from_text(
        $,
        ($) => $
    ),
    {
        'absolute': 0,
        'line': 0,
        'column': 0,
        'line indentation': null,
        'found carriage return before': false,
    },
    (value, state) => ({
        'code': value,
        'location': {
            'absolute': state.absolute,
            'relative': {
                'line': state.line,
                'column': state.column,
            }
        },
        'line indentation': state['line indentation'] !== null
            ? state['line indentation']
            : state.column,
    }),
    (value, state) => {
        return value === 0x0A /* line feed */
            ? {
                'absolute': state.absolute + 1,
                'line': state.line + 1,
                'column': 0,
                'line indentation': null,
                'found carriage return before': false,
            }
            : state['found carriage return before']
                ? {
                    'absolute': state.absolute + 1,
                    'line': state.line + 1,
                    'column': 0,
                    'line indentation': null,
                    'found carriage return before': false,
                }
                : {
                    'absolute': state.absolute + 1,
                    'line': state.line,
                    'column': state.column + (value === 0x09 /* tab */
                        ? $p['tab size']
                        : 1),
                    'line indentation': state['line indentation'] !== null
                        ? state['line indentation']
                        : value === 0x20 /* space */ || value === 0x09 /* tab */
                            ? null
                            : state.column,
                    'found carriage return before': value === 0x0D /* carriage return */,
                }
    }
)

// export const Annotated_Characters: signatures.Annotated_Characters = ($, $p) => _p.list.deprecated_build<d_annotated_characters.Annotated_Character>(
//     ($i) => _p.iterate(_p.list.from_text($, ($) => $), (iterator) => {
//         type State = {
//             'line': number
//             'column': number
//             'line indentation': number | null
//             'found carriage return before': boolean
//         }

//         loop<number, State>(
//             iterator,
//             {
//                 'line': 0,
//                 'column': 0,
//                 'line indentation': null,
//                 'found carriage return before': false,
//             },
//             ($, state) => {
//                 $i['add element']({
//                     'code': $,
//                     'location': {
//                         'line': state.line,
//                         'column': state['column'],
//                     },
//                     'line indentation': state['line indentation'] !== null
//                         ? state['line indentation']
//                         : state['column'],
//                 })
//                 iterator.discard(() => null)

//                 return $ === 0x0A /* line feed */
//                     ? {
//                         'line': state.line + 1,
//                         'column': 0,
//                         'line indentation': null,
//                         'found carriage return before': false,
//                     }
//                     : state['found carriage return before']
//                         ? {
//                             'line': state.line + 1,
//                             'column': 0,
//                             'line indentation': null,
//                             'found carriage return before': false,
//                         }
//                         : {
//                             'line': state.line,
//                             'column': state['column'] + ($ === 0x09 /* tab */
//                                 ? $p['tab size']
//                                 : 1),
//                             'line indentation': state['line indentation'] !== null
//                                 ? state['line indentation']
//                                 : $ === 0x20 /* space */ || $ === 0x09 /* tab */
//                                     ? null
//                                     : state['column'],
//                             'found carriage return before': $ === 0x0D /* carriage return */,
//                         }
//             })
//     })

// )