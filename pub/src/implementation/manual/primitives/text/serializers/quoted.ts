import * as _pt from 'pareto-core-transformer'

import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/escaped_character"

export const $$ = ($: {
    'value': string
    'add delimiters': boolean
}): string => ($['add delimiters'] ? '"' : '')
    + s_escaped_character(
        $.value,
        {
            'character code': 34, // "
            'escape character code': 92, // \
        }
    )
    + ($['add delimiters'] ? '"' : '')