import type { User } from 'firebase/auth'
import { ref, computed } from 'vue'
import { app } from '@/firebase'
import { getAuth, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged, signOut } from "firebase/auth";
import { errorMessageFormatter } from './formatter'
import { useMessage } from '@/composables'
import { operateApi } from './operation'
import { $t } from '@/i18n'
import dayjs from 'dayjs'
import router from '@/router';

const auth = getAuth(app)
const { $message } = useMessage()

export const currentUser = computed(() => auth.currentUser)
const setSessionInterval = ref()

export const updatedSession = () => localStorage.setItem('session', JSON.stringify(dayjs().add(4, 'hour')))

const checkSession = (user: User) => {
  const lastSignInTime = localStorage.getItem('session')
  if (lastSignInTime && dayjs().isBefore(dayjs(JSON.parse(lastSignInTime))) === false) {
    $message.error($t('error.權限超時，請重新登入'))
    setTimeout(() => signOutAuth(), 1000)
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem('session', JSON.stringify(dayjs(user.metadata.lastSignInTime).add(4, 'hour')))
    setSessionInterval.value = setInterval(() => {
      checkSession(user)
    }, 30 * 1000)
  }
})

export const getAuthState = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user)
    }, reject)
  })
}

// 匿名
export const postSignInAnonymously = async () => {
  await signInAnonymously(auth)
    .then(async (userCredential) => {
      await operateApi({
        account: 'Anonymous',
        apiAction: 'login'
      })
      $message.success($t('登入成功'))
      document.location.reload()
      router.push({ name: 'home' })
    })
    .catch((error) => {
      $message.error(errorMessageFormatter(error.code))
    })
}

// 信箱登入
export const postSignInAuth = async (body: {
  email: string
  password: string
}) => {
  await signInWithEmailAndPassword(auth, body.email, body.password)
    .then(async (userCredential) => {
      await operateApi({
        account: userCredential.user.displayName ?? '',
        apiAction: 'login'
      })
      $message.success($t('登入成功'))
      document.location.reload()
      router.push({ name: 'home' })
    })
    .catch((error) => {
      $message.error(errorMessageFormatter(error.code))
    })
}

export const signOutAuth = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem('session')
      router.push({ name: 'login' })
    })
    .catch((error) => {
      $message.error(errorMessageFormatter(error.code))
    })
}
