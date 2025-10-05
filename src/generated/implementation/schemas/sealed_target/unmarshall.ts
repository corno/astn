import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/sealed_target/data_types/target"
import * as _i_signatures from "../../../interface/schemas/sealed_target/unmarshall"


export const Document: _i_signatures._T_Document = ($, $p) => Value(
    $,
    {
        'value deserializers': $p['value deserializers'],
    }
)
export const Value: _i_signatures._T_Value = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'dictionary': ($): _i_out._T_Value.SG => ['dictionary', _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => Value(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'list': ($): _i_out._T_Value.SG => ['list', _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Value(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'nothing': ($): _i_out._T_Value.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'optional': ($): _i_out._T_Value.SG => ['optional', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'not set': ($): _i_out._T_Value.SG.optional.SG => ['not set', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'set': ($): _i_out._T_Value.SG.optional.SG => ['set', Value(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            )],
            'state': ($): _i_out._T_Value.SG => ['state', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'state': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "state",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                        'value': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "value",
                            }
                        ), ($) => Value(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'text': ($): _i_out._T_Value.SG => ['text', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'delimiter': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "delimiter",
                            }
                        ), ($) => _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'backtick': ($): _i_out._T_Value.SG.text.delimiter.SG => ['backtick', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'none': ($): _i_out._T_Value.SG.text.delimiter.SG => ['none', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'quote': ($): _i_out._T_Value.SG.text.delimiter.SG => ['quote', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )),
                        'value': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "value",
                            }
                        ), ($) => _i_generic.process_text(
                            $,
                            null
                        )),
                    }),
                }
            )],
            'verbose group': ($): _i_out._T_Value.SG => ['verbose group', _i_generic.process_unconstrained_dictionary(
                $,
                {
                    'value': ($) => Value(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
        }),
    }
)
