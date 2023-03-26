import type { User } from 'firebase/auth'
import { ref, computed } from 'vue'
import { app } from '@/firebase'
import { getAuth, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged, signOut } from "firebase/auth";
import { errorMessageFormatter } from './formatter'
import { useMessage, isDayComparison, setDayAdd } from '@/composables'
import { operateApi } from './xhr'
import { t } from '@/i18n'
import router from '@/router';

const auth = getAuth(app)
const { $message } = useMessage()

export const currentUser = computed(() => auth.currentUser)
const setSessionInterval = ref()

export const updatedSession = () => localStorage.setItem('session', JSON.stringify(setDayAdd({ value: 4, unit: 'hour' })))

const checkSession = (user: User) => {
  const lastSignInTime = localStorage.getItem('session')
  if (lastSignInTime && isDayComparison({ b: JSON.parse(lastSignInTime) }) >= 0) {
    $message.error(t('error.登入逾時，請重新登入'))
    setTimeout(() => signOutAuth(), 1000)
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    checkSession(user)
    localStorage.setItem('session', JSON.stringify(setDayAdd({ value: 4, unit: 'hour', date: user.metadata.lastSignInTime })))
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
        apiAction: 'login'
      })
      $message.success(t('登入成功'))
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
        apiAction: 'login'
      })
      $message.success(t('登入成功'))
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
      document.location.reload()
    })
    .catch((error) => {
      $message.error(errorMessageFormatter(error.code))
    })
}
