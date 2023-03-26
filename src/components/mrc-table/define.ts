/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Formatter } from '@/configs/formatter'
export interface TableColumns {
  prop: string
  label?: string
  visible?: boolean
  sortable?: boolean | 'custom'
  formatter?: Formatter
  attrs?: {
    fixed?: boolean | 'left' | 'right'
    minWidth?: string | number
    align?: 'left' | 'center' | 'right'
  } & Record<string, any>
}
