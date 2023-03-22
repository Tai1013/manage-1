import type { ElementIconType } from '@/plugin/element-icon'

export interface DropOption {
  label: string
  value: string | number
  disabled?: boolean
  divided?: boolean
  icon?: ElementIconType
  image?: string
}
