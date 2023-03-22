import { ElLoading } from 'element-plus'
import { Plugin } from 'vue'

const install: Plugin = app => {
  app.use(ElLoading)
}

export default install
