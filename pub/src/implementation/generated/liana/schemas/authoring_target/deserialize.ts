
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/authoring_target/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

export const Value: t_signatures.Value = ($, abort, $p) => v_unmarshall.Value(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        }
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)

export const Document: t_signatures.Document = ($, abort, $p) => v_unmarshall.Document(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['tbd', null]
        ),
        {
            'document resource identifier': $p['document resource identifier'],
            'tab size': $p['tab size'],
        }
    )['content'],
    ($) => abort(
        ['tbd', null]
    )
)
