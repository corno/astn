
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/ide/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/ide/data"
export const Relative_Location: t_signatures.Relative_Location = ($) => ({
    'line': _p_cc(
        $['line'], 
        ($) => $
    ),
    'column': _p_cc(
        $['column'], 
        ($) => $
    ),
})
export const Relative_Range: t_signatures.Relative_Range = ($) => ({
    'start': _p_cc(
        $['start'], 
        ($) => Relative_Location(
            $
        )
    ),
    'end': _p_cc(
        $['end'], 
        ($) => Relative_Location(
            $
        )
    ),
})
export const Text_Edits: t_signatures.Text_Edits = ($) => $.__l_map(
    ($) => _p.decide.state(
        $, 
        ($): t_out.Text_Edits.L => {
            switch ($[0]) {
                case 'insert':
                    return _p.ss(
                        $, 
                        ($) => ['insert', ({
                            'location': _p_cc(
                                $['location'], 
                                ($) => Relative_Location(
                                    $
                                )
                            ),
                            'text': _p_cc(
                                $['text'], 
                                ($) => $
                            ),
                        })]
                    )
                case 'replace':
                    return _p.ss(
                        $, 
                        ($) => ['replace', ({
                            'range': _p_cc(
                                $['range'], 
                                ($) => Relative_Range(
                                    $
                                )
                            ),
                            'text': _p_cc(
                                $['text'], 
                                ($) => $
                            ),
                        })]
                    )
                case 'delete':
                    return _p.ss(
                        $, 
                        ($) => ['delete', ({
                            'range': _p_cc(
                                $['range'], 
                                ($) => Relative_Range(
                                    $
                                )
                            ),
                        })]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)
export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => $.__d_map(
    ($,id) => $
)
