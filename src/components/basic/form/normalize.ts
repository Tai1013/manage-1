import { FormField } from './types'
import { $t, useLanguage } from '@/i18n'

const { spaceRequired } = useLanguage()

const translationMap = (field: FormField) => {
  const space = spaceRequired.value ? ' ' : ''
  field.label = field.label ? $t(field.label) : undefined

  if (field.placeholder) field.placeholder = $t(field.placeholder)
  else {
    if (field.component && ['select', 'select-group'].includes(field.component)) field.placeholder = $t('請選擇') + space + field.label
    else field.placeholder = $t('請輸入') + space + field.label
  }
}

export const normalizeFields = (formFields: FormField[]) => {
  formFields.map(field => translationMap(field))
  return formFields
}
