import * as _pt from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'


import * as d_authoring_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_authoring_parse_tree from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../../../interface/generated/pareto/schemas/token/data_types/target"

import * as ds_annotated_characters from "../annotated_characters/deserializers"
import * as p_authoring_parse_tree from "./productions/token"

import * as tokenize from "../token/productions/annotated_character"

export namespace signatures {

    export type Document = _pi.Deserializer_With_Parameters<d_authoring_parse_tree.Document, d_authoring_parse_result.Parse_Error, { 'tab size': number }>

}

export const Document: signatures.Document = ($, abort, $p,) => _pt.iterate( //fixme: make this iterate_fully
    ds_annotated_characters.Annotated_Characters($, {
        'tab size': $p['tab size']
    }),
    (iter) => {
        _pdev.log_debug_message("Tokenizing...", () => { }) 
        const result =  _pt.iterate(//fixme: make this iterate_fully
            tokenize.Tokenizer_Result(
                iter,
                abort
            ).tokens,
            (iter) => p_authoring_parse_tree.Document(
                iter,
                abort,
            )
        )
        _pdev.log_debug_message("Tokenization complete.", () => { })
        return result
    }
)