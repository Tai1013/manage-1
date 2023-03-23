<template lang="pug">
.aside-comp
  mrc-link.home-title(:to="{ name: 'home' }") {{ title }}
  menu-comp
</template>

<script setup lang="ts">
import { MrcLink } from '@/components/basic'
import MenuComp from './menu.vue'
const title = import.meta.env.VITE_APP_TITLE

</script>

<script lang="ts">
export default {
  name: 'AsideComp'
}
</script>

<style scoped lang="scss">
.aside-comp {
  height: 100%;
}
:deep(.home-title) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  background-color: var(--el-color-primary);
  transition: opacity .3s;
  &:hover {
    color: #ffffff;
    opacity: .85;
  }
}
</style>
