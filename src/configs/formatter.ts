/* eslint-disable @typescript-eslint/no-explicit-any */
import type { VNode, RendererNode, RendererElement } from 'vue'
import type { TableColumnCtx } from 'element-plus'
import { getDateTime } from '@/composables/useDateTime'
import { ACTION_LIST, PLATFORM_LIST } from './constant'

export type Formatter = (row: any, column: TableColumnCtx<any>, cellValue: any, index: number) => string | VNode<RendererNode, RendererElement, Record<string, any>>

export const timeFormatter: Formatter = (row, column, cellValue, index) => {
  return getDateTime({ date: cellValue })
}

export const operateFormatter: Formatter = (row, column, cellValue, index) => {
  const findOperate = ACTION_LIST.find(list => list.value === cellValue)
  return findOperate ? findOperate.label : '錯誤'
}

export const platformFormatter: Formatter = (row, column, cellValue, index) => {
  const findOperate = PLATFORM_LIST.find(list => list.value === cellValue)
  return findOperate ? findOperate.label : '錯誤'
}
