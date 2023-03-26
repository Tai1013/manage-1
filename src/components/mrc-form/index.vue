<template lang="pug">
el-form(
  ref="formRef"
  v-bind="$attrs"
  :model="form"
  :label-position="labelPosition"
  :disabled="disabled || loading"
  :size="size"
  @submit.prevent
  @keyup.enter="enterSubmit ? submitForm() : ''"
)
  template(v-for="field in fields" :key="field.prop")
    el-form-item(
      v-if="field.visible !== false"
      :prop="field.prop"
      :label="field.label ? $t(field.label) : ''"
      :rules="field.rules"
    )
      slot(:name="`field:${field.prop}`" :field="field")
        field-comp(
          :form="form"
          :field="field"
        )

  el-form-item.form-button
    button-comp(
      v-for="button in buttonFields"
      :key="button"
      :button="button"
      :loading="loading"
      @click="clickHandler"
    )
      template(#default)
        slot(:name="`button:${button}`")
</template>

<script setup lang="ts">
import type { FormField, LabelPosition, ButtonItem, ButtonField } from './define'
import type { ComponentSize, FormInstance } from 'element-plus'
import type { PropType } from 'vue'
import { ref, computed } from 'vue'
import { ElForm, ElFormItem } from 'element-plus'
import { useMessage } from '@/composables'
import { t, useLanguage } from '@/i18n'
import FieldComp from './field.vue'
import ButtonComp from './button.vue'

const props = defineProps({
  form: {
    type: Object,
    required: true
  },
  fields: {
    type: Array as PropType<FormField[]>,
    required: true
  },
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: 'top'
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
  },
  buttons: {
    type: [String, Array] as PropType<ButtonField>,
    default: (): ButtonField => ['cancel', 'submit']
  },
  enterSubmit: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits<{
  (event: ButtonItem): void
}>()

const { spaceRequired } = useLanguage()
const { $message } = useMessage()

const buttonFields = computed(() => {
  if (typeof props.buttons === 'string') return [props.buttons]
  return props.buttons
})

const formRef = ref<FormInstance>()

const submitForm = () => {
  if (!formRef.value) return
  formRef.value.validate((valid, validateFieldsError) => {
    if (valid) emit('submit')
    else {
      if (!validateFieldsError) return
      Object.keys(validateFieldsError).forEach(key => {
        const field = props.fields.find(field => field.prop === key)
        if (field && field.label) {
          const space = spaceRequired.value ? ' ' : ''
          $message.error(t(field.label) + space + validateFieldsError[key][0].message)
        }
      })
    }
  })
}

const clickHandler = (button: ButtonItem) => {
  switch (button) {
    case 'submit':
      submitForm()
      break
    case 'cancel':
      emit('cancel')
      break
  }
}
</script>

<script lang="ts">
export default { name: 'MrcForm' }
</script>

<style scoped lang="scss">
.el-form-item:last-child {
  margin-bottom: 0;
}
</style>
