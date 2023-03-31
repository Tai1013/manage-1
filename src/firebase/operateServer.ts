import { checkRequiredParams, firestoreXhr } from './xhr'
import { where } from "firebase/firestore";
import { errorMessageFormatter } from './formatter'
import { useMessage, useDateTime } from '@/composables'

const { $message } = useMessage()
const { getUtcTime, getDateTimeSort, checkDateTimeRange } = useDateTime()

export type OperateRecord = {
  id: string
  ip?: string
  detail?: string
  platform?: string
  account?: string
  page?: string
  operateType?: string
  operateTime?: string
}
export interface OperateSearch extends Omit<OperateRecord, ('id' | 'ip' | 'detail' | 'operateTime')> {
  operateTime?: string[]
}

export const getOperateRecord = (body: OperateSearch) => {
  return new Promise<{ data: OperateRecord[], total: number }>(async (resolve, reject) => {
    const params = checkRequiredParams(body)
    let whereQuery
    if (Object.keys(params).length === 1 && Object.keys(params)[0] === 'operateTime') {
      whereQuery = [where('operateTime', ">=", getUtcTime(params['operateTime'][0])), where('operateTime', "<=", getUtcTime(params['operateTime'][1]))]
    } else {
      whereQuery = Object.keys(params).filter(key => key !== 'operateTime').map(key => where(key, "==", params[key]))
    }

    await firestoreXhr({
      method: 'get',
      url: 'Database/Manage/Operate',
      query: whereQuery
    })
      .then((result?: OperateRecord[]) => {
        if (result) {
          const data = result
            .filter(list => checkDateTimeRange(list.operateTime, body.operateTime))
            .sort((a, b) => getDateTimeSort({ a: a.operateTime, b: b.operateTime, sort: 'descending' }))

          resolve({
            data,
            total: result.length
          })
        }
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
