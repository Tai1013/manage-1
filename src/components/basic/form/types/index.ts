/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rule } from 'async-validator'
import type { ButtonType, ComponentSize } from 'element-plus'
export type { PropType, Ref } from 'vue'
export type { FormInstance, ButtonType, ComponentSize } from 'element-plus'
export type LabelPosition = 'left' | 'right' | 'top'

export type ButtonItem = 'submit' | 'cancel'
export type ButtonField = ButtonItem | ButtonItem[]
export type ButtonList = {
  label: string
  value: string
  type: ButtonType
}

export const BUTTON_LIST: ButtonList[] = [
  { label: '送出', value: 'submit', type: 'primary' },
  { label: '取消', value: 'cancel', type: '' }
]

interface CommonField {
  prop: string
  label?: string
  rules?: Rule
  clearable?: boolean
  disabled?: boolean
  visible?: boolean
  size?: ComponentSize
  placeholder?: string
  errorLabel?: string
  onChange?: <T>({ value, field }: { value: T, field: FormField }) => void
}

interface InputField {
  component?: 'input'
  componentAttr?: {
    showPassword?: boolean
  } & Record<string, any>
  type?: 'text' | 'password'
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

export type FormField = CommonField & (InputField | SelectField | SelectGroupField)

export type FormFieldScope<T = any> = {
  field?: FormField
  value?: T
}
