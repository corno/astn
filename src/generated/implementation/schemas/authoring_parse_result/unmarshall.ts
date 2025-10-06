import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/authoring_parse_result/data_types/target"
import * as _i_r_ast from "../authoring_ast/unmarshall"
import * as _i_r_token from "../token/unmarshall"
import * as _i_signatures from "../../../interface/schemas/authoring_parse_result/unmarshall"


export const Parse_Error: _i_signatures._T_Parse_Error = ($, $p) => _i_generic.process_group(
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
                        'lexer': ($): _i_out._T_Parse_Error._type.SG => ['lexer', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'dangling slash': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['dangling slash', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'invalid unicode escape sequence': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['invalid unicode escape sequence', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'missing character after escape': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['missing character after escape', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unexpected character': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected character', _i_generic.process_number(
                                        $,
                                        {
                                            'deserializer': $p['value deserializers']['default number'],
                                        }
                                    )],
                                    'unexpected control character': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected control character', _i_generic.process_number(
                                        $,
                                        {
                                            'deserializer': $p['value deserializers']['default number'],
                                        }
                                    )],
                                    'unexpected end of input': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected end of input', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unexpected end of line in delimited string': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected end of line in delimited string', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unknown escape character': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unknown escape character', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unterminated block comment': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unterminated block comment', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unterminated string': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unterminated string', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unterminated unicode escape sequence': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unterminated unicode escape sequence', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )],
                        'parser': ($): _i_out._T_Parse_Error._type.SG => ['parser', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'cause': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "cause",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                        $,
                                        {
                                            'states': _pa.dictionary_literal({
                                                'missing token': ($): _i_out._T_Parse_Error._type.SG.parser.cause.SG => ['missing token', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'unexpected token': ($): _i_out._T_Parse_Error._type.SG.parser.cause.SG => ['unexpected token', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'found': _pa.cc(_i_generic.get_entry(
                                                                $,
                                                                {
                                                                    'key': "found",
                                                                }
                                                            ), ($) => _i_r_token.Token_Type(
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
                                    'expected': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "expected",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_list(
                                        $,
                                        {
                                            'value': ($) => _i_generic.process_unconstrained_state_group(
                                                $,
                                                {
                                                    'states': _pa.dictionary_literal({
                                                        '!': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['!', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '#': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['#', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        ')': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => [')', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        ',': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => [',', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        ':': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => [':', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '>': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['>', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '@': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['@', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        ']': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => [']', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'a string': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['a string', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'a value': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['a value', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '}': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['}', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                    }),
                                                }
                                            ),
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
export const Parse_Result: _i_signatures._T_Parse_Result = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'failure': ($): _i_out._T_Parse_Result.SG => ['failure', Parse_Error(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'success': ($): _i_out._T_Parse_Result.SG => ['success', _i_r_ast.Document(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
