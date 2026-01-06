import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/json/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/json/data_types/target"


export const Value: _i_signatures._T_Value = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary.literal({
            'array': ($): _i_out._T_Value.SG => ['array', _i_generic.process_unconstrained_list(
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
            'object': ($): _i_out._T_Value.SG => ['object', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary.literal({
                        'key value array': ($): _i_out._T_Value.SG._object.SG => ['key value array', _i_generic.process_unconstrained_list(
                            $,
                            {
                                'value': ($) => _i_generic.process_group(
                                    $,
                                    {
                                        'properties': ($) => ({
                                            'key': _pa.deprecated_cc(_i_generic.get_entry(
                                                $,
                                                {
                                                    'key': "key",
                                                }
                                            ), ($) => _i_generic.process_text(
                                                $,
                                                null
                                            )),
                                            'value': _pa.deprecated_cc(_i_generic.get_entry(
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
                        'dictionary': ($): _i_out._T_Value.SG._object.SG => ['dictionary', _i_generic.process_unconstrained_dictionary(
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
            )],
            'number': ($): _i_out._T_Value.SG => ['number', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _pa.dictionary.literal({
                        'integer': ($): _i_out._T_Value.SG._number.SG => ['integer', _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['default number'],
                            }
                        )],
                        'float': ($): _i_out._T_Value.SG._number.SG => ['float', _i_generic.process_number(
                            $,
                            {
                                'deserializer': $p['value deserializers']['default number'],
                            }
                        )],
                    }),
                }
            )],
            'string': ($): _i_out._T_Value.SG => ['string', _i_generic.process_text(
                $,
                null
            )],
            'boolean': ($): _i_out._T_Value.SG => ['boolean', _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )],
            'null': ($): _i_out._T_Value.SG => ['null', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Document: _i_signatures._T_Document = ($, $p) => Value(
    $,
    {
        'value deserializers': $p['value deserializers'],
    }
)
