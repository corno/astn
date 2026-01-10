import * as _p from 'pareto-core-refiner'
import * as _pdev from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as _i_r_parse_tree from "../authoring_parse_tree/unmarshall"
import * as _i_r_token from "../token/unmarshall"


export const Parse_Error: _i_signatures._T_Parse_Error = ($, $p) => _i_generic.process_group(
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
                        'lexer': ($): _i_out._T_Parse_Error._type.SG => ['lexer', _i_generic.process_unconstrained_state_group(
                            $,
                            {
                                'states': _p.dictionary.literal({
                                    'unexpected control character': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected control character', _i_generic.process_number(
                                        $,
                                        {
                                            'deserializer': $p['value deserializers']['default number'],
                                        }
                                    )],
                                    'missing character after escape': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['missing character after escape', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unexpected end of line in delimited string': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected end of line in delimited string', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unexpected character': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected character', _i_generic.process_number(
                                        $,
                                        {
                                            'deserializer': $p['value deserializers']['default number'],
                                        }
                                    )],
                                    'unterminated string': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unterminated string', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unterminated block comment': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unterminated block comment', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unterminated unicode escape sequence': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unterminated unicode escape sequence', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'invalid unicode escape sequence': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['invalid unicode escape sequence', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unknown escape character': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unknown escape character', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'unexpected end of input': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['unexpected end of input', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'dangling slash': ($): _i_out._T_Parse_Error._type.SG.lexer.SG => ['dangling slash', _i_generic.process_nothing(
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
                                    'expected': _p.deprecated_cc(_i_generic.get_entry(
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
                                                    'states': _p.dictionary.literal({
                                                        'a string': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['a string', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        'a value': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['a value', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '!': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['!', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '>': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['>', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '}': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['}', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '@': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['@', _i_generic.process_nothing(
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
                                                        ')': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => [')', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        ']': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => [']', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        '#': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L.SG => ['#', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                    }),
                                                }
                                            ),
                                        }
                                    )),
                                    'cause': _p.deprecated_cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "cause",
                                        }
                                    ), ($) => _i_generic.process_unconstrained_state_group(
                                        $,
                                        {
                                            'states': _p.dictionary.literal({
                                                'missing token': ($): _i_out._T_Parse_Error._type.SG.parser.cause.SG => ['missing token', _i_generic.process_nothing(
                                                    $,
                                                    null
                                                )],
                                                'unexpected token': ($): _i_out._T_Parse_Error._type.SG.parser.cause.SG => ['unexpected token', _i_generic.process_group(
                                                    $,
                                                    {
                                                        'properties': ($) => ({
                                                            'found': _p.deprecated_cc(_i_generic.get_entry(
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
                                }),
                            }
                        )],
                    }),
                }
            )),
            'range': _p.deprecated_cc(_i_generic.get_entry(
                $,
                {
                    'key': "range",
                }
            ), ($) => _i_generic.process_optional(
                $,
                {
                    'value': ($) => _i_r_token.Range(
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
export const Parse_Result: _i_signatures._T_Parse_Result = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _p.dictionary.literal({
            'failure': ($): _i_out._T_Parse_Result.SG => ['failure', Parse_Error(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'success': ($): _i_out._T_Parse_Result.SG => ['success', _i_r_parse_tree.Document(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
