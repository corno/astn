import * as _p from 'pareto-core-serializer'
import * as _pi from 'pareto-core-interface'

import { $$ as s_escaped_character } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/escaped_character"

export type Parameters = {

    'add delimiters': boolean //delimiters should sometimes not be written, for example when the content of an apostrophed string is to be replaced
}

export type Signature = _pi.Text_Serializer_With_Parameters<Parameters>

export const $$: Signature = ($, $p) => ($p['add delimiters'] ? "'" : "")
    + s_escaped_character(
        $,
        {
            'character code': 39, // '
            'escape character code': 92, // \
        }
    )
    + ($p['add delimiters'] ? "'" : "")