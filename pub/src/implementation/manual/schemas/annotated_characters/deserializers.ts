import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

import * as d_annotated_characters from "../../../../interface/to_be_generated/annotated_characters"

export namespace signatures {

    export type Annotated_Characters = _pi.Deserializer_Without_Error_With_Parameters<d_annotated_characters.Annotated_Characters, { 'tab size': number }>

}



const loop = <Iterator_Element, State>(
    iterator: _pi.Iterator<Iterator_Element>,
    initial_state: State,
    callback: (
        element: Iterator_Element,
        state: State,
        $i: {
            'end reached': () => void
        },
    ) => State
): State => {
    let current_state = initial_state
    while (true) {
        let end_reached = false
        iterator.look().transform(
            ($) => {
                current_state = callback(
                    $,
                    current_state,
                    {
                        'end reached': () => {
                            end_reached = true
                        }
                    }
                )
            },
            () => { end_reached = true }
        )
        if (end_reached) {
            return current_state
        }
    }
}

/**
 * Creates a string iterator that allows iterating over characters in a string,
 * while keeping track of line numbers, columns, and line indentation.
 */
export const Annotated_Characters: signatures.Annotated_Characters = ($, $p) => _p.list.deprecated_build<d_annotated_characters.Annotated_Character>(
    ($i) => _p.iterate(_p.list.from_text($, ($) => $), (iterator) => {
        type State = {
            'line': number
            'column': number
            'line indentation': number | null
            'found carriage return before': boolean
        }

        loop<number, State>(
            iterator,
            {
                'line': 0,
                'column': 0,
                'line indentation': null,
                'found carriage return before': false,
            },
            ($, state) => {
                $i['add element']({
                    'code': $,
                    'location': {
                        'line': state.line,
                        'column': state['column'],
                    },
                    'line indentation': state['line indentation'] !== null
                        ? state['line indentation']
                        : state['column'],
                })

                return $ === 0x0A /* line feed */
                    ? {
                        'line': state.line + 1,
                        'column': 0,
                        'line indentation': null,
                        'found carriage return before': false,
                    }
                    : state['found carriage return before']
                        ? {
                            'line': state.line + 1,
                            'column': 0,
                            'line indentation': null,
                            'found carriage return before': false,
                        }
                        : {
                            'line': state.line,
                            'column': state['column'] + ($ === 0x09 /* tab */
                                ? $p['tab size']
                                : 1),
                            'line indentation': state['line indentation'] !== null
                                ? state['line indentation']
                                : $ === 0x20 /* space */ || $ === 0x09 /* tab */
                                    ? null
                                    : state['column'],
                            'found carriage return before': $ === 0x0D /* carriage return */,
                        }
            })
    })

)