import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/ide/data_types/target"
import * as _i_r_token from "../token/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/ide/unmarshall"


export const Key_Value_Pairs_To_Be_Sorted: _i_signatures._T_Key_Value_Pairs_To_Be_Sorted = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_text(
            $,
            null
        ),
    }
)
export const Relative_Range: _i_signatures._T_Relative_Range = ($, $p) => _i_generic.process_group(
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
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'start': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "start",
                }
            ), ($) => _i_r_token.Relative_Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Text_Edits: _i_signatures._T_Text_Edits = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_unconstrained_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'delete': ($): _i_out._T_Text_Edits.L.SG => ['delete', _i_generic.process_group(
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
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                            }),
                        }
                    )],
                    'insert': ($): _i_out._T_Text_Edits.L.SG => ['insert', _i_generic.process_group(
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
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
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
                    'replace': ($): _i_out._T_Text_Edits.L.SG => ['replace', _i_generic.process_group(
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
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
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
                }),
            }
        ),
    }
)
