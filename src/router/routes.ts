import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/login', name: 'login', component: () => import('@/views/login/index.vue') },
  {
    path: '/', name: 'pages', component: () => import('@/views/layout/index.vue'), meta: { requiresAuth: true },
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home/index.vue') },
      { path: '/operate/operate-record', name: 'operate-record', component: () => import('@/views/operate/operate-record/index.vue') }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
