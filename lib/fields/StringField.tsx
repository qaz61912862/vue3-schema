import { defineComponent } from "@vue/runtime-core";
import { FiledPropsDefine } from '../types'

declare const props: {
    value: any
    onChange: (v: string) => void
}
export default defineComponent({
    props: FiledPropsDefine,
    setup(props) {
        const handleChange = (e: any) => {
            props.onChange(e.target.value);
        }
        return () => (
            <input type="text" value={props.value as any} onInput={handleChange}  />
        )
    }
})