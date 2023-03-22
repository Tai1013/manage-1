import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { getAuthState } from '@/firebase/auth'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE),
  routes
})

router.beforeEach(async (to, from, next) => {
  const notPath: boolean = to.matched.length === 0
  const hasLogin = await getAuthState()
  if (to.name === 'login' && !!hasLogin) return next({ name: 'home' })
  if (to.meta.requiresAuth && !hasLogin) return next({ name: 'login' })
  next()
})

export default router
