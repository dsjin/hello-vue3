<template>
  <div>
    {{ msg }}
    <input v-model="inputValue" />
    <button
      @click="changingMsg(inputValue)"
    >
      Change Msg
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useModuleA } from './module/moduleA'
export default defineComponent({
  name: 'Hello',
  setup () {
    const {
      inputValue,
      msg,
      changingMsg
    } = useModuleA()
    // const msg: Ref<String> = ref('###Test###')
    // const inputValue: Ref<String> = ref('')
    // const changingMsg : Function = (val: String) => {
    //   msg.value = val
    // }
    // return {
    //   msg,
    //   inputValue,
    //   changingMsg
    // }
    return {
      inputValue,
      msg,
      changingMsg
    }
  }
})
</script>

<style>
</style>
