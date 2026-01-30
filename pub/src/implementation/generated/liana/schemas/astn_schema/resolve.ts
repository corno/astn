
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
                    'globals': $p['globals'],
                    'imports': $p['imports'],
                }
            )
        )
        return {
            'node': prop_node,
        }
    }
)

export const Types: t_signatures.Types = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Types.D => _p_cc(
        $['l entry'],
        ($) => Type(
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
                'globals': $p['globals'],
                'imports': $p['imports'],
            }
        )
    )
)

export const Globals: t_signatures.Globals = ($, abort, $l, $p) => _p.group.resolve(
    () => {
        
        const prop_text_types = _p_cc(
            $['text types'],
            ($) => _p.dictionary.resolve(
                $['l dictionary'],
                ($, id, $a, $c): t_out.Globals.text_types.D => _p_cc(
                    $['l entry'],
                    ($) => Text_Type(
                        $,
                        ($) => abort(
                            $
                        ),
                        null,
                        null
                    )
                )
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

export const Group: t_signatures.Group = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Group.D => _p_cc(
        $['l entry'],
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
                'globals': $p['globals'],
                'imports': $p['imports'],
            }
        )
    )
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
                    'globals': $p['globals'],
                    'imports': $p['imports'],
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

export const Schemas: t_signatures.Schemas = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Schemas.D => _p_cc(
        $['l entry'],
        ($) => Schema_Tree(
            $,
            ($) => abort(
                $
            ),
            {
                'sibling schemas': _pdev.implement_me(
                    'stack'
                ),
            },
            null
        )
    )
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

export const Imports: t_signatures.Imports = ($, abort, $l, $p) => _p.dictionary.resolve(
    $['l dictionary'],
    ($, id, $a, $c): t_out.Imports.D => _p_cc(
        $['l entry'],
        ($) => _p.group.resolve(
            () => {
                
                const prop_schema_set_child = _p_cc(
                    $['schema set child'],
                    ($) => _p_unreachable_code_path(
                    )
                )
                
                const prop_schema = _p_cc(
                    $['schema'],
                    ($) => _p_unreachable_code_path(
                    )
                )
                return {
                    'schema set child': prop_schema_set_child,
                    'schema': prop_schema,
                }
            }
        )
    )
)
