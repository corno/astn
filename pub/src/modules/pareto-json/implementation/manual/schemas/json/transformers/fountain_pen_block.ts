import * as _p from 'pareto-core-transformer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/json/data_types/source"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"

import * as sh from "pareto-fountain-pen/dist/shorthands/block"

import { $$ as op_enrich_list_elements_with_position_information } from "pareto-fountain-pen/dist/implementation/temp/enrich_with_position_information"
import { $$ as s_quoted } from "../../../primitives/text/serializers/quoted"


const String = (
    $: string //FIX should have been a schema type
): d_out.Block_Part => sh.b.snippet(s_quoted($))

export const Value = ($: d_in.Value): d_out.Block_Part => _p.sg($, ($) => {
    switch ($[0]) {
        case 'object': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet("{"),
            sh.b.indent([
                _p.sg($, ($): d_out.Group_Part => {
                    switch ($[0]) {
                        case 'dictionary': return _p.ss($, ($) => sh.g.list(op_enrich_list_elements_with_position_information(_p.list.from_dictionary($, ($, key) => ({ 'key': key, 'value': $ }))).map(($) => sh.g.nested_block([
                            String($.value.key),
                            sh.b.snippet(": "),
                            Value($.value.value),
                            $['is last'] ? sh.b.nothing() : sh.b.snippet(","),
                        ]))))
                        case 'key value array': return _p.ss($, ($) => sh.g.list(op_enrich_list_elements_with_position_information($).map(($) => sh.g.nested_block([
                            String($.value.key),
                            sh.b.snippet(": "),
                            Value($.value.value),
                            $['is last'] ? sh.b.nothing() : sh.b.snippet(", "),
                        ]))))
                        default: return _p.au($[0])
                    }
                }),
            ]),
            sh.b.snippet("}"),
        ]))
        case 'array': return _p.ss($, ($) => sh.b.sub([
            sh.b.snippet("["),
            sh.b.list(op_enrich_list_elements_with_position_information($).map(($) => sh.b.sub([
                Value($.value),
                $['is last'] ? sh.b.nothing() : sh.b.snippet(", "),
            ]))),
            sh.b.snippet("]"),
        ]))
        case 'null': return _p.ss($, ($) => sh.b.snippet("null"))
        case 'boolean': return _p.ss($, ($) => sh.b.snippet($ ? "true" : "false"))
        case 'null': return _p.ss($, ($) => sh.b.snippet("null"))
        case 'number': return _p.ss($, ($) => _p.sg($, ($) => {
            switch ($[0]) {
                case 'integer': return _p.ss($, ($) => sh.b.snippet("FIXME INTEGER"))
                case 'float': return _p.ss($, ($) => sh.b.snippet("FIXME FLOAT"))
                default: return _p.au($[0])
            }
        }))
        case 'string': return _p.ss($, ($) => String($))
        default: return _p.au($[0])
    }
})

export const Document = ($: d_in.Document): d_out.Group => sh.group([sh.g.nested_block([
    Value($),
])])
