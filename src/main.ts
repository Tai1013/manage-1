import 'normalize.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import ElementIcon from './plugin/element-icon'
import ElementPlus from './plugin/element-plus'
import Pinia from './store/install'
import I18n from './i18n/install'

const app = createApp(App)
app.use(Pinia)
app.use(I18n)
app.use(Router)
app.use(ElementIcon)
app.use(ElementPlus)
app.mount('#app')
