    
    import * as _p from 'pareto-core/dist/expression'
    
    import _p_change_context from 'pareto-core/dist/_p_change_context'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/ide/data"
    
    export const Text_Edits: t_signatures.Text_Edits = ($) => _p.list.map(
        $,
        ($) => _p.decide.state(
            $,
            ($): t_out.Text_Edits.L => {
                switch ($[0]) {
                    case 'insert':
                        return _p.ss(
                            $,
                            ($) => ['insert', {
                                'location': _p_change_context(
                                    $['location'],
                                    ($) => Relative_Location(
                                        $,
                                    ),
                                ),
                                'text': _p_change_context(
                                    $['text'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'replace':
                        return _p.ss(
                            $,
                            ($) => ['replace', {
                                'range': _p_change_context(
                                    $['range'],
                                    ($) => Relative_Range(
                                        $,
                                    ),
                                ),
                                'text': _p_change_context(
                                    $['text'],
                                    ($) => $,
                                ),
                            }],
                        )
                    case 'delete':
                        return _p.ss(
                            $,
                            ($) => ['delete', {
                                'range': _p_change_context(
                                    $['range'],
                                    ($) => Relative_Range(
                                        $,
                                    ),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
    
    export const Relative_Range: t_signatures.Relative_Range = ($) => ({
        'start': _p_change_context(
            $['start'],
            ($) => Relative_Location(
                $,
            ),
        ),
        'end': _p_change_context(
            $['end'],
            ($) => Relative_Location(
                $,
            ),
        ),
    })
    
    export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($) => _p.dictionary.map(
        $,
        ($, id) => $,
    )
    
    export const Relative_Location: t_signatures.Relative_Location = ($) => ({
        'line': _p_change_context(
            $['line'],
            ($) => $,
        ),
        'column': _p_change_context(
            $['column'],
            ($) => $,
        ),
    })
