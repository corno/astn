import * as _pt from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'


import * as d_authoring_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_authoring_parse_tree from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../../../interface/generated/pareto/schemas/token/data_types/target"

import * as ds_annotated_characters from "../annotated_characters/deserializers"
import * as p_authoring_parse_tree from "./productions/token"

import * as tokenize from "../token/productions/annotated_character"

export namespace signatures {
    export type Document = (
        $: string,
        $p: {
            'tab size': number
        },
        abort: ($: d_authoring_parse_result.Parse_Error) => never
    ) => d_authoring_parse_tree.Document
}

export const Document: signatures.Document = ($, $p, abort) => {
    const iter = _pt.create_iterator(ds_annotated_characters.Annotated_Characters($, {
        'tab size': $p['tab size']
    }))
    const tr = tokenize.Tokenizer_Result(
        iter,
        abort
    )
    return p_authoring_parse_tree.Document(
        _pt.create_iterator(tr.tokens),
        abort,
    )
}
