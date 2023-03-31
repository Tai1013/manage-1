<template lang="pug">
el-row(:gutter="12")
  el-col(:span="8" :lg="6")
    .grid-content
      .grid-header
        .title 帳號登入次數
        span (三個月)
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
  .el-divider {
    margin: 12px 0;
  }
}
.grid-header {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .title {
    font-size: 14px;
  }
  span {
    margin-left: 5px;
    font-size: .5rem;
    color: #666666
  }
}
</style>
