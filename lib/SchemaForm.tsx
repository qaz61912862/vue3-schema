import { defineComponent, PropType } from "@vue/runtime-core";
import { Schema, SchemaTypes } from './types';
import SchemaItem from './SchemaItem'

export default defineComponent({
    props: {
        schema: {
            type: Object as PropType<Schema>,
            required: true
        },
        value: {
            required: true
        },
        onChange: {
            type: Function as PropType<(v: any) => void>,
            required: true
        }
    },
    name: 'SchemaForm',
    setup(props, { emit, attrs }) {
        return () => {
            const handleChange = (v: any) => {
                props.onChange(v);
            }
            return (
                <div>
                    <SchemaItem schema={props.schema} value={props.value} onChange={handleChange}/>
                </div>
            )
        }
    }
})