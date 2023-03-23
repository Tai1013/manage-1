<template lang="pug">
router-link(
  v-slot="{ navigate, href }"
  custom
  :to="to"
)
  el-link(
    v-bind="$attrs"
    :type="type"
    :href="href"
    :underline="underline"
    @click="navigate"
  )
    slot
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { ElLink } from 'element-plus'

type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

defineProps({
  to: {
    type: Object as PropType<RouteLocationRaw>,
    required: true
  },
  type: {
    type: String as PropType<LinkType>,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: false
  }
})
</script>

<script lang="ts">
export default { name: 'McrLink' }
</script>
