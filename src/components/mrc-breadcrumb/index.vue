<template lang="pug">
.breadcrumb(v-if="breadcrumb.length > 0")
  el-breadcrumb(:separator-icon="ArrowRight")
    template(
      v-for="(item, index) in breadcrumb"
      :key="item.name"
    )
      el-breadcrumb-item(v-if="index === 0 || index === breadcrumb.length - 1")
        b(v-if="route.name === item.name") {{ item.title }}
        span(v-else) {{ item.title }}
      el-breadcrumb-item(v-else :to="{ name: item.name }") {{ item.title }}
  el-divider
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import { ElBreadcrumb, ElBreadcrumbItem, ElDivider } from 'element-plus'
import { useVueRouter } from '@/composables/useVueRouter'
import { MENU_LIST, ACTION_LIST } from '@/configs/constant'
import { ref } from 'vue'

type Breadcrumb = {
  title: string
  name: string
}

const { route } = useVueRouter()

const innerPath = ref(route.path.split('/').splice(1))
const breadcrumb = ref<Breadcrumb[]>([])

const menuFormatter = (currentList: Breadcrumb | GlobalApp.Option | undefined, name: string) => {
  if (currentList) breadcrumb.value.push({ title: (currentList as Breadcrumb).title || (currentList as GlobalApp.Option).label, name })
  else breadcrumb.value.push({ title: '', name })
}

try {
  const currentMenu = MENU_LIST.find(menu => menu.name === innerPath.value[0])
  innerPath.value.forEach((name, index) => {
    if (currentMenu) {
      if (index === 0) menuFormatter(currentMenu, name)
      if (index === 1) menuFormatter(currentMenu.child.find(sub => sub.name === name), name)
      if (index === 2) menuFormatter(ACTION_LIST.find(action => action.value === name), name)
    } else throw Error()
  })
} catch (error) {
  breadcrumb.value = []
}
</script>

<script lang="ts">
export default { name: 'Breadcrumb' }
</script>

<style scoped lang="scss">
.el-breadcrumb {
  font-size: 16px;
}
.el-divider--horizontal {
  margin: 20px 0;
}
</style>
