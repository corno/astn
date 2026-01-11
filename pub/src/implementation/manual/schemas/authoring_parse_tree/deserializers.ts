import * as _p from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'
import * as _pdev from 'pareto-core-dev'
import * as _pi_new from './productions/temp'
import * as _pds_new from "../authoring_parse_tree/productions/temp"




import * as d_authoring_parse_result from "../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_authoring_parse_tree from "../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "../../../../interface/generated/pareto/schemas/token/data_types/target"


//dependencies
import * as ds_annotated_characters from "../annotated_characters/deserializers"
import * as p_authoring_parse_tree from "./productions/token"
import * as tokenize from "../token/productions/annotated_character"

export namespace signatures {

    export type Document = _pi.Deserializer_With_Parameters<d_authoring_parse_tree.Document, d_authoring_parse_result.Error, { 'tab size': number }>

}

export const Document: signatures.Document = ($, abort, $p,) => _p.iterate( //fixme: make this iterate_fully
    ds_annotated_characters.Annotated_Characters($, {
        'tab size': $p['tab size']
    }),
    (iter) => {
        const result = _p.iterate(//fixme: make this iterate_fully
            tokenize.Tokenizer_Result(
                {
                    'old': iter,
                    'new': _pds_new.create_iterator(
                        iter,
                        () => _p.unreachable_code_path(),
                        () => _p.unreachable_code_path(),
                        () => _p.unreachable_code_path(),
                    )
                },
                abort
            ).tokens,
            (iter) => _pdev.log_wrapping_debug_messages("parse", () => p_authoring_parse_tree.Document(
                _pi_new.create_iterator(
                    iter,
                    (expected, element) => abort({
                        'type': ['parser', {
                            'expected': expected,
                            'cause': ['unexpected token', {
                                'found': element.type,
                            }],
                        }],
                        'range': _p.optional.set({
                            'start': element.start,
                            'end': element.end,
                        }),
                    }),
                    (expected) => abort({
                        'type': ['parser', {
                            'expected': expected,
                            'cause': ['missing token', null],
                        }],
                        'range': _p.optional.not_set(),
                    }),
                    () => _p.unreachable_code_path(),
                ))
            ))
        return result
    }
)