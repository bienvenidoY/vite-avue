import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

const app = createApp(App)

app.use(ElementPlus, {
  size: 'small',
  zIndex: 3000,
})

app.use(Avue)
app.mount('#app')
