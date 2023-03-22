<template lang="pug">
.aside-comp
  .home-title {{ title }}
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE

</script>

<script lang="ts">
export default {
  name: 'AsideComp'
}
</script>

<style lang="scss">
.home-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: var(--el-color-primary);
}
</style>
