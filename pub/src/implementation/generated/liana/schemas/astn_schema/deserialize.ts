
import * as _p from "pareto-core/dist/deserializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/deserialize"

import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

import * as v_unmarshall from "./unmarshall"

export const Schemas: t_signatures.Schemas = ($, abort, $p) => v_unmarshall.Schemas(
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

export const Text_Type: t_signatures.Text_Type = ($, abort, $p) => v_unmarshall.Text_Type(
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

export const Globals: t_signatures.Globals = ($, abort, $p) => v_unmarshall.Globals(
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

export const Type: t_signatures.Type = ($, abort, $p) => v_unmarshall.Type(
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

export const Types: t_signatures.Types = ($, abort, $p) => v_unmarshall.Types(
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

export const Schema: t_signatures.Schema = ($, abort, $p) => v_unmarshall.Schema(
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

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $p) => v_unmarshall.Schema_Tree(
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

export const Imports: t_signatures.Imports = ($, abort, $p) => v_unmarshall.Imports(
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

export const Dictionary: t_signatures.Dictionary = ($, abort, $p) => v_unmarshall.Dictionary(
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

export const Group: t_signatures.Group = ($, abort, $p) => v_unmarshall.Group(
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

export const Type_Node: t_signatures.Type_Node = ($, abort, $p) => v_unmarshall.Type_Node(
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
