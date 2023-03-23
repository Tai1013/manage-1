<template lang="pug">
el-icon(v-if="icon" :color="color")
  v-icon(v-if="elementIcon.includes(icon)" :icon="icon")
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ElementIconType } from '@/plugin/element-icon'
import { elementIcon } from '@/plugin/element-icon'
import { ElIcon } from 'element-plus'

defineProps({
  icon: {
    type: String as PropType<ElementIconType>,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  }
})
</script>

<script lang="ts">
export default { name: 'McrIcon' }
</script>
