
import * as _p from "pareto-core/dist/refiner"

import {
    _p_unreachable_code_path,
} from "pareto-core/dist/unreachable_code_path"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as _pdev from "pareto-core-dev"

import * as t_out from "../../../../../interface/generated/liana/schemas/astn_schema/data/resolved"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/astn_schema/resolve"

export const Type: t_signatures.Type = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_node = _p_cc(
            $['node'],
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                ),
                {
                    'noncircular sibling types': _pdev.implement_me(
                        'selection'
                    ),
                    'possibly circular dependent sibling types': _pdev.implement_me(
                        'selection'
                    ),
                },
                {
                    'globals': _pdev.implement_me(
                        "parameter"
                    ),
                    'imports': _pdev.implement_me(
                        "parameter"
                    ),
                }
            )
        )
        return {
            'node': prop_node,
        }
    }
)

export const Types: t_signatures.Types = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_text_types = _p_cc(
            $['text types'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'text types': prop_text_types,
        }
    }
)

export const Text_Type: t_signatures.Text_Type = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_type = _p_cc(
            $['type'],
            ($) => _p_unreachable_code_path(
            )
        )
        return {
            'type': prop_type,
        }
    }
)

export const Group: t_signatures.Group = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Dictionary: t_signatures.Dictionary = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_node = _p_cc(
            $['node'],
            ($) => Type_Node(
                $,
                ($) => abort(
                    $
                ),
                {
                    'noncircular sibling types': _pdev.implement_me(
                        'selection'
                    ),
                    'possibly circular dependent sibling types': _pdev.implement_me(
                        'selection'
                    ),
                },
                {
                    'globals': _pdev.implement_me(
                        "parameter"
                    ),
                    'imports': _pdev.implement_me(
                        "parameter"
                    ),
                }
            )
        )
        
        const prop_ordered = _p_cc(
            $['ordered'],
            ($) => $
        )
        return {
            'node': prop_node,
            'ordered': prop_ordered,
        }
    }
)

export const Type_Node: t_signatures.Type_Node = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Schema_Tree: t_signatures.Schema_Tree = ($, abort, $l, $p) => _p_unreachable_code_path(
)

export const Schema: t_signatures.Schema = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_imports = _p_cc(
            $['imports'],
            ($) => Imports(
                $,
                ($) => abort(
                    $
                ),
                {
                    'sibling schemas': _pdev.implement_me(
                        'selection'
                    ),
                },
                null
            )
        )
        
        const prop_globals = _p_cc(
            $['globals'],
            ($) => Globals(
                $,
                ($) => abort(
                    $
                ),
                null,
                null
            )
        )
        
        const prop_types = _p_cc(
            $['types'],
            ($) => Types(
                $,
                ($) => abort(
                    $
                ),
                null,
                {
                    'globals': _pdev.implement_me(
                        "optional"
                    ),
                    'imports': _pdev.implement_me(
                        "optional"
                    ),
                }
            )
        )
        return {
            'imports': prop_imports,
            'globals': prop_globals,
            'types': prop_types,
        }
    }
)

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p_unreachable_code_path(
)
