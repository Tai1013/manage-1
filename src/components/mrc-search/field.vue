<template lang="pug">
template(v-if="!field.component || field.component === 'input'")
  el-input(
    v-model="search[field.prop]"
    v-bind="field.componentAttr"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    :placeholder="field.placeholder ? $t(`placeholder.${field.placeholder}`) : $t('placeholder.請輸入')"
    @change="value => onChange(value, field)"
  )

template(v-else-if="field.component === 'select'")
  el-select(
    v-model="search[field.prop]"
    v-bind="field.componentAttr"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    :placeholder="field.placeholder ? $t(`placeholder.${field.placeholder}`) : $t('placeholder.請選擇')"
    @change="value => onChange(value, field)"
  )
    el-option(
      v-for="option in convertRef(field.options)"
      :key="option.value"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    )

template(v-else-if="field.component === 'select-group'")
  el-select(
    v-model="search[field.prop]"
    v-bind="field.componentAttr"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    :placeholder="field.placeholder ? $t(`placeholder.${field.placeholder}`) : $t('placeholder.請選擇')"
    @change="value => onChange(value, field)"
  )
    el-option-group(
      v-for="group in convertRef(field.options)"
      :key="group.label"
      :label="group.label"
    )
      el-option(
        v-for="option in convertRef(group.options)"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        :disabled="option.disabled"
      )

template(v-else-if="field.component === 'date-picker'")
  el-date-picker.date-picker(
    v-model="search[field.prop]"
    v-bind="field.componentAttr"
    :type="field.type"
    value-format="YYYY-MM-DD HH:mm:ss"
    :default-time="[new Date(0,0,0,0,0,0), new Date(0,0,0,23,59,59)]"
    :placeholder="field.placeholder ? $t(`placeholder.${field.placeholder}`) : $t('placeholder.請選擇')"
    :start-placeholder="$t('placeholder.開始時間')"
    :end-placeholder="$t('placeholder.結束時間')"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    @change="(value: any) => onChange(value, field)"
  )
</template>

<script setup lang="ts">
import type { SearchField } from './define'
import type { PropType, Ref } from 'vue'
import { ElInput, ElOption, ElSelect, ElOptionGroup, ElDatePicker } from 'element-plus'

defineProps({
  search: {
    type: Object,
    required: true
  },
  field: {
    type: Object as PropType<SearchField>,
    required: true
  }
})

const onChange = <T>(value: T, field: SearchField) => {
  if (field.onChange) return field.onChange({ value, field })
}

const convertRef = <T>(data: Ref<T> | T ): T => {
  if ((data as Ref<T>).value) return (data as Ref<T>).value
  return data as T
}
</script>

<script lang="ts">
export default { name: "FieldComp" }
</script>
