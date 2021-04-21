import { defineComponent, PropType, reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const renderHelloWorld = (msg: string) => {
    return <HelloWorld msg={msg}/>
}
export default defineComponent({
  name: 'App',
  props: {
    age: {
      type: Number as PropType<number>
    },
    config: {
      type: Object as PropType<{age: number}>,
      required: true
    }
  },
  setup(props, { slots, attrs, emit }) {
    // console.log(props.config.age);
    const state = reactive({
      name: '1234'
    })
    const test = () => {
      state.name += '1'
    }
    return () => {
        return (
            <div id="app">
                <p onClick={test}>{state.name}</p>
                <input v-model={state.name}/>
                {state.name}
                {renderHelloWorld('nlm')}
            </div>
        )
    }
  },
  components: {
    HelloWorld
  }
});