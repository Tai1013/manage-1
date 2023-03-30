<template lang="pug">
el-table(
  v-bind="$attrs"
  v-loading="loading"
  :data="data"
  :stripe="stripe"
  :border="border"
  :max-height="tableMaxHeight"
)
  template(v-for="column in columns" :key="column.prop")
    el-table-column(
      v-if="column.visible !== false"
      v-bind="column.attrs"
      :prop="column.prop"
      :label="column.label"
      :min-width="column.attrs?.minWidth || 80"
      :fixed="column.attrs?.fixed"
      :align="column.attrs?.align"
      :formatter="column.formatter"
      :sortable="column.sortable"
    )
</template>

<script setup lang="ts">
import type { TableColumns } from './define'
import type { PropType } from 'vue'
import { ref, watch, nextTick } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  columns: {
    type: Array as PropType<TableColumns[]>,
    required: true
  },
  stripe: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const tableMaxHeight = ref<number | undefined>(undefined)
const tableElements = ref(0)

const setTableElement = () => {
  const view = document.querySelector('.main-view')
  const viewChilds = document.querySelector('.main-view')?.children

  const getElementStyle = (element: Element) => {
    if (tableMaxHeight.value === undefined) return 0
    let number = 0
    number += window.getComputedStyle(element).marginTop.num()
    number += window.getComputedStyle(element).marginBottom.num()
    number += window.getComputedStyle(element).height.num()
    return number
  }

  if (viewChilds) {
    for (let index = 0; index < viewChilds.length; index++) {
      if (viewChilds[index].className.indexOf('el-table') > -1) tableElements.value++
    }
    if (tableElements.value === 1 && !!view) {
      tableMaxHeight.value = 0
      tableMaxHeight.value = getElementStyle(view) - 61
      for (let index = 0; index < viewChilds.length; index++) {
        if (viewChilds[index].className.indexOf('el-table') < 0) tableMaxHeight.value -= getElementStyle(viewChilds[index])
      }
    }
  }
}

watch(() => props.data, () => {
  tableMaxHeight.value = undefined
  tableElements.value = 0
  setTableElement()
  nextTick(() => {
    if (tableMaxHeight.value && tableMaxHeight.value <= 360) tableMaxHeight.value = 360
  })
}, { immediate: true })
</script>

<script lang="ts">
export default { name: 'MrcTable' }
</script>
