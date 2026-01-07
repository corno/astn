import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as new_pi from "./new_interface_signatures"

import * as d_target from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_parse_result from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_source from "../../../../../interface/generated/pareto/schemas/token/data_types/source"

//this file contains the parser functionality, each function represents a 'production'/'grammar rule' and return a type from the 'ast' schema

import * as sh from "../../../../../shorthands/parse_result"


export const create_iterator = <Iterator_Element, Choice>(
    old: _pi.Iterator<Iterator_Element>,
    unexpected_element: (expected: _pi.List<Choice>, element: Iterator_Element) => never,
    unexpected_end_with_expected: _pi.Abort<_pi.List<Choice>>,
    unguarded_unexpected_end: _pi.Abort<null>,
): new_pi.Iterator<Iterator_Element, Choice> => ({
    'consume': (
        callback,
    ) => callback(old.consume(
        ($) => $,
        () => unguarded_unexpected_end(null)
    )),
    'expect': (
        expected,
        callback,
    ) => {
        const next = old.look()
        if (next === null) {
            return unexpected_end_with_expected(_p.list.literal(expected))
        }
        return callback(
            next[0],
            () => unexpected_element(
                _p.list.literal(expected),
                next[0]
            )
        )

    },
    'list': (
        end_reached,
        handle,
    ) => {
        return _p.list.deprecated_build(($i) => {
            while (true) {
                const next_element = old.look()
                if (next_element === null) {
                    return
                } else if (end_reached(next_element[0])) {
                    return
                } else {
                    $i['add element'](handle())
                }
            }
        })
    },
})