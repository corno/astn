import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

import { Iterator } from '../../../../../core/iterator'

//language independent parser functionality

export type Iterator_Location = {
    'absolute': number
    'relative': {
        'line': number
        'column': number
    }
}

export type Token_Iterator_State = {
    'location': Iterator_Location
    /**
     * if no non-whitespace character has been found yet on the current line,
     * this will return the current column,
     * otherwise it will return the offset of that first non-whitespace character
     * (which is the indentation of the line)
     */
    'line indentation': number
}

export type Characters_Iterator = Iterator<number, Token_Iterator_State>

const WhitespaceChars = {
    tab: 0x09,                  // \t
    line_feed: 0x0A,            // \n
    carriage_return: 0x0D,      // \r
    space: 0x20,                //
}

export const is_control_character = ($: number): boolean => {
    return ($ < 0x20 && $ !== WhitespaceChars.tab && $ !== WhitespaceChars.line_feed && $ !== WhitespaceChars.carriage_return)
}

/**
 * Creates a string iterator that allows iterating over characters in a string,
 * while keeping track of line numbers, columns, and line indentation.
 */

export const create_iterator = (
    $: string,
    $p: {
        'tab size': number
    }
): Characters_Iterator => {
    const characters = _ea.text_to_character_list($)

    type Relative_Position_Information = {
        'line': number
        'column': number
        'line indentation': number | null
    }

    let found_carriage_return_before = false
    let position = 0
    let relative_position: Relative_Position_Information = {
        'line': 0,
        'column': 0,
        'line indentation': null
    }

    return {
        'consume': () => {
            const c = characters.__get_element_at(position)
            const start = relative_position
            relative_position = c.transform(
                ($) => {
                    return $ === WhitespaceChars.line_feed
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
                },
                () => relative_position //this is weird, we were already at the end of the list
            )

            found_carriage_return_before = c.transform(
                ($) => $ === WhitespaceChars.carriage_return,
                () => false
            )
            position += 1
        },
        'get current': () => {
            return characters.__get_element_at(position).transform(
                ($) => _ea.set($),
                () => _ea.not_set()
            )
        },
        'look ahead': (offset: number) => {
            return characters.__get_element_at(position + offset).transform(
                ($) => _ea.set($),
                () => _ea.not_set()
            )
        },
        'get state': () => {
            return {
                'location': {
                    'absolute': position,
                    'relative': {
                        'line': relative_position.line,
                        'column': relative_position['column'],
                    }
                },
                'line indentation': relative_position['line indentation'] !== null
                    ? relative_position['line indentation']
                    : relative_position['column']
            }
        }
    }
}