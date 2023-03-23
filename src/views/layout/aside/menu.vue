<template lang="pug">
el-menu.menu-comp(
  router
  :default-active="$route.path"
)
  el-sub-menu(
    v-for="item in MENU_LIST"
    :key="item.name"
    :index="item.name"
  )
    template(#title)
      mrc-icon(v-if="item.icon" :icon="item.icon")
      span {{ item.title }}

    template(v-if="item.child.length > 0")
      el-menu-item(
        v-for="child in item.child"
        :key="child.name"
        :index="child.path"
      ) {{ child.title }}
</template>

<script setup lang="ts">
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { MENU_LIST } from '@/configs/constant'
import { MrcIcon } from '@/components'
</script>

<script lang="ts">
export default { name: "MenuComp" }
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
  background-color: #337ecc;
}
.el-menu-item {
  background-color: #2062a8;
  &.is-active {
    background-color: #144e8d;
  }
}
:deep(.el-sub-menu__title), .el-menu-item {
  color: #ffffff;
  &:hover:not(.is-active) {
    background-color: #2b71bb;
  }
}
</style>
