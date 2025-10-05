import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as p_log_error } from "exupery-resources/dist/procedures/log_error"

export const $$: _eb.Unguaranteed_Main_Initializer = () => _easync.up.action(
    _easync.upi.u(
        () => {
            return _easync.command.unguaranteed['raise exception'](null)
        },
        () => ({
            'exit code': 1
        }),
        _easync.eh(
            p_log_error,
            ($) => ({
                'lines': _ea.array_literal(["No tests yet"])
            })
        ),
    ),
    _easync.uq.fixed(null),
)