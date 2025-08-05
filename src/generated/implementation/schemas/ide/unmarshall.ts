import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/ide/unconstrained"
import * as _i_r_token from "../token/unmarshall"
import * as _i_signatures from "../../../interface/schemas/ide/unmarshall"


export const Key_Value_Pairs_To_Be_Sorted: _i_signatures._T_Key_Value_Pairs_To_Be_Sorted = ($) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_text(
            $,
            null
        ),
    }
)
export const Relative_Range: _i_signatures._T_Relative_Range = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'end': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "end",
                }
            ), ($) => _i_r_token.Relative_Location(
                $,
                null
            )),
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_r_token.Relative_Location(
                $,
                null
            )),
        }),
    }
)
export const Text_Edits: _i_signatures._T_Text_Edits = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'delete': ($): _i_out._T_Text_Edits.L => _i_generic.wrap_unconstrained_state_group(
                        ['delete', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'range': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "range",
                                        }
                                    ), ($) => Relative_Range(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        null
                    ),
                    'insert': ($): _i_out._T_Text_Edits.L => _i_generic.wrap_unconstrained_state_group(
                        ['insert', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'location': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "location",
                                        }
                                    ), ($) => _i_r_token.Relative_Location(
                                        $,
                                        null
                                    )),
                                    'text': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "text",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        null
                    ),
                    'replace': ($): _i_out._T_Text_Edits.L => _i_generic.wrap_unconstrained_state_group(
                        ['replace', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'range': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "range",
                                        }
                                    ), ($) => Relative_Range(
                                        $,
                                        null
                                    )),
                                    'text': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "text",
                                        }
                                    ), ($) => _i_generic.process_text(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
