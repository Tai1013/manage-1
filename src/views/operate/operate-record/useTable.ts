import type { TableColumns } from '@/components'
import type { SearchData, OperateRecord } from './define'
import { ref, computed } from 'vue'
import { useLoading } from '@/composables'
import { getOperateRecord } from '@/firebase/operateServer'
import { platformFormatter, timeFormatter, operateFormatter } from '@/configs/formatter'
import { useList } from './useList'

export const useTable = (search: SearchData) => {
  const { load, unload, isLoading } = useLoading()
  const { pageListFormatter } = useList()

  const data = ref<OperateRecord[]>([])
  const columns = computed((): TableColumns[] => [
    {
      prop: 'platform',
      label: '站台',
      formatter: platformFormatter
    },
    {
      prop: 'page',
      label: '頁面',
      formatter: pageListFormatter,
      attrs: {
        align: 'center'
      }
    },
    {
      prop: 'operateType',
      label: '操作類型',
      formatter: operateFormatter,
      attrs: {
        align: 'center'
      }
    },
    {
      prop: 'operateTime',
      label: '操作時間',
      formatter: timeFormatter,
      sortable: true,
      attrs: {
        minWidth: 180
      }
    },
    {
      prop: 'account',
      label: '帳號',
      attrs: {
        minWidth: 150
      }
    },
    {
      prop: 'ip',
      label: 'IP',
      attrs: {
        minWidth: 130
      }
    }
  ])

  const reset = () => {
    data.value = []
  }

  const getOperateRecordList = async () => {
    load()
    await getOperateRecord(search)
      .then(result => data.value = result.data)
    unload()
  }

  return {
    data,
    columns,
    isLoading,

    reset,
    getOperateRecordList
  }
}
