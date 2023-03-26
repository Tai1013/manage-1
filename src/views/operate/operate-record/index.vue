<template lang="pug">
mrc-breadcrumb
mrc-search(
  :search="search"
  :fields="fields"
  @submit="submitHandler()"
  @clear="clearHandler()"
)
table-comp(
  :search="search"
)
</template>

<script setup lang="ts">
import type { SearchData } from './define'
import type { SearchField } from '@/components'
import { reactive, computed } from 'vue'
import { MrcBreadcrumb, MrcSearch } from '@/components'
import { PLATFORM_LIST, MENU_LIST, OPERATE_TYPE_LIST } from '@/configs/constant'
import { useProvideRegister } from '@/composables'
import TableComp from './table.vue'

const search = reactive<SearchData>({
  platform: '',
  account: '',
  page: '',
  operateType: '',
  operateTime: []
})

const fields = computed(():SearchField[] => [
  {
    prop: 'platform',
    label: '站台',
    component: 'select',
    options: PLATFORM_LIST,
    clearable: true
  },
  {
    prop: 'account',
    label: '帳號',
    clearable: true
  },
  {
    prop: 'page',
    label: '頁面',
    component: 'select-group',
    options: MENU_LIST.map(menu => ({
      label: menu.title,
      options: menu.child.map(child => ({
        label: child.title,
        value: child.name
      }))
    })),
    clearable: true
  },
  {
    prop: 'operateType',
    label: '操作類型',
    component: 'select',
    options: OPERATE_TYPE_LIST,
    clearable: true
  },
  {
    prop: 'operateTime',
    label: '操作時間',
    component: 'date-picker',
    type: 'daterange',
    clearable: true
  }
])

const submitHandler = useProvideRegister('submit')
const clearHandler = useProvideRegister('clear')
</script>

<style lang="scss">
</style>
