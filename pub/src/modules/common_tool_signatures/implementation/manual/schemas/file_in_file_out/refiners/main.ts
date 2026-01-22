import * as _p from 'pareto-core/dist/refiner'
import * as _pi from 'pareto-core/dist/interface'

//data types
import * as d_file_in_file_out from "../../../../../interface/to_be_generated/file_in_file_out"
import * as d_main from "pareto-resources/dist/interface/to_be_generated/temp_main"

//dependencies
import * as p_file_in_file_out from "../productions/text"

export const Parameters: _pi.Refiner<
    d_file_in_file_out.Parameters,
    d_file_in_file_out.Error,
    d_main.Parameters
> = ($, abort) => {
    return _p.iterate(
        $.arguments,
        (iter) => iter['assert finished'](
            () => ({
                'in': p_file_in_file_out.Path(iter, ($) => abort(['in path', $])),
                'out': p_file_in_file_out.Path(iter, ($) => abort(['out path', $])),
            }),
            ($) => abort(['too many arguments', null]),

        ),
    )

}