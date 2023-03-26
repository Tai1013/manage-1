<template lang="pug">
mrc-table(
  :data="data"
  :columns="columns"
  :loading="isLoading"
)
</template>

<script setup lang="ts">
import type { SearchData } from './define'
import type { PropType } from 'vue'
import { MrcTable } from '@/components'
import { useInjectRegister } from '@/composables'
import { useTable } from './useTable'

const props = defineProps({
  search: {
    type: Object as PropType<SearchData>,
    required: true
  }
})

const { data, columns, isLoading, getOperateRecordList, reset } = useTable(props.search)

const submitHandler = useInjectRegister('submit')
submitHandler(() => {
  reset()
  getOperateRecordList()
})
const clearHandler = useInjectRegister('clear')
clearHandler(() => {
  reset()
})
</script>
