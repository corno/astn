import * as _ea from 'exupery-core-alg'

import * as astn_target from "../../../../interface/generated/pareto/core/astn_target"


const indentation = `    `

export const Document = (
    $: astn_target.Document
): string => {
    return _ea.build_text(($i) => {
        Value($, ``, $i)
    })
}

export const Value = (
    $: astn_target.Value,
    indent: string,
    $i: _ea.Text_Builder
) => {
    _ea.cc($, ($) => {
        switch ($[0]) {
            case 'dictionary': return _ea.ss($, ($) => {
                $i['add snippet'](`{`)
                $.map(($, key) => {
                    $i['add snippet'](`\n${indent}${indentation}\`${key}\`: `) //FIXME escape key
                    Value($, indent + indentation, $i)
                })
                $i['add snippet'](`\n${indent}}`)
            })
            case 'verbose group': return _ea.ss($, ($) => {
                $i['add snippet'](`(`)
                $.map(($, key) => {
                    $i['add snippet'](`\n${indent}${indentation}'${key}': `) //FIXME escape key
                    Value($, indent + indentation, $i)
                })
                $i['add snippet'](`\n${indent})`)
            })
            case 'list': return _ea.ss($, ($) => {
                $i['add snippet'](`[`)
                $.map(($) => {
                    $i['add snippet'](` `)
                    Value($, indent + indentation, $i)
                })
                $i['add snippet'](` ]`)
            })
            case 'state': return _ea.ss($, ($) => {
                $i['add snippet'](`| '${$.state}' `)
                Value($.value, indent, $i)
            })
            case 'optional': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'not set': return _ea.ss($, ($) => $i['add snippet'](`~`))
                    case 'set': return _ea.ss($, ($) => {
                        $i['add snippet'](`* `)
                        Value($, indent, $i)
                    })

                    default: return _ea.au($[0])
                }
            }))
            case 'nothing': return _ea.ss($, ($) => $i['add snippet'](`~`))
            case 'text': return _ea.ss($, ($) => {
                const value = $.value
                return _ea.cc($.delimiter, ($) => {
                    switch ($[0]) {
                        case 'backtick': return _ea.ss($, ($) => $i['add snippet'](`\`${value}\``))
                        case 'quote': return _ea.ss($, ($) => $i['add snippet'](`"${value}"`))
                        case 'none': return _ea.ss($, ($) => $i['add snippet'](`${value}`))
                        default: return _ea.au($[0])
                    }
                })
            })
            default: return _ea.au($[0])
        }
    })
}