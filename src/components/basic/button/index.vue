<template lang="pug">
el-button(
  v-bind="$attrs"
  :type="type"
  :loading="loading"
  :disabled="disabled"
)
  template(#loading v-if="$slots.loading")
    slot(name="loading")
  slot {{ $t('按鈕') }}
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ButtonType } from 'element-plus'
import { ElButton } from 'element-plus'

defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type : Boolean,
    default: false
  }
})
</script>

<script lang="ts">
export default {
  name: 'MrcButton'
}
</script>
