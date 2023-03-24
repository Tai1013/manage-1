namespace GlobalApp {
  type Option = {
    label: string
    value: string | number
    disabled?: boolean
  }
  type Options = import('vue').Ref<Option[]> | Option[] | Readonly<Option[]>

  type OptionGroup = {
    label: string
    options: Options
  }
  type OptionGroups = import('vue').Ref<OptionGroup[]> | OptionGroup[] | Readonly<OptionGroup[]>
  type FieldStyle = 'field-default' | 'field-time'
}
