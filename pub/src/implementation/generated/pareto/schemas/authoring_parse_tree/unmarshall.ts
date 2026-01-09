import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as _i_r_token from "../token/unmarshall"


export const Structural_Token: _i_signatures._T_Structural_Token = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'trailing trivia': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "trailing trivia",
                }
            ), ($) => _i_r_token.Trivia(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'range': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => _i_r_token.Range(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const String: _i_signatures._T_String = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'trailing trivia': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "trailing trivia",
                }
            ), ($) => _i_r_token.Trivia(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'range': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => _i_r_token.Range(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'value': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "value",
                }
            ), ($) => _i_generic.process_text(
                $,
                null
            )),
            'type': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_r_token.String_Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Key_Value_Pairs: _i_signatures._T_Key_Value_Pairs = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'key': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "key",
                        }
                    ), ($) => String(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    )),
                    'value': _p.deprecated_cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "value",
                        }
                    ), ($) => _i_generic.process_optional(
                        $,
                        {
                            'value': ($) => _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        ':': _p.deprecated_cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': ":",
                                            }
                                        ), ($) => Structural_Token(
                                            $,
                                            {
                                                'value deserializers': $p['value deserializers'],
                                            }
                                        )),
                                        'value': _p.deprecated_cc(_i_generic.get_entry(
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
                    )),
                }),
            }
        ),
    }
)
export const Elements: _i_signatures._T_Elements = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'value': _p.deprecated_cc(_i_generic.get_entry(
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
)
export const Concrete_Value: _i_signatures._T_Concrete_Value = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _p.dictionary.literal({
            'indexed collection': ($): _i_out._T_Concrete_Value.SG => ['indexed collection', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'dictionary': ($): _i_out._T_Concrete_Value.SG.indexed_collection.SG => ['dictionary', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    '{': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "{",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'entries': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "entries",
                                        }
                                    ), ($) => Key_Value_Pairs(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    '}': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "}",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'verbose group': ($): _i_out._T_Concrete_Value.SG.indexed_collection.SG => ['verbose group', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    '(': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "(",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'entries': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "entries",
                                        }
                                    ), ($) => Key_Value_Pairs(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    ')': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': ")",
                                        }
                                    ), ($) => Structural_Token(
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
            'not set': ($): _i_out._T_Concrete_Value.SG => ['not set', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        '~': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "~",
                            }
                        ), ($) => Structural_Token(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'ordered collection': ($): _i_out._T_Concrete_Value.SG => ['ordered collection', _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'list': ($): _i_out._T_Concrete_Value.SG.ordered_collection.SG => ['list', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    '[': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "[",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'elements': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "elements",
                                        }
                                    ), ($) => Elements(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    ']': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "]",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'concise group': ($): _i_out._T_Concrete_Value.SG.ordered_collection.SG => ['concise group', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    '<': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "<",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'elements': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "elements",
                                        }
                                    ), ($) => Elements(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    '>': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': ">",
                                        }
                                    ), ($) => Structural_Token(
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
            'set optional value': ($): _i_out._T_Concrete_Value.SG => ['set optional value', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        '*': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "*",
                            }
                        ), ($) => Structural_Token(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'value': _p.deprecated_cc(_i_generic.get_entry(
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
            'state': ($): _i_out._T_Concrete_Value.SG => ['state', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        '|': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "|",
                            }
                        ), ($) => Structural_Token(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'status': _p.deprecated_cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "status",
                            }
                        ), ($) => _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _p.dictionary.literal({
                                    'missing data': ($): _i_out._T_Concrete_Value.SG.state.status.SG => ['missing data', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                '#': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "#",
                                                    }
                                                ), ($) => Structural_Token(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                            }),
                                        }
                                    )],
                                    'set': ($): _i_out._T_Concrete_Value.SG.state.status.SG => ['set', _i_generic.process_group(
                                        $,
                                        {
                                            'properties': ($) => ({
                                                'state': _p.deprecated_cc(_i_generic.get_entry(
                                                    $,
                                                    {
                                                        'key': "state",
                                                    }
                                                ), ($) => String(
                                                    $,
                                                    {
                                                        'value deserializers': $p['value deserializers'],
                                                    }
                                                )),
                                                'value': _p.deprecated_cc(_i_generic.get_entry(
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
                        )),
                    }),
                }
            )],
            'text': ($): _i_out._T_Concrete_Value.SG => ['text', String(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Value: _i_signatures._T_Value = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'concrete': ($): _i_out._T_Value._type.SG => ['concrete', Concrete_Value(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'include': ($): _i_out._T_Value._type.SG => ['include', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    '@': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "@",
                                        }
                                    ), ($) => Structural_Token(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                    'path': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "path",
                                        }
                                    ), ($) => String(
                                        $,
                                        {
                                            'value deserializers': $p['value deserializers'],
                                        }
                                    )),
                                }),
                            }
                        )],
                        'missing data': ($): _i_out._T_Value._type.SG => ['missing data', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    '#': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "#",
                                        }
                                    ), ($) => Structural_Token(
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
            )),
        }),
    }
)
export const Content: _i_signatures._T_Content = ($, $p) => Value(
    $,
    {
        'value deserializers': $p['value deserializers'],
    }
)
export const Document: _i_signatures._T_Document = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'header': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "header",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                '!': _p.deprecated_cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "!",
                                    }
                                ), ($) => Structural_Token(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'value': _p.deprecated_cc(_i_generic.get_entry(
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
            )),
            'content': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => Content(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
