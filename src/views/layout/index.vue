<template lang="pug">
.common-layout
  el-container
    el-aside(width="200px")
      aside-comp
    el-container
      el-header(height="80px")
        header-comp
      el-main
        .main-view
          router-view
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElHeader, ElMain } from 'element-plus'
import AsideComp from './aside/index.vue'
import HeaderComp from './header/index.vue'
</script>

<style scoped lang="scss">
.common-layout {
  height: 100%;
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
  .el-aside {
    color: #ffffff;
    background-color: var(--el-color-primary-dark-2);
  }
  .el-header {
    padding: 0;
    background-color: var(--el-menu-bg-color);
  }
  .el-container {
    height: 100%;
    min-height: 100vh;
  }
  .main-view {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 120px);
    padding: var(--el-main-padding);
    background-color: var(--el-menu-bg-color);
    box-sizing: border-box;
  }
}
</style>
