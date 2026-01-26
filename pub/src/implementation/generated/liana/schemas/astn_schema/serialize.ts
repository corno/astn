
import * as _p from "pareto-core/dist/serializer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/serialize"

import * as v_serialize from "astn-core/dist/implementation/manual/schemas/sealed_target/serializers"

import * as v_marshall from "./marshall"
export const Schemas: t_signatures.Schemas = ($,) => v_serialize.Document(v_marshall.Schemas($))
export const Text_Type: t_signatures.Text_Type = ($,) => v_serialize.Document(v_marshall.Text_Type($))
export const Globals: t_signatures.Globals = ($,) => v_serialize.Document(v_marshall.Globals($))
export const Type: t_signatures.Type = ($,) => v_serialize.Document(v_marshall.Type($))
export const Types: t_signatures.Types = ($,) => v_serialize.Document(v_marshall.Types($))
export const Schema: t_signatures.Schema = ($,) => v_serialize.Document(v_marshall.Schema($))
export const Schema_Tree: t_signatures.Schema_Tree = ($,) => v_serialize.Document(v_marshall.Schema_Tree($))
export const Imports: t_signatures.Imports = ($,) => v_serialize.Document(v_marshall.Imports($))
export const Dictionary: t_signatures.Dictionary = ($,) => v_serialize.Document(v_marshall.Dictionary($))
export const Group: t_signatures.Group = ($,) => v_serialize.Document(v_marshall.Group($))
export const Type_Node: t_signatures.Type_Node = ($,) => v_serialize.Document(v_marshall.Type_Node($))
