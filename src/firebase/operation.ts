import { ref } from 'vue'
import { app } from '@/firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getUtcTime } from '@/composables/useDateTime'
import axios from 'axios'
import router from '@/router'

type OperateConfig = {
  account: string
  apiAction: string
}

const db = getFirestore(app)

const ipify = ref(sessionStorage.getItem('ipify'))

const getIpify = async () => {
  return axios.get('https://api.ipify.org?format=json')
    .then(res => {
      sessionStorage.setItem('ipify', res.data.ip)
      return res.data.ip
    })
}

export const operateApi = async (config: OperateConfig) => {
  if (!ipify.value) ipify.value = await getIpify()
  const body = {
    Account: config.account,
    IP: ipify.value,
    OperateTime: getUtcTime(),
    OperateType: config.apiAction,
    Page: router.currentRoute.value.name,
    Platform: 'manage'
  }
  const docRef = collection(db, 'Database/Manage/Operate')
  await addDoc(docRef, body)
}
