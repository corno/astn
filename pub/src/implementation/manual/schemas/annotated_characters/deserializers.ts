import * as _pt from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

import * as d_annotated_characters from "../../../../interface/to_be_generated/annotated_characters"

export namespace signatures {

    export type Annotated_Characters = _pi.Deserializer_Without_Error_With_Parameters<d_annotated_characters.Annotated_Characters, { 'tab size': number }>
    
}

/**
 * Creates a string iterator that allows iterating over characters in a string,
 * while keeping track of line numbers, columns, and line indentation.
 */
export const Annotated_Characters: signatures.Annotated_Characters = ($, $p) => {

    const WhitespaceChars = {
        tab: 0x09,                  // \t
        line_feed: 0x0A,            // \n
        carriage_return: 0x0D,      // \r
        space: 0x20,                //
    }
    const characters = _pt.text_to_character_list($)

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


    return _pt.build_list<d_annotated_characters.Annotated_Character>(($i) => {
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