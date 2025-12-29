import * as _pa from 'pareto-core-refiner'
import * as _pd from 'pareto-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/astn_schema/data_types/target"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/astn_schema/unmarshall"


export const Dictionary: _i_signatures._T_Dictionary = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'node': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "node",
                }
            ), ($) => Type_Node(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'ordered': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "ordered",
                }
            ), ($) => _i_generic.process_boolean(
                $,
                {
                    'deserializer': $p['value deserializers']['boolean'],
                }
            )),
        }),
    }
)
export const Globals: _i_signatures._T_Globals = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'text types': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "text types",
                }
            ), ($) => _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => Text_Type(
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
export const Group: _i_signatures._T_Group = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Type_Node(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Imports: _i_signatures._T_Imports = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_group(
            $,
            {
                'properties': ($) => ({
                    'schema': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "schema",
                        }
                    ), ($) => _i_generic.process_derived_reference(
                        $,
                        null
                    )),
                    'schema set child': _pa.cc(_i_generic.get_entry(
                        $,
                        {
                            'key': "schema set child",
                        }
                    ), ($) => _i_generic.process_stack_reference(
                        $,
                        null
                    )),
                }),
            }
        ),
    }
)
export const Schema: _i_signatures._T_Schema = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'globals': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "globals",
                }
            ), ($) => Globals(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'imports': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "imports",
                }
            ), ($) => Imports(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
            'types': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "types",
                }
            ), ($) => Types(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Schema_Tree: _i_signatures._T_Schema_Tree = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'schema': ($): _i_out._T_Schema_Tree.SG<_i_in._T_Range> => ['schema', Schema(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'set': ($): _i_out._T_Schema_Tree.SG<_i_in._T_Range> => ['set', Schemas(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Schemas: _i_signatures._T_Schemas = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Schema_Tree(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Text_Type: _i_signatures._T_Text_Type = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'type': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "type",
                }
            ), ($) => _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'multi line': ($): _i_out._T_Text_Type._type.SG<_i_in._T_Range> => ['multi line', _i_generic.process_nothing(
                            $,
                            null
                        )],
                        'single line': ($): _i_out._T_Text_Type._type.SG<_i_in._T_Range> => ['single line', _i_generic.process_nothing(
                            $,
                            null
                        )],
                    }),
                }
            )),
        }),
    }
)
export const Type: _i_signatures._T_Type = ($, $p) => _i_generic.process_group(
    $,
    {
        'properties': ($) => ({
            'node': _pa.cc(_i_generic.get_entry(
                $,
                {
                    'key': "node",
                }
            ), ($) => Type_Node(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )),
        }),
    }
)
export const Type_Node: _i_signatures._T_Type_Node = ($, $p) => _i_generic.process_unresolved_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'component': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['component', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'external': ($): _i_out._T_Type_Node.SG.component.SG<_i_in._T_Range> => ['external', _i_generic.process_group(
                            $,
                            {
                                'properties': ($) => ({
                                    'import': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "import",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                    'type': _pa.cc(_i_generic.get_entry(
                                        $,
                                        {
                                            'key': "type",
                                        }
                                    ), ($) => _i_generic.process_selected_reference(
                                        $,
                                        null
                                    )),
                                }),
                            }
                        )],
                        'internal': ($): _i_out._T_Type_Node.SG.component.SG<_i_in._T_Range> => ['internal', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'internal cyclic': ($): _i_out._T_Type_Node.SG.component.SG<_i_in._T_Range> => ['internal cyclic', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                    }),
                }
            )],
            'dictionary': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['dictionary', Dictionary(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'group': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['group', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'list': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['list', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'node': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "node",
                            }
                        ), ($) => Type_Node(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )),
                    }),
                }
            )],
            'nothing': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'optional': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['optional', Type_Node(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'reference': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['reference', _i_generic.process_group(
                $,
                {
                    'properties': ($) => ({
                        'type': _pa.cc(_i_generic.get_entry(
                            $,
                            {
                                'key': "type",
                            }
                        ), ($) => _i_generic.process_unresolved_state_group(
                            $,
                            {
                                'states': _pa.dictionary_literal({
                                    'derived': ($): _i_out._T_Type_Node.SG.reference._type.SG<_i_in._T_Range> => ['derived', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                    'selected': ($): _i_out._T_Type_Node.SG.reference._type.SG<_i_in._T_Range> => ['selected', _i_generic.process_nothing(
                                        $,
                                        null
                                    )],
                                }),
                            }
                        )),
                    }),
                }
            )],
            'state group': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['state group', _i_generic.process_unresolved_dictionary(
                $,
                {
                    'value': ($) => Type_Node(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'text': ($): _i_out._T_Type_Node.SG<_i_in._T_Range> => ['text', _i_generic.process_unresolved_state_group(
                $,
                {
                    'states': _pa.dictionary_literal({
                        'global': ($): _i_out._T_Type_Node.SG.text.SG<_i_in._T_Range> => ['global', _i_generic.process_selected_reference(
                            $,
                            null
                        )],
                        'local': ($): _i_out._T_Type_Node.SG.text.SG<_i_in._T_Range> => ['local', Text_Type(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            )],
        }),
    }
)
export const Types: _i_signatures._T_Types = ($, $p) => _i_generic.process_unresolved_dictionary(
    $,
    {
        'value': ($) => Type(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
