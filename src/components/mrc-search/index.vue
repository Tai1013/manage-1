<template lang="pug">
el-form(
  ref="searchRef"
  v-bind="$attrs"
  :model="search"
  label-position="top"
  inline
  :disabled="disabled || loading"
  :size="size"
  @submit.prevent
)
  template(v-for="field in innerFields" :key="field.prop")
    el-form-item(
      v-if="field.visible !== false"
      :prop="field.prop"
      :rules="field.rules"
    )
      template(#label)
        span {{ field.label ? $t(field.label) : '' }}
        span.label-required(v-if="convertRequired(field.rules)") ({{ $t('validate.必填') }})
      slot(:name="`field:${field.prop}`" :field="field")
        div(:class="field.fieldStyle")
          field-comp(
            :search="search"
            :field="field"
          )
      template(#error)
        .error-hide

  el-form-item.search-button
    .empty-label
    mrc-button(type="primary" @click="submitSearch()") {{ $t('搜尋') }}
    mrc-button(@click="clearSearch()") {{ $t('清除') }}
</template>

<script setup lang="ts">
import type { SearchField } from './define'
import type { PropType } from 'vue'
import type { ComponentSize, FormInstance } from 'element-plus'
import { ref, computed } from 'vue'
import { normalizeFields } from './normalize'
import { ElForm, ElFormItem } from 'element-plus'
import { MrcButton } from '@/components'
import { useMessage } from '@/composables'
import { t } from '@/i18n'
import FieldComp from './field.vue'

type RuleRequired = {
  required: boolean
}

const props = defineProps({
  search: {
    type: Object,
    required: true
  },
  fields: {
    type: Array as PropType<SearchField[]>,
    required: true
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['submit', 'clear'])

const { $message } = useMessage()

const searchRef = ref<FormInstance>()

const innerFields = computed(() => normalizeFields(props.fields))

const convertRequired = <T>(rules: T | undefined) => {
  if (rules) return (rules as unknown as RuleRequired).required
}

const submitSearch = () => {
  if (!searchRef.value) return
  searchRef.value.validate((valid, validateFieldsError) => {
    if (valid) emit('submit')
    else {
      if (!validateFieldsError) return
      Object.keys(validateFieldsError).forEach(key => {
        const field = props.fields.find(field => field.prop === key)
        if (field && field.label) {
          const space = searchRef.value ? ' ' : ''
          $message.error(t(field.label) + space + validateFieldsError[key][0].message)
        }
      })
    }
  })
}

const clearSearch = () => {
  if (!searchRef.value) return
  searchRef.value.resetFields()
  emit('clear')
}
</script>

<script lang="ts">
export default { name: 'MrcSearch' }
</script>

<style scoped lang="scss">
.el-form--inline .el-form-item {
  margin-bottom: 14px;
  margin-right: 14px;
}
.label-required {
  margin-left: 5px;
  font-size: 12px;
}
:deep(.el-form-item__label), .search-button .empty-label {
  margin-bottom: 3px !important;
}
.search-button {
  .empty-label {
    width: 100%;
    height: 22px;
  }
  button {
    min-width: 80px;
  }
}
</style>
