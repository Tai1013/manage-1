/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rule } from 'async-validator'
import type { ButtonType, ComponentSize } from 'element-plus'

export type LabelPosition = 'left' | 'right' | 'top'
export type ButtonItem = 'submit' | 'cancel'
export type ButtonField = ButtonItem | ButtonItem[]
export type ButtonList = {
  label: string
  value: string
  type: ButtonType
}
export type FormFieldScope<T = any> = {
  field?: FormField
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
  onChange?: <T>({ value, field }: { value: T, field: FormField }) => void
}

interface InputField {
  type?: 'text' | 'password'
  component?: 'input'
  componentAttr?: {
    showPassword?: boolean
  } & Record<string, any>
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

export type FormField = CommonField & (
  InputField | SelectField | SelectGroupField
)
