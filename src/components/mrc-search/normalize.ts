import type { SearchField } from './define'

const fieldStyleMap = (field: SearchField) => {
  if (field.component && ['date-picker'].includes(field.component)) field.fieldStyle = 'field-time'
  else field.fieldStyle = 'field-default'
}

export const normalizeFields = (formFields: SearchField[]) => {
  formFields.map(field => fieldStyleMap(field))
  return formFields
}
