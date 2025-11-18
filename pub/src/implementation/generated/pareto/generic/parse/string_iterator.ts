import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'

//language independent parser functionality

export type Location = {
    'absolute': number
    'relative': {
        'line': number
        'column': number
    }
}

export type String_Iterator = {

    'consume character': () => void
    'consume string': ($: string) => void
    /**
     * returns the current character, or null if the end of the string has been reached.
     * equivalent to `look ahead(0)`
     */
    'get current character': () => number | null
    'look ahead': ($: number) => number | null
    'create offset location info': (subtract: number) => Location
    'create location info': () => Location
    'create location info string': () => string
    /**
     * if no non-whitespace character has been found yet on the current line,
     * this will return the current column,
     * otherwise it will return the offset of that first non-whitespace character
     * (which is the indentation of the line)
     */
    'get line indentation': () => number
}

import { text_to_character_list as op_to_character_list } from 'exupery-core-alg/dist/text_to_character_list'

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

export const create_string_iterator = (
    $: string,
    $p: {
        'tab size': number
    }
): String_Iterator => {
    const source = $
    const characters = op_to_character_list($)
    const length = characters.__get_number_of_elements()

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

    const consume_character = () => {
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
    }

    return {
        'consume string': ($: string) => {
            op_to_character_list($).__for_each(() => {
                consume_character()
            })
        },
        'consume character': consume_character,
        'get current character': () => {
            if (position === length) {
                return null
            }
            return characters.__get_element_at(position).transform(
                ($) => $,
                () => null
            )
        },
        'look ahead': ($: number) => {
            const next_position = position + $;
            if (next_position >= length) {
                return null
            }
            return characters.__get_element_at(next_position).transform(
                ($) => $,
                () => null
            )
        },
        'create location info': () => {
            return {
                'absolute': position,
                'relative': {
                    'line': relative_position.line,
                    'column': relative_position['column'],
                }
            }
        },
        'create offset location info': (subtract) => {
            return {
                'absolute': position - subtract,
                'relative': {
                    'line': relative_position.line,
                    'column': relative_position['column'] - subtract,
                }
            }
        },
        'create location info string': () => `${relative_position.line}:${relative_position['column']}`,
        'get line indentation': () => {
            return relative_position['line indentation'] !== null
                ? relative_position['line indentation']
                : relative_position['column']
        },
    }
}

export type Token_Iterator<Expected, Token> = {
    'get required token': (expected: _et.List<Expected>) => Token,
    'consume token': () => void,
}
