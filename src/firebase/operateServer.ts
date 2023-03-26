import { checkRequiredParams, firestoreXhr } from './xhr'
import { where } from "firebase/firestore";
import { errorMessageFormatter } from './formatter'
import { useMessage } from '@/composables'
import { isDayComparison } from '@/composables/useDateTime'

const { $message } = useMessage()

export type OperateRecord = {
  id: string
  ip: string
  detail: string
  platform: string
  account: string
  page: string
  operateType: string
  operateTime: string[]
}
export const getOperateRecord = (body: object) => {
  return new Promise<{ data: OperateRecord[], total: number }>(async (resolve, reject) => {
    const params = checkRequiredParams(body)

    const whereQuery = Object.keys(params).map(key => {
      if (key === 'operateTime') return (where(key, ">=", params[key][0]), where(key, "<=", params[key][1]))
      return where(key, "==", params[key])
    })

    await firestoreXhr({
      method: 'get',
      url: 'Database/Manage/Operate',
      query: whereQuery
    })
      .then(result => {
        if (result) resolve({
          data: result.sort((a, b) => {
            const comparison = isDayComparison({ a: a.operateTime, b: b.operateTime, sort: 'descending' })
            return comparison
          }),
          total: result.length
        })
        else resolve({
          data: [],
          total: 0
        })
      })
      .catch(error => {
        $message.error(errorMessageFormatter(error.code))
        reject(error)
      })
  })
}
