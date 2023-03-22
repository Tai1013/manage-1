import { RouteRecordRaw } from 'vue-router'
import { $t } from '@/i18n'

export const routes: RouteRecordRaw[] = [
  { path: '/login', name: 'login', component: () => import('../views/login/index.vue'), meta: { pageName: $t('登入') } },
  {
    path: '/', name: 'pages', component: () => import('../views/layout/index.vue'), meta: { requiresAuth: true },
    children: [
      { path: '/', name: 'home', component: () => import('../views/home/index.vue'), meta: { pageName: $t('首頁') } }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
