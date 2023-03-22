import { app } from '@/firebase'
import { getFirestore, doc, collection, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useMessage } from '@/composables'

type Method = 'get' | 'add' | 'delete' | 'update'
type FirestoreConfig<T> = {
  method: Method
  url: string
  data?: Record<string, T>
  apiAction?: string
}

const db = getFirestore(app)
const { $message } = useMessage()

// export const firestoreXhr = async <T>(config: FirestoreConfig<T>) => {

// }
