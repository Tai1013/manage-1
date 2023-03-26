/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Query, DocumentData, QueryFieldFilterConstraint } from "firebase/firestore";
import { app } from '@/firebase'
import { getFirestore, doc, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, limit, orderBy } from "firebase/firestore";
import { ref } from 'vue'
import { getUtcTime } from '@/composables/useDateTime'
import { currentUser, updatedSession } from './auth'
import axios from 'axios'
import router from '@/router'

export const db = getFirestore(app)
const ipify = ref(sessionStorage.getItem('ipify'))

export const checkRequiredParams = (data: Record<string, any>, requiredKey: string[] = []) => {
  const params: Record<string, any> = {}
  try {
    Object.keys(data).forEach(key => {
      if (!requiredKey.includes(key)) {
        if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) params[key] = data[key]
        else if (typeof data[key] !== 'object' && ![undefined, null, ''].includes(data[key])) params[key] = data[key]
      } else {
        if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) params[key] = data[key]
        else if (typeof data[key] !== 'object' && ![undefined, null, ''].includes(data[key])) params[key] = data[key]
        else {
          console.error(key + ':api key required')
          throw Error()
        }
      }
    })
  } catch (error) {
    throw Error()
  }
  return params
}

const getIpify = async () => {
  return axios.get('https://api.ipify.org?format=json')
    .then(res => {
      sessionStorage.setItem('ipify', res.data.ip)
      return res.data.ip
    })
}

type OperateConfig = {
  apiAction: string
  detail?: string
}

export const operateApi = async (config: OperateConfig) => {
  if (!ipify.value) ipify.value = await getIpify()
  const params = checkRequiredParams({
    account: currentUser.value?.isAnonymous ? '演示帳號' : currentUser.value?.displayName,
    ip: ipify.value,
    operateTime: getUtcTime(),
    page: router.currentRoute.value.name,
    platform: 'manage',
    operateType: config.apiAction,
    detail: config.detail
  }, ['account', 'ip', 'operateTime', 'page', 'platform', 'operateType'])

  if (params) {
    const docRef = collection(db, 'Database/Manage/Operate')
    await addDoc(docRef, params)
  }
}

type Method = 'get' | 'add' | 'delete' | 'update'
type FirestoreConfig = {
  method: Method
  url: string
  data?: Query<DocumentData>
  query?: QueryFieldFilterConstraint[]
  apiAction?: string
  detail?: string
}

export const firestoreXhr = async (config: FirestoreConfig) => {
  switch (config.method) {
    case 'get':
      const docRef = collection(db, config.url)
      let queryDocs: Query<DocumentData> | undefined = undefined
      const resultDocs: any[] = []

      if (config.data && !config.query) queryDocs = config.data
      if (!config.data && config.query) queryDocs = query(docRef, ...config.query)
      if (!queryDocs) return Promise.reject('API參數錯誤')

      return await getDocs(queryDocs)
        .then(async docs => {
          updatedSession()
          docs.forEach(doc => {
            resultDocs.push({
              id: doc.id,
              ...doc.data()
            })
          })
          if (config.apiAction) await operateApi({
            apiAction: config.apiAction,
            detail: config.detail
          })
          return Promise.resolve(resultDocs)
        })
        .catch(error => Promise.reject(error))
      break;
  }
}
