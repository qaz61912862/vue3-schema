<template>
    <input type="text" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { ref } from 'vue'
import { FiledPropsDefine, Schema } from '../types'

export default {
    props: FiledPropsDefine
}
// 告诉浏览器编译之后props会变成这样
declare const props: {
    value: any
    onChange: (v: string) => void
    schema: Schema
}

export const handleChange = (e: any) => {
    props.onChange(e.target.value);
}
</script>