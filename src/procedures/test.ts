import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as a_log_error } from "exupery-resources/dist/actions/log_error"

export const $$: _eb.Unguaranteed_Main = _easync.u.p.action(
    _easync.u.a.u(
        () => {
            return _easync.command.unguaranteed['raise exception'](null)
        },
        () => ({
            'exit code': 1
        }),
        _easync.eh(
            a_log_error,
            ($) => ({
                'lines': _ea.array_literal(["No tests yet"])
            })
        ),
    ),
    _easync.u.q.fixed(null),
)