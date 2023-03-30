/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Rule } from 'async-validator'
import type { ComponentSize, DatePickType, DateOrDates } from 'element-plus'

export type SearchFieldScope<T = any> = {
  field?: SearchField
  value?: T
}

interface CommonField {
  prop: string
  label?: string
  rules?: Rule
  clearable?: boolean
  disabled?: boolean
  visible?: boolean
  size?: ComponentSize
  placeholder?: string
  fieldStyle?: GlobalApp.FieldStyle
  onChange?: <T>({ value, field }: { value: T, field: SearchField }) => void
}

interface InputField {
  component?: 'input'
  componentAttr?: Record<string, any>
}

interface SelectField {
  component: 'select'
  componentAttr?: Record<string, any>
  options: GlobalApp.Options
}

interface SelectGroupField {
  component: 'select-group'
  componentAttr?: Record<string, any>
  options: GlobalApp.OptionGroups
}

interface DatePickerField {
  type: DatePickType
  component: 'date-picker'
  componentAttr?: Record<string, any>
}

export type SearchField = CommonField & (
  InputField | SelectField | SelectGroupField | DatePickerField
)
