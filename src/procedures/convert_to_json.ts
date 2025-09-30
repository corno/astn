#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as parse from "../parse/parse"
import * as create_error_message from "../serializers/parse_result"

import * as t_ast_2_json from "../transformations/ast/json_target"
import * as s_json from "pareto-json/dist/serializers/json"

import { $$ as log } from "exupery-resources/dist/actions/log"
import { $$ as log_error } from "exupery-resources/dist/actions/log_error"
import { $$ as get_instream_data } from "exupery-resources/dist/queries/get_instream_data"


export const $$: _eb.Run_Unsafe_Program_Main = ($, $i) => get_instream_data(
).process_unsafe(($i, $) => _ea.cc(
    parse.parse(
        $,
        {
            'tab size': 4,
        }
    ),
    ($) => {
        return $.transform(
            ($) => $i.execute(() => log(
                _ea.array_literal([s_json.Document(
                    t_ast_2_json.Document($),
                    {
                        'indentation': "    ",
                        'newline': '\n'
                    }
                )])
            )),
            ($) => $i.execute(() => log_error(
                _ea.array_literal([
                    `Parse Error: ${create_error_message.Parse_Error($, { 'position info': ['one based', null] })}`
                ])
            )).throw_exception({
                'exit code': 1
            }),
        )
    }
))