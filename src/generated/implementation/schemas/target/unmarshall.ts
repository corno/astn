import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/target/data_types/unconstrained"
import * as _i_signatures from "../../../interface/schemas/target/unmarshall"


export const Document: _i_signatures._T_Document = ($) => Value(
    $,
    null
)
export const Value: _i_signatures._T_Value = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'concise group': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['concise group', _i_generic.process_unconstrained_list(
                    $,
                    {
                        'value': ($) => Value(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'dictionary': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['dictionary', _i_generic.process_unconstrained_dictionary(
                    $,
                    {
                        'value': ($) => Value(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'list': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['list', _i_generic.process_unconstrained_list(
                    $,
                    {
                        'value': ($) => Value(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
            'nothing': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'optional': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['optional', _i_generic.process_state_group(
                    $,
                    {
                        'states': _pa.dictionary_literal({
                            'not set': ($): _i_out._T_Value.SG.optional => _i_generic.wrap_unconstrained_state_group(
                                ['not set', _i_generic.process_nothing(
                                    $,
                                    null
                                )],
                                null
                            ),
                            'set': ($): _i_out._T_Value.SG.optional => _i_generic.wrap_unconstrained_state_group(
                                ['set', Value(
                                    $,
                                    null
                                )],
                                null
                            ),
                        }),
                    }
                )],
                null
            ),
            'state': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['state', _i_generic.process_group(
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
                                null
                            )),
                        }),
                    }
                )],
                null
            ),
            'text': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['text', _i_generic.process_group(
                    $,
                    {
                        'properties': ($) => ({
                            'delimiter': _pa.cc(_i_generic.get_entry(
                                $,
                                {
                                    'key': "delimiter",
                                }
                            ), ($) => _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'backtick': ($): _i_out._T_Value.SG.text.delimiter => _i_generic.wrap_unconstrained_state_group(
                                            ['backtick', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'none': ($): _i_out._T_Value.SG.text.delimiter => _i_generic.wrap_unconstrained_state_group(
                                            ['none', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'quote': ($): _i_out._T_Value.SG.text.delimiter => _i_generic.wrap_unconstrained_state_group(
                                            ['quote', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
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
                null
            ),
            'verbose group': ($): _i_out._T_Value => _i_generic.wrap_unconstrained_state_group(
                ['verbose group', _i_generic.process_unconstrained_dictionary(
                    $,
                    {
                        'value': ($) => Value(
                            $,
                            null
                        ),
                    }
                )],
                null
            ),
        }),
    }
)
