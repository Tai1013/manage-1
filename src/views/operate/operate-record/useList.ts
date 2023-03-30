import type { Formatter } from '@/configs/formatter'
import { reactive } from 'vue'
import { MENU_LIST, ACTION_LIST } from '@/configs/constant'

export const useList = () => {
  const pageList = reactive<GlobalApp.Option[]>([
    { label: '登入', value: 'login' }
  ])
  const operateTypeList =reactive<GlobalApp.Option[]>(ACTION_LIST.filter(list => list.operate))

  MENU_LIST.forEach(menu => {
    const childs = menu.child.filter(child => child.operate).map(child => ({
      label: child.title,
      value: child.name
    }))
    pageList.push(...childs)
  })

  const pageListFormatter:Formatter = (row, column, cellValue, index) => {
    const findOperate = pageList.find(list => list.value === cellValue)
    return findOperate ? findOperate.label : '錯誤'
  }

  return {
    pageList,
    operateTypeList,

    pageListFormatter
  }
}
