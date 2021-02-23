import {ref, Ref, onMounted, watch} from 'vue'

interface ModuleA {
  msg: Ref<String>,
  inputValue: Ref<String>,
  changingMsg: Function
}

export const useModuleA = () : ModuleA => {
  const msg: Ref<String> = ref('###Temp###')
  const inputValue: Ref<String> = ref('')
  const changingMsg = (value: string) => {
    msg.value = value
  }
  onMounted(() => {
    console.log('moduleA: mounted')
  })
  watch(msg, () => {
    console.log(`msg: ${msg.value}`)
  })
  return {
    inputValue,
    msg,
    changingMsg
  }
}
