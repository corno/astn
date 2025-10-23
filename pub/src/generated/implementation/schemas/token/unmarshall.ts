import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/token/data_types/target"
import * as _i_signatures from "../../../interface/schemas/token/unmarshall"


export const Annotated_Token: _i_signatures._T_Annotated_Token = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'end': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "end",
                }
            ), ($) => Location(
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
            ), ($) => Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'trailing trivia': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "trailing trivia",
                }
            ), ($) => Trivia(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => Token_Type(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Delimited_String: _i_signatures._T_Delimited_String = ($, $p) => _i_generic.process_text(
    $,
    null
)
export const Location: _i_signatures._T_Location = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'absolute': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "absolute",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
            'relative': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "relative",
                }
            ), ($) => Relative_Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Range: _i_signatures._T_Range = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'end': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "end",
                }
            ), ($) => Location(
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
            ), ($) => Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Relative_Location: _i_signatures._T_Relative_Location = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'column': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "column",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
            'line': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "line",
                }
            ), ($) => _i_generic.process_number(
                $,
                {
                    'deserializer': $p['value deserializers']['default number'],
                }
            )),
        }),
    }
)
export const String_Type: _i_signatures._T_String_Type = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'apostrophed': ($): _i_out._T_String_Type.SG => ['apostrophed', _i_generic.process_nothing(
                $,
                null
            )],
            'backticked': ($): _i_out._T_String_Type.SG => ['backticked', _i_generic.process_nothing(
                $,
                null
            )],
            'quoted': ($): _i_out._T_String_Type.SG => ['quoted', _i_generic.process_nothing(
                $,
                null
            )],
            'undelimited': ($): _i_out._T_String_Type.SG => ['undelimited', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Token_Type: _i_signatures._T_Token_Type = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            '!': ($): _i_out._T_Token_Type.SG => ['!', _i_generic.process_nothing(
                $,
                null
            )],
            '#': ($): _i_out._T_Token_Type.SG => ['#', _i_generic.process_nothing(
                $,
                null
            )],
            '(': ($): _i_out._T_Token_Type.SG => ['(', _i_generic.process_nothing(
                $,
                null
            )],
            ')': ($): _i_out._T_Token_Type.SG => [')', _i_generic.process_nothing(
                $,
                null
            )],
            '*': ($): _i_out._T_Token_Type.SG => ['*', _i_generic.process_nothing(
                $,
                null
            )],
            ':': ($): _i_out._T_Token_Type.SG => [':', _i_generic.process_nothing(
                $,
                null
            )],
            '<': ($): _i_out._T_Token_Type.SG => ['<', _i_generic.process_nothing(
                $,
                null
            )],
            '>': ($): _i_out._T_Token_Type.SG => ['>', _i_generic.process_nothing(
                $,
                null
            )],
            '@': ($): _i_out._T_Token_Type.SG => ['@', _i_generic.process_nothing(
                $,
                null
            )],
            '[': ($): _i_out._T_Token_Type.SG => ['[', _i_generic.process_nothing(
                $,
                null
            )],
            ']': ($): _i_out._T_Token_Type.SG => [']', _i_generic.process_nothing(
                $,
                null
            )],
            'string': ($): _i_out._T_Token_Type.SG => ['string', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'type': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => String_Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                        'value': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "value",
                            }
                        ), ($) => Delimited_String(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            '{': ($): _i_out._T_Token_Type.SG => ['{', _i_generic.process_nothing(
                $,
                null
            )],
            '|': ($): _i_out._T_Token_Type.SG => ['|', _i_generic.process_nothing(
                $,
                null
            )],
            '}': ($): _i_out._T_Token_Type.SG => ['}', _i_generic.process_nothing(
                $,
                null
            )],
            '~': ($): _i_out._T_Token_Type.SG => ['~', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Tokenizer_Result: _i_signatures._T_Tokenizer_Result = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'end': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "end",
                }
            ), ($) => Location(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'leading trivia': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "leading trivia",
                }
            ), ($) => Trivia(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'tokens': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "tokens",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => Annotated_Token(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )),
        }),
    }
)
export const Trivia: _i_signatures._T_Trivia = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'comments': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "comments",
                }
            ), ($) => _i_generic.process_unconstrained_list(
                $,
                {
                    'value': ($) => _i_generic.process_group(
                        $,
                        {
                            'properties': ($) => ({
                                'content': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "content",
                                    }
                                ), ($) => _i_generic.process_text(
                                    $,
                                    null
                                )),
                                'range': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "range",
                                    }
                                ), ($) => Range(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'trailing whitespace': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "trailing whitespace",
                                    }
                                ), ($) => Whitespace(
                                    $,
                                    {
                                        'value deserializers': $p['value deserializers'],
                                    }
                                )),
                                'type': _pa.cc(_i_generic.get_entry(
                                    $,
                                    {
                                        'key': "type",
                                    }
                                ), ($) => _i_generic.process_unconstrained_state_group(
                                    $,
                                    {
                                        'states': _pa.dictionary_literal({
                                            'block': ($): _i_out._T_Trivia.comments.L._type.SG => ['block', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            'line': ($): _i_out._T_Trivia.comments.L._type.SG => ['line', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                        }),
                                    }
                                )),
                            }),
                        }
                    ),
                }
            )),
            'leading whitespace': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "leading whitespace",
                }
            ), ($) => Whitespace(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Whitespace: _i_signatures._T_Whitespace = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'range': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => Range(
                $,
                {
                    'value deserializers': $p['value deserializers'],
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
)
