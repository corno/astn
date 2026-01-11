    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/authoring_parse_result/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    import * as _i_r_parse_tree from "../authoring_parse_tree/marshall"
    import * as _i_r_token from "../token/marshall"
    
    
    export const Error: _i_signatures._T_Error = ($, $p) => ['verbose group', _p.dictionary.literal({
        'type': _p.deprecated_cc($['type'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
            switch ($[0]) {
                case 'lexer': return _p.ss($, ($) => ({
                    'state': "lexer",
                    'value': ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                        switch ($[0]) {
                            case 'unexpected control character': return _p.ss($, ($) => ({
                                'state': "unexpected control character",
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['default number'](
                                        $,
                                        null
                                    ),
                                })],
                            }))
                            case 'missing character after escape': return _p.ss($, ($) => ({
                                'state': "missing character after escape",
                                'value': ['nothing', null],
                            }))
                            case 'unexpected end of line in delimited string': return _p.ss($, ($) => ({
                                'state': "unexpected end of line in delimited string",
                                'value': ['nothing', null],
                            }))
                            case 'unexpected character': return _p.ss($, ($) => ({
                                'state': "unexpected character",
                                'value': ['text', ({
                                    'delimiter': ['backtick', null],
                                    'value': $p['value serializers']['default number'](
                                        $,
                                        null
                                    ),
                                })],
                            }))
                            case 'unterminated string': return _p.ss($, ($) => ({
                                'state': "unterminated string",
                                'value': ['nothing', null],
                            }))
                            case 'unterminated block comment': return _p.ss($, ($) => ({
                                'state': "unterminated block comment",
                                'value': ['nothing', null],
                            }))
                            case 'unterminated unicode escape sequence': return _p.ss($, ($) => ({
                                'state': "unterminated unicode escape sequence",
                                'value': ['nothing', null],
                            }))
                            case 'invalid unicode escape sequence': return _p.ss($, ($) => ({
                                'state': "invalid unicode escape sequence",
                                'value': ['nothing', null],
                            }))
                            case 'unknown escape character': return _p.ss($, ($) => ({
                                'state': "unknown escape character",
                                'value': ['nothing', null],
                            }))
                            case 'unexpected end of input': return _p.ss($, ($) => ({
                                'state': "unexpected end of input",
                                'value': ['nothing', null],
                            }))
                            case 'dangling slash': return _p.ss($, ($) => ({
                                'state': "dangling slash",
                                'value': ['nothing', null],
                            }))
                            default: return _p.au($[0])
                        }
                    })],
                }))
                case 'parser': return _p.ss($, ($) => ({
                    'state': "parser",
                    'value': ['verbose group', _p.dictionary.literal({
                        'expected': _p.deprecated_cc($['expected'], ($) => ['list', $.__l_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'a string': return _p.ss($, ($) => ({
                                    'state': "a string",
                                    'value': ['nothing', null],
                                }))
                                case 'a value': return _p.ss($, ($) => ({
                                    'state': "a value",
                                    'value': ['nothing', null],
                                }))
                                case '!': return _p.ss($, ($) => ({
                                    'state': "!",
                                    'value': ['nothing', null],
                                }))
                                case '>': return _p.ss($, ($) => ({
                                    'state': ">",
                                    'value': ['nothing', null],
                                }))
                                case '}': return _p.ss($, ($) => ({
                                    'state': "}",
                                    'value': ['nothing', null],
                                }))
                                case '@': return _p.ss($, ($) => ({
                                    'state': "@",
                                    'value': ['nothing', null],
                                }))
                                case ',': return _p.ss($, ($) => ({
                                    'state': ",",
                                    'value': ['nothing', null],
                                }))
                                case ':': return _p.ss($, ($) => ({
                                    'state': ":",
                                    'value': ['nothing', null],
                                }))
                                case ')': return _p.ss($, ($) => ({
                                    'state': ")",
                                    'value': ['nothing', null],
                                }))
                                case ']': return _p.ss($, ($) => ({
                                    'state': "]",
                                    'value': ['nothing', null],
                                }))
                                case '#': return _p.ss($, ($) => ({
                                    'state': "#",
                                    'value': ['nothing', null],
                                }))
                                default: return _p.au($[0])
                            }
                        })])]),
                        'cause': _p.deprecated_cc($['cause'], ($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
                            switch ($[0]) {
                                case 'missing token': return _p.ss($, ($) => ({
                                    'state': "missing token",
                                    'value': ['nothing', null],
                                }))
                                case 'unexpected token': return _p.ss($, ($) => ({
                                    'state': "unexpected token",
                                    'value': ['verbose group', _p.dictionary.literal({
                                        'found': _p.deprecated_cc($['found'], ($) => _i_r_token.Token_Type(
                                            $,
                                            {
                                                'value serializers': $p['value serializers'],
                                            }
                                        )),
                                    })],
                                }))
                                default: return _p.au($[0])
                            }
                        })]),
                    })],
                }))
                default: return _p.au($[0])
            }
        })]),
        'range': _p.deprecated_cc($['range'], ($) => ['optional', $.__decide(
            ($): _i_out._T_Value.SG.optional => ['set', _i_r_token.Range(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            )],
            () => ['not set', null]
        )]),
    })]
