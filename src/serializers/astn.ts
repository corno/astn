// import * as pa from 'exupery-core-alg'

// import * as s_in from "../generated/interface/schemas/target/resolved"

// import * as t_astn_instance_to_fountain_pen from "../transformations/fountain_pen/astn"

// import * as s_fountain_pen from "../fountain_pen/block"

// type Style = ['concise', null] | ['verbose', null]

// export const Document = (
//     $: s_in.Document,
//     $p: {
//         'style': Style //this should not be done here, but when the input of this function (the Document) is created
//         'indentation': string
//         'newline': string
//     }
// ): string => {
//     return s_fountain_pen.Block(
//         t_astn_instance_to_fountain_pen.Document(
//             $,
//             {
//                 'style': $p.style,
//             }
//         ),
//         {
//             'indentation': $p.indentation,
//             'newline': $p['newline'],
//         }
//     )
// }
