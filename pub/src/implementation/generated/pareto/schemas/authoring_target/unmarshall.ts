import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/authoring_target/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_target/unmarshall"


export const Document: _i_signatures._T_Document = ($, $p) => Value(
    $,
    {
        'value deserializers': $p['value deserializers'],
    }
)
export const Value: _i_signatures._T_Value = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary.literal({
                        'concise group': ($): _i_out._T_Value._type.SG => ['concise group', _i_generic.process_unconstrained_list(
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
                        'dictionary': ($): _i_out._T_Value._type.SG => ['dictionary', _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'key': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "key",
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
                                ),
                            }
                        )],
                        'list': ($): _i_out._T_Value._type.SG => ['list', _i_generic.process_unconstrained_list(
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
                        'nothing': ($): _i_out._T_Value._type.SG => ['nothing', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'optional': ($): _i_out._T_Value._type.SG => ['optional', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary.literal({
                                    'not set': ($): _i_out._T_Value._type.SG.optional.SG => ['not set', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'set': ($): _i_out._T_Value._type.SG.optional.SG => ['set', Value(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )],
                                }),
                            }
                        )],
                        'state': ($): _i_out._T_Value._type.SG => ['state', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary.literal({
                                    'missing data': ($): _i_out._T_Value._type.SG.state.SG => ['missing data', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'set': ($): _i_out._T_Value._type.SG.state.SG => ['set', _i_generic.process_group(
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
                                }),
                            }
                        )],
                        'text': ($): _i_out._T_Value._type.SG => ['text', _i_generic.process_group(
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
                                            'states': _pa.dictionary.literal({
                                                'backtick': ($): _i_out._T_Value._type.SG.text.delimiter.SG => ['backtick', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'none': ($): _i_out._T_Value._type.SG.text.delimiter.SG => ['none', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'quote': ($): _i_out._T_Value._type.SG.text.delimiter.SG => ['quote', _i_generic.process_nothing(
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
                        'verbose group': ($): _i_out._T_Value._type.SG => ['verbose group', _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'key': _pa.cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "key",
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
                                ),
                            }
                        )],
                    }),
                }
            )),
        }),
    }
)
