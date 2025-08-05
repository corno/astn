#!/usr/bin/env node

import * as _er from 'exupery-core-resources'
import * as _ea from 'exupery-core-alg'

import * as parse from "../parse/parse"
import * as create_error_message from "../serializers/parse_result"

import * as t_ast_2_json from "../transformations/ast/json_target"
import * as s_json from "pareto-json/dist/serializers/json"


_er.temp_resources.process["get instream data"](($) => {
    _ea.cc(parse.parse(
        $,
        {
            'tab size': 4,
        }
    ), ($) => {
        switch ($[0]) {
            case 'failure': return _ea.ss($, ($) => {
                _er.temp_resources.console.error(`Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`)
                // process.exit(1)
            })
            case 'success': return _ea.ss($, ($) => {
                _er.temp_resources.console.log(s_json.Document(
                    t_ast_2_json.Document($),
                    {
                        'indentation': "    ",
                        'newline': '\n'
                    }
                ))
                // process.exit(0)
            })
            default: return _ea.au($[0])
        }
    })
})