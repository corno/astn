import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import * as d_annotated_characters from "../../../interface/to_be_generated/annotated_characters"

export namespace signatures {
    export type Annotated_Characters = (
        $: string,
        $p: {
            'tab size': number
        }
    ) => d_annotated_characters.Annotated_Characters
}

/**
 * Creates a string iterator that allows iterating over characters in a string,
 * while keeping track of line numbers, columns, and line indentation.
 */
export const Annotated_Characters: signatures.Annotated_Characters = ($, $p) => {

    type Iterator_Location = {
        'absolute': number
        'relative': {
            'line': number
            'column': number
        }
    }

    type Token_Iterator_State = {
        'location': Iterator_Location
        /**
         * if no non-whitespace character has been found yet on the current line,
         * this will return the current column,
         * otherwise it will return the offset of that first non-whitespace character
         * (which is the indentation of the line)
         */
        'line indentation': number
    }

    const WhitespaceChars = {
        tab: 0x09,                  // \t
        line_feed: 0x0A,            // \n
        carriage_return: 0x0D,      // \r
        space: 0x20,                //
    }
    const characters = _ea.text_to_character_list($)

    type Relative_Position_Information = {
        'line': number
        'column': number
        'line indentation': number | null
    }

    let position = -1
    let relative_position: Relative_Position_Information = {
        'line': 0,
        'column': 0,
        'line indentation': null
    }
    let found_carriage_return_before = false


    return _ea.build_list<d_annotated_characters.Annotated_Character>(($i) => {
        while (true) {
            position += 1
            const character = characters.__get_element_at(position)

            //handle character
            character.map(($) => {
                // Add character with CURRENT position before updating
                $i['add element']({
                    'code': $,
                    'location': {
                        'line': relative_position.line,
                        'column': relative_position['column'],
                    },
                    'line indentation': relative_position['line indentation'] !== null
                        ? relative_position['line indentation']
                        : relative_position['column'],
                })

                // Now update position for NEXT character
                relative_position = $ === WhitespaceChars.line_feed
                    ? {
                        'line': relative_position.line + 1,
                        'column': 0,
                        'line indentation': null,
                    }
                    : found_carriage_return_before
                        ? {
                            'line': relative_position.line + 1,
                            'column': 0,
                            'line indentation': null,
                        }
                        : {
                            'line': relative_position.line,
                            'column': relative_position['column'] + ($ === WhitespaceChars.tab
                                ? $p['tab size']
                                : 1),
                            'line indentation': relative_position['line indentation'] !== null
                                ? relative_position['line indentation']
                                : $ === WhitespaceChars.space || $ === WhitespaceChars.tab
                                    ? null
                                    : relative_position['column'],
                        }

                found_carriage_return_before = $ === WhitespaceChars.carriage_return
            })

            const end_reached = character.transform(
                ($) => false,
                () => true
            )
            if (end_reached) {
                break
            }
        }
    })
}