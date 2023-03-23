<template lang="pug">
mrc-button(
  v-bind="$attrs"
  :type="innerButton.type"
  :loading="innerLoading"
  @click="emit('click', innerButton.value)"
)
  template(#default)
    slot {{ $t(innerButton.label) }}
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ButtonItem, ButtonList } from './define'
import { computed } from 'vue'
import { MrcButton } from '@/components'

const BUTTON_LIST: ButtonList[] = [
  { label: '送出', value: 'submit', type: 'primary' },
  { label: '取消', value: 'cancel', type: '' }
]

const props = defineProps({
  button: {
    type: String as PropType<ButtonItem>,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const innerButton = computed((): ButtonList => {
  const currentButton = BUTTON_LIST.find(buttonItem => buttonItem.value === props.button)
  return ({
    type: currentButton?.type || '',
    label: currentButton?.label || '',
    value: currentButton?.value || ''
  })
})
const innerLoading = computed(() => ['submit'].includes(props.button) && props.loading)
</script>

<script lang="ts">
export default { name: "ButtonComp" }
</script>
