import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/parse_result/unconstrained"
import * as _i_r_ast from "../ast/unmarshall"
import * as _i_r_token from "../token/unmarshall"
import * as _i_signatures from "../../../interface/schemas/parse_result/unmarshall"


export const Parse_Error: _i_signatures._T_Parse_Error = ($) => _i_generic.process_group(
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
                        'lexer': ($): _i_out._T_Parse_Error._type => _i_generic.wrap_unconstrained_state_group(
                            ['lexer', _i_generic.process_state_group(
                                $,
                                {
                                    'states': _pa.dictionary_literal({
                                        'dangling slash': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['dangling slash', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'invalid unicode escape sequence': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['invalid unicode escape sequence', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'missing character after escape': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['missing character after escape', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unexpected character': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unexpected character', _i_generic.process_number(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unexpected control character': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unexpected control character', _i_generic.process_number(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unexpected end of input': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unexpected end of input', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unexpected end of line in delimited string': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unexpected end of line in delimited string', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unknown escape character': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unknown escape character', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unterminated block comment': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unterminated block comment', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unterminated string': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unterminated string', _i_generic.process_nothing(
                                                $,
                                                null
                                            )],
                                            null
                                        ),
                                        'unterminated unicode escape sequence': ($): _i_out._T_Parse_Error._type.SG.lexer => _i_generic.wrap_unconstrained_state_group(
                                            ['unterminated unicode escape sequence', _i_generic.process_nothing(
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
                        'parser': ($): _i_out._T_Parse_Error._type => _i_generic.wrap_unconstrained_state_group(
                            ['parser', _i_generic.process_group(
                                $,
                                {
                                    'properties': ($) => ({
                                        'cause': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "cause",
                                            }
                                        ), ($) => _i_generic.process_state_group(
                                            $,
                                            {
                                                'states': _pa.dictionary_literal({
                                                    'missing token': ($): _i_out._T_Parse_Error._type.SG.parser.cause => _i_generic.wrap_unconstrained_state_group(
                                                        ['missing token', _i_generic.process_nothing(
                                                            $,
                                                            null
                                                        )],
                                                        null
                                                    ),
                                                    'unexpected token': ($): _i_out._T_Parse_Error._type.SG.parser.cause => _i_generic.wrap_unconstrained_state_group(
                                                        ['unexpected token', _i_generic.process_group(
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
                                        'expected': _pa.cc(_i_generic.get_entry(
                                            $,
                                            {
                                                'key': "expected",
                                            }
                                        ), ($) => _i_generic.process_unconstrained_list(
                                            $,
                                            {
                                                'value': ($) => _i_generic.process_state_group(
                                                    $,
                                                    {
                                                        'states': _pa.dictionary_literal({
                                                            '!': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                ['!', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            ')': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                [')', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            ',': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                [',', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            ':': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                [':', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            '>': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                ['>', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            '@': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                ['@', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            ']': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                [']', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            'a string': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                ['a string', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            'a value': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                ['a value', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                            '}': ($): _i_out._T_Parse_Error._type.SG.parser.expected.L => _i_generic.wrap_unconstrained_state_group(
                                                                ['}', _i_generic.process_nothing(
                                                                    $,
                                                                    null
                                                                )],
                                                                null
                                                            ),
                                                        }),
                                                    }
                                                ),
                                            }
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
export const Parse_Result: _i_signatures._T_Parse_Result = ($) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'failure': ($): _i_out._T_Parse_Result => _i_generic.wrap_unconstrained_state_group(
                ['failure', Parse_Error(
                    $,
                    null
                )],
                null
            ),
            'success': ($): _i_out._T_Parse_Result => _i_generic.wrap_unconstrained_state_group(
                ['success', _i_r_ast.Document(
                    $,
                    null
                )],
                null
            ),
        }),
    }
)
