import { defineComponent, reactive, Ref, ref } from 'vue';
import MonacoEditor from './components/MonacoEditor';
import SchemaForm from '../lib/SchemaForm'

function toJson(data: any) {
  return JSON.stringify(data, null, 2);
}

const schema = {
  type: 'string',
}

export default defineComponent({
  name: 'App',
  components: {
    MonacoEditor,
  },
  setup() {
    const numberRef: Ref<any> = ref(schema);
    const demo = reactive({
      data: ''
    })
    const handleChange = (code: string) => {
      let data:any
      try {
        console.log(code);
        data = JSON.parse(code)
      } catch (e) {
        numberRef.value = data
        console.log(e)
      }
    }
    return () => {
        const code = toJson(numberRef.value)
        return (
            <div id="app">
              <MonacoEditor code={code} onChange={handleChange} title="Schema" style="min-height: 400px;" />
              <SchemaForm schema={schema} onChange={handleChange} value={demo.data}/>
            </div>
        )
    }
  }
});