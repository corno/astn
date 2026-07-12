import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/resolved.js"
import type * as s_out from "../../../interface/schemas/prose.js"

namespace declarations {
    export type Schema_Tree = p_.Transformer<
        s_in.Schema_Tree,
        s_out.Paragraph
    >
    export type Schemas = p_.Transformer<
        s_in.Schemas,
        s_out.Paragraph
    >
    export type Schema = p_.Transformer<
        s_in.Schema,
        s_out.Paragraph
    >
    export type Imports = p_.Transformer<
        s_in.Imports,
        s_out.Paragraph
    >
    export type Globals = p_.Transformer<
        s_in.Globals,
        s_out.Paragraph
    >
    export type Modules = p_.Transformer<
        s_in.Modules,
        s_out.Paragraph
    >
    export type Value = p_.Transformer<
        s_in.Value,
        s_out.Paragraph
    >
    export type Text_Type = p_.Transformer<
        s_in.Text_Type,
        s_out.Paragraph
    >
}

import * as v_serialize from "astn-core/implementation/transformers/sealed_target/prose"

import * as v_marshall from "./astn_sealed_target.js"

export const Schema_Tree: declarations.Schema_Tree = ($) => v_serialize.Document(
    v_marshall.Schema_Tree(
        $,
    ),
)

export const Schemas: declarations.Schemas = ($) => v_serialize.Document(
    v_marshall.Schemas(
        $,
    ),
)

export const Schema: declarations.Schema = ($) => v_serialize.Document(
    v_marshall.Schema(
        $,
    ),
)

export const Imports: declarations.Imports = ($) => v_serialize.Document(
    v_marshall.Imports(
        $,
    ),
)

export const Globals: declarations.Globals = ($) => v_serialize.Document(
    v_marshall.Globals(
        $,
    ),
)

export const Modules: declarations.Modules = ($) => v_serialize.Document(
    v_marshall.Modules(
        $,
    ),
)

export const Value: declarations.Value = ($) => v_serialize.Document(
    v_marshall.Value(
        $,
    ),
)

export const Text_Type: declarations.Text_Type = ($) => v_serialize.Document(
    v_marshall.Text_Type(
        $,
    ),
)
