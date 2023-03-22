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
import type { PropType, ButtonItem, ButtonList } from './types'
import { BUTTON_LIST } from './types'
import { computed } from 'vue'
import { MrcButton } from '@/components/basic'

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
export default {
  name: "ButtonComp"
}
</script>
