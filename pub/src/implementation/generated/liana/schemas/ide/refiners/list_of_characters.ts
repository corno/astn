    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/ide/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const Text_Edits: t_signatures.Text_Edits = ($, abort, $p) => v_unmarshall.Text_Edits(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Relative_Range: t_signatures.Relative_Range = ($, abort, $p) => v_unmarshall.Relative_Range(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const ID_Value_Pairs_To_Be_Sorted: t_signatures.ID_Value_Pairs_To_Be_Sorted = ($, abort, $p) => v_unmarshall.ID_Value_Pairs_To_Be_Sorted(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Relative_Location: t_signatures.Relative_Location = ($, abort, $p) => v_unmarshall.Relative_Location(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
