import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as d_out from "../interface/generated/pareto/schemas/json/data_types/target"


export namespace v {

    export const string = (
        value: string
    ): d_out.Value => ['string', value]

    export const null_ = (
    ): d_out.Value => ['null', null]

    export const object = (
        members: _p.Raw_Or_Normal_Dictionary<d_out.Value.SG._object.SG.dictionary.D>
    ): d_out.Value => ['object', ['dictionary', _p.dictionary.literal(members)]]

    export const array = (
        elements: _p.Raw_Or_Normal_List<d_out.Value.SG.array.L>
    ): d_out.Value => ['array', _p.list.literal(elements)]
}