import { defineComponent, PropType, reactive, toRefs } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

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
                <HelloWorld />
            </div>
        )
    }
  },
  components: {
    HelloWorld
  }
});