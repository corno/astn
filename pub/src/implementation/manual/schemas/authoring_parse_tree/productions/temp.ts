import * as _p from 'pareto-core-refiner'
import * as _pi from 'pareto-core-interface'

import * as new_pi from "./new_interface_signatures"

export const create_iterator = <Iterator_Element, Choice>(
    old: _pi.Iterator<Iterator_Element>,
    unexpected_element: (expected: _pi.List<Choice>, element: Iterator_Element, position: number) => never,
    unexpected_end_with_expected: (expected: _pi.List<Choice>) => never,
    unguarded_unexpected_end: () => never,
): new_pi.Iterator<Iterator_Element, Choice> => ({
    'consume': (
        callback,
    ) => callback(old.consume(
        ($) => $,
        () => unguarded_unexpected_end()
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
                next[0],
                old['get position']()
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