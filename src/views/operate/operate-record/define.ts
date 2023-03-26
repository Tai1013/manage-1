import type { OperateRecord } from '@/firebase/operateServer'
export type { OperateRecord } from '@/firebase/operateServer'

export type SearchData = Omit<OperateRecord, ('id' | 'ip' | 'detail')>
