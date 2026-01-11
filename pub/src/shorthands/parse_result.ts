import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_target from "../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_target_token from "../interface/generated/pareto/schemas/token/data_types/source"


export const parse_error = (
    type: d_target.Error._type,
    range: d_target_token.Range
): d_target.Error => ({
    'type': type,
    'range': _p.optional.set({
        'start': range.start,
        'end': range.end,
    })
})

// export const unexpected_token = (
//     found: d_target_token.Annotated_Token,
//     expected: _pi.List<d_target.Error._type.SG.parser.expected.L>,
// ): d_target.Error => parse_error(
//     ['parser', {
//         'expected': expected,
//         'cause': ['unexpected token', {
//             'found': found.type,
//         }]
//     }],
//     {
//         'start': found.start,
//         'end': found.end
//     }
// )

export const lexer_error = (
    type: d_target.Error._type.SG.lexer,
    range: d_target_token.Range
): d_target.Error => ({
    'type': ['lexer', type],
    'range': _p.optional.set({
        'start': range.start,
        'end': range.end,
    })
})