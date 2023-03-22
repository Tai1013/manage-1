<template lang="pug">
template(v-if="!field.component || field.component === 'input'")
  el-input(
    v-model="form[field.prop]"
    v-bind="field.componentAttr"
    :type="field.type"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    :placeholder="field.placeholder"
    @change="value => onChange(value, field)"
  )

template(v-else-if="field.component === 'select'")
  el-select(
    v-model="form[field.prop]"
    v-bind="field.componentAttr"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    :placeholder="field.placeholder"
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
    v-model="form[field.prop]"
    v-bind="field.componentAttr"
    :clearable="field.clearable"
    :disabled="field.disabled"
    :size="field.size"
    :placeholder="field.placeholder"
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
</template>

<script setup lang="ts">
import type { FormField, PropType, Ref } from './types'
import { ElInput, ElOption, ElSelect, ElOptionGroup } from 'element-plus'

defineProps({
  form: {
    type: Object,
    required: true
  },
  field: {
    type: Object as PropType<FormField>,
    required: true
  }
})

const onChange = <T>(value: T, field: FormField) => {
  if (field.onChange) return field.onChange({ value, field })
}

const convertRef = <T>(data: Ref<T> | T ): T => {
  if ((data as Ref<T>).value) return (data as Ref<T>).value
  return data as T
}
</script>

<script lang="ts">
export default {
    name: "FieldComp"
}
</script>
