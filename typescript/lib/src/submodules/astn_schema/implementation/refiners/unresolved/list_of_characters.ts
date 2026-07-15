


import * as p_i from 'pareto-core/interface/__internal/Abort'

import * as i_generic from "../../../interface/schemas/unresolved_document_deserialization.js"

import * as i_in from "../../../interface/schemas/list_of_characters.js"

import * as i_out from "../../../interface/schemas/unresolved.js"

namespace declarations {

    export namespace Schema_Tree_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Schema_Tree

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Schema_Tree_ = (
        context: Schema_Tree_.I,
        abort: p_i.Abort<Schema_Tree_.E>,
        parameters: {
            readonly 'tab size': Schema_Tree_.P.tab_size
        },
    ) => Schema_Tree_.O

    export namespace Schemas_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Schemas

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Schemas_ = (
        context: Schemas_.I,
        abort: p_i.Abort<Schemas_.E>,
        parameters: {
            readonly 'tab size': Schemas_.P.tab_size
        },
    ) => Schemas_.O

    export namespace Schema_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Schema

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Schema_ = (
        context: Schema_.I,
        abort: p_i.Abort<Schema_.E>,
        parameters: {
            readonly 'tab size': Schema_.P.tab_size
        },
    ) => Schema_.O

    export namespace Imports_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Imports

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Imports_ = (
        context: Imports_.I,
        abort: p_i.Abort<Imports_.E>,
        parameters: {
            readonly 'tab size': Imports_.P.tab_size
        },
    ) => Imports_.O

    export namespace Globals_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Globals

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Globals_ = (
        context: Globals_.I,
        abort: p_i.Abort<Globals_.E>,
        parameters: {
            readonly 'tab size': Globals_.P.tab_size
        },
    ) => Globals_.O

    export namespace Modules_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Modules

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Modules_ = (
        context: Modules_.I,
        abort: p_i.Abort<Modules_.E>,
        parameters: {
            readonly 'tab size': Modules_.P.tab_size
        },
    ) => Modules_.O

    export namespace Value_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Value

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Value_ = (
        context: Value_.I,
        abort: p_i.Abort<Value_.E>,
        parameters: {
            readonly 'tab size': Value_.P.tab_size
        },
    ) => Value_.O

    export namespace Text_Type_ {

        export type I = i_in.List_Of_Characters

        export type O = i_out.Text_Type

        export type E = i_generic.Error

        export namespace P {

            export type tab_size = number

        }

    }

    export type Text_Type_ = (
        context: Text_Type_.I,
        abort: p_i.Abort<Text_Type_.E>,
        parameters: {
            readonly 'tab size': Text_Type_.P.tab_size
        },
    ) => Text_Type_.O

}

import * as v_deserialize from "astn-core/_implementation/refiners/parse_tree/list_of_characters"

import * as v_unmarshall from "./astn_parse_tree.js"

export const Schema_Tree: declarations.Schema_Tree_ = ($, abort, $p) => v_unmarshall.Schema_Tree(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Schemas: declarations.Schemas_ = ($, abort, $p) => v_unmarshall.Schemas(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Schema: declarations.Schema_ = ($, abort, $p) => v_unmarshall.Schema(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Imports: declarations.Imports_ = ($, abort, $p) => v_unmarshall.Imports(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Globals: declarations.Globals_ = ($, abort, $p) => v_unmarshall.Globals(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Modules: declarations.Modules_ = ($, abort, $p) => v_unmarshall.Modules(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Value: declarations.Value_ = ($, abort, $p) => v_unmarshall.Value(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)

export const Text_Type: declarations.Text_Type_ = ($, abort, $p) => v_unmarshall.Text_Type(
    v_deserialize.Document(
        $,
        ($) => abort(
            ['parse tree deserialization', $],
        ),
        {
            'tab size': $p['tab size'],
        },
    )['content'],
    ($) => abort(
        ['unmarshalling', $],
    ),
)
