import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/ast/unconstrained"
import * as _i_r_token from "../token/unmarshall"
import * as _i_signatures from "../../../interface/schemas/ast/unmarshall"


export const Document: _i_signatures._T_Document = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'content': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "content",
                }
            ), ($) => Value(
                $,
                null
            )),
            'header': _pa.cc(_i_generic.get_entry(
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
                                '!': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "!",
                                    }
                                ), ($) => Structural_Token(
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
                    ),
                }
            )),
        }),
    }
)
export const Elements: _i_signatures._T_Elements = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    ',': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': ",",
                        }
                    ), ($) => _i_generic.process_optional(
                        $,
                        {
                            'value': ($) => Structural_Token(
                                $,
                                null
                            ),
                        }
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
        ),
    }
)
export const Key_Value_Pairs: _i_signatures._T_Key_Value_Pairs = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    ',': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': ",",
                        }
                    ), ($) => _i_generic.process_optional(
                        $,
                        {
                            'value': ($) => Structural_Token(
                                $,
                                null
                            ),
                        }
                    )),
                    'key': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "key",
                        }
                    ), ($) => String(
                        $,
                        null
                    )),
                    'value': _pa.cc(_i_generic.get_entry(
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
                                        ':': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': ":",
                                            }
                                        ), ($) => Structural_Token(
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
                            ),
                        }
                    )),
                }),
            }
        ),
    }
)
export const String: _i_signatures._T_String = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'range': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => _i_r_token.Range(
                $,
                null
            )),
            'trailing trivia': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "trailing trivia",
                }
            ), ($) => _i_r_token.Trivia(
                $,
                null
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_r_token.String_Type(
                $,
                null
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
)
export const Structural_Token: _i_signatures._T_Structural_Token = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'range': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => _i_r_token.Range(
                $,
                null
            )),
            'trailing trivia': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "trailing trivia",
                }
            ), ($) => _i_r_token.Trivia(
                $,
                null
            )),
        }),
    }
)
export const Value: _i_signatures._T_Value = ($) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'range': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => _i_r_token.Range(
                $,
                null
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'include': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['include', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        '@': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "@",
                                            }
                                        ), ($) => Structural_Token(
                                            $,
                                            null
                                        )),
                                        'path': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "path",
                                            }
                                        ), ($) => String(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'indexed collection': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['indexed collection', _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'dictionary': ($): _i_out._T_Value._type.SG.indexed_collection => _i_generic.wrap_unconstrained_state_group(
                                            ['dictionary', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        'entries': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "entries",
                                                            }
                                                        ), ($) => Key_Value_Pairs(
                                                            $,
                                                            null
                                                        )),
                                                        '{': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "{",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        '}': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "}",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'verbose group': ($): _i_out._T_Value._type.SG.indexed_collection => _i_generic.wrap_unconstrained_state_group(
                                            ['verbose group', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        '(': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "(",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        ')': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': ")",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        'entries': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "entries",
                                                            }
                                                        ), ($) => Key_Value_Pairs(
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
                            )],
                            null
                        ),
                        'not set': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['not set', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        '~': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "~",
                                            }
                                        ), ($) => Structural_Token(
                                            $,
                                            null
                                        )),
                                    }),
                                }
                            )],
                            null
                        ),
                        'ordered collection': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['ordered collection', _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'concise group': ($): _i_out._T_Value._type.SG.ordered_collection => _i_generic.wrap_unconstrained_state_group(
                                            ['concise group', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        '<': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "<",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        '>': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': ">",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        'elements': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "elements",
                                                            }
                                                        ), ($) => Elements(
                                                            $,
                                                            null
                                                        )),
                                                    }),
                                                }
                                            )],
                                            null
                                        ),
                                        'list': ($): _i_out._T_Value._type.SG.ordered_collection => _i_generic.wrap_unconstrained_state_group(
                                            ['list', _i_generic.process_group(
                                                $,
                                                {
                                                    'properties': ($) => ({
                                                        '[': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "[",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        ']': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "]",
                                                            }
                                                        ), ($) => Structural_Token(
                                                            $,
                                                            null
                                                        )),
                                                        'elements': _pa.cc(_i_generic.get_entry(
                                                            $,
                                                            {
                                                                'key': "elements",
                                                            }
                                                        ), ($) => Elements(
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
                            )],
                            null
                        ),
                        'set optional value': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['set optional value', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        '*': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "*",
                                            }
                                        ), ($) => Structural_Token(
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
                        'string': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['string', String(
                                $,
                                null
                            )],
                            null
                        ),
                        'tagged value': ($): _i_out._T_Value._type => _i_generic.wrap_unconstrained_state_group(
                            ['tagged value', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'state': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "state",
                                            }
                                        ), ($) => String(
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
                                        '|': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "|",
                                            }
                                        ), ($) => Structural_Token(
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
            )),
        }),
    }
)
