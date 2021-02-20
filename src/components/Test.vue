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
export default defineComponent({
  name: 'Hello',
  setup () {
    const msg: Ref<String> = ref('###Test###')
    const inputValue: Ref<String> = ref('')
    const changingMsg : Function = (val: String) => {
      msg.value = val
    }
    return {
      msg,
      inputValue,
      changingMsg
    }
  }
})
</script>

<style>
</style>
