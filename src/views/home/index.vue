<template lang="pug">
el-row(:gutter="12")
  el-col(:span="8")
    .grid-content
      .title 帳號登入比重
      el-divider
      login-chart
</template>

<script setup lang="ts">
import { ElRow, ElCol, ElDivider } from 'element-plus'
import LoginChart from './login-chart.vue'
</script>

<style scoped lang="scss">
.el-row {
  margin-bottom: 12px;
}
.grid-content {
  padding: 12px 0;
  box-shadow: var(--el-box-shadow-lighter);
  border-radius: 10px;
  .title {
    font-size: 14px;
    text-align: center;
  }
  .el-divider {
    margin: 12px 0;
  }
}
</style>
